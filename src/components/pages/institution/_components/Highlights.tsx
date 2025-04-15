import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HighlightsProps {
  highlights: string[];
}

const Highlights: React.FC<HighlightsProps> = ({ highlights }) => {
  return (
    <div className="mt-8">
      <h2 className="  text-gray-900 mb-5 tracking-wide capitalize">
        <span className="bg-gradient-to-r font-medium from-gray-900 to-gray-700 bg-clip-text text-transparent">
          Course Highlights
        </span>
      </h2>

      <ul className="space-y-3">
        <AnimatePresence>
          {highlights.map((highlight, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center gap-3 p-4 rounded-2xl bg-white/80 backdrop-blur-lg shadow-lg border-r-4 border-green-500   hover:shadow-xl hover:bg-white transition-all cursor-pointer"
            >
              <div className="w-5">
                <CheckCircle className="text-green-500 h-5 w-5 drop-shadow-md" />
              </div>
              <span className="text-gray-900 text-base tracking-tight whitespace-pre-line">
                {highlight.replace(/\\n/g, '\n')}
              </span>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default Highlights;
