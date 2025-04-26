'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import axios from 'axios';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  Loader2,
  CreditCard,
  User as UserIcon,
  Mail,
  Phone,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  ArrowLeft,
  Shield,
  Clock,
  BookOpen,
  BadgeCheck,
  CreditCard as CreditCardIcon,
} from 'lucide-react';
import { toast } from 'sonner';
import { handleErrors } from '@/lib/handleError';
import { useRouter } from 'next/navigation';
import CCAvenue from '@/lib/CCAvenue';

// Form schema that matches the backend API exactly
const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  courseId: z.string().length(24, 'Invalid course ID'),
});

type FormValues = z.infer<typeof formSchema>;

interface PaymentFormProps {
  courseId: string;
  amount: number;
  courseName: string;
  currency?: string;
  open?: boolean;
  setOpenProp?: React.Dispatch<React.SetStateAction<boolean>>;
}

// Payment flow steps
enum PaymentStep {
  FORM = 'FORM',
  PAYMENT = 'PAYMENT',
  PROCESSING = 'PROCESSING',
  CONFIRMATION = 'CONFIRMATION',
  ERROR = 'ERROR',
}

// CCAvenue Payment Form
const CCAvPaymentForm: React.FC<PaymentFormProps> = ({
  courseId,
  amount,
  courseName,
  currency = 'INR',
  open: openProp,
  setOpenProp,
}) => {
  const host = typeof window !== 'undefined' ? window.location.origin : '';
  const router = useRouter();
  const [open, setOpen] = useState(openProp ?? false);
  const [currentStep, setCurrentStep] = useState<PaymentStep>(PaymentStep.FORM);
  const [user, setUser] = useState<any>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [paymentData, setPaymentData] = useState<any>(null);
  const [statusCheckInterval, setStatusCheckInterval] = useState<NodeJS.Timeout | null>(null);
  const [checkingStatus, setCheckingStatus] = useState(false);

  const OfferAmount = amount - amount * 0.2;
  const finalAmount = OfferAmount + OfferAmount * 0.18;

  // Initialize form with React Hook Form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      courseId: courseId,
    },
  });

  // Clear everything when dialog closes
  useEffect(() => {
    if (!open) {
      resetAll();
    }
    return () => {
      if (statusCheckInterval) {
        clearInterval(statusCheckInterval);
      }
    };
  }, [open]);

  const resetAll = () => {
    setCurrentStep(PaymentStep.FORM);
    setUser(null);
    setAccessToken(null);
    setError(null);
    setPaymentData(null);
    form.reset();
    if (statusCheckInterval) {
      clearInterval(statusCheckInterval);
      setStatusCheckInterval(null);
    }
  };

  // Handle form submission for user registration
  const handleUserRegistration = async (data: FormValues) => {
    setIsLoading(true);
    setError(null);

    try {
      // Call the register-user endpoint
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/ccavenue/register-user`,
        data
      );

      if (!response.data.success) {
        throw new Error(response.data.message || 'Registration failed');
      }

      // Store user and token
      setUser(response.data.data.user);
      setAccessToken(response.data.data.accessToken);

      // Proceed to payment step
      setCurrentStep(PaymentStep.PAYMENT);

      toast.success('Registration Successful: Your information has been verified.');
    } catch (err: any) {
      const errorMessage = handleErrors(err);
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Initiate CCAvenue payment
  const initiatePayment = async () => {
    setIsLoading(true);
    setError(null);

    try {
      if (!user) {
        throw new Error('Missing user information');
      }

      // Prepare CCAvenue payment data
      let paymentData = {
        merchant_id: '2492757', // Merchant ID (Required)
        order_id: `ORD_${Date.now()}`, // Generate unique Order ID
        amount: finalAmount.toString(), // Payment Amount (Required)
        currency: currency, // Payment Currency Type (Required)
        billing_email: user.email, // Billing Email
        billing_name: user.name, // Billing Name
        billing_tel: user.phone, // Billing Mobile Number
        redirect_url: `${host}/api/ccavenue-handle`, // Success URL (Required)
        cancel_url: `${host}/api/ccavenue-handle`, // Failed/Cancel Payment URL (Required)
        language: 'EN', // Language (Default English)
        merchant_param1: courseId, // Course ID as parameter
      };

      paymentData.redirect_url = `${host}/api/ccavenue-handle?paymentId=${paymentData.order_id}&courseId=${paymentData.merchant_param1}&userId=${user._id}&amount=${paymentData.amount}`;
      paymentData.cancel_url = `${host}/api/ccavenue-handle?paymentId=${paymentData.order_id}&courseId=${paymentData.merchant_param1}&userId=${user._id}&amount=${paymentData.amount}`;

      // Get encrypted order data from CCAvenue utility
      let encReq = CCAvenue.getEncryptedOrder(paymentData);
      let accessCode = 'AVHG70KE18CC51GHCC';
      let URL = `https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction&merchant_id=${paymentData.merchant_id}&encRequest=${encReq}&access_code=${accessCode}`;

      // Store payment data for reference
      setPaymentData({
        payment: {
          merchantOrderId: paymentData.order_id,
        },
        ccavData: {
          encRequest: encReq,
          accessCode: accessCode,
          ccavSubmitUrl: URL,
        },
      });

      // Move to processing step
      setCurrentStep(PaymentStep.PROCESSING);

      // Start checking for payment status
      startStatusCheck(paymentData.order_id);

      // Redirect to CCAvenue payment gateway
      router.push(URL);

      toast.success('Payment Initiated: Complete the payment in the secure payment form.');
    } catch (err: any) {
      const errorMessage =
        typeof err === 'string' ? err : err.message || 'Failed to initiate payment';
      setError(errorMessage);
      setCurrentStep(PaymentStep.ERROR);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Periodically check payment status
  const startStatusCheck = (merchantOrderId: string) => {
    // Clear any existing interval
    if (statusCheckInterval) {
      clearInterval(statusCheckInterval);
    }

    // Set up new interval (every 5 seconds)
    const interval = setInterval(() => {
      checkPaymentStatus(merchantOrderId);
    }, 5000);

    setStatusCheckInterval(interval);
  };

  // Check payment status function
  const checkPaymentStatus = async (merchantOrderId: string) => {
    if (checkingStatus) return; // Prevent multiple simultaneous checks

    try {
      setCheckingStatus(true);

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/ccavenue/check-status/${merchantOrderId}`
      );

      if (response.data.success) {
        const { status } = response.data.data;

        // If payment is complete or failed, update UI
        if (status === 'SUCCESS') {
          if (statusCheckInterval) {
            clearInterval(statusCheckInterval);
            setStatusCheckInterval(null);
          }
          setCurrentStep(PaymentStep.CONFIRMATION);
          toast.success('Payment Successful: Your enrollment has been confirmed!');
        } else if (status === 'FAILED' || status === 'CANCELLED') {
          if (statusCheckInterval) {
            clearInterval(statusCheckInterval);
            setStatusCheckInterval(null);
          }
          setError(`Payment ${status.toLowerCase()}. Please try again.`);
          setCurrentStep(PaymentStep.ERROR);
          toast.error(`Payment ${status.toLowerCase()}. Please try again.`);
        }
      }
    } catch (error) {
      console.error('Error checking payment status:', error);
      // Don't update UI on error, just keep checking
    } finally {
      setCheckingStatus(false);
    }
  };

  // Manual check for payment status (for user button)
  const handleManualStatusCheck = async () => {
    if (!paymentData?.payment?.merchantOrderId) return;

    setIsLoading(true);

    try {
      await checkPaymentStatus(paymentData.payment.merchantOrderId);

      // If we reach here and status hasn't changed, let the user know
      toast.info('Your payment is still being processed. Please wait a moment.');
    } finally {
      setIsLoading(false);
    }
  };

  // Render different content based on the current step
  const renderContent = () => {
    switch (currentStep) {
      case PaymentStep.FORM:
        return (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold text-center flex items-center justify-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600" />
                Enroll in {courseName}
              </DialogTitle>
            </DialogHeader>

            <div className="flex items-center justify-between my-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-sm border border-blue-100">
              <div className="flex items-center">
                <CreditCard className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">Course Fee</span>
              </div>
              <span className="font-bold text-lg text-blue-700">
                {currency} {finalAmount.toFixed(2)} (Inclusive of 18% GST)
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="flex flex-col items-center p-3 bg-green-50 rounded-lg border border-green-100">
                <BadgeCheck className="h-5 w-5 text-green-600 mb-1" />
                <span className="text-xs text-center text-green-700">Secure Payment</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-blue-50 rounded-lg border border-blue-100">
                <Clock className="h-5 w-5 text-blue-600 mb-1" />
                <span className="text-xs text-center text-blue-700">Instant Access</span>
              </div>
            </div>

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg mb-4 flex items-start">
                <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            <form onSubmit={form.handleSubmit(handleUserRegistration)} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <UserIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    {...form.register('name')}
                    id="name"
                    className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
                {form.formState.errors.name && (
                  <p className="text-sm text-red-500 mt-1">{form.formState.errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    {...form.register('email')}
                    id="email"
                    type="email"
                    className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                {form.formState.errors.email && (
                  <p className="text-sm text-red-500 mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    {...form.register('phone')}
                    id="phone"
                    className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Your phone number"
                  />
                </div>
                {form.formState.errors.phone && (
                  <p className="text-sm text-red-500 mt-1">{form.formState.errors.phone.message}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full p-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Continue to Payment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </>
        );

      case PaymentStep.PAYMENT:
        return (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold text-center flex items-center justify-center gap-2">
                <CreditCard className="h-5 w-5 text-blue-600" />
                Complete Payment
              </DialogTitle>
            </DialogHeader>

            <div className="my-4 space-y-4">
              <div className="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg space-y-3 border border-blue-100">
                <h3 className="font-semibold text-blue-800 mb-2 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Order Summary
                </h3>
                <div className="flex justify-between items-center py-2 border-b border-blue-100">
                  <span className="text-gray-600">Course</span>
                  <span className="font-medium">{courseName}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-blue-100">
                  <span className="text-gray-600">Amount</span>
                  <span className="font-medium text-blue-700">
                    {currency} {amount.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-blue-100">
                  <span className="text-gray-600">Offer</span>
                  <span className="font-medium text-red-700">-20%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-blue-100">
                  <span className="text-gray-600">GST</span>
                  <span className="font-medium text-green-700">+18%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-blue-100">
                  <span className="text-gray-600">Name</span>
                  <span className="font-medium">{user?.name}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Email</span>
                  <span className="font-medium">{user?.email}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-blue-100">
                  <span className="text-gray-600">Final Amount</span>
                  <span className="font-medium text-blue-700">INR {finalAmount.toFixed(2)} </span>
                </div>
              </div>

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg mb-4 flex items-start">
                  <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{error}</span>
                </div>
              )}

              <div className="p-4 bg-blue-50 border border-blue-100 text-blue-700 rounded-lg">
                <div className="flex items-start">
                  <Shield className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-blue-600" />
                  <div>
                    <p className="text-sm font-medium mb-1">Secure Payment via CCAvenue</p>
                    <p className="text-xs">
                      You'll be redirected to CCAvenue to complete your purchase securely.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <Button
                variant="outline"
                onClick={() => setCurrentStep(PaymentStep.FORM)}
                disabled={isLoading}
                className="flex-1"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>

              <Button
                onClick={initiatePayment}
                disabled={isLoading}
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCardIcon className="mr-2 h-5 w-5" />
                    Pay Now
                  </>
                )}
              </Button>
            </div>
          </>
        );

      case PaymentStep.PROCESSING:
        return (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold text-center flex items-center justify-center gap-2">
                <CreditCardIcon className="h-5 w-5 text-blue-600" />
                Complete Your Payment
              </DialogTitle>
            </DialogHeader>

            <div className="my-3 text-center">
              <p className="text-gray-600 mb-4">
                You are being redirected to CCAvenue payment gateway. Please do not refresh this
                page.
              </p>
            </div>

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg mb-4 flex items-start">
                <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            <div className="flex flex-col space-y-3 mt-3">
              <Button
                variant="outline"
                onClick={handleManualStatusCheck}
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                )}
                I've Completed Payment
              </Button>

              <div className="text-center text-xs text-gray-500 mt-2">
                <p>Secured by CCAvenue Payment Gateway</p>
              </div>
            </div>
          </>
        );

      case PaymentStep.CONFIRMATION:
        return (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold text-center text-green-600 flex items-center justify-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Payment Successful
              </DialogTitle>
            </DialogHeader>

            <div className="flex flex-col items-center justify-center py-6">
              <div className="mb-4 bg-green-100 p-4 rounded-full">
                <CheckCircle2 className="h-12 w-12 text-green-600" />
              </div>

              <h2 className="text-xl font-semibold text-center mb-2">Thank You!</h2>
              <p className="text-center text-gray-600 mb-6">
                Your enrollment in <span className="font-medium text-blue-600">{courseName}</span>{' '}
                has been confirmed.
              </p>

              <div className="w-full p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg mb-6 border border-green-100">
                <div className="flex justify-between items-center mb-2 py-2 border-b border-green-100">
                  <span className="text-gray-600">Amount Paid</span>
                  <span className="font-medium text-green-700">
                    {currency} {amount.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Order ID</span>
                  <span className="font-medium text-green-700">
                    {paymentData?.payment?.merchantOrderId || 'N/A'}
                  </span>
                </div>
              </div>

              <Button
                onClick={() => setOpen(false)}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Access Your Course
              </Button>
            </div>
          </>
        );

      case PaymentStep.ERROR:
        return (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold text-center text-red-600 flex items-center justify-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Payment Error
              </DialogTitle>
            </DialogHeader>

            <div className="flex flex-col items-center justify-center py-6">
              <div className="mb-4 bg-red-100 p-4 rounded-full">
                <AlertCircle className="h-12 w-12 text-red-600" />
              </div>

              <h2 className="text-xl font-semibold text-center mb-2">Something Went Wrong</h2>

              {error && (
                <div className="p-4 w-full bg-red-50 border border-red-200 text-red-600 rounded-lg mb-4">
                  <p className="text-sm">{error}</p>
                </div>
              )}

              <div className="space-y-3 w-full">
                <Button
                  onClick={() => setCurrentStep(PaymentStep.PAYMENT)}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Try Again
                </Button>

                <Button variant="outline" onClick={() => setOpen(false)} className="w-full">
                  Cancel
                </Button>
              </div>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {!openProp && (
          <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-5 rounded-lg font-medium">
            <CreditCardIcon className="mr-2 h-5 w-5" />
            Buy Now
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px] 2xl:max-w-[60vw] h-[80vh] overflow-y-auto">
        <div className="relative">
          {/* BSkilling logo/branding at the top */}
          {/* {currentStep !== PaymentStep.CONFIRMATION && currentStep !== PaymentStep.ERROR && (
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-md">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white h-12 w-12 rounded-full flex items-center justify-center font-bold text-lg">
                BS
              </div>
            </div>
          )} */}
          {renderContent()}
          <div className="p-4 mb-4 bg-white border border-blue-100 rounded-lg shadow-sm">
            <h3 className="font-medium text-blue-800 mb-2">CCAvenue Payment</h3>
            <p className="text-sm text-gray-600 mb-3">
              Pay using Credit/Debit Card, Net Banking, UPI, or Wallet via CCAvenue's secure
              gateway.
            </p>
            <div className="grid grid-cols-4 gap-2 items-center">
              <div className="flex justify-center">
                <img src="/payment-logo/Visa.png" alt="Visa" className="h-6" />
              </div>
              <div className="flex justify-center">
                <img src="/payment-logo/Mastercard.png" alt="Mastercard" className="h-14" />
              </div>
              <div className="flex justify-center">
                <img src="/payment-logo/RuPay.png" alt="RuPay" className="h-6" />
              </div>
              <div className="flex justify-center">
                <img src="/payment-logo/UPI.png" alt="UPI" className="h-6" />
              </div>
            </div>
          </div>
          {currentStep !== PaymentStep.CONFIRMATION &&
            currentStep !== PaymentStep.ERROR &&
            currentStep !== PaymentStep.PROCESSING && (
              <div className="text-xs text-center text-gray-500 mt-6 space-y-2">
                <p>By enrolling, you agree to our terms and conditions.</p>
                <div className="flex items-center justify-center space-x-4">
                  <div className="flex items-center">
                    <Shield className="h-3 w-3 text-gray-400 mr-1" />
                    <span>Secure Payment</span>
                  </div>
                  <div className="flex items-center">
                    <BadgeCheck className="h-3 w-3 text-gray-400 mr-1" />
                    <span>Quality Guarantee</span>
                  </div>
                </div>
              </div>
            )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CCAvPaymentForm;
