import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/compat/router';
import { motion, AnimatePresence } from 'framer-motion';
import PopupForm from '@/component/PopupForm';
import Courses from '@/component/courses';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

// Lucide Icons - replacing multiple icon libraries with just Lucide for consistency
import {
  Menu,
  X,
  Search,
  ChevronDown,
  Phone,
  Mail,
  LogOut,
  UserPlus,
  User,
  School,
  Building,
  Landmark,
} from 'lucide-react';

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
  }, [router?.pathname]);

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
      href: '/courses',
      icon: <School className="w-5 h-5" />,
    },
    {
      name: 'Corporate',
      href: '/corporate-training',
      icon: <Building className="w-5 h-5" />,
    },
    {
      name: 'Government',
      href: '/government-training-program',
      icon: <Landmark className="w-5 h-5" />,
    },
    {
      name: 'Institutions',
      href: '/institutions',
      icon: <School className="w-5 h-5 transform rotate-12" />,
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
  if (!router?.isReady) return null;
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
          {/* Mobile Top Bar - Logo and Search */}
          <div className="lg:hidden flex items-center justify-between py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative w-[110px] h-[35px] sm:w-[120px] sm:h-[40px] flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="bSkilling Logo"
                  className="object-contain w-full h-full"
                />
              </div>
            </Link>

            {/* Mobile Search */}
            <div className="flex items-center">
              <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                <SheetTrigger className="relative p-2 mr-2 text-gray-700 hover:text-indigo-600 transition bg-gray-100 rounded-full">
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                  </span>
                </SheetTrigger>
                <SheetContent side={'top'} className="h-screen overflow-y-auto">
                  <SheetHeader>
                    <div className="flex flex-col space-y-4 w-full pt-4">
                      <div className="relative w-full">
                        <input
                          type="text"
                          className="w-full text-[14px] h-12 border rounded-full bg-gray-50 px-5 pl-10 outline-none focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                          placeholder="Search for courses or skills"
                          required
                          value={inputValue}
                          onChange={e => {
                            handleSearch(e);
                            setShow(true);
                          }}
                        />
                        <Search className="absolute top-4 left-3 text-indigo-600 h-5 w-5" />
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
                                  router?.push(`/courses/course-details/${course.url}`);
                                  setSheetOpen(false);
                                }}
                                className="p-3 hover:bg-gray-50 text-gray-800 hover:text-indigo-600 cursor-pointer transition flex items-center"
                              >
                                <School className="h-4 w-4 mr-2 text-indigo-500" />
                                {course.title}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-500 italic text-base">
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

              {/* Mobile Menu Toggle */}
              <button
                className="p-2 text-gray-700 hover:text-indigo-600 transition bg-gray-100 rounded-full"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Bottom Bar */}
          <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-gray-200">
            <div className="grid grid-cols-4 py-2">
              {mainMenuItems.slice(0, 4).map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex flex-col items-center justify-center py-1 ${
                    router?.pathname === item.href ? 'text-indigo-600' : 'text-gray-600'
                  }`}
                >
                  <div
                    className={`p-1 rounded-full ${
                      router?.pathname === item.href ? 'bg-indigo-100' : ''
                    }`}
                  >
                    {item.icon}
                  </div>
                  <span className="text-xs mt-1">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative w-[150px] h-[45px] flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="bSkilling Logo"
                  className="object-contain w-full h-full"
                />
              </div>
            </Link>

            {/* Courses component - desktop */}
            <div className="z-50 flex-shrink-0 ml-5 mr-5">
              <Courses />
            </div>

            <div className="flex items-center lg:space-x-3 xl:space-x-5 flex-grow justify-end">
              {/* Search Bar */}
              <SearchSheetComponent />

              {/* Main menu items */}
              <nav className="flex items-center space-x-3 xl:space-x-5 flex-shrink-0">
                {mainMenuItems.map(item => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center text-gray-700 hover:text-indigo-600 font-medium transition whitespace-nowrap text-sm xl:text-base ${
                      router?.pathname === item.href ? 'text-indigo-600' : ''
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
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transform transition-transform ${activeDropdown === 'more' ? 'rotate-180' : ''}`}
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

              {/* User Profile or Auth Buttons */}
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
                            <User size={18} />
                            <span>Dashboard</span>
                          </Link>

                          <Link
                            href="/my-courses"
                            className="flex items-center gap-x-2 p-2 rounded-md hover:bg-gray-100 transition w-full"
                          >
                            <School size={18} />
                            <span>My Courses</span>
                          </Link>

                          <button
                            // onClick={handleLogout}
                            className="flex items-center gap-x-2 p-2 rounded-md hover:bg-gray-100 transition w-full text-left text-red-500"
                          >
                            <LogOut size={18} />
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
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden bg-white border-t shadow-lg fixed left-0 right-0 top-[51px] sm:top-[53px] z-30 overflow-y-auto max-h-[calc(100vh-160px)]"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                {/* Mobile Menu Items */}
                <nav className="flex flex-col space-y-1">
                  <div className="mb-2">
                    <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-1 px-1">
                      Main Menu
                    </h3>
                    {mainMenuItems.map(item => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`flex items-center px-3 py-2.5 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition ${
                          router?.pathname === item.href ? 'bg-indigo-50 text-indigo-600' : ''
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="rounded-md bg-indigo-100 p-1.5 mr-3">{item.icon}</div>
                        <span className="text-sm font-medium">{item.name}</span>
                      </Link>
                    ))}
                  </div>

                  <div className="mb-2 pt-2 border-t border-gray-100">
                    <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-1 px-1">
                      Explore
                    </h3>
                    {secondaryMenuItems.map(item => (
                      <Link
                        key={item.name}
                        href={item.href}
                        target={item.external ? '_blank' : '_self'}
                        className="flex items-center px-3 py-2.5 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="text-sm font-medium ml-8">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </nav>

                {/* Mobile Auth Section */}
                {!user && (
                  <div className="flex flex-col space-y-2 pt-2 border-t border-gray-100">
                    <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-1 px-1">
                      Account
                    </h3>
                    <div className="flex items-center space-x-3">
                      <Link
                        href="https://lms.bskilling.com/login/signup.php"
                        className="flex-1 px-4 py-2.5 border border-indigo-600 text-center text-indigo-600 rounded-lg hover:bg-indigo-50 transition font-medium text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="flex items-center justify-center">
                          <UserPlus className="h-4 w-4 mr-2" />
                          Sign Up
                        </span>
                      </Link>
                      <Link
                        href="https://lms.bskilling.com/login/index.php"
                        className="flex-1 px-4 py-2.5 bg-indigo-600 text-center text-white rounded-lg hover:bg-indigo-700 transition font-medium text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="flex items-center justify-center">
                          <LogOut className="h-4 w-4 mr-2" />
                          Login
                        </span>
                      </Link>
                    </div>
                  </div>
                )}

                {/* Mobile Contact Info */}
                <div className="flex flex-col space-y-3 pt-3 border-t border-gray-100">
                  <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-1 px-1">
                    Contact
                  </h3>
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-4 w-4 mr-3 text-indigo-500" />
                    <span className="text-sm">+91-9845348601</span>
                  </div>
                  <Link
                    href="mailto:support@bskilling.com"
                    className="flex items-center text-gray-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Mail className="h-4 w-4 mr-3 text-indigo-500" />
                    <span className="text-sm">support@bskilling.com</span>
                  </Link>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      handleOpenPopup();
                    }}
                    className="mt-2 inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-600 rounded-lg font-medium text-sm hover:bg-indigo-200 transition"
                    type="button"
                  >
                    <UserPlus className="h-4 w-4 mr-2" />
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
          animation: scroll-rtl 45s linear infinite;
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
