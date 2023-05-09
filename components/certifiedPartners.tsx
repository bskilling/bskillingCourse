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
const CertifiedPartners = () => {
  const logos = [
    "/edu&car/micro.png",
    "/edu&car/company.png",
    "/edu&car/1.png",
    "/edu&car/2.jpg",
    "/edu&car/3.png",
    "/edu&car/4.png",
    "/edu&car/5.png",
  ];
  return (
    <>
      <div className="relative bg-white w-auto">
        {/* <div className="w-full h-[60vh] flex overflow-x-auto snap-mandatory snap-x scrollbar-hide"> */}

        <div className="w-full md:container md:flex-row flex- flex justify-center flex-wrap  gap-6 mx-auto">
          <h1 className="text-base  font-semibold pt-12 text-black  md:text-left">
            Certified Learning <br /> Partner
          </h1>
          {logos.map((x, index) => (
            <div key={index}>
              <div className="h-36   flex justify-center   relative cursor-pointer">
                <img
                  className="w-[150px] object-contain mt-1 "
                  src={x}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default CertifiedPartners;
