import React from 'react';
import { FaCheck } from 'react-icons/fa';
const PmpForm = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      {/* Left side with text */}
      <div className="lg:w-1/2 p-8">
        <h1 className="text-2xl font-bold mb-4">
          Project Management Professional (PMP)® Certification{' '}
        </h1>
        <p className="text-lg">Become an exceptional project manager with PMP Training</p>
        <ul className="list-none mt-4 text-lg">
          <li className="flex items-center mb-2">
            <FaCheck />
            Online course for PMP® training
          </li>
          <li className="flex items-center mb-2">
            <FaCheck />
            Covers project management methodologies.
          </li>
          <li className="flex items-center mb-2">
            <FaCheck />
            Practical exercises on project phases online.
          </li>
          <li className="flex items-center mb-2">
            <FaCheck />
            Prepare for PMP® certification and leadership.
          </li>
        </ul>
      </div>

      {/* Right side with image */}
      <div className="lg:w-1/2">
        <img src="/pmp.svg" alt="pmp" className="w-full h-auto object-cover" />
      </div>
    </div>
  );
};

export default PmpForm;
