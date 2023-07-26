import { MyContext } from "context/PageContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { AiFillCaretDown, AiOutlineMenu } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";

interface TabProps {
  data: string[];
}

const Tabs: React.FC<TabProps> = ({ data }) => {
  data.sort((a, b) => b.localeCompare(a));
  const router = useRouter();
  const {
    setButtonIndex,
    loadingVisible,
    setLoadingVisible,
    setTabVisible,
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
    // const url = "/allCourses?buttonIndexs=" + x;
    setTimeout(() => {
      setLoadingVisible(false);
      // router.push("/allCourses")
      // window.open(url, "_blank");
    }, 1000);
  };
  const TabButtonClickfromDrop = (x: number) => {
    setLoadingVisible(true);
    setIsDropdownOpen(false);
    setAllCourseButtonIndex(x);
    // const url = "/allCourses?buttonIndexs=" + x;
    setTimeout(() => {
      setLoadingVisible(false);
      router.push("/allCourses");
      // window.open(url, "_blank");
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

    setTimeout(() => {
      setLoadingVisible(false);
      setCategoryVisible(false);
      router.push("/allCourses");
      // window.open(url, "_blank");
    }, 1000);
  };
  const isSmallScreen = useMediaQuery({ maxWidth: 1020 });

  return (
    <div className="flex w-full">
      <div className="flex w-full md:gap-4">
        <div className="flex justify-start w-full ml-8 md:w-fit md:ml-20">
          <div className="flex items-end mb-5 md:mb-2 gap-">
            <button
              className="mt-4 text-left md:gap-0 md:mt-0 "
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
              {data.map((categoryKey, index) => (
                <Link
                  style={{ textDecoration: "none" }}
                  key={categoryKey}
                  href={"/allCourses"}
                >
                  <div
                    key={categoryKey}
                    className="px-5 py-2 text-black cursor-pointer hover:bg-buttonBlue hover:text-white"
                    onClick={() => clickOnCategory(index)}
                  >
                    {categoryKey}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>

        {isSmallScreen ? (
          ""
        ) : (
          <div className="hidden w-full pt-5 mb-5 md:block">
            <div
              className="-mb-0.5 flex justify-start sm:block"
              aria-label="Tabs"
            >
              <ul className="flex flex-col items-center space-x-5 md:flex-row md:justify-start">
                {data.map((categoryKey, index) => (
                  <li
                    key={index}
                    className={`${
                      index === AllCourseButtonIndex
                        ? ""
                        : "text-white hover:text-white "
                    }`}
                  >
                    <Link
                      style={{ textDecoration: "none" }}
                      href={"/allCourses"}
                    >
                      <button
                        type="button"
                        className="px-4 pb-1 text-white "
                        onClick={() => TabButtonClick(index)}
                      >
                        {categoryKey}
                      </button>
                    </Link>
                  </li>
                ))}
                {Object.keys(data).length > 11 && (
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
                      <div className="origin-top-right absolute  z-[6000]  right-0 mt-6  min-w-[200px]   rounded-md shadow-lg bg-white ring-1     ">
                        {Object.keys(data)
                          .slice(11)
                          .map((categoryName, index) => (
                            <button
                              key={categoryName}
                              className="text-black hover:text-white text-right py-3   block px- border-0 min-w-[200px] pr-5 w-full hover:bg-buttonBlue   cursor-pointer  text-sm  hover:text-gray-900"
                              onClick={() => TabButtonClickfromDrop(index + 11)}
                            >
                              <p> {categoryName}</p>
                            </button>
                          ))}
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
                <div className="w-16 h-16 mb-4 ease-linear border-8 border-t-4 rounded-full loader border-buttonBlue"></div>
                <h2 className="text-xl font-semibold text-center text-white">
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
