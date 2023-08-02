import React from "react";
import { FaTrophy } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsCalendarDate, BsFillPeopleFill } from "react-icons/bs";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import moment from "moment";
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
const CourseCard: React.FC<CourseCardProps> = ({ data }) => {
  console.log(data);

  const calculateDiscountedPrice = () => {
    if (data.discount === 0) {
      return data.price; // If the discount is 0, return the original price
    } else {
      // Calculate the discounted price using the formula: discountedPrice = price - (price * (discount / 100))
      const discountedPrice = data.price - data.price * (data.discount / 100);
      return Math.floor(discountedPrice); // Remove decimal and return the integer part
    }
  };
  return (
    <>
      <Link
        // target="_blank"
        // rel="noreferrer"
        className="no-underline md:hover:scale-105  h-full transition duration-500  ease-in hover:no-underline hover:text-blue-500"
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
                className="object-cover border-b h-44 w-full border-slate-300"
                src={data.thumbnail}
                alt=""
              />
              <div className="absolute bottom-0 flex gap-1 rounded-t-md left-0 bg-red-700 px-3">
                {" "}
                {data.discount === 0 ? (
                  ""
                ) : (
                  <span className="font-bold  text-white">
                    {" "}
                    {data.discount}%&nbsp; OFF
                  </span>
                )}
              </div>
              <div className="absolute bottom-0 flex gap-1 rounded-t-md right-0 bg-buttonBlue px-5">
                {data.discount === 0 ? (
                  <span className="font-bold text-white">₹ {data.price}</span>
                ) : (
                  <React.Fragment>
                    <span className="font-bold text-white">
                      ₹ {calculateDiscountedPrice()}
                    </span>
                  </React.Fragment>
                )}
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

              <div className="text-subText flex  justify-left   item gap-2  flex-col mt-2  ">
                <div className="flex gap-8">
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
                <div className="flex gap-8">
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
              <div className={`${data.batches.length > 0 ? "" : "h-12"}`}>
                {" "}
                <div className="relative flex overflow-x-hidden">
                  {data.batches.length > 0 && (
                    <div className=" whitespace-nowrap">
                      {data.batches.map((item, index) => (
                        <span className="ml-5 text-sm " key={index}>
                          <Marquee speed={80}>
                            Upcoming Batches&nbsp; &nbsp;|&nbsp; &nbsp;
                            {item.name} &nbsp; | &nbsp;{" "}
                            {moment(item.startDate).format("YYYY-MMM-DD")}{" "}
                            &nbsp;-&nbsp;
                            {moment(item.endDate).format("YYYY-MMM-DD")}
                          </Marquee>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Link>
    </>
  );
};
export default CourseCard;
