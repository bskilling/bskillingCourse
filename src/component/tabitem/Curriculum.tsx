import React, { useState } from 'react';
import { Coursedetailstype } from 'common/util/types';
import { FaCheck } from 'react-icons/fa';

interface CurriculumProps {
  courseDetails: Coursedetailstype | null;
}

const Curriculum: React.FC<CurriculumProps> = ({ courseDetails }) => {
  const [expandedModuleId, setExpandedModuleId] = useState<string | null>(null);

  const handleToggle = (moduleId: string) => {
    setExpandedModuleId(prevId => (prevId === moduleId ? null : moduleId));
  };

  // Extract the curriculum from courseDetails
  const curriculum = courseDetails?.training_metadata?.curriculum;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-6 md:py-10">
      <h1 className="font-bold text-xl">Curriculum</h1>
      {curriculum && curriculum.length > 0 ? (
        curriculum.map(module => (
          <div key={module._id} className="border-b border-gray-300">
            <div
              className="flex items-center justify-between cursor-pointer py-4 px-2"
              onClick={() => handleToggle(module._id)}
            >
              <h2 className="text-lg font-semibold">{module.title}</h2>
              <span>{expandedModuleId === module._id ? '▲' : '▼'}</span>
            </div>
            <div
              className={`transition-max-height duration-300 ease-in-out overflow-hidden ${expandedModuleId === module._id ? 'max-h-screen' : 'max-h-0'}`}
            >
              <ul className="pl-4">
                {module.section_parts.map(part => (
                  <li key={part._id} className="flex items-center space-x-2 py-2">
                    <FaCheck className="text-green-500" />
                    <span>{part.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))
      ) : (
        <p>No curriculum available.</p>
      )}
    </div>
  );
};

export default Curriculum;
