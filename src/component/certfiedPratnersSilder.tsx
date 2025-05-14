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
      size: { width: 100, height: 60 }, // Reduced size
    },
    {
      id: 2,
      name: 'Company',
      logo: '/edu&car/company.png',
      size: { width: 110, height: 55 }, // Reduced size
    },
    {
      id: 3,
      name: 'Partner 3',
      logo: '/edu&car/2.jpg',
      size: { width: 100, height: 65 }, // Reduced size
    },
    {
      id: 4,
      name: 'Microsoft',
      logo: '/edu&car/micro.png',
      size: { width: 120, height: 50 }, // Reduced size
    },
    {
      id: 5,
      name: 'Partner 5',
      logo: '/edu&car/6.png',
      size: { width: 100, height: 60 }, // Reduced size
    },
    {
      id: 6,
      name: 'Partner 6',
      logo: '/edu&car/1.png',
      size: { width: 110, height: 55 }, // Reduced size
    },
    {
      id: 7,
      name: 'Partner 7',
      logo: '/edu&car/4.png',
      size: { width: 100, height: 65 }, // Reduced size
    },
    {
      id: 8,
      name: 'Partner 8',
      logo: '/edu&car/3.png',
      size: { width: 110, height: 55 }, // Reduced size
    },
    {
      id: 9,
      name: 'Partner 9',
      logo: '/new-image/partners/PeopleCert.png',
      size: { width: 110, height: 55 }, // Reduced size
    },
    {
      id: 10,
      name: 'Partner 10',
      logo: '/new-image/partners/PMI.png',
      size: { width: 110, height: 55 }, // Reduced size
    },
  ];

  return (
    <section className="py-8 bg-white overflow-hidden">
      {' '}
      {/* Reduced padding */}
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
        {/* Header with decorative elements - more compact */}
        <div className="relative mb-6 text-center">
          {' '}
          {/* Reduced margin */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-16 h-1 bg-blue-500"></div>{' '}
          {/* Smaller width */}
          <h2 className="inline-block text-2xl font-bold text-gray-800 mt-3">
            {' '}
            {/* Smaller text and margin */}
            Our Certified Partners
          </h2>
        </div>

        {/* Partners Slider - more compact */}
        {domLoaded && (
          <div className="relative">
            <div className="py-3 relative z-10">
              {' '}
              {/* Reduced padding */}
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
                  depth: 80, // Reduced depth
                  modifier: 1,
                  slideShadows: false,
                }}
                breakpoints={{
                  320: { slidesPerView: 1.5, spaceBetween: 20 }, // Adjusted for more compact view
                  480: { slidesPerView: 2, spaceBetween: 25 },
                  640: { slidesPerView: 3, spaceBetween: 30 },
                  768: { slidesPerView: 4, spaceBetween: 35 },
                  1024: { slidesPerView: 5, spaceBetween: 40 },
                }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                speed={800}
                className="max-w-6xl mx-auto py-6" // Reduced padding
              >
                {partners.map(partner => (
                  <SwiperSlide
                    key={partner.id}
                    className="flex justify-center w-auto"
                    style={{ width: 'auto' }}
                  >
                    <div
                      className="relative shadow-lg group w-44 h-28 flex items-center justify-center bg-white border border-gray-200 rounded-lg transition-all duration-300 overflow-hidden" // Reduced width and height
                      style={{
                        transform: isHovered === partner.id ? 'scale(1.05)' : 'scale(1)',
                        boxShadow:
                          isHovered === partner.id
                            ? '0 10px 20px -8px rgba(59, 130, 246, 0.1)' // Smaller shadow
                            : 'none',
                      }}
                      // @ts-expect-error error
                      onMouseEnter={() => setIsHovered(partner.id)}
                      onMouseLeave={() => setIsHovered(null)}
                    >
                      {/* Logo with precise sizing */}
                      <img
                        src={partner.logo}
                        alt={`${partner.name} Logo`}
                        width={partner.size.width}
                        height={partner.size.height}
                        className="object-contain transition-all duration-300 group-hover:scale-110 max-h-20" // Reduced max height
                        style={{
                          maxWidth: partner.size.width,
                          filter:
                            isHovered === partner.id ? 'contrast(1.1) brightness(1.05)' : 'none',
                        }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertifiedPartnersSlider;
