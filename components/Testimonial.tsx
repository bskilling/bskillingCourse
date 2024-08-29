import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';

const testimonials = [
  {
    name: 'ALI TUFAN',
    role: 'Client',
    image: '/images/user1.jfif',
    testimonial: 'Customization is very easy with this theme. Clean and quality design and full support for any kind of request! Great theme!',
  },
  {
    name: 'John Doe',
    role: 'Client',
    image: '/images/user2.jfif',
    testimonial: 'The support is amazing and the customization options are perfect for our needs. Excellent work!',
  },
  {
    name: 'Jane Smith',
    role: 'Client',
    image: '/images/user3.jfif',
    testimonial: 'Absolutely wonderful! The theme is very easy to use and the support is top-notch.',
  },
  {
    name: 'Jane Smith',
    role: 'Client',
    image: '/images/user3.jfif',
    testimonial: 'Absolutely wonderful! The theme is very easy to use and the support is top-notch.',
  },
];

const Testimonial = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center">What People Say</h2>
        <p className="mt-2 text-lg text-center text-gray-600">
          Our Clients Vouch For Us! Read What They Have To Say!
        </p>
        <div className="mt-8">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={50}
            slidesPerView={3}
            centeredSlides={false}
            pagination={{ clickable: true, el: '.swiper-pagination' }}
            navigation
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <img
                      className="w-24 h-24 rounded-full md:w-32 md:h-32"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                  </div>
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <p className="mt-4 text-gray-800">{testimonial.testimonial}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
         
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
