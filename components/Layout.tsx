import Head from "next/head";
import { ReactNode, useContext, useEffect, useState } from "react";
import { BiMenu, BiSearchAlt } from "react-icons/bi";
import { SlArrowDown } from "react-icons/sl";

import { MyContext } from "context/PageContext";
import courseSearchData from "data/courseSearchData";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { FaWhatsapp } from "react-icons/fa";


type Props = {
  children: ReactNode;
  pageTitle?: string;
};
interface SearchCourseArray {
  category: string;
  currency: string;
  description: string;
  discount: string;
  duration: string;
  endorsedBy: string;
  id: string;
  language: string;
  level: string;
  ownedBy: string;
  price: number;
  thumbnail: string;
  trainingTye: string;
}

interface ListOfCoursesDataType {
  category: string;
  currency: string;
  description: string;
  discount: string;
  duration: string;
  endorsedBy: string;
  id: string;
  language: string;
  level: string;
  name: string;
  ownedBy: string;
  price: number;
  thumbnail: string;
  trainingTye: string;
}

const Layout = ({ children, pageTitle = "bSkilling" }: Props) => {
  const route = useRouter();
  const [aboutUnderline, setAboutUnderline] = useState(false);
  const [blogUnderline, setBlogUnderline] = useState(false);
  const [navHide, setNavHide] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [dropSearchData, setDropSearchData] = useState<ListOfCoursesDataType[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<SearchCourseArray>();
  const [screenWidth, setScreenWidth] = useState(0);

  const [SearchElementsData, setSearchElementsData] = useState<ListOfCoursesDataType[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState<ListOfCoursesDataType[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const fetchApiData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_TRAINING_BASE_URL}/api/outsource/trainingList?tenant=2`
      );
      const jsonData = response.data;

      const catagoryList = Object.keys(jsonData.trainings);
      const ListOfCourcesData = Object.values(jsonData.trainings);

      const flattenedData = ListOfCourcesData.flatMap(
        (innerArray) => innerArray
      );

      setSearchElementsData(flattenedData as []);
    } catch (error) {
      console.error("Error fetching API:", error);
    }
  };
  useEffect(() => {
    fetchApiData();
  }, []);

  const {
    setButtonIndex,
    buttonIndex,
    clickOnSearch,
    setClickOnSearch,
    currentTab,
    setCurrentTab,

    inputValue,
    setInputValue,
    loadingVisible,
    setLoadingVisible,
    searchData,
    setSearchData,
    setTabVisible,
    tabVisible,
    fetchSearchData,
    setFetchSearchData,
    isDropdownOpen,
    setIsDropdownOpen,
    setCategoryVisible,
  } = useContext(MyContext);

  const handleClick = (Course: ListOfCoursesDataType) => {

    setDropSearchData([]);
    setDropdownOpen([])
    setSelectedCourse(Course);
    setInputValue("");
    const url = `/courses/${encodeURIComponent(
      Course.category
    )}/${encodeURIComponent(Course.id)}?id=${encodeURIComponent(
      Course.id
    )}&category=${encodeURIComponent(Course.category)}`;

    route.push(url);
  };

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
        course.name.toLowerCase().includes(value.toLowerCase())
      );

      setDropSearchData(filteredData as []);
    }
  };

  const handleSearchClick = () => {
    // if (selectedCourse?.CourseLink) {
    //   window.open(selectedCourse.CourseLink, "_blank");
    // }
  };

  const clickbackground = () => {
    setDropSearchData([]);
  };

  const ClearButtonClick = () => {
    setLoadingVisible(true);
    setTimeout(() => {
      setDropSearchData([]);
      setInputValue("");
      setSearchData([]);
      setTabVisible(true);
      setClickOnSearch(false);
      setLoadingVisible(false);
    }, 1000);
  };
  const clickOnMain = () => {
    setIsDropdownOpen(false);
    setCategoryVisible(false);
  };

  const handleButtonHover = () => {
    setDropdownOpen(SearchElementsData);
  };

  const handleButtonLeave = () => {
    setDropdownOpen([]);
  };



  // console.log("data", SearchElementsData)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };



  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="bSkilling" content="bSkilling" />
        <link rel="icon" href="/logo.png" />
      </Head>


      {/* <header className="bg-white md:h-[70px]">
        <nav className="flex justify-between items-center w-[92%]  mx-auto">
          <div className="flex md:gap-5  md:flex-row  items-center justify-center md:ml-10 ">
            <div>
              <Link href={"/"}>
                <img
                  src="/logo.png"
                  className="object-contain lg:w-[200px] md:my-0 my-5 h-[50px]"
                  alt=""
                />
              </Link>
            </div>

            <div className="relative">
              <div className="md:mt-0 mt-3">
                <button
                  className="bg-gray text-black px-4 py-2 rounded-md flex items-center hover:bg-subText"
                  onMouseEnter={handleButtonHover}
                  onMouseLeave={handleButtonLeave}
                >
                  <span className="text-[15px] font-semibold">Courses</span>
                  <span className="ml-2"><SlArrowDown className="w-3 h-2" /></span>
                </button>
              </div>
              {dropdownOpen && (
                <div
                  style={{ maxHeight: "500px", overflowY: "auto", width: "600px" }}
                  className="absolute top-7 z-[5000] w-full bg-white rounded-lg shadow-lg mt-2"
                  onMouseEnter={handleButtonHover}
                  onMouseLeave={handleButtonLeave}
                >
                  {dropdownOpen.map((course, index) => (
                    <div
                      key={course.id + index}
                      className="p-2 hover:bg-buttonBlue px-5 hover:text-white cursor-pointer"
                      onClick={() => handleClick(course)}
                    >
                      {course.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="relative font-SourceSans flex justify-end md:w-[500px]">
              <input
                type="text"
                className="md:w-[400px] text-sm rounded-lg border-[1px] bg- border-buttonBlue lg:py-1 lg:mt-[3px] px-5   focus:border-Buttoncolor focus:ring-buttonBlue"
                placeholder="Enter Course Name"
                required
                value={inputValue}
                onChange={handleSearch}
              />
              <div className="absolute right-2 top-2 md:top-3">
                <BiSearchAlt />
              </div>
              {dropSearchData.length > 0 && (
                <div
                  style={{ maxHeight: "500px", overflowY: "auto" }}
                  className="absolute z-[5000] w-full  bg-white rounded-lg shadow-lg md:right-[-50px] mt-10"
                >
                  {dropSearchData.map((course, index) => (
                    <div
                      key={course.id + index}
                      className="p-2 hover:bg-buttonBlue  px-5 hover:text-white cursor-pointer"
                      onClick={() => handleClick(course)}
                    >
                      {course.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div
            className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${menuOpen ? 'top-[9%]' : 'top-[-100%]'
              } md:w-auto  w-full flex items-center px-5`}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <Link style={{ textDecoration: "none" }} href={"/about"}>
                <li className={`${aboutUnderline === true
                  ? "text-buttonBlue border-b-2 underline-offset-2"
                  : "text-black hover:text-darkBlue  no-underline"
                  }`}
                >

                  {" "}
                  About

                </li>
              </Link>
              <Link style={{ textDecoration: "none" }} href={"/blogs"}>
                <li className={`${blogUnderline === true
                  ? "text-buttonBlue border-b-2 underline-offset-2"
                  : "text-black hover:text-darkBlue  no-underline"
                  }`}>

                  Solution

                </li>
              </Link>

              <Link style={{ textDecoration: "none" }} href="https://sfjbs.talentrecruit.com/career-page" target="blank">
                <li className="text-black hover:text-darkBlue  no-underline">
                  Careers
                </li>
              </Link>

            </ul>
          </div>
          <div className="flex items-center gap-6">
            <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
              Sign in
            </button>
            <div onClick={toggleMenu} className="text-3xl cursor-pointer md:hidden">
              
              {menuOpen ? (
                <>
                  <div className="w-2 h-0.5 bg-black transform rotate-45 mb-1"></div>
                  <div className="w-6 h-0.5 bg-black hidden"></div>
                  <div className="w-6 h-0.5 bg-black transform -rotate-45"></div>
                </>
              ) : (
                <>
                  <div className="w-6 h-0.5 bg-black mb-1"></div>
                  <div className="w-6 h-0.5 bg-black mb-1"></div>
                  <div className="w-6 h-0.5 bg-black"></div>
                </>
              )}
            </div>

          </div>
        </nav>
      </header> */}

      {navHide && (
        <nav className="md:py-2 md:h-[70px] font-SourceSans  md:p-0 bg-white flex  md:flex-row flex-col md:gap-36 md:justify-between w-full shadow-">
          <div className="flex md:gap-5  md:flex-row flex-col items-center justify-center md:ml-10 ">
            <Link href={"/"}>
              <img
                src="/logo.png"
                className="object-contain lg:w-[200px] md:my-0 my-5 h-[50px]"
                alt=""
              />
            </Link>

            <div className="relative hidden md:block">
              <div className="md:mt-0 mt-3">
                <button
                  className="bg-gray text-black px-4 py-2 rounded-md flex items-center hover:bg-subText"
                  onMouseEnter={handleButtonHover}
                  onMouseLeave={handleButtonLeave}
                >
                  <span className="text-[15px] font-semibold">Courses</span>
                  <span className="ml-2"><SlArrowDown className="w-3 h-2" /></span>
                </button>
              </div>
              {dropdownOpen && (
                <div
                  style={{ maxHeight: "500px", overflowY: "auto", width: "600px" }}
                  className="absolute top-7 z-[5000] w-full bg-white rounded-lg shadow-lg mt-2"
                  onMouseEnter={handleButtonHover}
                  onMouseLeave={handleButtonLeave}
                >


                  {dropdownOpen.map((course, index) => (
                    <div
                      key={course.id + index}
                      className="p-2 hover:bg-lightBlue px-5 hover:text-white cursor-pointer"
                      onClick={() => handleClick(course)}
                    >
                      {course.name}
                    </div>
                  ))}


                </div>
              )}
            </div>

            <div className="relative font-SourceSans flex justify-end md:w-[500px]">
              <input
                type="text"
                className="md:w-[400px] text-sm rounded-lg border-[1px] bg- border-buttonBlue lg:py-1 lg:mt-[3px] px-5   focus:border-Buttoncolor focus:ring-buttonBlue"
                placeholder="Enter Course Name"
                required
                value={inputValue}
                onChange={handleSearch}
              />
              <div className="absolute right-2 top-2 md:top-3">
                <BiSearchAlt />
              </div>
              {dropSearchData.length > 0 && (
                <div
                  style={{ maxHeight: "500px", overflowY: "auto" }}
                  className="absolute z-[5000] w-full  bg-white rounded-lg shadow-lg md:right-[-50px] mt-10"
                >
                  {dropSearchData.map((course, index) => (
                    <div
                      key={course.id + index}
                      className="p-2 hover:bg-buttonBlue  px-5 hover:text-white cursor-pointer"
                      onClick={() => handleClick(course)}
                    >
                      {course.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="md:mr-6 pb-1 flex font-SourceSans text-sm  justify-center gap-3 md:gap-5 md:my-0 my-5">
            <div className="flex gap-4 md:gap-5">
              <div className="mt-3 text-black hover:cursor-pointer font-bold">
                <Link style={{ textDecoration: "none" }} href={"/about"}>
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
            <a
              target="_blank"
              rel="noreferrer"
              className="underline-0 md:block hidden"
              href="https://lms.bskilling.com/login/index.php"
              style={{ textDecoration: "none" }}
            >
              <button className="flex rounded-md gap-1 text-white mt-1 border hover:text-white border-lightBlue transition duration-500 hover:scale-105 ease-out  bg-lightBlue hover:bg-lightBlue py-[8px] focus:ring-1 focus:outline-none focus:ring-buttonBlue font-medium  text-sm px-4 ">
                <p>Login</p>
              </button>
            </a>
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
      <div className="fixed bottom-[2.4rem] right-[6.8rem]" style={{zIndex:1000}}>
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


      <footer className=" bg-white font-SourceSans  px-10 py-6 md:pt-12">
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
              +91-9740808405
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
      </footer>
      <div className="h-[50px] w-full"></div>
    </>
  );
};

export default Layout;
