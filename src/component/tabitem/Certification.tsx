/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Coursedetailstype } from '@/component/common/util/types';

interface CertificationProps {
  courseDetails: Coursedetailstype | null;
}

const Certification: React.FC<CertificationProps> = ({ courseDetails }) => {
  const certificateText = courseDetails?.training_metadata?.certification_text || '';
  // const certificateImage = courseDetails?.training_metadata?.certification_image || '';

  return (
    <div className="bg-white p-6 rounded-lg shadow-md md:py-10">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="md:w-1/2 md:pr-4 ">
          <h1 className="font-bold text-xl mb-4">Certification</h1>
          <p className="text-base text-justify">{certificateText}</p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-4 md:mt-0">
          <img
            src="/images/certificate.png"
            alt="Certification Image"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Certification;
