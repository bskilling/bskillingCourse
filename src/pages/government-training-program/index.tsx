/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useEffect } from 'react';
import Head from 'next/head';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { BsCircleFill } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import NavbarSection from '@/component/navbar/NavbarSection';
import { motion } from 'framer-motion';

const ties = [
  {
    id: 1,
    name: 'Karnataka Skill Development Corporation',
    description:
      'In partnership with bSkilling, we drive impactful programs focused on innovation and skill development.',
    img: '/new-image/ksdc.png',
    link: `/government-training-program/karnataka-skill-development-corporation`,
  },
  {
    id: 2,
    name: 'Naan Mudhalvan',
    description:
      'A transformative initiative aimed at empowering youth with industry-relevant skills, career guidance, and opportunities, shaping the leaders of tomorrow.',
    img: '/new-image/naan-logo.png',
    link: `/government-training-program/naan-mudhalvan`,
  },
  {
    id: 3,
    name: 'Future Skills',
    description:
      'A premier trade body and chamber of commerce for the tech industry, driving innovation, policy advocacy, and skill development to foster India&#39;s digital transformation.',
    img: '/new-image/future-skills.png',
    link: `/government-training-program/nasscom-future-skills`,
  },
  {
    id: 4,
    name: 'NSDC',
    description:
      'The National Skill Development Corporation focuses on empowering India&#39;s workforce through skill development initiatives, industry partnerships, and training programs to enhance employability.',
    img: '/new-image/nsdc.png',
    link: `/government-training-program/national-skill-development-corporation`,
  },
];

const stats = [
  { id: 1, number: '50+', label: 'Government Partners' },
  { id: 2, number: '10K+', label: 'Students Trained' },
  { id: 3, number: '95%', label: 'Placement Rate' },
  { id: 4, number: '200+', label: 'Training Programs' },
];

export default function GovernmentTrainingProgram() {
  const router = useRouter();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      <Head>
        <title>Government Training Program - College Training</title>
        <meta
          name="description"
          content="Join our comprehensive government training program designed for college students. Enhance your skills with expert-led courses and practical experience."
        />
        <meta
          name="keywords"
          content="government training, college training, skill enhancement, government programs, student training"
        />
        <meta name="author" content="Your Company Name" />
        <meta
          property="og:title"
          content="Government Training Program - College Training"
        />
        <meta
          property="og:description"
          content="Join our comprehensive government training program designed for college students. Enhance your skills with expert-led courses and practical experience."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.yourwebsite.com/training-programs/government-college-training"
        />
        <meta
          property="og:image"
          content="https://www.yourwebsite.com/images/og-government-training.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Government Training Program - College Training"
        />
        <meta
          name="twitter:description"
          content="Join our comprehensive government training program designed for college students. Enhance your skills with expert-led courses and practical experience."
        />
        <meta
          name="twitter:image"
          content="https://www.yourwebsite.com/images/twitter-government-training.jpg"
        />
        <link
          rel="canonical"
          href="https://www.yourwebsite.com/training-programs/government-college-training"
        />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Navbar */}
        <div className="sticky top-0 z-50 backdrop-blur-md bg-white/90 shadow-sm">
          <nav className="text-[#1f1f1f] max-w-7xl mx-auto px-5 md:px-8 w-full flex justify-between items-center text-sm font-medium py-3">
            <div className="text-3xl font-bold inline-flex items-center">
              <Link href="/">
                <div className="relative w-[80px] h-[30px] md:w-[150px] md:h-[50px]">
                  <img
                    src="/logo.png"
                    alt="Logo"
                    className="object-cover w-full h-full"
                  />
                </div>
              </Link>
            </div>
            <NavbarSection />
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          {/* <img
            src="/new-image/govt.webp"
            alt="Government Training Programs"
            className="absolute inset-0 w-full h-full object-cover"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-black/50 flex items-center">
            <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-xl text-white"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  Government Training Programs
                </h1>
                <p className="text-lg md:text-xl opacity-90">
                  Partner with leading government initiatives to empower the
                  next generation of skilled professionals.
                </p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <button className="mt-8 bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Explore Programs
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        {/* <section className="py-12 bg-gradient-to-r from-indigo-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={containerVariants}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.id}
                  variants={cardVariants}
                  className="bg-white rounded-xl shadow-md p-6 text-center transform hover:scale-105 transition-transform duration-300"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section> */}

        {/* Main Program Cards Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Our Government Partnerships
              </h2>
              <p className="max-w-3xl mx-auto text-gray-600 text-lg">
                Collaborate with prestigious government bodies to drive
                innovation and empower the workforce of tomorrow.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {ties.map((tie) => (
                <motion.div key={tie.id} variants={cardVariants}>
                  <Card
                    className="h-full overflow-hidden group cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white"
                    onClick={() => router.push(tie.link)}
                  >
                    <CardHeader className="h-52 p-0 relative overflow-hidden bg-gray-100">
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
                      <div className="h-full flex items-center justify-center p-6">
                        <img
                          src={tie.img}
                          alt={tie.name}
                          className="max-h-32 object-contain"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-primary transition-colors">
                        {tie.name}
                      </h3>
                      <p className="text-gray-600 flex gap-3">
                        <BsCircleFill className="text-primary w-2 h-2 flex-shrink-0 mt-1.5" />
                        <span>{tie.description}</span>
                      </p>
                      <div className="mt-4 pb-2">
                        <span className="inline-flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                          Learn more
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
                About Our Government Training Program
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                We are committed to empowering individuals through a wide array
                of skill development initiatives in partnership with esteemed
                government bodies. Our Government Training Program serves as a
                cornerstone for fostering innovation, enhancing employability,
                and driving economic growth. By collaborating with national and
                state-level organizations, we aim to bridge the skill gap and
                prepare a workforce ready to meet the demands of the
                ever-evolving job market.
              </p>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-primary/5 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Nationwide Impact
                  </h3>
                  <p className="text-gray-600">
                    Our initiatives span across the country, reaching diverse
                    communities and demographics.
                  </p>
                </div>
                <div className="bg-primary/5 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Industry Partnerships
                  </h3>
                  <p className="text-gray-600">
                    Collaborating with industry leaders to align training with
                    market demands and opportunities.
                  </p>
                </div>
                <div className="bg-primary/5 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Certified Curriculum
                  </h3>
                  <p className="text-gray-600">
                    Government-approved curriculum designed to meet national
                    standards of excellence.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Institution?
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
                Join our government training programs and provide your students
                with industry-recognized certifications and skills.
              </p>
              <button className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg transform hover:-translate-y-1">
                Partner With Us
              </button>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

// /* eslint-disable @next/next/no-img-element */
// import React from 'react';
// import Head from 'next/head';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card';
// import { BsCircleFill } from 'react-icons/bs';
// import { useRouter } from 'next/navigation';
// import SVGSpeedometer from '../training-programs/_components/Circular';
// import { cn } from '@/lib/utils';
// import Link from 'next/link';
// import NavbarSection from '@/component/navbar/NavbarSection';

// const ties = [
//   {
//     id: 1,
//     name: 'Karnataka Skill Development Corporation',
//     description:
//       'In partnership with bSkilling, we drive impactful programs focused on innovation and skill development.',
//     img: '/new-image/ksdc.png', // Add the image URL when ready
//     link: `/government-training-program/karnataka-skill-development-corporation`,
//   },
//   {
//     id: 2,
//     name: 'Naan Mudhalvan',
//     description:
//       'A transformative initiative aimed at empowering youth with industry-relevant skills, career guidance, and opportunities, shaping the leaders of tomorrow.',
//     img: '/new-image/naan-logo.png',
//     link: `/government-training-program/naan-mudhalvan`, // Add the image URL when ready
//   },
//   {
//     id: 3,
//     name: 'Future Skills',
//     description:
//       'A premier trade body and chamber of commerce for the tech industry, driving innovation, policy advocacy, and skill development to foster India’s digital transformation.',
//     img: '/new-image/future-skills.png', // Add the image URL when ready
//     link: `/government-training-program/nasscom-future-skills`,
//   },
//   {
//     id: 4,
//     name: 'NSDC',
//     description:
//       'The National Skill Development Corporation focuses on empowering India’s workforce through skill development initiatives, industry partnerships, and training programs to enhance employability.',
//     img: '/new-image/nsdc.png', // Add the image URL when ready
//     link: `/government-training-program/national-skill-development-corporation`,
//   },
// ];

// export default function GovernmentTrainingProgram() {
//   const router = useRouter();
//   return (
//     <>
//       <Head>
//         <title>Government Training Program - College Training</title>
//         <meta
//           name="description"
//           content="Join our comprehensive government training program designed for college students. Enhance your skills with expert-led courses and practical experience."
//         />
//         <meta
//           name="keywords"
//           content="government training, college training, skill enhancement, government programs, student training"
//         />
//         <meta name="author" content="Your Company Name" />
//         <meta
//           property="og:title"
//           content="Government Training Program - College Training"
//         />
//         <meta
//           property="og:description"
//           content="Join our comprehensive government training program designed for college students. Enhance your skills with expert-led courses and practical experience."
//         />
//         <meta property="og:type" content="website" />
//         <meta
//           property="og:url"
//           content="https://www.yourwebsite.com/training-programs/government-college-training"
//         />
//         <meta
//           property="og:image"
//           content="https://www.yourwebsite.com/images/og-government-training.jpg"
//         />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta
//           name="twitter:title"
//           content="Government Training Program - College Training"
//         />
//         <meta
//           name="twitter:description"
//           content="Join our comprehensive government training program designed for college students. Enhance your skills with expert-led courses and practical experience."
//         />
//         <meta
//           name="twitter:image"
//           content="https://www.yourwebsite.com/images/twitter-government-training.jpg"
//         />
//         <link
//           rel="canonical"
//           href="https://www.yourwebsite.com/training-programs/government-college-training"
//         />
//       </Head>
//       <main className="">
//         <div className="sticky top-0 z-[50] bg-card">
//           <nav className="text-[#1f1f1f] bg-card 2xl:w-[80vw] px-5  md:w-[90vw] w-full 2xl:m-auto flex justify-between items-center text-sm font-medium md:py-2  ">
//             <div className="text-3xl font-bold inline-flex items-center">
//               {/* <span className="">b</span>
//             <span>Skilling</span> */}
//               <Link href="/">
//                 <div className="relative w-[80px] h-[30px] md:w-[150px] md:h-[50px] ">
//                   <img
//                     src="/logo.png"
//                     alt="Logo"
//                     className="object-cover"
//                     // Makes the image fill the container
//                     // Ensures the image is contained within the container
//                     // Ensures the image loads quickly for above-the-fold content
//                   />
//                 </div>
//               </Link>
//               {/* <Image
//                 src="/logo.png"
//                 className="object-contain md:w-[150px] md:h-[50px] w-[120] h-[30px]"
//                 alt="Logo"
//                 layout="fill" // Makes the image cover the container
//                 objectFit="cover" // Ensures the image covers the container without losing aspect ratio
//                 quality={100} // Sets the image quality to the maximum
//                 priority // Ensures the image loads quickly for above-the-fold content
//               /> */}
//             </div>
//             <NavbarSection />
//           </nav>
//         </div>
//         <div className="bg-red-400">
//           <img
//             src="/new-image/govt.webp"
//             alt="asasasasasa"
//             className="w-full object-cover"
//           />
//         </div>
//         <div className="w-full  py-10 md:px-10 px-4 bg-gradient-to-br  relative">
//           <h2 className="text-3xl font-bold text-center text-primary">
//             Goverment Training Programs
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 md:gap-10 gap-5 mt-10 ">
//             {ties.map((tie) => (
//               <Card
//                 key={tie.id}
//                 className=" group  relative"
//                 role="button"
//                 onClick={() => {
//                   router.push(tie.link);
//                 }}
//               >
//                 <CardHeader className="h-52  p-0">
//                   <img
//                     src={tie.img}
//                     alt={tie.name}
//                     className={cn(
//                       ' p-3 object-cover m-auto h-40 ',
//                       tie.id === 4 && 'xl:h-28',
//                       tie.id === 3 && 'xl:h-28'
//                     )}
//                   />
//                 </CardHeader>
//                 <CardContent className="mt-5 ">
//                   <p className="text-xl font-bold">{tie.name}</p>
//                   <p className="inline-flex gap-x-2 mt-5">
//                     {' '}
//                     <span>
//                       <BsCircleFill className="text-primary w-3 mt-1" />
//                     </span>{' '}
//                     <span>{tie.description}</span>
//                   </p>
//                   <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-80 group-hover:backdrop-blur-sm">
//                     <span className="text-white text-xl  tracking-wider opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110 group-hover:animate-pulse">
//                       View Details
//                     </span>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//           {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//             <h1>Goverment Training Program</h1>
//           </div> */}
//         </div>
//         <h1 className="text-3xl font-bold mt-5 px-2 text-center ">
//           About Our Government Training Program
//         </h1>
//         <div className="w-[80vw] m-auto">
//           <p className="px-2 mt-5">
//             We are committed to empowering individuals through a wide array of
//             skill development initiatives in partnership with esteemed
//             government bodies. Our Government Training Program serves as a
//             cornerstone for fostering innovation, enhancing employability, and
//             driving economic growth. By collaborating with national and
//             state-level organizations, we aim to bridge the skill gap and
//             prepare a workforce ready to meet the demands of the ever-evolving
//             job market.
//           </p>
//         </div>
//       </main>
//     </>
//   );
// }
