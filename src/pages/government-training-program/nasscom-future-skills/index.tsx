/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { motion } from 'framer-motion';
import Link from 'next/link';
import NavbarSection from '@/component/navbar/NavbarSection';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, GraduationCap } from 'lucide-react';
import { ICourse } from '@/component/types/Course.types';
import { cn } from '@/lib/utils';
import { FaHandPointRight } from 'react-icons/fa';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'https://backendbskilling.up.railway.app';

export default function Nasscom() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentShow, setCurrentShow] = useState(8);

  // Then fetch courses using the Nasscom category ID
  const { data: courseData, isLoading } = useQuery({
    queryKey: ['courses', '67f4e77d0547cfbc81ce9d01'],
    queryFn: async () => {
      // if (!nasscomCategoryId) return { courses: [] };

      const res = await axios.get(backendUrl + '/api/courses', {
        params: {
          limit: 100,
          page: 1,
          category: '67f4e77d0547cfbc81ce9d01',
          isPublished: true,
          type: 'b2g',
        },
      });
      return res.data.data;
    },
    staleTime: 1000 * 60 * 5,
  });

  const filteredCourses =
    // @ts-expect-error
    courseData?.courses?.filter(course =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  const handleShowMore = () => {
    setCurrentShow(currentShow + 8);
  };

  const handleShowLess = () => {
    setCurrentShow(Math.max(8, currentShow - 8));
  };

  return (
    <>
      <Head>
        <title>NASSCOM - Empowering India&#39;s Tech Industry</title>
        <meta
          name="description"
          content="Learn about NASSCOM, the premier trade association representing India's technology industry. Discover its initiatives, member benefits, and contributions to the global tech ecosystem."
        />
        <meta
          name="keywords"
          content="NASSCOM, India technology association, software companies, tech industry, policy advocacy, innovation, skill development, tech ecosystem"
        />
        <meta name="author" content="NASSCOM" />
        <meta property="og:title" content="NASSCOM - Empowering India's Tech Industry" />
        <meta
          property="og:description"
          content="NASSCOM is the leading trade association for India's software and service companies, fostering innovation and collaboration in the global tech industry."
        />
        <meta property="og:image" content="/path/to/seo-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/nasscom" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NASSCOM - Empowering India's Tech Industry" />
        <meta
          name="twitter:description"
          content="Explore how NASSCOM supports India's tech sector through policy advocacy, skill development, and global collaborations."
        />
        <meta name="twitter:image" content="/path/to/seo-image.jpg" />
        <link rel="canonical" href="https://yourwebsite.com/nasscom" />
      </Head>

      {/* Navbar */}
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
        <motion.div
          className="relative w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative overflow-hidden w-full">
            <img
              src="/new-image/Nasscom.webp"
              alt="NASSCOM Banner"
              className="object-cover w-full h-auto "
            />
            {/* <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent flex items-center">
              <div className="container mx-auto px-4 sm:px-6 md:max-w-3xl lg:max-w-4xl">
                <motion.div
                  className="text-white"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                    Empowering India's Tech Future
                  </h1>
                  <p className="text-lg md:text-xl mb-6 drop-shadow-md max-w-xl">
                    NASSCOM skill development programs for a technology-ready workforce
                  </p>
                  <Button className="bg-[#8f0808] hover:bg-[#700606] text-white px-6 py-3 rounded-full text-lg shadow-lg">
                    Explore Courses
                  </Button>
                </motion.div>
              </div>
            </div> */}
          </div>
        </motion.div>
        {/* Available Courses Section */}
        <motion.div
          className="my-20"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-indigo-100 rounded-full mb-4">
              <GraduationCap className="h-6 w-6 text-[#8f0808]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#8f0808]">
              Available NASSCOM Courses
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Explore our specialized NASSCOM training programs designed to enhance your
              professional capabilities and accelerate your career growth
            </p>
          </div>

          {/* Courses Grid */}
          {isLoading ? (
            <div className="py-12 text-center">
              <div className="inline-block w-16 h-16 border-4 border-[#8f0808]/20 border-t-[#8f0808] rounded-full animate-spin"></div>
              <p className="mt-4 text-slate-600">Loading courses...</p>
            </div>
          ) : filteredCourses.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mx-auto max-w-7xl"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {
                // @ts-expect-error
                filteredCourses.slice(0, currentShow).map(course => (
                  <motion.div key={course._id} variants={cardAnimation} className="w-full">
                    <Card className="h-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white">
                      <Link href={`/courses/courseDetails/${course.slug}`}>
                        <CardHeader className="p-0">
                          {course?.previewImage?.viewUrl ? (
                            <img
                              src={course?.previewImage?.viewUrl}
                              alt={course.title}
                              className="w-full h-52 object-cover"
                            />
                          ) : (
                            <img
                              src={'/images/placeholder.png'}
                              alt="Placeholder"
                              className="w-full h-52 object-cover p-3"
                            />
                          )}
                        </CardHeader>
                      </Link>

                      <CardContent className="p-5 space-y-3">
                        <CardTitle className="text-xl font-semibold text-[#8f0808] line-clamp-1">
                          {course?.title || 'No Title'}
                        </CardTitle>
                        <CardDescription className="text-base text-gray-600 line-clamp-2">
                          {course?.description || 'No Description Available'}
                        </CardDescription>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span className="font-medium">Duration:</span>
                          <span>{course.durationHours} hours</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span className="font-medium">Price:</span>
                          <span
                            className={cn(
                              course.price.amount === 0
                                ? 'text-green-600 font-semibold'
                                : 'text-[#8f0808] font-bold'
                            )}
                          >
                            {course.price.amount === 0
                              ? 'Free'
                              : `${course.price.amount} ${course.price.currency}`}
                          </span>
                        </div>
                      </CardContent>

                      <CardFooter className="p-5 border-t bg-slate-50">
                        <Link href={`/courses/courseDetails/${course.slug}`} className="w-full">
                          <Button className="w-full bg-[#8f0808] hover:bg-[#700606]">
                            View Course
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))
              }
            </motion.div>
          ) : (
            <div className="py-16 text-center bg-slate-50 rounded-lg border border-slate-200">
              <div className="w-16 h-16 bg-slate-100 rounded-full mx-auto flex items-center justify-center mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">No courses found</h3>
              <p className="text-slate-600 mb-6">
                {searchTerm
                  ? `No results match "${searchTerm}". Try different keywords or browse all courses.`
                  : 'No courses available in this category yet.'}
              </p>
              <Button
                variant="outline"
                className="border-[#8f0808] text-[#8f0808] hover:bg-[#8f0808]/10"
                onClick={() => setSearchTerm('')}
              >
                View All Courses
              </Button>
            </div>
          )}

          {/* Pagination Buttons */}
          {filteredCourses.length > 0 && (
            <div className="flex justify-center mt-10 gap-4">
              {currentShow > 8 && (
                <Button
                  onClick={handleShowLess}
                  variant="outline"
                  className="px-6 py-3 border-2 border-[#8f0808] text-[#8f0808] rounded-full font-medium hover:bg-[#8f0808]/10"
                >
                  Show Less
                </Button>
              )}

              {currentShow < filteredCourses.length && (
                <Button
                  onClick={handleShowMore}
                  className="px-6 py-3 bg-[#8f0808] hover:bg-[#700606] text-white rounded-full font-medium shadow-md"
                >
                  Show More
                </Button>
              )}
            </div>
          )}
        </motion.div>
        {/* <CourseCategories /> */}
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
            <motion.div
              className="mb-20"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-[#8f0808]/10 to-transparent rounded-full blur-2xl" />
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#8f0808]/10 to-transparent rounded-full blur-2xl" />
                <h1 className="text-3xl md:text-5xl font-bold text-center text-[#8f0808] mb-10 leading-tight">
                  Empowering India&#39;s Digital Future:
                  <span className="block mt-2 bg-gradient-to-r from-[#8f0808] to-[#c22828] bg-clip-text text-transparent">
                    NASSCOM Skill Development
                  </span>
                </h1>
              </div>

              <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-[1.01] transition-all duration-300">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3 bg-gradient-to-br from-[#8f0808] to-[#c22828] p-8 flex items-center justify-center">
                      <h3 className="text-white font-bold text-2xl leading-tight">
                        A Transformative Collaboration
                      </h3>
                    </div>
                    <div className="w-full md:w-2/3 p-8">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        The National Association of Software and Service Companies (NASSCOM), in
                        partnership with bSkilling, proudly presents a groundbreaking initiative
                        designed to shape India's digital future. By combining NASSCOM's industry
                        leadership and bSkilling's innovative training expertise, this collaboration
                        aims to empower individuals with future-ready skills, bridging the gap
                        between aspirations and opportunities in technology and professional
                        domains.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Why Choose Section */}
            <motion.div
              className="mb-20"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <div className="max-w-5xl mx-auto">
                <div className="relative mb-10">
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#8f0808]/30 to-transparent -z-10" />
                  <h2 className="text-2xl md:text-4xl font-bold text-center">
                    <span className="bg-white px-6">
                      Why Choose <span className="text-[#8f0808]">NASSCOM</span> and{' '}
                      <span className="text-[#8f0808]">bSkilling</span>?
                    </span>
                  </h2>
                </div>

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="grid grid-cols-12">
                    <div className="col-span-12 md:col-span-4 lg:col-span-3 bg-[#8f0808] p-6 flex items-center justify-center">
                      <div className="text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-16 w-16 mx-auto mb-4"
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
                        <h3 className="text-xl font-bold text-center">
                          Unmatched Industry Expertise
                        </h3>
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-8 lg:col-span-9 p-8">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Led by global leaders in IT and professional development, NASSCOM and
                        bSkilling offer a unique blend of innovation, relevance, and excellence.
                        Programs are carefully designed to align with industry standards and
                        emerging trends, ensuring you are always ahead in the competitive job
                        market.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Learning Opportunities Section */}
            <motion.div
              className="mb-20"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <div className="max-w-5xl mx-auto">
                <div className="relative mb-10">
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#8f0808]/30 to-transparent -z-10" />
                  <h2 className="text-2xl md:text-4xl font-bold text-center">
                    <span className="bg-white px-6">
                      Comprehensive <span className="text-[#8f0808]">Learning Opportunities</span>
                    </span>
                  </h2>
                </div>

                <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-xl p-8 border-l-4 border-[#8f0808]">
                  <div className="flex items-center gap-6">
                    <div className="hidden md:block">
                      <div className="bg-[#8f0808]/10 p-4 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-[#8f0808]"
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
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Our diverse range of courses caters to everyone—from students and fresh
                      graduates to seasoned professionals looking to upgrade their skills. With
                      flexible learning options, hands-on projects, and industry-recognized
                      certifications, we ensure that every learner finds the right path to success.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Certifications Section */}
            <motion.div
              className="my-20"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-2/5 bg-[#8f0808] p-8">
                      <div className="h-full flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-white mb-4">
                          Globally Recognized Certifications
                        </h2>
                        <div className="flex flex-wrap gap-3 mt-4">
                          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                            Industry Standard
                          </span>
                          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                            Globally Accepted
                          </span>
                          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                            Career Advancement
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-3/5 p-8">
                      <div className="h-full flex items-center">
                        <p className="text-lg text-gray-700 leading-relaxed">
                          From practical, hands-on projects to mentorship by industry experts, every
                          aspect of our programs is designed to make you job-ready. Gain access to
                          exclusive job portals and unlock opportunities with top employers. Our
                          certifications are recognized worldwide, giving you a competitive edge in
                          the global market.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Program Highlights */}
            <motion.div
              className="my-20"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <div className="max-w-5xl mx-auto">
                <div className="relative mb-12">
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#8f0808]/30 to-transparent -z-10" />
                  <h2 className="text-3xl md:text-4xl font-bold text-center">
                    <span className="bg-white px-6">
                      Program <span className="text-[#8f0808]">Highlights</span>
                    </span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-[#8f0808]"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-[#8f0808] to-[#c22828] text-white p-4 rounded-xl flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#8f0808] mb-2">
                          Real-World Applications
                        </h3>
                        <p className="text-gray-700">
                          Each course integrates real-life scenarios and case studies, ensuring that
                          participants can confidently apply their knowledge to industry challenges.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-[#8f0808]"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-[#8f0808] to-[#c22828] text-white p-4 rounded-xl flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8"
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
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#8f0808] mb-2">
                          A Unique Collaboration
                        </h3>
                        <p className="text-gray-700">
                          The partnership between NASSCOM and bSkilling combines the strengths of
                          two powerhouses: NASSCOM's unparalleled industry insights and bSkilling's
                          innovative learning frameworks.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-[#8f0808]"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-[#8f0808] to-[#c22828] text-white p-4 rounded-xl flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#8f0808] mb-2">
                          Flexibility for Every Learner
                        </h3>
                        <p className="text-gray-700">
                          Courses are tailored to meet the needs of diverse learners, whether you're
                          a student from a Tier 3 city or a professional balancing work and studies.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-[#8f0808]"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-[#8f0808] to-[#c22828] text-white p-4 rounded-xl flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#8f0808] mb-2">
                          Networking and Mentorship
                        </h3>
                        <p className="text-gray-700">
                          Gain access to a robust network of peers, mentors, and employers, creating
                          pathways to career growth and collaboration.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      </div>
      {/* Who Should Join Section */}
      <motion.div
        className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.8 } },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#8f0808]/5 rounded-full blur-3xl" />
          <div className="absolute top-40 right-20 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-1/3 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#8f0808] to-[#c22828] rounded-full text-white text-sm font-medium mb-4">
              JOIN THE MOVEMENT
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Build India's <span className="text-[#8f0808]">Digital Talent Pool</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of the transformation turning India into a global hub of innovation and
              technology
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
              variants={{
                hidden: { y: 40, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-5 bg-gradient-to-br from-[#8f0808] to-[#c22828] p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Your Digital Journey Starts Here</h3>
                  <p className="mb-6 text-white/90">
                    This initiative represents more than just skill development—it's a commitment to
                    transforming India into a global hub of innovation and technology.
                  </p>
                  <div className="mt-auto">
                    <div className="flex items-center gap-2 mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>500+ Employer Network</span>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Industry-Recognized Certifications</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Hands-on Learning Approach</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-7 p-8">
                  <div className="h-full flex flex-col">
                    <p className="font-medium text-lg mb-6">
                      Don't wait to take the first step toward a brighter future. Enroll today to:
                    </p>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start gap-3">
                        <div className="bg-gradient-to-br from-[#8f0808] to-[#c22828] text-white p-2 rounded-lg flex-shrink-0 mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700">
                          Access free foundational courses in AI.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-gradient-to-br from-[#8f0808] to-[#c22828] text-white p-2 rounded-lg flex-shrink-0 mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700">
                          Advance your expertise with premium programs in Cloud Computing,
                          Professional Skills, and more.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-gradient-to-br from-[#8f0808] to-[#c22828] text-white p-2 rounded-lg flex-shrink-0 mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700">
                          Join a community that's shaping the future of technology and innovation.
                        </span>
                      </li>
                    </ul>

                    <div className="mt-auto text-center sm:text-left">
                      <button className="bg-gradient-to-r from-[#8f0808] to-[#c22828] hover:from-[#7a0707] hover:to-[#a82323] text-white px-8 py-4 rounded-xl text-lg font-medium shadow-lg inline-flex items-center gap-2 group">
                        Start Your Journey Today
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="mt-10">
              <div className="mt-5 flex gap-x-3 items-center justify-center">
                <FaHandPointRight size={50} className="animate-pulse text-destructive" />
                Email:
                <a href="mailto:  contact.nasscom@bskilling.com" className="text-primary ">
                  contact.nasscom@bskilling.com
                </a>
              </div>
            </div>

            {/* <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#8f0808]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>FAQ</span>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#8f0808]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>Resources</span>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#8f0808]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>Support</span>
              </a>
            </div> */}
          </div>
        </div>
      </motion.div>
    </>
  );
}

const CategoryCard = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.3 }}
    className="shadow-md rounded-2xl overflow-hidden bg-white"
  >
    <Card className="h-full">
      <CardHeader className="h-36">
        <CardTitle className="text-lg font-semibold text-gray-800">{title}</CardTitle>
        <CardDescription className="text-sm text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <img src={image} alt={title} className="w-full h-64 object-cover rounded-b-2xl" />
      </CardContent>
    </Card>
  </motion.div>
);

const CourseCategories = () => {
  return (
    <div className="mt-16 px-4 md:px-10">
      <h3 className="text-3xl font-bold text-center text-white bg-[#8f0808] py-4 rounded-xl shadow-lg">
        Categories
      </h3>

      {/* Aligned Courses */}
      <div className="mt-14">
        <h4 className="text-xl font-semibold bg-[#8f0808] text-white px-4 py-2 w-fit rounded-md shadow">
          Aligned Courses
        </h4>
        <div className="grid md:grid-cols-3 gap-8 mt-6">
          <CategoryCard
            title="Artificial Intelligence and Machine Learning (50 Hours)"
            description="Dive deep into the advanced concepts of AI and ML, focusing on cutting-edge tools and applications."
            image="/new-image/ai.jpg"
          />
          <CategoryCard
            title="Generative AI - Artificial Intelligence and Machine Learning (15 Hours)"
            description="Start your journey with foundational AI knowledge tailored for beginners."
            image="/new-image/aii.jpg"
          />
          <CategoryCard
            title="Introduction to Cloud Computing (12 Hours)"
            description="Explore the essentials of cloud technologies, covering fundamental concepts, deployment strategies, and real-world use cases."
            image="/new-image/cloud1.jpg"
          />
        </div>
      </div>

      {/* Non-Aligned Courses */}
      <div className="mt-14">
        <h4 className="text-xl font-semibold bg-[#8f0808] text-white px-4 py-2 w-fit rounded-md shadow">
          Non-Aligned Courses
        </h4>
        <div className="grid md:grid-cols-3 gap-8 mt-6">
          <CategoryCard
            title="PMI - Project Management Professional (PMP) (35 Hours)"
            description="Gain mastery in project management with globally recognized methodologies and practices."
            image="/new-image/pm.jpg"
          />
          <CategoryCard
            title="ITIL 4 Foundation (16 Hours)"
            description="Understand IT service management frameworks to effectively align IT with business goals."
            image="/new-image/it.jpg"
          />
          <CategoryCard
            title="PRINCE2 Foundation (16 Hours)"
            description="Acquire expertise in process-based project management techniques adaptable to any industry."
            image="/new-image/prm.jpg"
          />
        </div>
      </div>
    </div>
  );
};
