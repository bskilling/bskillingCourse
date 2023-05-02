import React from "react";
import { FaTrophy } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { FaChalkboardTeacher } from "react-icons/fa";
FaChalkboardTeacher;

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
  };
}
const CourseCard: React.FC<CourseCardProps> = ({ data }) => {
  console.log(data.imageSrc);
  return (
    <>
      <section className="">
        <div
          id="parent"
          className="flex bg-white flex-col shadow-lg rounded-xl  p-2 "
        >
          <div>
            <img
              className="object-cover border-b border-slate-300"
              src={data.imageSrc}
              alt=""
            />
          </div>
          <div className="flex flex-col px-4 mt-2">
            <div className="">
              <p className="text-lg min-h-[60px] overflow-hidden text-overflow-ellipsis font-semibold   w-full">
                {data.CourseName.length > 50
                  ? `${data.CourseName.substring(0, 50)}...`
                  : data.CourseName}
              </p>
            </div>

            <div className="text-subText flex flex-col mt-2  ">
              <div className="flex mt-1 gap-5">
                <div className="mt-[2px]  bg-[#eae7fe] flex flex-col items-center justify-center w-[30px] h-[30px] rounded-full">
                  <FaTrophy color="#300ffa" />
                </div>
                <div>
                  <p>{data.certificate}</p>
                </div>
              </div>
              <div className="flex mt-1 gap-5">
                <div className="mt-[2px] bg-[#eae7fe] flex flex-col items-center justify-center w-[30px] h-[30px] rounded-full">
                  <BiTimeFive color="#300ffa" />
                </div>
                <div>
                  <p> {data.timePeriod}</p>
                </div>
              </div>
              <div className="flex mt-1 gap-5">
                <div className="mt-[2px] bg-[#eae7fe] flex flex-col items-center justify-center w-[30px] h-[30px] rounded-full">
                  <FaChalkboardTeacher color="#300ffa" />
                </div>
                <div>
                  <p> {data.classType}</p>
                </div>
              </div>
            </div>

            <div className="rounded-md bg-[#eae7fe] mt-3 px-1 py-2">
              <p className="text-buttonBlue ">
                Classes starting on{" "}
                <span className="font-semibold">{data.StartDate}</span>
              </p>
            </div>
            <div className="flex mt-5 py-2 justify-center gap-5">
              <div>
                <p className="">
                  Price:{" "}
                  <span className="font-bold text-GreenText">
                    ₹ {data.price}
                  </span>
                </p>
              </div>
              <div>
                <a target="_blank" rel="noreferrer" href={data.CourseLink}>
                  <button className="px-2 py-2 text-white bg-buttonBlue rounded-lg  hover:bg-buttonBlue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    View Course
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CourseCard;
