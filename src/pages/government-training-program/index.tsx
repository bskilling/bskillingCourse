/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Head from 'next/head';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { BsCircleFill } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import SVGSpeedometer from '../training-programs/_components/Circular';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import NavbarSection from 'components/navbar/NavbarSection';

const ties = [
  {
    id: 1,
    name: 'Karnataka Skill Development Corporation',
    description:
      'In partnership with bSkilling, we drive impactful programs focused on innovation and skill development.',
    img: '/new-images/ksdc.png', // Add the image URL when ready
    link: `/government-training-program/karnataka-skill-development-corporation`,
  },
  {
    id: 2,
    name: 'Naan Mudhalvan',
    description:
      'A transformative initiative aimed at empowering youth with industry-relevant skills, career guidance, and opportunities, shaping the leaders of tomorrow.',
    img: '/new-images/naan-logo.png',
    link: `/government-training-program/naan-mudhalvan`, // Add the image URL when ready
  },
  {
    id: 3,
    name: 'Future Skills',
    description:
      'A premier trade body and chamber of commerce for the tech industry, driving innovation, policy advocacy, and skill development to foster India’s digital transformation.',
    img: '/new-images/future-skills.png', // Add the image URL when ready
    link: `/government-training-program/future-skills`,
  },
  {
    id: 4,
    name: 'NSDC',
    description:
      'The National Skill Development Corporation focuses on empowering India’s workforce through skill development initiatives, industry partnerships, and training programs to enhance employability.',
    img: '/new-images/nsdc.png', // Add the image URL when ready
    link: `/government-training-program/national-skill-development-corporation`,
  },
];

export default function GovernmentTrainingProgram() {
  const router = useRouter();
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
      <main className="">
        <div className="sticky top-0 z-[50] bg-card">
          <nav className="text-[#1f1f1f] bg-card 2xl:w-[80vw] px-5  md:w-[90vw] w-full 2xl:m-auto flex justify-between items-center text-sm font-medium md:py-2  ">
            <div className="text-3xl font-bold inline-flex items-center">
              {/* <span className="">b</span>
            <span>Skilling</span> */}
              <Link href="/">
                <div className="relative w-[80px] h-[30px] md:w-[150px] md:h-[50px] ">
                  <img
                    src="/logo.png"
                    alt="Logo"
                    className="object-cover"
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
        <div className="bg-red-400">
          <img
            src="/new-images/govt.webp"
            alt="asasasasasa"
            className="w-full object-cover"
          />
        </div>
        <div className="w-full  py-10 md:px-10 px-4 bg-gradient-to-br  relative">
          <h2 className="text-3xl font-bold text-center text-primary">
            Goverment Training Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 md:gap-10 gap-5 mt-10 ">
            {ties.map((tie) => (
              <Card
                key={tie.id}
                className=" group  relative"
                role="button"
                onClick={() => {
                  router.push(tie.link);
                }}
              >
                <CardHeader className="h-52  p-0">
                  <img
                    src={tie.img}
                    alt={tie.name}
                    className={cn(
                      ' p-3 object-cover m-auto h-40 ',
                      tie.id === 4 && 'xl:h-28',
                      tie.id === 3 && 'xl:h-28'
                    )}
                  />
                </CardHeader>
                <CardContent className="mt-5 ">
                  <p className="text-xl font-bold">{tie.name}</p>
                  <p className="inline-flex gap-x-2 mt-5">
                    {' '}
                    <span>
                      <BsCircleFill className="text-primary w-3 mt-1" />
                    </span>{' '}
                    <span>{tie.description}</span>
                  </p>
                  <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-80 group-hover:backdrop-blur-sm">
                    <span className="text-white text-xl  tracking-wider opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110 group-hover:animate-pulse">
                      View Details
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1>Goverment Training Program</h1>
          </div> */}
        </div>
        <h1 className="text-3xl font-bold mt-5 px-2 text-center ">
          About Our Government Training Program
        </h1>
        <div className="w-[80vw] m-auto">
          <p className="px-2 mt-5">
            We are committed to empowering individuals through a wide array of
            skill development initiatives in partnership with esteemed
            government bodies. Our Government Training Program serves as a
            cornerstone for fostering innovation, enhancing employability, and
            driving economic growth. By collaborating with national and
            state-level organizations, we aim to bridge the skill gap and
            prepare a workforce ready to meet the demands of the ever-evolving
            job market.
          </p>
        </div>
      </main>
    </>
  );
}
