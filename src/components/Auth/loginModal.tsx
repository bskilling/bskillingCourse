'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import LoginFormModal from './LoginFormModal';

type LoginModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function LoginModal({ open, onOpenChange }: LoginModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // ✅ prevents hydration issues

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md w-full p-0 overflow-hidden rounded-2xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          {/* Header */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back!</h2>
            <p className="text-gray-600">Sign in to continue your learning journey</p>
          </div>

          {/* Login Form */}
          <LoginFormModal onSuccess={() => onOpenChange(false)} />

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or</span>
            </div>
          </div>

          {/* Sign up */}
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="text-blue-600 hover:text-blue-700 font-semibold">
                Sign Up Free
              </Link>
            </p>
          </div>
        </div>

        {/* Extra links */}
        <div className="mt-6 text-center space-y-3 px-8 pb-8">
          <div className="flex items-center justify-center space-x-4 text-sm">
            <Link
              href="/forgot-password"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Forgot Password?
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/help" className="text-gray-600 hover:text-blue-600 transition-colors">
              Need Help?
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
