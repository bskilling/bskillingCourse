import React from 'react';

interface NewsLetterProps {
    className?: string; // Optional className prop
}

const NewsLetter: React.FC<NewsLetterProps> = ({ className }) => {
  return (
    <div className={` bg-deepBlue ${className}`}>
      <div className="py-12 max-w-7xl mx-auto px-6 sm:px-6 lg:px-16">
        <h1 className="text-center mb-4 text-3xl font-extrabold text-gray-900">
          Get Newsletter
        </h1>
        <p className="text-center mb-8 text-gray-700">
          Receive regular updates from BSkilling about our latest offers and courses!
        </p>
        <div className="w-full mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type='email'
            className='bg-white w-full sm:w-[30%] px-4 py-2 border border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-customPurple'
            placeholder='Email Address'
          />
          <button className='w-full sm:w-auto px-6 py-2 bg-btColor hover:bg-customPurple text-white rounded-lg transition duration-300'>
            Get it Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
