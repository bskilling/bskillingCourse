import { MyContext } from "context/PageContext";
import CourseDetails from "data/CoursesData";
import BrowseAllCourse from "data/browseAllCourse";
import { useRouter } from "next/router";
import { ReactNode, useContext, useState, useEffect } from "react";
import { AiFillCaretDown, AiOutlineMenu } from "react-icons/ai";
import { FaBeer } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
const Tabs = () => {
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
    categoryVisible,
    setCategoryVisible,
    isDropdownOpen,
    setIsDropdownOpen,
  } = useContext(MyContext);

  const TabButtonClick = (x: number) => {
    setLoadingVisible(true);
    setIsDropdownOpen(false);
    setAllCourseButtonIndex(x);
    const url = "/allCourses?buttonIndexs=" + x;
    setTimeout(() => {
      setLoadingVisible(false);
      // router.push("/allCourses")
      window.open(url, "_blank");
    }, 1000);
  };
  const [selectedCategory, setSelectedCategory] = useState(null);
  const DropdownOptionClick = (x: number) => {
    setButtonIndex(x);
    setTabVisible(false);
  };
  const clickOnCategory = (x: number) => {
    setLoadingVisible(true);
    setIsDropdownOpen(false);
    setAllCourseButtonIndex(x);
    const url = "/allCourses?buttonIndexs=" + x;
    setTimeout(() => {
      setLoadingVisible(false);
      setCategoryVisible(false);
      // router.push("/allCourses")
      window.open(url, "_blank");
    }, 1000);
  };
  const isSmallScreen = useMediaQuery({ maxWidth: 1020 });
  console.log(AllCourseButtonIndex, "button index");
  return (
    <div className="flex  w-full">
      <div className="flex md:gap-4 w-full">
        <div className="flex justify-start w-full md:w-fit   ml-8 md:ml-20">
          <div className="flex  items-end mb-5 md:mb-2 gap-">
            <button
              className="text-left md:gap-0 md:mt-0 mt-4  "
              onClick={() => setCategoryVisible((pre) => !pre)}
            >
              <p className="md:text-sm">Browse</p>
              <p>Categories</p>
            </button>
            <div
              onClick={() => setCategoryVisible((pre) => !pre)}
              className="mb-1"
            >
              <AiFillCaretDown />
            </div>
          </div>
          {categoryVisible ? (
            <div className="absolute mt-[100px] md:mt-[75px] z-[1000] w-[] bg-white  rounded-lg shadow-lg ">
              {CourseDetails.map(({ categoryName }, index) => (
                <div
                  key={categoryName}
                  className="px-5 py-2 hover:bg-buttonBlue text-black hover:text-white  cursor-pointer"
                  onClick={() => clickOnCategory(index)}
                >
                  {categoryName}
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>

        {isSmallScreen ? (
          ""
        ) : (
          <div className=" hidden md:block pt-5  mb-5 w-full   ">
            <div
              className="-mb-0.5 flex justify-start sm:block"
              aria-label="Tabs"
            >
              <ul className="flex md:flex-row flex-col items-center md:justify-start space-x-5">
                {BrowseAllCourse.slice(0, 12).map(({ categoryName }, index) => (
                  <li
                    key={categoryName}
                    className={`${
                      index === AllCourseButtonIndex
                        ? ""
                        : "text-white hover:text-white "
                    }`}
                  >
                    <button
                      type="button"
                      className="px-4 pb-1 "
                      onClick={() => TabButtonClick(index)}
                    >
                      {categoryName}
                    </button>
                  </li>
                ))}
                {BrowseAllCourse.length > 12 && (
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
                      <div className="origin-top-right absolute  z-[6000] left-[px] right-0 mt-5  w- rounded-md shadow-lg bg-white ring-1     ">
                        {BrowseAllCourse.slice(12).map(
                          ({ categoryName }, index) => (
                            <button
                              key={categoryName}
                              className="text-black hover:text-white text-right   block px-9 border-0 w-full hover:bg-buttonBlue   cursor-pointer py-2 text-sm  hover:text-gray-900"
                              onClick={() => TabButtonClick(index + 12)}
                            >
                              {categoryName}
                            </button>
                          )
                        )}
                      </div>
                    )}
                  </li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>

      {loadingVisible === true ? (
        <div
          className="inset-0 bg-[#3d3c3d] opacity-75 fixed  flex w-full h-full items-center justify-center duration-300 transition-opacity"
          style={{ zIndex: 6000 }}
        >
          <div className="flex-col">
            <div className="w-24 h-24 ">
              <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-[#3d3c3d] opacity-75 flex flex-col items-center justify-center">
                <div className="loader ease-linear rounded-full border-8 border-t-4 border-buttonBlue h-16 w-16 mb-4"></div>
                <h2 className="text-center text-white text-xl font-semibold">
                  Loading...
                </h2>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Tabs;
