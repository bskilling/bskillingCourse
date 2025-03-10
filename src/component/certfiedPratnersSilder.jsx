/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

const CertifiedPartnersSlider = () => {
  const logos = [
    '/edu&car/AWS.png',
    '/edu&car/company.png',
    '/edu&car/2.jpg',
    '/edu&car/micro.png',
    '/edu&car/6.png',
    '/edu&car/1.png',
    '/edu&car/4.png',
    '/edu&car/3.png',
  ];

  return (
    <section className="pt-10 pb-10 bg-gray-100">
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">
          Certified Learning Partners
        </h2>

        {/* Swiper Container */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 30 },
            768: { slidesPerView: 4, spaceBetween: 30 },
            1024: { slidesPerView: 5, spaceBetween: 40 },
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          speed={1000}
          className="max-w-6xl mx-auto"
        >
          {logos.map((src, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="p-4 bg-white h-40 rounded-lg shadow-md flex items-center justify-center">
                <img
                  src={src}
                  alt="Partner Logo"
                  width={120}
                  height={120}
                  className="object-contain"
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
