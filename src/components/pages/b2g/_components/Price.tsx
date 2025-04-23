import React from 'react';
import { FaClock, FaShieldAlt, FaGraduationCap } from 'react-icons/fa';
import { CheckCircle, Award, BookOpen } from 'lucide-react';
import { FaIndianRupeeSign } from 'react-icons/fa6';

interface CourseEnrollmentProps {
  formattedPrice: string;
  durationHours: number;
  isPaid: boolean;
}

const CourseEnrollment: React.FC<CourseEnrollmentProps> = ({
  formattedPrice,
  durationHours,
  isPaid = true,
}) => {
  // Calculate the "original" price by increasing the actual price by 20%
  // Remove commas from formattedPrice and convert to number
  const actualPrice = parseInt(formattedPrice.replace(/,/g, ''));
  const discountPercentage = 20;
  const displayOriginalPrice = actualPrice - Math.round(actualPrice * 0.2);

  // const increasedPrice = actualPrice;

  // The discount percentage (hardcoded to 65% as per the design)

  return (
    <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-1.5 h-8 bg-blue-600 rounded-full"></div>
        <h2 className="text-2xl font-bold text-gray-800">Enrollment Details asasasas</h2>
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
                  <span className="text-gray-500 line-through text-lg">
                    ₹{actualPrice.toLocaleString('en-IN')}
                  </span>
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
                  {/* <span className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mt-2 inline-block ml-2">
                    No Credit Card Required
                  </span> */}
                </div>
              )}

              <div className="mt-8">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 text-base shadow-md">
                  {isPaid ? 'Enroll Now' : 'Join For Free'}
                </button>
                <button className="w-full mt-3 border border-blue-200 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors duration-300 text-base">
                  Download Syllabus
                </button>
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

          {/* Right Side - Course Features */}
          <div className="lg:w-3/5 p-8 bg-gray-50">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">What&apos;s Included</h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaClock className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">{durationHours} Hours of Content</p>
                  <p className="text-sm text-gray-500">Self-paced learning</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Award className="h-4 w-4 text-indigo-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">
                    {isPaid ? 'Completion Certificate' : 'Course Certificate'}
                  </p>
                  <p className="text-sm text-gray-500">
                    {isPaid ? 'Industry recognized' : 'Available after completion'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">
                    {isPaid ? 'Lifetime Access' : 'Basic Access'}
                  </p>
                  <p className="text-sm text-gray-500">
                    {isPaid ? 'Learn at your own pace' : '30-day access period'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <BookOpen className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Course Materials</p>
                  <p className="text-sm text-gray-500">
                    {isPaid ? 'Downloadable resources' : 'Online access only'}
                  </p>
                </div>
              </div>

              {isPaid && (
                <>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                      <FaGraduationCap className="h-4 w-4 text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Expert Mentor Support</p>
                      <p className="text-sm text-gray-500">Get your questions answered</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-red-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                        <path d="M14 6a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">2 Real-world Projects</p>
                      <p className="text-sm text-gray-500">Build your portfolio</p>
                    </div>
                  </div>
                </>
              )}

              {!isPaid && (
                <>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                      <FaGraduationCap className="h-4 w-4 text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Community Forum</p>
                      <p className="text-sm text-gray-500">Connect with other learners</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-red-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                        <path d="M14 6a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">1 Beginner Project</p>
                      <p className="text-sm text-gray-500">Get started with basics</p>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-800">
                    {isPaid
                      ? 'Not sure if this course is right for you? Try our free introductory module or schedule a call with our career advisor.'
                      : 'Want to access all features? Upgrade to our premium course for lifetime access and mentor support.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseEnrollment;
