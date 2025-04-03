/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ICourse } from './types';
import { BookOpen, Clock, Award, Users, ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  category?: ICourse['category'];
  title: string;
  description: string;
  bannerImage: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  category,
  title,
  description,
  bannerImage,
}) => {
  return (
    <section className="w-full bg-white overflow-hidden">
      {/* Top wave decoration */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 h-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-full translate-y-1"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,128L80,144C160,160,320,192,480,192C640,192,800,160,960,149.3C1120,139,1280,149,1360,154.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side - Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            {category && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-800">
                  <span className="mr-1.5 h-2 w-2 rounded-full bg-blue-600"></span>
                  {category.name}
                </span>
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              {description}
            </motion.p>

            {/* Course Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 my-6"
            >
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-gray-600">8 Weeks</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-gray-600">24 Modules</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-gray-600">Certificate</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 rounded-lg font-medium text-base">
                Enroll Now
              </Button>
              <Button
                variant="outline"
                className="border-blue-200 text-blue-600 hover:bg-blue-50 px-6 py-5 rounded-lg font-medium text-base"
              >
                Download Syllabus
                <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center pt-6 space-x-4"
            >
              <div className="flex -space-x-2">
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  src="https://randomuser.me/api/portraits/women/17.jpg"
                  alt="Student"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Student"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Student"
                />
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-semibold text-gray-900">3,500+</span> students enrolled
              </div>
            </motion.div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Main image with shadow effect */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={bannerImage}
                  alt="Course Banner"
                  className="w-full h-auto object-cover rounded-2xl"
                />

                {/* Gradient overlay for text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>

                {/* Floating card elements */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="absolute top-6 right-6 bg-white p-4 rounded-lg shadow-lg flex items-center space-x-3"
                >
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Award className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Industry Recognized</div>
                    <div className="text-xs text-gray-500">Certificate</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-lg flex items-center space-x-3"
                >
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Live Classes</div>
                    <div className="text-xs text-gray-500">With Industry Experts</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 h-16 mt-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-full -translate-y-full rotate-180"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,128L80,144C160,160,320,192,480,192C640,192,800,160,960,149.3C1120,139,1280,149,1360,154.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};
