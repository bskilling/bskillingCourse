import axios from "axios";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { BiTimeFive } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaChalkboardTeacher, FaTrophy } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
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

interface CourseData {
  // Define the properties for course data here
}

const CourseSlider = () => {
  const router = useRouter();
  const { category, name, id } = router.query;
  const [datas, setDatas] = useState<string[]>([]);
  const [eachCourceList, SetEachCourceList] = useState<
    ListOfCoursesDataType[][]
  >([]);

  const [randomEightElements, setRandomEightElements] = useState<
    ListOfCoursesDataType[]
  >([]);
  const shuffleArray = (array: CourseData[]) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };
  const fetchApiData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_TRAINING_BASE_URL}/api/outsource/trainingList?tenant=2`
      );
      const jsonData = response.data;

      const catagoryList = Object.keys(jsonData.trainings);

      const ListOfCourcesData = Object.values(jsonData.trainings);

      setDatas(catagoryList);
      // const flattenedData = ListOfCourcesData.flatMap(
      //   (innerArray) => innerArray
      // );
      // const shuffledData = shuffleArray(flattenedData as []);
      // const randomElements = shuffledData.slice(0, 8);
      const categoryIndex = catagoryList.indexOf(category as string);
      const coursesForCategory = ListOfCourcesData[
        categoryIndex
      ] as ListOfCoursesDataType[];
      const randomElements = coursesForCategory.slice(0, 8);
      // Now, store the flattened data in the state
      setRandomEightElements(randomElements as []);

      SetEachCourceList(ListOfCourcesData as ListOfCoursesDataType[][]);
    } catch (error) {
      console.error("Error fetching API:", error);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, [category]);

  return (
    <>
      <div>
        <div className="flex  gap-5 flex-col ">
          {randomEightElements.map((data, index) => (
            <Link
              // target="_blank"
              // rel="noreferrer"
              className="no-underline md:max-w-[350px] max-w-[300px] md:hover:scale-105  transition duration-500  ease-in hover:no-underline hover:text-blue-500"
              href={`/courses/${encodeURIComponent(
                data.category
              )}/${encodeURIComponent(data.id)}?id=${encodeURIComponent(
                data.id
              )}&category=${encodeURIComponent(data.category)}`}
            >
              <section className="">
                <div
                  id="parent"
                  className="flex bg-white flex-col shadow-lg rounded-xl  p-2 "
                >
                  <div className="relative">
                    <img
                      className="object-cover border-b h-44 w-full  border-slate-300"
                      src={data.thumbnail}
                      alt=""
                    />
                    <div className="absolute bottom-0 flex gap-1 rounded-t-md right-0 bg-buttonBlue px-5">
                      <span className="font-bold text-white">
                        ₹ {data.price}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col  px-4 mt-2">
                    <div className="">
                      <p className="text-lg min-h-[60px] overflow-hidden text-overflow-ellipsis font-semibold   w-full">
                        {data.name.length > 50
                          ? `${data.name.substring(0, 50)}...`
                          : data.name}
                      </p>
                    </div>

                    <div className="text-subText flex  justify-center item gap-2  flex-col mt-2  ">
                      <div className="flex justify-between px-4">
                        <div className="flex mt-1 gap-2">
                          <div className="mt-[2px]   bg-buttonBlue flex flex-col items-center justify-center w-[25px] h-[25px] rounded-full">
                            <FaTrophy size={15} color="white" />
                          </div>
                          <div className="mt-1">
                            <p className="text-sm">{data.endorsedBy}</p>
                          </div>
                        </div>
                        <div className="flex mt-1 gap-2">
                          <div className="mt-[2px] bg-buttonBlue flex flex-col items-center justify-center w-[25px] h-[25px] rounded-full">
                            <BiTimeFive size={15} color="white" />
                          </div>
                          <div className="mt-1">
                            <p className="text-sm"> {data.duration}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between px-4">
                        <div className="flex mt-1 gap-2">
                          <div className="mt-[2px]  bg-buttonBlue flex flex-col items-center justify-center w-[25px] h-[25px] rounded-full">
                            <FaChalkboardTeacher size={15} color="white" />
                          </div>

                          <div className="mt-1">
                            <p className="text-sm"> {data.level}</p>
                          </div>
                        </div>
                        <div className="flex mt-1 gap-2">
                          <div className="mt-[2px]  bg-buttonBlue flex flex-col items-center justify-center w-[25px] h-[25px] rounded-full">
                            <BsFillPeopleFill size={15} color="white" />
                          </div>
                          <div className="mt-1">
                            <p className="text-sm "> {data.trainingTye}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`${"" ? "" : ""}`}></div>
                    <div className=" flex ">
                      {data.batches.length > 0 && (
                        <div className=" whitespace-nowrap overflow-hidden">
                          {data.batches.map((item, index) => (
                            <span className="ml-5 text-sm ">
                              <Marquee speed={80}>
                                {" "}
                                {item.name} &nbsp; | &nbsp;{" "}
                                {moment(item.startDate).format(
                                  "YYYY-MM-DD HH:mm"
                                )}{" "}
                                &nbsp;-&nbsp;
                                {moment(item.endDate).format(
                                  "YYYY-MM-DD HH:mm"
                                )}
                              </Marquee>
                            </span>
                          ))}
                        </div>
                      )}

                      {/* {data.batches.length > 0 && (
                        <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
                          {data.batches.map((item, index) => (
                            <span className="ml-5 text-sm ">
                              Registration ends | {item.endDate}
                            </span>
                          ))}
                        </div>
                      )} */}
                    </div>
                  </div>
                </div>
              </section>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default CourseSlider;
