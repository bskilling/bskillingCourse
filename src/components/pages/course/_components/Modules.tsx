import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  PlayCircle,
  PlayIcon,
} from "lucide-react";
import React, { useState } from "react";
import { ICourse } from "./types";

interface FAQProps {
  chapters: ICourse["curriculum"]["chapters"];
}

export default function Modules({ chapters }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const visibleChapters = showAll ? chapters : chapters.slice(0, 7);

  return (
    <section className="mt-10">
      <div className="w-full mx-auto ">
        {/* <h2 className="text-4xl font-bold text-center mb-8 flex items-center justify-center gap-2">
          <QuestionMarkCircleIcon className="h-8 w-8 text-[#F8B400]" />
          Modules
        </h2> */}
        <div className="space-y-4">
          {visibleChapters.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-[#F8B400] transition-all"
            >
              <button
                className="w-full flex justify-between items-center text-gray-800 font-medium focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span>
                  Module {index + 1} {faq.title}
                </span>
                {openIndex === index ? (
                  <ChevronUpIcon className="h-6 w-6 text-[#F8B400]" />
                ) : (
                  <ChevronDownIcon className="h-6 w-6 text-[#F8B400]" />
                )}
              </button>
              <div
                className={`mt-2 pl-4 text-gray-700 transition-all duration-300 ${
                  openIndex === index
                    ? "h-auto opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {faq.lessons.map((content, contentIndex) => (
                  <div
                    key={contentIndex}
                    className="flex items-center gap-3 text-gray-800 text-sm font-medium my-2"
                  >
                    <PlayCircle className="h-5 w-5 text-indigo-500" />
                    <span className="truncate">{content.title}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {chapters.length > 7 && (
          <div className="text-center mt-6">
            <button
              className="text-[#F8B400] font-semibold underline"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
