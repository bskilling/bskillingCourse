import React from 'react';
import { FaClock, FaShieldAlt, FaGraduationCap } from 'react-icons/fa';
import { CheckCircle, Award, BookOpen } from 'lucide-react';
import { FaIndianRupeeSign } from 'react-icons/fa6';
import PaymentFormDialog from '@/components/global/PaymentRegisterForm';
import EMIOptions from './EmiOptions';

interface CourseEnrollmentProps {
  formattedPrice: string;
  durationHours: number;
  isPaid: boolean;
  _id: string;
}

const CourseEnrollment: React.FC<CourseEnrollmentProps> = ({
  formattedPrice,
  durationHours,
  isPaid = true,
  _id: courseId,
}) => {
  // Calculate the "original" price by increasing the actual price by 20%
  // Remove commas from formattedPrice and convert to number
  const actualPrice = parseInt(formattedPrice.replace(/,/g, ''));
  const increasedPrice = actualPrice;
  const displayOriginalPrice = actualPrice - Math.round(actualPrice * 0.2);

  // The discount percentage (hardcoded to 65% as per the design)
  const discountPercentage = 20;

  return (
    <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-1.5 h-8 bg-blue-600 rounded-full"></div>
        <h2 className="text-2xl font-bold text-gray-800">Enrollment Details</h2>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Top Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-4 px-6">
          <p className="text-white text-center text-sm font-medium">
            {isPaid
              ? 'Limited Time Offer - Enrollment closes in 3 days!'
              : "Free Course - Enroll now while it's available!"}
          </p>
        </div>

        <div className="lg:flex">
          {/* Left Side - Pricing Info */}
          <div className="lg:w-2/5 p-8 lg:border-r border-gray-200 flex flex-col justify-center items-center">
            <div className="text-center">
              {isPaid ? (
                <>
                  <span className="text-gray-500 line-through text-lg">₹{increasedPrice}</span>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <FaIndianRupeeSign className="h-8 w-8 text-blue-600" />
                    <span className="text-4xl font-bold text-gray-900">
                      {displayOriginalPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <span className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full mt-2 inline-block">
                    {discountPercentage}% OFF
                  </span>
                </>
              ) : (
                <div className="mt-1">
                  <span className="text-4xl font-bold text-green-900">FREE</span>
                </div>
              )}

              <div className="mt-8">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 text-base shadow-md">
                  {isPaid ? 'Enroll Now' : 'Join For Free'}
                </button>
                <button className="w-full mt-3 border border-blue-200 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors duration-300 text-base">
                  Download Syllabus
                </button>
                {/* <PaymentFormDialog
                  courseId={courseId}
                  courseName=""
                  amount={+formattedPrice}
                  currency="INR"
                /> */}
              </div>
            </div>

            {isPaid && (
              <div className="mt-8 w-full">
                <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                  <FaShieldAlt />
                  <span>100% Secure Payment</span>
                </div>
                {/* Payment icons would go here */}
              </div>
            )}
          </div>
          <EMIOptions courseId={courseId} amount={actualPrice} courseName="Course Name" />
        </div>
      </div>
    </section>
  );
};

export default CourseEnrollment;
