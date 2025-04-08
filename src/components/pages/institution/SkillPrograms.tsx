/* eslint-disable @next/next/no-img-element */
'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Search, BookOpen, Filter, ArrowRight, Layers, GraduationCap } from 'lucide-react';

import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
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
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ICourse } from '@/component/types/Course.types';
import CourseCard from '@/component/courses/CourseCard';
import SkillLeadForm from './SkillLeadForm';
import { useRouter } from 'next/router';
import Link from 'next/link';

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

const backendUrl =
  process.env.NEXT_PUBLIC_BACKEND_URL ?? 'https://backendbskilling-production-20ff.up.railway.app';

export default function SkillPrograms({ skill }: { skill: boolean }) {
  const selectedType = 'b2i';
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [scategory, setScategory] = useState<ICategories['categories'][number] | null>(null);
  // const [showMore, setShowMore] = useState(false);
  const [currentShow, setCurrentShow] = useState(8);

  const handleCurrentShow = () => {
    setCurrentShow(currentShow + 8);
  };

  const handleCurrentShow1 = () => {
    setCurrentShow(currentShow - 8);
  };

  const categoryQuery = useQuery<ICategories>({
    queryKey: ['categories', selectedType],
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

  const [isPublished, setIsPublished] = useState<boolean | undefined>(true);
  const { data, isLoading } = useQuery<{ courses: ICourse[] }>({
    queryKey: ['courses', scategory?._id, isPublished, selectedType],
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

  const filteredCourses = data?.courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white py-16">
      <div className="container mx-auto px-4 sm:px-6">
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
            {skill ? 'Skill Development Programs' : 'Job Assisting Programs'}
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
              onClick={() => setScategory(null)}
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
                onClick={() => setScategory(category)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Course Listings */}
        <Tabs defaultValue="all" className="w-full">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Available Programs</h2>
            <p className="text-slate-600">Select the right program to enhance your skills</p>
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
                {filteredCourses.slice(0, currentShow).map(course => (
                  <motion.div key={course._id} variants={item} className="w-full">
                    <Card className="relative flex flex-col overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-105 hover:shadow-2xl bg-white">
                      <Link href={`/institutions/${course.slug}?id=${course._id.toString()}`}>
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
                        <Link
                          href={`/institutions/${course.slug}?id=${course._id.toString()}`}
                          className="m-auto"
                        >
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
                    setScategory(null);
                  }}
                >
                  View All Programs
                </Button>
              </div>
            )}
          </TabsContent>

          <div className="w-full flex justify-center gap-x-6 items-center mt-6">
            {filteredCourses &&
              filteredCourses?.length > 8 &&
              !(currentShow >= filteredCourses?.length) && (
                <button
                  onClick={handleCurrentShow}
                  className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium shadow-md"
                >
                  Show More
                </button>
              )}

            {currentShow > 8 && filteredCourses && filteredCourses?.length > 8 && (
              <button
                onClick={handleCurrentShow1}
                className="px-6 py-3 bg-white text-indigo-600 border-2 border-indigo-600 rounded-full font-medium"
              >
                Show Less
              </button>
            )}
          </div>
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
                  {' '}
                  <Button
                    size="lg"
                    className="bg-white text-indigo-700 hover:bg-slate-100 whitespace-nowrap"
                  >
                    Request Custom Program
                  </Button>
                </DialogTrigger>
                <DialogContent className=" bg-gradient-to-br from-violet-950 via-indigo-900 to-blue-800">
                  <SkillLeadForm />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Show More/Less button implementation with beautiful styling
const PaginationButtons = ({ currentShow, setCurrentShow, totalItems }: any) => {
  // const [currentShow, setCurrentShow] = useState(8);
  // const totalItems = 24; // Example total count, replace with your actual value

  const handleCurrentShow = () => {
    setCurrentShow(Math.min(currentShow + 8, totalItems));
  };

  const handleCurrentShow1 = () => {
    setCurrentShow(Math.max(currentShow - 8, 8));
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 mb-12">
      {currentShow > 3 && (
        <button
          onClick={handleCurrentShow1}
          className="flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 rounded-full font-medium 
                   border-2 border-indigo-600 hover:bg-indigo-50 transition-all duration-300 
                   shadow-sm hover:shadow group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transform group-hover:-translate-y-0.5 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
          Show Less
        </button>
      )}

      {currentShow < totalItems && (
        <button
          onClick={handleCurrentShow}
          className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full font-medium 
                   hover:bg-indigo-700 transition-all duration-300 
                   shadow-md hover:shadow-lg group"
        >
          Show More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transform group-hover:translate-y-0.5 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      )}
    </div>
  );
};

// Alternative version with gradient and glow effect
const FancyPaginationButtons = () => {
  const [currentShow, setCurrentShow] = useState(8);
  const totalItems = 24; // Example total count, replace with your actual value

  const handleCurrentShow = () => {
    setCurrentShow(Math.min(currentShow + 8, totalItems));
  };

  const handleCurrentShow1 = () => {
    setCurrentShow(Math.max(currentShow - 8, 8));
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 mb-14">
      {currentShow > 8 && (
        <button
          onClick={handleCurrentShow1}
          className="relative overflow-hidden px-7 py-3.5 bg-white text-indigo-600 rounded-full font-medium 
                   border-2 border-indigo-500 hover:border-indigo-600
                   transition-all duration-300 shadow-sm hover:shadow
                   flex items-center gap-2 group"
        >
          <span className="relative z-10 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1 transform group-hover:-translate-y-0.5 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
            Show Less
          </span>
          <span
            className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-blue-50 opacity-0 
                        group-hover:opacity-100 transition-opacity duration-300"
          ></span>
        </button>
      )}

      {currentShow < totalItems && (
        <button
          onClick={handleCurrentShow}
          className="relative overflow-hidden px-7 py-3.5 text-white rounded-full font-medium 
                   transition-all duration-300 shadow-md hover:shadow-lg
                   flex items-center gap-2 group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600"></span>
          <span
            className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-700 opacity-0 
                        group-hover:opacity-100 transition-opacity duration-300"
          ></span>
          <span
            className="absolute -inset-px bg-gradient-to-r from-indigo-300 to-blue-400 opacity-0 blur-lg
                        group-hover:opacity-30 transition-opacity duration-300"
          ></span>
          <span className="relative z-10 flex items-center">
            Show More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1 transform group-hover:translate-y-0.5 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </button>
      )}
    </div>
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
