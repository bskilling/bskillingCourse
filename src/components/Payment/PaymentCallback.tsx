// frontend/components/Payment/PaymentCallback.tsx
// This component handles the redirect after payment

'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

export default function PaymentCallback() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { token } = useAuth();
  const [status, setStatus] = useState<'checking' | 'success' | 'failed'>('checking');

  useEffect(() => {
    const merchantOrderId = searchParams.get('merchantOrderId');

    if (!merchantOrderId) {
      setStatus('failed');
      return;
    }

    // Check payment status
    const checkStatus = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/payments/status/${merchantOrderId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (data.success && data.data.status === 'SUCCESS') {
          setStatus('success');
          setTimeout(() => {
            router.push('/courses/enrolled');
          }, 2000);
        } else {
          setStatus('failed');
        }
      } catch (error) {
        setStatus('failed');
      }
    };

    checkStatus();
  }, [searchParams, token, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg text-center">
        {status === 'checking' && (
          <>
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <h2 className="text-xl font-semibold">Verifying Payment...</h2>
            <p className="text-gray-600 mt-2">Please wait</p>
          </>
        )}

        {status === 'success' && (
          <>
            <div className="text-green-600 text-6xl mb-4">✓</div>
            <h2 className="text-2xl font-bold text-green-600">Payment Successful!</h2>
            <p className="text-gray-600 mt-2">You now have access to the course</p>
            <p className="text-sm text-gray-500 mt-4">Redirecting...</p>
          </>
        )}

        {status === 'failed' && (
          <>
            <div className="text-red-600 text-6xl mb-4">✗</div>
            <h2 className="text-2xl font-bold text-red-600">Payment Failed</h2>
            <p className="text-gray-600 mt-2">Something went wrong</p>
            <button
              onClick={() => router.push('/courses')}
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Back to Courses
            </button>
          </>
        )}
      </div>
    </div>
  );
}
