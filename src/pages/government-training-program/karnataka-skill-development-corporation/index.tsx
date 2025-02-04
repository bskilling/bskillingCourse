/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Head from 'next/head';
import NavbarSection from 'components/navbar/NavbarSection';
import { FaCircle } from 'react-icons/fa';
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
import Link from 'next/link';
export default function KSDC() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <>
      <Head>
        <title>
          Karnataka Skill Development Corporation (KSDC) | Empowering Skill
          Development
        </title>
        <meta
          name="description"
          content="Learn more about our partnership with Karnataka Skill Development Corporation (KSDC) and discover impactful programs focused on innovation and skill development."
        />
        <meta
          name="keywords"
          content="KSDC, Karnataka Skill Development Corporation, skill development, bSkilling, training programs, innovation"
        />
        <meta name="author" content="Your Company Name" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Karnataka Skill Development Corporation (KSDC) | Empowering Skill Development"
        />
        <meta
          property="og:description"
          content="Discover our partnership with KSDC and explore impactful training programs designed to boost your skills and career prospects."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourwebsite.com/ksdc" />
        <meta
          property="og:image"
          content="https://www.yourwebsite.com/images/ksdc-banner.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Karnataka Skill Development Corporation (KSDC) | Empowering Skill Development"
        />
        <meta
          name="twitter:description"
          content="Explore our partnership with KSDC and find training programs that enhance your skills and career opportunities."
        />
        <meta
          name="twitter:image"
          content="https://www.yourwebsite.com/images/ksdc-banner.jpg"
        />
      </Head>
      <div className="bg-white">
        <div className="sticky top-0 z-[50] bg-card">
          <nav className="text-[#020b39] bg-white 2xl:w-[80vw] px-5  md:w-[90vw] w-full 2xl:m-auto flex justify-between items-center text-sm font-medium md:py-2  ">
            <div className="text-3xl font-bold inline-flex items-center">
              {/* <span className="">b</span>
            <span>Skilling</span> */}
              <Link href="/">
                <img
                  src="/logo.png"
                  className="object-contain md:w-[150px] md:h-[50px] w-[120] h-[30px]"
                  alt="Logo"
                />
              </Link>
            </div>
            <NavbarSection />
          </nav>
        </div>
        <div className="relative">
          <img
            src="/new-images/karnataka.png"
            alt=""
            className=" object-cover w-full"
          />
          <img
            src="/new-images/seal-karnataka.png"
            alt=""
            className="2xl:w-40 md:w-24 w-6 object-cover absolute top-2 right-5"
          />
        </div>
        <div className="md:w-[80vw] md:px-0 px-4 w-full m-auto">
          <h1 className="md:text-4xl text-xl font-bold md:font-medium text-center mt-10">
            Empowering Karnataka’s Youth: Free Job Assistance Skill Development
            Program for Career Success
          </h1>
          <p className="mt-5 pr-10 border-l-4 border-[#020b39] pl-3">
            In today’s competitive job market, skills and opportunities are the
            building blocks for a successful career. The Karnataka Skill
            Development Corporation (KSDC) is stepping up to meet this challenge
            with its Free Job Assistance and Skill Development Program for
            Career Success. Designed to empower youth across Karnataka, this
            initiative bridges the gap between education and employment,
            fostering inclusive growth and economic development.
          </p>
          <div className="mt-10">
            <h2 className="text-3xl text-[#020b39] pl-3">
              A Vision for Empowerment
            </h2>
            <p className="mt-5 pr-10 border-l-4 border-[#f8bb44] pl-3 ">
              Since its establishment in 2008, the Karnataka Skill Development
              Corporation (KSDC) has stood as a transformative force, dedicated
              to uplifting the youth of Karnataka. With a clear mission to
              create opportunities for all, KSDC emphasizes the inclusion of
              marginalized communities such as Scheduled Castes (SC), Scheduled
              Tribes (ST), Other Backward Classes (OBC), and individuals from
              rural areas. By providing accessible, industry-aligned training
              programs, KSDC is shaping a skilled workforce ready to meet the
              demands of a rapidly evolving economy.
            </p>
          </div>
          <div className="mt-10">
            <h2 className="text-3xl text-[#020b39] pl-3">
              Our Achievements KSDC’s efforts over the years have created a
              significant impact:
            </h2>
            <div className="border-l-4 border-[#020b39] pl-7 relative mt-10 pb-10 pr-20">
              <FaCircle className="absolute -left-2.5 -top-0 text-[#020b39]" />
              <p className="-mt-5">
                Empowering over 940,000 individuals: Through comprehensive skill
                development programs, KSDC has empowered young men and women
                across the state.
              </p>
            </div>
            <div className="border-l-4 border-[#020b39] pl-7 relative pb-10 pr-20 ">
              <FaCircle className="absolute -left-2.5 -top-0 text-[#020b39]" />
              <p className="-mt-5">
                Diverse job placements: Thousands of trained candidates have
                been successfully placed in industries such as IT,
                manufacturing, healthcare, retail, and more.
              </p>
            </div>
            <div className="border-l-4 border-[#020b39] pl-7 relative pb-10 pr-20">
              <FaCircle className="absolute -left-2.5 -top-0 text-[#020b39]" />
              <p className="-mt-5">
                Focus on inclusion: Programs are designed to address the unique
                challenges faced by SC/ST, OBC, and rural communities, ensuring
                equitable access to opportunities.
              </p>
            </div>
            <div className="border-l-4 border-[#020b39] pl-7 relative pb-0  pr-20">
              <FaCircle className="absolute -left-2.5 top-3 text-[#020b39]" />
              <p className="-mt-5">
                Focus on inclusion: Programs are designed to address the unique
                challenges faced by SC/ST, OBC, and rural communities, ensuring
                equitable access to opportunities.
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-[80vw] md:px-0 px-4 w-full m-auto mt-10">
          <h2 className="text-3xl text-[#020b39] text-center pl-3">
            Key Features of KSDC’s Training Programs
          </h2>
          <div className="md:flex items-center gap-5 mt-5">
            <div className="relative  p-6 text-gray-800 md:block hidden">
              <div className="relative transform -skew-x-12 bg-[#020b39] p-8 text-white">
                <h3 className="text-lg font-bold transform skew-x-12">
                  Key Features of KSDC’s Training Programs
                </h3>
                <ul className=" pl-5 list-disc transform skew-x-12 text-white">
                  {[
                    'Holistic skill development: Courses are designed to cover technical skills and entrepreneurial abilities.',
                    'State-of-the-art training centers: Equipped with modern facilities to provide hands-on learning experiences.',
                    'Sector-specific training: Programs cater to high-demand industries, ensuring maximum employability for participants.',
                    'Career guidance and mentorship: Continuous support to help individuals identify their strengths and navigate career pathways.',
                    'Focus on digital literacy: Preparing the youth to thrive in a technology-driven world.',
                  ].map((feature, index) => (
                    <li key={index} className="mt-1 text-sm">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:w-1/2 md:-ml-24 mt-6">
              <img src="/new-images/holistic.jpg" alt="" className="w-full" />
            </div>
            <div className="md:hidden">
              <ul className="mt-4  ">
                {[
                  'Holistic skill development: Courses are designed to cover technical skills and entrepreneurial abilities.',
                  'State-of-the-art training centers: Equipped with modern facilities to provide hands-on learning experiences.',
                  'Sector-specific training: Programs cater to high-demand industries, ensuring maximum employability for participants.',
                  'Career guidance and mentorship: Continuous support to help individuals identify their strengths and navigate career pathways.',
                  'Focus on digital literacy: Preparing the youth to thrive in a technology-driven world.',
                ].map((feature, index) => (
                  <li key={index} className="mt-3 text-lg ">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="md:w-[80vw] md:px-0 px-4 w-full m-auto mt-20">
          <h1 className="text-4xl text-[#020b39] text-center pl-3">
            KSDC’s Key Initiatives
          </h1>
          <p className="mt-5">
            KSDC’s Key Initiatives KSDC’s commitment to empowering Karnataka’s
            workforce goes beyond the Free Job Assistance and Skill Development
            Program. Through innovative platforms, strategic partnerships, and
            targeted outreach, KSDC ensures opportunities are accessible to all.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5 xl:w-[80vw]   px-4 w-full m-auto mt-10">
          <div className="">
            <Card className="bg-gradient-to-t from-[#020b39] md:p-8 p-0 to-[#48067e]   text-white rounded-none shadow-2xl animate-slide-up">
              <CardHeader>
                <CardTitle className="text-2xl">Skill Connect Portal</CardTitle>
                <CardDescription className="text-muted ">
                  A game-changing platform designed to bridge the gap between
                  job seekers and employers. The Skill Connect Portal
                  streamlines the job placement process, offering:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  <p className="flex gap-x-2">
                    <span>
                      <FaCircleArrowRight size={20} />
                    </span>{' '}
                    A seamless interface for candidates to showcase their skills
                    and qualifications.
                  </p>
                  <p className="flex gap-x-2">
                    <span>
                      <FaCircleArrowRight size={20} />
                    </span>{' '}
                    Direct access to a diverse range of employers seeking
                    skilled talent.
                  </p>
                  <p className="flex gap-x-2">
                    <span>
                      <FaCircleArrowRight size={20} />
                    </span>{' '}
                    Tools to simplify recruitment and connect the right talent
                    with the right opportunities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-20">
            <Card className="bg-gradient-to-t from-[#020b39] to-[#1436df] p-8  text-white rounded-none shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">Job Fairs</CardTitle>
                <CardDescription className="text-muted text-xs">
                  KSDC organizes impactful job fairs, both online and offline,
                  to expand access to meaningful employment. Key highlights
                  include:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  <p className="flex gap-x-2">
                    <span>
                      {' '}
                      <FaCircleArrowRight size={20} />{' '}
                    </span>
                    <span>
                      {' '}
                      A seamless interface for candidates to showcase their
                      skills and qualifications.
                    </span>
                  </p>
                  <p className="flex gap-x-2">
                    <span>
                      <FaCircleArrowRight size={20} />
                    </span>{' '}
                    <span>
                      Direct access to a diverse range of employers seeking
                      skilled talent.
                    </span>
                  </p>
                  <p className="flex gap-x-2">
                    <span>
                      <FaCircleArrowRight size={20} />
                    </span>{' '}
                    <span>
                      Tools to simplify recruitment and connect the right talent
                      with the right opportunities.
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-40">
            <Card className="bg-gradient-to-t from-[#3459ff] to-[#53a1c5] p-8 text-white  rounded-none shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-muted ">
                  Partnership with bSkilling: Building a Future-Ready Workforce
                </CardTitle>
                <CardDescription className="text-xs text-muted">
                  To amplify its impact, KSDC has joined hands with bSkilling, a
                  leading training institute renowned for its innovative
                  approaches to workforce development. Through this
                  collaboration, KSDC delivers:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  <p className="flex gap-x-2">
                    <span>
                      <FaCircleArrowRight size={20} />
                    </span>{' '}
                    World-class training programs in high-demand fields.
                  </p>
                  <p className="flex gap-x-2">
                    <span>
                      <FaCircleArrowRight size={20} />
                    </span>{' '}
                    Industry-aligned curricula that prepare candidates for
                    real-world challenges.
                  </p>
                  <p className="flex gap-x-2">
                    <span>
                      <FaCircleArrowRight size={20} />
                    </span>{' '}
                    A future-ready workforce equipped to drive Karnataka’s
                    economic growth.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="md:w-[50vw] w-full m-auto mt-20">
          <h1 className="text-4xl font-bold text-[#304443] text-center">
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
                            src="/new-images/pract.jpg"
                            alt=""
                            className="h-96 object-cover w-full"
                          />
                          <div className="px-5">
                            <h1 className="mt-5">
                              <span className="text-3xl font-semibold text-gray-600">
                                180 Hours of Practical Training:
                              </span>
                            </h1>
                            <p className="mt-3">
                              180 Hours of Practical Training: The program
                              includes intensive hands-on learning, equipping
                              participants with real-world skills.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem className="">
                  <div className="p-1">
                    <Card className="">
                      <CardContent className="px-0">
                        <div>
                          <img
                            src="/new-images/tech.png"
                            alt=""
                            className="max-h-96  pl-5 object-cover rounded-md m-auto"
                          />
                          <div className="px-5">
                            <span className="text-3xl font-semibold text-orange-600">
                              State-of-the-Art Tools and Technologies:
                            </span>{' '}
                            <p className="mt-8 ">
                              Students work with industry-grade tools, preparing
                              them to meet the demands of modern workplaces.
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
                          src="/new-images/focused.jpg"
                          alt=""
                          className="h-96 object-cover w-full"
                        />
                        <div className="p-5">
                          <h1 className="text-3xl font-semibold text-blue-600">
                            Focused Inclusion
                          </h1>
                          <p className=" font-semibold mt-5">
                            The partnership prioritizes SC/ST, OBC, and
                            underserved communities, ensuring equal access to
                            opportunities
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
        <div className="xl:w-[80vw] py-10  px-4 w-full m-auto mt-20 ">
          <h2 className="text-2xl border-l-8 border-[#020b39] pl-4">
            How to Enroll in the Free Job Assistance and Skill Development
            Program Enrolling in this life-changing program is easy and
            accessible for eligible candidates.
          </h2>

          <div className=" rounded-md mt-10">
            <h2 className="text-xl font-bold  mt-10">
              Eligibility Requirements:
            </h2>
            <div className="grid md:grid-cols-5 grid-cols-2 mt-5 gap-5">
              <div className="min-h-32 max-h-96 bg-[#020b39] text-white  shadow-xl rounded-md p-6">
                <p>
                  • Proof of Karnataka residency (Aadhar Card, Voter ID,
                  Passport, etc.).
                </p>
              </div>
              <div className="min-h-32 max-h-96 bg-[#f8bb44] shadow-xl rounded-md p-6">
                {' '}
                <p>• Educational certificates (diploma or degree).</p>
              </div>
              <div className="min-h-32 max-h-96 md:bg-[#020b39]  bg-[#f8bb44] md:text-white shadow-xl rounded-md p-6">
                {' '}
                <p>
                  • Caste certificate for SC/ST and OBC candidates, if
                  applicable.
                </p>
              </div>
              <div className="min-h-32 max-h-96 md:bg-[#f8bb44] bg-[#020b39] text-white  shadow-xl rounded-md p-6">
                <p>• BE & B-Tech Students</p>
              </div>
              <div className="min-h-32 max-h-96 md:bg-[#020b39] bg-[#f8bb44] md:text-white shadow-xl rounded-md p-6">
                <p>• Passed-out year 2024 & 2025</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold  mt-10">The Impact So Far</h2>
            <p className="mt-4">
              KSDC’s programs have already transformed the lives of thousands,
              helping them secure high-growth jobs in industries like IT,
              software development, and data analytics. By addressing the skills
              gap and fostering inclusive growth, KSDC is creating a workforce
              that is ready for the future.
            </p>
          </div>
          <div>
            <h1 className="text-4xl text-[#020b39]  text-center mt-10">
              Why Choose bSkilling?
            </h1>
            <p className="mt-4">
              bSkilling is a trusted platform committed to empowering
              individuals, corporate, and students with the skills needed for
              success in today’s dynamic job market. This programs are built on
              an industry-aligned curriculum, focusing on real-world relevance
              and high-demand skills With practical, hands-on training.
              participants gain experience using current relavant tools and
              project-based learning to tackle real-world challenges
              effectively. Expert trainers and mentors guide learners throughout
              their journey, offering valuable insights and support. bSkilling
              emphasizes inclusive growth by maximizing the opportunities and
              providing accessible training for under privileged students.
              Backed by more than 500+ employer network, the platform offers
              strong placement support, by personalized assistance in securing
              meaningful employment. By focusing on emerging technologies and
              fostering a mindset of lifelong learning, bSkilling ensures its
              participants are future-ready With a proven track record, a
              comprehensive training approach, and collaborative partnerships,
              bSkilling is your gateway to a successful carrier start for
              students.
            </p>
          </div>
          <div>
            <h2 className="text-4xl text-[#020b39]  text-center mt-10">
              Join the Movement for a Skilled Karnataka
            </h2>
            <p className="mt-4">
              The Free Job Assistance and Skill Development Program for Career
              Success is more than just a training initiative—it’s a pathway to
              a brighter future. Whether you’re a student, a job seeker, or
              someone looking to upgrade your skills, KSDC is here to support
              your journey.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
