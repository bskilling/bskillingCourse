import Head from "next/head";
import { ReactNode, useContext, useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

import { MyContext } from "context/PageContext";
import courseSearchData from "data/courseSearchData";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

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
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [dropSearchData, setDropSearchData] = useState<ListOfCoursesDataType[]>(
    []
  );
  const [selectedCourse, setSelectedCourse] = useState<SearchCourseArray>();

  const [SearchElementsData, setSearchElementsData] = useState<
    ListOfCoursesDataType[]
  >([]);
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
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="bSkilling" content="bSkilling" />
        <link rel="icon" href="/logo.png" />
      </Head>

      {navHide && (
        <nav className="md:py-4 font-SourceSans  md:p-0 bg-white flex  md:flex-row flex-col md:gap-36 md:justify-between w-full  shadow-">
          <div className="flex md:gap-5  md:flex-row flex-col items-center justify-center md:ml-10 ">
            <Link href={"/"}>
              <img
                src="/logo.png"
                className="object-contain lg:w-[200px] md:my-0 my-5 h-[70px]"
                alt=""
              />
            </Link>

            <div className="relative font-SourceSans   flex justify-end md:w-[500px]">
              <input
                type="text"
                className="md:w-[400px] rounded-lg border-[1px] bg- border-buttonBlue lg:py-1 lg:mt-[3px] px-5   focus:border-Buttoncolor focus:ring-buttonBlue"
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

          <div className="md:mr-6 flex font-SourceSans  justify-center gap-3 md:gap-5 md:my-0 my-5">
            <div className="flex gap-4 md:gap-5">
              <div className="mt-3 text-buttonBlue hover:cursor-pointer font-semibold">
                <Link style={{ textDecoration: "none" }} href={"/about"}>
                  <p
                    className={`${aboutUnderline === true
                      ? "text-buttonBlue border-b-2 underline-offset-2"
                      : "text-buttonBlue  no-underline"
                      }`}
                  >
                    {" "}
                    About
                  </p>
                </Link>
              </div>
              {/* <div className="mt-3 text-buttonBlue text-center hover:cursor-pointer font-semibold">
              <p>Corporate Training</p>
            </div> */}
              <div className="mt-3 text-buttonBlue font-SourceSans hover:cursor-pointer font-semibold">
                <Link style={{ textDecoration: "none" }} href={"/blogs"}>
                  <p
                    className={`${blogUnderline === true
                      ? "text-buttonBlue border-b-2 underline-offset-2"
                      : "text-buttonBlue  no-underline"
                      }`}
                  >
                    Blogs
                  </p>
                </Link>
              </div>
              <div className="mt-3 text-buttonBlue font-SourceSans hover:cursor-pointer font-semibold">
                <Link style={{ textDecoration: "none" }} href="https://sfjbs.talentrecruit.com/career-page" target="blank">
                  <p className="text-buttonBlue  no-underline">
                    Careers
                  </p>
                </Link>
              </div>
              <div className=" md:flex hidden items-center">
                {" "}
                <div className="w-[1px] bg-buttonBlue  h-[50px]"></div>
              </div>
            </div>
            <a
              target="_blank"
              rel="noreferrer"
              className="underline-0 md:block hidden"
              href="https://lms.bskilling.com/login/index.php"
              style={{ textDecoration: "none" }}
            >
              <button className="flex rounded-md gap-1 text-white mt-2 border hover:text-white border-buttonBlue transition duration-500 hover:scale-105 ease-out  bg-buttonBlue hover:bg-buttonBlue py-[8px] focus:ring-1 focus:outline-none focus:ring-buttonBlue font-medium  text-sm px-4 ">
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
                <button className="flex gap-1 rounded-md text-white mt-2 border hover:text-white border-buttonBlue transition duration-500 hover:scale-105 ease-out  bg-buttonBlue hover:bg-buttonBlue py-[8px] focus:ring-1 focus:outline-none focus:ring-buttonBlue font-medium  text-sm px-4 ">
                  <p>Login</p>
                </button>
              </a>
            </div>
          </div>
        </nav>
      )}

      <main className=" font-SourceSans font-normal">{children}</main>
      <footer className=" bg-white font-SourceSans  px-10 py-6 md:pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 md:flex md:flex-row justify-between items-start">
          <div className="col-span-2 pb-4 md:pb-0 ">
            <div className=" p-4 md:p-0 pl-6 ">
              <p className="font-semibold text-lg pb-2 text-center ">
                Find us on
              </p>
              <div className="grid grid-cols-3   gap- i ">
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
                      src="/icon/twitter.svg"
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
