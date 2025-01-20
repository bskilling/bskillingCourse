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
import Image from 'next/image';
import Link from 'next/link';

export default function NSDC() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <>
      <Head>
        <title>National Skill Development Corporation | NSDC</title>
        <meta
          name="description"
          content="Explore the National Skill Development Corporation (NSDC) initiatives, empowering individuals with skills for a better future."
        />
        <meta
          name="keywords"
          content="National Skill Development Corporation, NSDC, skill development, vocational training, employment, India skills, training programs"
        />
        <meta name="author" content="NSDC" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="National Skill Development Corporation | NSDC"
        />
        <meta
          property="og:description"
          content="Learn about NSDC's mission to provide skill development and vocational training to enhance employability in India."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nsdcindia.org" />
        <meta
          property="og:image"
          content="https://www.nsdcindia.org/logo.png"
        />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="National Skill Development Corporation | NSDC"
        />
        <meta
          name="twitter:description"
          content="Discover NSDC's role in skill development and vocational training across India."
        />
        <meta
          name="twitter:image"
          content="https://www.nsdcindia.org/logo.png"
        />
        <meta name="twitter:site" content="@NSDC" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.nsdcindia.org" />
        <link rel="icon" href="/favicon.ico" />
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
            src="/new-images/aa.png"
            alt=""
            className=" object-cover m-auto xl:w-[80vw] 2xl:w-full  h-auto"
          />
          {/* <h1 className="absolute top-1/3 left-20 mt-5   text-black text-lg md:text-xl font-bold">
            A massive industry relevant skill enhancement initiative for the
            Youth of Tamil Nadu.
          </h1> */}
        </div>
        <div className="md:w-[80vw] md:px-0 px-4 w-full m-auto">
          <h1 className="md:text-4xl text-xl font-bold md:font-medium text-center text-[#004aad] mt-10">
            Empowering India&#39;s Workforce: NSDC Skill Development Program for
            Career Success
          </h1>
          <p className="mt-5 pr-10 border-l-4 border-[#004aad] pl-3">
            The National Skill Development Corporation (NSDC), in partnership
            with bSkilling, invites you to join an exclusive government-backed
            initiative designed to shape the future workforce of India. With a
            strong focus on empowering individuals with cutting-edge skills,
            this program offers unparalleled opportunities to master Generative
            AI and Cloud Computing through flexible learning options, real-world
            experience, and career advancement support.
          </p>
          <div>
            <p className="text-2xl text-center mt-10 text-[#004aad]">
              Revolutionize Your Career with Generative AI and Cloud Computing
              Training
            </p>
            <div className="grid md:grid-cols-2 gap-10 my-10">
              <div className="relative group">
                <section className="absolute inset-0 bg-black bg-opacity-60 group-hover:cursor-pointer text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center p-6 overflow-y-auto">
                  <h2 className="text-2xl font-bold mb-4">
                    AI and Career Opportunities
                  </h2>
                  <p className="mb-4">
                    AI is transforming industries and creating exciting career
                    paths.
                  </p>

                  <h3 className="text-xl font-semibold mb-2">Why Choose AI?</h3>
                  <p className="mb-4">
                    High demand, competitive salaries, and innovative work.
                  </p>

                  <h3 className="text-xl font-semibold mb-2">
                    Essential Skills
                  </h3>
                  <p className="mb-4">
                    Key skills: programming, mathematics, and problem-solving.
                  </p>

                  <h3 className="text-xl font-semibold mb-2">Future Scope</h3>
                  <p>
                    AI will shape future technologies like smart cities and
                    autonomous vehicles.
                  </p>
                </section>

                <img
                  src="/new-images/ai.jpg"
                  alt="AI Illustration"
                  className="h-[450px] object-cover w-full rounded-lg"
                />
              </div>
              <div className="relative group">
                <section className="absolute inset-0 bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center p-6 overflow-y-auto">
                  <h2 className="text-2xl font-bold mb-4">
                    Cloud Computing and Career Opportunities
                  </h2>
                  <p className="mb-4">
                    Cloud computing is revolutionizing how businesses operate,
                    offering scalable and efficient solutions.
                  </p>

                  <h3 className="text-xl font-semibold mb-2">
                    Why Choose Cloud Computing?
                  </h3>
                  <p className="mb-4">
                    High demand, flexibility, and significant cost savings.
                  </p>

                  <h3 className="text-xl font-semibold mb-2">
                    Essential Skills
                  </h3>
                  <p className="mb-4">
                    Key skills: cloud platforms, networking, and security.
                  </p>

                  <h3 className="text-xl font-semibold mb-2">Future Scope</h3>
                  <p>
                    Cloud computing will drive innovations in big data, IoT, and
                    AI.
                  </p>
                </section>

                <img
                  src="/new-images/cloud.jpg"
                  alt=""
                  className="h-[450px] object-cover w-full rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-3xl text-[#004aad] pl-3">
              Why Choose This Program?
            </h2>
            <p className="mt-5 pr-10 border-l-4 border-[#ffe5c7] pl-3 ">
              Government-Backed Credibility Supported by the Skill India
              Mission, this initiative ensures affordability, inclusivity, and
              access to globally recognized certifications.
            </p>
            <div>
              <div className="mt-5 pr-10 border-l-4 border-[#ffe5c7] pl-3 list-disc">
                <p>
                  Creating opportunities for all, including underserved
                  communities in rural areas.
                </p>
                <p>Apgning training modules with emerging industry demands.</p>
                <p>
                  Empowering the next generation to thrive in high-demand skills
                  in various industries.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-3xl text-[#004aad] pl-3">
              Flexible Learning Options
            </h2>
            <div className="border-l-4 border-[#004aad] pl-7 relative mt-10 pb-10 pr-20 ">
              <FaCircle className="absolute -left-2.5 -top-0 text-[#004aad]" />
              <p className="-mt-5">
                Generative AI Free Basics (15 Hours): Perfect for curious minds
                starting their journey into AI, covering essential concepts and
                foundational knowledge.
              </p>
            </div>
            <div className="border-l-4 border-[#004aad] pl-7 relative pb-10 pr-20 ">
              <FaCircle className="absolute -left-2.5 top-1 text-[#004aad]" />
              <p>
                Generative AI Advanced (45 Hours): A deep dive into advanced
                generative technologies, hands-on projects, and tools like
                ChatGPT and DALL-E to build expertise.
              </p>
            </div>
            <div className="border-l-4 border-[#004aad] pl-7 relative  pr-20">
              <FaCircle className="absolute -left-2.5 top-3 text-[#004aad]" />
              <p>
                Cloud Computing Advanced (40 Hours): Comprehensive training in
                cloud solutions, including deployment, architecture, and
                management, with a focus on platforms like AWS, Azure, and
                Google Cloud.
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-[80vw] md:px-0 px-4 w-full m-auto mt-10">
          <h2 className="text-3xl text-[#004aad] text-center pl-3">
            Career-Oriented Approach
          </h2>
          <p className="mt-4">
            From foundational training to advanced specializations, our courses
            are tailored to meet the demands of top employers. With real-world
            projects, you’ll graduate job-ready, armed with in-demand skills.
          </p>
          <div className="md:flex items-center gap-5 mt-5">
            <div className="relative  p-6 text-gray-800 md:block hidden">
              <div className="relative transform -skew-x-12 bg-[#004aad] p-8 text-white">
                <h3 className="text-lg font-bold transform skew-x-12">
                  Apprenticeship and Job Assistance
                </h3>
                <ul className=" pl-5 list-disc transform skew-x-12 text-white">
                  {[
                    'This program doesn’t stop at skill development—it propels you into the workforce:',
                    'Apprenticeships: Gain practical, hands-on experience with top industry leaders (subject to eligibility).',
                    'Job Assistance: Access a network of 500+ employers and receive personalized career counseling, resume support, and interview preparation.',
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
                  'This program doesn’t stop at skill development—it propels you into the workforce:',
                  'Apprenticeships: Gain practical, hands-on experience with top industry leaders (subject to eligibility).',
                  'Job Assistance: Access a network of 500+ employers and receive personalized career counseling, resume support, and interview preparation.',
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
          <h2 className="text-3xl text-[#004aad] text-center pl-3">
            Program Features
          </h2>
          {/* <p className="text-sm  text-[#004aad] p-4">
            To ensure training excellence, Naan Mudhalvan has partnered with
            bSkilling, a reputed institute known for its innovative workforce
            development programs. This collaboration provides:
          </p> */}
          <div className="w-[80vw] mt-10 grid grid-cols-1 md:grid-cols-1 gap-10 items-center">
            <div className="  grid grid-cols-2 gap-x-10 gap-y-10">
              <p>
                <span className="font-bold text-xl">
                  Generative AI and Cloud Computing Mastery
                </span>
                <span>
                  ◦ Explore the transformative potential of AI and the limitless
                  capabilities of cloud technologies.
                </span>
                <span>
                  ◦ Practical applications that prepare you for real-world
                  challenges.
                </span>
              </p>
              <p>
                <span className="font-bold text-xl">
                  {' '}
                  Flexible Learning Paths
                </span>{' '}
                Free foundational courses and paid advanced programs to suit
                your career goals.
              </p>
              <p>
                <span className="font-bold text-xl">
                  Government-Supported Affordability
                </span>{' '}
                Leverage government schemes and subsidies to make advanced
                training accessible.
              </p>
              <p>
                <span className="font-bold text-xl">
                  Skill India Digital Hub (SIDH)
                </span>{' '}
                A trusted learning platform providing seamless access to
                courses, resources, and certifications.
              </p>
              <p>
                <span className="font-bold text-xl">
                  Inclusion and Accessibility
                </span>{' '}
                Tailored for learners from Tier 2 and Tier 3 cities, with a
                focus on bridging the skill gap across communities.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 md:p-10 py-5 mt-10">
          <p className="text-4xl text-[#004aad] text-center pl-3 ">
            Who Should Join ?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-10">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#004aad]">
                  Students and Beginners
                </CardTitle>
                <CardDescription>
                  Take the first step with our free Generative AI course and
                  explore the world of future technologies.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="/new-images/students.jpg"
                  alt=""
                  className="w-full object-cover h-80"
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Professionals and Job Seekers</CardTitle>
                <CardDescription>
                  Upgrade your expertise with advanced AI and Cloud Computing
                  training to stay ahead in the competitive job market.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="/new-images/job-seekers.jpg"
                  alt=""
                  className="w-full object-cover md:h-40 xl:h-52 h-80   "
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Aspiring Tech Enthusiasts</CardTitle>
                <CardDescription>
                  Discover the limitless potential of AI and cloud technologies,
                  with support to transition your passion into a career.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="/new-images/tech.jpg"
                  alt=""
                  className="w-full object-cover h-80"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="xl:w-[80vw] md:py-10 py-4  px-4 w-full m-auto md:mt-0 mt-0 ">
          <div>
            <h1 className="text-4xl text-[#004aad]  text-center mt-10">
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
            <h2 className="text-4xl text-[#004aad]  text-center mt-10">
              Your Journey to Success Starts Here
            </h2>
            <p className="mt-4">
              This program is more than a course—it’s a movement to build a
              Digitally Skilled India. Supported by NSDC and bSkilling, this
              initiative is designed to empower you with the tools, knowledge,
              and support needed to succeed in the fast-paced world of
              technology. Don’t miss this opportunity to transform your future.
              Enroll today for free Generative AI basics, or take the next step
              with advanced learning and hands-on experience in Generative AI
              and Cloud Computing!
            </p>
            <p className="mt-4">
              Take the first step toward a successful career today!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
