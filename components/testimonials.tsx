import Link from "next/link";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Testimonials() {
  const stuff = [
    {
      text: "I strongly recommend this course to any aspiring data scientist After completing this course, even those with no prior knowledge of visualisation tools can become masters.",
      name: "Swathi MS",
      position: "Co-Founder",
      company: "Renaura Wellness Pvt Ltd",
      logo: "/testimonial1.png",
      id: 1,
    },
    {
      text: "This course has helped me understand the fundamentals, advance my ALML knowledge, and apply those concepts to my work. I recommend this course to anyone interested in learning about ALML.",
      name: "Abhishek K",
      position: "President",
      company: "Prima USA, LLC",
      logo: "/testimonial2.png",
      id: 2,
    },
    {
      text: "As a newcomer with no technical background, I as able to learn Python at a deeper level. This course includes certification, which will aid in job search.",
      name: "Santhosh Kumar",
      position: "Founder & CEO",
      company: "EarthyBlend Pvt Ltd",
      logo: "/testimonial3.png",
      id: 3,
    },
  ];

  return (
    <section className="p-4 md:pt-12   bg-Buttoncolor text-white relative">
      <h1 className="md:container mx-auto   text-center font-bold font-SourceSans text-xl text-center tracking-wide text-white">
        Alumni Speak
      </h1>

      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={true}
        loop={true}
        speed={1000}
      >
        {stuff.map(({ text, name, position, company, logo, id }) => (
          <SwiperSlide key={id}>
            <div className="w-full relative flex pb-8 flex-col justify-center items-center">
              <div className="md:container mx-auto md:px-24 py-10 flex  justify-center items-center ">
                <p className="md:max-w-sm md:text-   text-center ">
                  &ldquo; {text} &rdquo;
                </p>
              </div>
              <p className="text-lg pt-6 text-white font-semibold">{name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
