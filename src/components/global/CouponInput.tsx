import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';
import { on } from 'events';

interface Coupon {
  _id: string;
  code: string;
  type: 'percentage' | 'fixed';
  discount: number;
  expiresAt: string;
  isActive: boolean;
  usageLimit?: number;
  usedCount: number;
  minPurchaseAmount?: number;
}

interface CouponInputProps {
  onCouponApply: (couponId: string | undefined, couponData: Coupon | null | undefined) => void;
  currentAmount: number;
}

export default function CouponInput({ onCouponApply, currentAmount }: CouponInputProps) {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleApply = async () => {
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const res = await axios.get<{ success: boolean; data: Coupon }>(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/coupons/${code.toUpperCase()}?amount=${currentAmount}`
      );

      const coupon = res?.data.data;
      const discountText =
        coupon.type === 'percentage' ? `${coupon.discount}% off` : `₹${coupon.discount} off`;
      const message = `Coupon ${coupon.code} applied successfully: ${discountText}`;
      //  setError(null);
      setError(null);
      setSuccess(message);
      toast.success(message);
      onCouponApply(coupon._id, coupon);
    } catch (err: any) {
      console.log(err);
      toast.error(err.response?.data?.message || 'Invalid coupon code.');
      setError(err.response?.data?.message || 'Invalid coupon code.');
      setSuccess(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 items-center">
        <Input
          type="text"
          placeholder="Enter coupon code"
          value={code}
          onChange={e => {
            setCode(e.target.value);
            setSuccess(null);
            setError(null);
            onCouponApply(undefined, undefined);
          }}
          className="max-w-sm"
        />
        {!loading && !success && (
          <Button onClick={handleApply} disabled={!code} type="button">
            Apply
          </Button>
        )}
      </div>

      {error && (
        <div className="text-red-500 text-sm flex items-center gap-1">
          <XCircle size={16} /> {error}
        </div>
      )}
      {success && (
        <div className="text-green-600 text-sm flex items-center gap-1">
          <CheckCircle size={16} /> {success}
        </div>
      )}
    </div>
  );
}
