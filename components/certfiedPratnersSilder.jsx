import Image from "next/image";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const CertifiedPartnersSlider = () => {
  const logos = [
    "/edu&car/AWS.png",
    "/edu&car/company.png",

    "/edu&car/5.png",
    "/edu&car/2.jpg",
    "/edu&car/micro.png",
    "/edu&car/6.png",
    "/edu&car/1.png",
    "/edu&car/4.png",
    "/edu&car/3.png",
  ];

  return (
    <section className=" md:pt-14  pb-5 pt-7   relative">
      <div className="flex gap-4 justify-center mb-8 ">
        <div className="mt-4 font-bold font-SourceSans text-xl text-center ">
          Certified Learning Partner
        </div>
      </div>

      <div className="lg:container mx-auto  lg:pb-5">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={40}
          slidesPerGroup={4}
          breakPoints={{
            768: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 0,
              autoplay: true,
              loop: true,
              speed: 800,

              pagination: {},
            },
            1024: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 0,
              autoplay: true,
              loop: true,
              speed: 1200,

              pagination: {},
            },
          }}
          autoplay={{
            delay: 2000, // Delay between slides in milliseconds
          }}
          loop={true}
          speed={1200}
        >
          {logos.map((x, index) => (
            <SwiperSlide key={index}>
              <div className="md:h-36  md:pb-0 pb-8 flex  justify-center   relative cursor-pointer">
                <img
                  className="w-[120px] object-contain mt-1 "
                  src={x}
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default CertifiedPartnersSlider;
