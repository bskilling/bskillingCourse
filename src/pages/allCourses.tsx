import axios from "axios";
import CourseCard from "components/CourseCard";
import { MyContext } from "context/PageContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AiFillCaretDown, AiOutlineMenu } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
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
const AllCourses = () => {
  const [datas, setDatas] = useState<string[]>([]);
  const [eachCourceList, SetEachCourceList] = useState<
    ListOfCoursesDataType[][]
  >([]);
  const router = useRouter();
  useEffect(() => {
    const { buttonIndexs } = router.query;
    if (buttonIndexs) {
      const index = parseInt(buttonIndexs as string);
      setAllCourseButtonIndex(index);
      router.push("/allCourses");
    }
  }, [router.query]);

  const fetchApiData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_TRAINING_BASE_URL}/api/outsource/trainingList?tenant=2`
      );
      const jsonData = response.data;

      const catagoryList = Object.keys(jsonData.trainings);
      setDatas(catagoryList);
      const ListOfCourcesData = Object.values(jsonData.trainings);
      setDatas(catagoryList);
      SetEachCourceList(ListOfCourcesData as ListOfCoursesDataType[][]);

      setApierror(false);
    } catch (error) {
      setApierror(true);
      console.error("Error fetching API:", error);
    }
  };
  // datas.sort((a, b) => b.localeCompare(a));
  useEffect(() => {}, []);
  const [apiEro, setApierror] = useState(false);
  const [errorMessage, setErrormessage] = useState(
    "We are in the process of updating our course offerings. Please check in some time."
  );
  useEffect(() => {
    fetchApiData();
  }, []);

  const isSmallScreen = useMediaQuery({ maxWidth: 1020 });
  const {
    loadingVisible,
    setLoadingVisible,
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
        <meta
          name="p:domain_verify"
          content="7bb84546e514612864b5b9d71d1649e4"
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
        <div className="flex pt-5 px-8 w-full">
          <div className="flex w-full gap-8 ">
            <div className="flex justify-  w-full  md:w-fit md:">
              <div className="flex items-center  mb-5 md:mb-2 gap-">
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
                <div className="absolute mt-[100px] md:mt-[90px] z-[1000] w-[]  bg-white  rounded-lg shadow-lg ">
                  {datas.map((categoryName, index) => (
                    <div
                      key={categoryName + index}
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
              <div className="hidden md:block pt-5  mb-5 w-full">
                <div
                  className="-mb-0.5 flex justify-start sm:block"
                  aria-label="Tabs"
                >
                  <ul className="flex md:flex-row flex-col items-center md:justify-start space-x-5">
                    {datas.slice(0, 11).map((categoryName, index) => (
                      <li
                        key={categoryName + index}
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
                    ))}
                    {datas.length > 11 && (
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
                            {datas.slice(11).map((categoryName, index) => (
                              <button
                                key={categoryName + index}
                                className="text-black hover:text-white text-right  block px-8 border-0 w-full hover:bg-buttonBlue   cursor-pointer py-2 text-sm  "
                                onClick={() => TabButtonClick(index + 11)}
                              >
                                {categoryName}
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
        </div>
        <div
          onClick={() => {
            setIsDropdownOpen(false);
            setCategoryVisible(false);
          }}
          className="  mb-10 "
        >
          <section className="py-5 md:container md:mx-auto md:py-10 ">
            <div className="grid grid-cols-1  md:p-0 p-5 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4   gap-4 w-full">
              {eachCourceList[AllCourseButtonIndex]?.map((data, index) => {
                return <CourseCard key={data.id + index} data={data} />;
              })}
            </div>

            {apiEro === true ? (
              <div className="text-center md:h-screen mt-12 text-lg font-semibold">
                {errorMessage}
              </div>
            ) : (
              ""
            )}
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
