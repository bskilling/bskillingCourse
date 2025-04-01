/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import {
  Briefcase,
  CheckCircle,
  GraduationCap,
  UserCheck,
  FileText,
  Users,
  Search,
  ChevronRight,
  MapPin,
  DollarSign,
  Star,
  ArrowRight,
  Calendar,
  Zap,
  Target,
  Award,
  Code,
  Cpu,
  Layers,
  Terminal,
  Rocket,
  LucideBrainCircuit,
  TrendingUp,
  BadgeCheck,
  Paintbrush,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import NavbarSection from '@/component/navbar/NavbarSection';
import { useRouter } from 'next/navigation';
import LeadForm from '@/components/pages/institution/LeadForm';

const InstitutionHomepage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const highlights = [
    {
      icon: GraduationCap,
      title: 'Industry-Aligned Curriculum',
      description: 'Practical, job-ready training designed by experts.',
      color: 'from-blue-600 to-indigo-700',
      iconBg: 'bg-blue-100',
    },
    {
      icon: CheckCircle,
      title: 'Hands-on Projects & Case Studies',
      description: 'Gain real-world experience to boost your portfolio.',
      color: 'from-emerald-500 to-teal-600',
      iconBg: 'bg-emerald-100',
    },
    {
      icon: UserCheck,
      title: '1:1 Mentorship & Career Guidance',
      description: 'Get personalized support from industry veterans.',
      color: 'from-purple-500 to-violet-600',
      iconBg: 'bg-purple-100',
    },
    {
      icon: FileText,
      title: 'Mock Interviews & Resume Building',
      description: 'Improve your employability with expert feedback.',
      color: 'from-amber-500 to-orange-600',
      iconBg: 'bg-amber-100',
    },
    {
      icon: Briefcase,
      title: 'Internships & Certification',
      description:
        'Strengthen your credentials with recognized certifications.',
      color: 'from-rose-500 to-pink-600',
      iconBg: 'bg-rose-100',
    },
    {
      icon: Users,
      title: 'Guaranteed Job Assistance',
      description: 'Access placement support and hiring opportunities.',
      color: 'from-cyan-500 to-blue-600',
      iconBg: 'bg-cyan-100',
    },
  ];

  const programFeatures = [
    {
      icon: Code,
      title: 'Technical Skills',
      description:
        'Master programming, data science, and other technical competencies',
      color: 'bg-blue-600',
    },
    {
      icon: Users,
      title: 'Soft Skills',
      description: 'Develop communication, teamwork, and leadership abilities',
      color: 'bg-purple-600',
    },
    {
      icon: Briefcase,
      title: 'Industry Projects',
      description: 'Apply your skills to real-world business challenges',
      color: 'bg-emerald-600',
    },
    {
      icon: GraduationCap,
      title: 'Expert Mentorship',
      description: 'Learn directly from industry professionals',
      color: 'bg-amber-600',
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Enhance your employability and promotion prospects',
      color: 'bg-rose-600',
    },
    {
      icon: Award,
      title: 'Certification',
      description: 'Earn industry-recognized credentials',
      color: 'bg-cyan-600',
    },
  ];

  const topJobsCategories = [
    {
      title: 'Technology',
      jobs: [
        {
          position: 'SAP Consultant',
          location: 'Bangalore, Hyderabad',
          salary: '₹8-15 LPA',
          featured: true,
          tag: 'High Demand',
        },
        {
          position: 'Data Scientist',
          location: 'Pune, Chennai, Remote',
          salary: '₹10-18 LPA',
          featured: true,
          tag: 'Top Paying',
        },
        {
          position: 'Python Developer',
          location: 'Delhi NCR, Mumbai',
          salary: '₹6-12 LPA',
          featured: false,
          tag: '',
        },
      ],
      icon: Code,
    },
    {
      title: 'Cloud & DevOps',
      jobs: [
        {
          position: 'Cloud Engineer (AWS/Azure)',
          location: 'Bangalore, Remote',
          salary: '₹9-16 LPA',
          featured: true,
          tag: 'Hot Role',
        },
        {
          position: 'DevOps Specialist',
          location: 'Hyderabad, Pune',
          salary: '₹8-15 LPA',
          featured: true,
          tag: 'Growing Field',
        },
        {
          position: 'Site Reliability Engineer',
          location: 'Bangalore, Delhi',
          salary: '₹12-20 LPA',
          featured: false,
          tag: '',
        },
      ],
      icon: Cpu,
    },
    {
      title: 'Management & Healthcare',
      jobs: [
        {
          position: 'Project Manager (PMP Certified)',
          location: 'Chennai, Noida',
          salary: '₹12-20 LPA',
          featured: true,
          tag: 'Executive',
        },
        {
          position: 'Pharmacovigilance Associate',
          location: 'Hyderabad, Mumbai',
          salary: '₹5-8 LPA',
          featured: false,
          tag: '',
        },
        {
          position: 'Clinical Research Associate',
          location: 'Pune, Ahmedabad',
          salary: '₹7-12 LPA',
          featured: true,
          tag: 'Healthcare',
        },
      ],
      icon: Briefcase,
    },
  ];

  const skillPrograms = [
    {
      title: 'Web Development',
      duration: '24 Weeks',
      level: 'Beginner to Advanced',
      featured: true,
      modules: 'Frontend, Backend, Databases',
      icon: Code,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'Data Science & Analytics',
      duration: '32 Weeks',
      level: 'Intermediate',
      featured: true,
      modules: 'Python, Statistics, ML, Visualization',
      icon: LucideBrainCircuit,
      color: 'from-purple-500 to-violet-600',
    },
    {
      title: 'UI/UX Design',
      duration: '16 Weeks',
      level: 'All Levels',
      featured: false,
      modules: 'Design Thinking, Wireframing, Prototyping',
      icon: Paintbrush,
      color: 'from-amber-500 to-orange-600',
    },
    {
      title: 'Cloud Computing',
      duration: '20 Weeks',
      level: 'Intermediate',
      featured: true,
      modules: 'AWS, Azure, DevOps',
      icon: Cpu,
      color: 'from-cyan-500 to-blue-600',
    },
  ];

  const router = useRouter();

  return (
    <div className="bg-slate-50 min-h-screen">
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

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-700 via-purple-700 to-violet-800 text-white py-16 px-6 md:px-12 rounded-b-3xl shadow-xl">
        <div className="max-w-6xl mx-auto">
          <div className="mt-12 mb-16 md:flex items-center justify-between">
            <div className="md:w-3/5">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-200 mb-4">
                <Rocket className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">
                  Future-Ready Education
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Empowering Careers Through{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                  Expert Guidance
                </span>
              </h1>
              <p className="text-lg mt-6 text-blue-100 max-w-xl">
                Building industry-ready skills and providing job placement
                assistance to transform students and professionals into
                tomorrow&apos;s leaders.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Dialog>
                  <DialogTrigger>
                    {' '}
                    <Button className="bg-white text-indigo-700 hover:bg-blue-50 px-6 py-6 rounded-xl shadow-lg text-lg font-medium transition-all flex items-center gap-2">
                      Get Started <ArrowRight className="w-5 h-5" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl">
                    <LeadForm />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="hidden md:block md:w-2/5">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <Award className="w-10 h-10 text-yellow-300" />
                  <div>
                    <div className="text-sm text-blue-200">Success Rate</div>
                    <div className="text-2xl font-bold">93% Job Placement</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <Calendar className="w-10 h-10 text-yellow-300" />
                  <div>
                    <div className="text-sm text-blue-200">
                      Program Duration
                    </div>
                    <div className="text-2xl font-bold">3-6 Months</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Users className="w-10 h-10 text-yellow-300" />
                  <div>
                    <div className="text-sm text-blue-200">Alumni Network</div>
                    <div className="text-2xl font-bold">
                      10,000+ Professionals
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Categories */}
      <section className="max-w-6xl mx-auto -mt-8 px-6 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow bg-white/90 backdrop-blur-sm">
            <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-700"></div>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <GraduationCap className="w-8 h-8 text-blue-700" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Skill Development Programs
                </h2>
              </div>
              <p className="text-slate-600 mb-6">
                Build industry-relevant technical and soft skills through
                expert-led courses, hands-on projects, and personalized
                mentorship.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Web Development
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  Data Science
                </span>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                  Cloud Computing
                </span>
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                  UI/UX Design
                </span>
              </div>
              <Button
                onClick={() =>
                  router.push('/institutions/skill-development-programs')
                }
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white flex items-center justify-center gap-2 py-6 rounded-xl shadow-md"
              >
                Explore Skill Programs <ChevronRight className="w-5 h-5" />
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow bg-white/90 backdrop-blur-sm">
            <div className="h-2 bg-gradient-to-r from-purple-600 to-violet-700"></div>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <Briefcase className="w-8 h-8 text-purple-700" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Job Assistance Programs
                </h2>
              </div>
              <p className="text-slate-600 mb-6">
                Access personalized career guidance, interview preparation,
                resume building, and direct job placement assistance from our
                network of 500+ hiring partners.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm font-medium">
                  Resume Building
                </span>
                <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">
                  Interview Prep
                </span>
                <span className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-sm font-medium">
                  Job Matching
                </span>
                <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
                  Career Mentoring
                </span>
              </div>
              <Button
                onClick={() =>
                  router.push('/institutions/job-assisting-programs')
                }
                className="w-full bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 text-white flex items-center justify-center gap-2 py-6 rounded-xl shadow-md"
              >
                Discover Job Assistance <ChevronRight className="w-5 h-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="max-w-6xl mx-auto mt-20 px-6 md:px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800">
            Program Highlights
          </h2>
          <p className="text-slate-600 mt-2 text-lg">
            Everything you need to accelerate your career growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`h-2 bg-gradient-to-r ${highlight.color}`}></div>
              <CardContent className="pt-6 pb-4">
                <div
                  className={`${highlight.iconBg} p-3 rounded-lg inline-block mb-4`}
                >
                  <highlight.icon className="w-6 h-6 text-slate-700" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-slate-600">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Programs */}
      <section className="max-w-6xl mx-auto mt-20 px-6 md:px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-slate-800">
            Featured Programs
          </h2>
          {/* <div className="flex gap-2">
            <Button
              variant={activeTab === 'overview' ? 'default' : 'outline'}
              className={
                activeTab === 'overview' ? 'bg-indigo-600' : 'text-slate-700'
              }
              onClick={() => setActiveTab('overview')}
            >
              All Programs
            </Button>
            <Button
              variant={activeTab === 'skill' ? 'default' : 'outline'}
              className={
                activeTab === 'skill' ? 'bg-indigo-600' : 'text-slate-700'
              }
              onClick={() => setActiveTab('skill')}
            >
              Skill Development
            </Button>
            <Button
              variant={activeTab === 'job' ? 'default' : 'outline'}
              className={
                activeTab === 'job' ? 'bg-indigo-600' : 'text-slate-700'
              }
              onClick={() => setActiveTab('job')}
            >
              Job Assistance
            </Button>
          </div> */}
        </div>

        {activeTab === 'overview' || activeTab === 'skill' ? (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">
              Skill Development Programs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillPrograms.map((program, index) => (
                <Card
                  key={index}
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div
                    className={`h-2 bg-gradient-to-r ${program.color}`}
                  ></div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-r ${program.color} text-white`}
                      >
                        <program.icon className="w-6 h-6" />
                      </div>
                      {program.featured && (
                        <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      {program.title}
                    </h3>
                    <div className="space-y-2 text-sm text-slate-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-slate-400" />
                        <span>{program.level}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-slate-400" />
                        <span>{program.modules}</span>
                      </div>
                    </div>
                    <Button
                      onClick={() => {
                        router.push(`/institutions/skill-development-programs`);
                      }}
                      className="w-full bg-white border border-slate-300 text-slate-800 hover:bg-slate-50"
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button
                onClick={() => {
                  router.push(`/institutions/skill-development-programs`);
                }}
                variant="outline"
                className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
              >
                View All Skill Development Programs
              </Button>
            </div>
          </div>
        ) : null}

        {activeTab === 'overview' || activeTab === 'job' ? (
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">
              Top Jobs by Category
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {topJobsCategories.map((category, catIndex) => (
                <Card key={catIndex} className="overflow-hidden shadow-lg">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-indigo-100">
                        <category.icon className="w-5 h-5 text-indigo-700" />
                      </div>
                      <CardTitle>{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="space-y-3">
                      {category.jobs.map((job, jobIndex) => (
                        <div
                          key={jobIndex}
                          className="p-3 border rounded-lg hover:bg-slate-50 transition-colors"
                        >
                          <div className="flex justify-between items-start">
                            <h4 className="font-semibold text-slate-800">
                              {job.position}
                            </h4>
                            {job.featured && (
                              <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
                                {job.tag}
                              </span>
                            )}
                          </div>
                          <div className="mt-2 space-y-1 text-sm">
                            <div className="flex items-center text-slate-600">
                              <MapPin className="w-4 h-4 mr-1 text-slate-400" />
                              {job.location}
                            </div>
                            <div className="flex items-center text-slate-600">
                              <DollarSign className="w-4 h-4 mr-1 text-slate-400" />
                              {job.salary}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      onClick={() => {
                        router.push(`/institutions/job-assisting-programs`);
                      }}
                      variant="outline"
                      className="w-full"
                    >
                      View All Jobs
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button
                onClick={() => {
                  router.push(`/institutions/job-assisting-programs`);
                }}
                variant="outline"
                className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
              >
                Browse All Job Openings
              </Button>
            </div>
          </div>
        ) : null}
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-r from-indigo-800 to-purple-800 text-white py-16 mt-20">
        <div className="max-w-6xl mx-auto px-6 md:px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Success Stories</h2>
            <p className="text-indigo-200 mt-2">
              Hear from our program graduates
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/10 backdrop-blur-sm border-none shadow-xl text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4 text-yellow-300">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="italic text-indigo-100 mb-6">
                  The mentorship program was transformative. I landed a role at
                  a top tech company with a 40% salary increase within 2 months
                  of completion.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center text-xl font-bold">
                    RP
                  </div>
                  <div>
                    <div className="font-medium">Rahul P.</div>
                    <div className="text-indigo-200 text-sm">
                      Data Scientist @ Amazon
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-none shadow-xl text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4 text-yellow-300">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="italic text-indigo-100 mb-6">
                  The hands-on projects gave me real-world experience that made
                  my portfolio stand out. The interview prep was spot on for
                  what I actually faced.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-xl font-bold">
                    AS
                  </div>
                  <div>
                    <div className="font-medium">Ananya S.</div>
                    <div className="text-indigo-200 text-sm">
                      SAP Consultant @ Accenture
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-none shadow-xl text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4 text-yellow-300">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="italic text-indigo-100 mb-6">
                  As a career changer, I was worried about switching to tech.
                  The program provided step-by-step guidance and I&apos;m now a
                  cloud engineer earning twice my previous salary.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-xl font-bold">
                    VK
                  </div>
                  <div>
                    <div className="font-medium">Vivek K.</div>
                    <div className="text-indigo-200 text-sm">
                      Cloud Engineer @ Microsoft
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <BadgeCheck className="h-10 w-10 text-indigo-600" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Our Institution
            </h2>
            <p className="text-lg text-slate-600">
              Our curriculum is continuously updated to reflect the latest
              industry trends and technologies, ensuring you stay ahead in the
              rapidly evolving job market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center text-white mb-4`}
                >
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto my-16 px-6 md:px-4">
        <Card className="overflow-hidden shadow-2xl">
          <div className="md:flex">
            <div className="md:w-3/5 p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                Ready to Take the Next Step in Your Career?
              </h2>
              <p className="text-slate-600 mb-6">
                Join thousands of professionals who&apos;ve transformed their
                careers with our expert-led programs. Schedule a free career
                consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Dialog>
                  <DialogTrigger>
                    {' '}
                    <Button className="bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 px-6 py-3 text-white rounded-xl">
                      Schedule Consultation
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl">
                    <LeadForm />
                  </DialogContent>
                </Dialog>

                <Button
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-slate-100 px-6 py-3 rounded-xl"
                >
                  Download Brochure
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 md:w-2/5 p-8 md:p-12 text-white flex items-center justify-center">
              <div>
                <div className="text-4xl font-bold mb-2">93%</div>
                <div className="text-xl mb-6">Placement Success Rate</div>
                <div className="text-4xl font-bold mb-2">₹12.4L</div>
                <div className="text-xl mb-6">Average Package</div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-xl">Hiring Partners</div>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default InstitutionHomepage;
