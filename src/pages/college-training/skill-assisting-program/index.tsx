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

// SkillOffering Component
function SkillOffering() {
  return (
    <div className="">
      <h4 className="text-3xl font-bold text-center mt-5 md:mt-0">
        Bridging Skills Across Multiple Industries
      </h4>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-5  lg:grid-cols-5  m-auto mt-10 px-1 md:px-5 ">
        {Object.entries(skillDevelopmentAreas).map(([key, value]) => (
          <Card key={key} className="w-full">
            <CardHeader className="p-0">
              <img
                src={value.imageBanner}
                alt={'Image-banner'}
                className="object-cover h-[200px]"
              />

              <CardTitle className="p-2">{value.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-2 text-sm">
              <div className="space-y-2 text-xs">
                {value.subTitles.map((subTitle, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <div className="w-[10%]">
                      <div className=" h-2 w-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="w-5/6">
                      <p className="text-xs">{subTitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>{/* <p>Card Footer</p> */}</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

const skillDevelopmentAreas = {
  informationTechnology: {
    title: 'Information Technology (IT)',
    icon: 'it-icon.svg', // Optional icon
    imageBanner: '/new-image/institutions/hhhh.avif', // Optional image banner
    subTitles: [
      'Software Development',
      'Cloud Computing',
      'Cybersecurity',
      'Artificial Intelligence (AI) & Machine Learning (ML)',
      'Data Science and Analytics',
    ],
  },
  businessManagement: {
    title: 'Business and Management',
    icon: 'business-icon.svg',
    imageBanner: '/new-image/bussiness.webp',
    subTitles: [
      'Product Management',
      'Project Management (PMP, Agile, Scrum)',
      'Digital Marketing',
      'Human Resource Management',
    ],
  },
  retailEcommerce: {
    title: 'Retail and E-commerce',
    icon: 'retail-icon.svg',
    imageBanner: '/new-image/ecom.webp',
    subTitles: [
      'Digital Transformation in Retail',
      'Customer Relationship Management (CRM)',
      'Data-Driven Marketing',
    ],
  },
  telecommunications: {
    title: 'Telecommunications',
    icon: 'telecom-icon.svg',
    imageBanner: '/new-image/telecom.webp',
    subTitles: ['Networking and Infrastructure', 'IoT in Telecommunications', '5G Technologies'],
  },
  healthcare: {
    title: 'Healthcare',
    icon: 'healthcare-icon.svg',
    imageBanner: '/new-image/doctor.webp',
    subTitles: [
      'Medical Coding and Billing',
      'Pharmacovigilance',
      'Clinical Data Management',
      'Healthcare IT',
    ],
  },
};

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
                EMPOWERING STUDENTS WITH IN-DEMAND SKILLS FOR A BRIGHTER FUTURE. Designed to bridge
                the gap between academic learning and industry requirements with comprehensive
                training in technical and professional skills.
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

      {/* Program Features Section with content from first snippet */}
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
              Program Focus Areas
            </h2>
            <p className="text-lg text-slate-600">
              The program includes workshops, hands-on projects, and mentorship sessions conducted
              by industry experts. Students are presented with real-world challenges to enhance
              their problem-solving and critical-thinking abilities.
            </p>
          </motion.div>

          <div className="mb-16">
            <ul className="list-disc list-inside text-gray-700 space-y-4 max-w-3xl mx-auto">
              <li className="text-lg">
                <span className="text-indigo-600 font-semibold">Bridging the gap</span> between
                theoretical academic knowledge and practical industry requirements.
              </li>
              <li className="text-lg">
                <span className="text-indigo-600 font-semibold">Empowering students</span> to
                confidently apply theoretical knowledge in real-world scenarios.
              </li>
              <li className="text-lg">
                <span className="text-indigo-600 font-semibold">Keeping students updated</span> with
                current industry trends, tools, and technologies.
              </li>
              <li className="text-lg">
                <span className="text-indigo-600 font-semibold">
                  Building problem-solving skills
                </span>{' '}
                through hands-on experiences.
              </li>
            </ul>
          </div>

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

      {/* Key Highlights Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Key Highlights of the Program
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-indigo-800 mb-3">
                <span className="text-indigo-600 font-semibold">Hands-on Projects:</span>
              </h3>
              <p className="text-slate-700">
                Real-world projects to help students apply their classroom knowledge in practical
                scenarios.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-indigo-800 mb-3">
                <span className="text-indigo-600 font-semibold">Comprehensive Skill Training:</span>
              </h3>
              <p className="text-slate-700">
                Covering both technical and soft skills to create well-rounded professionals.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-indigo-800 mb-3">
                <span className="text-indigo-600 font-semibold">Modern Tools & Technologies:</span>
              </h3>
              <p className="text-slate-700">
                Exposure to IT systems, data analytics, and emerging technologies.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-indigo-800 mb-3">
                <span className="text-indigo-600 font-semibold">Industry-Relevant Curriculum:</span>
              </h3>
              <p className="text-slate-700">
                A carefully curated curriculum aligned with current market demands and trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SkillOffering Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <SkillOffering />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-br from-blue-300 to-blue-700 text-white">
        <div className="container mx-auto px-6">
          <h4 className="text-3xl font-bold text-center mb-10">How It Works?</h4>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="bg-white text-indigo-900 w-full md:w-1/3 p-6 rounded-xl shadow-xl text-center">
              <h3 className="font-bold text-xl mb-2">Enroll in Course</h3>
              <p>Begin your journey to skill enhancement</p>
            </div>

            <ArrowRight className="hidden md:block h-10 w-10" />

            <div className="bg-white text-indigo-900 w-full md:w-1/3 p-6 rounded-xl shadow-xl text-center">
              <h3 className="font-bold text-xl mb-2">Get Training</h3>
              <p>Online/offline comprehensive learning</p>
            </div>

            <ArrowRight className="hidden md:block h-10 w-10" />

            <div className="bg-white text-indigo-900 w-full md:w-1/3 p-6 rounded-xl shadow-xl text-center">
              <h3 className="font-bold text-xl mb-2">Get Certification</h3>
              <p>Earn industry-recognized credentials</p>
            </div>
          </div>
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
                Why Choose <span className="text-indigo-600">Us?</span>
              </h2>

              <p className="text-lg text-slate-700">
                With over 13+ years of experience in the EdTech industry, we stand as a pioneer in
                enhancing employability and preparing students for the future workforce.
              </p>

              <div className="space-y-4">
                <div className="flex space-x-4">
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
                    <h4 className="font-semibold text-slate-900">
                      Collaboration with 350+ colleges
                    </h4>
                    <p className="text-slate-600">
                      across India ensures a wide-reaching impact on student skill development.
                    </p>
                  </div>
                </div>

                <div className="flex space-x-4">
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
                    <h4 className="font-semibold text-slate-900">
                      Partnerships with 500+ global companies
                    </h4>
                    <p className="text-slate-600">
                      open doors for valuable industry insights and opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex space-x-4">
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
                    <h4 className="font-semibold text-slate-900">
                      Trusted by reputed organizations
                    </h4>
                    <p className="text-slate-600">
                      like Karnataka Skill Development Corporation, Naan Mudhalvan, and NASSCOM.
                    </p>
                  </div>
                </div>

                <div className="flex space-x-4">
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
                    <h4 className="font-semibold text-slate-900">6000+ Students Trained</h4>
                    <p className="text-slate-600">with proven success in career advancement.</p>
                  </div>
                </div>
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
