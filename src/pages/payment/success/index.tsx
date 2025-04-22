'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import { ArrowLeft, BookOpen, CheckCircle2, Download, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface PaymentDetails {
  orderId: string;
  amount: string;
  courseId: string;
  courseName: string;
  orderDate: string;
  transactionId: string;
  paymentMode: string;
  currency: string;
}

export default function PaymentSuccess() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPaymentDetails = async () => {
      try {
        // Get order ID from URL parameters
        const orderId = searchParams.get('order_id');

        if (!orderId) {
          setError('Invalid payment reference. Order ID is missing.');
          setIsLoading(false);
          return;
        }

        // Fetch payment details from your API
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/ccavenue/payment-details/${orderId}`
        );

        if (!response.data.success) {
          throw new Error(response.data.message || 'Failed to fetch payment details');
        }

        setPaymentDetails(response.data.data);
      } catch (err: any) {
        console.error('Error fetching payment details:', err);
        setError(err.message || 'Failed to load payment details');
        toast.error('Could not retrieve payment details. Please contact support.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPaymentDetails();
  }, [searchParams]);

  const handleDownloadInvoice = async () => {
    if (!paymentDetails?.orderId) return;

    try {
      toast.info('Generating invoice...');

      // Call your invoice generation API
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/ccavenue/generate-invoice/${paymentDetails.orderId}`,
        { responseType: 'blob' }
      );

      // Create a download link for the PDF
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `Invoice-${paymentDetails.orderId}.pdf`);
      document.body.appendChild(link);
      link.click();

      // Clean up
      link.parentNode?.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast.success('Invoice downloaded successfully');
    } catch (err) {
      console.error('Error downloading invoice:', err);
      toast.error('Failed to download invoice. Please try again later.');
    }
  };

  // Format date from ISO string
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      }).format(date);
    } catch (e) {
      return dateString;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8 text-center">
          <Loader2 className="h-12 w-12 animate-spin mx-auto text-blue-600 mb-4" />
          <h2 className="text-xl font-medium text-gray-700">Verifying your payment...</h2>
          <p className="mt-2 text-gray-500">Please wait while we confirm your payment details.</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center bg-red-100 rounded-full p-3 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Verification Failed</h2>
            <p className="text-gray-600">{error}</p>
          </div>

          <div className="flex flex-col space-y-3">
            <Button onClick={() => router.push('/')} variant="outline" className="w-full">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Homepage
            </Button>

            <div className="text-center mt-4">
              <p className="text-sm text-gray-500">
                If you believe this is an error, please contact our support team.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header with success message */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-8 text-white text-center">
          <div className="inline-flex items-center justify-center bg-white/20 rounded-full p-3 mb-4">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold">Payment Successful!</h1>
          <p className="mt-2 opacity-90">Your course enrollment has been confirmed</p>
        </div>

        {/* Payment details */}
        <div className="p-6 md:p-8">
          {/* Order summary */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-green-600" />
              Order Summary
            </h2>

            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Order ID</p>
                  <p className="font-medium">{paymentDetails?.orderId || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-medium">
                    {paymentDetails?.orderDate ? formatDate(paymentDetails.orderDate) : 'N/A'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Transaction ID</p>
                  <p className="font-medium">{paymentDetails?.transactionId || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Payment Method</p>
                  <p className="font-medium">{paymentDetails?.paymentMode || 'Online Payment'}</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Course</span>
                  <span className="font-medium">{paymentDetails?.courseName || 'Your Course'}</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-semibold text-gray-700">Amount Paid</span>
                  <span className="text-lg font-bold text-green-600">
                    {paymentDetails?.currency || '₹'} {paymentDetails?.amount || '0.00'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              onClick={handleDownloadInvoice}
              variant="outline"
              className="flex items-center justify-center"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Invoice
            </Button>

            <Button
              onClick={() => router.push(`/courses/${paymentDetails?.courseId}`)}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Access Course
            </Button>
          </div>

          <div className="mt-8 text-center border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-500 mb-4">
              A confirmation email has been sent to your registered email address.
            </p>

            <Link
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Trust badges footer */}
      <div className="mt-8 flex items-center justify-center space-x-6 text-gray-400">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          <span className="text-xs">Secure Payment</span>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <span className="text-xs">SSL Encrypted</span>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
            />
          </svg>
          <span className="text-xs">24/7 Support</span>
        </div>
      </div>
    </div>
  );
}
