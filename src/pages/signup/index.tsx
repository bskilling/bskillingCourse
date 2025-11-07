import SignupForm from '@/components/Auth/SignupForm';
import React from 'react';
import Link from 'next/link';
import { FaCheckCircle, FaStar } from 'react-icons/fa';

export default function Signup() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding & Benefits */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-12 flex-col justify-between relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
        </div>

        {/* Logo */}
        <div className="relative z-10">
          <Link href="/" className="inline-block">
            <h1 className="text-4xl font-bold text-white">bSkilling</h1>
            <p className="text-blue-100 text-sm mt-1">Your Gateway to Tech Excellence</p>
          </Link>
        </div>

        {/* Main Content */}
        <div className="relative z-10 space-y-8">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
              Transform Your Career with Expert-Led Training
            </h2>
            <p className="text-blue-100 text-lg">
              Join 50,000+ students who have upskilled with bSkilling's industry-recognized
              certification programs
            </p>
          </div>

          {/* Benefits List */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-400 flex items-center justify-center mt-1">
                <FaCheckCircle className="text-white text-sm" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">100+ Industry-Relevant Courses</h3>
                <p className="text-blue-100 text-sm">
                  Master AI, Cloud, Data Science, SAP BTP & more
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-400 flex items-center justify-center mt-1">
                <FaCheckCircle className="text-white text-sm" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Live Interactive Classes</h3>
                <p className="text-blue-100 text-sm">
                  Learn from 50+ expert trainers with real-world experience
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-400 flex items-center justify-center mt-1">
                <FaCheckCircle className="text-white text-sm" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Guaranteed Placement Support</h3>
                <p className="text-blue-100 text-sm">
                  6 months job assistance with resume building & mock interviews
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-400 flex items-center justify-center mt-1">
                <FaCheckCircle className="text-white text-sm" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Flexible Learning Options</h3>
                <p className="text-blue-100 text-sm">Study at your own pace with 24/7 LMS access</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-blue-500">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">13+</div>
              <div className="text-blue-100 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">50K+</div>
              <div className="text-blue-100 text-sm">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">100+</div>
              <div className="text-blue-100 text-sm">Courses</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10">
          <div className="flex items-center space-x-2 text-blue-100">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-300 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white"></div>
            </div>
            <div className="flex items-center space-x-1">
              <FaStar className="text-yellow-400 text-sm" />
              <FaStar className="text-yellow-400 text-sm" />
              <FaStar className="text-yellow-400 text-sm" />
              <FaStar className="text-yellow-400 text-sm" />
              <FaStar className="text-yellow-400 text-sm" />
            </div>
            <span className="text-sm font-medium">Trusted by thousands of professionals</span>
          </div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-8 text-center">
            <Link href="/">
              <h1 className="text-3xl font-bold text-blue-600">bSkilling</h1>
              <p className="text-gray-600 text-sm mt-1">Your Gateway to Tech Excellence</p>
            </Link>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Your Account</h2>
              <p className="text-gray-600">Start your learning journey with bSkilling today</p>
            </div>

            {/* Signup Form Component */}
            <SignupForm />

            {/* Already have account */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                Already have an account?{' '}
                <Link href="/login" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Sign In
                </Link>
              </p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-xs mb-4">Partnered with industry leaders</p>
            <div className="flex items-center justify-center space-x-6 opacity-60">
              <span className="text-gray-600 font-semibold text-sm">AWS</span>
              <span className="text-gray-600 font-semibold text-sm">Microsoft</span>
              <span className="text-gray-600 font-semibold text-sm">Oracle</span>
              <span className="text-gray-600 font-semibold text-sm">CompTIA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
