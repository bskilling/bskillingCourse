/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useEffect } from 'react';
import Head from 'next/head';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BsCircleFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import Link from 'next/link';
import NavbarSection from '@/component/navbar/NavbarSection';
import { motion } from 'framer-motion';
import { FaGlobe } from 'react-icons/fa';

const ties = [
  {
    id: 1,
    name: 'Karnataka Skill Development Corporation',
    description:
      'In partnership with bSkilling, we drive impactful programs focused on innovation and skill development.',
    img: '/new-image/ksdc.png',
    link: `/government-training-program/karnataka-skill-development-corporation`,
  },
  {
    id: 2,
    name: 'Naan Mudhalvan',
    description:
      'A transformative initiative aimed at empowering youth with industry-relevant skills, career guidance, and opportunities, shaping the leaders of tomorrow.',
    img: '/new-image/naan-logo.png',
    link: `/government-training-program/naan-mudhalvan`,
  },
  {
    id: 3,
    name: 'Future Skills',
    description:
      'A premier trade body and chamber of commerce for the tech industry, driving innovation, policy advocacy, and skill development to foster India&#39;s digital transformation.',
    img: '/new-image/future-skills.png',
    link: `/government-training-program/nasscom-future-skills`,
  },
  {
    id: 4,
    name: 'NSDC',
    description:
      'The National Skill Development Corporation focuses on empowering India&#39;s workforce through skill development initiatives, industry partnerships, and training programs to enhance employability.',
    img: '/new-image/nsdc.png',
    link: `/government-training-program/national-skill-development-corporation`,
  },
];

const stats = [
  { id: 1, number: '50+', label: 'Government Partners' },
  { id: 2, number: '10K+', label: 'Students Trained' },
  { id: 3, number: '95%', label: 'Placement Rate' },
  { id: 4, number: '200+', label: 'Training Programs' },
];

export default function GovernmentTrainingProgram() {
  const router = useRouter();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      <Head>
        <title>Government Training Program - College Training</title>
        <meta
          name="description"
          content="Join our comprehensive government training program designed for college students. Enhance your skills with expert-led courses and practical experience."
        />
        <meta
          name="keywords"
          content="government training, college training, skill enhancement, government programs, student training"
        />
        <meta name="author" content="Your Company Name" />
        <meta property="og:title" content="Government Training Program - College Training" />
        <meta
          property="og:description"
          content="Join our comprehensive government training program designed for college students. Enhance your skills with expert-led courses and practical experience."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.yourwebsite.com/training-programs/government-college-training"
        />
        <meta
          property="og:image"
          content="https://www.yourwebsite.com/images/og-government-training.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Government Training Program - College Training" />
        <meta
          name="twitter:description"
          content="Join our comprehensive government training program designed for college students. Enhance your skills with expert-led courses and practical experience."
        />
        <meta
          name="twitter:image"
          content="https://www.yourwebsite.com/images/twitter-government-training.jpg"
        />
        <link
          rel="canonical"
          href="https://www.yourwebsite.com/training-programs/government-college-training"
        />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Navbar */}
        <div className="sticky top-0 z-[50] bg-white shadow-sm">
          <nav className="text-[#1f1f1f] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm font-medium py-4">
            <div className="text-3xl font-bold inline-flex items-center">
              <Link href="/">
                <div className="relative w-[120px] h-[30px] md:w-[150px] md:h-[50px]">
                  <img src="/logo.png" alt="Logo" className="object-contain" />
                </div>
              </Link>
            </div>
            <NavbarSection />
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img
            src="/new-image/govt.webp"
            alt="Government Training Programs"
            className="w-full  object-cover"
          />
        </section>

        {/* Stats Section */}
        {/* <section className="py-12 bg-gradient-to-r from-indigo-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={containerVariants}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.id}
                  variants={cardVariants}
                  className="bg-white rounded-xl shadow-md p-6 text-center transform hover:scale-105 transition-transform duration-300"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section> */}

        {/* Government Partnerships Section */}
        <section className="py-20 pt-0 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
              }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center justify-center px-4 py-1.5 mb-5 bg-blue-50 border border-blue-100 rounded-full text-primary text-sm font-medium">
                <FaGlobe className="mr-2 text-primary" />
                Trusted Government Affiliations
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Government <span className="text-primary">Partnerships</span>
              </h2>

              <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>

              <p className="max-w-3xl mx-auto text-gray-600 text-lg">
                Collaborate with prestigious government bodies to drive innovation and empower the
                workforce of tomorrow.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {ties.map(tie => (
                <motion.div
                  key={tie.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: 'easeOut' },
                    },
                  }}
                >
                  <div
                    className="h-full overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white border-0 relative rounded-xl"
                    onClick={() => router.push(tie.link)}
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full z-0"></div>

                    <div className="h-56 p-0 relative overflow-hidden bg-gray-50">
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent z-10"></div>
                      <div className="h-full flex items-center justify-center p-8 relative z-20">
                        <div className="bg-white p-4 rounded-xl shadow-md transform transition-transform group-hover:scale-110 duration-300">
                          <img src={tie.img} alt={tie.name} className="max-h-32 object-contain" />
                        </div>
                      </div>
                    </div>

                    <div className="p-6 relative z-20">
                      <div className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3">
                        Government Partner
                      </div>

                      <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-primary transition-colors">
                        {tie.name}
                      </h3>

                      <p className="text-gray-600 flex gap-3 mb-5">
                        <BsCircleFill className="text-primary w-2 h-2 flex-shrink-0 mt-1.5" />
                        <span>{tie.description}</span>
                      </p>

                      <div className="mt-4 pt-3 border-t border-gray-100">
                        <span className="inline-flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                          Learn more
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center items-center mt-16 gap-3"
            >
              <div className="text-center px-5 py-2 bg-primary/5 rounded-full text-sm text-gray-600 font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 inline-block mr-2 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                Government Certified Courses
              </div>
              <div className="text-center px-5 py-2 bg-primary/5 rounded-full text-sm text-gray-600 font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 inline-block mr-2 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Official Partnerships
              </div>
              <div className="text-center px-5 py-2 bg-primary/5 rounded-full text-sm text-gray-600 font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 inline-block mr-2 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
                Recognized Qualifications
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/30 rounded-full -ml-32 -mb-32"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100"
            >
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                  Training Excellence
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  About Our <span className="text-primary">Government Training</span> Program
                </h2>

                <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
              </div>

              <div className="bg-gradient-to-r from-primary/5 to-blue-50/50 p-6 rounded-xl mb-10">
                <p className="text-lg text-gray-700 leading-relaxed">
                  We are committed to empowering individuals through a wide array of skill
                  development initiatives in partnership with esteemed government bodies. Our
                  Government Training Program serves as a cornerstone for fostering innovation,
                  enhancing employability, and driving economic growth. By collaborating with
                  national and state-level organizations, we aim to bridge the skill gap and prepare
                  a workforce ready to meet the demands of the ever-evolving job market.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 transform group-hover:scale-[1.03] group-hover:shadow-lg"></div>

                  <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm group-hover:border-transparent transition-all duration-300 relative z-10">
                    <div className="w-14 h-14 bg-primary text-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-primary transition-all duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3  transition-all duration-300">
                      Nationwide Impact
                    </h3>

                    <p className="text-gray-600 /90 transition-all duration-300">
                      Our initiatives span across the country, reaching diverse communities and
                      demographics.
                    </p>

                    <div className="h-1 w-20 bg-primary/20 rounded-full mt-4 group-hover:bg-white/20 transition-all duration-300"></div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 transform group-hover:scale-[1.03] group-hover:shadow-lg"></div>

                  <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm group-hover:border-transparent transition-all duration-300 relative z-10">
                    <div className="w-14 h-14 bg-primary text-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-primary transition-all duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3  transition-all duration-300">
                      Industry Partnerships
                    </h3>

                    <p className="text-gray-600 transition-all duration-300">
                      Collaborating with industry leaders to align training with market demands and
                      opportunities.
                    </p>

                    <div className="h-1 w-20 bg-primary/20 rounded-full mt-4 group-hover:bg-white/20 transition-all duration-300"></div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 transform group-hover:scale-[1.03] group-hover:shadow-lg"></div>

                  <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm group-hover:border-transparent transition-all duration-300 relative z-10">
                    <div className="w-14 h-14 bg-primary text-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-primary transition-all duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3  transition-all duration-300">
                      Certified Curriculum
                    </h3>

                    <p className="text-gray-600 /90 transition-all duration-300">
                      Government-approved curriculum designed to meet national standards of
                      excellence.
                    </p>

                    <div className="h-1 w-20 bg-primary/20 rounded-full mt-4 group-hover:bg-white/20 transition-all duration-300"></div>
                  </div>
                </motion.div>
              </div>

              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-12 flex justify-center"
              >
                <button className="px-8 py-3 bg-primary text-white rounded-xl font-medium shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:bg-primary-dark flex items-center">
                  Learn More About Our Programs
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </motion.div> */}
            </motion.div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">100% Certified</h4>
                  <p className="text-sm text-gray-500">Government recognized</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Expert Faculty</h4>
                  <p className="text-sm text-gray-500">Industry professionals</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">HD Quality</h4>
                  <p className="text-sm text-gray-500">Advanced learning materials</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-amber-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Job Placement</h4>
                  <p className="text-sm text-gray-500">Career support services</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const shimmerEffect = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)',
  backgroundSize: '200% 100%',
  animation: 'shimmer 2s infinite',
  '@keyframes shimmer': {
    '0%': { backgroundPositionX: '100%' },
    '100%': { backgroundPositionX: '-100%' },
  },
};
