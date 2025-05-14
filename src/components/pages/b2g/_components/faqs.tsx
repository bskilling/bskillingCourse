import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import PopupConsultationForm from './dialogs/Form';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQ[];
  _id: string;
}

const FAQSection: React.FC<FAQProps> = ({ faqs, _id }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState<'b2c' | 'b2b' | 'b2i' | 'general'>('b2c');
  const [formTitle, setFormTitle] = useState('Get in Touch');
  const [formDescription, setFormDescription] = useState('');

  const openConsultationForm = (
    type: 'b2c' | 'b2b' | 'b2i' | 'general',
    title: string,
    description: string
  ) => {
    setFormType(type);
    setFormTitle(title);
    setFormDescription(description);
    setIsFormOpen(true);
  };
  // If no FAQs exist, don't render the section
  if (!faqs || faqs.length === 0) {
    return null;
  }

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="faqs">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-1.5 h-8 bg-blue-600 rounded-full"></div>
        <h2 className="text-2xl font-bold text-gray-800">Frequently Asked Questions</h2>
      </div>
      <PopupConsultationForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title={formTitle}
        description={formDescription}
        formType={formType}
        course={_id}
      />
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`bg-white rounded-xl overflow-hidden transition-all duration-200 ${
                isOpen
                  ? 'shadow-md border-blue-200 border'
                  : 'shadow-sm border border-gray-100 hover:border-blue-100'
              }`}
            >
              <button
                className="w-full text-left p-5 focus:outline-none flex justify-between items-start"
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex items-start">
                  <div
                    className={`flex-shrink-0 mt-0.5 mr-4 rounded-full p-1.5 ${
                      isOpen ? 'bg-blue-100' : 'bg-gray-100'
                    }`}
                  >
                    <HelpCircle
                      className={`h-5 w-5 ${isOpen ? 'text-blue-600' : 'text-gray-500'}`}
                    />
                  </div>
                  <span className={`font-medium ${isOpen ? 'text-blue-700' : 'text-gray-800'}`}>
                    {faq.question}
                  </span>
                </div>
                {isOpen ? (
                  <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0 ml-4" />
                )}
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`px-5 pb-5 transition-all duration-300 ease-in-out ${
                  isOpen ? 'block' : 'hidden'
                }`}
              >
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-gray-600 mt-3 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="mt-10 text-center"
        role="button"
        onClick={() =>
          openConsultationForm(
            'b2c',
            'Query',
            'Submit your query and we will get back to you as soon as possible.'
          )
        }
      >
        <div className="inline-flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
          <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
          <p className="text-sm text-gray-600">
            Still have questions?{' '}
            <p className="text-blue-600 font-medium ">Contact our support team</p>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
