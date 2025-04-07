/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  LucideBrainCircuit,
  Cpu,
  Code,
  Paintbrush,
  Layers,
  Terminal,
  ShieldCheck,
  Rocket,
  Users,
  Briefcase,
  TrendingUp,
  BadgeCheck,
  GraduationCap,
  Award,
  ArrowRight,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import NavbarSection from '@/component/navbar/NavbarSection';
import ProgramSections from '@/components/pages/institution/ProgramSection';
import SkillLeadForm from '@/components/pages/institution/SkillLeadForm';
import SkillPrograms from '@/components/pages/institution/SkillPrograms';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export default function SkillDevelopmentPrograms() {
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
        staggerChildren: 0.2,
      },
    },
  };

  const programFeatures = [
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Technical Skills',
      description: 'Master programming, data science, and other technical competencies',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Soft Skills',
      description: 'Develop communication, teamwork, and leadership abilities',
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: 'Industry Projects',
      description: 'Apply your skills to real-world business challenges',
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: 'Expert Mentorship',
      description: 'Learn directly from industry professionals',
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Career Growth',
      description: 'Enhance your employability and promotion prospects',
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Certification',
      description: 'Earn industry-recognized credentials',
    },
  ];

  return (
    <>
      <Head>
        <title>Skill Development Programs | Accelerate Your Career Growth</title>
        <meta
          name="description"
          content="Transform your career with our cutting-edge Skill Development Programs. Build industry-relevant technical skills through expert-led courses, hands-on projects, and personalized mentorship."
        />
        <meta
          name="keywords"
          content="Skill Development, Career Advancement, Technical Training, Professional Development, Coding Bootcamp, Data Science Training, Tech Skills, Industry Certifications, Remote Learning"
        />
        <meta name="author" content="Your Company Name" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://yourwebsite.com/skill-development-programs" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Skill Development Programs | Accelerate Your Career Growth"
        />
        <meta
          property="og:description"
          content="Transform your career with our cutting-edge Skill Development Programs. Build industry-relevant technical skills through expert-led courses, hands-on projects, and personalized mentorship."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/skill-development-programs" />
        <meta
          property="og:image"
          content="https://yourwebsite.com/images/skill-development-banner.jpg"
        />
        <meta property="og:image:alt" content="Skill Development Programs" />
        <meta property="og:site_name" content="Your Company Name" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourcompany" />
        <meta
          name="twitter:title"
          content="Skill Development Programs | Accelerate Your Career Growth"
        />
        <meta
          name="twitter:description"
          content="Transform your career with our cutting-edge Skill Development Programs. Build industry-relevant technical skills through expert-led courses, hands-on projects, and personalized mentorship."
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/images/skill-development-banner.jpg"
        />
        <meta name="twitter:image:alt" content="Skill Development Programs" />

        {/* Structured Data / JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'Your Company Name',
              url: 'https://yourwebsite.com',
              logo: 'https://yourwebsite.com/logo.png',
              sameAs: [
                'https://www.facebook.com/yourcompany',
                'https://www.twitter.com/yourcompany',
                'https://www.linkedin.com/company/yourcompany',
              ],
              offers: {
                '@type': 'Offer',
                name: 'Skill Development Programs',
                description:
                  'Build industry-ready skills through courses, projects, and mentorship to excel in your career.',
              },
            }),
          }}
        />
      </Head>

      {/* Sticky Navbar with Glass Effect */}
      <div className="sticky top-0 z-[50] bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200/50">
        <nav className="container mx-auto flex justify-between items-center py-3 px-4 lg:px-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-[100px] h-[40px] lg:w-[150px] lg:h-[50px]">
              <img src="/logo.png" alt="Logo" className="object-contain" />
            </div>
          </Link>
          <NavbarSection />
        </nav>
      </div>

      {/* Hero Section with Particles Background */}
      <section className="relative bg-gradient-to-br from-violet-950 via-indigo-900 to-blue-800 py-20 lg:py-28 overflow-hidden">
        {/* Abstract Animated Shapes (These would be animated with CSS or a library in production) */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-400/30 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl"></div>
          <div className="absolute top-2/3 left-1/2 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl"></div>
        </div>

        {/* Tech Icons Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/40 rounded-2xl rotate-12 flex items-center justify-center">
            <Code className="w-8 h-8 text-white/80" />
          </div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-purple-500/40 rounded-full -rotate-12 flex items-center justify-center">
            <Cpu className="w-6 h-6 text-white/80" />
          </div>
          <div className="absolute bottom-40 left-1/3 w-24 h-24 bg-indigo-400/30 rounded-lg rotate-45 flex items-center justify-center">
            <Layers className="w-10 h-10 text-white/80" />
          </div>
          <div className="absolute bottom-20 right-1/4 w-20 h-20 bg-violet-500/30 rounded-full flex items-center justify-center">
            <Terminal className="w-8 h-8 text-white/80" />
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row lg:space-x-12 items-center">
            {/* Left Column: Hero Content */}
            <motion.div
              className="lg:w-3/5 space-y-8 mb-12 lg:mb-0"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-200 mb-4">
                <Rocket className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Future-Ready Education</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                Skill Development <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  for the Digital Age
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-slate-200 max-w-2xl">
                Build industry-ready skills through expert-led courses, hands-on projects, and
                personalized mentorship to excel in today&apos;s competitive job market.
              </p>
            </motion.div>
            <div className=" flex justify-end ">
              <div className="md:w-4/5">
                <SkillLeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <SkillPrograms skill />

      {/* Program Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center mb-4">
              <LucideBrainCircuit className="h-10 w-10 text-indigo-600" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              What Makes Our Program Different
            </h2>
            <p className="text-lg text-slate-600">
              Our curriculum is continuously updated to reflect the latest industry trends and
              technologies, ensuring you stay ahead in the rapidly evolving job market.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {programFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Program Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center lg:space-x-16">
            <motion.div
              className="lg:w-1/2 mb-12 lg:mb-0"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-indigo-100 rounded-full opacity-70 blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-100 rounded-full opacity-70 blur-3xl"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50">
                  <img
                    src="/new-image/skill-img.avif"
                    alt="Students learning tech skills"
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent"></div>
                  <div className="absolute -bottom-10 left-0 right-0 p-8">
                    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                      <div className="flex items-center space-x-4 mb-4">
                        <BadgeCheck className="h-8 w-8 text-indigo-600" />
                        <div>
                          <h4 className="text-lg font-semibold text-slate-900">
                            Industry Recognized
                          </h4>
                          <p className="text-slate-600">
                            Our certifications are valued by top employers
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className="w-5 h-5 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          ))}
                        </div>
                        <span className="text-slate-700 font-medium">
                          4.9/5 (500+ reviews)
                        </span>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2 space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                Empowering Students with <span className="text-indigo-600">In-Demand Skills</span>
              </h2>

              <p className="text-lg text-slate-700">
                The Skill Development Program bridges the gap between academic learning and industry
                requirements. Our comprehensive training combines theoretical knowledge with
                practical application, preparing you for real-world challenges.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: 'Cutting-Edge Curriculum',
                    description:
                      'Regularly updated to reflect the latest industry trends and technologies',
                  },
                  {
                    title: 'Learn by Doing',
                    description:
                      'Project-based learning with real-world applications and challenges',
                  },
                  {
                    title: 'Personalized Support',
                    description:
                      'One-on-one mentorship from industry experts to guide your learning journey',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                  Download Curriculum
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-indigo-900 text-white mb-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            className="max-w-3xl mx-auto space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Transform Your Career?</h2>
            <p className="text-lg text-indigo-200">
              Join thousands of successful professionals who have accelerated their careers through
              our skill development programs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Dialog>
                <DialogTrigger className="mt-6">
                  {' '}
                  <Button size="lg" className="bg-white text-indigo-900 hover:bg-slate-100">
                    Apply Now
                  </Button>
                </DialogTrigger>
                <DialogContent className=" bg-gradient-to-br from-violet-950 via-indigo-900 to-blue-800">
                  <SkillLeadForm />
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
