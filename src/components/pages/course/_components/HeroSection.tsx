/* eslint-disable @next/next/no-img-element */
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ICourse } from './types';
import {
  AcademicCapIcon,
  DocumentTextIcon,
  ClockIcon,
  BookOpenIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/solid';
import { LaptopIcon } from 'lucide-react';

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
    <section
      id="hero"
      className="relative w-full py-16 px-6 flex justify-center bg-gradient-to-r from-[#2E1A47] to-[#0D1B2A] rounded-xl shadow-2xl overflow-hidden"
    >
      {/* Background Icons */}
      <div className="absolute inset-0 flex justify-between items-center opacity-10 pointer-events-none px-10">
        <div className="text-white text-[180px] flex flex-col gap-20">
          <AcademicCapIcon className="w-24 h-24" />
          <BookOpenIcon className="w-24 h-24" />
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row w-[75vw] m-auto justify-between gap-12 items-center">
        {/* Left Side - Course Details */}
        <div className="space-y-5 text-white text-center md:text-left max-w-lg">
          {category && (
            <span className="inline-block bg-[#FFD166] text-[#5B2A86] px-4 py-1 rounded-full text-sm font-semibold shadow-md">
              {category?.name}
            </span>
          )}
          <h1 className="text-4xl font-extrabold leading-tight">{title}</h1>
          <p className="text-lg text-white/80 leading-relaxed">{description}</p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
            <Button className="bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FFD166] transition">
              Apply Now
            </Button>
            <Button className="border-2 border-[#FFD166] text-[#FFD166] px-6 py-3 rounded-lg font-semibold hover:bg-[#FFD166] hover:text-[#5B2A86] transition">
              Get Syllabus
            </Button>
          </div>
        </div>

        {/* Right Side - Enhanced Image Card */}
        <div className="relative w-full max-w-[650px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative mt-6"
          >
            <div className="relative">
              {/* Background Card */}
              <div className="w-[420px] h-[520px] bg-gradient-to-br from-[#5B2A86] to-[#FFD166] rounded-3xl shadow-xl"></div>

              {/* Course Banner Image */}
              <img
                width={650}
                height={400}
                src={bannerImage}
                alt="Course Banner"
                className="absolute top-10 left-16 object-cover rounded-lg shadow-xl w-[650px] h-[420px] border-[6px] border-white"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
