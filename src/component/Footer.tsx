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
    <footer className="bg-white text-gray-700">
      {/* Enhanced Top Wave Decoration with larger height and more defined waves */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 h-10 relative overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-full h-24 absolute bottom-0"
          style={{ transform: 'translateY(5px)' }}
        >
          <path
            fill="#ffffff"
            d="M0,256L48,240C96,224,192,192,288,192C384,192,480,224,576,229.3C672,235,768,213,864,192C960,171,1056,149,1152,165.3C1248,181,1344,235,1392,261.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Main Footer Content with improved spacing */}
      <div className="max-w-7xl mx-auto py-14 px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
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
            <div className="mb-5 text-gray-700">
              <GoogleReviews />
            </div>
          </div>

          {/* Company with enhanced spacing and hover effects */}
          <div className="lg:col-span-1">
            <h5 className="text-lg font-semibold mb-5 text-gray-800">
              Company
            </h5>
            <ul className="space-y-3">
              {[
                'About Us',
                'Blogs',
                'Reviews',
                'Terms & Conditions',
                'Privacy Policy',
                'Refund Policy',
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, '')}`}
                    className="text-gray-600 hover:text-blue-600  duration-300 text-sm flex items-center hover:translate-x-1 transform transition-transform"
                  >
                    <span className="bg-blue-50 w-1.5 h-1.5 rounded-full mr-2 inline-block"></span>
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://sfjbs.talentrecruit.com/career-page"
                  target="_blank"
                  className="text-gray-600 hover:text-blue-600  duration-300 text-sm flex items-center hover:translate-x-1 transform transition-transform"
                >
                  <span className="bg-blue-50 w-1.5 h-1.5 rounded-full mr-2 inline-block"></span>
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Collaborate with enhanced styling */}
          <div className="lg:col-span-1">
            <h5 className="text-lg font-semibold mb-5 text-gray-800">
              Collaborate
            </h5>
            <ul className="space-y-3">
              <li
                onClick={handleOpenPopup}
                className="text-gray-600 hover:text-blue-600  duration-300 cursor-pointer text-sm flex items-center hover:translate-x-1 transform transition-transform"
              >
                <span className="bg-blue-50 w-1.5 h-1.5 rounded-full mr-2 inline-block"></span>
                Become an Instructor
              </li>
              {isPopupOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                  <PopupForm handleClosePopup={handleClosePopup} title="" />
                </div>
              )}
              {[
                'Corporate Training',
                'Government Programs',
                'Institutions',
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-600 hover:text-blue-600  duration-300 text-sm flex items-center hover:translate-x-1 transform transition-transform"
                  >
                    <span className="bg-blue-50 w-1.5 h-1.5 rounded-full mr-2 inline-block"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs with enhanced styling */}
          <div className="lg:col-span-1">
            <h5 className="text-lg font-semibold mb-5 text-gray-800">
              Programs
            </h5>
            <ul className="space-y-3">
              {[
                { name: 'Gen AI', id: '66b1cb24f86931fdf7712eb0' },
                { name: 'Cloud Engineering', id: '66ab29e5637a3684c72041f9' },
                { name: 'Project Management', id: '66ab4dbff86931fdf76f5a30' },
                { name: 'Professional (PMP)', id: '66ab4dbff86931fdf76f5a30' },
                { name: 'Prince2', id: '66c0369af86931fdf791aeb0' },
                { name: 'SAP BTP', id: '66ab348df86931fdf76f3f80' },
              ].map((program, idx) => (
                <li key={idx}>
                  <Link
                    href={`/courses/course-details/${program.id}`}
                    className="text-gray-600 hover:text-blue-600  duration-300 text-sm flex items-center hover:translate-x-1 transform transition-transform"
                  >
                    <span className="bg-blue-50 w-1.5 h-1.5 rounded-full mr-2 inline-block"></span>
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support - Contact Information with enhanced styling */}
          <div className="lg:col-span-2">
            <h5 className="text-lg font-semibold mb-5 text-gray-800">
              Support
            </h5>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 group">
                <div className="bg-blue-50 p-2 rounded-full text-blue-600 mt-0.5 flex-shrink-0 group-hover:bg-blue-100  duration-300">
                  <FaEnvelope className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-gray-600 text-sm">Email: </span>
                  <a
                    href="mailto:support@bskilling.com"
                    className="text-blue-600 hover:underline text-sm font-medium"
                  >
                    support@bskilling.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="bg-blue-50 p-2 rounded-full text-blue-600 mt-0.5 flex-shrink-0 group-hover:bg-blue-100  duration-300">
                  <FaPhone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-gray-600 text-sm">Phone: </span>
                  <a
                    href="tel:+919845348601"
                    className="text-blue-600 hover:underline text-sm font-medium"
                  >
                    +91-98453 48601
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="bg-blue-50 p-2 rounded-full text-blue-600 mt-0.5 flex-shrink-0 group-hover:bg-blue-100  duration-300">
                  <FaEnvelope className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-gray-600 text-sm">
                    Grievance Officer:{' '}
                  </span>
                  <a
                    href="mailto:grievanceofficer@bskilling.com"
                    className="text-blue-600 hover:underline text-sm font-medium"
                  >
                    grievanceofficer@bskilling.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="bg-blue-50 p-2 rounded-full text-blue-600 mt-0.5 flex-shrink-0 group-hover:bg-blue-100  duration-300">
                  <FaPhone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-gray-600 text-sm">Support: </span>
                  <a
                    href="tel:+918951923627"
                    className="text-blue-600 hover:underline text-sm font-medium"
                  >
                    +91 89519 23627
                  </a>
                </div>
              </li>
            </ul>

            {/* Mobile Apps with enhanced styling */}
            <h5 className="text-lg font-semibold mt-8 mb-5 text-gray-800">
              Mobile Apps
            </h5>
            <div className="flex gap-4">
              <Link
                href="https://apps.apple.com/eg/app/bskilling/id6445943298"
                target="_blank"
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                <FaApple className="text-xl" />
                <div className="flex flex-col">
                  <span className="text-xs opacity-80">Download on the</span>
                  <span className="text-sm font-medium">App Store</span>
                </div>
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.melimu.app.bskilling&hl=en_IN&gl=US"
                target="_blank"
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                <FaGooglePlay className="text-xl" />
                <div className="flex flex-col">
                  <span className="text-xs opacity-80">Get it on</span>
                  <span className="text-sm font-medium">Google Play</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Address and Copyright with enhanced styling */}
        <div className="mt-12 pt-10 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-start mb-5 md:mb-0 group">
              <div className="bg-blue-50 p-2 rounded-full text-blue-600 mt-0.5 flex-shrink-0 group-hover:bg-blue-100  duration-300">
                <FaMapMarkerAlt className="w-4 h-4" />
              </div>
              <p className="text-sm text-gray-600 ml-3 max-w-xl leading-relaxed">
                B-Block 4th Floor, COMMERCIAL BUILDING, UMA SREE DREAM WORLD,
                Unit -2, Hosur Rd, Kudlu Gate, GB Palya, Bengaluru, Karnataka
                560068
              </p>
            </div>
            <p className="text-sm text-gray-500 font-medium">
              &copy; {new Date().getFullYear()} BSkilling. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration for additional style */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 h-6 relative overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-full h-24 absolute top-0"
          style={{ transform: 'rotate(180deg) translateY(5px)' }}
        >
          <path
            fill="#ffffff"
            d="M0,256L48,240C96,224,192,192,288,192C384,192,480,224,576,229.3C672,235,768,213,864,192C960,171,1056,149,1152,165.3C1248,181,1344,235,1392,261.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
