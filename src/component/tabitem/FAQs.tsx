import React, { useState } from 'react';
import { Coursedetailstype } from '@/component/common/util/types';

interface FAQsProps {
  courseDetails: Coursedetailstype | null;
}

const FAQs: React.FC<FAQsProps> = ({ courseDetails }) => {
  const [expandedFAQId, setExpandedFAQId] = useState<string | null>(null);

  const handleToggle = (faqId: string) => {
    setExpandedFAQId(prevId => (prevId === faqId ? null : faqId));
  };

  const faqs = courseDetails?.training_metadata?.FAQs || [];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-6 md:py-10">
      <h1 className="font-bold text-xl">FAQs</h1>
      {faqs.length > 0 ? (
        faqs.map(faq => (
          <div key={faq._id} className="border-b border-gray-300">
            <div
              className="flex items-center justify-between cursor-pointer py-4 px-2"
              onClick={() => handleToggle(faq._id)}
            >
              <h2 className="text-lg font-semibold">{faq.question}</h2>
              <span>{expandedFAQId === faq._id ? '▲' : '▼'}</span>
            </div>
            <div
              className={`transition-max-height duration-300 ease-in-out overflow-hidden ${expandedFAQId === faq._id ? 'max-h-screen' : 'max-h-0'}`}
            >
              <p className="pl-4 py-2">{faq.answer}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No FAQs available.</p>
      )}
    </div>
  );
};

export default FAQs;
