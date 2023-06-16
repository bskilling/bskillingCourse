import React, { useEffect, useState } from "react";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaTrophy } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import courseSearchData from "data/courseSearchData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CourseSlider = () => {
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const [randomEightElements, setRandomEightElements] = useState([]);

  useEffect(() => {
    courseSearchData = shuffleArray(courseSearchData);

    const randomEight = courseSearchData.slice(0, 8);

    setRandomEightElements(randomEight);
  }, []);

  // const [swiperRef, setSwiperRef] = useState(0);
  // const prevHandler = () => {
  //   swiperRef.slidePrev();
  // };

  // const nextHandler = () => {
  //   swiperRef.slideNext();
  // };
  return (
    <>
      <div>
        <div className="flex gap-5 flex-col ">
          {randomEightElements.map((data) => (
            <a
              key={data.id}
              target="_blank"
              rel="noreferrer"
              className="no-underline md:hover:scale-105  transition duration-500 max-w-[350px] ease-in hover:no-underline hover:text-blue-500"
              href={data.CourseLink}
            >
              <section className="pt-1">
                <div
                  id="parent"
                  className="flex bg-white flex-col min-h-[430px] shadow-lg rounded-xl  p-2 "
                >
                  <div className="relative">
                    <img
                      className="object-cover border-b border-slate-300"
                      src={data.imageSrc}
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
          ))}
        </div>
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          slidesPerGroup={1}
          breakpoints={{
            769: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 20,
              Autoplay: true,
              loop: true,
              speed: 800,

              pagination: {},
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 20,
              Autoplay: true,
              loop: true,
              speed: 800,

              pagination: {},
            },
          }}
          autoplay={true}
          loop={true}
          speed={1600}
          effect=""
        ></Swiper>
      </div>
    </>
  );
};
export default CourseSlider;
