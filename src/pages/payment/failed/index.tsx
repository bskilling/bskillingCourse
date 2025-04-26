import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface FailedPaymentDetails {
  paymentId?: string;
  courseId?: string;
  reason?: string;
  amount?: string;
}

export default function PaymentFailed() {
  const router = useRouter();
  const [paymentDetails, setPaymentDetails] = useState<FailedPaymentDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for router to be ready with query parameters
    if (!router.isReady) return;

    // Extract payment details from query parameters
    const { paymentId, courseId, reason, amount } = router.query;

    // Set whatever details we have
    setPaymentDetails({
      paymentId: paymentId as string,
      courseId: courseId as string,
      reason: (reason as string) || 'Unknown error occurred',
      amount: amount as string,
    });

    setLoading(false);
  }, [router.isReady, router.query]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading payment details...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Payment Failed | Your Course Platform</title>
        <meta name="description" content="Payment failed information page" />
      </Head>

      <section className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 m-4">
          <div className="flex justify-center">
            <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center">
              <svg
                className="h-10 w-10 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </div>

          <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">Payment Failed</h2>

          <p className="mt-2 text-center text-sm text-gray-600">
            We couldn't process your payment
            {paymentDetails?.amount && (
              <span>
                {' '}
                of <span className="font-medium text-red-600">₹{paymentDetails.amount}</span>
              </span>
            )}
          </p>

          <div className="mt-6 bg-red-50 p-4 rounded-lg border border-red-200">
            <p className="text-sm text-red-700">
              <span className="font-medium">Error:</span>{' '}
              {paymentDetails?.reason || 'Unknown error occurred'}
            </p>

            {paymentDetails?.paymentId && (
              <div className="mt-2 text-sm text-gray-700">
                <span className="font-medium">Reference:</span> {paymentDetails.paymentId}
              </div>
            )}
          </div>

          <div className="mt-6 space-y-3">
            <Link href={paymentDetails?.courseId ? `/course/${paymentDetails.courseId}` : '/'}>
              <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                Try Again
              </button>
            </Link>
            <Link href="/support">
              <button className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Contact Support
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
