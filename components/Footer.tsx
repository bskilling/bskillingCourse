/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import PopupForm from './PopupForm';

const Footer = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const handleOpenPopup = () => setPopupOpen(true);
  const handleClosePopup = () => setPopupOpen(false);
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* CONTACT */}

          <div>
            <h5 className="text-xl font-semibold mb-4">COMPANY</h5>
            <ul className="text-sm space-y-2">
              {['About Us', 'Blogs'].map((item, idx) => (
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
                  href={'https://sfjbs.talentrecruit.com/career-page'}
                  className="hover:text-yellow-400"
                  target="_blank"
                >
                  Careers
                </a>
              </li>

              <li>
                <Link href={'/reviews'} className="hover:text-yellow-400">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href={'/Termsofuse'} className="hover:text-yellow-400">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href={'/privacy'} className="hover:text-yellow-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href={'/Refundpolicy'} className="hover:text-yellow-400">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-xl font-semibold mb-4 capitalize">
              Collabrate with us
            </h5>
            <ul className="text-sm space-y-2">
              <li
                key={'careers'}
                onClick={handleOpenPopup}
                className="hover:cursor-pointer hover:text-yellow-400"
              >
                Become a instructor
              </li>
              {isPopupOpen && (
                <>
                  <div
                    className="fixed inset-0 bg-white opacity-50 z-40"
                    onClick={handleClosePopup}
                  ></div>

                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <PopupForm handleClosePopup={handleClosePopup} title="" />
                  </div>
                </>
              )}
              <li>
                {' '}
                <Link
                  href={'/corporate-training'}
                  className="hover:text-yellow-400"
                >
                  Corporate Training
                </Link>
              </li>

              <li>
                <Link
                  href={'/government-training-program'}
                  className="hover:text-yellow-400"
                >
                  Government Porgrams
                </Link>
              </li>
              <li>
                <Link href={'/institutions'} className="hover:text-yellow-400">
                  Institutions
                </Link>
              </li>
            </ul>
          </div>
          {/* <div>
            <h5 className="text-xl font-semibold mb-4">CONTACT</h5>
            <p className="text-sm text-gray-300 leading-relaxed">
              B-Block 4th Floor, COMMERCIAL BUILDING, UMA SREE DREAM WORLD, Unit
              -2, Hosur Rd, Kudlu Gate, Industrial Layout, Garvebhavi Palya,
              Bengaluru, Karnataka 560068
            </p>
          </div> */}

          {/* COMPANY */}

          {/* PROGRAMS */}
          <div>
            <h5 className="text-xl font-semibold mb-4">PROGRAMS</h5>
            <ul className="text-sm space-y-2">
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

          {/* SUPPORT */}
          <div>
            <h5 className="text-xl font-semibold mb-4">SUPPORT</h5>
            <ul className="text-sm space-y-2 text-gray-300">
              <li>
                Email:
                <a
                  href="mailto:support@bskilling.com"
                  className="text-blue-400 "
                >
                  {' '}
                  support@bskilling.com
                </a>
              </li>
              <li>
                Phone:
                <a href="tel:+919845348601" className="text-blue-400 ">
                  {' '}
                  +91-98453 48601
                </a>
              </li>
              <li>
                Grievance Officer:
                <a
                  href="mailto:grievanceofficer@bskilling.com"
                  className="text-blue-400"
                >
                  {' '}
                  grievanceofficer@bskilling.com
                </a>
              </li>
              <li>
                Support:
                <a href="tel:+918951923627" className="text-blue-400">
                  {' '}
                  +91 89519 23627
                </a>
              </li>
            </ul>
          </div>

          {/* MOBILE APP */}
          <div>
            <h5 className="text-xl font-semibold mb-4">MOBILE</h5>
            <div className="flex flex-col gap-4">
              {[
                {
                  name: 'App Store',
                  link: 'https://apps.apple.com/eg/app/bskilling/id6445943298',
                },
                {
                  name: 'Google Play',
                  link: 'https://play.google.com/store/apps/details?id=com.melimu.app.bskilling&hl=en_IN&gl=US',
                },
              ].map((app, idx) => (
                <Link
                  key={idx}
                  href={app.link}
                  target="_blank"
                  className="bg-gray-800 hover:bg-yellow-400 text-white hover:text-black py-3 rounded-lg flex justify-center"
                >
                  {app.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="border-t border-gray-700 mt-10 pt-6">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex space-x-4 mt-4 md:mt-0">
              {[
                {
                  name: 'Instagram',
                  icon: '/icon/insta.svg',
                  link: 'https://www.instagram.com/bskillingindia/',
                },
                {
                  name: 'Facebook',
                  icon: '/icon/facebook.svg',
                  link: 'https://www.facebook.com/bskillingindia/',
                },
                {
                  name: 'LinkedIn',
                  icon: '/icon/link.svg',
                  link: 'https://www.linkedin.com/company/bskillingindia/',
                },
                {
                  name: 'Twitter',
                  icon: '/twitter.webp',
                  link: 'https://twitter.com/b_SkillingIndia',
                },
                {
                  name: 'Pinterest',
                  icon: '/icon/pin.svg',
                  link: 'https://www.pinterest.com/bskillingdigital/',
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={social.icon}
                    className="w-6 hover:opacity-80"
                    alt={social.name}
                  />
                </a>
              ))}
            </div>
            {/* <img src="/logo.png" className="w-24" alt="bskilling" />
            <div className="flex space-x-4 border-l border-gray-700 pl-4">
              {['Home', 'Privacy', 'Terms', 'Refund'].map((item, idx) => (
                <Link
                  key={idx}
                  href={`/${item.toLowerCase()}`}
                  className="hover:text-yellow-400"
                >
                  {item}
                </Link>
              ))}
            </div> */}
          </div>

          {/* SOCIAL ICONS */}
        </div>

        <p className="text-center text-gray-400 mt-6">
          ©️ BSKILLING PRIVATE LIMITED. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
