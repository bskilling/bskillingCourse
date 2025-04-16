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
  ExternalLink,
  Shield,
  Clock,
  BookOpen,
  BadgeCheck,
} from 'lucide-react';
import { usePaymentStore } from '@/lib/zustand/phone.store';
import { toast } from 'sonner';
import { handleErrors } from '@/lib/handleError';

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
}

// Payment flow steps
enum PaymentStep {
  FORM = 'FORM',
  PAYMENT = 'PAYMENT',
  PROCESSING = 'PROCESSING',
  CONFIRMATION = 'CONFIRMATION',
  ERROR = 'ERROR',
}

const PaymentFormDialog: React.FC<PaymentFormProps> = ({
  courseId,
  amount,
  courseName,
  currency = 'INR',
}) => {
  const [open, setOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<PaymentStep>(PaymentStep.FORM);
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);
  const [paymentDetails, setPaymentDetails] = useState<any>(null);

  // Get Zustand store values and functions
  const {
    user,
    phonepeToken,
    isLoading,
    error,
    setUser,
    setPhonePeToken,
    setLoading,
    setError,
    reset,
    setPaymentResponse,
  } = usePaymentStore();

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

  // Reset store and form when dialog is closed
  useEffect(() => {
    if (!open) {
      reset();
      setCurrentStep(PaymentStep.FORM);
      setRedirectUrl(null);
      setPaymentDetails(null);
      // setPaymentResponse(undefined);
      form.reset();
    }
  }, [open, reset, form]);

  // Handle payment redirect when URL is available
  useEffect(() => {
    if (redirectUrl && currentStep === PaymentStep.PROCESSING) {
      // Open the payment window in a new tab
      const paymentWindow = window.open(redirectUrl, '_blank');

      if (!paymentWindow) {
        // If popup was blocked, show error
        toast.error(handleErrors(new Error('Payment window was blocked.')));
      }
    }
  }, [redirectUrl, currentStep]);

  const handleUserRegistration = async (data: FormValues) => {
    setLoading(true);
    setError(null);

    try {
      // Step 1: Get token from server
      const tokenResponse = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/phonepe/token`,
        data
      );

      if (!tokenResponse.data.success) {
        throw new Error(tokenResponse.data.message || 'Failed to get token');
      }

      // Store user and token in Zustand store
      setUser(tokenResponse.data.data.user);
      setPhonePeToken(tokenResponse.data.data.phonepeToken);

      // Proceed to payment step
      setCurrentStep(PaymentStep.PAYMENT);

      toast.success('Registration Successful: Your information has been verified.');
    } catch (err: any) {
      const errorMessage = handleErrors(err);
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const initiatePayment = async () => {
    setLoading(true);
    setError(null);

    try {
      if (!user || !phonepeToken) {
        throw new Error('Missing user or token information');
      }

      // Step 2: Initiate payment with the token
      const paymentResponse = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/phonepe/initiate-payment`,
        {
          userId: user._id,
          courseId: courseId,
          amount: amount * 100, // Convert to paisa
          accessToken: phonepeToken.access_token,
          ipAddress: '',
          userAgent: navigator.userAgent,
        }
      );

      if (!paymentResponse.data.success) {
        throw new Error(paymentResponse.data.message || 'Failed to initiate payment');
      }

      // Store payment details and redirect URL
      setPaymentDetails(paymentResponse.data.data.payment);
      setPaymentResponse(paymentResponse.data.data.payment);
      setRedirectUrl(paymentResponse.data.data.redirectUrl);

      // Move to processing step
      setCurrentStep(PaymentStep.PROCESSING);

      toast.success("Payment Initiated: You'll be redirected to complete your payment");
    } catch (err: any) {
      const errorMessage = handleErrors(err);
      setError(errorMessage);
      setCurrentStep(PaymentStep.ERROR);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleManualRedirect = () => {
    if (redirectUrl) {
      window.open(redirectUrl, '_blank');
      toast.success('Redirecting to Payment: Complete your payment in the new window');
    }
  };

  // Check payment status (implementation would depend on your backend API)
  const checkPaymentStatus = async () => {
    if (!paymentDetails?.merchantOrderId) return;

    try {
      setLoading(true);

      // Call your payment status check endpoint
      const statusResponse = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/phonepe/check-status/${paymentDetails.merchantOrderId}`
      );

      if (statusResponse.data.success && statusResponse.data.data.status === 'SUCCESS') {
        setCurrentStep(PaymentStep.CONFIRMATION);
        toast.success('Payment Successful: Your enrollment has been confirmed!');
      } else {
        toast.error('Payment not yet completed. Please complete the payment process.');
      }
    } catch (err) {
      const errorMessage = handleErrors(err);
      console.error('Error checking payment status:', errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
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
                {currency} {amount.toFixed(2)}
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
                  <span className="text-gray-600">Name</span>
                  <span className="font-medium">{user?.name}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Email</span>
                  <span className="font-medium">{user?.email}</span>
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
                    <p className="text-sm font-medium mb-1">Secure Payment via PhonePe</p>
                    <p className="text-xs">
                      You'll be redirected to complete your payment securely through PhonePe's
                      payment gateway.
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
                    <CreditCard className="mr-2 h-5 w-5" />
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
                <CreditCard className="h-5 w-5 text-blue-600" />
                Payment in Progress
              </DialogTitle>
            </DialogHeader>

            <div className="flex flex-col items-center justify-center py-6">
              <div className="mb-6">
                <div className="relative flex items-center justify-center">
                  <div className="absolute animate-ping h-16 w-16 rounded-full bg-blue-400 opacity-30"></div>
                  <div className="relative rounded-full h-16 w-16 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                    <CreditCard className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>

              <h2 className="text-xl font-semibold text-center mb-2">Processing Your Payment</h2>
              <p className="text-center text-gray-600 mb-4 max-w-xs">
                Complete your payment in the PhonePe window that opened. If no window appeared,
                click the button below.
              </p>

              {error && (
                <div className="p-4 w-full bg-yellow-50 border border-yellow-200 text-yellow-700 rounded-lg mb-4">
                  <p className="text-sm">{error}</p>
                </div>
              )}

              <div className="space-y-3 w-full">
                <Button
                  onClick={handleManualRedirect}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Open Payment Page
                </Button>

                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(PaymentStep.PAYMENT)}
                  className="w-full"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Payment
                </Button>

                <Button
                  variant="ghost"
                  onClick={checkPaymentStatus}
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
              </div>
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
                  <span className="text-gray-600">Payment ID</span>
                  <span className="font-medium text-green-700">
                    {paymentDetails?.merchantOrderId ||
                      `PH${Math.random().toString(36).substring(2, 10).toUpperCase()}`}
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
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-green-600 to-green-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-lg font-medium">
          <BookOpen className="mr-2 h-5 w-5" />
          Buy Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px]">
        <div className="relative">
          {/* BSkilling logo/branding at the top */}
          {currentStep !== PaymentStep.CONFIRMATION && currentStep !== PaymentStep.ERROR && (
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-md">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white h-12 w-12 rounded-full flex items-center justify-center font-bold text-lg">
                BS
              </div>
            </div>
          )}

          {renderContent()}

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

export default PaymentFormDialog;
