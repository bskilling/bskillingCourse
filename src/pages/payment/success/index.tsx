import axios from 'axios';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

interface PaymentDetails {
  paymentId: string | null;
  courseId: string | null;
  userId: string | null;
  amount: string | null;
  timestamp: string;
}

interface UpdatedPurchase {
  _id: string;
  userId: string;
  courseId: string;
  orderId: string;
  amount: string;
  currency: string;
  status: 'SUCCESS' | 'PENDING' | 'FAILED';
  createdAt: string;
  updatedAt: string;
  coupon: {
    _id: string;
    code: string;
    type: 'percentage' | 'fixed';
    discount: number;
    expiresAt: string;
    isActive: boolean;
    usageLimit?: number;
    usedCount: number;
    minPurchaseAmount?: number;
  };
}

export default function PaymentSuccess() {
  const router = useRouter();
  const { paymentId } = router.query;

  const [purchaseData, setPurchaseData] = useState<UpdatedPurchase | null>(null);

  useEffect(() => {
    if (!router.isReady || !paymentId) return;

    const updatePaymentStatus = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/purchase-details/${paymentId}`
        );

        toast.success('Payment confirmed and updated.');
        setPurchaseData(response.data?.data); // Assume backend sends { data: updatedPurchase }
      } catch (error: any) {
        console.error('Error updating purchase:', error);
        toast.error('Failed to update payment status.');
      }
    };

    updatePaymentStatus();
  }, [router.isReady]);

  if (!router.isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading payment details...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Payment Successful | Your Course Platform</title>
        <meta name="description" content="Payment success confirmation" />
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
                />
              </svg>
            </div>
          </div>

          <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
            Payment Successful
          </h2>
          {purchaseData && (
            <>
              <div className="flex justify-between border-t border-gray-200 pt-2">
                <span className="text-gray-500">Status</span>
                <span className="font-semibold text-green-600">{purchaseData.status}</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-2">
                <span className="text-gray-500">Currency</span>
                <span className="font-medium">{purchaseData.currency}</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-2">
                <span className="text-gray-500">Amount</span>
                <span className="font-medium">{purchaseData.amount}</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-2">
                <span className="text-gray-500">Order ID</span>
                <span className="font-medium">{purchaseData.orderId}</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-2">
                <span className="text-gray-500">Updated At</span>
                <span className="font-medium">
                  {new Date(purchaseData.updatedAt).toLocaleString()}
                </span>
              </div>
            </>
          )}

          {purchaseData?.coupon && (
            <>
              <div className="mt-4 text-blue-700 font-semibold">Coupon Applied</div>

              <div className="flex justify-between border-t border-gray-200 pt-2">
                <span className="text-gray-500">Code</span>
                <span className="font-medium uppercase">{purchaseData.coupon.code}</span>
              </div>

              <div className="flex justify-between border-t border-gray-200 pt-2">
                <span className="text-gray-500">Discount</span>
                <span className="font-medium text-red-600">
                  {purchaseData.coupon.type === 'percentage'
                    ? `${purchaseData.coupon.discount}%`
                    : `₹${purchaseData.coupon.discount}`}
                </span>
              </div>

              <div className="flex justify-between border-t border-gray-200 pt-2">
                <span className="text-gray-500">Used Count</span>
                <span className="font-medium">{purchaseData.coupon.usedCount}</span>
              </div>

              <div className="flex justify-between border-t border-gray-200 pt-2">
                <span className="text-gray-500">Expires At</span>
                <span className="font-medium">
                  {new Date(purchaseData.coupon.expiresAt).toLocaleDateString()}
                </span>
              </div>
            </>
          )}

          <div className="mt-6 space-y-3">
            <button
              className="w-full py-2 px-4 bg-green-600 text-white rounded-md shadow hover:bg-green-700"
              onClick={() => window.open('/', '_blank')}
            >
              Go to Dashboard
            </button>
            <button
              className="w-full py-2 px-4 bg-white text-gray-700 border border-gray-300 rounded-md shadow hover:bg-gray-50"
              onClick={() => window.open('/courses', '_blank')}
            >
              Browse More Courses
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
