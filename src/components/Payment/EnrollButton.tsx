'use client';

import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

interface EnrollButtonProps {
  courseId: string;
  courseName: string;
  amount: number;
  currency?: string;
}

export default function EnrollButton({
  courseId,
  courseName,
  amount,
  currency = 'INR',
}: EnrollButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { isAuthenticated, token } = useAuth();
  const router = useRouter();

  const handleEnroll = async () => {
    // Check if user is logged in
    if (!isAuthenticated) {
      router.push('/login?redirect=/courses/' + courseId);
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Call payment initiation API
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/payments/initiate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // ← JWT token
        },
        body: JSON.stringify({
          courseId,
          amount,
          currency,
          callbackUrl: `${window.location.origin}/payment/callback`,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Payment initiation failed');
      }

      // Redirect to PhonePe payment page
      window.location.href = data.data.redirectUrl;
    } catch (err: any) {
      setError(err.message || 'Failed to initiate payment');
      setIsLoading(false);
    }
  };

  return (
    <div>
      {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded text-sm">{error}</div>}

      <button
        onClick={handleEnroll}
        disabled={isLoading}
        className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-400 transition"
      >
        {isLoading ? 'Processing...' : <>Enroll Now - ₹{amount.toLocaleString()}</>}
      </button>

      {!isAuthenticated && (
        <p className="mt-2 text-sm text-gray-600 text-center">You'll be asked to login first</p>
      )}
    </div>
  );
}
