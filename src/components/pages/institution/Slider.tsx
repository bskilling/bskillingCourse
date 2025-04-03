import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';
import {
  LucideBolt,
  LucideBookOpen,
  LucideBrainCircuit,
  LucideBriefcase,
  LucideClipboardCheck,
  LucideCode,
  LucideFlag,
  LucideGlobe,
  LucideGraduationCap,
  LucideHeart,
  LucideLightbulb,
  LucideMonitor,
  LucidePenTool,
  LucideRocket,
  LucideShieldCheck,
  LucideStar,
  LucideTarget,
  LucideTrophy,
  LucideUser,
  LucideUsers,
  Paintbrush,
} from 'lucide-react';
import {
  GraduationCap,
  Database,
  Settings,
  Users,
  MonitorCheck,
  BarChart3,
  BookOpen,
} from 'lucide-react';
import { Code, Cpu, Layers, ShieldCheck, Terminal } from 'lucide-react';
import { Briefcase, Building, BadgeCheck, TrendingUp } from 'lucide-react';
import { useRouter } from 'next/router';
const InstitutionSlider = () => {
  const plugin = React.useRef(Autoplay({ delay: 2000 }));
  const router = useRouter();
  return (
    <>
      <Carousel
        className=" w-[100vw] "
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          <CarouselItem>
            <div className="relative py-4  w-full bg-gradient-to-r from-blue-700 to-purple-700 xl:min-h-[400px] 2xl:min-h-[500px] flex flex-col items-center justify-center text-center text-white overflow-hidden">
              {/* Background Geometric Shapes */}
              <div className="absolute inset-0 opacity-60">
                {/* Large Elements */}
                <div className="absolute top-8 left-10 w-40 h-40 bg-purple-400/40 rounded-lg rotate-12 blur-md flex items-center justify-center">
                  <LucideBookOpen size={32} className="text-white" />
                </div>
                <div className="absolute bottom-12 right-14 w-48 h-48 bg-blue-400/50 rounded-full blur-lg shadow-xl flex items-center justify-center">
                  <LucideBriefcase size={36} className="text-white" />
                </div>
                <div className="absolute top-1/3 left-1/4 w-28 h-28 bg-indigo-500/40 rounded-lg -rotate-6 blur-md flex items-center justify-center">
                  <LucideUser size={28} className="text-white" />
                </div>
                <div className="absolute top-1/4 right-10 w-36 h-36 bg-white/20 rounded-lg rotate-12 shadow-lg flex items-center justify-center">
                  <LucideTarget size={30} className="text-white" />
                </div>

                {/* Adjusted Placements for Balance */}
                <div className="absolute bottom-10 left-14 w-32 h-32 bg-blue-300/50 rounded-xl rotate-6 blur-md flex items-center justify-center">
                  <LucideLightbulb size={28} className="text-white" />
                </div>
                <div className="absolute top-24 left-1/3 w-40 h-40 bg-blue-500/40 rounded-lg rotate-12 shadow-md flex items-center justify-center">
                  <LucideCode size={34} className="text-white" />
                </div>
                <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-blue-300/50 rounded-full blur-lg flex items-center justify-center">
                  <LucideGlobe size={28} className="text-white" />
                </div>
                <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-blue-400/50 rounded-lg -rotate-6 shadow-md flex items-center justify-center">
                  <LucideUsers size={26} className="text-white" />
                </div>

                {/* Medium Elements */}
                <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-white/20 rounded-xl rotate-12 shadow-md flex items-center justify-center">
                  <LucideClipboardCheck size={24} className="text-white" />
                </div>
                <div className="absolute top-16 right-1/4 w-20 h-20 bg-pink-400/30 rounded-full blur-md flex items-center justify-center">
                  <LucideShieldCheck size={22} className="text-white" />
                </div>
                <div className="absolute bottom-32 left-20 w-32 h-32 bg-blue-500/40 rounded-lg -rotate-6 blur-sm flex items-center justify-center">
                  <LucideMonitor size={30} className="text-white" />
                </div>
                <div className="absolute top-40 left-32 w-28 h-28 bg-indigo-400/40 rounded-full blur-md flex items-center justify-center">
                  <LucideTrophy size={28} className="text-white" />
                </div>
                <div className="absolute bottom-20 right-32 w-24 h-24 bg-purple-300/30 rounded-lg rotate-6 blur-sm flex items-center justify-center">
                  <LucideStar size={26} className="text-white" />
                </div>

                {/* Small Elements */}
                <div className="absolute top-2/3 left-10 w-14 h-14 bg-purple-300/30 rounded-lg rotate-12 blur-sm flex items-center justify-center">
                  <LucideHeart size={18} className="text-white" />
                </div>
                <div className="absolute bottom-1/3 right-1/5 w-16 h-16 bg-indigo-400/40 rounded-full blur-md flex items-center justify-center">
                  <LucidePenTool size={20} className="text-white" />
                </div>
                <div className="absolute top-10 right-5 w-10 h-10 bg-blue-300/50 rounded-lg rotate-12 shadow-sm flex items-center justify-center">
                  <LucideBolt size={16} className="text-white" />
                </div>
                <div className="absolute bottom-5 left-5 w-12 h-12 bg-blue-500/50 rounded-lg rotate-12 shadow-md flex items-center justify-center">
                  <LucideRocket size={18} className="text-white" />
                </div>
                <div className="absolute top-3/4 right-8 w-18 h-18 bg-indigo-500/40 rounded-full blur-sm flex items-center justify-center">
                  <LucideFlag size={22} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <LucideGraduationCap size={56} className="mb-4 text-white drop-shadow-lg" />
              <h1 className="2xl:text-5xl text-3xl font-extrabold drop-shadow-md">
                Empowering Institutions
              </h1>
              <p className="md:text-lg text-sm text-white/90 mt-3 max-w-2xl drop-shadow-sm">
                We help institutions enhance student skills and provide job assistance
                opportunities.
              </p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative w-full py-4 bg-gradient-to-r from-green-600 to-teal-700 xl:min-h-[400px] 2xl:min-h-[500px] flex flex-col items-center justify-center text-center text-white overflow-hidden">
              {/* Background Skill Icons on Boxes */}
              <div className="absolute inset-0 opacity-60">
                {/* Large Boxes with Icons */}
                <div className="absolute top-8 left-10 w-40 h-40 bg-teal-400/40 rounded-lg rotate-12 blur-md flex items-center justify-center">
                  <Code className="w-16 h-16 text-white/80" />
                </div>
                <div className="absolute bottom-12 right-14 w-48 h-48 bg-green-400/50 rounded-full blur-lg shadow-xl flex items-center justify-center">
                  <Paintbrush className="w-20 h-20 text-white/80" />
                </div>
                <div className="absolute top-1/3 left-1/4 w-28 h-28 bg-teal-500/40 rounded-lg -rotate-6 blur-md flex items-center justify-center">
                  <Cpu className="w-14 h-14 text-white/80" />
                </div>
                <div className="absolute top-1/4 right-10 w-36 h-36 bg-white/20 rounded-lg rotate-12 shadow-lg flex items-center justify-center">
                  <Layers className="w-18 h-18 text-white/80" />
                </div>

                {/* Medium Boxes with Icons */}
                <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-white/20 rounded-xl rotate-12 shadow-md flex items-center justify-center">
                  <ShieldCheck className="w-12 h-12 text-white/80" />
                </div>
                <div className="absolute top-16 right-1/4 w-20 h-20 bg-yellow-400/30 rounded-full blur-md flex items-center justify-center">
                  <Terminal className="w-10 h-10 text-white/80" />
                </div>
                <div className="absolute bottom-32 left-20 w-32 h-32 bg-green-500/40 rounded-lg -rotate-6 blur-sm flex items-center justify-center">
                  <Cpu className="w-14 h-14 text-white/80" />
                </div>
                <div className="absolute top-40 left-32 w-28 h-28 bg-teal-400/40 rounded-full blur-md flex items-center justify-center">
                  <Layers className="w-18 h-18 text-white/80" />
                </div>
                <div className="absolute bottom-20 right-32 w-24 h-24 bg-green-300/30 rounded-lg rotate-6 blur-sm flex items-center justify-center">
                  <ShieldCheck className="w-12 h-12 text-white/80" />
                </div>
                <div className="absolute top-2/3 left-10 w-14 h-14 bg-teal-300/30 rounded-lg rotate-12 blur-sm flex items-center justify-center">
                  <Code className="w-10 h-10 text-white/80" />
                </div>
                <div className="absolute bottom-1/3 right-1/5 w-16 h-16 bg-green-400/40 rounded-full blur-md flex items-center justify-center">
                  <Terminal className="w-10 h-10 text-white/80" />
                </div>
                <div className="absolute top-10 right-5 w-10 h-10 bg-teal-300/50 rounded-lg rotate-12 shadow-sm flex items-center justify-center">
                  <Paintbrush className="w-8 h-8 text-white/80" />
                </div>
                <div className="absolute bottom-5 left-5 w-12 h-12 bg-green-500/50 rounded-lg rotate-12 shadow-md flex items-center justify-center">
                  <Cpu className="w-10 h-10 text-white/80" />
                </div>
                <div className="absolute top-3/4 right-8 w-18 h-18 bg-teal-500/40 rounded-full blur-sm flex items-center justify-center">
                  <Layers className="w-14 h-14 text-white/80" />
                </div>
              </div>

              {/* Content */}
              <LucideBrainCircuit size={56} className="mb-4 text-white drop-shadow-lg" />
              <h1 className="2xl:text-5xl text-3xl font-extrabold drop-shadow-md">
                Skill Development Programs
              </h1>
              <p className="2xl:text-lg text-sm text-white/90 mt-3 max-w-2xl drop-shadow-sm">
                Build industry-ready skills through courses, projects, and mentorship to excel in
                your career.
              </p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative w-full bg-gradient-to-r py-4 from-blue-600 to-indigo-700 xl:min-h-[400px] 2xl:min-h-[500px] flex flex-col items-center justify-center text-center text-white overflow-hidden">
              {/* Background Geometric Shapes with Icons */}
              <div className="absolute inset-0 opacity-60">
                {/* Large Elements */}
                <div className="absolute top-8 left-10 w-40 h-40 bg-blue-400/40 rounded-lg rotate-12 blur-md flex items-center justify-center">
                  <Users size={40} className="text-white/80" />
                </div>
                <div className="absolute bottom-12 right-14 w-48 h-48 bg-indigo-400/50 rounded-full blur-lg shadow-xl flex items-center justify-center">
                  <Building size={42} className="text-white/80" />
                </div>
                <div className="absolute top-1/3 left-1/4 w-28 h-28 bg-blue-500/40 rounded-lg -rotate-6 blur-md flex items-center justify-center">
                  <BadgeCheck size={36} className="text-white/80" />
                </div>
                <div className="absolute top-1/4 right-10 w-36 h-36 bg-white/20 rounded-lg rotate-12 shadow-lg flex items-center justify-center">
                  <TrendingUp size={38} className="text-white/80" />
                </div>

                {/* Medium Elements */}
                <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-white/20 rounded-xl rotate-12 shadow-md flex items-center justify-center">
                  <BarChart3 size={32} className="text-white/80" />
                </div>
                <div className="absolute top-16 right-1/4 w-20 h-20 bg-teal-400/30 rounded-full blur-md flex items-center justify-center">
                  <ShieldCheck size={28} className="text-white/80" />
                </div>

                {/* Small Elements */}
                <div className="absolute top-2/3 left-10 w-14 h-14 bg-blue-300/30 rounded-lg rotate-12 blur-sm"></div>
                <div className="absolute bottom-1/3 right-1/5 w-16 h-16 bg-indigo-400/40 rounded-full blur-md"></div>
                <div className="absolute top-10 right-5 w-10 h-10 bg-blue-300/50 rounded-lg rotate-12 shadow-sm"></div>
                <div className="absolute bottom-5 left-5 w-12 h-12 bg-indigo-500/50 rounded-lg rotate-12 shadow-md"></div>
                <div className="absolute top-3/4 right-8 w-18 h-18 bg-blue-500/40 rounded-full blur-sm"></div>
              </div>

              {/* Center Content */}
              <Briefcase size={56} className="mb-4 text-white drop-shadow-lg" />
              <h1 className="2xl:text-5xl md:text-4xl text-3xl font-extrabold drop-shadow-md">
                Career & Jobs Assistance
              </h1>
              <p className="2xl:text-lg text-sm  text-white/90 mt-3 max-w-2xl drop-shadow-sm">
                Gain access to top recruiters and job opportunities to start your dream career.
              </p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute 2xl:left-10 left-5 z-30 flex items-center justify-center px-4 cursor-pointer focus:outline-none" />
        <CarouselNext className="absolute 2xl:right-10 right-5 z-30 flex items-center justify-center px-4 cursor-pointer focus:outline-none" />
      </Carousel>
    </>
  );
};

export default InstitutionSlider;
