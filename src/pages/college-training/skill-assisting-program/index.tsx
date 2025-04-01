/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Head from 'next/head';
import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import Speedometer from './_components/Circular';
import SVGSpeedometer from './_components/Circular';
import { MdOutlineArrowRightAlt } from 'react-icons/md';
import SkillOffering from './_components/SkillOffering';

export default function SkillAssistingProgram() {
  return (
    <>
      <Head>
        <title>Skill Assisting Program | Enhance Your Career Skills</title>
        <meta
          name="description"
          content="Join our Skill Assisting Program to enhance your career skills with expert guidance. Unlock your potential and achieve your professional goals."
        />
        <meta
          name="keywords"
          content="Skill Assisting Program, Career Skills, Professional Development, Skill Enhancement, Training Programs"
        />
        <meta name="author" content="Your Company Name" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Skill Assisting Program | Enhance Your Career Skills"
        />
        <meta
          property="og:description"
          content="Join our Skill Assisting Program to enhance your career skills with expert guidance. Unlock your potential and achieve your professional goals."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://yourwebsite.com/skill-assisting-program"
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/images/skill-assisting-banner.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Skill Assisting Program | Enhance Your Career Skills"
        />
        <meta
          name="twitter:description"
          content="Join our Skill Assisting Program to enhance your career skills with expert guidance. Unlock your potential and achieve your professional goals."
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/images/skill-assisting-banner.jpg"
        />
      </Head>
      <div className="">
        <img
          src="/new-image/header1.png"
          alt=""
          className="w-full object-cover "
        />
      </div>
      {/* <div className="bg-gradient-to-r from-blue-500 to-blue-700 md:h-[400px] h-[200px]  w-full flex justify-between">
        <div className="w-1/2">
          <h1 className="md:text-3xl text-sm  pt-10 pl-10  font-bold  animate-slide-down text-primary-foreground">
            EMPOWERING STUDENTS WITH IN- DEMAND SKILLS FOR A BRIGHTER FUTURE
          </h1>
        </div>
        <div className="w-1/2  md:h-[400px] h-[200px] relative">
          <img
            src="/new-image/skill-header.png"
            alt=""
            className="w-[500px] object-cover  mt-10 absolute bottom-0 right-0"
          />
        </div>
      </div> */}
      <div className="p-4 md:p-0  md:m-auto">
        {/* <h1 className="md:text-3xl text-2xl  font-bold text-center md:mt-10 mt-5">
          About Program
        </h1> */}
        {/* <p className="text-muted-foreground text-sm md:text-xl text-center">
          BRIDGING THE GAP BETWEEN ACADEMIA AND INDUSTRY
        </p> */}
        <div className="m-auto w-fit md:hidden">
          <Button className=" m-auto mt-5 text-center">Get Started</Button>
        </div>

        <div className="flex flex-col md:flex-row mt-5  gap-5 md:mt-10 md:w-[80vw] m-auto">
          {/* <div className="md:w-1/2 bg-green-50">
            <img src="/new-image/skill11.jpg" alt="imges" />
          </div> */}
          <div className=" md:flex flex-col">
            <h2 className="text-xl font-bold">
              EMPOWERING STUDENTS WITH IN- DEMAND SKILLS FOR A BRIGHTER FUTURE
            </h2>
            <div className="mt-5">
              The Skill Development Program is specifically designed to bridge
              the gap between academic learning and industry requirements. It
              offers comprehensive training in technical and professional
              skills. The program includes workshops, hands-on projects, and
              mentorship sessions conducted by industry experts. Students are
              presented with real-world challenges to enhance their
              problem-solving and critical-thinking abilities. By the end of the
              program, participants are well-prepared to excel in internships,
              placements, and their future careers.
            </div>
            <div className="mt-5">
              Additionally, the program emphasizes the development of essential
              soft skills such as communication, teamwork, and adaptability,
              which are crucial for professional success. Participants benefit
              from networking opportunities with industry leaders, providing
              valuable insights into current trends and practices. The
              curriculum is continuously updated to reflect the latest
              advancements in technology and industry standards, ensuring that
              students remain competitive and relevant in the job market. With a
              holistic approach to skill development, the program aims to not
              only enhance technical expertise but also foster confidence and a
              growth mindset among students.
            </div>
          </div>
        </div>
        {/* <div className="md:block hidden">
          <h4 className="text-3xl font-bold text-center mt-10 text-primary">
            Focus Area
          </h4>
          <Separator className="my-5" />
        </div> */}
        <section className="mt-5 md:mt-10 md:flex md:flex-row-reverse items-center  md:px-5 md:w-[80vw] m-auto">
          <div className="md:w-1/2 bg-green-50 flex justify-end">
            <img
              src="/new-image/skill2.jpg"
              alt="skill222"
              className="object-cover text-right "
            />
          </div>
          <div className="md:w-1/2 mt-5 md:mt-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              Program Focus Areas
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li className="">
                <span className="text-blue-600 font-semibold">
                  Bridging the gap
                </span>{' '}
                between theoretical academic knowledge and practical industry
                requirements.
              </li>
              <li className="">
                <span className="text-blue-600 font-semibold">
                  Empowering students
                </span>{' '}
                to confidently apply theoretical knowledge in real-world
                scenarios.
              </li>
              <li className="">
                <span className="text-blue-600 font-semibold">
                  Keeping students updated
                </span>{' '}
                with current industry trends, tools, and technologies.
              </li>
              <li className="">
                <span className="text-blue-600 font-semibold">
                  Building problem-solving skills
                </span>{' '}
                through hands-on experiences.
              </li>
            </ul>
          </div>
        </section>

        {/* Program Overview */}
        <section className="md:mt-0 mt-5 md:flex flex-row items-center md:px-5 md:w-[80vw] m-auto">
          <div className="md:w-1/2">
            <img src="/new-image/skill3.jpg" alt="" className="object-cover" />
          </div>
          <div className="bg-white  md:p-12 md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              Key Highlights of the Program
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li className="">
                <span className="text-blue-600 font-semibold">
                  Hands-on Projects:
                </span>{' '}
                Real-world projects to help students apply their classroom
                knowledge in practical scenarios.
              </li>
              <li className="">
                <span className="text-blue-600 font-semibold">
                  Comprehensive Skill Training:
                </span>{' '}
                Covering both technical and soft skills to create well-rounded
                professionals.
              </li>
              <li className="">
                <span className="text-blue-600 font-semibold">
                  Modern Tools & Technologies:
                </span>{' '}
                Exposure to IT systems, data analytics, and emerging
                technologies.
              </li>
              <li className="">
                <span className="text-blue-600 font-semibold">
                  Industry-Relevant Curriculum:
                </span>{' '}
                A carefully curated curriculum aligned with current market
                demands and trends.
              </li>
            </ul>
          </div>
        </section>

        <section className="">
          <SkillOffering />
        </section>

        <section className="bg-gradient-to-br from-blue-300 to-blue-700 py-10 text-white px-10 mt-10">
          <h4 className="text-3xl font-bold  text-center">How It Works ?</h4>
          <div className="flex gap-x-5 items-center justify-center mt-5 gap-y-5 text-sm md:text-base">
            <div className="w-1/3 px-2 bg-white text-primary shadow-xl h-20 flex items-center justify-center">
              <p className=" text-center">
                Enroll in Course
                <p></p>
              </p>
            </div>
            <MdOutlineArrowRightAlt size={40} />
            <div className="w-1/3 px-2 bg-white text-primary shadow-xl h-20 flex items-center justify-center">
              <p className=" text-center">
                Get training online/offline
                <p></p>
              </p>
            </div>
            <MdOutlineArrowRightAlt size={40} />
            <div className="w-1/3 px-2 bg-white text-primary shadow-xl h-20 flex items-center justify-center">
              <p className=" text-center">
                Get Certification
                <p></p>
              </p>
            </div>
          </div>
        </section>
        <section className="mt-5 md:mt-10 md:text md:w-[80vw] m-auto">
          <h4 className="text-3xl font-bold mt-5 text-center ">
            Why Choose us ?
          </h4>

          <div className="mt-5">
            <div className="">
              <ul className="list-disc list-inside space-y-5">
                <li>
                  With over 13+ years of experience in the EdTech industry, b-
                  Skilling Pvt Ltd stands as a pioneer in enhancing
                  employability and preparing students for the future workforce.
                </li>
                <li>
                  <span className="text-primary font-semibold">
                    Collaboration with 350+
                  </span>{' '}
                  colleges across India ensures a wide-reaching impact on
                  student skill development.
                </li>
                <li>
                  <span className="text-primary font-semibold">
                    Partnerships with 500+
                  </span>{' '}
                  global companies open doors for valuable industry insights and
                  opportunities.
                </li>
                <li>
                  Trusted by reputed organizations like{' '}
                  <span className="text-primary">
                    Karnataka Skill Development Corporation, Naan Mudhalvan, and
                    NASSCOM.
                  </span>
                </li>
                <li>
                  Our programs are designed to enhance employability, build
                  confidence, and bridge the gap between academic knowledge and
                  real-world industry requirements.
                </li>
              </ul>
            </div>
          </div>
          <h2 className="text-3xl font-bold mt-10 text-center">
            Our Wall of Fame
          </h2>
          <div className="mt-4 flex flex-wrap justify-center">
            <div className="rounded-full mt-5 bg-gradient-to-br from-[#fdb06c] to-[#f57c13] w-60 h-60 p-3 flex flex-col items-center justify-center m-auto">
              <h4 className="text-3xl font-extrabold animate-pulse">13+</h4>
              <p className="text-lg text-center mt-5 animate-pulse">
                With over 13+ years of experience in the EdTech industry
              </p>
            </div>
            <div className="rounded-full mt-5  bg-gradient-to-br from-[#28C76F] to-[#18924f] w-60 h-60 p-3 flex flex-col items-center justify-center m-auto">
              <h4 className="text-3xl font-extrabold">350+</h4>
              <p className="text-lg text-center mt-5">
                Collaboration with 350+ colleges across India
              </p>
            </div>
            <div className="rounded-full mt-5 bg-[#FF6B6B] w-60 h-60 p-3 flex flex-col items-center justify-center m-auto">
              <h4 className="text-3xl font-extrabold">500+</h4>
              <p className="text-lg text-center mt-5">
                Partnerships with 500+ global companies
              </p>
            </div>
            <div className="rounded-full mt-5 bg-[#2e90c9] w-60 h-60 p-3 flex flex-col items-center justify-center m-auto">
              <h4 className="text-3xl font-extrabold">6000+</h4>
              <p className="text-lg text-center mt-5">
                Students Trained So far
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
