import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectFade } from "swiper";
interface slider {
  text1: string;
  image: string;
  id: string;
}
const Slider = () => {
  const slides = [
    {
      text1: "Enrol with us today and take your career to the next level",

      image: "/carosel/ban4.png",
      id: "slide1",
    },
    {
      text1:
        "Get certified by globally recognized bodies and deepen your expertise",

      image: "/carosel/ban5.png",
      id: "slide2",
    },
    {
      text1:
        "Upskill yourself with trending technologies and become future-ready",

      image: "/carosel/ban6.png",
      id: "slide3",
    },
  ];
  return (
    <>
      <div className="relative w-auto">
        {/* <div className="w-full h-[60vh] flex overflow-x-auto snap-mandatory snap-x scrollbar-hide"> */}
        <div className="w-full">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            navigation={true}
            autoplay={true}
            loop={true}
            speed={1300}
            pagination={true}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {slides.map(({ text1, image, id }) => (
              <SwiperSlide key={id}>
                <div className="h-[48vh] w-full relative flex justify-center items-center">
                  <Image
                    className="object-cover w-full h-full"
                    layout="fill"
                    src={image}
                    alt=""
                  />
                  <div className="absolute inset-0 bg-green opacity-20"></div>
                  <div className="px-4 md:container text-center z-50">
                    <h1 className="text-4xl md:text-3xl  text-white drop-shadow-md py-4">
                      {text1}
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};
export default Slider;
