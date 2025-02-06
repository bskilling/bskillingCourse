import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const testimonials = [
  {
    name: "Pradheep Eswaramoorthi",
    role: "Software Engineer",
    image: "/images/profile.jfif",
    testimonial:
      " I am Pradheep from Non IT background, my friend referred this institute I joined here SAP BTP course. The training went well the concepts are clearly delivered with practical examples. every day task helped me lots.I got good knowledge. SAP BTP is easy and intresting, end of the course I am satisfied with the training.",
  },
  {
    name: "Virender Singh",
    role: "AWS Certified Trainer",
    image: "/images/profile.jfif",
    testimonial:
      "Bskilling's learning platform is a game-changer. As a trainer, I appreciate the platform's user-friendly interface and robust features that enhance the training experience. It's a valuable resource for both trainers and learners, making our job easier and more effective. I'm proud to be associated with such an innovative learning solution!",
  },
  {
    name: "Amitikumar Mohanty",
    role: "Systems Engineer",
    image: "/images/profile.jfif",
    testimonial:
      "I thought prompt engineering is the easiest and who will take up the course and it just about asking questions to Chat GPT! Oh boy I was wrong! There is so much and its a ocean of knowledge in the field of AI! Trainer helped me understand steps to prompt and the right way to prompt! Mid journey and Bard are something I dint know existed or to work with! Really appreciate the teams effort educate about all of these things in one session!",
  },
];

const Testimonial = () => {
  return (
    <div className="py-5 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center">What People Say</h2>
        <p className="mt-2 text-lg text-center text-gray-600">
          Our Clients Vouch For Us! Read What They Have To Say!
        </p>
        <div className="mt-8">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            pagination={{ clickable: true, el: ".swiper-pagination" }}
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
                  <p className="mt-4 text-gray-800 text-justify">
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
