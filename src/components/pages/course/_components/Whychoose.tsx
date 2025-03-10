/* eslint-disable react/jsx-key */
import {
  AcademicCapIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  ChartBarIcon,
} from '@heroicons/react/24/solid';

const icons = [
  <AcademicCapIcon className="h-10 w-10 text-[#F8B400]" />,
  <LightBulbIcon className="h-10 w-10 text-[#FF6B35]" />,
  <RocketLaunchIcon className="h-10 w-10 text-[#2E1A47]" />,
  <ChartBarIcon className="h-10 w-10 text-[#0D1B2A]" />,
];

interface Props {
  whyJoin: string[];
}

const WhyJoinSection = ({ whyJoin }: Props) => {
  if (!whyJoin || whyJoin.length === 0) {
    return null;
  }
  return (
    <section
      id="why-join"
      className="py-20 px-6 bg-gradient-to-b from-gray-100 to-gray-50"
    >
      <div className="w-full mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
          🚀 Why Join This Program?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyJoin.map((reason, index) => (
            <div
              key={index}
              className="bg-white/70 p-6 rounded-xl shadow-lg border-l-4 border-[#F8B400] backdrop-blur-md transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center gap-4 mb-3">
                {/* {icons[index % icons.length]} */}
                <span className="text-sm font-semibold">{reason}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
