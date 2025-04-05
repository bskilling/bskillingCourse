import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import PopupForm from '@/component/PopupForm';
import Courses from '@/component/courses';

// Icons
import { RiGovernmentFill } from 'react-icons/ri';
import { IoMdCall, IoIosArrowDown } from 'react-icons/io';
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';
import { BsBuilding } from 'react-icons/bs';
import { FaUniversity } from 'react-icons/fa';
import { BiSearchAlt } from 'react-icons/bi';
import { IoSchool } from 'react-icons/io5';

// Import UI components
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet';
import SearchSheetComponent from './SearchSheet';

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

  return (
    <>
      {/* Top info bar - Only visible on larger screens */}
      <div className="hidden lg:block bg-indigo-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-sm">
              <IoMdCall className="mr-2" />
              +91-9845348601
            </span>
            <Link
              href="mailto:support@bskilling.com"
              className="flex items-center text-sm hover:text-indigo-200 transition"
            >
              <span className="mr-2">📧</span>
              support@bskilling.com
            </Link>
          </div>
          <button onClick={handleOpenPopup} className="text-sm hover:text-indigo-200 transition">
            Become an Instructor
          </button>
        </div>
      </div>

      {/* Main navbar */}
      <div
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-white'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative w-[120px] h-[40px] lg:w-[150px] lg:h-[45px] flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="bSkilling Logo"
                  className="object-contain w-full h-full"
                />
              </div>
            </Link>
            <div className="z-50 flex-shrink-0 mx-5">
              <Courses />
            </div>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center lg:space-x-3 xl:space-x-5 flex-grow justify-end mx-5">
              {/* Search Bar */}
              <SearchSheetComponent />

              {/* Courses Component */}

              {/* Main menu items */}
              <nav className="flex items-center space-x-4 xl:space-x-5 flex-shrink-0">
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
                <div className="relative flex-shrink-0">
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
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {secondaryMenuItems.map(item => (
                          <Link
                            key={item.name}
                            href={item.href}
                            target={item.external ? '_blank' : '_self'}
                            className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </nav>

              {/* Auth buttons */}
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
            </div>

            {/* Mobile Search & Menu Button */}
            <div className="lg:hidden flex items-center space-x-3">
              <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                <SheetTrigger className="p-2 text-gray-700 hover:text-indigo-600 transition">
                  <FiSearch className="h-5 w-5" />
                </SheetTrigger>
                <SheetContent side={'top'} className="h-screen overflow-y-auto">
                  <SheetHeader>
                    <div className="flex flex-col space-y-4 w-full pt-4">
                      <div className="relative w-full">
                        <input
                          type="text"
                          className="w-full text-[14px] h-12 border rounded-full bg-gray-50 px-5 pl-10 outline-none focus:outline-none focus:ring-1 focus:ring-indigo-300 transition"
                          placeholder="Search for courses or skills"
                          required
                          value={inputValue}
                          onChange={e => {
                            handleSearch(e);
                            setShow(true);
                          }}
                        />
                        <BiSearchAlt className="absolute top-4 left-3 text-indigo-600" />
                      </div>

                      <div className="mt-6">
                        <h3 className="text-lg font-medium mb-4">Popular Categories</h3>
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
                              className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-indigo-100 transition"
                            >
                              {cat}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6">
                        <h3 className="text-lg font-medium mb-4">Search Results</h3>
                        {dropSearchData.length > 0 ? (
                          <div className="divide-y">
                            {dropSearchData.map((course, index) => (
                              <div
                                key={index}
                                onClick={() => {
                                  router.push(`/courses/course-details/${course.url}`);
                                  setSheetOpen(false);
                                }}
                                className="p-3 hover:bg-gray-50 text-gray-800 hover:text-indigo-600 cursor-pointer transition"
                              >
                                {course.title}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-500 italic">
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

              {/* Mobile Courses Component */}
              <div className="z-50 px-1">
                <Courses />
              </div>

              <button
                className="text-gray-700 hover:text-indigo-600 transition"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
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
              className="lg:hidden bg-white border-t"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                {/* Mobile Main Menu Items */}
                <nav className="flex flex-col space-y-3">
                  {mainMenuItems.map(item => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition ${
                        router.pathname === item.href ? 'bg-indigo-50 text-indigo-600' : ''
                      }`}
                    >
                      {item.icon}
                      <span className="ml-3">{item.name}</span>
                    </Link>
                  ))}

                  {/* Mobile Secondary Menu Items */}
                  {secondaryMenuItems.map(item => (
                    <Link
                      key={item.name}
                      href={item.href}
                      target={item.external ? '_blank' : '_self'}
                      className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
                    >
                      <span className="ml-8">{item.name}</span>
                    </Link>
                  ))}
                </nav>

                {/* Mobile Auth Buttons */}
                <div className="flex flex-col space-y-2 pt-2 border-t">
                  <Link
                    href="https://lms.bskilling.com/login/signup.php"
                    className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition text-center font-medium"
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="https://lms.bskilling.com/login/index.php"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition text-center font-medium"
                  >
                    Login
                  </Link>
                </div>

                {/* Mobile Contact Info */}
                <div className="lg:hidden flex flex-col space-y-2 pt-3 border-t text-sm text-gray-600">
                  <div className="flex items-center">
                    <IoMdCall className="mr-2" />
                    +91-9845348601
                  </div>
                  <Link href="mailto:support@bskilling.com" className="flex items-center">
                    <span className="mr-2">📧</span>
                    support@bskilling.com
                  </Link>
                  <button
                    onClick={handleOpenPopup}
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
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <PopupForm handleClosePopup={handleClosePopup} title="Become an Instructor" />
          </div>
        </>
      )}
    </>
  );
};

export default NavbarSection;
