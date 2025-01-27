/* eslint-disable @next/next/no-img-element */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Head from 'next/head';
import React, { useState } from 'react';

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
      <div className="pb-20">
        <h1 className="text-4xl text-center text-primary mt-10">
          Individual Training/Courses
        </h1>
        <Tabs
          defaultValue="Artificial intelligence"
          className="w-full md:mt-10 mt-5 "
        >
          <TabsList className="m-auto  w-full flex flex-wrap bg-transparent gap-x-6 gap-y-3">
            {Object.entries(groupedItems).map(([key]) => (
              <TabsTrigger
                key={key}
                value={key}
                className={cn(key === activeTab && '!bg-primary !text-white')}
                onClick={() => setActiveTab(key)}
              >
                {key}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(groupedItems).map(([key, content]) => (
            <TabsContent
              key={key}
              value={key}
              className="w-full md:mt-16 mt-36"
            >
              <div className="2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid grid-cols-1 gap-5 md:px-10 px-3">
                {content.map((item) => (
                  <Link
                    href={'courses/courseDetails/' + item?.url}
                    key={item._id}
                  >
                    <Card className="">
                      <CardHeader>
                        <img
                          src={item.preview_image_uri}
                          alt=""
                          className="h-40 w-full object-cover"
                        />
                      </CardHeader>
                      <CardContent>
                        <ShowMoreText text={item.title} />
                      </CardContent>
                      <CardFooter className="justify-between">
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
