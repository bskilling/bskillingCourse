import Link from "next/link";
import React from "react";

const Chooseus = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center px-4 md:px-10 my-2 lg:py-4">
      <div className="w-full md:w-1/2 rounded-2xl">
        <img
          src="/images/choose1.jfif"
          alt="Why Choose Us"
          className="w-full h-[500px] rounded-2xl"
        />
      </div>
      <div className="w-full md:w-1/2 md:pl-6 lg:pl-12 flex flex-col items-start justify-start">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-left">
          WHY CHOOSE US?
        </h1>
        <p className="text-sm md:text-sm text-left">
          BSkilling is your go-to destination for comprehensive technical
          training, development, and placement solutions. With over 13 years of
          experience, we’re committed to empowering individuals for success in
          today’s competitive job market.
          <br />
          <br />
          Our master programs offer the flexibility of remote learning, with 2
          interactive sessions per module to enhance your skills. Engage in
          dynamic online classes led by expert faculty for an immersive learning
          experience. Plus, benefit from personalised placement support
          post-course completion to kickstart your career seamlessly.
          <br />
          <br />
          Explore our diverse range of industry-relevant courses and join the
          BSkilling community today to unlock your potential for a brighter
          future!
        </p>
        <Link href="/aboutus">
          <button className="mt-4 items-start px-6 py-2 border border-blue-600 rounded-3xl text-blue-600 hover:bg-btColor hover:text-white">
            know more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Chooseus;
