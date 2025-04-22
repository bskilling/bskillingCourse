/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import PopupForm from './PopupForm';
import GoogleReviews from '@/components/pages/GoogleReviews';
import {
  FaApple,
  FaGooglePlay,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const handleOpenPopup = () => setPopupOpen(true);
  const handleClosePopup = () => setPopupOpen(false);

  return (
    <footer className="bg-blue-900 text-gray-100">
      {/* Main Footer Content with improved spacing */}
      <div className="max-w-[85vw] mx-auto py-14 px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-10">
          {/* Logo, Reviews and Social Icons with enhanced styling */}
          <div className="lg:col-span-1">
            <Link href={'/'} className="block mb-5">
              <img
                src="/logo.png"
                className="object-contain md:w-[140px] md:h-[55px] w-[130px] h-[35px]"
                alt="Logo"
              />
            </Link>

            {/* Google Reviews with enhanced spacing */}
            <div className="mb-5 text-gray-200">
              <GoogleReviews />
            </div>
          </div>

          {/* Company with enhanced spacing and hover effects */}
          <div className="lg:col-span-1">
            <h5 className="text-lg font-semibold mb-5 text-blue-300">Company</h5>
            <ul className="space-y-3">
              {[
                'About Us',
                'Reviews',
                'Terms & Conditions',
                'Privacy - Policy',
                'Refund Policy',
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, '')}`}
                    className="text-gray-200 hover:text-blue-200 duration-300 text-sm flex items-center hover:translate-x-1 transform transition-transform"
                  >
                    <span className="bg-sky-400 w-1.5 h-1.5 rounded-full mr-2 inline-block"></span>
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://sfjbs.talentrecruit.com/career-page"
                  target="_blank"
                  className="text-gray-200 hover:text-blue-200 duration-300 text-sm flex items-center hover:translate-x-1 transform transition-transform"
                >
                  <span className="bg-sky-400 w-1.5 h-1.5 rounded-full mr-2 inline-block"></span>
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Collaborate with enhanced styling */}
          <div className="lg:col-span-1">
            <h5 className="text-lg font-semibold mb-5 text-blue-300">Collaborate</h5>
            <ul className="space-y-3">
              <li
                onClick={handleOpenPopup}
                className="text-gray-200 hover:text-blue-200 duration-300 cursor-pointer text-sm flex items-center hover:translate-x-1 transform transition-transform"
              >
                <span className="bg-sky-400 w-1.5 h-1.5 rounded-full mr-2 inline-block"></span>
                Become an Instructor
              </li>
              {isPopupOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                  <PopupForm handleClosePopup={handleClosePopup} title="" />
                </div>
              )}
              {['Corporate Training', 'Government Training Program', 'Institutions'].map(
                (item, idx) => (
                  <li key={idx}>
                    <Link
                      href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-200 hover:text-blue-200 duration-300 text-sm flex items-center hover:translate-x-1 transform transition-transform"
                    >
                      <span className="bg-sky-400 w-1.5 h-1.5 rounded-full mr-2 inline-block"></span>
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Programs with enhanced styling */}
          <div className="lg:col-span-1">
            <h5 className="text-lg font-semibold mb-5 text-blue-300">Programs</h5>
            <ul className="space-y-3">
              {[
                {
                  name: 'Gen AI',
                  link: 'https://www.bskilling.com/course/become-ai-generative-ai-expert-certification-course?id=67e50a7021a141df13e64ddd',
                },
                {
                  name: 'AWS Certified Associate',
                  link: 'https://www.bskilling.com/course/developing-on-aws-certified-developer-training?id=67e11f701933422b669d65aa',
                },
                {
                  name: 'Azure AI Solution',
                  link: 'https://www.bskilling.com/course/ai-102-microsoft-azure-ai-solution-certification-course?id=67e3e6e7a05b32da1807dc2b',
                },
                {
                  name: 'CompTIA Cybersecurity',
                  link: 'https://www.bskilling.com/course/comptia-cybersecurity-analyst-(cysa+)-certification-training-course?id=67e3eddca05b32da1808253e',
                },
                {
                  name: 'PMP',
                  link: 'https://www.bskilling.com/course/project-management-professional-pmp-certification-prep-training?id=67e3f0d4a05b32da180871af',
                },
                {
                  name: 'Cloud Architect',
                  link: 'https://www.bskilling.com/course/google-cloud-professional-cloud-architect-certification-training?id=67e3f06fa05b32da18086def',
                },
              ].map((program, idx) => (
                <li key={idx}>
                  <Link
                    href={`${program.link}`}
                    className="text-gray-200 hover:text-blue-200 duration-300 text-sm flex items-center hover:translate-x-1 transform transition-transform"
                  >
                    <span className="bg-sky-400 w-1.5 h-1.5 rounded-full mr-2 inline-block"></span>
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support - Contact Information with enhanced styling */}
          <div className="lg:col-span-2">
            <h5 className="text-lg font-semibold mb-5 text-blue-300">Support</h5>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 group">
                <div className="bg-blue-700 p-2 rounded-full text-sky-300 mt-0.5 flex-shrink-0 group-hover:bg-blue-600 duration-300">
                  <FaEnvelope className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-gray-300 text-sm">Email: </span>
                  <a
                    href="mailto:support@bskilling.com"
                    className="text-gray-200 hover:text-blue-200 text-sm font-medium"
                  >
                    support@bskilling.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="bg-blue-700 p-2 rounded-full text-sky-300 mt-0.5 flex-shrink-0 group-hover:bg-blue-600 duration-300">
                  <FaPhone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-gray-300 text-sm">Phone: </span>
                  <a
                    href="tel:+919845348601"
                    className="text-gray-200 hover:text-blue-200 text-sm font-medium"
                  >
                    +91-98453 48601
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="bg-blue-700 p-2 rounded-full text-sky-300 mt-0.5 flex-shrink-0 group-hover:bg-blue-600 duration-300">
                  <FaEnvelope className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-gray-300 text-sm">Grievance Officer: </span>
                  <a
                    href="mailto:grievanceofficer@bskilling.com"
                    className="text-gray-200 hover:text-blue-200 text-sm font-medium"
                  >
                    grievanceofficer@bskilling.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="bg-blue-700 p-2 rounded-full text-sky-300 mt-0.5 flex-shrink-0 group-hover:bg-blue-600 duration-300">
                  <FaPhone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-gray-300 text-sm">Support: </span>
                  <a
                    href="tel:+918951923627"
                    className="text-gray-200 hover:text-blue-200 text-sm font-medium"
                  >
                    +91 89519 23627
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div>
            {/* Mobile Apps with enhanced styling */}
            <h5 className="text-lg font-semibold mb-5 text-blue-300">Mobile Apps</h5>
            <div className="flex flex-col gap-4">
              <Link
                href="https://apps.apple.com/eg/app/bskilling/id6445943298"
                target="_blank"
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-blue-800 text-gray-200 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                <FaApple className="text-xl text-sky-300" />
                <div className="flex flex-col">
                  <span className="text-xs opacity-80">Download on the</span>
                  <span className="text-sm font-medium">App Store</span>
                </div>
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.melimu.app.bskilling&hl=en_IN&gl=US"
                target="_blank"
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-blue-800 text-gray-200 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                <FaGooglePlay className="text-xl text-sky-300" />
                <div className="flex flex-col">
                  <span className="text-xs opacity-80">Get it on</span>
                  <span className="text-sm font-medium">Google Play</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Address and Copyright with enhanced styling */}
        <div className="mt-12 pt-10 border-t border-blue-700">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-5 md:mb-0 group">
              <div className="bg-blue-700 p-2 rounded-full text-sky-300 mt-0.5 flex-shrink-0 group-hover:bg-blue-600 duration-300">
                <FaMapMarkerAlt className="w-4 h-4" />
              </div>
              <p className="text-sm text-gray-200 ml-3 leading-relaxed">
                UMA SREE DREAM WORLD, B-Block 4th Floor, Kudlu Gate, Hosur Rd, Bengaluru, Karnataka
                560068
              </p>
            </div>
            <p className="text-sm text-blue-200 font-medium max-w-xl flex justify-end">
              &copy; {new Date().getFullYear()} bSkilling. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
