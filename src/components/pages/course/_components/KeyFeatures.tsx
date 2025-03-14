import { IoIosCheckmarkCircle } from 'react-icons/io';
import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaGraduationCap,
} from 'react-icons/fa';

const icons = [FaBookOpen, FaChalkboardTeacher, FaLaptopCode, FaGraduationCap];

interface KeyFeaturesProps {
  features: string[];
}

const KeyFeatures: React.FC<KeyFeaturesProps> = ({ features }) => {
  return (
    <div className="mt-5 mr-10">
      <h2 className="mt-10 text-xl font-semibold text-black">Key Features</h2>
      {features.length > 0 && (
        <div className="grid grid-cols-2 gap-5 mt-5">
          {features.map((feature, index) => {
            const Icon = icons[index % icons.length]; // Cycle through icons
            return (
              <div
                key={index}
                className="flex items-center gap-x-3 bg-blue-50 p-4 rounded-lg shadow-sm"
              >
                <Icon className="text-blue-500" size={24} />
                <p className="text-sm text-black font-medium">{feature}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default KeyFeatures;
