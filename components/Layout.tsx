import Head from "next/head";
import Script from "next/script";
import { ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { BiMenu, BiSearchAlt } from "react-icons/bi";
import { SlArrowDown } from "react-icons/sl";
import { MyContext } from "context/PageContext";
import courseSearchData from "data/courseSearchData";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import Footer from "./Footer";
import LandingFooter from "./LandingFooter";
import { Course } from "common/util/types";
import PopupForm from "./PopupForm";

// import Footer from "./Footer";

type Props = {
  children: ReactNode;
  pageTitle?: string;
};
const Layout = ({ children, pageTitle = "bSkilling" }: Props) => {
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

  const handleOpenPopup = () => setPopupOpen(true);
  const handleClosePopup = () => setPopupOpen(false);

  const homePage = route.pathname === "/";

  const fetchApiData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_TRAINING_BASE_URL}api/v1/get-course-title`
      );

      const jsonData = response.data;
      console.log("res", jsonData);
      const ListOfCoursesData = Object.values(jsonData.courses);
      console.log("res", ListOfCoursesData);
      const flattenedData = ListOfCoursesData.flatMap(
        (innerArray) => innerArray
      );

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
      {homePage ? (
        <>
          <div className="hidden sm:flex justify-between items-center px-8 py-4 max-w-screen-xl mx-auto">
            <div className="flex space-x-4">
              <p className="flex items-center">
                <span className="mr-2">📞</span> +91-9845348601
              </p>
              <Link
                href="mailto:support@bskilling.com"
                className="flex items-center text-black"
              >
                <span className="mr-2">📧</span> support@bskilling.com
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <p
                  className="text-sm text-black cursor-pointer hover:font-bold"
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
                      <PopupForm handleClosePopup={handleClosePopup} title="" />
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
            <nav className="py-2 h-[70px] font-SourceSans p-0 bg-white flex flex-row justify-between w-full">
              <div className="flex items-center gap-5 md:ml-10 ml-5 ">
                <Link href={"/"}>
                  <img
                    src="/logo.png"
                    className="object-contain md:w-[200px] md:h-[50px] w-[120] h-[30px]"
                    alt="Logo"
                  />
                </Link>
              </div>

              <div className="flex absolute left-[270px] gap-4 mt-1">
                {/* Courses Section */}
                <div className="relative hidden md:block">
                  <button
                    className="bg-dropdownBg text-white px-4 py-2 rounded-md flex items-center hover:bg-subText"
                    onMouseEnter={handleDropdownHover}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <span className="text-[14px] font-semibold">Courses</span>
                    <SlArrowDown className="ml-2 w-3 h-2" />
                  </button>
                  {dropdownOpen && (
                    <div
                      style={{
                        maxHeight: "500px",
                        overflowY: "auto",
                        width: "800px",
                      }}
                      className="absolute top-7 left-0 z-[5000] flex bg-white rounded-lg shadow-lg mt-2"
                      onMouseEnter={handleDropdownHover}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div
                        className="w-1/2 p-4 border-r border-gray-300"
                        onMouseEnter={() => setSelectedCategory(null)}
                      >
                        <div className="text-lg mb-2 font-bold text-customRed">
                          Categories
                        </div>
                        <ul>
                          {uniqueCategories.map((category, index) => (
                            <li
                              key={index}
                              className="p-2 hover:bg-customRed hover:text-white cursor-pointer font-semibold"
                              onMouseEnter={() => handleCategoryHover(category)}
                            >
                              {category}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="w-1/2 p-4">
                        <div className="text-lg mb-2 font-bold text-customRed">
                          Courses
                        </div>
                        {filteredCourses.length > 0 ? (
                          <ul>
                            {filteredCourses.map((course) => (
                              <Link
                                style={{ textDecoration: "none" }}
                                href={`/courses/courseDetails/${course?.url}`}
                                key={course._id}
                              >
                                <li className="p-2 hover:bg-customRed font-semibold text-black hover:text-white cursor-pointer">
                                  {course.title}
                                </li>
                              </Link>
                            ))}
                          </ul>
                        ) : (
                          <ul>
                            {SearchElementsData.map((course) => (
                              <Link
                                style={{ textDecoration: "none" }}
                                href={`/courses/courseDetails/${course?.url}`}
                                key={course._id}
                              >
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

                {/* Search Bar */}
                <div className="relative hidden md:block font-SourceSans w-[360px]">
                  <input
                    type="text"
                    className="w-full h-[40px] text-[14px] rounded-full bg-gray px-5 focus:border-Buttoncolor focus:ring-buttonBlue"
                    placeholder="Search for the course or skills you want to learn"
                    required
                    value={inputValue}
                    onChange={handleSearch}
                  />
                  <div className="absolute right-3 top-2">
                    <BiSearchAlt />
                  </div>
                  {dropSearchData.length > 0 && (
                    <div
                      style={{ maxHeight: "500px", overflowY: "auto" }}
                      className="absolute z-[5000] w-full bg-white rounded-lg shadow-lg mt-2"
                    >
                      {dropSearchData.map((course, index) => (
                        <Link
                          href={"courses/courseDetails/" + course?.url}
                          key={index}
                        >
                          <div className="p-2 text-black hover:bg-buttonBlue px-5 hover:text-white cursor-pointer">
                            {course.title}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Desktop Navigation Links */}
              <div className="hidden md:flex items-center gap-5 mr-6">
                <Link
                  href="/"
                  className="text-black hover:text-lightBlue font-bold"
                >
                  Home
                </Link>
                <Link
                  href="/aboutus"
                  className="text-black hover:text-lightBlue font-bold"
                >
                  About
                </Link>
                <Link
                  href="/blogs"
                  className="text-black hover:text-lightBlue font-bold"
                >
                  Blogs
                </Link>
                <Link
                  href="https://sfjbs.talentrecruit.com/career-page"
                  className="text-black hover:text-lightBlue font-bold"
                  target="_blank"
                >
                  Careers
                </Link>

                <div className="relative inline-block text-left dropdown">
                  <div>
                    <button
                      onClick={toggleDropdown}
                      className=" inline-flex justify-between w-full shadow-sm px-4 py-2 bg-white text-sm font-bold text-black  hover:bg-gray-50 hover:bg-gray-50 focus:outline-none"
                      aria-haspopup="true"
                      aria-expanded="true"
                    >
                      Training Options
                      <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* {isOpen && ( */}
                  <div className="dropdown-menu absolute right-0 z-10 w-56 rounded-md shadow-lg bg-white transition-opacity duration-300 ease-in-out group-hover:block hidden">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <button
                        onClick={() => handleOptionClick("Corporate Training")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      >
                        Corporate Training
                      </button>
                      <button
                        onClick={() => handleOptionClick("School Training")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      >
                        Collage Training
                      </button>
                    </div>
                  </div>
                  {/* )} */}
                </div>
              </div>

              {/* Hamburger Icon for Small Screens */}
              <div className="md:hidden flex items-center mr-4">
                <FaBars
                  onClick={toggleMenu}
                  className="text-xl cursor-pointer"
                />
              </div>

              {/* Mobile Menu */}
              {isMenuOpen && (
                <div
                  className={`fixed inset-0 bg-white flex flex-col items-center z-50 overflow-y-auto p-6 transition-transform transform ${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                  }`}
                >
                  {/* Close Button */}
                  <div className="flex justify-end w-full mb-6">
                    <FaTimes
                      onClick={toggleMenu}
                      className="text-3xl text-gray-600 cursor-pointer hover:text-black transition-colors"
                    />
                  </div>

                  {/* Navigation Links */}
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

                    {/* Courses Section in Mobile Menu */}
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
                          style={{ maxHeight: "300px", overflowY: "auto" }}
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
                                  href={`/courses/courseDetails/${course?.url}`}
                                  style={{ textDecoration: "none" }}
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

                    {/* Instructor Section */}
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

                    {/* Contact Section */}
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
            // <nav className="py-2 h-[70px] font-SourceSans p-0 bg-white flex flex-row  gap-36 justify-between w-full">
            //   <div className="flex gap-5 flex-row ml-10">
            //     <Link href={"/"}>
            //       <img
            //         src="/logo.png"
            //         className="object-contain md:w-[200px] md:my-0 my-5 h-[50px]"
            //         alt=""
            //       />
            //     </Link>

            //     <div className="relative hidden md:block">
            //       <div className="md:mt-0 mt-3 ">
            //         <button
            //           className="bg-dropdownBg text-white px-4 py-2 rounded-md flex items-center hover:bg-subText"
            //           onMouseEnter={handleDropdownHover}
            //           onMouseLeave={handleDropdownLeave}
            //         >
            //           <span className="text-[18px] text-white font-semibold">Courses</span>
            //           <span className="ml-2"><SlArrowDown className="w-3 h-2" /></span>
            //         </button>
            //       </div>
            //       {dropdownOpen && (
            //         <div
            //           style={{ maxHeight: "500px", overflowY: "auto", width: "800px" }}
            //           className="absolute top-7 z-[5000] flex w-full bg-white rounded-lg shadow-lg mt-2"
            //           onMouseEnter={handleDropdownHover}
            //           onMouseLeave={handleDropdownLeave}
            //         >
            //           <div className="w-1/2 p-4 border-r border-gray-300"
            //             onMouseEnter={() => setSelectedCategory(null)}
            //           >
            //             <div className="text-lg mb-2 font-bold text-customRed">Categories</div>
            //             <ul>
            //               {uniqueCategories.map((category, index) => (
            //                 <li
            //                   key={index}
            //                   className="p-2 hover:bg-customRed hover:text-white cursor-pointer font-semibold"
            //                   onMouseEnter={() => handleCategoryHover(category)}
            //                 // onMouseLeave={() => setSelectedCategory(null)}
            //                 >
            //                   {category}
            //                 </li>
            //               ))}
            //             </ul>
            //           </div>
            //           <div className="w-1/2 p-4">
            //             <div className="text-lg mb-2 font-bold text-customRed">Courses</div>
            //             {filteredCourses.length > 0 ? (
            //               <ul>
            //                 {filteredCourses.map((course) => (
            //                   <Link style={{ textDecoration: "none" }} href={`/courses/courseDetails/${course._id}`} key={course._id}>
            //                     <li className="p-2 hover:bg-customRed font-semibold text-black hover:text-white cursor-pointer">
            //                       {course.title}
            //                     </li>
            //                   </Link>
            //                 ))}
            //               </ul>
            //             ) : (
            //               <ul>
            //                 {SearchElementsData.map((course) => (
            //                   <Link style={{ textDecoration: "none" }} href={`/courses/courseDetails/${course._id}`} key={course._id}>
            //                     <li className="p-2 hover:bg-customRed font-semibold text-black hover:text-white cursor-pointer">
            //                       {course.title}
            //                     </li>
            //                   </Link>
            //                 ))}
            //               </ul>
            //             )}
            //           </div>
            //         </div>
            //       )}
            //     </div>

            //     <div className="relative font-SourceSans flex justify-end md:w-[360px]">
            //       <input
            //         type="text"
            //         className="md:w-[350px] md:h-[40px] text-[14px] rounded-full bg-gray lg:py-1 lg:mt-[3px] px-5 focus:border-Buttoncolor focus:ring-buttonBlue mr-2"
            //         placeholder="Search for the course or skills you want to learn"
            //         required
            //         value={inputValue}
            //         onChange={handleSearch}
            //       />
            //       <div className="absolute right-3 top-2 md:top-3">
            //         <BiSearchAlt />
            //       </div>
            //       {dropSearchData.length > 0 && (
            //         <div
            //           style={{ maxHeight: "500px", overflowY: "auto" }}
            //           className="absolute z-[5000] w-full bg-white rounded-lg shadow-lg md:right-[-50px] mt-10"
            //         >
            //           {dropSearchData.map((course, index) => (
            //             <Link href={"courses/courseDetails/" + course._id} key={index}>
            //               <div

            //                 className="p-2 text-black hover:bg-buttonBlue px-5 hover:text-white cursor-pointer"
            //               >
            //                 {course.title}
            //               </div>
            //             </Link>

            //           ))}
            //         </div>
            //       )}
            //     </div>
            //   </div>

            //   <div className="md:mr-6 pb-1 flex font-SourceSans text-sm  justify-center gap-3 md:gap-5 md:my-0 my-5">
            //     <div className="flex gap-4 md:gap-5">
            //       <div className="mt-3 text-black hover:cursor-pointer font-bold">
            //         <Link style={{ textDecoration: "none" }} href={"/"}>
            //           <p
            //             className={`${aboutUnderline === true
            //               ? "text-lightBlue border-b-2 underline-offset-2"
            //               : "text-black hover:text-lightBlue  no-underline"
            //               }`}
            //           >
            //             {" "}
            //             Home
            //           </p>
            //         </Link>
            //       </div>
            //       <div className="mt-3 text-black hover:cursor-pointer font-bold">
            //         <Link style={{ textDecoration: "none" }} href={"/aboutus"}>
            //           <p
            //             className={`${aboutUnderline === true
            //               ? "text-lightBlue border-b-2 underline-offset-2"
            //               : "text-black hover:text-lightBlue  no-underline"
            //               }`}
            //           >
            //             {" "}
            //             About
            //           </p>
            //         </Link>
            //       </div>

            //       <div className="mt-3 text-black font-SourceSans hover:cursor-pointer font-bold">
            //         <Link style={{ textDecoration: "none" }} href={"/blogs"}>
            //           <p
            //             className={`${blogUnderline === true
            //               ? "text-lightBlue border-b-2 underline-offset-2"
            //               : "text-black hover:text-lightBlue  no-underline"
            //               }`}
            //           >
            //             Blogs
            //           </p>
            //         </Link>
            //       </div>
            //       <div className="mt-3 text-GreenText font-SourceSans hover:cursor-pointer font-bold">
            //         <Link style={{ textDecoration: "none" }} href="https://sfjbs.talentrecruit.com/career-page" target="blank">
            //           <p className="text-black hover:text-lightBlue  no-underline">
            //             Careers
            //           </p>
            //         </Link>
            //       </div>

            //     </div>

            //   </div>
            //   <div className="mb-4 flex md:hidden justify-center">
            //     <div>
            //       {" "}
            //       <a
            //         target="_blank"
            //         rel="noreferrer"
            //         className="underline-0"
            //         href="https://lms.bskilling.com/login/index.php"
            //       >
            //         <button className="flex gap-1 rounded-md text-white mt-2 border hover:text-white border-lightBlue transition duration-500 hover:scale-105 ease-out  bg-lightBlue hover:bg-lightBlue py-[8px] focus:ring-1 focus:outline-none focus:ring-buttonBlue font-medium  text-sm px-4 ">
            //           <p>Login</p>
            //         </button>
            //       </a>
            //     </div>
            //   </div>
            // </nav>
          )}

          <main className=" font-SourceSans font-normal">{children}</main>
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
                display: "inline-block",
                backgroundColor: "green",
                padding: "10px",
                borderRadius: "50%",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.7)",
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
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
            <div className="bg-white w-full shadow-md ">
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
                  <div className="hidden md:block">
                    <div className="flex items-center space-x-6 border-l border-gray-300 pl-6">
                      <Link
                        href="/"
                        className="text-black text-sm hover:text-blue-500 transition-colors duration-300"
                      >
                        HOME
                      </Link>
                      <Link
                        href="/aboutus"
                        className="text-black text-sm hover:text-blue-500 transition-colors duration-300"
                      >
                        ABOUT
                      </Link>
                      <Link
                        href="/blogs"
                        className="text-black text-sm hover:text-blue-500 transition-colors duration-300"
                      >
                        BLOG
                      </Link>
                      <Link
                        href="https://sfjbs.talentrecruit.com/career-page"
                        target="_blank"
                        className="text-black text-sm hover:text-blue-500 transition-colors duration-300"
                      >
                        CAREER
                      </Link>
                    </div>{" "}
                  </div>
                </div>

                <div className="md:flex items-center space-x-6  hidden">
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
                        className={`flex items-center space-x-2 cursor-pointer transition-opacity duration-300 ${
                          isSearchVisible ? "opacity-0" : "opacity-100"
                        }`}
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
                {isOtherMenuOpen && (
                  <div
                    className={`fixed inset-0 bg-white flex flex-col items-center z-50 overflow-y-auto p-6 transition-transform transform ${
                      isOtherMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                  >
                    {/* Close Button */}
                    <div className="flex justify-end w-full mb-6">
                      <FaTimes
                        onClick={toggleMenuotherpages}
                        className="text-3xl text-gray-600 cursor-pointer hover:text-black transition-colors"
                      />
                    </div>

                    {/* Navigation Links */}
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

                      {/* Courses Section in Mobile Menu */}

                      {/* Instructor Section */}
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

                      {/* Contact Section */}
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
                {/* Hamburger Icon for Small Screens */}
                <div className="md:hidden flex items-center mr-4">
                  <FaBars
                    onClick={toggleMenuotherpages}
                    className="text-xl cursor-pointer"
                  />
                </div>
              </div>
            </div>
          )}

          <main className=" font-SourceSans font-normal">{children}</main>
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
                display: "inline-block",
                backgroundColor: "green",
                padding: "10px",
                borderRadius: "50%",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.7)",
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
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
    </>
  );
};

export default Layout;
