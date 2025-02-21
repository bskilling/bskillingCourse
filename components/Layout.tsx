/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Script from 'next/script';
import {
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { BiMenu, BiSearchAlt } from 'react-icons/bi';
import { SlArrowDown } from 'react-icons/sl';
import { MyContext } from 'context/PageContext';
import courseSearchData from 'data/courseSearchData';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import Footer from './Footer';
import LandingFooter from './LandingFooter';
import { Course } from 'common/util/types';
import PopupForm from './PopupForm';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
import NavbarSection from './navbar/NavbarSection';
import Courses from './courses';
import NavSection from './navbar/NavSection';
import { usePathname } from 'next/navigation';
import Categories from './navbar/Categories';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Cats from './navbar/Cats';

// import Footer from "./Footer";

type Props = {
  children: ReactNode;
  pageTitle?: string;
};
const Layout = ({ children, pageTitle = 'bSkilling' }: Props) => {
  const route = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: any) => {
    console.log(`Selected: ${option}`);
    setIsOpen(false);
  };
  const { inputValue, setInputValue, setFetchSearchData } =
    useContext(MyContext);
  const [aboutUnderline, setAboutUnderline] = useState(false);
  const [blogUnderline, setBlogUnderline] = useState(false);
  const [navHide, setNavHide] = useState(false);
  const [dropSearchData, setDropSearchData] = useState<Course[]>([]);
  const [SearchElementsData, setSearchElementsData] = useState<Course[]>([]);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [categories, setCategories] = useState<Course[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [isCategoryHovered, setIsCategoryHovered] = useState<boolean>(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOtherMenuOpen, setisOtherMenuOpen] = useState(false);
  const pathName = usePathname();
  const [sheetOpen, setSheetOpen] = useState(false);

  const handleOpenPopup = () => setPopupOpen(true);
  const handleClosePopup = () => setPopupOpen(false);

  const homePage = route.pathname === '/';

  useEffect(() => {
    console.log('pathName', pathName);
    setSheetOpen(false);
  }, [pathName]);

  const fetchApiData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_TRAINING_BASE_URL}api/v1/get-course-title`
      );

      const jsonData = response.data;
      console.log('res', jsonData);
      const ListOfCoursesData = Object.values(jsonData.courses);
      console.log('res', ListOfCoursesData);
      const flattenedData = ListOfCoursesData.flatMap(
        (innerArray) => innerArray
      );

      setSearchElementsData(flattenedData as Course[]);
    } catch (error) {
      console.error('Error fetching API:', error);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  useEffect(() => {
    if (route.pathname === '/about') {
      setNavHide(true);
      setAboutUnderline(true);
      setBlogUnderline(false);
    } else if (route.pathname === '/PaymentStatus') {
      setNavHide(false);
    } else if (route.pathname === '/blogs') {
      setBlogUnderline(true);
      setAboutUnderline(false);
    } else {
      setNavHide(true);
      setAboutUnderline(false);
      setBlogUnderline(false);
    }
  }, [route.pathname]);

  useEffect(() => {
    setFetchSearchData(courseSearchData);
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    if (value === '') {
      setDropSearchData([]);
    } else {
      const filteredData = SearchElementsData.filter((course) =>
        course.title.toLowerCase().includes(value.toLowerCase())
      );

      setDropSearchData(filteredData as Course[]);
    }
  };

  const handleButtonHover = () => {
    setDropdownOpen(true);
  };

  const handleButtonLeave = () => {
    setDropdownOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleDropdownHover = useCallback(() => {
    setDropdownOpen(true);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    setDropdownOpen(false);
  }, []);

  const handleCategoryHover = (category: any) => {
    setSelectedCategory(category);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleMenuotherpages = () => {
    setisOtherMenuOpen(!isOtherMenuOpen);
  };

  const uniqueCategories = Array.from(
    new Set(SearchElementsData.map((course) => course.category))
  );
  const filteredCourses = uniqueCategories.flatMap((category) =>
    selectedCategory === category
      ? SearchElementsData.filter((course) => course.category === category)
      : []
  );
  const pathname = usePathname();
  const isVisible = useMemo(() => {
    let exist = true;

    if (
      pathname.split('/').includes('ksdc') ||
      pathname.split('/').includes('government-training-program') ||
      pathname.split('/').includes('individual-training') ||
      pathname.split('/').includes('reviews') ||
      pathname.split('/').includes('institutions')
    ) {
      return false;
    }
    return exist;
  }, [pathname]);
  const [show, setShow] = useState(false);
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="bSkilling" content="bSkilling" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />

      <>
        {/* <NavSection /> */}

        {/* <hr className="border-gray-300" /> */}

        {navHide && isVisible && (
          <>
            <NavSection />
            {/* <Link href="/linkedin">Go to Linkedin</Link> */}
            <div className="bg-card  sticky top-0 z-[40]">
              <nav className="py-2 h-[70px] 2xl:px-14 md:px-5 px-3  w-full m-auto     p-0  flex flex-row items-center justify-between gap-x-5  text-foreground  ">
                <div className="flex 2xl:gap-x-10 gap-x-5 items-center">
                  <div className="flex items-center gap-5 ">
                    <Link href={'/'}>
                      <img
                        src="/logo.png"
                        className="object-contain md:w-[130px] md:h-[50px] w-[120] h-[30px]"
                        alt="Logo"
                      />
                    </Link>
                  </div>
                  <Courses />
                  <div className="relative">
                    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                      <SheetTrigger className="relative">
                        <input
                          type="text"
                          className="w-[30vw]  text-[14px] h-10 md:w-[15vw]  2xl:w-[20vw]  border rounded-full bg-primary/10   px-5 pl-8 outline-none focus:outline-none"
                          placeholder="Search for the course or skills"
                          required
                          value={inputValue}
                          onChange={(e) => {
                            handleSearch(e);
                            setShow(true);
                          }}
                        />
                        <BiSearchAlt className=" absolute top-3 left-3 text-primary" />
                      </SheetTrigger>
                      <SheetContent
                        side={'top'}
                        className="h-screen overflow-y-auto"
                      >
                        <SheetHeader>
                          <input
                            type="text"
                            className="w-[90vw]  text-[14px] h-10  2xl:w-[90vw]  border rounded-full bg-primary/10   px-5 pl-8 outline-none focus:outline-none"
                            placeholder="Search for the course or skills"
                            required
                            value={inputValue}
                            onChange={(e) => {
                              handleSearch(e);
                              setShow(true);
                            }}
                          />
                          <Cats />
                          <SheetTitle></SheetTitle>
                          <SheetDescription></SheetDescription>{' '}
                          {dropSearchData.map((course, index) => (
                            <div
                              key={index}
                              onClick={() => {
                                route.replace(
                                  `/courses/course-details/${course?.url}`
                                );
                              }}
                              className="p-2 text-black hover:bg-buttonBlue px-5 hover:text-primary cursor-pointer"
                            >
                              {course.title}
                            </div>
                          ))}
                        </SheetHeader>
                      </SheetContent>
                    </Sheet>

                    {/* <Popover open={show} onOpenChange={setShow}>
                      <PopoverTrigger className="relative"> </PopoverTrigger>
                      <PopoverContent className="w-[30vw] max-h-[50vh] overflow-y-auto"></PopoverContent>
                    </Popover> */}
                  </div>
                </div>

                <NavbarSection />

                {isMenuOpen && (
                  <div
                    className={`fixed inset-0 bg-white flex flex-col items-center z-50 overflow-y-auto p-6 transition-transform transform ${
                      isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                  >
                    <div className="flex justify-end w-full mb-6">
                      <FaTimes
                        onClick={toggleMenu}
                        className="text-3xl text-gray-600 cursor-pointer hover:text-black transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-8 w-full">
                      <Link
                        href="/"
                        className="text-black hover:text-blue-500 text-lg font-medium transition-colors"
                      >
                        Home
                      </Link>
                      <Link
                        href="/aboutus"
                        className="text-black hover:text-blue-500 text-lg font-medium transition-colors"
                      >
                        About
                      </Link>
                      <Link
                        href="/blogs"
                        className="text-black hover:text-blue-500 text-lg font-medium transition-colors"
                      >
                        Blogs
                      </Link>
                      <Link
                        href="https://sfjbs.talentrecruit.com/career-page"
                        className="text-black hover:text-blue-500 text-lg font-medium transition-colors"
                        target="_blank"
                      >
                        Careers
                      </Link>

                      <div className="relative w-full">
                        <button
                          className="w-full bg-customRed text-white px-5 py-3 rounded-md flex items-center justify-between hover:bg-subText transition-colors"
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                          <span className="text-[18px] font-semibold">
                            Courses
                          </span>
                          <SlArrowDown className="ml-2 w-4 h-4" />
                        </button>
                        {dropdownOpen && (
                          <div
                            className="w-full bg-white rounded-lg shadow-lg mt-2 p-4"
                            style={{ maxHeight: '300px', overflowY: 'auto' }}
                          >
                            <div className="mb-4">
                              <div className="text-lg mb-3 font-bold text-customRed">
                                Categories
                              </div>
                              <ul>
                                {uniqueCategories.map((category, index) => (
                                  <li
                                    key={index}
                                    className="p-2 hover:bg-customRed hover:text-white cursor-pointer font-semibold rounded-md transition-colors"
                                    onMouseEnter={() =>
                                      handleCategoryHover(category)
                                    }
                                  >
                                    {category}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <div className="text-lg mb-3 font-bold text-customRed">
                                Courses
                              </div>
                              <ul>
                                {filteredCourses.map((course) => (
                                  <Link
                                    key={course._id}
                                    href={`/courses/course-details/${course?.url}`}
                                    style={{ textDecoration: 'none' }}
                                  >
                                    <li className="p-2 hover:bg-customRed font-semibold text-gray-800 hover:text-white cursor-pointer rounded-md transition-colors">
                                      {course.title}
                                    </li>
                                  </Link>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col gap-4 items-center text-center w-full">
                        <Link
                          href="https://lms.bskilling.com/login/index.php"
                          className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full text-base font-medium transition-colors"
                        >
                          Login/Register
                        </Link>

                        <p
                          className="text-base text-black cursor-pointer hover:text-blue-500 font-medium transition-colors"
                          onClick={handleOpenPopup}
                        >
                          Become an Instructor
                        </p>
                        {isPopupOpen && (
                          <>
                            <div
                              className="fixed inset-0 bg-black opacity-50 z-40"
                              onClick={handleClosePopup}
                            ></div>
                            <div className="fixed inset-0 flex items-center justify-center z-50">
                              <PopupForm
                                handleClosePopup={handleClosePopup}
                                title="Bskilling Enquiry Form"
                              />
                            </div>
                          </>
                        )}
                      </div>

                      <div className="flex flex-col items-center gap-2 mt-6">
                        <p className="flex items-center text-gray-800">
                          <span className="mr-2">📞</span> +91-9845348601
                        </p>
                        <p className="flex items-center text-gray-800">
                          <span className="mr-2">📧</span> support@bskilling.com
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </nav>
            </div>
            <Categories />
          </>
        )}

        <main className="">{children}</main>
        {/* whatsapp */}
        <div
          className="fixed bottom-[2.4rem] right-[6.8rem]"
          style={{ zIndex: 1000 }}
        >
          <a
            href="https://wa.me/919741104412"
            target="_blank"
            rel="noreferrer"
            className="text-green-500 hover:text-green-700"
            style={{
              display: 'inline-block',
              backgroundColor: 'green',
              padding: '10px',
              borderRadius: '50%',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.7)',
              transition: 'transform 0.3s ease-in-out',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = 'scale(1.1)')
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img
              src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/get-logo-whatsapp-png-pictures-1.png"
              className="w-7 h-7"
              alt="WhatsApp Logo"
            />
          </a>
        </div>
        <Footer />
      </>
    </>
  );
};

export default Layout;

//**
// <>
//   {navHide && (
//     <div className="bg-white w-full shadow-md ">
//       <div className="flex justify-between items-center px-8 py-4 max-w-screen-xl mx-auto">
//         <div className="flex items-center space-x-4">
//           <Link href="/">
//             <div>
//               <img
//                 src="/logo.png"
//                 className="w-[100px] h-[30px] object-contain"
//                 alt="bskilling"
//               />
//             </div>
//           </Link>
//           <div className="hidden md:block">
//             <div className="flex items-center space-x-6 border-l border-gray-300 pl-6">
//               <Link
//                 href="/"
//                 className="text-black text-sm hover:text-blue-500 transition-colors duration-300"
//               >
//                 HOME
//               </Link>
//               <Link
//                 href="/aboutus"
//                 className="text-black text-sm hover:text-blue-500 transition-colors duration-300"
//               >
//                 ABOUT
//               </Link>
//               <Link
//                 href="/blogs"
//                 className="text-black text-sm hover:text-blue-500 transition-colors duration-300"
//               >
//                 BLOG
//               </Link>
//               <Link
//                 href="https://sfjbs.talentrecruit.com/career-page"
//                 target="_blank"
//                 className="text-black text-sm hover:text-blue-500 transition-colors duration-300"
//               >
//                 CAREER
//               </Link>
//             </div>{' '}
//           </div>
//         </div>

//         <div className="md:flex items-center space-x-6  hidden">
//           <Link href="https://lms.bskilling.com/login/index.php">
//             <div className="flex items-center space-x-2">
//               <img
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNzXYh-X4wxX1jfbPywa8HWoNGDnx1Tlo0-g&s"
//                 alt="Login/Register"
//                 className="w-6 h-6"
//               />

//               <p className="text-sm text-black"> Login/Register</p>
//             </div>
//           </Link>

//           {/* <div className="flex items-center space-x-2">
//             <img
//               src="https://www.shutterstock.com/image-vector/shopping-cart-icon-bag-260nw-1520865410.jpg"
//               alt="cart"
//               className="w-6 h-6"
//             />

//           </div> */}
//           <div className="relative">
//             {/* Search Icon */}
//             {!isSearchVisible && (
//               <div
//                 className={`flex items-center space-x-2 cursor-pointer transition-opacity duration-300 ${
//                   isSearchVisible ? 'opacity-0' : 'opacity-100'
//                 }`}
//                 onClick={toggleSearch}
//               >
//                 <img
//                   src="https://cdn0.iconfinder.com/data/icons/art-designing-glyph/2048/1871_-_Magnifier-512.png"
//                   alt="search"
//                   className="w-6 h-6"
//                 />
//               </div>
//             )}

//             {/* Search Input */}
//             {isSearchVisible && (
//               <div className="flex items-center space-x-2 transition-opacity duration-300 opacity-100">
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="border rounded px-2 py-1"
//                   onBlur={() => setIsSearchVisible(false)}
//                 />
//               </div>
//             )}
//           </div>
//         </div>
//         {isOtherMenuOpen && (
//           <div
//             className={`fixed inset-0 bg-white flex flex-col items-center z-50 overflow-y-auto p-6 transition-transform transform ${
//               isOtherMenuOpen ? 'translate-x-0' : 'translate-x-full'
//             }`}
//           >
//             {/* Close Button */}
//             <div className="flex justify-end w-full mb-6">
//               <FaTimes
//                 onClick={toggleMenuotherpages}
//                 className="text-3xl text-gray-600 cursor-pointer hover:text-black transition-colors"
//               />
//             </div>

//             {/* Navigation Links */}
//             <div className="flex flex-col gap-8 w-full">
//               <Link
//                 href="/"
//                 className="text-black hover:text-blue-500 text-lg font-medium transition-colors"
//               >
//                 Home
//               </Link>
//               <Link
//                 href="/aboutus"
//                 className="text-black hover:text-blue-500 text-lg font-medium transition-colors"
//               >
//                 About
//               </Link>
//               <Link
//                 href="/blogs"
//                 className="text-black hover:text-blue-500 text-lg font-medium transition-colors"
//               >
//                 Blogs
//               </Link>
//               <Link
//                 href="https://sfjbs.talentrecruit.com/career-page"
//                 className="text-black hover:text-blue-500 text-lg font-medium transition-colors"
//                 target="_blank"
//               >
//                 Careers
//               </Link>

//               {/* Courses Section in Mobile Menu */}

//               {/* Instructor Section */}
//               <div className="flex flex-col gap-4 items-center text-center w-full">
//                 <Link
//                   href="https://lms.bskilling.com/login/index.php"
//                   className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full text-base font-medium transition-colors"
//                 >
//                   Login/Register
//                 </Link>

//                 <p
//                   className="text-base text-black cursor-pointer hover:text-blue-500 font-medium transition-colors"
//                   onClick={handleOpenPopup}
//                 >
//                   Become an Instructor
//                 </p>
//                 {isPopupOpen && (
//                   <>
//                     <div
//                       className="fixed inset-0 bg-black opacity-50 z-40"
//                       onClick={handleClosePopup}
//                     ></div>
//                     <div className="fixed inset-0 flex items-center justify-center z-50">
//                       <PopupForm
//                         handleClosePopup={handleClosePopup}
//                         title="Bskilling Enquiry Form"
//                       />
//                     </div>
//                   </>
//                 )}
//               </div>

//               {/* Contact Section */}
//               <div className="flex flex-col items-center gap-2 mt-6">
//                 <p className="flex items-center text-gray-800">
//                   <span className="mr-2">📞</span> +91-9845348601
//                 </p>
//                 <p className="flex items-center text-gray-800">
//                   <span className="mr-2">📧</span> support@bskilling.com
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}
//         {/* Hamburger Icon for Small Screens */}
//         <div className="md:hidden flex items-center mr-4">
//           <FaBars
//             onClick={toggleMenuotherpages}
//             className="text-xl cursor-pointer"
//           />
//         </div>
//       </div>
//     </div>
//   )}

//   <main className=" font-SourceSans font-normal">{children}</main>
//   {/* whatsapp */}
//   <div
//     className="fixed bottom-[2.4rem] right-[6.8rem]"
//     style={{ zIndex: 1000 }}
//   >
//     <a
//       href="https://wa.me/919741104412"
//       target="_blank"
//       rel="noreferrer"
//       className="text-green-500 hover:text-green-700"
//       style={{
//         display: 'inline-block',
//         backgroundColor: 'green',
//         padding: '10px',
//         borderRadius: '50%',
//         boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.7)',
//         transition: 'transform 0.3s ease-in-out',
//       }}
//       onMouseEnter={(e) =>
//         (e.currentTarget.style.transform = 'scale(1.1)')
//       }
//       onMouseLeave={(e) =>
//         (e.currentTarget.style.transform = 'scale(1)')
//       }
//     >
//       <img
//         src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/get-logo-whatsapp-png-pictures-1.png"
//         className="w-7 h-7"
//         alt="WhatsApp Logo"
//       />
//     </a>
//   </div>
//   <LandingFooter />
// </>
//
//
//
//
//
//
//  */
