/* eslint-disable @next/next/no-img-element */
'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';
import { ICourse } from './types/Course.types';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookOpen, Search } from 'lucide-react';
import { useRouter } from 'next/compat/router';
import { FaCalendarAlt } from 'react-icons/fa';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'https://backendbskilling.up.railway.app';

const formatDate = (dateString: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);
};
export default function Program() {
  const selectedType = 'b2c';
  const [show, setShow] = useState(false);
  const [scategory, setScategory] = useState<ICategories['categories'][number] | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const categoryQuery = useQuery<ICategories>({
    queryKey: ['categories-b2c'],
    queryFn: async () => {
      const res = await axios.get(backendUrl + '/api/categories', {
        params: {
          limit: 8,
          page: 1,
          type: selectedType ?? undefined,
          isPublished: true,
        },
      });
      return res.data.data;
    },
    staleTime: 1000 * 60 * 5,
  });

  const [isPublished, setIsPublished] = useState<boolean | undefined>(false);
  const { data, isLoading, error } = useQuery<{ courses: ICourse[] }>({
    queryKey: ['courses', scategory?._id, isPublished],
    queryFn: async () => {
      const res = await axios.get(backendUrl + '/api/courses', {
        params: {
          limit: 8,
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

  // Filter courses based on search query
  const filteredCourses = data?.courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  if (!router?.isReady) return null;
  return (
    <div className="p-8 w-[90vw] md:w-[85vw] lg:w-[80vw] mx-auto">
      {/* Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-2">Explore Our Course Categories</h2>
        <p className="text-gray-500 mb-6">Find the perfect learning path tailored to your goals</p>

        <div className="flex flex-wrap gap-4 mb-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              'flex items-center justify-center px-6 py-3 border-2 border-blue-500 rounded-lg shadow-md bg-white text-blue-700 font-medium transition-all hover:bg-blue-500 hover:text-white hover:shadow-lg',
              !scategory?._id && 'bg-blue-600 text-white border-blue-600 shadow-lg'
            )}
            onClick={() => setScategory(null)}
          >
            <BookOpen className="mr-2" size={18} />
            <p className="text-sm font-semibold">All Courses</p>
          </motion.div>

          {categoryQuery.isLoading
            ? // Category skeleton loaders
              Array(5)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={`cat-skeleton-${i}`}
                    className="h-12 w-32 bg-gray-200 animate-pulse rounded-lg"
                  />
                ))
            : categoryQuery?.data?.categories?.map(category => (
                <motion.div
                  key={category.slug}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    'flex items-center justify-center px-6 py-3 border-2 border-blue-500 rounded-lg shadow-md bg-white text-blue-700 font-medium transition-all hover:bg-blue-500 hover:text-white hover:shadow-lg',
                    category._id === scategory?._id &&
                      'bg-blue-600 text-white border-blue-600 shadow-lg'
                  )}
                  onClick={() => setScategory(category)}
                >
                  <p className="text-sm font-semibold">{category.name}</p>
                </motion.div>
              ))}
        </div>
      </motion.div>

      {/* Course Count */}
      {!isLoading && filteredCourses && (
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-lg font-medium">
            Showing <span className="text-blue-600 font-bold">{filteredCourses.length}</span>
            {scategory ? ` courses in ${scategory.name}` : ' courses'}
            {searchQuery ? ` matching "${searchQuery}"` : ''}
          </p>
        </motion.div>
      )}

      {/* Courses */}
      {isLoading ? (
        // Skeleton loaders for courses
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <motion.div
                key={`skeleton-${i}`}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gray-300 animate-pulse" />
                <div className="p-5">
                  <div className="h-6 bg-gray-200 animate-pulse rounded-md mb-3 w-3/4" />
                  <div className="h-4 bg-gray-200 animate-pulse rounded-md mb-3" />
                  <div className="h-4 bg-gray-200 animate-pulse rounded-md mb-3 w-5/6" />
                  <div className="flex justify-between items-center mt-6">
                    <div className="h-8 bg-gray-200 animate-pulse rounded-md w-24" />
                    <div className="h-10 w-10 rounded-full bg-gray-200 animate-pulse" />
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      ) : error ? (
        <div className="text-center py-12">
          <div className="text-red-500 text-xl font-medium mb-4">Oops! Something went wrong</div>
          <p className="text-gray-600">
            We encountered an issue loading your courses. Please try again later.
          </p>
          <Button
            className="mt-6 bg-blue-600 hover:bg-blue-700"
            onClick={() => window.location.reload()}
          >
            Refresh Page
          </Button>
        </div>
      ) : (
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredCourses?.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-500 text-xl font-medium mb-4">No courses found</div>
              <p className="text-gray-600">
                {searchQuery
                  ? `No courses matching "${searchQuery}" in ${scategory?.name || 'all categories'}`
                  : `No courses available in ${scategory?.name || 'this category'}`}
              </p>
              <Button
                className="mt-6 bg-blue-600 hover:bg-blue-700"
                onClick={() => {
                  setSearchQuery('');
                  setScategory(null);
                }}
              >
                View All Courses
              </Button>
            </div>
          ) : (
            filteredCourses?.map(course => (
              <motion.div key={course._id} variants={itemVariants}>
                <EnhancedCourseCard course={course} />
              </motion.div>
            ))
          )}
        </motion.div>
      )}

      <div className="w-full max-w-7xl mx-auto  flex justify-center">
        <button
          className="mt-6 border-blue-500 p-2 border m-auto text-blue-500 "
          onClick={() => {
            router?.push(`/courses`);
          }}
        >
          View All Courses
        </button>
      </div>
    </div>
  );
}

// Enhanced Course Card Component
const EnhancedCourseCard = ({ course }: { course: ICourse }) => {
  const router = useRouter();
  if (!router?.isReady) return null;
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl hover:cursor-pointer overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col"
    >
      <div className="relative" onClick={() => router?.push(`/course/${course.slug}`)}>
        <img
          src={course.previewImage?.viewUrl || 'https://via.placeholder.com/400x225'}
          alt={course.title}
          className="w-full object-cover h-52"
        />
        {/* {course.isPopular && (
          <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            Popular
          </div>
        )} */}
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex-grow">
          <div className="flex items-center mb-3">
            {/* <span className="text-xs font-semibold px-2 py-1 rounded-md bg-blue-100 text-blue-700">
              {course.category?.name || 'Uncategorized'}
            </span> */}
            {/* {course?.level && (
              <span className="ml-2 text-xs font-semibold px-2 py-1 rounded-md bg-gray-100 text-gray-700">
                {course?.level}
              </span>
            )} */}
          </div>
          <h3 className="font-bold text-lg mb-2 line-clamp-2 h-14">{course.title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {course.description || 'Enhance your skills with this comprehensive course.'}
          </p>
        </div>

        <div className="mt-auto">
          <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {course.durationHours || 'Self-paced'} Hours
            </div>
          </div>

          {/* Date Range */}
          {(course.startTime || course.endTime) && (
            <div className="flex items-center text-xs text-gray-600 bg-blue-50 p-2 rounded-md">
              <FaCalendarAlt className="text-blue-500 mr-2 flex-shrink-0" />
              <div>
                {course.startTime && (
                  <div className="font-medium">Start: {formatDate(course.startTime)}</div>
                )}
                {course.endTime && (
                  <div className="font-medium">End: {formatDate(course.endTime)}</div>
                )}
              </div>
            </div>
          )}
          <div className="flex justify-between items-center mt-5">
            <div>
              {!course.isPaid ? (
                <span className="font-bold text-green-600">Free</span>
              ) : (
                <div>
                  {
                    // @ts-expect-error
                    course.discountedPrice ? (
                      <div className="flex items-center">
                        <span className="font-bold text-lg text-blue-700">
                          {
                            // @ts-expect-error
                            typeof course.discountedPrice === 'object'
                              ? // @ts-expect-error
                                `${course.discountedPrice.currency || '₹'}${course.discountedPrice.amount}`
                              : // @ts-expect-error
                                `₹${course.discountedPrice}`
                          }
                        </span>
                        <span className="text-sm text-gray-500 line-through ml-2">
                          {typeof course.price === 'object'
                            ? `${'₹   '} ${course.price.amount}`
                            : `₹ ${course.price}`}
                        </span>
                      </div>
                    ) : (
                      <span className="font-bold text-lg text-blue-700">
                        {typeof course.price === 'object'
                          ? `${'₹  '}${course.price.amount}`
                          : `₹  ${course.price || '0'}`}
                      </span>
                    )
                  }
                </div>
              )}
            </div>
            <Link href={`/course/${course.slug}`}>
              <Button className="text-white bg-blue-600 hover:bg-blue-700 rounded-full px-5 py-2 text-sm font-medium">
                View
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

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
