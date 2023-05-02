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
      text1: "Bringing agility and scale with the right strategy",

      image: "/carosel/strategy.jpg",
      id: "slide1",
    },
    {
      text1: "Nurturing and empowering a future-ready workforce",

      image: "/carosel/nurture.jpg",
      id: "slide2",
    },
    {
      text1: "Mobilizing the right talent for your business needs",

      image: "/carosel/mobilize.jpg",
      id: "slide3",
    },
    {
      text1: "A thought leader and trusted partner for over a decade",

      image: "/carosel/thought.jpg",
      id: "slide4",
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
            navigation={false}
            autoplay={true}
            loop={true}
            speed={1300}

            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {slides.map(({ text1, image, id }) => (
              <SwiperSlide key={id}>
                <div className="h-[65vh] w-full relative flex justify-center items-center">
                  <Image
                    className="object-cover w-full h-full"
                    layout="fill"
                    src={image}
                    alt=""
                  />
                  <div className="absolute inset-0 bg-green opacity-20"></div>
                  <div className="px-4 md:container text-center z-50">
                    <h1 className="text-4xl md:text-5xl  text-white drop-shadow-md py-4">
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
