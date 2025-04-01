/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Pagination, Autoplay, Scrollbar, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function Testimonials() {
  const stuff = [
    {
      text: 'I thought prompt engineering is the easiest and who will take up the course and it just about asking questions to Chat GPT! Oh boy I was wrong! There is so much and its a ocean of knowledge in the field of AI! Trainer helped me understand steps to prompt and the right way to prompt! Mid journey and Bard are something I dint know existed or to work with! Really appreciate the teams effort educate about all of these things in one session!',
      name: 'Amitikumar Mohanty',
      position: 'Systems Engineer',
      company: 'Renaura Wellness Pvt Ltd',
      logo: '/testimonial1.png',
      id: 1,
    },
    {
      text: "Bskillinng's learning platform is a game-changer. As a trainer, I appreciate the platform's user-friendly interface and robust features that enhance the training experience. It's a valuable resource for both trainers and learners, making our job easier and more effective. Proud to be associated with such an innovative learning solution!",
      name: 'Virender Singh',
      position: 'AWS Certified Trainer',
      company: 'Prima USA, LLC',
      logo: '/testimonial2.png',
      id: 2,
    },
    {
      text: 'As a newcomer with no technical background, I as able to learn Python at a deeper level. This course includes certification, which will aid in job search.',
      name: 'Santhosh Kumar',
      position: 'Python Data Engineer',
      company: 'EarthyBlend Pvt Ltd',
      logo: '/testimonial3.png',
      id: 3,
    },
    {
      text: "I'm Pradheep from Non IT background, my friend referred this institute I joined here SAP BTP course. The training went well the concepts are clearly delivered with practical examples. every day task helped me lots.I got good knowledge. SAP BTP is easy and intresting, end of the course I'm satisfied with the training.",
      name: 'Pradheep Eswaramoorthi',
      position: 'Software Engineer',
      company: 'EarthyBlend Pvt Ltd',
      logo: '/testimonial4.png',
      id: 4,
    },
  ];
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setSlidesPerView(calculateSlidesPerView());
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);

      // Initial calculation
      setSlidesPerView(calculateSlidesPerView());
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  function calculateSlidesPerView() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1280) {
      return 3; // For screens wider than or equal to 1024px, display 3 testimonials
    } else if (screenWidth >= 1024) {
      return 2; // For screens wider than or equal to 768px, display 2 testimonials
    } else {
      return 1; // For screens narrower than 768px, display 1 testimonial
    }
  }

  return (
    <section className="p-4 md:px-24 md:pt-12 bg-gray text-black relative">
      <h2 className="md:container mx-auto text-center font-bold font-SourceSans text-[2rem] tracking-wide text-black mb-16">
        Alumni Speak
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
        }}
        slidesPerView={slidesPerView}
        spaceBetween={20}
        speed={1000}
      >
        {stuff.map(({ text, name, position, company, logo, id }, index) => (
          <SwiperSlide key={id + index + name}>
            <div
              key={id + index + name}
              className={`w-full relative flex flex-col ${
                slidesPerView === 1 ? 'items-start' : 'items-center'
              }`}
            >
              <div className="w-full md:w-auto md:h-[360px] p-4 bg-white rounded-md shadow-2xl mb-16">
                <div className="flex items-center space-x-4">
                  <div>
                    <img
                      src="https://www.thearoralawfirm.com/wp-content/uploads/2021/01/testimonials_man3.png"
                      alt={`Logo ${name}`}
                      className="w-16 h-16 object-cover rounded-full"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg text-black font-semibold">{name}</h3>
                    <p className="text-sm text-black font-semibold">
                      {position}
                    </p>
                  </div>
                </div>
                <div className="py-8 text-left">
                  <p className="text-sm max-w-sm text-black">{text}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next" style={{ fontSize: '10px' }}></div>
        <div
          className="swiper-button-prev"
          style={{ fontSize: '0.8rem' }}
        ></div>
      </Swiper>
    </section>
  );
}
