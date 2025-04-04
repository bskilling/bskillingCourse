import React from 'react';
import { FaBullseye, FaRocket, FaCheck, FaGraduationCap, FaStar } from 'react-icons/fa';

interface OutcomesProps {
  outcomes: string[];
}

const Outcomes: React.FC<OutcomesProps> = ({ outcomes }) => {
  if (!outcomes || outcomes.length === 0) return null;

  // Random colors for the outcome cards
  const cardColors = [
    { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'text-blue-600' },
    {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      icon: 'text-purple-600',
    },
    { bg: 'bg-green-50', border: 'border-green-200', icon: 'text-green-600' },
    {
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
      icon: 'text-indigo-600',
    },
    { bg: 'bg-teal-50', border: 'border-teal-200', icon: 'text-teal-600' },
  ];

  // Icons for the outcomes
  const outcomeIcons = [
    <FaBullseye key="bullseye" />,
    <FaCheck key="check" />,
    <FaStar key="star" />,
    <FaGraduationCap key="graduation" />,
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-0">
      <div className="relative p-8 bg-gradient-to-br from-blue-600 to-indigo-800 rounded-3xl shadow-2xl overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-white"></div>
        </div>

        {/* Title section with animated highlight */}
        <div className="relative mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <div className="bg-white p-3 rounded-full shadow-lg">
              <FaRocket className="text-blue-600 h-7 w-7" />
            </div>
            <h2 className="text-3xl font-bold text-white">Learning Outcomes</h2>
          </div>
          <div className="bg-white/20 backdrop-blur-sm py-2 px-4 rounded-full text-white text-sm font-medium border border-white/30">
            {outcomes.length} Skills You Will Master
          </div>
        </div>

        {/* Outcomes grid with modern styling */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, index) => {
            const colorSet = cardColors[index % cardColors.length];
            const icon = outcomeIcons[index % outcomeIcons.length];

            return (
              <div
                key={index}
                className={`flex items-start gap-4 p-5 ${colorSet.bg} rounded-xl border ${colorSet.border} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group`}
              >
                <div
                  className={`${colorSet.icon} h-9 w-9 p-2 bg-white rounded-full shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  {React.cloneElement(icon, { className: `h-5 w-5` })}
                </div>
                <div className="flex-1">
                  <span className="text-gray-800 text-md font-medium block">{outcome}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom decorative element */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      </div>
    </div>
  );
};

export default Outcomes;
