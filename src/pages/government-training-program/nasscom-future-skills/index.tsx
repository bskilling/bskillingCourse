/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Head from 'next/head';
import NavbarSection from 'components/navbar/NavbarSection';
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

export default function Nasscom() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <>
      <Head>
        <title>NASSCOM - Empowering India&#39;s Tech Industry</title>
        <meta
          name="description"
          content="Learn about NASSCOM, the premier trade association representing India's technology industry. Discover its initiatives, member benefits, and contributions to the global tech ecosystem."
        />
        <meta
          name="keywords"
          content="NASSCOM, India technology association, software companies, tech industry, policy advocacy, innovation, skill development, tech ecosystem"
        />
        <meta name="author" content="NASSCOM" />
        <meta
          property="og:title"
          content="NASSCOM - Empowering India's Tech Industry"
        />
        <meta
          property="og:description"
          content="NASSCOM is the leading trade association for India's software and service companies, fostering innovation and collaboration in the global tech industry."
        />
        <meta property="og:image" content="/path/to/seo-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/nasscom" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="NASSCOM - Empowering India's Tech Industry"
        />
        <meta
          name="twitter:description"
          content="Explore how NASSCOM supports India's tech sector through policy advocacy, skill development, and global collaborations."
        />
        <meta name="twitter:image" content="/path/to/seo-image.jpg" />
        <link rel="canonical" href="https://yourwebsite.com/nasscom" />
      </Head>
      <div className="">
        <div className="sticky top-0 z-[50] bg-card">
          <nav className="text-[#1f1f1f] bg-card 2xl:w-[80vw] px-5  md:w-[90vw] w-full 2xl:m-auto flex justify-between items-center text-sm font-medium md:py-2  ">
            <div className="text-3xl font-bold inline-flex items-center">
              <Link href="/">
                <div className="relative w-[120px] h-[30px] md:w-[150px] md:h-[50px]">
                  <img src="/logo.png" alt="Logo" />
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
            src="/new-images/Nasscom.webp"
            alt=""
            className=" object-cover m-auto xl:w-[80vw] 2xl:w-full  h-auto"
          />
          {/* <h1 className="absolute top-1/3 left-20 mt-5   text-black text-lg md:text-xl font-bold">
            A massive industry relevant skill enhancement initiative for the
            Youth of Tamil Nadu.
          </h1> */}
        </div>
        <div className="md:w-[80vw] md:px-0 px-4 w-full m-auto">
          <h1 className="md:text-4xl text-xl font-bold md:font-medium text-center text-[#8f0808] mt-10">
            Empowering India&#39;s Digital Future: NASSCOM Skill Development for
            a Tech-Ready Workforce
          </h1>
          <p className="mt-5 pr-10 border-l-4 border-[#8f0808] pl-3">
            <span className="text-[#8f0808] font-bold">
              A Transformative Collaboration Between NASSCOM and bSkilling
            </span>{' '}
            The National Association of Software and Service Companies
            (NASSCOM), in partnership with bSkilling, proudly presents a
            groundbreaking initiative designed to shape India’s digital future.
            By combining NASSCOM’s industry leadership and bSkilling’s
            innovative training expertise, this collaboration aims to empower
            individuals with future-ready skills, bridging the gap between
            aspirations and opportunities in technology and professional
            domains.
          </p>
          <div>
            <div className="">
              <p className="text-2xl  mt-10 text-[#8f0808]">
                Why Choose NASSCOM and bSkilling?
              </p>{' '}
              <div className="mt-5 pr-10 border-l-4 border-[#8f0808] pl-3">
                <p>
                  <span className="font-bold text-[#8f0808]">
                    Unmatched Industry Expertise{' '}
                  </span>
                  Led by global leaders in IT and professional development,
                  NASSCOM and bSkilling offer a unique blend of innovation,
                  relevance, and excellence. Programs are carefully designed to
                  align with industry standards and emerging trends, ensuring
                  you are always ahead in the competitive job market.
                </p>
              </div>
            </div>
            <div className="">
              <h2 className="text-2xl  mt-10 text-[#8f0808]">
                Comprehensive Learning Opportunities
              </h2>
              <p className="mt-5 pr-10 border-l-4 border-[#8f0808] pl-3">
                Our diverse range of courses caters to everyone—from students
                and fresh graduates to seasoned professionals looking to upgrade
                their skills:
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl text-center mt-10 bg-[#8f0808] text-white p-2">
                Categories
              </h3>

              <div className="mt-5">
                <h3 className="bg-[#8f0808] text-white p-2 w-fit">
                  Aligned Course
                </h3>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
                  <Card>
                    <CardHeader className="h-32">
                      <CardTitle>
                        Artificial Intelligence and Machine Learning (50 Hours)
                      </CardTitle>
                      <CardDescription>
                        Dive deep into the advanced concepts of AI and ML,
                        focusing on cutting-edge tools and applications.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img
                        src="/new-images/ai.jpg"
                        alt=""
                        className="w-full h-80 object-cover"
                      />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>
                        Generative AI - Artificial Intelligence and Machine
                        Learning (15 Hours):
                      </CardTitle>
                      <CardDescription>
                        Start your journey with foundational AI knowledge
                        tailored for beginners.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img
                        src="/new-images/aii.jpg"
                        alt=""
                        className="w-full h-80 object-cover"
                      />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>
                        Introduction to Cloud Computing (12 Hours):
                      </CardTitle>
                      <CardDescription>
                        Explore the essentials of cloud technologies, covering
                        fundamental concepts, deployment strategies, and
                        real-world use cases.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img
                        src="/new-images/cloud1.jpg"
                        alt=""
                        className="w-full h-80 object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/*  */}

              <div className="mt-10">
                <h3 className="bg-[#8f0808] text-white p-2 w-fit">
                  Non-Aligned Course
                </h3>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
                  <Card>
                    <CardHeader className="h-32">
                      <CardTitle>
                        PMI - Project Management Professional (PMP) (35 Hours)
                      </CardTitle>
                      <CardDescription>
                        Gain mastery in project management with globally
                        recognized methodologies and practices.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img
                        src="/new-images/pm.jpg"
                        alt=""
                        className="w-full h-80 object-cover"
                      />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>ITIL 4 Foundation (16 Hours)</CardTitle>
                      <CardDescription>
                        Understand IT service management frameworks to
                        effectively align IT with business goals.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img
                        src="/new-images/it.jpg"
                        alt=""
                        className="w-full h-80 object-cover"
                      />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>PRINCE2 Foundation (16 Hours)</CardTitle>
                      <CardDescription>
                        Acquire expertise in process-based project management
                        techniques adaptable to any industry.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img
                        src="/new-images/prm.jpg"
                        alt=""
                        className="w-full h-80 object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-5 border-l-4 pl-5 mt-20">
              <h2 className="text-3xl  text-[#8f0808]">
                Globally Recognized Certifications
              </h2>
              <p className="">
                From practical, hands-on projects to mentorship by industry
                experts, every aspect of our programs is designed to make you
                job-ready. Gain access to exclusive job portals and unlock
                opportunities with top employers.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-5 border-l-4 pl-5 mt-20">
            <p className="text-3xl text-[#8f0808]">Program Highlights</p>
            <p>
              <span className="text-[#8f0808] font-bold">
                Real-World Applications
              </span>
              Each course integrates real-life scenarios and case studies,
              ensuring that participants can confidently apply their knowledge
              to industry challenges.
            </p>
            <p>
              <span className="text-[#8f0808] font-bold">
                A Unique Collaboration with Industry Leaders
              </span>
              The partnership between NASSCOM and bSkilling combines the
              strengths of two powerhouses: NASSCOM’s unparalleled industry
              insights and bSkilling’s innovative learning frameworks.
            </p>
            <p>
              <span className="text-[#8f0808] font-bold">
                Flexibility for Every Learner
              </span>
              Courses are tailored to meet the needs of diverse learners,
              whether you’re a student from a Tier 3 city or a professional
              balancing work and studies.
            </p>
            <p>
              <span className="text-[#8f0808] font-bold">
                Networking and Mentorship Opportunities
              </span>{' '}
              Gain access to a robust network of peers, mentors, and employers,
              creating pathways to career growth and collaboration.
            </p>
          </div>
        </div>

        <div className="bg-gray-100 md:p-10 py-5 mt-10">
          <p className="text-4xl text-[#8f0808] text-center pl-3 ">
            Who Should Join ?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#8f0808]">
                  Students and Fresh Graduates
                </CardTitle>
                <CardDescription>
                  Build a strong foundation in technology and professional
                  skills to launch your career.
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
                <CardTitle>Professionals Seeking Career Advancement</CardTitle>
                <CardDescription>
                  Upgrade your skills in emerging technologies and professional
                  domains to stay ahead in your industry.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="/new-images/job-seekers.jpg"
                  alt=""
                  className="w-full object-cover md:h-40 xl:h-52 h-40   "
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tech Enthusiasts</CardTitle>
                <CardDescription>
                  Turn your passion for AI, cloud computing, or project
                  management into a thriving career.
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
            <h1 className="text-4xl text-[#8f0808]  text-center mt-10">
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
            <h2 className="text-4xl text-[#8f0808]  text-center mt-10">
              Join the Movement to Build India’s Digital Talent Pool
            </h2>
            <p className="mt-4">
              This initiative represents more than just skill development—it’s a
              commitment to transforming India into a global hub of innovation
              and technology. Together, NASSCOM and bSkilling are dedicated to
              empowering individuals, creating opportunities, and driving
              progress.
            </p>
            <div className="p-6 bg-gray-100 rounded-lg  mt-5">
              <h1 className="text-2xl font-bold text-gray-800">
                Your Digital Journey Starts Here
              </h1>
              <p className="mt-4 text-gray-700">
                Don’t wait to take the first step toward a brighter future.
                Enroll today to:
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>Access free foundational courses in AI.</li>
                <li>
                  Advance your expertise with premium programs in Cloud
                  Computing, Professional Skills, and more.
                </li>
                <li>
                  Join a community that’s shaping the future of technology and
                  innovation.
                </li>
              </ul>
              <p className="mt-4 text-gray-700">
                Take charge of your career and become a part of India’s digital
                revolution. Let NASSCOM and bSkilling guide you on your path to
                success.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <div className="mt-5 flex gap-x-3 items-center justify-center">
              <FaHandPointRight
                size={50}
                className="animate-pulse text-destructive"
              />
              Email:
              <a
                href="mailto:contact.nasscom@bskilling.com"
                className="text-primary "
              >
                contact.nasscom@bskilling.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
