/* eslint-disable @next/next/no-img-element */
'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, GraduationCap } from 'lucide-react';
import { useRouter } from 'next/compat/router';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ICourse } from '@/component/types/Course.types';
import SkillLeadForm from '@/components/pages/institution/SkillLeadForm';
import NavbarSection from '@/component/navbar/NavbarSection';
import Head from 'next/head';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'https://backendbskilling.up.railway.app';

export default function SkillPrograms() {
  const selectedType = 'b2c';
  const router = useRouter();
  // @ts-expect-error

  const { tab: categorySlug } = router?.query;
  const [searchTerm, setSearchTerm] = useState('');
  const [scategory, setScategory] = useState<ICategories['categories'][number] | null>(null);

  // Fetch categories
  const categoryQuery = useQuery<ICategories>({
    queryKey: ['categories-b2c'],
    queryFn: async () => {
      const res = await axios.get(backendUrl + '/api/categories', {
        params: {
          limit: 100,
          page: 1,
          type: selectedType ?? undefined,
          isPublished: true,
        },
      });
      return res.data.data;
    },
    staleTime: 1000 * 60 * 5,
  });

  // Set the selected category based on URL query param
  useEffect(() => {
    if (categorySlug && categoryQuery.data) {
      const foundCategory = categoryQuery.data.categories.find(cat => cat.name === categorySlug);
      if (foundCategory) {
        setScategory(foundCategory);
      }
    }
  }, [categorySlug, categoryQuery.data]);

  // Handler for category selection
  const handleCategorySelect = (category: ICategories['categories'][number] | null) => {
    setScategory(category);

    // Update URL with the selected category
    const query = { ...router?.query };
    if (category) {
      query.tab = category.name;
    } else {
      delete query.category;
    }

    router?.push(
      {
        pathname: router?.pathname,
        query,
      },
      undefined,
      { shallow: true }
    );
  };

  const [isPublished, setIsPublished] = useState<boolean | undefined>(true);

  // Fetch courses based on selected category
  const { data, isLoading } = useQuery<{ courses: ICourse[] }>({
    queryKey: ['courses', scategory?._id, isPublished],
    queryFn: async () => {
      const res = await axios.get(backendUrl + '/api/courses', {
        params: {
          limit: 100,
          page: 1,
          category: scategory?._id ?? undefined,
          isPublished: true,
          type: selectedType ?? undefined,
        },
      });
      return res.data.data;
    },
    staleTime: 1000 * 60 * 5,
  });

  // Filter courses based on search term
  const filteredCourses = data?.courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Tech Courses for Students & Professionals | Live Training - BSkilling</title>
        <meta
          name="description"
          content="Learn coding, data science, cloud & more with live online training designed for students and IT pros. Get job-ready skills and real-time guidance."
        />
        <meta
          name="keywords"
          content="Tech courses for students, Online tech courses, Live online training, Tech training for professionals, Job-ready tech skills, IT courses with certification, Technology upskilling platform"
        />
        <meta name="author" content="BSkilling" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Tech Courses for Students & Professionals | Live Training - BSkilling"
        />
        <meta
          property="og:description"
          content="Learn coding, data science, cloud & more with live online training designed for students and IT pros. Get job-ready skills and real-time guidance."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bskilling.com/courses" />
        <meta property="og:image" content="https://www.bskilling.com/logo.png" />

        {/* Twitter Card */}
        <meta
          name="twitter:title"
          content="Tech Courses for Students & Professionals | Live Training - BSkilling"
        />
        <meta
          name="twitter:description"
          content="Learn coding, data science, cloud & more with live online training designed for students and IT pros."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.bskilling.com/logo.png" />
      </Head>
      <div className="bg-gradient-to-b from-slate-50 to-white py-16 pt-0">
        <div className="sticky top-0 z-[50] bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200/50">
          <nav className="container mx-auto flex justify-between items-center py-3 px-4 lg:px-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-[100px] h-[40px] lg:w-[150px] lg:h-[50px]">
                <img src="/logo.png" alt="Logo" className="object-contain" />
              </div>
            </Link>
            <NavbarSection />
          </nav>
        </div>
        <div className="container mx-auto px-4 sm:px-6 pt-5">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-indigo-100 rounded-full mb-4">
              <GraduationCap className="h-6 w-6 text-indigo-600" />
            </div>
            <motion.h1
              className="text-3xl md:text-4xl font-bold mb-4 text-slate-900"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Explore Our Skill Programs
            </motion.h1>
            <motion.p
              className="text-lg text-slate-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover specialized training programs designed to enhance your professional
              capabilities and accelerate your career growth
            </motion.p>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-10 max-w-3xl mx-auto">
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <Input
                type="text"
                placeholder="Search for skills, courses, or topics..."
                className="pl-10 bg-white border-slate-200 focus:border-indigo-300 shadow-sm"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
              <Button
                variant={!scategory?._id ? 'default' : 'outline'}
                className={cn(
                  'rounded-full px-4 md:px-6 font-medium text-sm',
                  !scategory?._id
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-100'
                )}
                onClick={() => handleCategorySelect(null)}
              >
                All Programs
              </Button>

              {categoryQuery?.data?.categories?.map(category => (
                <Button
                  key={category.slug}
                  variant={category._id === scategory?._id ? 'default' : 'outline'}
                  className={cn(
                    'rounded-full px-4 md:px-6 font-medium text-sm',
                    category._id === scategory?._id
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                      : 'border-slate-200 text-slate-700 hover:bg-slate-100'
                  )}
                  onClick={() => handleCategorySelect(category)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Course Listings */}
          <Tabs
            defaultValue="all"
            className="w-full"
            value={scategory?.slug || 'all'}
            onValueChange={value => {
              if (value === 'all') {
                handleCategorySelect(null);
              } else {
                const category = categoryQuery?.data?.categories.find(cat => cat.slug === value);
                if (category) {
                  handleCategorySelect(category);
                }
              }
            }}
          >
            {/* <TabsList className="mb-6">
            <TabsTrigger value="all">All Programs</TabsTrigger>
            {categoryQuery?.data?.categories?.map(category => (
              <TabsTrigger key={category.slug} value={category.slug}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList> */}

            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900">
                {scategory ? `${scategory.name} Programs` : 'Available Programs'}
              </h2>
              <p className="text-slate-600">
                {scategory
                  ? `Browse our ${scategory.name} skill development offerings`
                  : 'Select the right program to enhance your skills'}
              </p>
            </div>

            <TabsContent value="all" className="mt-0 w-full">
              {isLoading ? (
                <div className="py-12 text-center">
                  <div className="inline-block w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
                  <p className="mt-4 text-slate-600">Loading programs...</p>
                </div>
              ) : filteredCourses && filteredCourses.length > 0 ? (
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {filteredCourses.map(course => (
                    <motion.div key={course._id} variants={item} className="w-full">
                      <Card className="relative flex flex-col overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-105 hover:shadow-2xl bg-white">
                        <Link href={`/course/${course.slug}`}>
                          <CardHeader className="p-0">
                            {course?.previewImage?.viewUrl ? (
                              <img
                                src={course?.previewImage?.viewUrl}
                                alt={'Course Preview'}
                                className="w-full h-52 object-cover rounded-t-2xl"
                              />
                            ) : (
                              <img
                                src={'/images/placeholder.png'}
                                alt="Placeholder"
                                className="w-full h-52 object-cover rounded-t-2xl p-3"
                              />
                            )}
                          </CardHeader>
                        </Link>

                        <CardContent className="p-4 space-y-2">
                          <CardTitle className="text-lg font-semibold text-gray-900 truncate">
                            {course?.title || 'No Title'}
                          </CardTitle>
                          <CardDescription className="text-sm text-gray-600 line-clamp-2">
                            {course?.description || 'No Description Available'}
                          </CardDescription>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span className="font-medium">Duration:</span>
                            <span>{course.durationHours} hours</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span className="font-medium">Price:</span>
                            <span
                              className={cn(
                                course.price.amount === 0
                                  ? 'text-green-600'
                                  : 'text-blue-500 font-bold'
                              )}
                            >
                              {course.price.amount === 0
                                ? 'Free'
                                : `${course.price.amount} ${course.price.currency}`}
                            </span>
                          </div>
                        </CardContent>

                        <CardFooter className="p-4 border-t flex justify-between items-center mt-auto text-center">
                          <Link href={`/course/${course.slug}`} className="m-auto">
                            View Course
                          </Link>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <div className="py-16 text-center bg-slate-50 rounded-lg border border-slate-200">
                  <div className="w-16 h-16 bg-slate-100 rounded-full mx-auto flex items-center justify-center mb-4">
                    <Search className="w-8 h-8 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">No programs found</h3>
                  <p className="text-slate-600 mb-6">
                    {searchTerm
                      ? `No results match "${searchTerm}". Try different keywords or browse all programs.`
                      : 'No programs available in this category yet.'}
                  </p>
                  <Button
                    variant="outline"
                    className="border-indigo-200 text-indigo-600 hover:bg-indigo-50"
                    onClick={() => {
                      setSearchTerm('');
                      handleCategorySelect(null);
                    }}
                  >
                    View All Programs
                  </Button>
                </div>
              )}
            </TabsContent>

            {/* Add TabsContent for each category */}
            {categoryQuery?.data?.categories?.map(category => (
              <TabsContent key={category.slug} value={category.slug} className="mt-0 w-full">
                {/* The content is dynamically loaded based on selected category through the main courses query */}
                {/* We reuse the same UI from "all" tab since filtering is already handled by the API query */}
                {isLoading ? (
                  <div className="py-12 text-center">
                    <div className="inline-block w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
                    <p className="mt-4 text-slate-600">Loading programs...</p>
                  </div>
                ) : filteredCourses && filteredCourses.length > 0 ? (
                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
                    variants={container}
                    initial="hidden"
                    animate="show"
                  >
                    {filteredCourses.map(course => (
                      <motion.div key={course._id} variants={item} className="w-full">
                        <Card className="relative flex flex-col overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-105 hover:shadow-2xl bg-white">
                          <Link href={`/course/${course.slug}`}>
                            <CardHeader className="p-0">
                              {course?.previewImage?.viewUrl ? (
                                <img
                                  src={course?.previewImage?.viewUrl}
                                  alt={'Course Preview'}
                                  className="w-full h-52 object-cover rounded-t-2xl"
                                />
                              ) : (
                                <img
                                  src={'/images/placeholder.png'}
                                  alt="Placeholder"
                                  className="w-full h-52 object-cover rounded-t-2xl p-3"
                                />
                              )}
                            </CardHeader>
                          </Link>

                          <CardContent className="p-4 space-y-2">
                            <CardTitle className="text-lg font-semibold text-gray-900 truncate">
                              {course?.title || 'No Title'}
                            </CardTitle>
                            <CardDescription className="text-sm text-gray-600 line-clamp-2">
                              {course?.description || 'No Description Available'}
                            </CardDescription>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <span className="font-medium">Duration:</span>
                              <span>{course.durationHours} hours</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <span className="font-medium">Price:</span>
                              <span
                                className={cn(
                                  course.price.amount === 0
                                    ? 'text-green-600'
                                    : 'text-blue-500 font-bold'
                                )}
                              >
                                {course.price.amount === 0
                                  ? 'Free'
                                  : `${course.price.amount} ${course.price.currency}`}
                              </span>
                            </div>
                          </CardContent>

                          <CardFooter className="p-4 border-t flex justify-between items-center mt-auto text-center">
                            <Link href={`/course/${course.slug}`} className="m-auto">
                              View Course
                            </Link>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <div className="py-16 text-center bg-slate-50 rounded-lg border border-slate-200">
                    <div className="w-16 h-16 bg-slate-100 rounded-full mx-auto flex items-center justify-center mb-4">
                      <Search className="w-8 h-8 text-slate-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">No programs found</h3>
                    <p className="text-slate-600 mb-6">
                      {searchTerm
                        ? `No results match "${searchTerm}". Try different keywords or browse all programs.`
                        : `No programs available in the ${category.name} category yet.`}
                    </p>
                    <Button
                      variant="outline"
                      className="border-indigo-200 text-indigo-600 hover:bg-indigo-50"
                      onClick={() => {
                        setSearchTerm('');
                        handleCategorySelect(null);
                      }}
                    >
                      View All Programs
                    </Button>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>

          {/* CTA Section */}
          <div className="mt-16 mx-auto">
            <div className="bg-gradient-to-r from-indigo-800 to-violet-700 rounded-xl p-6 md:p-10 shadow-lg overflow-hidden relative">
              {/* Decorative background elements */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-indigo-400 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-violet-400 rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10 md:flex justify-between items-center">
                <div className="mb-6 md:mb-0">
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                    Can&apos;t find what you&apos;re looking for?
                  </h2>
                  <p className="text-indigo-100 max-w-xl">
                    We can create custom skill development programs tailored to your specific needs
                    and goals.
                  </p>
                </div>
                <Dialog>
                  <DialogTrigger className="mt-6">
                    <Button
                      size="lg"
                      className="bg-white text-indigo-700 hover:bg-slate-100 whitespace-nowrap"
                    >
                      Request Custom Program
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-gradient-to-br from-violet-950 via-indigo-900 to-blue-800">
                    <SkillLeadForm />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export interface ICategories {
  categories: Category[];
  pagination: Pagination;
}
interface Pagination {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
}
interface Category {
  _id: string;
  name: string;
  slug: string;
  logo: logo;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface logo {
  _id: string;
  viewUrl: string;
}
