// components/Payment/PhonePeEnrollButton.tsx

'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Loader2,
  CreditCard,
  AlertCircle,
  BookOpen,
  Shield,
  BadgeCheck,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { toast } from 'sonner';
import CouponInput from '../global/CouponInput';
import LoginModal from '../Auth/loginModal';
// import CouponInput from './CouponInput';

interface PhonePeEnrollButtonProps {
  courseId: string;
  courseName: string;
  amount: number;
  currency?: string;
  Btn?: React.ReactNode;
}

const PhonePeEnrollButton: React.FC<PhonePeEnrollButtonProps> = ({
  courseId,
  courseName,
  amount,
  currency = 'INR',
  Btn,
}) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [couponId, setCouponId] = useState<string | undefined>();
  const [openLogin, setOpenLogin] = useState(false);
  const [couponDetails, setCouponDetails] = useState<any | null | undefined>(null);

  // Check if user is logged in
  const isAuthenticated = typeof window !== 'undefined' && !!localStorage.getItem('token');
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  const user = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
  const userData = user ? JSON.parse(user) : null;

  const [isPaid, setIsPaid] = useState(false);

  const handleCouponApply = (id: string | undefined, coupon: any) => {
    setCouponId(id);
    setCouponDetails(coupon);
  };

  // Calculate final amount with discounts
  const baseAmount = amount;
  let discount = 0;
  let gst = 0;
  let flatOff = 0;
  let finalAmount = baseAmount;

  // Apply flat 20% discount
  flatOff = 0.2 * finalAmount;
  finalAmount -= flatOff;

  // Apply coupon discount
  if (couponDetails) {
    if (couponDetails.type === 'percentage') {
      discount = (couponDetails.discount / 100) * finalAmount;
    } else if (couponDetails.type === 'fixed') {
      discount = couponDetails.discount;
    }
    finalAmount -= discount;
  }

  // Add 18% GST
  gst = 0.18 * finalAmount;
  finalAmount += gst;

  // const handleEnrollClick = () => {
  //   // If not authenticated, redirect to login with return URL
  //   if (!isAuthenticated) {
  //     const returnUrl = `/course/${courseId}`;
  //     router.push(`/login?redirect=${encodeURIComponent(returnUrl)}`);
  //     return;
  //   }

  //   // If authenticated, open payment dialog
  //   setOpen(true);
  // };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const paidCourses = JSON.parse(localStorage.getItem('paidCourses') || '[]');
      setIsPaid(paidCourses.includes(courseId));
    }
  }, [courseId]);

  const handleEnrollClick = () => {
    if (!isAuthenticated) {
      setOpenLogin(true);
      return;
    }
    setOpen(true);
  };

  const initiatePayment = async () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('paymentReturnUrl', window.location.href);
    }
    console.log(window.location.href);
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/payments/initiate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          courseId,
          amount: finalAmount,
          currency,
          callbackUrl: `${window.location.origin}/payment/callback`,
          couponCode: couponId,
        }),
      });

      if (response.status === 401) {
        // clear auth
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        setOpen(false); // close payment dialog
        setOpenLogin(true); // 🔥 open login modal
        toast.error('Session expired. Please login again.');
        return;
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Payment initiation failed');
      }

      // Store payment info for callback
      if (typeof window !== 'undefined') {
        localStorage.setItem(
          'pendingPayment',
          JSON.stringify({
            merchantOrderId: data.data.merchantOrderId,
            orderId: data.data.orderId,
            courseId,
            courseName,
          })
        );
      }

      // Redirect to PhonePe payment page
      window.location.href = data.data.redirectUrl;

      toast.success('Redirecting to PhonePe...');
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to initiate payment';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* {!isAuthenticated ? (
        // Show simple button when not logged in
        Btn ? (
          <div onClick={handleEnrollClick}>{Btn}</div>
        ) : (
          <Button
            onClick={handleEnrollClick}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-5 rounded-lg font-medium"
          >
            <CreditCard className="mr-2 h-5 w-5" />
            Buy Now - Login Required
          </Button>
        )
      ) : (
        // Show payment dialog when logged in
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            {Btn ? (
              Btn
            ) : (
              <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-5 rounded-lg font-medium">
                <CreditCard className="mr-2 h-5 w-5" />
                Buy Now
              </Button>
            )}
          </DialogTrigger> */}

      {!isAuthenticated ? (
        Btn ? (
          <div onClick={handleEnrollClick}>{Btn}</div>
        ) : (
          <Button
            onClick={handleEnrollClick}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-5 rounded-lg font-medium"
          >
            <CreditCard className="mr-2 h-5 w-5" />
            Buy Now – Login Required
          </Button>
        )
      ) : isPaid ? (
        /* CASE 2: AUTHENTICATED + ALREADY PAID ✅ */
        <Button
          disabled
          className="bg-green-600 text-white px-6 py-5 rounded-lg font-medium cursor-not-allowed"
        >
          Enrolled
        </Button>
      ) : (
        /* CASE 3: AUTHENTICATED + NOT PAID */
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            {Btn ? (
              Btn
            ) : (
              <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-5 rounded-lg font-medium">
                <CreditCard className="mr-2 h-5 w-5" />
                Buy Now
              </Button>
            )}
          </DialogTrigger>

          <DialogContent className="sm:max-w-[450px] 2xl:max-w-[60vw] max-h-[80vh] overflow-y-auto">
            <div className="relative">
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
                  {currency} {finalAmount.toFixed(2)} (Inc. 18% GST)
                </span>
              </div>

              {/* User Info */}
              {userData && (
                <div className="p-4 bg-green-50 border border-green-100 rounded-lg mb-4">
                  <div className="flex items-center mb-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2" />
                    <span className="font-medium text-green-800">Logged in as</span>
                  </div>
                  <div className="ml-7 space-y-1 text-sm text-gray-700">
                    <p>{userData.name}</p>
                    <p>{userData.email}</p>
                  </div>
                </div>
              )}

              {/* Order Summary */}
              <div className="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg space-y-3 border border-blue-100 mb-4">
                <h3 className="font-semibold text-blue-800 mb-2 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Order Summary
                </h3>

                <div className="space-y-2 border p-4 rounded-xl bg-white">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="text-gray-600">Base Amount</span>
                    <span className="text-gray-800 font-medium">₹{baseAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-blue-100">
                    <span className="text-gray-600">Offer</span>
                    <span className="font-medium text-red-700">-20%</span>
                  </div>
                  {couponDetails && (
                    <div className="flex justify-between items-center border-b py-2">
                      <span className="text-gray-600">Coupon Discount</span>
                      <span className="font-medium text-red-700">
                        {couponDetails.type === 'percentage'
                          ? `-${couponDetails.discount}%`
                          : `-₹${couponDetails.discount}`}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between items-center border-b py-2">
                    <span className="text-gray-600">GST (18%)</span>
                    <span className="font-medium text-green-700">+₹{gst.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 text-lg font-bold text-blue-800">
                    <span>Total Payable</span>
                    <span>₹{finalAmount.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Coupon Input */}
              <div className="mb-4">
                <CouponInput currentAmount={finalAmount} onCouponApply={handleCouponApply} />
              </div>

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg mb-4 flex items-start">
                  <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{error}</span>
                </div>
              )}

              {/* PhonePe Info */}
              <div className="p-4 mb-4 bg-white border border-blue-100 rounded-lg shadow-sm">
                <h3 className="font-medium text-blue-800 mb-2">PhonePe Payment</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Pay using UPI, Cards, Net Banking, or Wallets via PhonePe's secure gateway.
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

              {/* Pay Button */}
              <Button
                onClick={initiatePayment}
                disabled={isLoading}
                className="w-full p-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Proceed to PhonePe Payment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>

              {/* Footer */}
              <div className="text-xs text-center text-gray-500 mt-6 space-y-2">
                <p>By enrolling, you agree to our terms and conditions.</p>
                <div className="flex items-center justify-center space-x-4">
                  <div className="flex items-center">
                    <Shield className="h-3 w-3 text-gray-400 mr-1" />
                    <span>Secure Payment</span>
                  </div>
                  <div className="flex items-center">
                    <BadgeCheck className="h-3 w-3 text-gray-400 mr-1" />
                    <span>PhonePe Gateway</span>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
      {/* Login Modal */}
      {openLogin && <LoginModal open={openLogin} onOpenChange={setOpenLogin} />}
    </>
  );
};

export default PhonePeEnrollButton;
