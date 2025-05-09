/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import Head from 'next/head';
import NavbarSection from '@/component/navbar/NavbarSection';
import { FaCircle, FaHandPointRight } from 'react-icons/fa';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FaCircleArrowRight } from 'react-icons/fa6';
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import Link from 'next/link';
export default function NaanMudhalvan() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <>
      <Head>
        <title>Naan Mudhalvan - Empowering Leaders</title>
        <meta
          name="description"
          content="Discover the Naan Mudhalvan initiative focused on empowering leaders with essential skills and knowledge."
        />
        <meta
          name="keywords"
          content="Naan Mudhalvan, leadership, empowerment, skill development, training"
        />
        <meta name="author" content="Your Name or Organization" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Naan Mudhalvan - Empowering Leaders" />
        <meta
          property="og:description"
          content="Learn about the Naan Mudhalvan initiative aimed at developing leadership skills and knowledge."
        />
        <meta property="og:image" content="URL-to-your-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/naan-mudhalvan" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="">
        <div className="sticky top-0 z-[50] bg-card">
          <nav className="text-[#1f1f1f] bg-card 2xl:w-[80vw] px-5  md:w-[90vw] w-full 2xl:m-auto flex justify-between items-center text-sm font-medium md:py-2  ">
            <div className="text-3xl font-bold inline-flex items-center">
              {/* <span className="">b</span>
            <span>Skilling</span> */}
              <Link href="/">
                <div className="relative w-[120px] h-[30px] md:w-[150px] md:h-[50px]">
                  <img
                    src="/logo.png"
                    alt="Logo"
                    // Makes the image fill the container
                    // Ensures the image is contained within the container
                    // Ensures the image loads quickly for above-the-fold content
                  />
                </div>
              </Link>
              {/* <Image
                src="/logo.png"
                className="object-contain md:w-[150px] md:h-[50px] w-[120] h-[30px]"
                alt="Logo"
                layout="fill" // Makes the image cover the container
                objectFit="cover" // Ensures the image covers the container without losing aspect ratio
                quality={100} // Sets the image quality to the maximum
                priority // Ensures the image loads quickly for above-the-fold content
              /> */}
            </div>
            <NavbarSection />
          </nav>
        </div>
        <div className="relative">
          <img
            width={1000}
            height={500}
            src="/new-image/naan.webp"
            alt=""
            className=" object-cover w-full"
          />
          {/* <h1 className="absolute top-1/3 left-20 mt-5   text-black text-lg md:text-xl font-bold">
            A massive industry relevant skill enhancement initiative for the
            Youth of Tamil Nadu.
          </h1> */}
        </div>
        <div className="md:w-[80vw] md:px-0 px-4 w-full m-auto">
          <h1 className="md:text-4xl text-xl font-bold md:font-medium text-center mt-10">
            Empowering Tamil Nadu’s Youth: Naan Mudhalvan Skill Development Program for Career
            Success
          </h1>
          <p className="mt-5 pr-10 border-l-4 border-[#304443] pl-3">
            In a rapidly evolving job market, the right skills and opportunities can transform
            careers and drive economic growth. The “Naan Mudhalvan Skill Development Program”
            initiated by the Government of Tamil Nadu, is a groundbreaking initiative aimed at
            empowering the state’s youth by bridging the gap between education and employment, this
            program ensures participants are industry-ready, fostering inclusive growth and
            sustainable development. In collaboration with bSkilling, a leading training institute,
            the program delivers cutting-edge, industry-aligned training to build a future-ready
            workforce for students.
          </p>
          <div className="mt-10">
            <h2 className="text-3xl text-[#304443] pl-3">A Vision for Empowerment</h2>
            <p className="mt-5 pr-10 border-l-4 border-[#ffe5c7] pl-3 ">
              Since its launch, the Naan Mudhalvan program has been dedicated to equipping Tamil
              Nadu students with the skills needed to excel in the global job market with a focus on
              inclusivity and innovation.
            </p>
            <div>
              <div className="mt-5 pr-10 border-l-4 border-[#ffe5c7] pl-3 list-disc">
                <p>
                  Creating opportunities for all, including underserved communities in rural areas.
                </p>
                <p>Apgning training modules with emerging industry demands.</p>
                <p>
                  Empowering the next generation to thrive in high-demand skills in various
                  industries.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-3xl text-[#304443] pl-3">
              The Naan Mudhalvan initiative has made a transformative impact:
            </h2>
            <div className="border-l-4 border-[#304443] pl-7 relative mt-10 pb-10 pr-20 ">
              <FaCircle className="absolute -left-2.5 -top-0 text-[#304443]" />
              <p className="-mt-5">
                Empowering thousands of students: through specialized skill development programs
                tailored to industry needs.
              </p>
            </div>
            <div className="border-l-4 border-[#304443] pl-7 relative pb-10 pr-20 ">
              <FaCircle className="absolute -left-2.5 top-1 text-[#304443]" />
              <p>
                Enabling diverse job placements: with a robust network of industry connections,
                bSkilling ensures participants access meaningful employment opportunities, including
                partnerships with 500+ Fortune companies and collaborations with 850 job consultancy
                firms.
              </p>
            </div>
            <div className="border-l-4 border-[#304443] pl-7 relative  pr-20">
              <FaCircle className="absolute -left-2.5 top-3 text-[#304443]" />
              <p>
                Focusing on underserved regions: ensuring rural youth gain access to world-class
                training opportunities.
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-[80vw] md:px-0 px-4 w-full m-auto mt-10">
          <h2 className="text-3xl text-[#304443] text-center pl-3">
            Key Features of Naan Mudhalvan Training Programs
          </h2>
          <div className="md:flex items-center gap-5 mt-5">
            <div className="relative  p-6 text-gray-800 md:block hidden">
              <div className="relative transform -skew-x-12 bg-[#304443] p-8 text-white">
                <h3 className="text-lg font-bold transform skew-x-12">
                  Key Features of Naan Mudhalvan Training Programs
                </h3>
                <ul className=" pl-5 list-disc transform skew-x-12 text-white">
                  {[
                    'Comprehensive Skill Development: Training modules cover technical expertise, and leadership abilities.',
                    'State-of-the-Art Facilities: Advanced training centre’s equipped with the latest technologies for hands-on learning.',
                    'Sector-Specific Training: Programs designed for high-growth industries to maximize employability opportunities.',
                    'Continuous Career Support: Participants receive mentorship and guidance throughout their career journey.',
                    'Focus on Digital Skills: Preparing students to excel in the rapidly digitizing world of work.',
                  ].map((feature, index) => (
                    <li key={index} className="mt-1 text-sm">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:w-1/2 md:-ml-24 mt-6">
              <img src="/new-image/holistic.jpg" alt="" className="w-full" />
            </div>
            <div className="md:hidden">
              <ul className="mt-4  ">
                {[
                  'Comprehensive Skill Development: Training modules cover technical expertise, and leadership abilities.',
                  'State-of-the-Art Facilities: Advanced training centre’s equipped with the latest technologies for hands-on learning.',
                  'Sector-Specific Training: Programs designed for high-growth industries to maximize employability opportunities.',
                  'Continuous Career Support: Participants receive mentorship and guidance throughout their career journey.',
                ].map((feature, index) => (
                  <li key={index} className="mt-3 text-lg ">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 md:w-[80vw] md:px-0 px-4 m-auto w-full">
          <h2 className="text-3xl text-[#304443] text-center pl-3">
            bSkilling Collaboration: Elevating Training Standards
          </h2>
          {/* <p className="text-sm  text-[#304443] p-4">
            To ensure training excellence, Naan Mudhalvan has partnered with
            bSkilling, a reputed institute known for its innovative workforce
            development programs. This collaboration provides:
          </p> */}
          <div className="w-[80vw] mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center m-auto">
            <div className="  flex flex-col gap-y-10">
              <p>
                <span className="font-bold text-xl">Industry-Aligned Curriculum: </span>
                Courses are designed to meet the needs of industries like IT, IoT, Industry 4.0,
                Fintech, and Graphic Design, equipping participants with in-demand skills for
                technology, manufacturing, finance, and design sectors.
              </p>
              <p>
                <span className="font-bold text-xl"> Advanced Tools and Technologies:</span>{' '}
                Hands-on training with industry-standard tools prepares participants to excel in the
                workplace.
              </p>
              <p>
                <span className="font-bold text-xl">Inclusion-Focused Initiatives:</span> Special
                emphasis on reaching under-privileged students, ensuring equitable access to
                opportunities.
              </p>
              <p>
                <span className="font-bold text-xl">Global Job Market Preparation:</span> Training
                that equips Tamil Nadu’s youth to compete on a global scale.
              </p>
            </div>
            <div className="w-full">
              <iframe
                className="h-96 w-full"
                width="1280"
                height="720"
                src="https://www.youtube.com/embed/0d8Yaws-YFw"
                title="Naan Mudhalvan Skill Development Program"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="md:w-[80vw] md:px-0 px-4 w-full m-auto mt-20">
          <h1 className="text-4xl text-[#304443] text-center pl-3">
            Key Initiatives of Naan Mudhalvan
          </h1>
          <p className="mt-5">
            To ensure training excellence, Naan Mudhalvan has partnered with bSkilling, a reputed
            institute known for its innovative workforce development programs. This collaboration
            provides:
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5 xl:w-[80vw]   px-4 w-full m-auto mt-10">
          <div className="">
            <Card className="bg-gradient-to-t from-[#ddbf5c] md:p-8 p-0 to-[#48067e]   text-white rounded-none shadow-2xl animate-slide-up">
              <CardHeader>
                <CardTitle className="text-2xl">1. Skill Development Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  {/* <strong>Skill Development Courses</strong> */}
                  <div className="space-y-6 mt-2">
                    <li>Comprehensive, industry-specific training programs.</li>
                    <li>Focus on emerging technologies and essential skills.</li>
                    <li>
                      Practical, hands-on learning to apply knowledge in real-world scenarios.
                    </li>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="md:mt-20">
            <Card className="bg-gradient-to-t from-[#2a2253] to-[#1436df] p-8  text-white rounded-none shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">2. Career Guidance and Counseling</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  <div className="space-y-5">
                    <li>Personalized career guidance tailored to individual aspirations.</li>
                    <li>Support in exploring career options and setting achievable goals.</li>
                    <li>
                      Assistance with resume building, interview preparation, and career planning.
                    </li>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="md:mt-40">
            <Card className="bg-gradient-to-t from-[#3459ff] to-[#53a1c5] p-8 text-white  rounded-none shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-muted ">3. Placement Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  <div className="space-y-5">
                    <li>Strong network of industry partners for job placement.</li>
                    <li>Access to job fairs and exclusive recruitment drives.</li>
                    <li>Ongoing support throughout the job search process.</li>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="md:w-[50vw] w-full m-auto mt-20">
          <h1 className="md:text-4xl text-3xl font-bold text-[#304443] text-center">
            What Makes the Program Unique?
          </h1>
          <div className=" p-0    mt-10   md:w-fit m-auto">
            <Carousel
              plugins={[plugin.current]}
              className="w-full m-0 p-0"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent className="w-full">
                <CarouselItem className="">
                  <div className="p-1">
                    <Card className="">
                      <CardContent className=" justify-center px-0">
                        <div className=" justify-center">
                          <img
                            src="/new-image/pract.jpg"
                            alt=""
                            className="h-96 object-cover w-full"
                          />
                          <div className="px-5">
                            <h1 className="mt-5">
                              <span className="text-3xl font-semibold text-gray-600">
                                Training Duration
                              </span>
                            </h1>
                            <p className="mt-3">
                              Each course includes 45 hours of intensive, skill-focused training.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                <CarouselItem className="">
                  <div className="p-1">
                    <Card>
                      <CardContent className="px-0">
                        <img
                          src="/new-image/focused.jpg"
                          alt=""
                          className="h-96 object-cover w-full"
                        />
                        <div className="p-5">
                          <h1 className="text-3xl font-semibold text-blue-600">Mode of Delivery</h1>
                          <p className=" font-semibold mt-5">
                            Engaging in-person sessions conducted at respective institutions, led by
                            experienced industry professionals with proven expertise in their
                            fields.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>

        <div className="md:w-[80vw] w-full m-auto mt-20">
          <h3 className="md:text-4xl text-3xl font-bold text-center text-[#304443]">
            Program Designed For ?
          </h3>
          <div className="grid md:grid-cols-2  gap-10 mt-10">
            <div className="p-10 bg-[#304443] text-white text-sm">
              <p className="text-[#ffe5c7] font-bold text-lg">
                Engineering Students in Third-year / fifth-semester students from Anna
                University-affiliated colleges.
              </p>
              <div className="space-y-5">
                <h2 className="font-bold mt-5">
                  Industrial IoT (Internet of Things) and Industry 4.0:
                </h2>
                <p>
                  • Core concepts of IoT, including sensor integration, data communication, cloud
                  connectivity, and industrial use cases.
                </p>
                <p>
                  • Advanced topics such as smart manufacturing, automation, digital transformation,
                  and real-time data analytics for industrial applications.
                </p>
              </div>
            </div>
            <div className="p-10 bg-[#ffe5c7]">
              <p className="text-[#304443] font-bold">
                Arts and Science Students: Undergraduate students from colleges affiliated with
                Bharathiar University and Periyar University.
              </p>
              <div className="text-sm space-y-5 mt-5">
                <h2 className="font-bold">Fintech:</h2>
                <div className=" space-y-5">
                  <p>
                    • Financial Modeling and Valuation: Analysis of financial statements, creation
                    of projection models, valuation methods, and strategies for investment
                    decisions.
                  </p>
                  <p>
                    • GST Compliance and Auditing: In-depth understanding of Goods and Services Tax,
                    tax filing processes, auditing practices, and adherence to Indian regulatory
                    standards.
                  </p>
                </div>

                <h2 className="font-bold">Graphic Design:</h2>
                <p className="">
                  • Fundamentals of design principles, mastery of tools like Adobe Photoshop,
                  Illustrator, and Canva, and building a professional portfolio through
                  industry-oriented projects.
                </p>
              </div>
            </div>
          </div>
          <div className="px-5 md:px-0">
            <h2 className="text-4xl font-bold mt-10">Key Features</h2>
            <div className="space-y-5 mt-5">
              <p>
                <span className="text-xl font-bold space-x-4">Industry Expertise:</span> Trainers
                with practical, real-world experience in relevant domains provide insights into
                current industry trends, tools, and technologies.
              </p>
              <p>
                <span className="text-xl font-bold space-x-4">Hands-On Learning:</span> Emphasis on
                practical sessions, case studies, and project-based learning to ensure students gain
                actionable skills.
              </p>
              <p>
                <span className="text-xl font-bold space-x-4">Customized Curriculum: </span>{' '}
                Designed in collaboration with industry experts to align with current and future job
                market needs.
              </p>
              <p>
                <span className="text-xl font-bold space-x-4">Skill Certification:</span> Students
                receive certificates upon successful completion, enhancing their profiles for job
                placements and internships.
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 bg-gray-100 mt-10  px-4 md:px-0 m-auto">
          <div className="md:w-[80vw] px-4 md:px-0 m-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Expected Outcomes</h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">For Engineering Students</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  So far, 3,5000 students have been successfully trained in Industrial IoT and
                  Industry 4.0, equipping them with cutting-edge knowledge and practical skills.
                </li>
                <li>Gain hands-on knowledge of Industrial IoT and Industry 4.0 concepts.</li>
                <li>
                  Understand the role of automation, smart devices, and data in transforming
                  manufacturing and industrial operations.
                </li>
                <li>
                  Be prepared for roles in industries focusing on digital transformation, industrial
                  automation, and IoT implementation.
                </li>
              </ul>
            </div>

            <div className="">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                For Arts and Science Students
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  Over 21,000 students have successfully completed training in Fintech courses,
                  including Financial Modelling and Valuation, GST Compliance and Auditing, and
                  Graphic Design—equipping them with industry-ready skills for careers in finance,
                  accounting, and the creative industries.
                </li>
                <li>
                  Acquire in-depth knowledge of Fintech tools like financial modeling, valuation
                  techniques, and GST compliance for career opportunities in finance and accounting.
                </li>
                <li>
                  Develop proficiency in graphic design tools, enabling creative roles in
                  advertising, digital marketing, and multimedia design.
                </li>
                <li>
                  Gain an edge in the job market by developing a portfolio of projects showcasing
                  their skills.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="xl:w-[80vw] md:py-10 py-4  px-4 w-full m-auto md:mt-0 mt-0 ">
          <Carousel
            plugins={[plugin.current]}
            className="w-full m-0 p-0"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              <CarouselItem className="md:basis-1/3">
                <img src="/new-image/gallery/1.jpeg" alt="naan-mudhalvan gallery" />
              </CarouselItem>
              <CarouselItem className="md:basis-1/3">
                <img src="/new-image/gallery/2.jpeg" alt="images" />
              </CarouselItem>
              <CarouselItem className="md:basis-1/3">
                <img src="/new-image/gallery/3.jpeg" alt="images" />
              </CarouselItem>
              <CarouselItem className="md:basis-1/3">
                <img src="/new-image/gallery/4.jpeg" alt="images" />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="md:flex hidden" />
            <CarouselNext className="md:flex hidden" />
          </Carousel>
        </div>
        <div className="xl:w-[80vw] md:py-10 py-4  px-4 w-full m-auto md:mt-0 mt-0 ">
          <div>
            <h1 className="text-4xl text-[#304443]  text-center mt-10">Why Choose bSkilling?</h1>
            <p className="mt-4">
              bSkilling is a trusted platform committed to empowering individuals, corporate, and
              students with the skills needed for success in today’s dynamic job market. This
              programs are built on an industry-aligned curriculum, focusing on real-world relevance
              and high-demand skills With practical, hands-on training. participants gain experience
              using current relavant tools and project-based learning to tackle real-world
              challenges effectively. Expert trainers and mentors guide learners throughout their
              journey, offering valuable insights and support. bSkilling emphasizes inclusive growth
              by maximizing the opportunities and providing accessible training for under privileged
              students. Backed by more than 500+ employer network, the platform offers strong
              placement support, by personalized assistance in securing meaningful employment. By
              focusing on emerging technologies and fostering a mindset of lifelong learning,
              bSkilling ensures its participants are future-ready With a proven track record, a
              comprehensive training approach, and collaborative partnerships, bSkilling is your
              gateway to a successful carrier start for students.
            </p>
          </div>
          <div>
            <h2 className="text-4xl text-[#304443]  text-center mt-10">
              Join the Movement for a Skilled Tamil Nadu
            </h2>
            <p className="mt-4">
              The Naan Mudhalvan Skill Development Program, in collaboration with bSkilling, is more
              than a training initiative—it’s a gateway to a brighter future. Whether you’re a
              student, job seeker, or professional looking to enhance your skills, this program is
              designed to unlock your potential.
            </p>
            <p className="mt-4">Take the first step toward a successful career today!</p>
          </div>
          <div className="mt-10">
            <div className="mt-5 flex gap-x-3 items-center justify-center">
              <FaHandPointRight size={50} className="animate-pulse text-destructive" />
              Email:
              <a href="mailto:contact.naanmudhalvan@bskilling.com" className="text-primary ">
                contact.naanmudhalvan@bskilling.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
