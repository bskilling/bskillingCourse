/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Aboutlanding = () => {
  return (
    <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px] flex items-center justify-center bg-gradient-background">
      <img
        src="/images/about1.jfif"
        className="absolute w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover opacity-70"
        alt="About Us"
      />
      <div className="relative z-10 text-white text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider mb-4">
          ABOUT US
        </h1>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF1053] to-[#3452FF] opacity-50"></div>
    </div>
  );
};

export default Aboutlanding;
