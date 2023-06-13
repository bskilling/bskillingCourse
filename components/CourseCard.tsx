import React from "react";
import { FaTrophy } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";

interface CourseCardProps {
  data: {
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
  };
}
const CourseCard: React.FC<CourseCardProps> = ({ data }) => {
  return (
    <>
      <a
        target="_blank"
        rel="noreferrer"
        className="no-underline md:hover:scale-105  transition duration-500  ease-in hover:no-underline hover:text-blue-500"
        href={data.CourseLink}
      >
        <section className="">
          <div
            id="parent"
            className="flex bg-white flex-col shadow-lg rounded-xl  p-2 "
          >
            <div className="relative">
              <img
                className="object-cover border-b border-slate-300"
                src={data.imageSrc}
                alt=""
              />
              <div className="absolute bottom-0 flex gap-1 rounded-t-md right-0 bg-buttonBlue px-5">
                {/* {data.discount ? (
                  <>
                    <span className="font-bold text- line-through text-buttonBlue">
                      ₹ {data.discount}
                    </span>
                    <span className="font-bold text-white">₹ {data.price}</span>
                  </>
                ) : (
                  <span className="font-bold text-white">₹ {data.price}</span>
                )} */}
                <span className="font-bold text-white">₹ {data.price}</span>
              </div>
            </div>
            <div className="flex flex-col  px-4 mt-2">
              <div className="">
                <p className="text-lg min-h-[60px] overflow-hidden text-overflow-ellipsis font-semibold   w-full">
                  {data.CourseName.length > 50
                    ? `${data.CourseName.substring(0, 50)}...`
                    : data.CourseName}
                </p>
              </div>

              <div className="text-subText flex gap-2 flex-col mt-2  ">
                <div className="flex  gap-5">
                  <div className="flex mt-1 gap-2">
                    <div className="mt-[2px]   bg-buttonBlue flex flex-col items-center justify-center w-[25px] h-[25px] rounded-full">
                      <FaTrophy size={15} color="white" />
                    </div>
                    <div className="mt-1">
                      <p className="text-sm">{data.certificate}</p>
                    </div>
                  </div>
                  <div className="flex mt-1 gap-2">
                    <div className="mt-[2px] bg-buttonBlue flex flex-col items-center justify-center w-[25px] h-[25px] rounded-full">
                      <BiTimeFive size={15} color="white" />
                    </div>
                    <div className="mt-1">
                      <p className="text-sm"> {data.timePeriod}</p>
                    </div>
                  </div>
                </div>
                <div className="flex s mb-5 gap-3">
                  <div className="flex mt-1 gap-2">
                    <div className="mt-[2px]  bg-buttonBlue flex flex-col items-center justify-center w-[25px] h-[25px] rounded-full">
                      <FaChalkboardTeacher size={15} color="white" />
                    </div>

                    <div className="mt-1">
                      <p className="text-sm"> {data.classType}</p>
                    </div>
                  </div>
                  <div className="flex mt-1 gap-2">
                    <div className="mt-[2px]  bg-buttonBlue flex flex-col items-center justify-center w-[25px] h-[25px] rounded-full">
                      <BsCalendarDate size={15} color="white" />
                    </div>
                    <div className="mt-1">
                      <p className="text-sm "> {data.StartDate}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${data.upcoming ? "" : "py-3"}`}></div>
              <div className="relative flex overflow-x-hidden">
                {data.upcoming && (
                  <div className="animate-marquee whitespace-nowrap">
                    <span className="ml-5 text-sm">
                      Upcoming batches | {data.upcoming}
                    </span>
                  </div>
                )}

                {data.upcoming && (
                  <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
                    <span className="ml-5 text-sm ">
                      Upcoming batches | {data.upcoming}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </a>
    </>
  );
};
export default CourseCard;
