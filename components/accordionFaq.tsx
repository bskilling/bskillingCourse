import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AccordionFaq = ({
  question,
  answer,
  answer2,
  answer3,
  answer4,
  answer5,
  answer6,
  answer7,
}: {
  question: string;
  answer: string;
  answer2?: string;
  answer3?: string;
  answer4?: string;
  answer5?: string;
  answer6?: string;
  answer7?: string;
}) => {
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
            <motion.span animate={{ color: isOpen ? "#125582" : "#0055FF" }}>
              {isOpen ? "-" : "+"}
            </motion.span>{" "}
            {question}
          </motion.div>
        </motion.div>

        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate={isOpen ? "open" : "collapsed"}
            exit="collapsed"
            variants={{
              open: { y: 0, height: "auto" },
              collapsed: { y: -8, height: 0 },
            }}
            transition={{
              duration: 0.2,
              ease: "linear",
              when: "open",
              staggerChildren: 0.1,
              collapse: { duration: 0.1 }, // Set the transition duration for the collapsed state
            }}
            className="p-2 text-lg text-gray-700 border-gray-300"
          >
            <div className="flex gap-2 md:ml-4 mt-4 w-full">
              <span className="text-blue-600 text-xs"></span>
              <p className=" text-sm ">{answer}</p>
            </div>
            {answer2 && (
              <div className="flex gap-2 md:ml-4 mt-2 w-full">
                <span className="text-blue-600 text-xs"></span>
                <p className="text-sm">{answer2}</p>
              </div>
            )}
            {answer3 && (
              <div className="flex gap-2 md:ml-4 mt-2 w-full">
                <span className="text-blue-600 text-xs"></span>
                <p className="text-sm">{answer3}</p>
              </div>
            )}

            {answer4 && (
              <div className="flex gap-2 md:ml-4 mt-2 w-full">
                <span className="text-blue-600 text-xs"></span>
                <p className="text-sm">{answer4}</p>
              </div>
            )}
            {answer5 && (
              <div className="flex gap-2 md:ml-4 mt-2 w-full">
                <span className="text-blue-600 text-xs"></span>
                <p className="text-sm">{answer5}</p>
              </div>
            )}

            {answer6 && (
              <div className="flex gap-2 md:ml-4 mt-2 w-full">
                <span className="text-blue-600 text-xs"></span>
                <p className="text-sm">{answer6}</p>
              </div>
            )}

            {answer7 && (
              <div className="flex gap-2 md:ml-4 mt-2 w-full">
                <span className="text-blue-600 text-xs"></span>
                <p className="text-sm">{answer7}</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AccordionFaq;
