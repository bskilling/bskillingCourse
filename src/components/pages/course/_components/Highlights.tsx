import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HighlightsProps {
  highlights: string[];
  title?: string;
}

const Highlights: React.FC<HighlightsProps> = ({ highlights, title = 'Course Highlights' }) => {
  // Subtle fade-in animation for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  // Simple fade-in for items
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <div className="w-full flex justify-center pb-16 -mt-10">
      <motion.div
        className="max-w-7xl w-full px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-600 max-w-2xl">
            Our curriculum is designed by industry experts to ensure you master the skills that
            matter most.
          </p>
        </div>

        <motion.div
          className="grid gap-6 sm:grid-cols-1 md:grid-cols-2"
          variants={containerVariants}
        >
          {highlights.map((highlight, index) => (
            <motion.div key={index} variants={itemVariants} className="flex items-center gap-4">
              <div className="flex-shrink-0 bg-blue-50 p-2 rounded-md">
                <CheckCircle className="text-blue-700 h-5 w-5" />
              </div>
              <span className="text-gray-800">{highlight}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Highlights;
