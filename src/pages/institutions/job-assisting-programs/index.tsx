/* eslint-disable @next/next/no-img-element */
import NavbarSection from 'components/navbar/NavbarSection';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function JobAssistingPrograms() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalProgram',
    name: 'Job Assisting Programs',
    description:
      'Comprehensive programs designed to enhance your career opportunities through skill development and job placement assistance.',
    provider: {
      '@type': 'Organization',
      name: 'Your Organization Name',
      url: 'https://www.yourwebsite.com',
    },
  };
  return (
    <>
      <Head>
        <title>
          Job Assisting Programs | Enhance Your Career Opportunities
        </title>
        <meta
          name="description"
          content="Explore our comprehensive job assisting programs designed to boost your career prospects and provide you with the necessary skills to succeed in today's job market."
        />
        <meta
          name="keywords"
          content="job assistance, career development, skill enhancement, employment programs, job training"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.yourwebsite.com/job-assisting-programs"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <div>
        <div className="sticky top-0 z-[50] bg-card shadow-md">
          <nav className="text-[#1f1f1f] bg-card 2xl:w-[80vw] px-5 md:w-[90vw] w-full 2xl:m-auto flex justify-between items-center text-sm font-medium md:py-2">
            <div className="text-3xl font-bold inline-flex items-center">
              <Link href="/">
                <div className="relative w-[80px] h-[30px] md:w-[150px] md:h-[50px]">
                  <img src="/logo.png" alt="Logo" className="object-cover" />
                </div>
              </Link>
            </div>
            <NavbarSection />
          </nav>
        </div>
        <div className="h-screen overflow-y-auto"></div>
      </div>
    </>
  );
}
