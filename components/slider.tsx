import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/images/slider1.jfif',
    '/images/slider2.png',
    '/images/slider3.jfif',
    '/images/slider4.jfif',
    '/images/slider5.png'
  ];
  const texts = [
    {
      heading: "Interactive Online Classes",
      description: "The Future of Learning is Here!",
      background: "linear-gradient(117.65deg, #3452FF 0%, #FF1053 100%)",
      textColor: "text-white",
      borderColor:"border-white"
    },
    {
      heading: "Land Your Dream Job",
      description: "Get Holistic Placement Support!",
      background: "linear-gradient(117.65deg, #37ECBA 0%, #72AFD3 100%)",
      textColor: "text-black",
      borderColor:"border-black"
    },
    {
      heading: "Professional Courses Specially Designed To Suit Your Needs",
      description: "Flexible | Interactive | Customised Learning",
      background: "linear-gradient(117.65deg, #C71D6F 0%, #D09693 100%)",
      textColor: "text-white",
      borderColor:"border-white"
    },
    {
      heading: "Learn from the Best",
      description: "Expert Faculty, Exceptional Results!",
      background: "linear-gradient(117.65deg, #85FFBD 0%, #FFFB7D 100%)",
      textColor: "text-black",
      borderColor:"border-black"
    },
    {
      heading: "Level Up Your Employees With Corporate Training",
      description: "IT | Banking | HR Onboarding",
      background: "linear-gradient(117.65deg, #F83600 0%, #F9D423 100%)",
      textColor: "text-white",
      borderColor:"border-white"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  const imageVariants = {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
  };

  return (
    <div className="relative w-full max-w-screen-2xl mx-auto overflow-hidden">
      <motion.div
        key={currentImage}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={imageVariants}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <img
          src={images[currentImage]}
          alt={`slide${currentImage + 1}`}
          className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent"
          style={{
            backgroundImage: texts[currentImage].background,
            opacity: 0.5,
            zIndex: 1 
          }}
        />
        <div className={`absolute inset-0 flex flex-col justify-center items-center text-center z-20 ${texts[currentImage].textColor}`}>
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-4 font-bold tracking-wider">
            {texts[currentImage].heading}
          </h2>
          <p className="text-sm md:text-lg lg:text-lg mb-4">
            {texts[currentImage].description}
          </p>
          <button className={`border rounded-3xl ${texts[currentImage].borderColor} px-4 py-2 font-semibold`}>
            Ready to get Started?
          </button>
          <div className='flex justify-center mt-12 font-bold text-sm'>
            <div className="flex flex-col items-center mx-10">
              <img src="/images/homeicon1.png" alt="icon" className="w-12 h-12" />
              <p className=" text-center mt-4">Customized Learning Programs</p>
            </div>
            <div className="flex flex-col items-center mx-10">
              <img src="/images/homeicon2.png" alt="icon" className="w-12 h-12" />
              <p className=" text-center mt-4">1-1 Doubt Support</p>
            </div>
            <div className="flex flex-col items-center mx-10">
              <img src="/images/homeicon3.png" alt="icon" className="w-12 h-12" />
              <p className=" text-center mt-4">Live Interactive Class</p>
            </div>
            <div className="flex flex-col items-center mx-10">
              <img src="/images/homeicon4.png" alt="icon" className="w-12 h-12" />
              <p className=" text-center mt-4">Job Readiness</p>
            </div>
          </div>
        </div>
      </motion.div>

      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent text-white p-2 z-30"
      >
        - Prev
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent text-white p-2 z-30"
      >
        Next -
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${currentImage === index ? 'bg-dotsBg' : 'bg-white'}`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
