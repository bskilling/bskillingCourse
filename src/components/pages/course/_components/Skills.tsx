import React from 'react';
import Image from 'next/image';
import { AwardIcon, BriefcaseIcon, CheckCircle, LightbulbIcon, StarIcon } from 'lucide-react';

interface Tool {
  logo: {
    viewUrl: string;
  };
}

interface CourseResourcesProps {
  skills: string[];
  tools: Tool[];
}

const CourseResources: React.FC<CourseResourcesProps> = ({ skills, tools }) => {
  return (
    <section className="container mx-auto max-w-7xl p-8 pb-10">
      {/* Skills Section */}
      {skills && skills.length > 0 && (
        <div className="mb-16 py-10" id="skills">
          <div className="relative mb-10">
            {/* Background blur effect */}
            <div className="absolute -left-6 -top-6 w-24 h-24 bg-green-200 rounded-full blur-3xl opacity-20"></div>

            <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center space-x-4 mb-6 sm:mb-0">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-xl shadow-lg">
                  <LightbulbIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 relative">
                  Skills You&apos;ll Master
                  <span className="absolute -bottom-2 left-0 w-16 h-1 bg-green-500 rounded-full"></span>
                </h2>
              </div>
              <div className="bg-green-50 py-2 px-4 rounded-full text-green-700 text-sm font-medium border border-green-200 shadow-sm">
                {skills.length} Career-Boosting Skills
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {skills.map((skill, index) => {
              // Alternating color patterns for variety
              const patterns = [
                {
                  bg: 'bg-gradient-to-br from-green-50 to-emerald-50',
                  icon: 'bg-green-100 text-green-600',
                  border: 'border-green-200',
                },
                {
                  bg: 'bg-gradient-to-br from-blue-50 to-cyan-50',
                  icon: 'bg-blue-100 text-blue-600',
                  border: 'border-blue-200',
                },
                {
                  bg: 'bg-gradient-to-br from-purple-50 to-indigo-50',
                  icon: 'bg-purple-100 text-purple-600',
                  border: 'border-purple-200',
                },
                {
                  bg: 'bg-gradient-to-br from-amber-50 to-yellow-50',
                  icon: 'bg-amber-100 text-amber-600',
                  border: 'border-amber-200',
                },
              ];

              const pattern = patterns[index % patterns.length];

              // Randomly select an icon for visual variety
              const icons = [
                <CheckCircle key="check" className="h-5 w-5" />,
                <StarIcon key="star" className="h-5 w-5" />,
                <AwardIcon key="award" className="h-5 w-5" />,
                <BriefcaseIcon key="briefcase" className="h-5 w-5" />,
              ];

              const icon = icons[index % icons.length];

              return (
                <div
                  key={index}
                  className={`relative flex items-center p-5 ${pattern.bg} rounded-xl shadow-md border ${pattern.border} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group overflow-hidden`}
                >
                  {/* Decorative dot in background */}
                  <div className="absolute -right-4 -bottom-4 w-16 h-16 rounded-full bg-white opacity-20"></div>

                  <div
                    className={`flex-shrink-0 w-10 h-10 ${pattern.icon} rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}
                  >
                    {React.cloneElement(icon, {
                      className: `h-5 w-5 ${pattern.icon}`,
                    })}
                  </div>
                  <p className="ml-4 font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                    {skill}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom decorative element */}
          <div className="mt-10 text-center">
            <div className="inline-flex items-center justify-center space-x-1">
              <span className="w-2 h-2 rounded-full bg-green-300"></span>
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="w-2 h-2 rounded-full bg-green-600"></span>
              <span className="w-2 h-2 rounded-full bg-green-700"></span>
            </div>
          </div>
        </div>
      )}

      {/* Tools Section */}
      {tools && tools.length > 0 && (
        <div className="w-full">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-1.5 h-8 bg-blue-600 rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-800">Industry Tools & Technologies</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {tools.map((tool, index) => (
              <img
                width={100}
                height={100}
                src={tool?.logo?.viewUrl}
                alt="Tool"
                className="w-16 object-cover"
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default CourseResources;
