/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { useState } from 'react';
import PopupForm from './PopupForm';
import { motion } from 'framer-motion';
import { BadgeCheck, Briefcase } from 'lucide-react';

const Placement = () => {
  const [isCorporatePopupOpen, setCorporatePopupOpen] = useState(false);
  const [isPlacementPopupOpen, setPlacementPopupOpen] = useState(false);

  return (
    <div className="container mx-auto p-6">
      {/* Corporate Training Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-center my-10 p-6 shadow-lg rounded-xl bg-gradient-to-r from-blue-50 to-white"
      >
        <div className="md:w-1/2 p-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <BadgeCheck /> Corporate Training
          </h2>
          <p className="mt-3 text-gray-700 text-sm">
            Enhance your team’s skills with bSkilling&apos;s corporate training solutions. Our
            expert-led programs focus on technical enhancement, leadership growth, and team
            collaboration. Available online or on-site, with real-world case studies and flexible
            schedules.
          </p>
          <button
            className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
            onClick={() => setCorporatePopupOpen(true)}
          >
            Know More
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/support.jfif"
            width={400}
            height={250}
            alt="Corporate Training"
            className="rounded-md"
          />
        </div>
      </motion.div>

      {/* Placement Support Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col md:flex-row items-center my-10 p-6 shadow-lg rounded-xl bg-gradient-to-r from-green-50 to-white"
      >
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/placement.jfif"
            width={400}
            height={250}
            alt="Placement Support"
            className="rounded-md"
          />
        </div>
        <div className="md:w-1/2 p-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Briefcase /> Placement Support
          </h2>
          <p className="mt-3 text-gray-700 text-sm">
            We provide dedicated placement support for six months post-course. Get expert resume
            guidance, mock interviews, and real-world preparation to secure your dream job.
          </p>
          <ul className="mt-3 text-sm text-gray-600 list-disc pl-5">
            <li>Six months of job assistance</li>
            <li>Mock interviews & confidence-building</li>
            <li>Expert resume-building guidance</li>
          </ul>
          <button
            className="mt-4 px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700"
            onClick={() => setPlacementPopupOpen(true)}
          >
            Know More
          </button>
        </div>
      </motion.div>

      {/* Popups */}
      {isCorporatePopupOpen && (
        <PopupForm
          handleClosePopup={() => setCorporatePopupOpen(false)}
          title="Corporate Training"
        />
      )}
      {isPlacementPopupOpen && (
        <PopupForm
          handleClosePopup={() => setPlacementPopupOpen(false)}
          title="Placement Support"
        />
      )}
    </div>
  );
};

export default Placement;
