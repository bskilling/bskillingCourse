import React from 'react';
import {
  CurrencyDollarIcon,
  CreditCardIcon,
  ClockIcon,
  BookOpenIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/solid';
import { FaIndianRupeeSign } from 'react-icons/fa6';

interface CourseEnrollmentProps {
  formattedPrice: string;
  durationHours: number;
}

const CourseEnrollment: React.FC<CourseEnrollmentProps> = ({ formattedPrice, durationHours }) => {
  return (
    <section
      id="pricing"
      className="relative py-16 px-6 flex justify-center bg-gradient-to-r from-[#2E1A47] to-[#0D1B2A]"
    >
      {/* Background Icons - Shifted to Right for Visibility */}
      <div className="absolute inset-y-0 right-0 flex justify-end items-center opacity-10 pointer-events-none pr-10">
        <div className="text-white text-[200px] flex flex-col gap-16">
          <AcademicCapIcon className="w-32 h-32" />
          <DocumentTextIcon className="w-32 h-32" />
        </div>
      </div>

      <div className="relative w-full max-w-5xl flex gap-8 items-center">
        {/* Left Side - Pricing & CTA (Overlapping Effect) */}
        <div className="relative bg-gradient-to-br from-[#F8B400] to-[#FF6B35] text-white px-12 py-10 rounded-xl shadow-lg w-96 flex flex-col items-center transform -translate-x-10 z-10 hover:scale-[1.05] transition">
          <h2 className="text-xl font-semibold">🔥 Limited Time Offer</h2>
          <div className="flex items-center gap-3 text-4xl font-bold mt-3">
            <FaIndianRupeeSign className="h-8 w-8" />
            <span>Starting at {formattedPrice}</span>
          </div>
          <button className="mt-5 bg-white text-[#F76C6C] px-6 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-gray-200 transition-transform flex items-center gap-2">
            <CreditCardIcon className="h-5 w-5" />
            Enroll Now
          </button>
        </div>

        {/* Right Side - Course Details (Shifted Slightly Right) */}
        <div className="flex-1 bg-white shadow-2xl rounded-xl p-10 border-l-8 border-[#F8B400] transform translate-x-6 hover:scale-[1.02] transition">
          <h2 className="text-3xl font-extrabold text-gray-800">
            🎓 Master Your Skills & Get Certified
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-6 mt-6">
            <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-xl shadow-sm">
              <ClockIcon className="h-6 w-6 text-[#F8B400]" />
              <span className="font-medium text-gray-700">{durationHours} Hours of Content</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-xl shadow-sm">
              <BookOpenIcon className="h-6 w-6 text-[#F8B400]" />
              <span className="font-medium text-gray-700">Industry-Recognized Curriculum</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-xl shadow-sm">
              <ShieldCheckIcon className="h-6 w-6 text-[#F8B400]" />
              <span className="font-medium text-gray-700">Secure Payment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseEnrollment;
