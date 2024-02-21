import { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useRouter } from "next/router";

const Slider = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 720);
    };
    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const searchClick = () => {
    console.log("clicked")
  }

  return (
    <div className={`relative ${isSmallScreen ? 'bg-blue-500' : ''}`}>
      {isSmallScreen ? (
        <div className="text-white p-8">
          <h1 className="text-3xl  font-bold text-white mb-4 md:mb-4 tracking-wider">
              Upskilling Made Easy
            </h1>
            <p className="text-md text-xl text-white mb-1 md:mb-3 tracking-wider font-bold">
              Learn from Experts
            </p>

          <div
            className="border-2 border-white p-1  flex items-center w-[250px] rounded-lg mt-4  cursor-pointer hover:bg-buttonBlue"
            onClick={searchClick}
          >
              <BiSearchAlt style={{ color: "white" }} />
              <span className="text-white ml-1 text-sm font-bold">
                Explore In-Demand Courses
              </span>
            </div>
        </div>
      ) : (
        <>
          <div className="absolute top-1/2 ml-5 py-4 md:py-0 md:ml-20 transform -translate-y-1/2 text-left">
            <h1 className="text-2xl md:text-5xl font-bold text-white mb-2 md:mb-4 tracking-wider">
              Upskilling Made Easy
            </h1>
            <p className="text-md md:text-2xl text-white mb-1 md:mb-3 tracking-wider font-bold">
              Learn from Experts
            </p>

              <div
                className="border-2 border-white p-1 md:p-2 flex items-center w-full md:w-[270px] rounded-lg mt-2 md:mt-16 cursor-pointer hover:bg-buttonBlue"
                onClick={searchClick}
              >
              <BiSearchAlt style={{ color: "white" }} />
              <span className="text-white ml-1 md:ml-2 font-bold">
                Explore In-Demand Courses
              </span>
            </div>
          </div>

          <img
            src="/landing_image1.png"
            alt="landing_page"
            className="w-full h-auto"
          />
        </>

      )}
    </div>
  );
};

export default Slider;
