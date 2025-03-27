/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
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
} from 'lucide-react';
import Link from 'next/link';
import NavbarSection from '@/component/navbar/NavbarSection';

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
    description: 'Strengthen your credentials with recognized certifications.',
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

const steps = [
  {
    icon: Search,
    title: 'Choose Your Program',
    description:
      'Select from our job-focused training programs based on your career goals.',
    color: 'bg-gradient-to-r from-blue-500 to-blue-700',
  },
  {
    icon: GraduationCap,
    title: 'Learn & Apply Skills',
    description:
      'Attend expert-led live sessions, complete projects, and gain industry exposure.',
    color: 'bg-gradient-to-r from-indigo-500 to-indigo-700',
  },
  {
    icon: FileText,
    title: 'Build Your Profile',
    description:
      'Optimize your resume, LinkedIn, and portfolio with expert guidance.',
    color: 'bg-gradient-to-r from-purple-500 to-purple-700',
  },
  {
    icon: UserCheck,
    title: 'Mock Interviews & Soft Skills',
    description: 'Prepare for real-world job interviews with confidence.',
    color: 'bg-gradient-to-r from-violet-500 to-violet-700',
  },
  {
    icon: Target,
    title: 'Job Assistance & Placement',
    description:
      'Get access to job openings, referrals, and networking opportunities.',
    color: 'bg-gradient-to-r from-fuchsia-500 to-fuchsia-700',
  },
];

const jobs = [
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
  {
    position: 'Cloud Engineer (AWS/Azure)',
    location: 'Bangalore, Remote',
    salary: '₹9-16 LPA',
    featured: true,
    tag: 'Hot Role',
  },
  {
    position: 'Pharmacovigilance Associate',
    location: 'Hyderabad, Mumbai',
    salary: '₹5-8 LPA',
    featured: false,
    tag: '',
  },
  {
    position: 'Project Manager (PMP Certified)',
    location: 'Chennai, Noida',
    salary: '₹12-20 LPA',
    featured: true,
    tag: 'Executive',
  },
];

export default function JobAssistingPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section with Gradient */}
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
      <header className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white py-16 px-6 md:px-12 rounded-b-3xl shadow-xl">
        <div className="max-w-6xl mx-auto">
          {/* <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Zap className="w-8 h-8 text-yellow-300" />
              <span className="text-2xl font-bold">CareerBoost</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="hover:text-yellow-300 transition-colors">
                Programs
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                Resources
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                Success Stories
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                About Us
              </a>
              <Button className="bg-white text-indigo-700 hover:bg-yellow-300 hover:text-indigo-800 transition-all">
                Sign Up
              </Button>
            </div>
          </div> */}

          <div className="mt-16 mb-12 md:flex items-center justify-between">
            <div className="md:w-3/5">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Transform Your Career With Expert Guidance
              </h1>
              <p className="text-lg mt-6 text-blue-100 max-w-xl">
                Empowering students and professionals with industry-ready
                skills, personalized mentorship, and guaranteed job placement
                assistance.
              </p>
              <div className="mt-8 flex gap-4">
                <Button className="bg-white text-indigo-700 hover:bg-yellow-300 hover:text-indigo-800 px-6 py-6 rounded-xl shadow-lg text-lg font-medium transition-all flex items-center gap-2">
                  Get Started <ArrowRight className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 px-6 py-6 rounded-xl text-lg font-medium transition-all"
                >
                  Explore Programs
                </Button>
              </div>
            </div>
            <div className="hidden md:block md:w-2/5">
              {/* This could be replaced with an actual image */}
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

      {/* Search Section */}
      {/* <div className="max-w-6xl mx-auto -mt-8 px-6 md:px-0">
        <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col md:flex-row gap-4 items-center">
          <div className="flex items-center gap-2 bg-slate-100 rounded-xl p-4 flex-grow">
            <Search className="w-5 h-5 text-slate-500" />
            <input
              type="text"
              placeholder="Search for programs, skills or job roles..."
              className="bg-transparent border-none outline-none flex-grow text-slate-800"
            />
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <select className="bg-slate-100 p-4 rounded-xl text-slate-800 border-none outline-none">
              <option>All Locations</option>
              <option>Bangalore</option>
              <option>Mumbai</option>
              <option>Remote</option>
            </select>
            <Button className="bg-indigo-600 hover:bg-indigo-700 px-6 rounded-xl whitespace-nowrap">
              Search
            </Button>
          </div>
        </div>
      </div> */}

      {/* Highlights Section */}
      <section className="max-w-6xl mx-auto mt-16 px-6 md:px-0">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800">
            Program Highlights
          </h2>
          <p className="text-slate-600 mt-2">
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
              <CardFooter className="pt-0 pb-4">
                <a
                  href="#"
                  className={`text-sm font-medium inline-flex items-center bg-gradient-to-r ${highlight.color} bg-clip-text text-transparent`}
                >
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button className="bg-white text-indigo-700 border border-indigo-700 hover:bg-indigo-50 px-6 py-3 rounded-xl shadow-md font-medium">
            View All Job Openings
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-r from-indigo-800 to-purple-800 text-white py-16 mt-5">
        <div className="max-w-6xl mx-auto px-6 md:px-0">
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
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
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
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
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
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="italic text-indigo-100 mb-6">
                  As a career changer, I was worried about switching to tech.
                  The program provided step-by-step guidance and I&quot;m now a
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

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto my-16 px-6 md:px-0">
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
                <Button className="bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 px-6 py-3 text-white rounded-xl">
                  Schedule Consultation
                </Button>
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
      <div className="p-6 max-w-5xl mx-auto space-y-12">
        {/* Steps Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-md text-white ${step.color}`}
            >
              <step.icon className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-sm opacity-90">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Job Listings Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Featured Job Listings</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg shadow-md bg-white hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold">{job.position}</h3>
                <p className="text-sm text-gray-600">{job.location}</p>
                <p className="text-sm font-bold text-blue-600">{job.salary}</p>
                {job.featured && (
                  <span className="mt-2 inline-block bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
                    {job.tag}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Footer */}
    </div>
  );
}
