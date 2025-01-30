/* eslint-disable @next/next/no-img-element */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Head from 'next/head';
import React, { use, useEffect, useState } from 'react';

import { GetServerSideProps } from 'next';
import { Course } from 'common/util/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import ShowMoreText from './_components/Text';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NavbarSection from 'components/navbar/NavbarSection';

interface IndividualTrainingProps {
  training: Course[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_TRAINING_BASE_URL}api/v1/get-course-title`,
      {
        withCredentials: true,
      }
    );
    const data = response;

    return {
      props: { training: data?.data?.courses },
    };
  } catch (error) {
    console.error(error);

    // Handle errors gracefully (optional: you can render a custom error page)
    return {
      props: { training: null },
    };
  }
};

export default function IndividualTraining({
  training,
}: IndividualTrainingProps) {
  const router = useRouter();
  const { query } = router;
  const { tab } = query;
  const [activeTab, setActiveTab] = useState(tab ?? 'Artificial intelligence');

  useEffect(() => {
    setActiveTab(tab ?? 'Artificial intelligence');
  }, [tab]);

  if (!training) {
    return <div className=""></div>;
  }
  const groupedItems: { [key: string]: Course[] } = training.reduce(
    (acc, item) => {
      // @ts-expect-error error
      if (!acc[item.category as string]) {
        // @ts-expect-error error

        acc[item.category as string] = [];
      }
      // @ts-expect-error error

      acc[item.category as string].push(item);
      return acc;
    },
    {}
  );

  console.log('groupedItems', groupedItems);
  return (
    <>
      <Head>
        <title>Individual Training | Your Website Name</title>
        <meta
          name="description"
          content="Join our individual training programs tailored to your specific needs. Enhance your skills with personalized coaching."
        />
        <meta
          name="keywords"
          content="training, individual training, personal coaching, skill development"
        />
        <meta
          property="og:title"
          content="Individual Training | Your Website Name"
        />
        <meta
          property="og:description"
          content="Join our individual training programs tailored to your specific needs. Enhance your skills with personalized coaching."
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/images/individual-training-og-image.jpg"
        />
        <meta
          property="og:url"
          content="https://yourwebsite.com/individual-training"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Individual Training | Your Website Name"
        />
        <meta
          name="twitter:description"
          content="Join our individual training programs tailored to your specific needs."
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/images/individual-training-og-image.jpg"
        />
      </Head>
      <div className="sticky top-0 z-[50] bg-card shadow-md">
        <nav className="text-[#1f1f1f] bg-card 2xl:w-[80vw] px-5  md:w-[90vw] w-full 2xl:m-auto flex justify-between items-center text-sm font-medium md:py-2  ">
          <div className="text-3xl font-bold inline-flex items-center">
            <Link href="/">
              <div className="relative w-[80px] h-[30px] md:w-[150px] md:h-[50px] ">
                <img src="/logo.png" alt="Logo" className="object-cover" />
              </div>
            </Link>
          </div>
          <NavbarSection />
        </nav>
      </div>
      <div className="pb-20 w-[80vw] m-auto">
        <h2 className="text-4xl font-bold mt-10">All Courses</h2>
        <Tabs
          defaultValue="Artificial intelligence"
          className="w-full md:mt-10 mt-5 px-0 md:px-0"
        >
          <TabsList className="  md:w-[50vw] w-full flex flex-wrap bg-transparent justify-start gap-x-6 gap-y-3 px-0">
            {Object.entries(groupedItems).map(([key]) => (
              <TabsTrigger
                key={key}
                value={key}
                className={cn(
                  'text-lg',
                  key === activeTab &&
                    '!bg-primary !text-white rounded-none !text-xl'
                )}
                onClick={() => {
                  router.push(`/individual-training?tab=${key}`);
                  setActiveTab(key);
                }}
              >
                {key}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(groupedItems).map(([key, content]) => (
            <TabsContent
              key={key}
              value={key}
              className="w-full md:mt-36 mt-36"
            >
              <div className="2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid grid-cols-1 gap-5 ">
                {content.map((item) => (
                  <Link
                    href={'courses/course-details/' + item?.url}
                    key={item._id}
                  >
                    <Card className="rounded-none h-[300px] flex flex-col">
                      <CardHeader className="p-0">
                        <img
                          src={item.preview_image_uri}
                          alt=""
                          className="h-40 w-full object-cover"
                        />
                      </CardHeader>
                      <CardContent className="p-0 px-2 pt-1">
                        <ShowMoreText text={item.title} />
                      </CardContent>
                      <CardFooter className="justify-between p-0 px-2 py-2 mt-auto">
                        <p className="font-semibold"> ₹ {item?.price}</p>
                        <Button>Enroll Now</Button>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  );
}
