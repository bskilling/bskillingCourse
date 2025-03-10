/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import NavbarSection from '@/component/navbar/NavbarSection';
import Link from 'next/link';
import {
  Briefcase,
  GraduationCap,
  BookOpen,
  LucideGraduationCap,
  LucideBrainCircuit,
} from 'lucide-react';
import { FaBuilding } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import InstitutionSlider from '@/components/pages/institution/Slider';
import { useRouter } from 'next/router';

export default function Institutions() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Institutions | Skill & Job Assistance</title>
        <meta
          name="description"
          content="Empowering students through skill development and job assistance programs. Our goal is to bridge the gap between education and employment by offering high-quality training and partnerships with leading companies."
        />
        <meta
          name="keywords"
          content="institutions, skill development, job assistance, student career growth, professional training, employment opportunities, courses, corporate tie-ups"
        />
        <meta name="author" content="Your Company Name" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Institutions | Skill & Job Assistance"
        />
        <meta
          property="og:description"
          content="Join our skill development and job assistance programs to enhance your career opportunities."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://yourwebsite.com/institutions"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="sticky top-0 z-[50] bg-card shadow-md">
        <nav className="text-[#1f1f1f] bg-card 2xl:w-[80vw] px-5 md:w-[90vw] w-full 2xl:m-auto flex justify-between items-center text-sm font-medium md:py-2">
          <div className="text-3xl font-bold inline-flex items-center">
            <Link href="/">
              <div className="relative w-[80px] h-[30px] md:w-[150px] md:h-[50px]">
                <img src="/logo.png" alt="Logo" className="object-cover" />
              </div>
            </Link>
          </div>
          <NavbarSection />
        </nav>
      </div>

      <InstitutionSlider />

      <main className="py-12 px-6  2xl:w-[80vw] w-[100vw] m-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900">
          Empowering Institutions
        </h1>
        <p className="text-center text-lg text-gray-600 mt-2">
          We help institutions enhance student skills and provide job assistance
          opportunities.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-10">
          {/* Skill Assisting Program */}
          <section
            role="button"
            className="bg-blue-50 group relative rounded-2xl shadow-md hover:shadow-lg transition-all pb-6"
            onClick={() =>
              router.push('/institutions/skill-development-programs')
            }
          >
            <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-80 group-hover:backdrop-blur-sm">
              <span className="text-white text-xl  tracking-wider opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110 group-hover:animate-pulse">
                View Details
              </span>
            </div>
            <img
              src="/new-image/institutions/skills.jpg"
              alt="skill-development program"
              className="object-cover md:h-96 h-64 w-full"
            />
            <div className="flex items-center space-x-3 p-6 py-0 mt-5">
              <GraduationCap size={30} className="text-blue-600" />
              <h2 className="text-2xl font-semibold text-blue-900">
                Skill Assisting Program
              </h2>
            </div>
            <p className="mt-2 text-gray-700 p-6 py-0">
              Our skill development courses are designed to enhance student
              expertise in various domains.
            </p>
            <ul className="mt-4 space-y-2 p-6 pt-0">
              <li className="flex items-center space-x-2">
                <BookOpen className="text-blue-500" />{' '}
                <span>Full Stack Development</span>
              </li>
              <li className="flex items-center space-x-2">
                <BookOpen className="text-blue-500" />{' '}
                <span>Data Science & AI</span>
              </li>
              <li className="flex items-center space-x-2">
                <BookOpen className="text-blue-500" />{' '}
                <span>Cybersecurity</span>
              </li>
              <li className="flex items-center space-x-2">
                <BookOpen className="text-blue-500" /> <span>UI/UX Design</span>
              </li>
            </ul>
          </section>

          {/* Job Assisting Section */}
          <section
            role="button"
            onClick={() => {
              router.push('/institutions/job-assisting-programs');
            }}
            className="bg-green-50 relative group cursor-pointer  rounded-2xl shadow-md hover:shadow-lg transition-all"
          >
            <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-80 group-hover:backdrop-blur-sm">
              <span className="text-white text-xl  tracking-wider opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110 group-hover:animate-pulse">
                View Details
              </span>
            </div>
            <img
              src="/new-image/institutions/jobs.jpg"
              alt="skill-development program"
              className="object-cover md:h-96 h-64 w-full"
            />
            <div className="flex items-center space-x-3 p-6 pb-0">
              <Briefcase size={30} className="text-green-600" />
              <h2 className="text-2xl font-semibold text-green-900">
                Job Assistance
              </h2>
            </div>
            <p className="mt-2 text-gray-700 px-6">
              Partnering with top companies to provide job opportunities for
              skilled graduates.
            </p>
            <ul className="mt-4 space-y-2 p-6 py-0">
              <li className="flex items-center space-x-2">
                <FaBuilding className="text-green-500" />{' '}
                <span>ABC Tech Solutions</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaBuilding className="text-green-500" />{' '}
                <span>XYZ Innovations</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaBuilding className="text-green-500" />{' '}
                <span>Global Enterprises</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaBuilding className="text-green-500" />{' '}
                <span>Future Startups</span>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
