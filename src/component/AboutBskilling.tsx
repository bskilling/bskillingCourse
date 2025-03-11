/* eslint-disable @next/next/no-img-element */
import React from 'react';

const AboutBskilling = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 mt-10">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <h1 className="text-4xl font-bold mb-6">About bSkilling</h1>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              At BSkilling, we go beyond traditional placement services by
              offering a comprehensive suite of solutions for both professionals
              and businesses. Our consultancy services provide personalised
              guidance and support to candidates throughout their job search
              journey, while our internal placement services facilitate direct
              connections between talented individuals and leading
              organisations. During placements, we conduct 4-5 interviews per
              month, designed to build confidence and equip professionals with
              the necessary skills to succeed in today’s job market.
              <br />
              <br />
              Under Mr. Sivasarathy’s guidance, BSkilling continues to uphold
              the highest standards of integrity, professionalism, and customer
              satisfaction. By fostering a culture of continuous learning and
              innovation, we remain committed to empowering individuals and
              driving positive change in the IT industry and beyond.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/about2.png"
              alt="About BSkilling"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 mt-16">
        <div className="bg-cardbg p-6 rounded-lg text-center shadow-lg">
          <h2 className="text-2xl font-bold mb-4 ">Our Vision</h2>
          <p className=" text-base leading-relaxed">
            To emerge as the premier market leader in shaping the
            technology-based workforce of the future, driving impactful
            disruptions in upskilling and staffing solutions.
          </p>
        </div>
        <div className="bg-customPurple p-6 rounded-lg text-center shadow-lg">
          <h2 className="text-2xl font-bold mb-4 ">Our Mission</h2>
          <p className=" text-base leading-relaxed">
            BSkilling aims to empower organisations to achieve scalability
            through innovative and efficient talent enhancement programs. We
            strive to deliver customised knowledge and talent services that
            solve business challenges, foster agility, and drive customer
            success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBskilling;
