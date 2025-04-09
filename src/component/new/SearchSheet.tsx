'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Search,
  X,
  TrendingUp,
  BookOpen,
  Clock,
  Award,
  Users,
  Star,
  ChevronRight,
  Tag,
  Bookmark,
  Info,
} from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Define interfaces based on the API structure
interface CoursePrice {
  amount: number;
  currency: string;
}

interface CourseImage {
  viewUrl: string;
}

interface Course {
  _id: string;
  title: string;
  slug: string;
  durationHours: number;
  price: CoursePrice;
  previewImage?: CourseImage;
}

interface Category {
  _id: string;
  name: string;
  slug: string;
  logo?: {
    viewUrl: string;
  };
}

const SearchSheetComponent = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState<Course[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [trendingCourses, setTrendingCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Define backend URL
  const backendUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL ?? 'https://backendbskilling.up.railway.app';

  // Fetch categories when sheet opens
  useEffect(() => {
    if (!sheetOpen) return;

    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `${backendUrl}/api/categories?limit=10&page=1&type=b2c&isPublished=true`
        );
        const data = await response.json();
        setCategories(data.data.categories || []);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    const fetchTrendingCourses = async () => {
      try {
        const response = await fetch(
          `${backendUrl}/api/courses?limit=12&page=1&sort=-createdAt&isPublished=true&type=b2c`
        );
        const data = await response.json();
        setTrendingCourses(data.data.courses || []);
      } catch (error) {
        console.error('Error fetching trending courses:', error);
      }
    };

    fetchCategories();
    fetchTrendingCourses();
  }, [sheetOpen, backendUrl]);

  // Search courses based on input
  useEffect(() => {
    if (inputValue.length < 3 || !sheetOpen) {
      setSearchResults([]);
      return;
    }

    const searchCourses = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${backendUrl}/api/courses?limit=10&page=1&search=${inputValue}&isPublished=true&type=b2c`
        );
        const data = await response.json();
        setSearchResults(data.data.courses || []);
      } catch (error) {
        console.error('Error searching courses:', error);
        setSearchResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    // Debounce search to avoid too many requests
    const timer = setTimeout(() => {
      searchCourses();
    }, 300);

    return () => clearTimeout(timer);
  }, [inputValue, sheetOpen, backendUrl]);

  // Handle search input changes
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Navigate to course
  const handleCourseClick = (course: Course) => {
    router.push(`/course/${course.slug}?id=${course._id}`);
    setSheetOpen(false);
  };

  // Navigate to category
  const handleCategoryClick = (category: Category) => {
    router.push(`/individual-training?tab=${category.name}`);
    setSheetOpen(false);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  // Loading skeleton component
  const Skeleton = ({ className }: { className: string }) => (
    <div className={`animate-pulse rounded ${className}`}></div>
  );

  return (
    <div className="relative flex-grow max-w-md mr-4">
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger className="relative w-full">
          <div className="relative flex items-center">
            <input
              type="text"
              className="w-full text-sm h-10 border rounded-full bg-white px-5 pl-10 outline-none focus:outline-none focus:ring-1 focus:ring-blue-400 text-gray-800 border-gray-200 shadow-sm"
              placeholder="Search for courses or skills"
              required
              value={inputValue}
              onChange={e => {
                handleSearch(e);
              }}
            />
            <Search className="absolute top-3 left-3 text-blue-500" size={16} />
          </div>
        </SheetTrigger>

        <SheetContent
          side={'top'}
          className="h-screen bg-white p-0 overflow-y-auto border-t border-gray-200"
        >
          <div className="container mx-auto max-w-6xl px-4 py-6">
            <SheetHeader className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Find Your Perfect Course</h2>
              <p className="text-gray-500 text-sm mt-1">
                Search across our library of professional courses
              </p>
            </SheetHeader>

            <div className="flex flex-col space-y-6 w-full">
              {/* Search Input */}
              <div className="relative w-full mx-auto max-w-2xl">
                <input
                  type="text"
                  className="w-full text-base h-12 border rounded-lg bg-white px-6 pl-12 outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 border-gray-200 shadow-sm"
                  placeholder="Search for courses or skills"
                  required
                  value={inputValue}
                  onChange={handleSearch}
                  autoFocus
                />
                <Search className="absolute top-3.5 left-4 text-blue-500" size={20} />

                {inputValue && (
                  <button
                    onClick={() => setInputValue('')}
                    className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>

              {/* Content Sections */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left Column: Categories */}
                <div className="md:col-span-1">
                  <div className="rounded-lg bg-gray-50 p-5 border border-gray-100">
                    <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                      <Tag size={18} className="text-blue-500 mr-2" /> Browse Categories
                    </h3>

                    {categories.length === 0 ? (
                      <div className="space-y-2">
                        {[1, 2, 3, 4, 5].map(i => (
                          <Skeleton key={i} className="h-8 w-full bg-gray-200" />
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {categories.map(category => (
                          <Badge
                            key={category._id}
                            className="px-3 py-2 bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-100 cursor-pointer transition-all"
                            onClick={() => handleCategoryClick(category)}
                          >
                            {category.name}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Middle/Right Columns: Search Results or Trending */}
                <div className="md:col-span-2">
                  {/* When actively searching */}
                  {inputValue.length >= 3 ? (
                    <div className="rounded-lg bg-white p-5 border border-gray-100 shadow-sm">
                      <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center justify-between">
                        <div className="flex items-center">
                          <Search size={18} className="text-blue-500 mr-2" />
                          Search Results
                          {!isLoading && searchResults.length > 0 && (
                            <Badge className="ml-2 bg-blue-100 text-blue-700 border-0">
                              {searchResults.length}
                            </Badge>
                          )}
                        </div>
                      </h3>

                      {isLoading ? (
                        <div className="space-y-4">
                          {[1, 2, 3].map(i => (
                            <div key={i} className="flex gap-4">
                              <Skeleton className="h-16 w-16 rounded bg-gray-200" />
                              <div className="space-y-2 flex-1">
                                <Skeleton className="h-4 w-full bg-gray-200" />
                                <Skeleton className="h-4 w-2/3 bg-gray-200" />
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : searchResults.length > 0 ? (
                        <motion.div
                          className="space-y-3"
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          {searchResults.map(course => (
                            <motion.div
                              key={course._id}
                              className="flex gap-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer border border-gray-100 transition-colors group"
                              onClick={() => handleCourseClick(course)}
                              variants={itemVariants}
                            >
                              <div className="h-16 w-16 rounded overflow-hidden bg-gray-100 flex items-center justify-center">
                                {course.previewImage?.viewUrl ? (
                                  <img
                                    src={course.previewImage.viewUrl}
                                    alt={course.title}
                                    className="h-full w-full object-cover"
                                  />
                                ) : (
                                  <BookOpen size={24} className="text-gray-400" />
                                )}
                              </div>

                              <div className="flex-1">
                                <h4 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-1">
                                  {course.title}
                                </h4>
                                <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                                  <div className="flex items-center">
                                    <Clock size={14} className="mr-1" />
                                    {course.durationHours} hours
                                  </div>

                                  {course.price && (
                                    <div className="flex items-center">
                                      <Award size={14} className="mr-1" />
                                      {course.price.amount === 0 ? (
                                        <span className="text-green-600 font-medium">Free</span>
                                      ) : (
                                        `${course.price.amount} ${course.price.currency}`
                                      )}
                                    </div>
                                  )}
                                </div>
                              </div>

                              <div className="flex items-center">
                                <ChevronRight
                                  size={16}
                                  className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
                                />
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      ) : (
                        <div className="text-center py-8 bg-gray-50 rounded-lg border border-gray-100">
                          <div className="mx-auto w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                            <Search size={24} className="text-gray-400" />
                          </div>
                          <h4 className="text-lg font-medium text-gray-800 mb-2">
                            No courses found
                          </h4>
                          <p className="text-gray-500 mb-4">
                            Try different keywords or browse our trending courses
                          </p>
                        </div>
                      )}
                    </div>
                  ) : (
                    // When not actively searching - show trending
                    <div className="rounded-lg bg-white p-5 border border-gray-100 shadow-sm">
                      <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                        <TrendingUp size={18} className="text-blue-500 mr-2" /> Trending Courses
                      </h3>

                      {trendingCourses.length === 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[1, 2, 3, 4].map(i => (
                            <div key={i} className="flex gap-3">
                              <Skeleton className="h-14 w-14 rounded bg-gray-200" />
                              <div className="space-y-2 flex-1">
                                <Skeleton className="h-4 w-full bg-gray-200" />
                                <Skeleton className="h-3 w-2/3 bg-gray-200" />
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {trendingCourses.map(course => (
                            <div
                              key={course._id}
                              className="flex gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer border border-gray-100 transition-colors group"
                              onClick={() => handleCourseClick(course)}
                            >
                              <div className="h-14 w-14 rounded overflow-hidden bg-gray-100 flex items-center justify-center">
                                {course.previewImage?.viewUrl ? (
                                  <img
                                    src={course.previewImage.viewUrl}
                                    alt={course.title}
                                    className="h-full w-full object-cover"
                                  />
                                ) : (
                                  <BookOpen size={20} className="text-gray-400" />
                                )}
                              </div>

                              <div className="flex-1">
                                <h4 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors text-sm line-clamp-1">
                                  {course.title}
                                </h4>
                                <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                                  <div className="flex items-center">
                                    <Users size={12} className="mr-1" />
                                    {Math.floor(Math.random() * 1000) + 100}
                                  </div>
                                  <div className="flex items-center">
                                    <Star size={12} className="mr-1 text-yellow-400" />
                                    {(4 + Math.random()).toFixed(1)}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="mt-6 flex justify-center">
                        <Button
                          className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                          onClick={() => {
                            router.push('/individual-training');
                            setSheetOpen(false);
                          }}
                        >
                          Browse All Courses
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="mt-4 border-t border-gray-100 pt-4 text-center">
                <p className="text-xs text-gray-500 flex items-center justify-center">
                  <Info size={12} className="mr-1" />
                  Get personalized course recommendations based on your interests
                </p>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SearchSheetComponent;
