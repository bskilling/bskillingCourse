/* eslint-disable react-hooks/exhaustive-deps */
import { MyContext } from '@/component/context/PageContext';
import CourseDetails from '@/component/data/CoursesData';
import courseSearchData from '@/component/data/courseSearchData';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useMediaQuery } from 'react-responsive';
import CourseCard from './CourseCard';
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
  discount?: string;
  upcoming?: string;
}
interface TabProps {
  data: string[];
  CoursesCategoryData: ListOfCoursesDataType[][];
}

interface UpcomingBatch {
  capacity: string;
  description: string;
  endDate: string;
  endRegistrationDate: string;
  id: string;
  isPaid: string;
  name: string;
  startDate: string;
  status: string;
}
interface ListOfCoursesDataType {
  batches: UpcomingBatch[];
  category: string;
  currency: string;
  description: string;
  discount: number;
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
const ListOfCourses: React.FC<TabProps> = ({ data, CoursesCategoryData }) => {
  const router = useRouter();
  const {
    setButtonIndex,
    buttonIndex,
    clickOnSearch,
    setClickOnSearch,
    setCurrentTab,
    setDropSearchData,
    inputValue,
    setInputValue,
    setLoadingVisible,
    searchData,
    setSearchData,
    setTabVisible,
    tabVisible,
    fetchSearchData,
    setFetchSearchData,
    AllCourseButtonIndex,
    setAllCourseButtonIndex,
    setIsDropdownOpenInListCrs,
    isDropdownOpenInListCrs,
  } = useContext(MyContext);

  useEffect(() => {
    if (CoursesCategoryData.length === 0) {
      setApierror(true);
    } else {
      setApierror(false);
    }
    setFetchSearchData(courseSearchData);
  }, [CoursesCategoryData]);
  const [apiEro, setApierror] = useState(false);
  const [errorMessage, setErrormessage] = useState(
    'We are in the process of updating our course offerings. Please check in some time.'
  );
  const handleClick = (CourseName: string) => {
    setDropSearchData([]);
    setInputValue(CourseName);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    if (value === '') {
      setDropSearchData([]);
    } else {
      const filteredData = fetchSearchData.filter(course =>
        course.CourseName.toLowerCase().includes(value.toLowerCase())
      );

      setDropSearchData(filteredData);
    }
  };
  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      setLoadingVisible(true);
      setTimeout(() => {
        const filteredData = fetchSearchData.filter(course =>
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
    if (tabVisible === false) {
    }
    if (inputValue === '') {
      setClickOnSearch(false);
    } else {
      setLoadingVisible(true);
      setTimeout(() => {
        const filteredData = fetchSearchData.filter(course =>
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
    setIsDropdownOpenInListCrs(false);
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
        setInputValue('');
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
      window.open('/allCourses', '_blank');
    }, 1000);
  };
  const isSmallScreen = useMediaQuery({ maxWidth: 1020 });

  return (
    <div className="pt-[50px] ">
      <div className="md:justify-center md:mx-auto">
        <p className="font-bold font-SourceSans text-xl text-center ">Trending Courses</p>
      </div>
      {apiEro === true ? (
        <div className="text-center mt-12 text-lg font-semibold">{errorMessage}</div>
      ) : (
        ''
      )}
      {isSmallScreen ? (
        <div className="block p-5 ">
          <div className="mx-auto md:pt-5 w-full max-w-5xl">
            <label htmlFor="tabs" className="sr-only">
              Courses
            </label>
            <select
              id="tabs"
              className="block w-full py-2 pl-5 pr-10 text-base leading-6 text-black hover:text-black bg-white border-[1px] border-buttonBlue rounded-md focus:border-buttonBlue focus:ring-buttonBlue sm:text-sm sm:leading-5"
              value={buttonIndex}
              onChange={event => TabButtonClick(parseInt(event.target.value))}
            >
              {data.map((categoryName, index) => (
                <option key={categoryName + index} value={index}>
                  {categoryName}
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : (
        <div className=" md:container    md:mx-auto flex flex-wrap md:flex-auto justify-center pt-5  mb-5 w-full   ">
          <nav className="-mb-0.5 flex justify-center " aria-label="Tabs">
            <ul className="flex md:flex-row flex-col  items-center md:justify-start space-x-5">
              {data.slice(0, 12).map((categoryKey, index) => (
                <li
                  key={categoryKey + index}
                  className={` -4 ${
                    index === buttonIndex
                      ? 'border-b-4 border-buttonBlue'
                      : 'text-gray-400 hover:text-gray-500 hover:border-buttonBlue'
                  }`}
                >
                  <button
                    type="button"
                    className="px-4 pb-1 font-semibold"
                    onClick={() => TabButtonClick(index)}
                  >
                    {categoryKey}
                  </button>
                </li>
              ))}
              {data.length > 12 && (
                <li className="relative">
                  <button
                    type="button"
                    className="px-4 pb-1 font-semibold"
                    onClick={() => setIsDropdownOpenInListCrs(!isDropdownOpenInListCrs)}
                    aria-haspopup="true"
                    aria-expanded={isDropdownOpenInListCrs}
                  >
                    <AiOutlineMenu />
                  </button>
                  {isDropdownOpenInListCrs && (
                    <div className="origin-top-right z-[1000] absolute right-0 mt-2 w-40 rounded-md  shadow-lg bg-white ring-1 ring-black ring-opacity-5 ">
                      {data.slice(12).map((categoryKey, index) => (
                        <button
                          key={index + categoryKey}
                          className="text-gray-700 block w-full px-6 py-2 hover:bg-buttonBlue text-right text-sm hover:bg-gray-100  hover:text-white"
                          onClick={() => TabButtonClick(index + 12)}
                        >
                          {categoryKey}
                        </button>
                      ))}
                    </div>
                  )}
                </li>
              )}
            </ul>
          </nav>
        </div>
      )}

      <section className="" onClick={() => setIsDropdownOpenInListCrs(false)}>
        <section
          onClick={() => setIsDropdownOpenInListCrs(false)}
          className={'py-4 md:container  md:mx-auto'}
        >
          {/* <div className="grid grid-cols-1 slide-in transition duration-1000  ease-in md:grid-cols-4 gap-4 w-full">
            {searchData.map((data, index) => {
              return (
                <div key={data.id + index}>
                  <CourseCard data={CoursesCategoryData} />
                </div>
              );
            })}
          </div> */}
        </section>

        <section
          onClick={() => setIsDropdownOpenInListCrs(false)}
          className="py-10 md:container  md:mx-auto "
        >
          <div className="grid grid-cols-1  md:p-0 p-5 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4   gap-4 w-full">
            {CoursesCategoryData[buttonIndex]?.slice(0, 4).map((data, index) => {
              return (
                <>
                  <CourseCard key={index} data={data} />
                </>
              );
            })}
          </div>
        </section>
      </section>

      <div>
        <div className="flex  pb-8 justify-center">
          <Link href={'/allCourses'}>
            <button className=" text-white rounded-md bg-Buttoncolor transition duration-500 hover:scale-105 ease-out   py-2 focus:ring-1 focus:outline-none focus:ring-buttonBlue font-medium  text-sm px-4  ">
              Browse All Courses
            </button>
          </Link>
        </div>
      </div>
      {/* <div>
        <div className="flex  pb-8 justify-center">
          <button
            onClick={ClickOnBrowseAllCourses}
            className=" text-white bg-Buttoncolor transition duration-500 hover:scale-105 ease-out   py-2 focus:ring-1 focus:outline-none focus:ring-buttonBlue font-medium  text-sm px-4  "
          >
            Browse All Courses
          </button>
        </div>
      </div> */}
    </div>
  );
};
export default ListOfCourses;
