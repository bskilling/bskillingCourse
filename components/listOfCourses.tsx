import { NextPage } from "next";
import { useEffect, useState } from "react";
import CourseDetails from "data/CoursesData";
import CourseCard from "./CourseCard";
import courseSearchData from "data/courseSearchData";
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
  useEffect(() => {
    SetFetchSearchData(courseSearchData);
  }, []);
  const [fetchSearchData, SetFetchSearchData] = useState<searchCourseArray[]>(
    []
  );
  const [searchData, SetSearchData] = useState<searchCourseArray[]>([]);
  const [dropSearchData, SetDropSearchData] = useState<searchCourseArray[]>([]);
  const [currentTab, setCurrentTab] = useState("SAP");
  const [buttonIndex, setButtonIndex] = useState(0);
  const [inputValue, SetInputValue] = useState("");
  const [tabVisible, setTabVisible] = useState(true);
  const [loadingVisible, setLoadingVisible] = useState(false);
  const [] = useState();
  const handleClick = (CourseName: string) => {
    SetDropSearchData([]);
    SetInputValue(CourseName);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    SetInputValue(value);
    if (value === "") {
      SetDropSearchData([]);
    } else {
      const filteredData = fetchSearchData.filter((course) =>
        course.CourseName.toLowerCase().includes(value.toLowerCase())
      );

      SetDropSearchData(filteredData);
    }
  };

  const handleSearchClick = () => {
    if (tabVisible === false) {
    }
    if (inputValue === "") {
    } else {
      setLoadingVisible(true);
      setTimeout(() => {
        const filteredData = fetchSearchData.filter((course) =>
          course.CourseName.toLowerCase().includes(inputValue.toLowerCase())
        );
        setTabVisible(false);
        SetSearchData(filteredData);
        setLoadingVisible(false);
      }, 1000);
    }
  };
  const clickbackground = () => {
    SetDropSearchData([]);
  };

  const TabButtonClick = (x: number) => {
    setButtonIndex(x);
  };

  const ClearButtonClick = () => {
    console.log(searchData);
    if (searchData.length !== 0) {
      setLoadingVisible(true);
      setTimeout(() => {
        SetDropSearchData([]);
        SetInputValue("");
        SetSearchData([]);
        setTabVisible(true);
        setLoadingVisible(false);
      }, 1000);
    }
  };
  console.log(searchData, "search data");
  return (
    <>
      {/* Search Bar */}
      <div onClick={clickbackground} className="flex justify-center pb-12">
        <div className="flex md:flex-row flex-col gap-2">
          <div className="relative md:w-[600px]">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <img src="/icon/search.gif" alt="" />
            </div>

            <input
              type="text"
              className=" w-full rounded-lg border-2 py-2  px-10   focus:border-buttonBlue focus:ring-buttonBlue "
              placeholder="Search By Names"
              required
              value={inputValue}
              onChange={handleSearch}
            />

            {dropSearchData.length > 0 && (
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
            )}
          </div>
          <div className="flex flex-col justify-center">
            <button
              onClick={handleSearchClick}
              className="text-white transition duration-500 hover:scale-105 ease-out  bg-buttonBlue hover:bg-buttonBlue py-2 focus:ring-1 focus:outline-none focus:ring-buttonBlue font-medium rounded-lg text-sm px-4   "
            >
              Search
            </button>
          </div>

          <div className="flex flex-col justify-center">
            <button
              onClick={ClearButtonClick}
              className="text-white  transition duration-500 hover:scale-105 ease-out  bg-buttonBlue hover:bg-buttonBlue py-2 focus:ring-1 focus:outline-none focus:ring-buttonBlue font-medium rounded-lg text-sm px-4    "
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      <section className={tabVisible ? "py-0" : "py-10"}>
        <div className="grid grid-cols-1  md:grid-cols-4 gap-4 w-full">
          {searchData.map((data) => {
            return (
              <>
                <CourseCard data={data} />
              </>
            );
          })}
        </div>
      </section>
      {/* UI SECTION  */}
      {loadingVisible === true ? (
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
      )}
      {tabVisible === true ? (
        <div className="mx-auto  w-full max-w-5xl  ">
          <nav
            className="-mb-0.5 flex justify-center sm:block"
            aria-label="Tabs"
          >
            <ul className="flex md:flex-row flex-col items-center md:justify-center space-x-5">
              {CourseDetails.map(({ categoryName }, index) => (
                <li
                  key={categoryName}
                  className={`border-b-2 text-base ${
                    index === buttonIndex
                      ? "border-blue-500 text-blue-500"
                      : "border-transparent text-gray-400 hover:text-gray-500 hover:border-gray-300"
                  }`}
                >
                  <button
                    type="button"
                    className="px-4 pb-5 font-semibold"
                    onClick={() => TabButtonClick(index)}
                  >
                    {categoryName}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : (
        ""
      )}

      {tabVisible === true ? (
        <section className="py-10 ">
          <div className="grid grid-cols-1  md:grid-cols-4   gap-4 w-full">
            {CourseDetails[buttonIndex].ListOfCourse.map((data) => {
              return (
                <>
                  <CourseCard data={data} />
                </>
              );
            })}
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};
export default ListOfCourses;
