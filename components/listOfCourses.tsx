import { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import CourseDetails from "data/CoursesData";
import CourseCard from "./CourseCard";
import courseSearchData from "data/courseSearchData";
import { MyContext, MyProvider } from "context/PageContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineMenu } from "react-icons/ai";
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

const ListOfCourses: NextPage<{}> = () => {
  const router = useRouter();
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
    AllCourseButtonIndex,
    setAllCourseButtonIndex,
  } = useContext(MyContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  useEffect(() => {
    setFetchSearchData(courseSearchData);
  }, []);

  const [] = useState();
  const handleClick = (CourseName: string) => {
    setDropSearchData([]);
    setInputValue(CourseName);
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
  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      setLoadingVisible(true);
      setTimeout(() => {
        const filteredData = fetchSearchData.filter((course) =>
          course.CourseName.toLowerCase().includes(inputValue.toLowerCase())
        );
        setTabVisible(false);
        setClickOnSearch(true);
        setSearchData(filteredData);
        setLoadingVisible(false);
      }, 1000);
    }
  }
  const handleSearchClick = () => {
    console.log(searchData);
    if (tabVisible === false) {
    }
    if (inputValue === "") {
      setClickOnSearch(false);
    } else {
      setLoadingVisible(true);
      setTimeout(() => {
        const filteredData = fetchSearchData.filter((course) =>
          course.CourseName.toLowerCase().includes(inputValue.toLowerCase())
        );
        setTabVisible(false);
        setSearchData(filteredData);
        setClickOnSearch(true);
        setLoadingVisible(false);
      }, 1000);
    }
  };
  const clickbackground = () => {
    setDropSearchData([]);
  };

  const TabButtonClick = (x: number) => {
    setLoadingVisible(true);
    setIsDropdownOpen(false);
    setButtonIndex(x);
    setTimeout(() => {
      setLoadingVisible(false);
    }, 400);
  };

  const ClearButtonClick = () => {
    if (clickOnSearch === false) {
    } else {
      setLoadingVisible(true);
      setTimeout(() => {
        setDropSearchData([]);
        setInputValue("");
        setSearchData([]);
        setTabVisible(true);
        setClickOnSearch(false);
        setLoadingVisible(false);
      }, 1000);
    }
  };
  const ClickOnBrowseAllCourses = () => {
    setLoadingVisible(true);
    setAllCourseButtonIndex(0);
    setTimeout(() => {
      setLoadingVisible(false);
      router.push("/allCourses");
    }, 1000);
  };
  console.log(searchData, "search data");
  return (
    <div className="pt-[50px] md:container  md:mx-auto">
      <div className="md:justify-center md:mx-auto">
        <p className="font-bold font-SourceSans text-xl text-center ">
          Trending Courses
        </p>
      </div>

      <div className="  flex justify-center pt-5  mb-5 w-full   ">
        <nav className="-mb-0.5 flex justify-center " aria-label="Tabs">
          <ul className="flex md:flex-row flex-col items-center md:justify-start space-x-5">
            {CourseDetails.slice(0, 8).map(({ categoryName }, index) => (
              <li
                key={categoryName}
                className={` -4 ${
                  index === buttonIndex
                    ? "border-b-4 border-buttonBlue"
                    : "text-gray-400 hover:text-gray-500 hover:border-buttonBlue"
                }`}
              >
                <button
                  type="button"
                  className="px-4 pb-1 font-semibold"
                  onClick={() => TabButtonClick(index)}
                >
                  {categoryName}
                </button>
              </li>
            ))}
            {CourseDetails.length > 8 && (
              <li className="relative">
                <button
                  type="button"
                  className="px-4 pb-1 font-semibold"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen}
                >
                  <AiOutlineMenu />
                </button>
                {isDropdownOpen && (
                  <div className="origin-top-right  absolute right-0 mt-2 w-40 rounded-md  shadow-lg bg-white ring-1 ring-black ring-opacity-5 ">
                    {CourseDetails.slice(8).map(({ categoryName }, index) => (
                      <button
                        key={categoryName}
                        className="text-gray-700 block w-full px-4 py-2 text-sm hover:bg-gray-100 hover:bg-[#eae7fe] hover:text-black"
                        onClick={() => TabButtonClick(index + 8)}
                      >
                        {categoryName}
                      </button>
                    ))}
                  </div>
                )}
              </li>
            )}
          </ul>
        </nav>
      </div>

      <section className={"py-4"}>
        <div className="grid grid-cols-1 slide-in transition duration-1000  ease-in md:grid-cols-4 gap-4 w-full">
          {searchData.map((data) => {
            return (
              <div key={data.id}>
                <CourseCard data={data} />
              </div>
            );
          })}
        </div>
      </section>
      {/* UI SECTION  */}
      {/* {loadingVisible === true ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-[#3d3c3d] opacity-75 flex flex-col items-center justify-center">
          <div className="loader ease-linear rounded-full border-8 border-t-4 border-buttonBlue h-16 w-16 mb-4"></div>
          <h2 className="text-center text-white text-xl font-semibold">
            Loading...
          </h2>
          <p className="w-1/3 text-center text-white">
            This may take a few seconds, please don't close this page.
          </p>
        </div>
      ) : (
        ""
      )} */}

      <section className="py-10 ">
        <div className="grid grid-cols-1  md:grid-cols-4   gap-4 w-full">
          {CourseDetails[buttonIndex].ListOfCourse.map((data) => {
            return (
              <>
                <CourseCard key={data.id} data={data} />
              </>
            );
          })}
        </div>
      </section>

      <div>
        <div className="flex  pb-8 justify-center">
          <button
            onClick={ClickOnBrowseAllCourses}
            className=" text-white bg-Buttoncolor transition duration-500 hover:scale-105 ease-out   py-2 focus:ring-1 focus:outline-none focus:ring-buttonBlue font-medium rounded-lg text-sm px-4  "
          >
            Browse All Courses
          </button>
        </div>
      </div>
    </div>
  );
};
export default ListOfCourses;
