/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import PopupForm from './PopupForm';

const Experience = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => setPopupOpen(true);
  const handleClosePopup = () => setPopupOpen(false);

  return (
    <div className="flex flex-col items-center justify-center w-full px-6 mt-10 py-12 md:px-24 lg:px-40 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-6 text-primary md:text-5xl">
        THE BSKILLING EXPERIENCE
      </h1>
      <p className="text-lg text-center mb-10 text-gray-700 md:text-xl">
        Transforming Careers Through Innovative Learning
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/** Personalised Learning */}
        <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-xl">
          <img
            src="/images/Personalised_learning.png"
            alt="Personalised Learning"
            className="w-14 h-14 mb-4 rounded-lg"
          />
          <h2 className="text-2xl font-bold mb-2 text-gray-900">
            Personalised Learning
          </h2>
          <p className="text-base text-gray-600 text-center md:text-lg">
            BSkilling prioritises quality education tailored to meet individual
            needs. Small batches ensure personalised attention and a more
            interactive learning experience.
          </p>
        </div>

        {/** Easily Accessible Courses */}
        <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-xl">
          <img
            src="/images/easy_course.png"
            alt="Easily Accessible Courses"
            className="w-14 h-14 mb-4 rounded-lg"
          />
          <h2 className="text-2xl font-bold mb-2 text-gray-900">
            Easily Accessible Courses
          </h2>
          <p className="text-base text-gray-600 text-center md:text-lg">
            Learning should be accessible to everyone. Our online courses
            provide excellent opportunities for career growth, whether
            you&apos;re a beginner or an experienced professional.
          </p>
        </div>
      </div>

      {/** Call to Action */}

      {/** Additional Features */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/** LMS Access */}
        <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-xl">
          <img
            src="/images/lms_access.png"
            alt="LMS Access"
            className="w-14 h-14 mb-4 rounded-lg"
          />
          <h2 className="text-2xl font-bold mb-2 text-gray-900">
            Convenient Learning with LMS Access
          </h2>
          <p className="text-base text-gray-600 text-center md:text-lg">
            Our LMS platform allows you to access course materials anytime,
            anywhere. Integrate your studies into your busy schedule with ease.
          </p>
        </div>

        {/** Mentor Support */}
        <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-xl">
          <img
            src="/images/support.png"
            alt="Mentor Support"
            className="w-14 h-14 mb-4 rounded-lg"
          />
          <h2 className="text-2xl font-bold mb-2 text-gray-900">
            Projects and Mentor Support
          </h2>
          <p className="text-base text-gray-600 text-center md:text-lg">
            Engage in project-based learning with guidance from experienced
            mentors. Gain real-world experience and apply your skills
            confidently.
          </p>
        </div>
      </div>
      <button
        className="mt-10 bg-primary text-white text-lg px-6 py-3 rounded-lg shadow-md hover:bg-primary-dark transition-all"
        onClick={handleOpenPopup}
      >
        Get in touch
      </button>

      {isPopupOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black opacity-50"
            onClick={handleClosePopup}
          ></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <PopupForm
              handleClosePopup={handleClosePopup}
              title="Get In Touch with Bskilling"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Experience;
