import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface PaymentDetails {
  paymentId: string;
  courseId: string;
  userId: string;
  amount: string;
  timestamp?: string;
}

export default function PaymentSuccess() {
  const router = useRouter();
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for router to be ready with query parameters
    if (!router.isReady) return;

    // Extract payment details from query parameters
    const { paymentId, courseId, userId, amount } = router.query;

    if (paymentId && courseId && userId && amount) {
      // Set payment details
      setPaymentDetails({
        paymentId: paymentId as string,
        courseId: courseId as string,
        userId: userId as string,
        amount: amount as string,
        timestamp: new Date().toLocaleString(),
      });
    } else {
      // If no valid parameters, redirect to home
      console.error('Missing payment details in URL');
      router.push('/');
    }

    setLoading(false);
  }, [router.isReady, router.query]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading payment details...</p>
        </div>
      </div>
    );
  }

  if (!paymentDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-red-500">No payment details found.</p>
          <Link href="/">
            <button className="mt-4 inline-block text-blue-500 hover:underline">
              Return to Home
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Payment Successful | Your Course Platform</title>
        <meta name="description" content="Payment successful confirmation page" />
      </Head>

      <section className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 m-4">
          <div className="flex justify-center">
            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="h-10 w-10 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
          </div>

          <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
            Payment Successful
          </h2>

          <p className="mt-2 text-center text-sm text-gray-600">
            Thank you for your payment of{' '}
            <span className="font-medium text-green-600">₹{paymentDetails.amount}</span> (Inclusive
            of 18% GST)
          </p>

          <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="flex justify-between text-sm py-2">
              <span className="text-gray-500">Payment ID</span>
              <span className="font-medium">{paymentDetails.paymentId}</span>
            </div>
            <div className="flex justify-between text-sm py-2 border-t border-gray-200">
              <span className="text-gray-500">Course ID</span>
              <span className="font-medium">{paymentDetails.courseId}</span>
            </div>
            <div className="flex justify-between text-sm py-2 border-t border-gray-200">
              <span className="text-gray-500">Date & Time</span>
              <span className="font-medium">{paymentDetails.timestamp}</span>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <Link href="/dashboard">
              <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                Go to Dashboard
              </button>
            </Link>
            <Link href="/courses">
              <button className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Browse More Courses
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
