import Head from "next/head";
import { ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { BiMenu, BiSearchAlt } from "react-icons/bi";
import { SlArrowDown } from "react-icons/sl";
import { MyContext } from "context/PageContext";
import courseSearchData from "data/courseSearchData";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "./Footer";
import LandingFooter from "./LandingFooter";
import { Course } from "common/util/types";
import PopupForm from "./PopupForm";


type Props = {
  children: ReactNode;
  pageTitle?: string;
};
const Layout = ({ children, pageTitle = "bSkilling" }: Props) => {
  const route = useRouter();
  const { inputValue, setInputValue, setFetchSearchData } = useContext(MyContext);
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

  const handleOpenPopup = () => setPopupOpen(true);
    const handleClosePopup = () => setPopupOpen(false);


  const homePage = route.pathname === '/';

  const fetchApiData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_TRAINING_BASE_URL}api/v1/get-course-title`
      );

      const jsonData = response.data;
      console.log("res", jsonData);
      const ListOfCoursesData = Object.values(jsonData.courses);
      console.log("res", ListOfCoursesData);
      const flattenedData = ListOfCoursesData.flatMap(innerArray => innerArray);

      setSearchElementsData(flattenedData as Course[]);
    } catch (error) {
      console.error("Error fetching API:", error);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  useEffect(() => {
    if (route.pathname === "/about") {
      setNavHide(true);
      setAboutUnderline(true);
      setBlogUnderline(false);
    } else if (route.pathname === "/PaymentStatus") {
      setNavHide(false);
    } else if (route.pathname === "/blogs") {
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
    if (value === "") {
      setDropSearchData([]);
    } else {
      const filteredData = SearchElementsData.filter(course =>
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

  const uniqueCategories = Array.from(new Set(SearchElementsData.map(course => course.category)));
  const filteredCourses = uniqueCategories.flatMap((category) =>
    selectedCategory === category ? SearchElementsData.filter((course) => course.category === category) : []
  );
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="bSkilling" content="bSkilling" />
        <link rel="icon" href="/logo.png" />
      </Head>
      {homePage ? (
        <>
          <div className="flex justify-between items-center px-8 py-4 max-w-screen-xl mx-auto">
            <div className="flex space-x-4">
              <p className="flex items-center">
                <span className="mr-2">📞</span> +91-9845348601
              </p>
              <Link href="mailto:support@bskilling.com" className="flex items-center text-black">
                <span className="mr-2">📧</span> support@bskilling.com
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <p
                  className="text-sm text-black cursor-pointer hover:font-bold"
                  onClick={handleOpenPopup}>
                  Become an Instructor
                </p>
                {isPopupOpen && (
                    <>

                        <div
                            className="fixed inset-0 bg-black opacity-50 z-40"
                            onClick={handleClosePopup}
                        ></div>

                        <div className="fixed inset-0 flex items-center justify-center z-50">
                            <PopupForm handleClosePopup={handleClosePopup} title="Bskilling Enquiry Form" />
                        </div>
                    </>
                )}
              </div>
              <Link href="https://lms.bskilling.com/login/index.php">
                <div className="flex items-center space-x-2">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNzXYh-X4wxX1jfbPywa8HWoNGDnx1Tlo0-g&s"
                    alt="Login/Register"
                    className="w-6 h-6"
                  />

                  <p className="text-sm text-black"> Login/Register</p>
                </div>

              </Link>
              {/* <div className="flex items-center space-x-2">
                <img
                  src="https://www.shutterstock.com/image-vector/shopping-cart-icon-bag-260nw-1520865410.jpg"
                  alt="cart"
                  className="w-6 h-6"
                />

              </div> */}
            </div>
          </div>

          <hr className="border-gray-300" />

          {navHide && (
            <nav className="md:py-2 md:h-[70px] font-SourceSans  md:p-0 bg-white flex  md:flex-row flex-col md:gap-36 md:justify-between w-full shadow-">
              <div className="flex md:gap-5 md:flex-row flex-col items-center justify-center md:ml-10">
                <Link href={"/"}>
                  <img
                    src="/logo.png"
                    className="object-contain lg:w-[200px] md:my-0 my-5 h-[50px]"
                    alt=""
                  />
                </Link>

                <div className="relative hidden md:block">
                  <div className="md:mt-0 mt-3 ">
                    <button
                      className="bg-dropdownBg text-white px-4 py-2 rounded-md flex items-center hover:bg-subText"
                      onMouseEnter={handleDropdownHover}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <span className="text-[18px] text-white font-semibold">Courses</span>
                      <span className="ml-2"><SlArrowDown className="w-3 h-2" /></span>
                    </button>
                  </div>
                  {dropdownOpen && (
                    <div
                      style={{ maxHeight: "500px", overflowY: "auto", width: "800px" }}
                      className="absolute top-7 z-[5000] flex w-full bg-white rounded-lg shadow-lg mt-2"
                      onMouseEnter={handleDropdownHover}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="w-1/2 p-4 border-r border-gray-300"
                        onMouseEnter={() => setSelectedCategory(null)}
                      >
                        <div className="text-lg mb-2 font-bold text-customRed">Categories</div>
                        <ul>
                          {uniqueCategories.map((category, index) => (
                            <li
                              key={index}
                              className="p-2 hover:bg-customRed hover:text-white cursor-pointer font-semibold"
                              onMouseEnter={() => handleCategoryHover(category)}
                            // onMouseLeave={() => setSelectedCategory(null)}
                            >
                              {category}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="w-1/2 p-4">
                        <div className="text-lg mb-2 font-bold text-customRed">Courses</div>
                        {filteredCourses.length > 0 ? (
                          <ul>
                            {filteredCourses.map((course) => (
                              <Link style={{ textDecoration: "none" }} href={`/courses/courseDetails/${course._id}`} key={course._id}>
                                <li className="p-2 hover:bg-customRed font-semibold text-black hover:text-white cursor-pointer">
                                  {course.title}
                                </li>
                              </Link>
                            ))}
                          </ul>
                        ) : (
                          <ul>
                            {SearchElementsData.map((course) => (
                              <Link style={{ textDecoration: "none" }} href={`/courses/courseDetails/${course._id}`} key={course._id}>
                                <li className="p-2 hover:bg-customRed font-semibold text-black hover:text-white cursor-pointer">
                                  {course.title}
                                </li>
                              </Link>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="relative font-SourceSans flex justify-end md:w-[360px]">
                  <input
                    type="text"
                    className="md:w-[350px] md:h-[40px] text-[14px] rounded-full bg-gray lg:py-1 lg:mt-[3px] px-5 focus:border-Buttoncolor focus:ring-buttonBlue mr-2"
                    placeholder="Search for the course or skills you want to learn"
                    required
                    value={inputValue}
                    onChange={handleSearch}
                  />
                  <div className="absolute right-3 top-2 md:top-3">
                    <BiSearchAlt />
                  </div>
                  {dropSearchData.length > 0 && (
                    <div
                      style={{ maxHeight: "500px", overflowY: "auto" }}
                      className="absolute z-[5000] w-full bg-white rounded-lg shadow-lg md:right-[-50px] mt-10"
                    >
                      {dropSearchData.map((course, index) => (
                        <Link href={"courses/courseDetails/" + course._id} key={index}>
                          <div

                            className="p-2 text-black hover:bg-buttonBlue px-5 hover:text-white cursor-pointer"
                          >
                            {course.title}
                          </div>
                        </Link>

                      ))}
                    </div>
                  )}
                </div>
              </div>


              <div className="md:mr-6 pb-1 flex font-SourceSans text-sm  justify-center gap-3 md:gap-5 md:my-0 my-5">
                <div className="flex gap-4 md:gap-5">
                  <div className="mt-3 text-black hover:cursor-pointer font-bold">
                    <Link style={{ textDecoration: "none" }} href={"/"}>
                      <p
                        className={`${aboutUnderline === true
                          ? "text-lightBlue border-b-2 underline-offset-2"
                          : "text-black hover:text-lightBlue  no-underline"
                          }`}
                      >
                        {" "}
                        Home
                      </p>
                    </Link>
                  </div>
                  <div className="mt-3 text-black hover:cursor-pointer font-bold">
                    <Link style={{ textDecoration: "none" }} href={"/aboutus"}>
                      <p
                        className={`${aboutUnderline === true
                          ? "text-lightBlue border-b-2 underline-offset-2"
                          : "text-black hover:text-lightBlue  no-underline"
                          }`}
                      >
                        {" "}
                        About
                      </p>
                    </Link>
                  </div>

                  <div className="mt-3 text-black font-SourceSans hover:cursor-pointer font-bold">
                    <Link style={{ textDecoration: "none" }} href={"/blogs"}>
                      <p
                        className={`${blogUnderline === true
                          ? "text-lightBlue border-b-2 underline-offset-2"
                          : "text-black hover:text-lightBlue  no-underline"
                          }`}
                      >
                        Blogs
                      </p>
                    </Link>
                  </div>
                  <div className="mt-3 text-GreenText font-SourceSans hover:cursor-pointer font-bold">
                    <Link style={{ textDecoration: "none" }} href="https://sfjbs.talentrecruit.com/career-page" target="blank">
                      <p className="text-black hover:text-lightBlue  no-underline">
                        Careers
                      </p>
                    </Link>
                  </div>

                </div>

              </div>
              <div className="mb-4 flex md:hidden justify-center">
                <div>
                  {" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="underline-0"
                    href="https://lms.bskilling.com/login/index.php"
                  >
                    <button className="flex gap-1 rounded-md text-white mt-2 border hover:text-white border-lightBlue transition duration-500 hover:scale-105 ease-out  bg-lightBlue hover:bg-lightBlue py-[8px] focus:ring-1 focus:outline-none focus:ring-buttonBlue font-medium  text-sm px-4 ">
                      <p>Login</p>
                    </button>
                  </a>
                </div>
              </div>
            </nav>
          )}

          <main className=" font-SourceSans font-normal">{children}</main>
          {/* whatsapp */}
          <div className="fixed bottom-[2.4rem] right-[6.8rem]" style={{ zIndex: 1000 }}>
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
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.7)', // Optional: Add a subtle shadow
                transition: 'transform 0.3s ease-in-out', // Add a transition for the transform property
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
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
      ) : (
        <>


          {navHide && (
            <div className='bg-white w-full shadow-md'>
              <div className="flex justify-between items-center px-8 py-4 max-w-screen-xl mx-auto">
                <div className="flex items-center space-x-4">
                  <Link href="/">
                    <div>
                      <img
                        src="/logo.png"
                        className="w-[100px] h-[30px] object-contain"
                        alt="bskilling"
                      />
                    </div>
                  </Link>

                  <div className="flex items-center space-x-6 border-l border-gray-300 pl-6">
                    <Link href="/" className='text-black text-sm hover:text-blue-500 transition-colors duration-300'>HOME</Link>
                    <Link href="/aboutus" className='text-black text-sm hover:text-blue-500 transition-colors duration-300'>ABOUT</Link>
                    <Link href="/blogs" className='text-black text-sm hover:text-blue-500 transition-colors duration-300'>BLOG</Link>
                    <Link href="https://sfjbs.talentrecruit.com/career-page" target="_blank" className='text-black text-sm hover:text-blue-500 transition-colors duration-300'>
                      CAREER
                    </Link>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <Link href="https://lms.bskilling.com/login/index.php">
                    <div className="flex items-center space-x-2">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNzXYh-X4wxX1jfbPywa8HWoNGDnx1Tlo0-g&s"
                        alt="Login/Register"
                        className="w-6 h-6"
                      />

                      <p className="text-sm text-black"> Login/Register</p>
                    </div>
                  </Link>

                  {/* <div className="flex items-center space-x-2">
                    <img
                      src="https://www.shutterstock.com/image-vector/shopping-cart-icon-bag-260nw-1520865410.jpg"
                      alt="cart"
                      className="w-6 h-6"
                    />

                  </div> */}
                  <div className="relative">
                    {/* Search Icon */}
                    {!isSearchVisible && (
                      <div
                        className={`flex items-center space-x-2 cursor-pointer transition-opacity duration-300 ${isSearchVisible ? 'opacity-0' : 'opacity-100'}`}
                        onClick={toggleSearch}
                      >
                        <img
                          src="https://cdn0.iconfinder.com/data/icons/art-designing-glyph/2048/1871_-_Magnifier-512.png"
                          alt="search"
                          className="w-6 h-6"
                        />
                      </div>
                    )}

                    {/* Search Input */}
                    {isSearchVisible && (
                      <div className="flex items-center space-x-2 transition-opacity duration-300 opacity-100">
                        <input
                          type="text"
                          placeholder="Search..."
                          className="border rounded px-2 py-1"
                          onBlur={() => setIsSearchVisible(false)}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

          )}

          <main className=" font-SourceSans font-normal">{children}</main>
          {/* whatsapp */}
          <div className="fixed bottom-[2.4rem] right-[6.8rem]" style={{ zIndex: 1000 }}>
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
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img
                src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/get-logo-whatsapp-png-pictures-1.png"
                className="w-7 h-7"
                alt="WhatsApp Logo"
              />
            </a>
          </div>
          <LandingFooter />
        </>
      )}
      {/* <footer className=" bg-white font-SourceSans  px-10 py-6 md:pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 md:flex md:flex-row justify-between items-start">
          <div className="col-span-2 pb-4 md:pb-0 ">
            <div className=" p-4 md:p-0 pl-6 ">
              <p className="font-semibold text-lg pb-2 text-center ">
                Find us on
              </p>
              <div className="grid grid-cols-3 gap- i ">
                <div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/bskillingindia/"
                  >
                    {" "}
                    <img
                      src="/icon/insta.svg"
                      className="w-[48px] h-[48px]"
                      alt=""
                    />
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/bskillingindia/"
                  >
                    {" "}
                    <img
                      src="/icon/facebook.svg"
                      className="w-[48px] h-[48px]"
                      alt=""
                    />
                  </a>
                </div>

                <div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/company/bskillingindia/"
                  >
                    {" "}
                    <img
                      src="/icon/link.svg"
                      className="w-[48px] h-[48px]"
                      alt=""
                    />
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/b_SkillingIndia"
                  >
                    {" "}
                    <img
                      src="/twitter.webp"
                      className="w-[48px] h-[48px]"
                      alt=""
                    />
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.pinterest.com/bskillingdigital/"
                  >
                    {" "}
                    <img
                      src="/icon/pin.svg"
                      className="w-[48px] h-[48px]"
                      alt=""
                    />
                  </a>
                </div>

                <div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.youtube.com/@BSkillingIndia"
                  >
                    {" "}
                    <img
                      src="/icon/yt.svg"
                      className="w-[48px] h-[48px]"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm col-span-2  p-4 md:p-0 ">
            <p className="font-semibold text-lg">BSKILLING PRIVATE LIMITED</p>
            <p className="text-base">Uma Sree Dream World, Unit -2,</p>
            <p className="text-base">B-Block, 4th Floor, Kudlu Gate,</p>
            <p className="text-base">Hosur Main Road,</p>
            <p className="text-base">Bangalore – 560068. Karnataka, INDIA</p>
          </div>
          <div className="text-sm cursor-pointer p-4 md:p-0 ">
            <div>
              <p className="font-semibold text-lg">Company</p>
            </div>
            <Link style={{ textDecoration: "none" }} href={"/about"}>
              <p className="text-black text-base  no-underline"> About</p>
            </Link>

            <Link style={{ textDecoration: "none" }} href={"/blogs"}>
              <p className="text-base text-black">Blogs</p>
            </Link>
          </div>
          <div className="text-sm cursor-pointer  p-4 md:p-0 ">
            <div>
              <p className="font-semibold text-lg">Policies </p>
            </div>
            <div className=" text-black text-base">
              <Link
                style={{ textDecoration: "none" }}
                className="no-underline text-black"
                href={"/Termsofuse"}
              >
                Terms of Use
              </Link>
            </div>
            <div className="text-black text-base">
              <Link
                style={{ textDecoration: "none" }}
                className="no-underline text-black"
                href={"/privacy"}
              >
                Privacy Policy
              </Link>
            </div>
            <div className="text-black text-base">
              <Link
                style={{ textDecoration: "none" }}
                className="no-underline text-black"
                href={"/Refundpolicy"}
              >
                Refund Policy
              </Link>
            </div>
          </div>

          <div className="text-sm p-4 md:p-0 ">
            <p className="font-semibold  text-lg">Contact</p>
            <p className="text-base">
              Sales Inquiries : <br /> support@bskilling.com / +91-9845348601
            </p>
            <p className="text-base">
              Grievances : <br /> grievanceofficer@bskilling.com /
              +91 89519 23627
            </p>
          </div>
          <div className=" w-[20px] md:block hidden  h-[20px]"></div>
        </div>

        <div className="mx-auto text-left md:text-center text-sm text-zinc-400 pt-4 md:pt-8 md:p-0 p-4 pl-6">
          <p>BSKILLING PRIVATE LIMITED.</p>
          <p>
            Copyright © {currentYear}. All Rights Reserved. Designed by Deedbee Social
            Ventures.
          </p>
        </div>
      </footer> */}
      {/* <div className="h-[50px] w-full"></div> */}
    </>
  );
};

export default Layout;
