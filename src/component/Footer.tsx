/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import PopupForm from './PopupForm';
import GoogleReviews from '@/components/pages/GoogleReviews';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const Footer = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const handleOpenPopup = () => setPopupOpen(true);
  const handleClosePopup = () => setPopupOpen(false);

  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {/* Reviews */}
        <div className="-mt-4">
          <Link href={'/'}>
            <img
              src="/logo.png"
              className="object-contain md:w-[130px] md:h-[50px] w-[120] h-[30px]"
              alt="Logo"
            />
          </Link>
          <div className="mt-5">
            <p className="text-sm text-white leading-relaxed">
              B-Block 4th Floor, COMMERCIAL BUILDING, UMA SREE DREAM WORLD, Unit
              -2, Hosur Rd, Kudlu Gate, GB Palya, Bengaluru, Karnataka 560068
            </p>
          </div>
          <GoogleReviews />
        </div>

        <div>
          <h5 className="text-lg font-semibold mb-3">Company</h5>
          <ul className="space-y-2 text-sm">
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
                  className="hover:text-yellow-400"
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://sfjbs.talentrecruit.com/career-page"
                target="_blank"
                className="hover:text-yellow-400"
              >
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Collaborate */}
        <div>
          <h5 className="text-lg font-semibold mb-3">Collaborate</h5>
          <ul className="space-y-2 text-sm">
            <li
              onClick={handleOpenPopup}
              className="hover:cursor-pointer hover:text-yellow-400"
            >
              Become an Instructor
            </li>
            {isPopupOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <PopupForm handleClosePopup={handleClosePopup} title="" />
              </div>
            )}
            {['Corporate Training', 'Government Programs', 'Institutions'].map(
              (item, idx) => (
                <li key={idx}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-yellow-400"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h5 className="text-lg font-semibold mb-3">Programs</h5>
          <ul className="space-y-2 text-sm">
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
                  className="hover:text-yellow-400"
                >
                  {program.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h5 className="text-lg font-semibold mb-3">Support</h5>
          <ul className="space-y-2 text-sm">
            <li>
              Email:{' '}
              <a
                href="mailto:support@bskilling.com"
                className="text-yellow-400"
              >
                support@bskilling.com
              </a>
            </li>
            <li>
              Phone:{' '}
              <a href="tel:+919845348601" className="text-yellow-400">
                +91-98453 48601
              </a>
            </li>
            <li>
              Grievance Officer:{' '}
              <a
                href="mailto:grievanceofficer@bskilling.com"
                className="text-yellow-400"
              >
                grievanceofficer@bskilling.com
              </a>
            </li>
            <li>
              Support:{' '}
              <a href="tel:+918951923627" className="text-yellow-400">
                +91 89519 23627
              </a>
            </li>
          </ul>
        </div>
        {/* Phones */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h5 className="text-xl font-semibold mb-4 text-white text-right">
            MOBILE APPS
          </h5>
          <div className="flex flex-col gap-3 justify-end items-end">
            <Link
              href="https://apps.apple.com/eg/app/bskilling/id6445943298"
              target="_blank"
              className="w-fit flex items-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold hover:opacity-90 transition"
            >
              <FaApple className="text-xl" /> App Store
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.melimu.app.bskilling&hl=en_IN&gl=US"
              target="_blank"
              className="w-fit flex items-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold hover:opacity-90 transition"
            >
              <FaGooglePlay className="text-xl" /> Google Play
            </Link>
          </div>
        </div>
      </div>

      <p className="text-center md:text-center mb-4 md:mb-0">
        &copy; {new Date().getFullYear()} BSkilling. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
