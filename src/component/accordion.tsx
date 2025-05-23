import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Accordion = ({ question, answer }: { question: string; answer: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div>
      <AnimatePresence>
        <motion.div
          key="question"
          className="rounded-tr-md mt-5 w-full   relative z-20  rounded-br-md shadow-sm px-1 py-2  cursor-pointer font-open border-l-2 border-blue-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div className="text-gray-800 font-bold ml-1">
            <motion.span animate={{ color: isOpen ? '#125582' : '#0055FF' }}>
              {isOpen ? '-' : '+'}
            </motion.span>{' '}
            {question}
          </motion.div>
        </motion.div>

        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate={isOpen ? 'open' : 'collapsed'}
            exit="collapsed"
            variants={{
              open: { y: 0, height: 'auto' },
              collapsed: { y: -8, height: 0 },
            }}
            transition={{
              duration: 0.2,
              ease: 'linear',
              when: 'open',
              staggerChildren: 0.1,
              collapse: { duration: 0.1 }, // Set the transition duration for the collapsed state
            }}
            className="p-2 mb-4 text-gray-700 border-gray-300"
          >
            {answer.map((item, index) => (
              <div key={index} className="flex gap-2 md:ml-4  w-full">
                <span className="text-blue-600 font-extrabold ">-</span>
                <p className=" ">{item}</p>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Accordion;
