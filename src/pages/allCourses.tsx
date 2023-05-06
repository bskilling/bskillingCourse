import CourseCard from "components/CourseCard";
import { MyContext } from "context/PageContext";
import CourseDetails from "data/CoursesData";
import BrowseAllCourse from "data/browseAllCourse";
import { useRouter } from "next/router";
import { ReactNode, useContext, useState, useEffect } from "react";
import { AiFillCaretDown, AiOutlineMenu } from "react-icons/ai";
import LoaderSvg from "../pages/../../public/loading .svg";

const AllCourses = () => {
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
  const [categoryVisible, setCategoryVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  function handleBack() {
    setLoadingVisible(true);
    setTimeout(() => {
      setLoadingVisible(false);
      router.back();
    }, 700);
  }

  const TabButtonClick = (x: number) => {
    setLoadingVisible(true);
    setAllCourseButtonIndex(x);
    setTimeout(() => {
      setLoadingVisible(false);
    }, 400);
  };
  const clickOnCategory = () => {
    setCategoryVisible((pre) => !pre);
  };
  console.log(AllCourseButtonIndex, "button index");
  return (
    <>
      <section className="bg-gray">
        <div className="">
          <div className="flex gap-14  w-full">
            <div className="flex ml-20">
              <div className="flex items-end mb-2 gap-">
                <button
                  className="text-left font-semibold text-black "
                  onClick={clickOnCategory}
                >
                  <p className="text-sm">Browse</p>
                  <p>Categories</p>
                </button>
                <div onClick={clickOnCategory} className="mb-1">
                  <AiFillCaretDown />
                </div>
              </div>
              {categoryVisible ? (
                <div className="absolute ml- mt-[75px] z-[1000] w-[] bg-white  rounded-lg shadow-lg ">
                  {CourseDetails.map(({ categoryName }, index) => (
                    <div
                      key={categoryName}
                      className="px-5 py-2 hover:bg-buttonBlue text-black hover:text-white  cursor-pointer"
                      onClick={() => setButtonIndex(index)}
                    >
                      {categoryName}
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>

            <div className=" hidden md:block pt-5  mb-5 w-full   ">
              <div
                className="-mb-0.5 flex justify-start sm:block"
                aria-label="Tabs"
              >
                <ul className="flex md:flex-row flex-col items-center md:justify-start space-x-5">
                  {BrowseAllCourse.slice(0, 12).map(
                    ({ categoryName }, index) => (
                      <li
                        key={categoryName}
                        className={`font-semibold ${
                          index === AllCourseButtonIndex
                            ? "text-black border-b-4  border-buttonBlue "
                            : "text-black hover:text-black "
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
                    )
                  )}
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
                        <div className="origin-top-right absolute  z-[6000] left-[px] right-0 mt-5  w-24 rounded-md shadow-lg bg-white ring-1     ">
                          {BrowseAllCourse.slice(12).map(
                            ({ categoryName }, index) => (
                              <button
                                key={categoryName}
                                className="text-black hover:text-white text-right  block px-4 border-0 w-full hover:bg-buttonBlue   cursor-pointer py-2 text-sm  "
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
          </div>
        </div>
        <div className="md:container mb-10 md:mx-auto">
          <section className="py-10 ">
            <div className="grid grid-cols-1  md:grid-cols-4   gap-4 w-full">
              {BrowseAllCourse[AllCourseButtonIndex].ListOfCourse.map(
                (data) => {
                  return (
                    <>
                      <CourseCard key={data.id} data={data} />
                    </>
                  );
                }
              )}
            </div>
          </section>
        </div>
      </section>
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
    </>
  );
};
export default AllCourses;
