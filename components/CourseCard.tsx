import React from "react";
import { FaTrophy } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsCalendarDate, BsFillPeopleFill } from "react-icons/bs";
import Link from "next/link";

interface CourseCardProps {
  data: ListOfCoursesDataType;
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
const CourseCard: React.FC<CourseCardProps> = ({ data }) => {
  return (
    <>
      <Link
        // target="_blank"
        // rel="noreferrer"
        className="no-underline md:hover:scale-105  transition duration-500  ease-in hover:no-underline hover:text-blue-500"
        href={`/courses/${encodeURIComponent(
          data.category
        )}/${encodeURIComponent(data.name)}?id=${encodeURIComponent(
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
                className="object-cover border-b h-44 w-full border-slate-300"
                src={data.thumbnail}
                alt=""
              />
              <div className="absolute bottom-0 flex gap-1 rounded-t-md right-0 bg-buttonBlue px-5">
                <span className="font-bold text-white">₹ {data.price}</span>
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
              <div className={`${"" ? "" : "py-3"}`}></div>
              <div className="relative flex overflow-x-hidden">
                {data.batches.length > 0 && (
                  <div className="animate-marquee whitespace-nowrap">
                    {data.batches.map((item, index) => (
                      <span className="ml-5 text-sm ">
                        Upcoming batches | {item.startDate}
                      </span>
                    ))}
                  </div>
                )}

                {data.batches.length > 0 && (
                  <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
                    {data.batches.map((item, index) => (
                      <span className="ml-5 text-sm ">
                        Registration ends | {item.endRegistrationDate}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </Link>
    </>
  );
};
export default CourseCard;
