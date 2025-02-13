/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';
// const Slider = () => {
//   const [currentImage, setCurrentImage] = useState(0);
//   const images = [
//     '/images/slider1.jfif',
//     '/images/slider2.png',
//     '/images/slider3.jfif',
//     '/images/slider4.jfif',
//     '/images/slider5.png',
//   ];
//   const texts = [
//     {
//       heading: 'Interactive Online Classes',
//       description: 'The Future of Learning is Here!',
//       background:
//         'radial-gradient(circle at -0.8% 4.3%, rgb(59, 176, 255) 0%, rgb(76, 222, 250) 83.6%)',
//       textColor: 'text-white',
//       borderColor: 'border-white',
//     },
//     {
//       heading: 'Land Your Dream Job',
//       description: 'Get Holistic Placement Support!',
//       background: 'linear-gradient(117.65deg, #37ECBA 0%, #72AFD3 100%)',
//       textColor: 'text-white',
//       borderColor: 'border-white',
//     },
//     {
//       heading: 'Professional Courses Specially Designed To Suit Your Needs',
//       description: 'Flexible | Interactive | Customised Learning',
//       background:
//         'linear-gradient(69.8deg, rgb(25, 49, 108) 2.8%, rgb(1, 179, 201) 97.8%)',
//       textColor: 'text-white',
//       borderColor: 'border-white',
//     },
//     {
//       heading: 'Learn from the Best',
//       description: 'Expert Faculty, Exceptional Results!',
//       background:
//         'linear-gradient(67.6deg, rgb(225, 242, 254) -2.8%, rgb(193, 224, 250) 44.6%, rgb(19, 116, 197) 102.4%)',
//       textColor: 'text-white',
//       borderColor: 'border-white',
//     },
//     {
//       heading: 'Level Up Your Employees With Corporate Training',
//       description: 'IT | Banking | HR Onboarding',
//       background:
//         'linear-gradient(69.8deg, rgb(25, 49, 108) 2.8%, rgb(1, 179, 201) 97.8%)',
//       textColor: 'text-white',
//       borderColor: 'border-white',
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prevImage) => (prevImage + 1) % images.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   const imageVariants = {
//     initial: { x: '100%', opacity: 0 },
//     animate: { x: 0, opacity: 1 },
//     exit: { x: '-100%', opacity: 0 },
//   };

//   return (
//     <div className="relative w-full max-w-screen-2xl mx-auto overflow-hidden">
//       <motion.div
//         key={currentImage}
//         initial="initial"
//         animate="animate"
//         exit="exit"
//         variants={imageVariants}
//         transition={{ duration: 0.5 }}
//         className="relative"
//       >
//         <img
//           src={images[currentImage]}
//           alt={`slide${currentImage + 1}`}
//           className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
//         />
//         <div
//           className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent"
//           style={{
//             backgroundImage: texts[currentImage].background,
//             opacity: 0.5,
//             zIndex: 1,
//           }}
//         />
//         <div
//           className={`absolute inset-0 flex flex-col justify-center items-center text-center z-20 ${texts[currentImage].textColor}`}
//         >
//           <h2 className="text-xl md:text-2xl lg:text-3xl mb-4 font-bold tracking-wider">
//             {texts[currentImage].heading}
//           </h2>
//           <p className="text-sm md:text-lg lg:text-lg mb-4">
//             {texts[currentImage].description}
//           </p>

//           <div className="flex justify-center mt-12 font-bold text-sm">
//             <div className="flex flex-col items-center mx-10">
//               <img
//                 src="/images/homeicon1.png"
//                 alt="icon"
//                 className="w-12 h-12"
//               />
//               <p className=" text-center mt-4">Customized Learning Programs</p>
//             </div>
//             <div className="flex flex-col items-center mx-10">
//               <img
//                 src="/images/homeicon2.png"
//                 alt="icon"
//                 className="w-12 h-12"
//               />
//               <p className=" text-center mt-4">1-1 Doubt Support</p>
//             </div>
//             <div className="flex flex-col items-center mx-10">
//               <img
//                 src="/images/homeicon3.png"
//                 alt="icon"
//                 className="w-12 h-12"
//               />
//               <p className=" text-center mt-4">Live Interactive Class</p>
//             </div>
//             <div className="flex flex-col items-center mx-10">
//               <img
//                 src="/images/homeicon4.png"
//                 alt="icon"
//                 className="w-12 h-12"
//               />
//               <p className=" text-center mt-4">Job Readiness</p>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       {/* Dots */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             className={`w-2 h-2 rounded-full ${
//               currentImage === index ? 'bg-dotsBg' : 'bg-white'
//             }`}
//             onClick={() => setCurrentImage(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

const Slider = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <>
      <Carousel
        className=" w-[100vw] "
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          <CarouselItem>
            <Link href="/individual-training">
              <img
                src="/new-images/offer.webp"
                alt=""
                className=" w-full object-cover "
              />
            </Link>
          </CarouselItem>
          <CarouselItem>
            <Link href="/college-training/skill-assisting-program">
              <img
                src="/new-images/skill-development.webp"
                alt=""
                className=" w-full object-cover "
              />
            </Link>
          </CarouselItem>
          <CarouselItem>
            <Link href={'/government-training-program'}>
              <img
                src="/new-images/govt-training.webp"
                alt=""
                className=" w-full object-cover"
              />
            </Link>
          </CarouselItem>
          <CarouselItem>
            <Link href={'/corporate-training'}>
              <img
                src="/new-images/corporate.webp"
                alt=""
                className=" w-full object-cover"
              />
            </Link>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-10 z-30 flex items-center justify-center px-4 cursor-pointer focus:outline-none" />
        <CarouselNext className="absolute right-10 z-30 flex items-center justify-center px-4 cursor-pointer focus:outline-none" />
      </Carousel>
    </>
  );
};

export default Slider;
