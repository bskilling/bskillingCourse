import React from "react";
import { FaBullseye, FaRocket } from "react-icons/fa";

interface OutcomesProps {
  outcomes: string[];
}

const Outcomes: React.FC<OutcomesProps> = ({ outcomes }) => {
  return (
    <div className="p-6 bg-gradient-to-br from-[#f9fafb] to-[#e5e7eb] rounded-2xl shadow-lg mt-8 border border-gray-300">
      <h2 className="text-xl font-bold mb-4 text-gray-900 flex items-center gap-2">
        <FaRocket className="text-blue-500 h-5 w-5 drop-shadow-md animate-bounce" />
        <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          Learning Outcomes
        </span>
      </h2>
      <div className="grid grid-cols-1 gap-3">
        {outcomes.map((outcome, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 shadow hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
          >
            <FaBullseye className="text-blue-500 h-5 w-5 drop-shadow-md" />
            <span className="text-gray-800 text-sm font-medium tracking-tight">
              {outcome}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Outcomes;
