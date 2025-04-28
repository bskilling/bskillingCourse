'use client';
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CreditCard, Phone, BookOpen, BadgeCheck, Shield } from 'lucide-react';
import PhonePePaymentForm from './PhonePay';
import CCAvPaymentForm from './CCAv';

interface PaymentProps {
  courseId: string;
  amount: number;
  courseName: string;
  currency?: string;
}

// The main payment selector component
const PaymentGatewaySelector: React.FC<PaymentProps> = ({
  courseId,
  amount,
  courseName,
  currency = 'INR',
}) => {
  const [open, setOpen] = useState(false);
  const [selectedGateway, setSelectedGateway] = useState<'ccavenue' | 'phonepe'>('ccavenue');

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-lg font-medium">
          <BookOpen className="mr-2 h-5 w-5" />
          Buy Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px]">
        <div className="relative">
          {/* BSkilling logo/branding at the top */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-md">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white h-12 w-12 rounded-full flex items-center justify-center font-bold text-lg">
              BS
            </div>
          </div>

          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-center flex items-center justify-center gap-2">
              <CreditCard className="h-5 w-5 text-blue-600" />
              Choose Payment Method
            </DialogTitle>
          </DialogHeader>

          <div className="flex items-center justify-between my-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-sm border border-blue-100">
            <div className="flex items-center">
              <CreditCard className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-gray-700">Course Fee</span>
            </div>
            <span className="font-bold text-lg text-blue-700">
              {currency} {amount.toFixed(2)}
            </span>
          </div>

          <Tabs
            defaultValue="ccavenue"
            className="w-full"
            onValueChange={value => setSelectedGateway(value as 'ccavenue' | 'phonepe')}
          >
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="ccavenue" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                <span>CCAvenue</span>
              </TabsTrigger>
              <TabsTrigger value="phonepe" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>PhonePe</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ccavenue" className="mt-0">
              <CCAvPaymentForm
                courseId={courseId}
                amount={amount}
                courseName={courseName}
                currency={currency}
                open={open}
                setOpenProp={setOpen}
              />
              <div className="p-4 mb-4 bg-white border border-blue-100 rounded-lg shadow-sm">
                <h3 className="font-medium text-blue-800 mb-2">CCAvenue Payment</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Pay using Credit/Debit Card, Net Banking, UPI, or Wallet via CCAvenue's secure
                  gateway.
                </p>
                <div className="grid grid-cols-5 gap-2">
                  <div className="flex justify-center">
                    <img src="/images/visa.svg" alt="Visa" className="h-6" />
                  </div>
                  <div className="flex justify-center">
                    <img src="/images/mastercard.svg" alt="Mastercard" className="h-6" />
                  </div>
                  <div className="flex justify-center">
                    <img src="/images/rupay.svg" alt="RuPay" className="h-6" />
                  </div>
                  <div className="flex justify-center">
                    <img src="/images/upi.svg" alt="UPI" className="h-6" />
                  </div>
                  <div className="flex justify-center">
                    <img src="/images/netbanking.svg" alt="Net Banking" className="h-6" />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="phonepe" className="mt-0">
              <div className="p-4 mb-4 bg-white border border-purple-100 rounded-lg shadow-sm">
                <h3 className="font-medium text-purple-800 mb-2">PhonePe Payment</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Pay using UPI, Credit/Debit Card, or PhonePe Wallet with fast and secure checkout.
                </p>
                <div className="flex justify-center">
                  <img src="/images/phonepe-logo.png" alt="PhonePe" className="h-10" />
                </div>
              </div>
              <PhonePePaymentForm
                courseId={courseId}
                amount={amount}
                courseName={courseName}
                currency={currency}
              />
            </TabsContent>
          </Tabs>

          <div className="text-xs text-center text-gray-500 mt-6 space-y-2">
            <p>By enrolling, you agree to our terms and conditions.</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center">
                <Shield className="h-3 w-3 text-gray-400 mr-1" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center">
                <BadgeCheck className="h-3 w-3 text-gray-400 mr-1" />
                <span>Quality Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentGatewaySelector;
