// app/payment/callback/page.tsx
'use client';

import { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import { toast } from 'sonner';
import { handleErrors } from '@/lib/handleError';
import { usePaymentStore } from '@/lib/zustand/phone.store';
import { useQuery } from '@tanstack/react-query';

export default function PaymentCallback() {
  // const searchParams = useSearchParams();
  const [status, setStatus] = useState('loading');
  const [checkedOnce, setCheckedOnce] = useState(false);

  // Access our payment store to get all necessary data
  const { paymentResponse, setPaymentResponse, setError } = usePaymentStore();

  const merchantOrderId = paymentResponse?.merchantOrderId;

  const fetchPayemntStatus = useQuery({
    queryKey: ['fetchPayemntStatus'],
    queryFn: async () => {
      if (!merchantOrderId) {
        toast.error('Payment not yet completed. Please complete the payment process.');
        return;
      }

      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/phonepe/check-status/${merchantOrderId}`
      );
      if (res.data.success) {
        const paymentData = res.data.data;

        // Update store
        const updatedPayment = {
          merchantOrderId: merchantOrderId,
          merchantTransactionId: paymentData.merchantTransactionId || '',
          amount: paymentData.amount || 0,
          status: paymentData.status,
        };

        setPaymentResponse(updatedPayment);

        // Set UI status based on payment status
        if (paymentData.status === 'SUCCESS') {
          toast.success('Payment successful!');
          setStatus('success');
        } else if (paymentData.status === 'FAILED') {
          toast.error('Payment failed');
          setStatus('failed');
        } else {
          toast.info('Payment is being processed');
          setStatus('pending');
        }
      }

      return res.data;
    },
    enabled: !!merchantOrderId,
  });

  if (!merchantOrderId) {
    return (
      <div>
        <h2 className="text-2xl text-red-600">Something Went Wrong !!</h2>
        Please contact our techinical team they will help you out
        <p>Please Don't panic our team will help you out</p>
      </div>
    );
  }

  if (fetchPayemntStatus.isLoading) {
    return (
      <div>
        <div className="animate-spin h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
        <h2 className="text-xl font-bold mb-2">Verifying Payment</h2>
        <p className="text-gray-600">Please wait while we confirm your payment...</p>
      </div>
    );
  }

  if (fetchPayemntStatus.error) {
    return (
      <div>
        <h2 className="text-2xl text-red-600">Something Went Wrong !!</h2>
        Please contact our techinical team they will help you out
        <p>Please Don't panic our team will help you out</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg text-center">
        {status === 'loading' && (
          <>
            <div className="animate-spin h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
            <h2 className="text-xl font-bold mb-2">Verifying Payment</h2>
            <p className="text-gray-600">Please wait while we confirm your payment...</p>
          </>
        )}

        {status === 'success' && (
          <>
            <div className="text-green-500 text-6xl mb-4">✓</div>
            <h2 className="text-xl font-bold text-green-600 mb-2">Payment Successful!</h2>
            <p className="text-gray-600">Your payment has been completed successfully.</p>
            {/* <div className="mt-4">
              <a href="/dashboard/courses" className="text-blue-500 hover:underline">
                View your courses
              </a>
            </div> */}
            {paymentResponse && (
              <div className="mt-6 pt-4 border-t border-gray-200 text-left">
                <h3 className="text-lg font-medium mb-2">Payment Details</h3>
                <p className="text-sm text-gray-600">
                  <strong>Order ID:</strong> {paymentResponse.merchantOrderId}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Amount:</strong> ₹{(paymentResponse.amount / 100).toFixed(2)}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Status:</strong>{' '}
                  <span className="text-green-600 font-medium">Successful</span>
                </p>
              </div>
            )}
          </>
        )}

        {status === 'failed' && (
          <>
            <div className="text-red-500 text-6xl mb-4">✗</div>
            <h2 className="text-xl font-bold text-red-600 mb-2">Payment Failed</h2>
            <p className="text-gray-600">Your payment could not be processed.</p>
            <div className="mt-4">
              <a href="/courses" className="text-blue-500">
                Return to courses
              </a>
            </div>
            {paymentResponse && (
              <div className="mt-6 pt-4 border-t border-gray-200 text-left">
                <h3 className="text-lg font-medium mb-2">Payment Details</h3>
                <p className="text-sm text-gray-600">
                  <strong>Order ID:</strong> {paymentResponse.merchantOrderId}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Amount:</strong> ₹{(paymentResponse.amount / 100).toFixed(2)}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Status:</strong> <span className="text-red-600 font-medium">Failed</span>
                </p>
              </div>
            )}
          </>
        )}

        {status === 'pending' && (
          <>
            <div className="text-yellow-500 text-6xl mb-4">⟳</div>
            <h2 className="text-xl font-bold text-yellow-600 mb-2">Payment Processing</h2>
            <p className="text-gray-600">
              Your payment is still being processed. We'll update you once it's complete.
            </p>
            <button
              onClick={() => {
                setCheckedOnce(false); // Reset to trigger another check
              }}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Check Again
            </button>
            {paymentResponse && (
              <div className="mt-6 pt-4 border-t border-gray-200 text-left">
                <h3 className="text-lg font-medium mb-2">Payment Details</h3>
                <p className="text-sm text-gray-600">
                  <strong>Order ID:</strong> {paymentResponse.merchantOrderId}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Amount:</strong> ₹{(paymentResponse.amount / 100).toFixed(2)}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Status:</strong>{' '}
                  <span className="text-yellow-600 font-medium">Processing</span>
                </p>
              </div>
            )}
          </>
        )}

        {status === 'error' && (
          <>
            <div className="text-red-500 text-6xl mb-4">!</div>
            <h2 className="text-xl font-bold text-red-600 mb-2">Verification Error</h2>
            <p className="text-gray-600">Could not verify payment status</p>
            <button
              onClick={() => {
                setCheckedOnce(false); // Reset to trigger another check
              }}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Try Again
            </button>
          </>
        )}
      </div>
    </div>
  );
}
