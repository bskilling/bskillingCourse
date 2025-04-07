/* eslint-disable react/jsx-key */
import {
  AcademicCapIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  BriefcaseIcon,
  UserGroupIcon,
  GlobeAltIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

// Extended icon set with blue theme
const icons = [
  <SparklesIcon className="h-8 w-8 text-blue-500" />,
  <GlobeAltIcon className="h-8 w-8 text-indigo-600" />,
  <BriefcaseIcon className="h-8 w-8 text-sky-600" />,
  <UserGroupIcon className="h-8 w-8 text-blue-600" />,
  <AcademicCapIcon className="h-8 w-8 text-indigo-500" />,
  <LightBulbIcon className="h-8 w-8 text-blue-500" />,
  <RocketLaunchIcon className="h-8 w-8 text-sky-600" />,
  <ChartBarIcon className="h-8 w-8 text-indigo-600" />,
];

interface Props {
  whyJoin: string[];
}

const WhyJoinSection = ({ whyJoin }: Props) => {
  if (!whyJoin || whyJoin.length === 0) {
    return null;
  }

  return (
    <section className="py-16 relative overflow-hidden bg-white">
      {/* Decorative elements */}
      {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-sky-500"></div> */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Join This Programs?</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the unique advantages that make our program the perfect choice for your
              future
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {whyJoin.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl transform group-hover:scale-105 transition-all duration-300"></div>
              <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full transition-all duration-300 group-hover:shadow-xl">
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg shadow-md flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-all duration-300">
                  {icons[index % icons.length]}
                </div>

                <div className="mt-4">
                  <p className="text-gray-700">{reason}</p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
