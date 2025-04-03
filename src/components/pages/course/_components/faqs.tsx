import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQ[];
}

const FAQSection: React.FC<FAQProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-10" id="faqs">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8 flex items-center justify-center gap-2">
          <QuestionMarkCircleIcon className="h-8 w-8 text-[#F8B400]" />
          FAQs
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-[#F8B400] transition-all"
            >
              <button
                className="w-full flex justify-between items-center font-semibold text-lg text-gray-800 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span>
                  Q.{index + 1} {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUpIcon className="h-6 w-6 text-[#F8B400]" />
                ) : (
                  <ChevronDownIcon className="h-6 w-6 text-[#F8B400]" />
                )}
              </button>
              <div
                className={`mt-2 text-gray-700 pl-4 transition-all ${
                  openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
