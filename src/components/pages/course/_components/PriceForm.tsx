"use client";
import { Button } from "@/components/ui/button";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import {
  BookOpenIcon,
  ClockIcon,
  CreditCardIcon,
  ShieldCheckIcon,
} from "lucide-react";
import React from "react";

export default function PriceForm({
  formattedPrice,
  durationHours,
}: {
  formattedPrice: React.ReactNode;
  durationHours: number;
}) {
  return (
    <section className="py-16 px-6 flex justify-center ">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl p-10 flex flex-col items-center gap-8">
        {/* Header & Price */}
        <h2 className="text-3xl font-extrabold text-[#203A43] text-center">
          Enroll Today & Start Learning
        </h2>
        <div className="bg-[#203A43] text-white px-6 py-4 rounded-xl text-4xl font-bold shadow-md flex items-center gap-3">
          <CurrencyDollarIcon className="h-8 w-8" />
          <span>{formattedPrice}</span>
        </div>

        {/* Button */}
        <Button className="bg-[#F4A261] text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:bg-[#E98E49] transition-transform transform hover:scale-105 flex items-center">
          <CreditCardIcon className="h-5 w-5 mr-2" />
          Enroll Now
        </Button>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl shadow">
            <ClockIcon className="h-6 w-6 text-[#203A43]" />
            <span className="font-medium text-gray-700">
              {durationHours} Hours
            </span>
          </div>
          <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl shadow">
            <BookOpenIcon className="h-6 w-6 text-[#203A43]" />
            <span className="font-medium text-gray-700">
              Comprehensive Learning
            </span>
          </div>
          <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl shadow">
            <CurrencyDollarIcon className="h-6 w-6 text-[#203A43]" />
            <span className="font-medium text-gray-700">
              Flexible Payment Options
            </span>
          </div>
          <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl shadow">
            <ShieldCheckIcon className="h-6 w-6 text-[#203A43]" />
            <span className="font-medium text-gray-700">Secure Payment</span>
          </div>
        </div>
      </div>
    </section>
  );
}
