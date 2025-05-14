/* eslint-disable @next/next/no-img-element */
'use client';
import { format } from 'date-fns';
import { Link as Scroll } from 'react-scroll';
import {
  PlayIcon,
  CheckIcon,
  BookOpenIcon,
  AcademicCapIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';
import {
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  ShieldCheckIcon,
  UserPlus,
  Users,
} from 'lucide-react';
import { IoIosCheckbox, IoIosCheckmarkCircle } from 'react-icons/io';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ICourse } from './types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { BsFillBookmarkCheckFill, BsFolderCheck } from 'react-icons/bs';
import { CreditCardIcon, ClockIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { LuRadioTower } from 'react-icons/lu';
import { Button } from '@/components/ui/button';
import { BiSolidCertification } from 'react-icons/bi';
// import ContactForm from "./ContactForm";
// @ts-ignore
import { heroVariants } from '../[id]/_components/HeroSection';
import { HeroSection } from './HeroSection';
import CourseDetails from './Certificate';
import Highlights from './Highlights';
import Outcomes from './Outcomes';
import CourseEnrollment from './Price';
import FAQSection from './faqs';
import WhyJoinSection from './Whychoose';
import Footer from './Footer';
import Modules from './Modules';
import ConsultationForm from '../../indiviual/LeadForm';
import Link from 'next/link';
import CourseResources from './Skills';
import CertificationSection from './certificate1';
import CriteriaSection from './Creteria';
import PopupConsultationForm from './dialogs/Form';
import PaymentForm from '@/component/modules/leadChat/components/PaymentForm';
import FreeCourseEnrollment from './FreeCourse';

// Adjust this type as needed.
export interface TDraftCourseForm {
  _id: string;
  title: string;
  description: string;
  isPaid: boolean;
  appliedCount: number;
  trainedCount: number;
  price: number;
  videoUrl?: string;
  banner?: { _id: string; viewUrl: string } | null;
  previewImage?: { _id: string; viewUrl: string } | null;
  logoUrl?: { _id: string; viewUrl: string } | null;
  durationHours: number;
  startTime: string;
  endTime?: string;
  faqs?: { question: string; answer: string }[];
  category?: string[];
  highlights?: string[];
  images?: string[];
  certification?: {
    image: {
      _id: string;
      viewUrl: string;
    };
    title: string;
    content: string;
  };
  partnership: {
    image: {
      _id: string;
      viewUrl: string;
    };
    title: string;
    content: string;
  };
  overview?: {
    title: string;
    description: string;
    keyFeatures?: string[];
    skillsCovered?: string[];
  };
  curriculum?: {
    eligibility?: string;
    prerequisites?: string;
    chapters?: {
      title: string;
      lessons?: {
        title: string;
        content: string;
        _id: string;
      }[];
      _id: string;
    }[];
  };
  whyJoin?: string[];
  skills?: string[];
  slug?: string;
  isPublished: boolean;
}

const CourseLandingPage = ({ courseData }: { courseData: ICourse }) => {
  const {
    _id,
    title,
    description,
    category,
    highlights,
    isPaid,
    skills,
    curriculum,
    whyJoin,
    price,
    videoUrl,
    banner,
    durationHours,
    startTime,
    endTime,
    trainedCount,
    appliedCount,
    faqs,
    images,
    overview,
    tools,
    partnerShip,
    certification,
    outcomes,
    variant,
    broucher,

    // logoUrl, previewImage, slug not used in this single-page layout
  } = courseData;

  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Use a default banner image if not provided.
  const bannerImage =
    banner?.viewUrl || 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg';
  const placeholder = 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg';

  // Format price (assuming price is in cents)
  const formattedPrice = price ? price?.amount?.toFixed(2) : 'Free';
  const dateOptions: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState<'b2c' | 'b2b' | 'b2i' | 'general'>('b2c');
  const [formTitle, setFormTitle] = useState('Get in Touch');
  const [formDescription, setFormDescription] = useState('');

  const openConsultationForm = (
    type: 'b2c' | 'b2b' | 'b2i' | 'general',
    title: string,
    description: string
  ) => {
    setFormType(type);
    setFormTitle(title);
    setFormDescription(description);
    setIsFormOpen(true);
  };
  return (
    <div className="min-h-screen  ">
      {/* Navigation */}

      <PopupConsultationForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title={formTitle}
        description={formDescription}
        formType={formType}
        course={_id}
        broucher={broucher}
      />
      <nav className="fixed w-full bg-white shadow-md z-50 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href={'/'} className="flex items-center">
                <img src="/logo.png" className="h-10 w-auto object-contain" alt="Logo" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <Scroll
                to="hero"
                spy={true}
                smooth={true}
                onClick={() => {
                  setActiveTab('home');
                }}
                className={cn(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out',
                  activeTab === 'home'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                )}
              >
                Home
              </Scroll>

              <Scroll
                to="overview"
                smooth={true}
                onClick={() => {
                  setActiveTab('overview');
                }}
                className={cn(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out',
                  activeTab === 'overview'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                )}
              >
                Overview
              </Scroll>

              <Scroll
                to="curriculum"
                smooth={true}
                onClick={() => {
                  setActiveTab('curriculum');
                }}
                className={cn(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out',
                  activeTab === 'curriculum'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                )}
              >
                Curriculum
              </Scroll>

              {skills && skills.length > 0 && (
                <Scroll
                  to="skills"
                  smooth={true}
                  className={cn(
                    'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out',
                    activeTab === 'skills'
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  )}
                  onClick={() => {
                    setActiveTab('skills');
                  }}
                >
                  Skills
                </Scroll>
              )}

              <Scroll
                to="Criteria"
                smooth={true}
                onClick={() => {
                  setActiveTab('Criteria');
                }}
                className={cn(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out hover:cursor-pointer',
                  activeTab === 'Criteria'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                )}
              >
                Criteria
              </Scroll>

              <Scroll
                to="pricing"
                smooth={true}
                onClick={() => {
                  setActiveTab('pricing');
                }}
                className={cn(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out',
                  activeTab === 'pricing'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                )}
              >
                Pricing
              </Scroll>

              {/* Apply Button */}
              <button
                onClick={() => openConsultationForm('b2c', 'Apply Now', '')}
                className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-sm transition-colors duration-200"
              >
                Apply Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed */}
                <svg
                  className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Icon when menu is open */}
                <svg
                  className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <div
          className={`${
            mobileMenuOpen ? 'block' : 'hidden'
          } md:hidden bg-white border-t border-gray-100`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Scroll
              to="hero"
              spy={true}
              smooth={true}
              onClick={() => {
                setActiveTab('home');
                setMobileMenuOpen(false);
              }}
              className={cn(
                'block px-3 py-2 rounded-md text-base font-medium',
                activeTab === 'home'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              )}
            >
              Home
            </Scroll>

            <Scroll
              to="overview"
              smooth={true}
              onClick={() => {
                setActiveTab('overview');
                setMobileMenuOpen(false);
              }}
              className={cn(
                'block px-3 py-2 rounded-md text-base font-medium',
                activeTab === 'overview'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              )}
            >
              Overview
            </Scroll>

            <Scroll
              to="curriculum"
              smooth={true}
              onClick={() => {
                setActiveTab('curriculum');
                setMobileMenuOpen(false);
              }}
              className={cn(
                'block px-3 py-2 rounded-md text-base font-medium',
                activeTab === 'curriculum'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              )}
            >
              Curriculum
            </Scroll>

            {skills && skills.length > 0 && (
              <Scroll
                to="skills"
                smooth={true}
                className={cn(
                  'block px-3 py-2 rounded-md text-base font-medium',
                  activeTab === 'skills'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                )}
                onClick={() => {
                  setActiveTab('skills');
                  setMobileMenuOpen(false);
                }}
              >
                Skills
              </Scroll>
            )}

            <Scroll
              to="Criteria"
              smooth={true}
              onClick={() => {
                setActiveTab('Criteria');
                setMobileMenuOpen(false);
              }}
              className={cn(
                'block px-3 py-2 rounded-md text-base font-medium',
                activeTab === 'Criteria'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              )}
            >
              Criteria
            </Scroll>

            <Scroll
              to="pricing"
              smooth={true}
              onClick={() => {
                setActiveTab('pricing');
                setMobileMenuOpen(false);
              }}
              className={cn(
                'block px-3 py-2 rounded-md text-base font-medium',
                activeTab === 'pricing'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              )}
            >
              Pricing
            </Scroll>

            {/* Mobile Apply Button */}
            <button className="mt-3 w-full flex justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              Apply Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection
        category={category}
        title={title}
        description={description}
        bannerImage={bannerImage}
        duration={durationHours}
        modules={curriculum?.chapters?.length}
        amount={price.amount}
        currency={price.currency}
        courseId={_id}
        isPaid={isPaid}
        broucher={broucher}
      />
      {/* <PaymentForm courseDetails={courseData} /> */}
      <CourseDetails
        durationHours={durationHours}
        enrolledStudents={1000}
        certification={certification}
        enrollmentEnd={endTime}
        enrollmentStart={startTime}
        trainingMode={'Hybrid'}
        overview={overview}
      />
      <Modules chapters={curriculum.chapters} />
      {<CourseResources skills={skills} tools={tools} />}
      <Highlights highlights={highlights || []} />
      <Outcomes outcomes={outcomes || []} />

      <CertificationSection certification={certification} />
      {isPaid ? (
        <CourseEnrollment
          formattedPrice={formattedPrice}
          durationHours={durationHours}
          isPaid={isPaid}
          _id={_id}
        />
      ) : (
        <FreeCourseEnrollment durationHours={durationHours} _id={_id} courseName={title} />
      )}

      <CriteriaSection curriculum={curriculum} _id={_id} />
      <WhyJoinSection whyJoin={whyJoin} />
      <FAQSection faqs={faqs} _id={_id} />
      <div className="h-20"></div>
    </div>
  );
};

export default CourseLandingPage;

interface DetailCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

const DetailCard: React.FC<DetailCardProps> = ({ icon, title, value }) => {
  return (
    <div className="flex items-center bg-gradient-to-r from-indigo-500 to-purple-500 p-1 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-200">
      <div className="flex flex-1 bg-white p-4 rounded-xl items-center">
        <div className="p-2 bg-indigo-50 rounded-full">{icon}</div>
        <div className="ml-4">
          <p className="text-sm font-semibold text-gray-600">{title}</p>
          <p className="text-lg font-bold text-gray-800">{value}</p>
        </div>
      </div>
    </div>
  );
};
