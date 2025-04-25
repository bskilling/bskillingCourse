/* eslint-disable @next/next/no-img-element */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaAngleDown,
  FaAngleUp,
  FaClock,
  FaGraduationCap,
  FaAward,
  FaStar,
  FaUsers,
  FaCalendarAlt,
} from 'react-icons/fa';
import { BiCertification } from 'react-icons/bi';
import { RiBook2Line, RiTimeLine } from 'react-icons/ri';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { MdOutlineWatchLater, MdOutlinePriceCheck, MdDateRange } from 'react-icons/md';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { Search } from 'lucide-react';
import { ICourse } from '../types/Course.types';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

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

// Shimmer loading animation for cards
const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent`;

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'https://backendbskilling.up.railway.app';

// Helper function to format dates
const formatDate = (dateString: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);
};

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [close, setClose] = useState(false);
  const [open2, setOpen2] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [scategory, setScategory] = useState<ICategories['categories'][number] | null>(null);

  // Mock student counts and ratings for courses to enhance credibility
  const getRandomStudentCount = () => Math.floor(Math.random() * 15000) + 500;
  const getRandomRating = () => (Math.floor(Math.random() * 20) + 40) / 10; // Between 4.0 and 5.0

  // Mock dates for courses if they don't exist
  const getRandomStartDate = () => {
    const today = new Date();
    const startOffset = Math.floor(Math.random() * 30); // 0-30 days from now
    const startDate = new Date(today);
    startDate.setDate(startDate.getDate() + startOffset);
    return startDate.toISOString();
  };

  const getRandomEndDate = (startDate: string) => {
    const start = new Date(startDate);
    const durationDays = Math.floor(Math.random() * 90) + 30; // 30-120 days course duration
    const endDate = new Date(start);
    endDate.setDate(endDate.getDate() + durationDays);
    return endDate.toISOString();
  };

  useEffect(() => {
    setOpen2(false);
  }, [pathname]);

  const selectedType = 'b2c';

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

  const [isPublished, setIsPublished] = useState<boolean | undefined>(true);
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

      // Add mock dates if they don't exist
      // @ts-expect-error error
      const coursesWithDates = res.data.data.courses.map(course => {
        if (!course.startTime) {
          const startDate = getRandomStartDate();
          return {
            ...course,
            startDate,
            endDate: getRandomEndDate(startDate),
          };
        }
        if (course.startTime && !course.endTime) {
          return {
            ...course,
            endDate: getRandomEndDate(course.startTime),
          };
        }
        return course;
      });

      return {
        ...res.data.data,
        courses: coursesWithDates,
      };
    },
    staleTime: 1000 * 60 * 5,
  });

  const filteredCourses = data?.courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  ) as ICourse[];

  // Function to render skill level badge
  const renderSkillLevel = (hours: number) => {
    if (hours <= 10) return { level: 'Beginner', color: 'bg-green-500' };
    if (hours <= 30) return { level: 'Intermediate', color: 'bg-blue-500' };
    return { level: 'Advanced', color: 'bg-purple-500' };
  };

  // Function to check if a course is upcoming
  const isUpcoming = (startDate: string) => {
    if (!startDate) return false;
    const today = new Date();
    const courseStart = new Date(startDate);
    return courseStart > today;
  };

  // Function to check if a course is ongoing
  const isOngoing = (startDate: string, endDate: string) => {
    if (!startDate || !endDate) return false;
    const today = new Date();
    const courseStart = new Date(startDate);
    const courseEnd = new Date(endDate);
    return courseStart <= today && today <= courseEnd;
  };

  return (
    <>
      {/* Mobile Sheet */}
      <Sheet>
        <SheetTrigger className="md:hidden block">
          <Button
            size={'sm'}
            className="flex gap-x-2 items-center bg-indigo-600 text-white hover:bg-indigo-700"
          >
            <FaGraduationCap className="mr-1" /> Explore Courses <FaAngleDown />
          </Button>
        </SheetTrigger>
        <SheetContent side={'top'} className="w-full h-[100vh] overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="flex items-center text-xl text-indigo-700">
              <HiOutlineAcademicCap className="w-6 h-6 mr-2" /> Course Categories
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center mt-4">
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
              <RiBook2Line className="mr-1" /> All Programs
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
        </SheetContent>
      </Sheet>

      {/* Desktop Popover */}
      <Popover open={open2} onOpenChange={setOpen2}>
        <PopoverTrigger className="hidden md:flex">
          <Button
            className="flex gap-x-2 items-center font-medium bg-gradient-to-r from-indigo-600 to-indigo-700 text-white hover:from-indigo-700 hover:to-indigo-800 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            size={'sm'}
          >
            <FaGraduationCap className="mr-1" /> Explore Courses <FaAngleDown />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[85vw] h-[65vh] m-auto ml-[7.2vw] mt-3 p-0 overflow-hidden rounded-xl shadow-2xl border-0">
          <div className="flex h-full">
            {/* Categories Sidebar */}
            <div className="w-1/4 bg-gradient-to-b from-indigo-50 to-white p-4 border-r border-gray-200 overflow-y-auto">
              <div className="text-lg font-bold text-indigo-700 flex items-center mb-4">
                <HiOutlineAcademicCap className="w-5 h-5 mr-2" />
                Categories
              </div>

              <div className="flex flex-col gap-2">
                <Button
                  variant={!scategory?._id ? 'default' : 'outline'}
                  className={cn(
                    'justify-start rounded-lg px-3 py-2 font-medium text-sm',
                    !scategory?._id
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                      : 'border-slate-200 text-slate-700 hover:bg-indigo-50'
                  )}
                  onClick={() => setScategory(null)}
                >
                  <RiBook2Line className="mr-2" /> All Programs
                </Button>

                {categoryQuery?.data?.categories?.map(category => (
                  <Button
                    key={category.slug}
                    variant={category._id === scategory?._id ? 'default' : 'outline'}
                    className={cn(
                      'justify-start rounded-lg px-3 py-2 font-medium text-sm',
                      category._id === scategory?._id
                        ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                        : 'border-slate-200 text-slate-700 hover:bg-indigo-50'
                    )}
                    onClick={() => setScategory(category)}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>

              {/* Credibility Section */}
              <div className="mt-8 pt-4 border-t border-gray-200">
                <div className="text-sm font-semibold text-gray-700 mb-3">Why Choose Us</div>
                <div className="space-y-3">
                  <div className="flex items-center text-xs text-gray-600">
                    <BiCertification className="text-indigo-600 mr-2 flex-shrink-0" size={16} />
                    <span>Industry Recognized Certifications</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <FaUsers className="text-indigo-600 mr-2 flex-shrink-0" size={16} />
                    <span>200,000+ Enrolled Students</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <FaAward className="text-indigo-600 mr-2 flex-shrink-0" size={16} />
                    <span>Expert-Led Instruction</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Courses Content */}
            <div className="w-3/4 h-full p-6 overflow-y-auto">
              {/* Search Bar */}
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Search for skills, courses, or topics..."
                  className="pl-10 bg-white border-slate-200 focus:border-indigo-300 shadow-sm h-11 rounded-lg"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Section Title */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800 flex items-center">
                  {scategory ? (
                    <>
                      <span>{scategory.name} Courses</span>
                      <Badge
                        variant="outline"
                        className="ml-2 bg-indigo-50 text-indigo-700 border-indigo-200"
                      >
                        {filteredCourses?.length || 0} courses
                      </Badge>
                    </>
                  ) : (
                    <>
                      <FaGraduationCap className="mr-2 text-indigo-600" />
                      Featured Courses
                    </>
                  )}
                </h2>

                <div className="flex items-center text-sm text-gray-500">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-indigo-600 hover:text-indigo-800"
                    onClick={() => {
                      setSearchTerm('');
                      setScategory(null);
                    }}
                  >
                    View All
                  </Button>
                </div>
              </div>

              {/* Course Listings */}
              {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className={`${shimmer} bg-slate-100 rounded-xl h-[320px]`}></div>
                  ))}
                </div>
              ) : filteredCourses && filteredCourses.length > 0 ? (
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {filteredCourses.map(course => {
                    const skillLevel = renderSkillLevel(course.durationHours);
                    const studentCount = getRandomStudentCount();
                    const rating = getRandomRating();
                    const upcoming = isUpcoming(course.startTime);
                    const ongoing = isOngoing(course?.startTime, course?.endTime);

                    return (
                      <motion.div key={course._id} variants={item}>
                        <Card className="relative flex flex-col h-full overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0">
                          {/* Status Badge (Upcoming/Ongoing) */}
                          {upcoming && (
                            <div className="absolute top-3 left-3 z-10">
                              <Badge className="bg-blue-500 hover:bg-blue-600 text-white border-0">
                                Upcoming
                              </Badge>
                            </div>
                          )}
                          {ongoing && (
                            <div className="absolute top-3 left-3 z-10">
                              <Badge className="bg-green-600 hover:bg-green-700 text-white border-0">
                                Ongoing
                              </Badge>
                            </div>
                          )}

                          {/* Free Badge */}
                          {course.price.amount === 0 && (
                            <div className="absolute top-3 left-3 z-10">
                              {(upcoming || ongoing) && (
                                <div className="mt-2">
                                  <Badge className="bg-green-500 hover:bg-green-600 text-white border-0">
                                    Free
                                  </Badge>
                                </div>
                              )}
                              {!upcoming && !ongoing && (
                                <Badge className="bg-green-500 hover:bg-green-600 text-white border-0">
                                  Free
                                </Badge>
                              )}
                            </div>
                          )}

                          {/* Skill Level Badge */}
                          <div className="absolute top-3 right-3 z-10">
                            <Badge className={`${skillLevel.color} text-white border-0`}>
                              {skillLevel.level}
                            </Badge>
                          </div>

                          <Link href={`/course/${course.slug}`} className="block">
                            <CardHeader className="p-0 overflow-hidden">
                              <div className="relative h-32 overflow-hidden">
                                {course?.previewImage?.viewUrl ? (
                                  <img
                                    src={course?.previewImage?.viewUrl}
                                    alt={course.title}
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                                  />
                                ) : (
                                  <img
                                    src={'/images/placeholder.png'}
                                    alt="Placeholder"
                                    className="w-full h-full object-cover p-0"
                                  />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                              </div>
                            </CardHeader>
                          </Link>

                          <CardContent className="p-5 space-y-3 flex-grow">
                            <Link href={`/course/${course.slug}`} className="block">
                              <CardTitle className="text-base font-bold text-gray-900 hover:text-indigo-600 transition-colors line-clamp-2">
                                {course?.title || 'No Title'}
                              </CardTitle>
                            </Link>

                            {/* Rating and Students */}
                            <div className="flex items-center gap-3 text-xs text-gray-600">
                              {/* <div className="flex items-center">
                                <FaStar className="text-yellow-400 mr-1" />
                                <span>{rating.toFixed(1)}</span>
                              </div> */}
                              {/* <div className="flex items-center">
                                <FaUsers className="text-gray-400 mr-1" />
                                <span>{studentCount.toLocaleString()} students</span>
                              </div> */}
                            </div>

                            {/* Date Range */}
                            {(course.startTime || course.endTime) && (
                              <div className="flex items-center text-xs text-gray-600 bg-orange-50 p-2 rounded-md">
                                <FaCalendarAlt className="text-orange-500 mr-2 flex-shrink-0" />
                                <div>
                                  {course.startTime && (
                                    <div className="font-medium">
                                      Start: {formatDate(course.startTime)}
                                    </div>
                                  )}
                                  {course.endTime && (
                                    <div className="font-medium">
                                      End: {formatDate(course.endTime)}
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}

                            <div className="flex flex-wrap gap-2">
                              <div className="flex items-center text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded">
                                <MdOutlineWatchLater className="mr-1 flex-shrink-0" />
                                <span>{course.durationHours} hours</span>
                              </div>

                              <div className="flex items-center text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded">
                                <MdOutlinePriceCheck className="mr-1 flex-shrink-0" />
                                <span
                                  className={
                                    course.price.amount === 0 ? 'text-green-600 font-medium' : ''
                                  }
                                >
                                  {course.price.amount === 0
                                    ? 'Free'
                                    : `${course.price.amount} ${course.price.currency}`}
                                </span>
                              </div>
                            </div>
                          </CardContent>

                          <CardFooter className="pt-0 pb-5 px-5">
                            <Link href={`/course/${course.slug}`} className="w-full">
                              <Button
                                variant="outline"
                                className="w-full border-indigo-500 text-indigo-600 hover:bg-indigo-50"
                              >
                                View Course
                              </Button>
                            </Link>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    );
                  })}
                </motion.div>
              ) : (
                <div className="py-16 text-center bg-slate-50 rounded-xl border border-slate-200">
                  <div className="w-16 h-16 bg-slate-100 rounded-full mx-auto flex items-center justify-center mb-4">
                    <Search className="w-8 h-8 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">No courses found</h3>
                  <p className="text-slate-600 mb-6 max-w-md mx-auto">
                    {searchTerm
                      ? `No results match "${searchTerm}". Try different keywords or browse all programs.`
                      : 'No courses available in this category yet.'}
                  </p>
                  <Button
                    variant="default"
                    className="bg-indigo-600 hover:bg-indigo-700"
                    onClick={() => {
                      setSearchTerm('');
                      setScategory(null);
                    }}
                  >
                    Browse All Courses
                  </Button>
                </div>
              )}
            </div>
          </div>
        </PopoverContent>
      </Popover>
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

// // Update the ICourse interface to include startDate and endDate
// declare module '../types/Course.types' {
//   export interface ICourse {
//     _id: string;
//     title: string;
//     slug: string;
//     durationHours: number;
//     price: {
//       amount: number;
//       currency: string;
//     };
//     previewImage?: {
//       viewUrl: string;
//     };
//     startDate: string; // Added field
//     endDate: string; // Added field
//   }
// }
