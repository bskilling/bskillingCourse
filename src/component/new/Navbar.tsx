import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import PopupForm from '@/component/PopupForm';
import Courses from '@/component/courses';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

// Icons
import { RiGovernmentFill } from 'react-icons/ri';
import { IoMdCall, IoIosArrowDown } from 'react-icons/io';
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';
import { BsBuilding } from 'react-icons/bs';
import { FaUniversity } from 'react-icons/fa';
import { BiSearchAlt } from 'react-icons/bi';
import {
  IoLogOutOutline,
  IoPersonAddOutline,
  IoPersonOutline,
  IoSchool,
  IoSchoolOutline,
} from 'react-icons/io5';

// Import UI components
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet';
import SearchSheetComponent from './SearchSheet';
import { usePaymentStore } from '@/lib/zustand/phone.store';

// Type definitions
interface SearchResult {
  title: string;
  url: string;
}

interface MenuItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

interface SecondaryMenuItem {
  name: string;
  href: string;
  external?: boolean;
}

const NavbarSection: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [sheetOpen, setSheetOpen] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [dropSearchData, setDropSearchData] = useState<SearchResult[]>([]);
  const { user, reset } = usePaymentStore();

  const router = useRouter();

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSheetOpen(false);
  }, [router.pathname]);

  const handleOpenPopup = (): void => setPopupOpen(true);
  const handleClosePopup = (): void => setPopupOpen(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setInputValue(value);

    // Mock search functionality
    if (value.length > 2) {
      const mockSearchResults: SearchResult[] = [
        { title: 'Web Development', url: 'web-development' },
        { title: 'Data Science', url: 'data-science' },
        { title: 'UI/UX Design', url: 'ui-ux-design' },
        { title: 'Machine Learning', url: 'machine-learning' },
        { title: 'Cloud Computing', url: 'cloud-computing' },
      ].filter(item => item.title.toLowerCase().includes(value.toLowerCase()));

      setDropSearchData(mockSearchResults);
    } else {
      setDropSearchData([]);
    }
  };

  const mainMenuItems: MenuItem[] = [
    {
      name: 'All Courses',
      href: '/individual-training',
      icon: <IoSchool className="w-5 h-5" />,
    },
    {
      name: 'Corporate',
      href: '/corporate-training',
      icon: <BsBuilding className="w-5 h-5" />,
    },
    {
      name: 'Government',
      href: '/government-training-program',
      icon: <RiGovernmentFill className="w-5 h-5" />,
    },
    {
      name: 'Institutions',
      href: '/institutions',
      icon: <FaUniversity className="w-5 h-5" />,
    },
  ];

  const secondaryMenuItems: SecondaryMenuItem[] = [
    { name: 'Career', href: 'https://sfjbs.talentrecruit.com/career-page', external: true },
    { name: 'Review', href: '/reviews' },
    { name: 'About Us', href: '/aboutus' },
    { name: 'Blogs', href: '/blogs' },
  ];

  // Function to close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (activeDropdown && !target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  return (
    <>
      {/* Announcement Banner - Responsive for all devices */}
      <div className="overflow-hidden relative bg-gradient-to-r from-blue-900 via-blue-900 to-blue-900">
        {/* Extra glossy shine effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-purple-500/10 to-transparent"></div>

        {/* Animated glossy light streak */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="light-streak"></div>
        </div>

        {/* Content with enhanced typography and effects */}
        <div className="relative z-20 py-2 md:py-3">
          {/* Desktop version with full animation */}
          <div className="hidden md:block">
            <div className="animate-scroll-rtl flex whitespace-nowrap">
              {Array(3)
                .fill(
                  'LIMITED TIME: All Courses 20% OFF! Elevate Your Skills Today — Enroll Now Before Offer Ends!'
                )
                .map((text, index) => (
                  <span
                    key={index}
                    className="mx-4 lg:mx-8 text-xs sm:text-sm font-bold tracking-wide text-gray-100 drop-shadow-lg flex items-center"
                  >
                    <span className="text-lg lg:text-xl mr-2 lg:mr-3">👉</span>
                    <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mx-1">
                      LIMITED TIME:
                    </span>{' '}
                    <span className="mx-1">All Courses</span>{' '}
                    <span className="text-amber-400 font-black text-sm lg:text-base relative inline-block animate-pulse-subtle mx-1.5">
                      20% OFF!
                    </span>{' '}
                    <span className="mx-1 hidden sm:inline">Elevate Your Skills Today</span>{' '}
                    <span className="mx-1 hidden sm:inline">—</span>{' '}
                    <span className="border-b-2 border-cyan-400 pb-0.5 hover:border-amber-400 transition-colors mx-1">
                      Enroll Now
                    </span>{' '}
                    <span className="mx-1 hidden sm:inline">Before Offer Ends!</span>
                    <span className="text-lg lg:text-xl mr-2 lg:mr-3">🎉</span>
                  </span>
                ))}
            </div>
          </div>

          {/* Mobile version with simplified content */}
          <div className="block md:hidden">
            <div className="text-center px-3 py-1">
              <span className="text-xs font-bold tracking-wide text-gray-100 drop-shadow-lg flex items-center justify-center flex-wrap">
                <span className="text-lg mr-1">🎓</span>
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  LIMITED TIME:
                </span>{' '}
                <span className="text-amber-400 font-black animate-pulse-subtle mx-1">
                  20% OFF!
                </span>{' '}
                <span className="border-b-2 border-cyan-400 pb-0.5 mx-1 whitespace-nowrap">
                  Enroll Now
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-white'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between py-3 lg:py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative w-[110px] h-[35px] sm:w-[120px] sm:h-[40px] lg:w-[150px] lg:h-[45px] flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="bSkilling Logo"
                  className="object-contain w-full h-full"
                />
              </div>
            </Link>

            {/* Courses component - both mobile and desktop */}
            <div className="z-50 flex-shrink-0 ml-1 sm:ml-2 lg:ml-5 mr-1 sm:mr-3 lg:mx-5">
              <Courses />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center lg:space-x-3 xl:space-x-5 flex-grow justify-end">
              {/* Search Bar */}
              <SearchSheetComponent />

              {/* Main menu items */}
              <nav className="flex items-center space-x-3 xl:space-x-5 flex-shrink-0">
                {mainMenuItems.map(item => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center text-gray-700 hover:text-indigo-600 font-medium transition whitespace-nowrap text-sm xl:text-base ${
                      router.pathname === item.href ? 'text-indigo-600' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* More dropdown */}
                <div className="relative flex-shrink-0 dropdown-container">
                  <button
                    className="flex items-center text-gray-700 hover:text-indigo-600 font-medium transition whitespace-nowrap text-sm xl:text-base"
                    onClick={() => setActiveDropdown(activeDropdown === 'more' ? null : 'more')}
                    type="button"
                  >
                    More
                    <IoIosArrowDown
                      className={`ml-1 transform transition-transform ${activeDropdown === 'more' ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Dropdown menu */}
                  <AnimatePresence>
                    {activeDropdown === 'more' && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-20"
                      >
                        {secondaryMenuItems.map(item => (
                          <Link
                            key={item.name}
                            href={item.href}
                            target={item.external ? '_blank' : '_self'}
                            className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </nav>

              {user ? (
                <div>
                  <Popover>
                    <PopoverTrigger className="flex items-center gap-x-2">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500 hover:border-blue-600 transition-all">
                        <img
                          src={`https://avatars.dicebear.com/api/initials/${encodeURIComponent(user.name)}.svg`}
                          alt={user.name || 'User'}
                          className="object-cover"
                        />
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-56">
                      <div className="space-y-4">
                        <div className="flex flex-col items-center pb-4 border-b">
                          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500 mb-2">
                            <img
                              src={`https://avatars.dicebear.com/api/initials/${encodeURIComponent(user.name)}.svg`}
                              alt={user.name || 'User'}
                              className="object-cover"
                            />
                          </div>
                          <h3 className="font-medium">{user.name}</h3>
                          <p className="text-sm text-gray-500 truncate max-w-full">{user.email}</p>
                        </div>

                        <div className="space-y-2">
                          <Link
                            href="/dashboard"
                            className="flex items-center gap-x-2 p-2 rounded-md hover:bg-gray-100 transition w-full"
                          >
                            <IoPersonOutline size={18} />
                            <span>Dashboard</span>
                          </Link>

                          <Link
                            href="/my-courses"
                            className="flex items-center gap-x-2 p-2 rounded-md hover:bg-gray-100 transition w-full"
                          >
                            <IoSchoolOutline size={18} />
                            <span>My Courses</span>
                          </Link>

                          <button
                            // onClick={handleLogout}
                            className="flex items-center gap-x-2 p-2 rounded-md hover:bg-gray-100 transition w-full text-left text-red-500"
                          >
                            <IoLogOutOutline size={18} />
                            <span>Sign Out</span>
                          </button>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              ) : (
                <div className="flex items-center space-x-3 flex-shrink-0">
                  <Link
                    href="https://lms.bskilling.com/login/signup.php"
                    className="px-3 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition font-medium text-sm whitespace-nowrap"
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="https://lms.bskilling.com/login/index.php"
                    className="px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition font-medium text-sm whitespace-nowrap"
                  >
                    Login
                  </Link>
                </div>
              )}
              {/* Auth buttons */}
            </div>

            {/* Mobile Search & Menu Button */}
            <div className="lg:hidden flex items-center space-x-2 sm:space-x-3">
              <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                <SheetTrigger className="p-1.5 sm:p-2 text-gray-700 hover:text-indigo-600 transition">
                  <FiSearch className="h-5 w-5" />
                </SheetTrigger>
                <SheetContent side={'top'} className="h-screen overflow-y-auto">
                  <SheetHeader>
                    <div className="flex flex-col space-y-4 w-full pt-4">
                      <div className="relative w-full">
                        <input
                          type="text"
                          className="w-full text-[14px] h-10 sm:h-12 border rounded-full bg-gray-50 px-5 pl-10 outline-none focus:outline-none focus:ring-1 focus:ring-indigo-300 transition"
                          placeholder="Search for courses or skills"
                          required
                          value={inputValue}
                          onChange={e => {
                            handleSearch(e);
                            setShow(true);
                          }}
                        />
                        <BiSearchAlt className="absolute top-3 sm:top-4 left-3 text-indigo-600" />
                      </div>

                      <div className="mt-4 sm:mt-6">
                        <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">
                          Popular Categories
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {[
                            'Web Development',
                            'Data Science',
                            'UI/UX Design',
                            'Machine Learning',
                            'Cloud Computing',
                          ].map((cat, idx) => (
                            <button
                              key={idx}
                              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 rounded-full text-xs sm:text-sm hover:bg-indigo-100 transition"
                            >
                              {cat}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 sm:mt-6">
                        <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">
                          Search Results
                        </h3>
                        {dropSearchData.length > 0 ? (
                          <div className="divide-y">
                            {dropSearchData.map((course, index) => (
                              <div
                                key={index}
                                onClick={() => {
                                  router.push(`/courses/course-details/${course.url}`);
                                  setSheetOpen(false);
                                }}
                                className="p-2.5 sm:p-3 hover:bg-gray-50 text-gray-800 hover:text-indigo-600 cursor-pointer transition"
                              >
                                {course.title}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-500 italic text-sm sm:text-base">
                            {inputValue.length > 2
                              ? 'No courses found. Try a different search term.'
                              : 'Type at least 3 characters to search'}
                          </p>
                        )}
                      </div>
                    </div>
                  </SheetHeader>
                </SheetContent>
              </Sheet>

              <button
                className="p-1.5 sm:p-2 text-gray-700 hover:text-indigo-600 transition"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t shadow-md"
            >
              <div className="container mx-auto px-4 py-3 sm:py-4 space-y-3 sm:space-y-4">
                {/* Mobile Main Menu Items */}
                <nav className="flex flex-col space-y-2 sm:space-y-3">
                  {mainMenuItems.map(item => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition ${
                        router.pathname === item.href ? 'bg-indigo-50 text-indigo-600' : ''
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.icon}
                      <span className="ml-3 text-sm sm:text-base">{item.name}</span>
                    </Link>
                  ))}

                  {/* Mobile Secondary Menu Items */}
                  {secondaryMenuItems.map(item => (
                    <Link
                      key={item.name}
                      href={item.href}
                      target={item.external ? '_blank' : '_self'}
                      className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="ml-8 text-sm sm:text-base">{item.name}</span>
                    </Link>
                  ))}
                </nav>

                {/* Mobile Auth Buttons */}
                <div className="flex flex-col space-y-2 pt-2 border-t">
                  <Link
                    href="https://lms.bskilling.com/login/signup.php"
                    className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition text-center font-medium text-sm sm:text-base"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="https://lms.bskilling.com/login/index.php"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition text-center font-medium text-sm sm:text-base"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                </div>

                {/* Mobile Contact Info */}
                <div className="flex flex-col space-y-2 pt-3 border-t text-xs sm:text-sm text-gray-600">
                  <div className="flex items-center">
                    <IoMdCall className="mr-2" />
                    +91-9845348601
                  </div>
                  <Link
                    href="mailto:support@bskilling.com"
                    className="flex items-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="mr-2">📧</span>
                    support@bskilling.com
                  </Link>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      handleOpenPopup();
                    }}
                    className="text-indigo-600 font-medium"
                    type="button"
                  >
                    Become an Instructor
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Instructor Popup Form */}
      {isPopupOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={handleClosePopup}
          ></div>
          <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
            <PopupForm handleClosePopup={handleClosePopup} title="Become an Instructor" />
          </div>
        </>
      )}

      {/* Enhanced animations */}
      <style jsx global>{`
        @keyframes scroll-rtl {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll-rtl {
          animation: scroll-rtl 25s linear infinite;
        }

        @keyframes pulse-subtle {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.05);
          }
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }

        /* Animated light streak */
        @keyframes light-sweep {
          0% {
            transform: translateX(-100%) rotate(45deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateX(300%) rotate(45deg);
            opacity: 0;
          }
        }

        .light-streak {
          position: absolute;
          top: -100%;
          left: -100%;
          width: 150%;
          height: 300%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transform: rotate(45deg);
          animation: light-sweep 7s linear infinite;
        }
      `}</style>
    </>
  );
};

export default NavbarSection;
