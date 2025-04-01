/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import Head from 'next/head';
import { Course } from 'common/util/types';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import ShowMoreText from './_components/Text';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NavbarSection from '@/component/navbar/NavbarSection';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface IndividualTrainingProps {
  training: Course[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_TRAINING_BASE_URL}api/v1/get-course-title`,
      { withCredentials: true }
    );
    return { props: { training: response?.data?.courses || [] } };
  } catch (error) {
    console.error(error);
    return { props: { training: [] } };
  }
};

export default function IndividualTraining({
  training,
}: IndividualTrainingProps) {
  const router = useRouter();
  const { query } = router;
  const { tab } = query;
  const [activeTab, setActiveTab] = useState(
    tab ?? (training[0]?.category || '')
  );

  useEffect(() => {
    setActiveTab(tab ?? (training[0]?.category || ''));
  }, [tab, training]);

  if (!training.length) return <div>No courses available.</div>;
  // @ts-ignore
  const categories = [...new Set(training.map((course) => course.category))];
  const filteredCourses = training.filter(
    (course) => course.category === activeTab
  );

  return (
    <>
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
      </>

      <div className="flex md:w-[85vw] w-[100vw] min-h-screen mx-auto py-10 gap-6">
        {/* Sidebar for Categories */}
        <div className="w-1/2 md:w-1/4  bg-white p-4 rounded-xl shadow-lg border border-gray-200 sticky top-20">
          <h3 className="text-lg font-semibold mb-3">Course Categories</h3>
          <div className="flex flex-col gap-2">
            {categories
              ?.filter((category) => category !== 'SAP')
              .map((category) => (
                <motion.button
                  key={category}
                  className={cn(
                    'w-full text-left px-4 py-2 md:text-sm text-xs font-medium rounded-md transition-all duration-200',
                    activeTab === category
                      ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  )}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    router.push(`/individual-training?tab=${category}`);
                    setActiveTab(category);
                  }}
                >
                  {category}
                </motion.button>
              ))}
          </div>
        </div>

        {/* Courses Section */}
        <div className="w-3/4 pr-4 overflow-y-auto h-[75vh]">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Explore Our Courses
          </h2>
          <p className="text-gray-600 mb-6">
            Find the best courses tailored for you.
          </p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredCourses.map((course) => (
              <Link
                href={`/courses/course-details/${course.url}`}
                key={course._id}
              >
                <Card className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 ">
                  <CardHeader className="relative md:h-36 h-20  p-0">
                    <img
                      src={course.preview_image_uri}
                      alt={course.title}
                      className="w-full h-full object-cover rounded-t-xl"
                      loading="lazy"
                    />
                  </CardHeader>
                  <CardContent className="p-3">
                    <h4 className="md:text-lg text-sm font-semibold text-gray-900 truncate">
                      {course.title}
                    </h4>
                    <p className="md:text-sm text-xs text-gray-500 mt-1">
                      {
                        // @ts-ignore
                        course?.short_description ||
                          'Join this course to enhance your skills.'
                      }
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center p-3 border-t border-gray-200">
                    <p className="font-semibold text-gray-900">
                      ₹ {course.price}
                    </p>
                    <Button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm px-4 py-2 rounded-md shadow-md">
                      Enroll Now
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
