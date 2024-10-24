import React, { useState } from "react";
import PopupForm from "./PopupForm";

const Experience = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => setPopupOpen(true);
  const handleClosePopup = () => setPopupOpen(false);

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 mt-5 py-10 md:px-20 lg:px-30">
      <h1 className="text-3xl font-bold text-center mb-4 md:text-4xl">
        THE BSKILLING EXPERIENCE
      </h1>
      <p className="text-lg text-center mb-8 md:text-xl">
        Transforming Careers Through Innovative Learning
      </p>

      {/* Card 1 */}
      <div className="flex flex-col w-full bg-white shadow-lg rounded-lg overflow-hidden relative mb-6 md:flex-row md:mb-20 md:py-14 py-4">
        {/* Left half */}
        <div className="flex flex-col items-center w-full p-4 text-center md:w-1/2">
          <img
            src="/images/Personalised_learning.png"
            alt="Personalised Learning"
            className="w-10 h-10 mb-4 rounded-lg"
          />

          <div className="ml-2">
            <h2 className="text-xl font-bold mb-2 md:text-2xl">
              Personalised Learning
            </h2>
            <p className="text-base text-justify text-textColor md:text-sm">
              BSkilling prioritises quality education tailored to meet
              individual needs. With small batches of 15-20 students, we ensure
              personalised attention and support from our expert faculty. This
              allows for a more interactive and engaging learning experience,
              where every learner’s requirements are addressed.
            </p>
          </div>
        </div>

        {/* Right half */}
        <div className="flex flex-col items-center w-full p-4 text-center md:w-1/2">
          <img
            src="/images/easy_course.png"
            alt="Easily Accessible Courses"
            className="w-10 h-10 mb-4 rounded-lg "
          />

          {/* The dividing line, hidden on mobile */}
          {/* <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-textColor"></div> */}

          <div className="ml-2">
            <h2 className="text-xl font-bold mb-2 md:text-2xl">
              Easily Accessible Courses
            </h2>
            <p className="text-base text-justify text-textColor md:text-sm">
              Learning should be accessible to everyone, which is why we offer a
              range of online courses to kickstart your learning journey.
              Whether you are a beginner exploring a new field or a professional
              seeking to expand your skill set, our courses provide excellent
              opportunities for learning and career growth.
            </p>
          </div>
        </div>

        {/* Get in touch button, positioned at the bottom */}
        <button
          className="mt-8 bg-primaryButton text-sm text-white px-8 py-2 border-none rounded-xl mx-auto md:absolute md:bottom-4 md:left-1/2 md:transform md:-translate-x-1/2 md:mt-[10px]"
          onClick={handleOpenPopup}
        >
          Get in touch
        </button>

        {isPopupOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black opacity-50"
              onClick={handleClosePopup}
            ></div>

            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <PopupForm
                handleClosePopup={handleClosePopup}
                title="Get In Touch with Bskilling"
              />
            </div>
          </>
        )}
      </div>

      {/* Card 2 */}
      <div className="flex flex-col w-full bg-white shadow-lg rounded-lg overflow-hidden py-4 md:flex-row">
        {/* Left half */}
        <div className="flex flex-col items-center w-full p-4 text-center md:w-1/2">
          <img
            src="/images/lms_access.png"
            alt="Convenient Learning with LMS Access"
            className="w-10 h-10 mb-4 rounded-lg"
          />

          <div className="ml-2">
            <h2 className="text-xl font-bold mb-2 md:text-2xl">
              Convenient Learning with LMS Access
            </h2>
            <p className="text-base text-justify text-textColor md:text-sm">
              Experience the convenience of learning on your terms with access
              to our comprehensive Learning Management System (LMS). Our
              intuitive platform enables you to access course materials whenever
              and wherever it suits you best. From listening to lectures to
              completing assignments, our user-friendly interface helps you to
              navigate your learning journey with ease. Now you can integrate
              your studies into your busy schedule and progress at your own
              pace.
            </p>
          </div>
        </div>

        {/* Right half */}
        <div className="flex flex-col items-center w-full p-4 text-center md:w-1/2">
          <img
            src="/images/support.png"
            alt="Projects and Mentor Support"
            className="w-10 h-10 mb-4 rounded-lg"
          />

          {/* The dividing line, hidden on mobile */}
          {/* <div className="hidden md:block relative left-20 top-0 bottom-0 w-[1px] bg-textColor"></div> */}

          <div className="ml-2">
            <h2 className="text-xl font-bold mb-2 md:text-2xl">
              Projects and Mentor Support
            </h2>
            <p className="text-base text-justify text-textColor md:text-sm">
              At BSkilling, we emphasise practical learning through projects and
              mentor support. Our hands-on approach ensures that you not only
              grasp theoretical concepts but also gain valuable real-world
              experience. Engage in project-based learning under the guidance of
              experienced mentors who provide personalised support and feedback,
              empowering you to apply your skills confidently in the
              professional world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
