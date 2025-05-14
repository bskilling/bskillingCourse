import { FaCheck, FaGraduationCap, FaRegLightbulb } from 'react-icons/fa';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { IoSchool } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { ICourse } from './types';
import { useState } from 'react';
import PopupConsultationForm from './dialogs/Form';

const CriteriaSection = ({
  curriculum,
  _id,
}: {
  curriculum: ICourse['curriculum'];
  _id: string;
}) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState<'b2c' | 'b2b' | 'b2i' | 'general'>('b2i');
  const [formTitle, setFormTitle] = useState('Get in Touch');
  const [formDescription, setFormDescription] = useState('');

  const openConsultationForm = (
    type: 'b2c' | 'b2b' | 'b2i' | 'general',
    title: string,
    description: string
  ) => {
    setFormType(type);
    setFormTitle(title);
    setFormDescription(description);
    setIsFormOpen(true);
  };

  return (
    <section className="mt-16 mb-12 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="Criteria">
      <PopupConsultationForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title={formTitle}
        description={formDescription}
        formType={formType}
        course={_id}
      />
      <div className="relative mb-10">
        <div className="absolute -top-6 left-0 w-20 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Program Criteria</h2>
        <p className="mt-3 text-gray-600 max-w-2xl">
          Our carefully designed selection criteria ensure that you'll get the most out of this
          transformative learning experience.
        </p>
      </div>

      <motion.div
        className="grid md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Prerequisites Card */}
        {curriculum.prerequisites && (
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-2xl shadow-lg border border-gray-100 bg-gradient-to-br from-blue-50 to-indigo-50"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full -mt-12 -mr-12"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 rounded-full -mb-10 -ml-10"></div>

            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="flex justify-center items-center w-12 h-12 rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-200">
                  <HiOutlineAcademicCap className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-indigo-900">Prerequisites</h3>
                  <p className="text-indigo-700 text-sm">What you need to begin your journey</p>
                </div>
              </div>

              <ul className="space-y-3">
                {curriculum.prerequisites.map((prerequisite, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-start group"
                  >
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <div className="w-6 h-6 rounded-full bg-indigo-100 group-hover:bg-indigo-200 flex items-center justify-center transition-colors duration-200">
                        <FaCheck className="w-3 h-3 text-indigo-600" />
                      </div>
                    </div>
                    <p className="text-gray-700 group-hover:text-gray-900 font-medium transition-colors duration-200">
                      {prerequisite}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {/* Eligibility Card */}
        {curriculum.eligibility && (
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-2xl shadow-lg border border-gray-100 bg-gradient-to-br from-purple-50 to-pink-50"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full -mt-12 -mr-12"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full -mb-10 -ml-10"></div>

            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="flex justify-center items-center w-12 h-12 rounded-xl bg-purple-600 text-white shadow-md shadow-purple-200">
                  <IoSchool className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-purple-900">Eligibility Criteria</h3>
                  <p className="text-purple-700 text-sm">Who this program is designed for</p>
                </div>
              </div>

              <ul className="space-y-3">
                {curriculum.eligibility.map((eligibility, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-start group"
                  >
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <div className="w-6 h-6 rounded-full bg-purple-100 group-hover:bg-purple-200 flex items-center justify-center transition-colors duration-200">
                        <FaCheck className="w-3 h-3 text-purple-600" />
                      </div>
                    </div>
                    <p className="text-gray-700 group-hover:text-gray-900 font-medium transition-colors duration-200">
                      {eligibility}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Program Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 text-center shadow-md border border-gray-200">
          <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <FaGraduationCap className="w-6 h-6 text-indigo-600" />
          </div>
          <p className="text-3xl font-bold text-gray-800">98%</p>
          <p className="text-sm text-gray-600 mt-1">Completion Rate</p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 text-center shadow-md border border-gray-200">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <FaRegLightbulb className="w-6 h-6 text-purple-600" />
          </div>
          <p className="text-3xl font-bold text-gray-800">24/7</p>
          <p className="text-sm text-gray-600 mt-1">Learning Support</p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 text-center shadow-md border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
            </svg>
          </div>
          <p className="text-3xl font-bold text-gray-800">15k+</p>
          <p className="text-sm text-gray-600 mt-1">Students Enrolled</p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 text-center shadow-md border border-gray-200">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg
              className="w-6 h-6 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <p className="text-3xl font-bold text-gray-800">4.9/5</p>
          <p className="text-sm text-gray-600 mt-1">Student Rating</p>
        </div>
      </motion.div>

      {/* CTA Button */}
      <div className="mt-10 text-center">
        <button
          onClick={() =>
            openConsultationForm(
              'b2i',
              'Check Your Eligibility',
              'Explore how we can collaborate to enhance educational outcomes for your institution.'
            )
          }
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
        >
          Check Your Eligibility
          <svg
            className="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default CriteriaSection;
