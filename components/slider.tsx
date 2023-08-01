import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectFade } from "swiper";
import { useEffect, useRef } from "react";
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

      image: "/carosel/ban2.png",
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
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            navigation={false}
            autoplay={true}
            loop={true}
            speed={500}
            pagination={{ clickable: true }}

            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {slides.map(({ text1, image, id }, index) => (
              <SwiperSlide key={index}>
                <ImageSlider key={index} image={image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* <div className="relative bg-gray w-auto">
        <div className="w-full h-[60vh] flex overflow-x-auto snap-mandatory snap-x scrollbar-hide">
        <div className="w-full h-[90vh]">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            autoplay={true}
            loop={true}
            speed={1300}
            pagination={true}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {slides.map(({ text1, image, id }) => (
              <SwiperSlide key={id}>
                <div className="h-96 md:min-h-[60vh] w-full relative flex justify-center items-center">
                  <img
                    className="md:object-contain object-cover h-fit w-fill object-center md:object-top absolute w-full  h-full"
                    src={image}
                    alt=""
                  />
                  <div className="absolute inset-0 bg-green opacity-20"></div>
                 
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div> */}
    </>
  );
};
export default Slider;
interface ImageSliderProps {
  image: string;
}
const ImageSlider = (props: ImageSliderProps) => {
  const divref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = props.image;
    const div = divref.current;

    img.onload = () => {
      const imgheight = window.innerWidth * (img.height / img.width);
      if (div) {
        div.style.height = `${imgheight}px`;
      }
    };
  }, [props.image]);

  return (
    <>
      <div
        ref={divref}
        className="h-[60vh]
          w-full relative flex justify-center items-center"
      >
        <img
          className="object-cover first-letter:    w-full h-full absolute"
          src={props.image}
          alt=""
        />
      </div>
    </>
  );
};
