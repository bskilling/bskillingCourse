import React from 'react';

const AboutCoreValue = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Our Core Values</h1>
          <p className="mt-2 text-sm text-gray-600 font-semibold">What Makes bSkilling Unique!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          <div className="border-2 border-solid border-customPurple p-2 rounded-lg text-left">
            <h2 className="text-xl font-bold mb-2">Passion</h2>
            <p className="text-subText text-sm">
              Passion is at the heart of everything we do at bSkilling. It is the driving force
              behind our continuous innovation and the foundation of our commitment to value
              creation. With passion as our guiding light, we strive to inspire and empower
              individuals on their learning journey, ensuring they reach their full potential and
              achieve their goals.
            </p>
          </div>
          <div className="border-2 border-solid border-customRed p-2 rounded-lg text-left">
            <h2 className="text-xl font-bold mb-2">Expertise</h2>
            <p className="text-subText text-sm">
              bSkilling brings together a wealth of expertise derived from a diverse range of
              experiences. Our team blends the wisdom gained from the past with forward-thinking
              leadership. With deep industry knowledge and a commitment to excellence, we deliver
              cutting-edge educational solutions that meet the evolving needs of our learners and
              partners.
            </p>
          </div>
          <div className="border-2 border-solid border-customOrange p-2 rounded-lg text-left">
            <h2 className="text-xl font-bold mb-2">Empathy</h2>
            <p className="text-subText text-sm">
              Empathy lies at the core of our customer-centric approach at bSkilling. We prioritise
              understanding the unique needs and challenges of our learners and partners, allowing
              us to tailor our solutions to their specific requirements. By putting ourselves in the
              shoes of others, we build meaningful relationships, foster trust, and create a
              supportive learning environment.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 lg:mt-20 max-w-7xl mx-auto px-6 sm:px-6 lg:px-16">
        <h1 className="text-center mb-8 text-3xl font-extrabold text-gray-900">Our Story</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <p className="text-lg text-gray-600">Online Courses Delivered</p>
            <p className="text-2xl font-semibold text-gray-900">640+</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <p className="text-lg text-gray-600">Trained IT Professionals</p>
            <p className="text-2xl font-semibold text-gray-900">300,000+</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <p className="text-lg text-gray-600">Clients</p>
            <p className="text-2xl font-semibold text-gray-900">350+</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <p className="text-lg text-gray-600">Existence Since</p>
            <p className="text-2xl font-semibold text-gray-900">2011</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col md:flex-row gap-8 px-8">
          <div className="w-full md:w-1/2">
            <h1 className="text-customPurple text-xl md:text-2xl font-semibold mb-4">Who We Are</h1>
            <p className="text-[16px] text-justify text-gray-700 leading-relaxed">
              A one-stop solution for technical training, development, and placement needs,
              bSkilling has been aiding professionals to learn and grow for over 13 years. We
              believe in empowering individuals with the knowledge, skills, and confidence they need
              to succeed in today’s competitive job market.
              <br />
              Our master programs can be covered from the comfort of your home, in your own time,
              with each consisting of 2 interactive sessions to enhance your learning experience.
              Experience dynamic online classes with interactive sessions led by our expert faculty,
              ensuring active engagement and effective learning. You will also receive personalised
              placement support post course completion to kickstart your career journey seamlessly.
              <br />
              Join the bSkilling community today and take the first step towards a brighter future!
              <br />→ Extensive Range of Courses
              <br />→ High-Quality Education
              <br />→ Easily Accessible Classes
              <br />→ Flexible Learning Options
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-customRed text-xl md:text-2xl font-semibold mb-4">What We Do</h1>
            <p className="text-[16px] text-justify text-gray-700 leading-relaxed">
              At bSkilling, we specialise in providing dynamic online classes, personalised
              placement support, and access to an expert faculty to help you achieve your career
              aspirations. Our programs offer interactive learning experiences with real-time
              engagement and collaboration with industry professionals. The option of flexible
              scheduling and comprehensive assistance– including mock interviews and resume building
              guidance– are designed to equip you with the skills and confidence to succeed in
              today’s competitive job market.
              <br />
              <br />→ Tailored Learning Experiences
              <br />→ Comprehensive Career Assistance
              <br />→ Industry-Relevant Curriculum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCoreValue;
