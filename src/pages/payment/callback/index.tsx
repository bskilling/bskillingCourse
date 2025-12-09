// app/payment/callback/page.tsx (UPDATED)

'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Loader2, CheckCircle2, XCircle, AlertCircle, Ban } from 'lucide-react';
import { Button } from '@/components/ui/button';

function PaymentCallbackContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<'checking' | 'success' | 'failed' | 'cancelled' | 'error'>(
    'checking'
  );
  const [paymentDetails, setPaymentDetails] = useState<any>(null);

  useEffect(() => {
    const merchantOrderId = searchParams.get('merchantOrderId');
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

    if (!merchantOrderId) {
      setStatus('error');
      return;
    }

    const checkPaymentStatus = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/payments/status/${merchantOrderId}`,
          {
            headers: {
              ...(token ? { Authorization: `Bearer ${token}` } : {}),
            },
          }
        );

        const data = await response.json();

        if (data.success) {
          setPaymentDetails(data.data);

          if (data.data.status === 'SUCCESS') {
            setStatus('success');
            if (typeof window !== 'undefined') {
              localStorage.removeItem('pendingPayment');
            }
            setTimeout(() => {
              router.push('/my-courses');
            }, 3000);
          } else if (data.data.status === 'CANCELLED') {
            setStatus('cancelled');
          } else if (data.data.status === 'FAILED') {
            setStatus('failed');
          } else {
            setTimeout(checkPaymentStatus, 2000);
          }
        } else {
          setStatus('error');
        }
      } catch (error) {
        console.error('Error checking payment status:', error);
        setStatus('error');
      }
    };

    checkPaymentStatus();
  }, [searchParams, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-md w-full">
        {status === 'checking' && (
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
            <div className="mb-6">
              <div className="mx-auto w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Verifying Payment</h2>
            <p className="text-gray-600 mb-6">
              Please wait while we confirm your payment with PhonePe...
            </p>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
              <div
                className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                style={{ animationDelay: '0.1s' }}
              ></div>
              <div
                className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                style={{ animationDelay: '0.2s' }}
              ></div>
            </div>
          </div>
        )}

        {status === 'success' && (
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
            <div className="mb-6">
              <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center animate-bounce">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-green-600 mb-2">Payment Successful!</h2>
            <p className="text-gray-600 mb-6">
              Your enrollment has been confirmed. You now have access to the course.
            </p>

            {paymentDetails && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 text-left">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount Paid:</span>
                    <span className="font-semibold text-green-700">
                      ₹{(paymentDetails.amount / 100).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Transaction ID:</span>
                    <span className="font-mono text-xs text-gray-800">
                      {paymentDetails.transactionId || paymentDetails.merchantOrderId}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* <Button
              onClick={() => router.push('/my-courses')}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
            >
              View My Courses....
            </Button> */}
            <Button
              onClick={() => {
                const redirectUrl = localStorage.getItem('paymentReturnUrl') || '/my-courses';
                console.log('Redirecting to:', redirectUrl);
                router.push(redirectUrl);
              }}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
            >
              View My Courses
            </Button>

            <p className="text-xs text-gray-500 mt-4">Redirecting automatically in 3 seconds...</p>
          </div>
        )}

        {status === 'cancelled' && (
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
            <div className="mb-6">
              <div className="mx-auto w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
                <Ban className="w-12 h-12 text-orange-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-orange-600 mb-2">Payment Cancelled</h2>
            <p className="text-gray-600 mb-6">
              You cancelled the payment. No charges were made to your account.
            </p>

            {paymentDetails && (
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6 text-left">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Order ID:</span>
                    <span className="font-mono text-xs text-gray-800">
                      {paymentDetails.merchantOrderId}
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-3">
              <Button
                onClick={() => router.push('/courses')}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                Try Again
              </Button>
              <Button onClick={() => router.push('/')} variant="outline" className="w-full">
                Go Home
              </Button>
            </div>
          </div>
        )}

        {status === 'failed' && (
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
            <div className="mb-6">
              <div className="mx-auto w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
                <XCircle className="w-12 h-12 text-red-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-red-600 mb-2">Payment Failed</h2>
            <p className="text-gray-600 mb-6">
              Your payment could not be processed.. Please try again or contact support if the issue
              persists.
            </p>

            {paymentDetails && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-left">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Order ID:</span>
                    <span className="font-mono text-xs text-gray-800">
                      {paymentDetails.merchantOrderId}
                    </span>
                  </div>
                  {paymentDetails.failureReason && (
                    <div className="mt-2 pt-2 border-t border-red-200">
                      <p className="text-red-600 text-xs">Reason: {paymentDetails.failureReason}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="space-y-3">
              <Button
                onClick={() => router.push('/courses')}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                Try Again
              </Button>
              <Button onClick={() => router.push('/support')} variant="outline" className="w-full">
                Contact Support
              </Button>
            </div>
          </div>
        )}

        {status === 'error' && (
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
            <div className="mb-6">
              <div className="mx-auto w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center">
                <AlertCircle className="w-12 h-12 text-yellow-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-yellow-600 mb-2">Something Went Wrong</h2>
            <p className="text-gray-600 mb-6">
              We couldn't verify your payment status. Please check your email for confirmation or
              contact support.
            </p>

            <div className="space-y-3">
              <Button
                onClick={() => window.location.reload()}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                Retry Verification
              </Button>
              <Button
                onClick={() => router.push('/my-courses')}
                variant="outline"
                className="w-full"
              >
                View My Courses
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PaymentCallback() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
        </div>
      }
    >
      <PaymentCallbackContent />
    </Suspense>
  );
}
