/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Head from 'next/head';
import NavbarSection from '@/component/navbar/NavbarSection';
import { FaCircle, FaHandPointRight, FaCheck } from 'react-icons/fa';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FaCircleArrowRight } from 'react-icons/fa6';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import Link from 'next/link';
import NsdcCourses from '@/components/pages/govt/NSDC';

export default function NSDC() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <>
      <Head>
        <title>National Skill Development Corporation | NSDC</title>
        <meta
          name="description"
          content="Explore the National Skill Development Corporation (NSDC) initiatives, empowering individuals with skills for a better future."
        />
        <meta
          name="keywords"
          content="National Skill Development Corporation, NSDC, skill development, vocational training, employment, India skills, training programs"
        />
        <meta name="author" content="NSDC" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="National Skill Development Corporation | NSDC" />
        <meta
          property="og:description"
          content="Learn about NSDC's mission to provide skill development and vocational training to enhance employability in India."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nsdcindia.org" />
        <meta property="og:image" content="https://www.nsdcindia.org/logo.png" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="National Skill Development Corporation | NSDC" />
        <meta
          name="twitter:description"
          content="Discover NSDC's role in skill development and vocational training across India."
        />
        <meta name="twitter:image" content="https://www.nsdcindia.org/logo.png" />
        <meta name="twitter:site" content="@NSDC" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.nsdcindia.org" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-50">
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
        <div className="relative">
          {/* <div className="absolute inset-0 bg-blue-900/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Empowering India's Workforce
              </h1>
              <p className="text-xl text-white max-w-3xl mx-auto">
                NSDC Skill Development Program for Career Success in AI & Cloud Computing
              </p>
              <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
                Enroll Now
              </button>
            </div>
          </div> */}
          <img
            src="/new-image/nsdc.webp"
            alt="NSDC Skill Development"
            className="w-full  object-cover"
          />
        </div>

        <NsdcCourses />

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Revolutionize Your Career with Cutting-Edge Skills
              </h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6 pl-4 border-l-4 border-yellow-500">
                  The National Skill Development Corporation (NSDC), in partnership with bSkilling,
                  invites you to join an exclusive government-backed initiative designed to shape
                  the future workforce of India.
                </p>
                <div className="space-y-4">
                  {[
                    'Master Generative AI and Cloud Computing',
                    'Flexible learning options for all levels',
                    'Real-world experience through projects',
                    'Career advancement support',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative group overflow-hidden rounded-lg shadow-lg h-64">
                  <img
                    src="/new-image/ai.jpg"
                    alt="AI Training"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-900/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 p-4">
                    <h3 className="text-white text-xl font-bold text-center">
                      AI Training Programs
                    </h3>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-lg h-64">
                  <img
                    src="/new-image/cloud.jpg"
                    alt="Cloud Computing"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-900/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 p-4">
                    <h3 className="text-white text-xl font-bold text-center">
                      Cloud Computing Courses
                    </h3>
                  </div>
                </div>
                {/* <div className="relative group overflow-hidden rounded-lg shadow-lg h-64 col-span-2">
                  <img
                    src="/new-image/students-learning.jpg"
                    alt="Skill Development"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-900/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 p-4">
                    <h3 className="text-white text-xl font-bold text-center">
                      Hands-on Learning Experience
                    </h3>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Why Choose This Program?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Government-backed initiative with industry-aligned curriculum
              </p>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Government-Backed Credibility',
                  description:
                    'Supported by the Skill India Mission with globally recognized certifications',
                  icon: '🏛️',
                },
                {
                  title: 'Inclusive Growth',
                  description:
                    'Creating opportunities for all, including underserved rural communities',
                  icon: '🌍',
                },
                {
                  title: 'Industry-Relevant',
                  description: 'Training modules aligned with emerging industry demands',
                  icon: '📊',
                },
                {
                  title: 'Affordable Education',
                  description: 'Subsidized programs to make quality education accessible',
                  icon: '💰',
                },
                {
                  title: 'Future-Ready Skills',
                  description: 'Empowering youth with high-demand technical skills',
                  icon: '🚀',
                },
                {
                  title: 'Flexible Learning',
                  description: 'Online and offline options to suit your schedule',
                  icon: '⏱️',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Paths Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Flexible Learning Paths
              </h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-b from-blue-100 to-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Generative AI Free Basics</h3>
                <p className="text-gray-700 mb-4">15 Hours | Beginner Level</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Essential AI concepts</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Foundational knowledge</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Perfect for beginners</span>
                  </li>
                </ul>
                <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300">
                  Enroll Free
                </button>
              </div>

              <div className="bg-gradient-to-b from-blue-100 to-white p-6 rounded-lg shadow-md border-t-4 border-blue-500 transform hover:scale-105 transition duration-300">
                <div className="absolute top-0 right-0 bg-yellow-500 text-blue-900 font-bold px-3 py-1 text-sm rounded-bl-lg">
                  Popular
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Generative AI Advanced</h3>
                <p className="text-gray-700 mb-4">45 Hours | Intermediate Level</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Deep dive into generative technologies</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Hands-on projects</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Tools like ChatGPT and DALL-E</span>
                  </li>
                </ul>
                <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300">
                  Learn More
                </button>
              </div>

              <div className="bg-gradient-to-b from-blue-100 to-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Cloud Computing Advanced</h3>
                <p className="text-gray-700 mb-4">40 Hours | Intermediate Level</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Comprehensive cloud solutions training</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Platforms: AWS, Azure, Google Cloud</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Deployment and management</span>
                  </li>
                </ul>
                <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Career Support Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Career Support & Placement Assistance
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                We don't just train you - we help launch your career
              </p>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative">
                  <img
                    src="/new-image/network.webp"
                    alt="Career Support"
                    className="rounded-lg shadow-xl w-full"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-blue-900 p-4 rounded-lg shadow-lg">
                    <p className="font-bold text-lg">500+ Employer Network</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-yellow-500 text-blue-900 p-3 rounded-full mr-4 flex-shrink-0">
                      <FaCircleArrowRight size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Apprenticeship Opportunities</h3>
                      <p className="text-blue-200">
                        Gain practical, hands-on experience with top industry leaders (subject to
                        eligibility)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-yellow-500 text-blue-900 p-3 rounded-full mr-4 flex-shrink-0">
                      <FaCircleArrowRight size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Job Placement Assistance</h3>
                      <p className="text-blue-200">
                        Access our network of 500+ employers across India's tech industry
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-yellow-500 text-blue-900 p-3 rounded-full mr-4 flex-shrink-0">
                      <FaCircleArrowRight size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Career Development Services</h3>
                      <p className="text-blue-200">
                        Resume building, interview preparation, and personalized career counseling
                      </p>
                    </div>
                  </div>
                </div>

                <button className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-full text-lg transition duration-300">
                  Explore Career Paths
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Program Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Program Features
              </h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Key Highlights</h3>
                <ul className="space-y-4">
                  {[
                    'Generative AI and Cloud Computing Mastery',
                    'Practical applications for real-world challenges',
                    'Government-supported affordability',
                    'Skill India Digital Hub (SIDH) access',
                    'Inclusion focus for Tier 2 & 3 cities',
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-4">
                        <FaCheck className="text-blue-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <img
                  src="/new-image/job-seekers.jpg"
                  alt="NSDC Training"
                  className="rounded-lg shadow-lg w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Join Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Who Should Join?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our programs are designed for diverse learners with different goals
              </p>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition duration-300">
                <CardHeader>
                  <CardTitle className="text-blue-900">Students & Beginners</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src="/new-image/students.jpg"
                    alt="Students"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <CardDescription className="mt-4">
                    Take the first step with our free Generative AI course and explore the world of
                    future technologies.
                  </CardDescription>
                </CardContent>
                {/* <CardFooter>
                  <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    Learn more <FaCircleArrowRight className="ml-2" />
                  </button>
                </CardFooter> */}
              </Card>

              <Card className="hover:shadow-xl transition duration-300">
                <CardHeader>
                  <CardTitle className="text-blue-900">Professionals & Job Seekers</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src="/new-image/job-seekers.jpg"
                    alt="Job Seekers"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <CardDescription className="mt-4">
                    Upgrade your expertise with advanced AI and Cloud Computing training to stay
                    ahead in the competitive job market.
                  </CardDescription>
                </CardContent>
                {/* <CardFooter>
                  <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    Learn more <FaCircleArrowRight className="ml-2" />
                  </button>
                </CardFooter> */}
              </Card>

              <Card className="hover:shadow-xl transition duration-300">
                <CardHeader>
                  <CardTitle className="text-blue-900">Aspiring Tech Enthusiasts</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src="/new-image/tech.jpg"
                    alt="Tech Enthusiasts"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <CardDescription className="mt-4">
                    Discover the limitless potential of AI and cloud technologies, with support to
                    transition your passion into a career.
                  </CardDescription>
                </CardContent>
                {/* <CardFooter>
                  <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    Learn more <FaCircleArrowRight className="ml-2" />
                  </button>
                </CardFooter> */}
              </Card>
            </div>
          </div>
        </section>

        {/* Why bSkilling Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Why Choose bSkilling?
              </h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Industry-Aligned Curriculum',
                      description: 'Courses designed with direct input from tech industry leaders',
                      icon: '📊',
                    },
                    {
                      title: 'Hands-on Training',
                      description: 'Practical projects using current tools and technologies',
                      icon: '👨‍💻',
                    },
                    {
                      title: 'Expert Mentors',
                      description: 'Learn from experienced professionals in AI and Cloud',
                      icon: '👩‍🏫',
                    },
                    {
                      title: 'Inclusive Growth',
                      description: 'Special initiatives for underserved communities',
                      icon: '🌱',
                    },
                    {
                      title: 'Strong Employer Network',
                      description: '500+ hiring partners for placement opportunities',
                      icon: '🤝',
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="text-3xl mr-4">{item.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-blue-900">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <img
                  src="/new-image/mentorship.avif"
                  alt="bSkilling Mentorship"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Journey to Success Starts Here
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
              Don't miss this opportunity to transform your future with government-backed skill
              development.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-full text-lg transition duration-300">
                Enroll in Free Course
              </button>
              <button className="bg-transparent hover:bg-blue-800 text-white font-bold py-3 px-8 border-2 border-white rounded-full text-lg transition duration-300">
                Explore Advanced Programs
              </button>
            </div>

            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex items-center">
                <FaHandPointRight className="text-yellow-400 mr-3 text-2xl animate-pulse" />
                <span className="text-lg">Email us at:</span>
                <a
                  href="mailto:contact.nsdc@bskilling.com"
                  className="text-yellow-400 ml-2 text-lg font-medium hover:underline"
                >
                  contact.nsdc@bskilling.com
                </a>
              </div>

              <div className="flex items-center">
                <FaHandPointRight className="text-yellow-400 mr-3 text-2xl animate-pulse" />
                <span className="text-lg">Call us:</span>
                <a
                  href="tel:+18001234567"
                  className="text-yellow-400 ml-2 text-lg font-medium hover:underline"
                >
                  1800-123-4567
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
