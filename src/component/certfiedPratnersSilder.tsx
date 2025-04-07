/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { Autoplay, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import Head from 'next/head';

const CertifiedPartnersSlider = () => {
  const [isHovered, setIsHovered] = useState(null);
  const [domLoaded, setDomLoaded] = useState(false);

  // To prevent hydration mismatch
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const partners = [
    {
      id: 1,
      name: 'AWS',
      logo: '/edu&car/AWS.png',
      size: { width: 130, height: 80 },
    },
    {
      id: 2,
      name: 'Company',
      logo: '/edu&car/company.png',
      size: { width: 140, height: 75 },
    },
    {
      id: 3,
      name: 'Partner 3',
      logo: '/edu&car/2.jpg',
      size: { width: 130, height: 85 },
    },
    {
      id: 4,
      name: 'Microsoft',
      logo: '/edu&car/micro.png',
      size: { width: 150, height: 70 },
    },
    {
      id: 5,
      name: 'Partner 5',
      logo: '/edu&car/6.png',
      size: { width: 130, height: 80 },
    },
    {
      id: 6,
      name: 'Partner 6',
      logo: '/edu&car/1.png',
      size: { width: 140, height: 75 },
    },
    {
      id: 7,
      name: 'Partner 7',
      logo: '/edu&car/4.png',
      size: { width: 130, height: 85 },
    },
    {
      id: 8,
      name: 'Partner 8',
      logo: '/edu&car/3.png',
      size: { width: 140, height: 75 },
    },
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      {/* Add custom styles in the head to ensure they're properly loaded */}
      <Head>
        <style>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          
          .swiper-slide {
            opacity: 1 !important;
            filter: none !important;
          }
          
          .swiper-slide-shadow-left,
          .swiper-slide-shadow-right {
            display: none !important;
          }
        `}</style>
      </Head>

      <div className="container mx-auto px-4">
        {/* Header with decorative elements */}
        <div className="relative mb-14 text-center">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-20 h-1 bg-blue-500"></div>
          <h2 className="inline-block text-3xl font-bold text-gray-800 mt-4">
            Our Certified Partners
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            We collaborate with industry leaders to deliver world-class learning experiences
          </p>
        </div>

        {/* Partners Slider */}
        {domLoaded && (
          <div className="relative">
            <div className="py-6 relative z-10">
              <Swiper
                modules={[Autoplay, EffectCoverflow]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView="auto"
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                }}
                breakpoints={{
                  320: { slidesPerView: 1.2, spaceBetween: 40 },
                  480: { slidesPerView: 1.8, spaceBetween: 50 },
                  640: { slidesPerView: 2.5, spaceBetween: 60 },
                  768: { slidesPerView: 3, spaceBetween: 70 },
                  1024: { slidesPerView: 4, spaceBetween: 80 },
                }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                speed={800}
                className="max-w-6xl mx-auto py-12"
              >
                {partners.map(partner => (
                  <SwiperSlide
                    key={partner.id}
                    className="flex justify-center w-auto"
                    style={{ width: 'auto' }}
                  >
                    <div
                      className="relative group w-56 h-40 flex items-center justify-center bg-white rounded-lg shadow-none transition-all duration-300 overflow-hidden border border-white"
                      style={{
                        transform: isHovered === partner.id ? 'scale(1.05)' : 'scale(1)',
                        boxShadow:
                          isHovered === partner.id
                            ? '0 15px 30px -10px rgba(59, 130, 246, 0.1)'
                            : 'none',
                      }}
                      // @ts-expect-error
                      onMouseEnter={() => setIsHovered(partner.id)}
                      onMouseLeave={() => setIsHovered(null)}
                    >
                      {/* Logo with precise sizing */}
                      <img
                        src={partner.logo}
                        alt={`${partner.name} Logo`}
                        width={partner.size.width}
                        height={partner.size.height}
                        className="object-contain transition-all duration-300 group-hover:scale-110 max-h-28"
                        style={{
                          maxWidth: partner.size.width,
                          filter:
                            isHovered === partner.id ? 'contrast(1.1) brightness(1.05)' : 'none',
                        }}
                      />

                      {/* Subtle branding indicator on hover */}
                      <div className="absolute bottom-2 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-xs font-medium text-blue-600 bg-white px-3 py-1 rounded-full">
                          {partner.name}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Sliding text banner */}
          </div>
        )}
      </div>
    </section>
  );
};

export default CertifiedPartnersSlider;
