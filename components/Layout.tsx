import { ReactNode, useContext, useState, useEffect } from "react";
import Head from "next/head";
import { FiLogIn } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { BiSearchAlt } from "react-icons/bi";

import Link from "next/link";
import { MyContext } from "context/PageContext";
import courseSearchData from "data/courseSearchData";

type Props = {
  children: ReactNode;
  pageTitle?: string;
};
interface searchCourseArray {
  id: string;
  CourseName: string;
  certificate: string;
  imageSrc: string;
  timePeriod: string;
  StartDate: string;
  classType: string;
  price: string;
  CourseLink: string;
}

const Layout = ({ children, pageTitle = "bSkilling" }: Props) => {
  useEffect(() => {
    setFetchSearchData(courseSearchData);
  }, []);
  const [selectedCourse, setSelectedCourse] = useState<searchCourseArray>();
  const {
    setButtonIndex,
    buttonIndex,
    clickOnSearch,
    setClickOnSearch,
    currentTab,
    setCurrentTab,
    dropSearchData,
    setDropSearchData,
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
  } = useContext(MyContext);
  const handleClick = (Course: searchCourseArray) => {
    setDropSearchData([]);
    setSelectedCourse(Course);
    setInputValue("");
    window.open(Course.CourseLink, "_blank");
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    if (value === "") {
      setDropSearchData([]);
    } else {
      const filteredData = fetchSearchData.filter((course) =>
        course.CourseName.toLowerCase().includes(value.toLowerCase())
      );

      setDropSearchData(filteredData);
    }
  };
  // function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
  //   if (event.key === "Enter") {
  //     setLoadingVisible(true);
  //     setTimeout(() => {
  //       const filteredData = fetchSearchData.filter((course) =>
  //         course.CourseName.toLowerCase().includes(inputValue.toLowerCase())
  //       );
  //       setTabVisible(false);
  //       setClickOnSearch(true);
  //       setSearchData(filteredData);
  //       setLoadingVisible(false);
  //     }, 1000);
  //   }
  // }
  const handleSearchClick = () => {
    if (selectedCourse?.CourseLink) {
      window.open(selectedCourse.CourseLink, "_blank");
    }
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
  console.log(dropSearchData);
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="bSkilling" content="bSkilling" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <nav className="md:py-4   md:p-0 bg-white flex  md:flex-row flex-col md:gap-36 md:justify-between w-full  shadow-">
        <div className="flex gap-5  md:flex-row flex-col items-center justify-center md:ml-10 ">
          <img
            src="/logo.png"
            className="w-[200px] md:my-0 my-5 h-fit"
            alt=""
          />
          <div className="flex md:flex-row flex-col gap-2">
            <div className="relative flex justify-end md:w-[500px]">
              <input
                type="text"
                className=" md:w-[400px] rounded-lg border-[1px] bg- border-buttonBlue lg:py-1 lg:mt-[3px] px-5   focus:border-Buttoncolor focus:ring-buttonBlue "
                placeholder="Enter Course Name"
                required
                value={inputValue}
                onChange={handleSearch}
                // onKeyDown={handleKeyDown}
              />
              <div className="absolute mt-2 md:mt-3 mr-2">
                <BiSearchAlt />
              </div>
              {dropSearchData.length > 0 && (
                <div className="absolute z-[6000] w-full  bg-white rounded-lg  shadow-lg  -mr-14 mt-10">
                  {dropSearchData.map((course) => (
                    <div
                      key={course.id}
                      className="p-2 hover:bg-buttonBlue px-5 hover:text-white cursor-pointer"
                      onClick={() => handleClick(course)}
                    >
                      {course.CourseName}
                    </div>
                  ))}
                </div>
              )}

              {/* {dropSearchData.length > 0 && (
              <div className="absolute w-full bg-white rounded-lg shadow-lg mt-2">
                {dropSearchData.map((course) => (
                  <div
                    key={course.id}
                    className="p-2 hover:bg-[#eae7fe] cursor-pointer"
                    onClick={() => handleClick(course.CourseName)}
                  >
                    {course.CourseName}
                  </div>
                ))}
              </div>
            )} */}
            </div>
            {/* <div className="flex flex-col justify-center">
              <button
                onClick={handleSearchClick}
                className="text-white transition duration-500 hover:scale-105 ease-out  bg-Buttoncolor hover:bg-buttonBlue py-[10px] focus:ring-1 focus:outline-none focus:ring-buttonBlue font-medium rounded-lg text-sm px-4   "
              >
                Search
              </button>
            </div>

            <div className="flex flex-col  justify-center">
              <button
                onClick={ClearButtonClick}
                className="text-balck border hover:text-white border-buttonBlue transition duration-500 hover:scale-105 ease-out  bg-white hover:bg-buttonBlue py-2 focus:ring-1 focus:outline-none focus:ring-buttonBlue font-medium rounded-lg text-sm px-4  "
              >
                Clear
              </button>
            </div> */}
          </div>
        </div>

        <div className="md:mr-6 flex justify-center gap-5 md:my-0 my-5">
          <div className="mt-3 text-buttonBlue hover:cursor-pointer font-semibold">
            <p>Corporate Training</p>
          </div>
          <div className="mt-3 text-buttonBlue hover:cursor-pointer font-semibold">
            <p>Blogs</p>
          </div>
          <div className="flex items-center">
            {" "}
            <div className="w-[1px] bg-buttonBlue  h-[50px]"></div>
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            className="underline-0"
            href="https://bskilling.melimu.com/login/index.php"
          >
            <button className="flex gap-1 text-white mt-2 border hover:text-white border-buttonBlue transition duration-500 hover:scale-105 ease-out  bg-buttonBlue hover:bg-buttonBlue py-[8px] focus:ring-1 focus:outline-none focus:ring-buttonBlue font-medium rounded-lg text-sm px-4 ">
              <p>Login</p>
            </button>
          </a>
        </div>
      </nav>

      <main className=" font-SourceSans font-normal">{children}</main>
      <footer className=" bg-white  px-10 py-6 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 md:flex md:flex-row justify-between items-start">
          <div className="col-span-2 pb-4 md:pb-0 ">
            <a className="flex justify-start items-center pl-6 md:pl-0">
              <div className="">
                <img src="/logo.png" alt="logo" width={200} height={200} />
              </div>
            </a>
          </div>
          <div className="text-sm p-4 md:p-0 ">
            <p className="font-semibold">INDIA - HEAD OFFICE</p>
            <p className="">Uma Sree Dream World, Unit -2,</p>
            <p className="">B-Block, 4th Floor, Kudlu Gate,</p>
            <p className="">Hosur Main Road,</p>
            <p className="">Bangalore – 560068. Karnataka, INDIA</p>
          </div>

          <div className="text-sm p-4 md:p-0 ">
            <p className="font-semibold">Contact</p>
            <p className="">Email : support@bskilling.com</p>
            <p className="">Phone : 9845348601</p>
          </div>

          <div className="col-span-2 p-4 md:p-0 pl-6 ">
            <p className="font-semibold text-sm pb-2 text-zinc-500">
              Find us on
            </p>
            <div className="grid-cols-5 gap-2 inline-grid ">
              <a
                className="hover:scale-105 transition-all"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="w-8 h-8 facebook"
                  width="100"
                  height="100"
                  viewBox="0 0 187 187"
                >
                  <rect
                    width="187"
                    height="187"
                    fill="#3b5998"
                    rx="18"
                    ry="18"
                  />
                  <path
                    fill="#fefefe"
                    d="M131 79l0 -12c0,-6 4,-7 6,-7 3,0 18,0 18,0l0 -27 -24 0c-27,0 -33,20 -33,32l0 14 -15 0 0 19 0 12 16 0c0,35 0,77 0,77l30 0c0,0 0,-42 0,-77l23 0 1 -12 2 -19 -24 0z"
                  />
                </svg>
              </a>
              <a
                className="hover:scale-105 transition-all"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="w-8 h-8 twitter"
                  width="100"
                  height="100"
                  viewBox="0 0 384 384"
                >
                  <rect
                    width="384"
                    height="384"
                    fill="#1DA1F2"
                    rx="37"
                    ry="37"
                  />
                  <path
                    fill="#fefefe"
                    d="M313 118c-9,4 -19,6 -29,8 11,-7 19,-16 22,-28 -9,6 -20,10 -31,12 -9,-9 -22,-15 -37,-15 -27,0 -49,22 -49,49 0,4 0,7 1,11 -41,-2 -78,-22 -102,-51 -5,7 -7,15 -7,24 0,17 9,32 22,41 -8,0 -16,-2 -23,-6 0,0 0,0 0,1 0,6 2,12 4,17 6,16 20,27 36,31 -4,1 -8,1 -13,1 -3,0 -6,0 -9,-1 6,20 25,34 46,34 -17,14 -38,21 -61,21 -5,0 -8,0 -12,0 22,14 48,22 76,22 78,0 125,-54 138,-110 2,-10 3,-20 3,-30 0,-2 0,-4 0,-6 10,-7 18,-15 25,-25z"
                  />
                </svg>
              </a>
              <a
                className="hover:scale-105 transition-all"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="w-8 h-8 linkedin"
                  width="100"
                  height="100"
                  viewBox="0 0 201 201"
                >
                  <rect
                    width="201"
                    height="201"
                    fill="#0072b1"
                    rx="19"
                    ry="19"
                  />
                  <polygon
                    fill="#fefefe"
                    points="39 102 39 162 68 162 68 97 68 80 39 80"
                  />
                  <path
                    fill="#fefefe"
                    d="M54 39c-8 0-15 7-15 15 0 7 7 14 15 14 7 0 14-7 14-14 0-8-7-15-14-15zM161 105c-2-15-9-25-30-25-12 0-20 5-24 11l0 0 0-11-23 0 0 16 0 66 24 0 0-41c0-10 2-21 15-21 13 0 14 13 14 22l0 40 25 0 0-45 0 0c0-4 0-8-1-12z"
                  />
                </svg>
              </a>
              <a
                className="hover:scale-105 transition-all"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="w-8 h-8 instragram"
                  width="100"
                  height="100"
                  viewBox="0 0 384 384"
                >
                  <rect
                    width="384"
                    height="384"
                    fill="#fbad50"
                    rx="37"
                    ry="37"
                  />
                  <path
                    fill="#fff"
                    d="M142 59l100 0c22,0 42,9 56,24 14,14 23,34 23,56l0 106c0,22 -9,41 -23,56 -14,14 -34,23 -56,23l-100 0c-22,0 -42,-9 -56,-23 -15,-15 -24,-34 -24,-56l0 -106c0,-22 9,-42 24,-56 14,-15 34,-24 56,-24zm100 23l-100 0c-16,0 -30,6 -41,16 -10,11 -17,25 -17,41l0 106c0,15 7,30 17,40 11,11 25,17 41,17l100 0c16,0 30,-6 40,-17 11,-10 17,-25 17,-40l0 -106c0,-16 -6,-30 -17,-41 -10,-10 -24,-16 -40,-16z"
                  />
                  <path
                    fill="#fff"
                    d="M192 123c19,0 36,7 48,20 12,12 20,29 20,48 0,19 -8,35 -20,48 -12,12 -29,20 -48,20 -19,0 -36,-8 -48,-20 -13,-13 -20,-29 -20,-48 0,-19 7,-36 20,-48 12,-13 29,-20 48,-20zm32 35c-8,-8 -20,-13 -32,-13 -13,0 -24,5 -33,13 -8,9 -13,20 -13,33 0,12 5,24 13,32 9,8 20,13 33,13 12,0 24,-5 32,-13 8,-8 14,-20 14,-32 0,-13 -6,-24 -14,-33z"
                  />
                  <circle cx="265" cy="119" r="16" fill="#fff" />
                </svg>
              </a>
              <a
                className="hover:scale-105 transition-all"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="w-8 h-8 youtube"
                  width="100"
                  height="100"
                  viewBox="0 0 5067 5067"
                >
                  <rect
                    width="5067"
                    height="5067"
                    fill="#c4302b"
                    rx="489"
                    ry="489"
                  />
                  <path
                    fill="#fefefe"
                    d="M3110 2497l-933 504 0 -776 0 -236 421 229 512 279zm1116 -684c0,0 -33,-248 -137,-357 -131,-144 -278,-145 -346,-153 -483,-36 -1208,-36 -1208,-36l-2 0c0,0 -725,0 -1209,36 -67,8 -214,9 -346,153 -103,109 -137,357 -137,357 0,0 -35,292 -35,583l0 36 0 238c0,291 35,583 35,583 0,0 34,248 137,357 132,144 304,139 381,154 277,28 1175,36 1175,36 0,0 726,-1 1209,-37 68,-9 215,-9 346,-153 104,-109 137,-357 137,-357 0,0 35,-292 35,-583l0 -223 0 -51c0,-291 -35,-583 -35,-583z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto text-left md:text-center text-sm text-zinc-400 pt-4 md:pt-8 md:p-0 p-4 pl-6">
          <p>Bskilling</p>
          <p>
            Copyright © 2022. All Rights Reserved. Designed by Deedbee Social
            Ventures.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
