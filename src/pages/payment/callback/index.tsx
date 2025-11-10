// app/payment/callback/page.tsx

'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Loader2, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

function PaymentCallbackContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<'checking' | 'success' | 'failed' | 'error'>('checking');
  const [paymentDetails, setPaymentDetails] = useState<any>(null);

  useEffect(() => {
    const merchantOrderId = searchParams.get('merchantOrderId');
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

    if (!merchantOrderId) {
      setStatus('error');
      return;
    }

    // Check payment status
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
            // Clear pending payment from localStorage
            if (typeof window !== 'undefined') {
              localStorage.removeItem('pendingPayment');
            }
            // Redirect to enrolled courses after 3 seconds
            // setTimeout(() => {
            //   router.push('/my-courses');
            // }, 3000);
          } else if (data.data.status === 'FAILED' || data.data.status === 'CANCELLED') {
            setStatus('failed');
          } else {
            // Still pending, check again after 2 seconds
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

            <Button
              onClick={() => router.push('/my-courses')}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
            >
              View My Courses
            </Button>

            <p className="text-xs text-gray-500 mt-4">Redirecting automatically in 3 seconds...</p>
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
              Your payment could not be processed. Please try again or contact support if the issue
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

// // app/payment/callback/page.tsx
// 'use client';

// import { useEffect, useState, useRef } from 'react';
// import axios from 'axios';
// import { toast } from 'sonner';
// import { handleErrors } from '@/lib/handleError';
// import { usePaymentStore } from '@/lib/zustand/phone.store';
// import { useQuery } from '@tanstack/react-query';

// export default function PaymentCallback() {
//   const [status, setStatus] = useState('loading');
//   const [checkedOnce, setCheckedOnce] = useState(false);

//   // Access our payment store to get all necessary data
//   const { paymentResponse, setPaymentResponse, setError } = usePaymentStore();

//   const merchantOrderId = paymentResponse?.merchantOrderId;

//   const fetchPayemntStatus = useQuery({
//     queryKey: ['fetchPayemntStatus'],
//     queryFn: async () => {
//       if (!merchantOrderId) {
//         toast.error('Payment not yet completed. Please complete the payment process.');
//         return;
//       }

//       const res = await axios.get(
//         `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/phonepe/check-status/${merchantOrderId}`
//       );
//       if (res.data.success) {
//         const paymentData = res.data.data;

//         // Update store
//         const updatedPayment = {
//           merchantOrderId: merchantOrderId,
//           merchantTransactionId: paymentData.merchantTransactionId || '',
//           amount: paymentData.amount || 0,
//           status: paymentData.status,
//         };

//         setPaymentResponse(updatedPayment);

//         // Set UI status based on payment status
//         if (paymentData.status === 'SUCCESS') {
//           toast.success('Payment successful!');
//           setStatus('success');
//         } else if (paymentData.status === 'FAILED') {
//           toast.error('Payment failed');
//           setStatus('failed');
//         } else {
//           toast.info('Payment is being processed');
//           setStatus('pending');
//         }
//       }

//       return res.data;
//     },
//     enabled: !!merchantOrderId,
//   });

//   if (!merchantOrderId) {
//     return (
//       <div>
//         <h2 className="text-2xl text-red-600">Something Went Wrong !!</h2>
//         Please contact our techinical team they will help you out
//         <p>Please Don't panic our team will help you out</p>
//       </div>
//     );
//   }

//   if (fetchPayemntStatus.isLoading) {
//     return (
//       <div>
//         <div className="animate-spin h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
//         <h2 className="text-xl font-bold mb-2">Verifying Payment</h2>
//         <p className="text-gray-600">Please wait while we confirm your payment...</p>
//       </div>
//     );
//   }

//   if (fetchPayemntStatus.error) {
//     return (
//       <div>
//         <h2 className="text-2xl text-red-600">Something Went Wrong !!</h2>
//         Please contact our techinical team they will help you out
//         <p>Please Don't panic our team will help you out</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg text-center">
//         {status === 'loading' && (
//           <>
//             <div className="animate-spin h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
//             <h2 className="text-xl font-bold mb-2">Verifying Payment</h2>
//             <p className="text-gray-600">Please wait while we confirm your payment...</p>
//           </>
//         )}

//         {status === 'success' && (
//           <>
//             <div className="text-green-500 text-6xl mb-4">✓</div>
//             <h2 className="text-xl font-bold text-green-600 mb-2">Payment Successful!</h2>
//             <p className="text-gray-600">Your payment has been completed successfully.</p>
//             {/* <div className="mt-4">
//               <a href="/dashboard/courses" className="text-blue-500 hover:underline">
//                 View your courses
//               </a>
//             </div> */}
//             {paymentResponse && (
//               <div className="mt-6 pt-4 border-t border-gray-200 text-left">
//                 <h3 className="text-lg font-medium mb-2">Payment Details</h3>
//                 <p className="text-sm text-gray-600">
//                   <strong>Order ID:</strong> {paymentResponse.merchantOrderId}
//                 </p>
//                 <p className="text-sm text-gray-600">
//                   <strong>Amount:</strong> ₹{(paymentResponse.amount / 100).toFixed(2)}
//                 </p>
//                 <p className="text-sm text-gray-600">
//                   <strong>Status:</strong>{' '}
//                   <span className="text-green-600 font-medium">Successful</span>
//                 </p>
//               </div>
//             )}
//           </>
//         )}

//         {status === 'failed' && (
//           <>
//             <div className="text-red-500 text-6xl mb-4">✗</div>
//             <h2 className="text-xl font-bold text-red-600 mb-2">Payment Failed</h2>
//             <p className="text-gray-600">Your payment could not be processed.</p>
//             <div className="mt-4">
//               <a href="/courses" className="text-blue-500">
//                 Return to courses
//               </a>
//             </div>
//             {paymentResponse && (
//               <div className="mt-6 pt-4 border-t border-gray-200 text-left">
//                 <h3 className="text-lg font-medium mb-2">Payment Details</h3>
//                 <p className="text-sm text-gray-600">
//                   <strong>Order ID:</strong> {paymentResponse.merchantOrderId}
//                 </p>
//                 <p className="text-sm text-gray-600">
//                   <strong>Amount:</strong> ₹{(paymentResponse.amount / 100).toFixed(2)}
//                 </p>
//                 <p className="text-sm text-gray-600">
//                   <strong>Status:</strong> <span className="text-red-600 font-medium">Failed</span>
//                 </p>
//               </div>
//             )}
//           </>
//         )}

//         {status === 'pending' && (
//           <>
//             <div className="text-yellow-500 text-6xl mb-4">⟳</div>
//             <h2 className="text-xl font-bold text-yellow-600 mb-2">Payment Processing</h2>
//             <p className="text-gray-600">
//               Your payment is still being processed. We'll update you once it's complete.
//             </p>
//             <button
//               onClick={() => {
//                 setCheckedOnce(false); // Reset to trigger another check
//               }}
//               className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//             >
//               Check Again
//             </button>
//             {paymentResponse && (
//               <div className="mt-6 pt-4 border-t border-gray-200 text-left">
//                 <h3 className="text-lg font-medium mb-2">Payment Details</h3>
//                 <p className="text-sm text-gray-600">
//                   <strong>Order ID:</strong> {paymentResponse.merchantOrderId}
//                 </p>
//                 <p className="text-sm text-gray-600">
//                   <strong>Amount:</strong> ₹{(paymentResponse.amount / 100).toFixed(2)}
//                 </p>
//                 <p className="text-sm text-gray-600">
//                   <strong>Status:</strong>{' '}
//                   <span className="text-yellow-600 font-medium">Processing</span>
//                 </p>
//               </div>
//             )}
//           </>
//         )}

//         {status === 'error' && (
//           <>
//             <div className="text-red-500 text-6xl mb-4">!</div>
//             <h2 className="text-xl font-bold text-red-600 mb-2">Verification Error</h2>
//             <p className="text-gray-600">Could not verify payment status</p>
//             <button
//               onClick={() => {
//                 setCheckedOnce(false); // Reset to trigger another check
//               }}
//               className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//             >
//               Try Again
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }
