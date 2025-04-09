/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Pradheep Eswaramoorthi',
    role: 'Software Engineer',
    image: '/new-image/home/man.png',
    testimonial:
      'I am Pradheep from a non-IT background. My friend referred me to this institute, and I joined the SAP BTP course. The training went well, and the concepts were clearly delivered with practical examples. Everyday tasks helped me a lot. I got good knowledge, and SAP BTP is easy and interesting. By the end of the course, I was satisfied with the training.',
  },
  {
    name: 'Virender Singh',
    role: 'AWS Certified Trainer',
    image: '/new-image/home/man1.png',
    testimonial:
      "Bskilling's learning platform is a game-changer. As a trainer, I appreciate the platform's user-friendly interface and robust features that enhance the training experience. It's a valuable resource for both trainers and learners, making our job easier and more effective. I'm proud to be associated with such an innovative learning solution!",
  },
  {
    name: 'Isaivanan T',
    role: 'Systems Engineer',
    image: '/new-image/home/isai.jpeg',
    testimonial:
      "I thought prompt engineering was easy and just about asking ChatGPT questions. Oh boy, I was wrong! It's an ocean of knowledge in the field of AI! The trainer helped me understand how to prompt correctly. MidJourney and Bard were something I didn't even know existed! I really appreciate the team's effort in educating us about all of these things in one session!",
  },
  {
    name: 'Sanjay Gupta',
    role: 'AI Consultant',
    image: '/images/profile.jfif',
    testimonial:
      'The AI courses offered here are top-notch. The practical approach, hands-on projects, and excellent trainers make learning seamless. This platform has helped me upscale my skills efficiently! Highly recommended!',
  },
];

const Testimonial = () => {
  return (
    <div className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-4xl font-extrabold text-center text-gray-900">What People Say</h2>
        <p className="mt-3 text-lg text-center text-gray-600">
          Our clients vouch for us! Read what they have to say.
        </p>
        <div className="mt-10">
          <Swiper
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            navigation
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white shadow-lg rounded-2xl p-6 text-center border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-center mb-4">
                    <img
                      className="w-24 h-24 rounded-full border-4 border-gray-300 object-cover"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <div className="flex justify-center gap-1 mt-3 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <FaQuoteLeft className="text-gray-300 text-3xl mx-auto mt-4" />
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                    {testimonial.testimonial}
                  </p>
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
