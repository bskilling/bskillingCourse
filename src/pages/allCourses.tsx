import CourseCard from "components/CourseCard";
import { MyContext } from "context/PageContext";
import CourseDetails from "data/CoursesData";
import BrowseAllCourse from "data/browseAllCourse";
import { useRouter } from "next/router";
import { ReactNode, useContext, useState, useEffect } from "react";
import { AiFillCaretDown, AiOutlineMenu } from "react-icons/ai";
import LoaderSvg from "../pages/../../public/loading .svg";
import { useMediaQuery } from "react-responsive";
import ContactPopUp from "components/ContactPopUp";
import Head from "next/head";

const AllCourses = () => {
  const router = useRouter();
  useEffect(() => {
    const { buttonIndexs } = router.query;
    if (buttonIndexs) {
      const index = parseInt(buttonIndexs as string);
      setAllCourseButtonIndex(index);
      router.push("/allCourses");
    }
  }, [router.query]);

  const isSmallScreen = useMediaQuery({ maxWidth: 1020 });
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
    router.push("/allCourses");
    setAllCourseButtonIndex(x);
    setTimeout(() => {
      setLoadingVisible(false);
      setIsDropdownOpen(false);
    }, 400);
  };
  const clickOnCategory = (x: number) => {
    setCategoryVisible((pre) => !pre);
    setLoadingVisible(true);
    setTimeout(() => {
      setLoadingVisible(false);
      setCategoryVisible(false);
      setAllCourseButtonIndex(x), setCategoryVisible(false);
    }, 700);
  };

  return (
    <>
      <Head>
        <title>bSkilling</title>
        <meta
          name="bSkilling"
          content="Unlock Your Potential with the Trending Online Courses of Today | Expand Your Knowledge and Skills"
        />

        <link rel="icon" href="/favicon.png" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3PVZC9K8BH"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3PVZC9K8BH');
            `,
          }}
        />
      </Head>
      <section className="bg-gray">
        <div className="flex pt-5 w-full">
          <div className="flex md:gap-4 w-full">
            <div className="flex justify-start w-full md:w-fit   ml-8 md:ml-20">
              <div className="flex  items-end mt-3 mb-3 md:mb-2 gap-">
                <button
                  className="text-left md:gap-0 gap-1 md:mt-0 mt-4 block  "
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
                <div className="absolute mt-[100px] md:mt-[75px] z-[1000] w-[]  bg-white  rounded-lg shadow-lg ">
                  {BrowseAllCourse.map(({ categoryName }, index) => (
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
              // <div className="block p-5 w-full">
              //   <div className="mx-auto md:pt-5 w-full max-w-5xl">
              //     <label htmlFor="tabs" className="sr-only">
              //       Courses
              //     </label>
              //     <select
              //       id="tabs"
              //       className="block w-full py-2 pl-5 pr-10 text-base leading-6 text-black hover:text-black bg-white border-[1px] border-buttonBlue rounded-md focus:border-buttonBlue focus:ring-buttonBlue sm:text-sm sm:leading-5"
              //       value={buttonIndex}
              //       onChange={(event) =>
              //         TabButtonClick(parseInt(event.target.value))
              //       }
              //     >
              //       {CourseDetails.map(({ categoryName }, index) => (
              //         <option key={categoryName} value={index}>
              //           {categoryName}
              //         </option>
              //       ))}
              //     </select>
              //   </div>
              // </div>
              <div className="hidden md:block pt-5  mb-5 w-full">
                <div
                  className="-mb-0.5 flex justify-start sm:block"
                  aria-label="Tabs"
                >
                  <ul className="flex md:flex-row flex-col items-center md:justify-start space-x-5">
                    {BrowseAllCourse.slice(0, 11).map(
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
                    {BrowseAllCourse.length > 11 && (
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
                          <div className="origin-top-right absolute  z-[6000] left-[px] right-0 mt-5  rounded-md shadow-lg bg-white ring-1     ">
                            {BrowseAllCourse.slice(11).map(
                              ({ categoryName }, index) => (
                                <button
                                  key={categoryName}
                                  className="text-black hover:text-white text-right  block px-8 border-0 w-full hover:bg-buttonBlue   cursor-pointer py-2 text-sm  "
                                  onClick={() => TabButtonClick(index + 11)}
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
        </div>
        <div
          onClick={() => {
            setIsDropdownOpen(false);
            setCategoryVisible(false);
          }}
          className="  mb-10 "
        >
          <section className="py-5 md:container md:mx-auto md:py-10 ">
            <div className="grid grid-cols-1 md:p-0 p-5   md:grid-cols-4   gap-4 w-full">
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
