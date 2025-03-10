/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import { LucideBrainCircuit, Paintbrush } from 'lucide-react';
import { Code, Cpu, Layers, ShieldCheck, Terminal } from 'lucide-react';
import { Briefcase, Building, BadgeCheck, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import NavbarSection from '@/component/navbar/NavbarSection';
import SkillOffering from '@/pages/college-training/skill-assisting-program/_components/SkillOffering';
import { MdOutlineArrowRightAlt } from 'react-icons/md';
import ProgramSections from '@/components/pages/institution/ProgramSection';
export default function SkillAssistingProgram() {
  return (
    <>
      <Head>
        <title>Skill Assisting Program | Enhance Your Career Skills</title>
        <meta
          name="description"
          content="Join our Skill Assisting Program to enhance your career skills with expert guidance. Unlock your potential and achieve your professional goals."
        />
        <meta
          name="keywords"
          content="Skill Assisting Program, Career Skills, Professional Development, Skill Enhancement, Training Programs"
        />
        <meta name="author" content="Your Company Name" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Skill Assisting Program | Enhance Your Career Skills"
        />
        <meta
          property="og:description"
          content="Join our Skill Assisting Program to enhance your career skills with expert guidance. Unlock your potential and achieve your professional goals."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://yourwebsite.com/skill-assisting-program"
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/images/skill-assisting-banner.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Skill Assisting Program | Enhance Your Career Skills"
        />
        <meta
          name="twitter:description"
          content="Join our Skill Assisting Program to enhance your career skills with expert guidance. Unlock your potential and achieve your professional goals."
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/images/skill-assisting-banner.jpg"
        />
      </Head>
      <div className=" top-0 z-[50] bg-card shadow-md">
        <nav className="text-[#1f1f1f] bg-card 2xl:w-[80vw] px-5  md:w-[90vw] w-full 2xl:m-auto flex justify-between items-center text-sm font-medium md:py-2  ">
          <div className="text-3xl font-bold inline-flex items-center">
            <Link href="/">
              <div className="relative w-[80px] h-[30px] md:w-[150px] md:h-[50px] ">
                <img src="/logo.png" alt="Logo" className="object-cover" />
              </div>
            </Link>
          </div>
          <NavbarSection />
        </nav>
      </div>
      {/* Hero Section */}
      <div className="relative  bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-600 text-white overflow-hidden flex items-start py-10">
        {/* Decorative Shapes */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-10 left-10 w-24 h-24 bg-purple-500/40 rounded-full rotate-45 flex items-center justify-center">
            <Code className="w-10 h-10 text-white/80" />
          </div>
          <div className="absolute top-10 right-10 w-20 h-20 bg-pink-500/40 rounded-lg -rotate-45 flex items-center justify-center">
            <Paintbrush className="w-8 h-8 text-white/80" />
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-indigo-500/40 rounded-full flex items-center justify-center">
            <Cpu className="w-12 h-12 text-white/80" />
          </div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-300/40 rounded-lg rotate-12 flex items-center justify-center">
            <Layers className="w-8 h-8 text-white/80" />
          </div>
          <div className="absolute bottom-10 left-10 w-16 h-16 bg-pink-300/40 rounded-full flex items-center justify-center">
            <Terminal className="w-8 h-8 text-white/80" />
          </div>
        </div>

        {/* Main Content Section */}
        <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row md:space-x-12 items-start">
          {/* Left Column: Hero Title & Content */}
          <div className="md:w-2/3 space-y-6">
            <LucideBrainCircuit size={56} className="mb-2 drop-shadow-lg" />
            <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-md">
              Skill Development Programs
            </h1>
            <p className="max-w-2xl text-sm md:text-lg drop-shadow-sm">
              Build industry-ready skills through courses, projects, and
              mentorship to excel in your career.
            </p>
            <h2 className="text-2xl font-bold mt-6">
              Empowering Students with In-Demand Skills
            </h2>
            <p>
              The Skill Development Program bridges the gap between academic
              learning and industry requirements. It offers comprehensive
              training in technical and professional skills through interactive
              workshops and hands-on projects.
            </p>
            <p>
              Our curriculum is continuously updated to reflect the latest
              advancements in technology, ensuring that students remain
              competitive in the job market.
            </p>
            <p>
              With expert mentorship and real-world challenges, participants
              build confidence and develop the skills needed to excel in their
              careers.
            </p>
            <a className="inline-block bg-white text-indigo-700 font-bold px-6 py-3 rounded-md hover:bg-gray-200 transition">
              Explore
            </a>
          </div>

          {/* Right Column: Contact Form */}
          <div className="md:w-1/3 bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm shadow-lg">
            <h3 className="text-xl font-semibold text-center mb-4">
              Contact Us
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Institution Name"
                className="w-full p-3 rounded-md bg-white text-gray-900"
                required
              />
              <input
                type="email"
                placeholder="Official Email"
                className="w-full p-3 rounded-md bg-white text-gray-900"
                required
              />
              <input
                type="number"
                placeholder="Phone Number"
                className="w-full p-3 rounded-md bg-white text-gray-900"
                required
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 rounded-md bg-white text-gray-900"
                rows={3}
                required
              ></textarea>
              <button className="w-full bg-white text-indigo-700 font-bold py-2 rounded-md hover:bg-gray-200 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <ProgramSections />
    </>
  );
}
