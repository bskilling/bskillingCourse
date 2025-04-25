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
  ArrowLeft,
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
  description?: string;
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

interface RecentSearch {
  id: string;
  term: string;
  timestamp: number;
}

const SearchSheetComponent = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState<Course[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [trendingCourses, setTrendingCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState<RecentSearch[]>([]);
  const router = useRouter();

  // Define backend URL
  const backendUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL ?? 'https://backendbskilling.up.railway.app';

  // Load recent searches from localStorage on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedSearches = localStorage.getItem('recentSearches');
      if (savedSearches) {
        try {
          const parsedSearches = JSON.parse(savedSearches);
          setRecentSearches(parsedSearches);
        } catch (error) {
          console.error('Error parsing recent searches:', error);
          // Reset if corrupted
          localStorage.removeItem('recentSearches');
        }
      }
    }
  }, []);

  // Save recent searches to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== 'undefined' && recentSearches.length > 0) {
      localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
    }
  }, [recentSearches]);

  // Fetch categories and trending courses when sheet opens
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
          `${backendUrl}/api/courses?limit=8&page=1&sort=-createdAt&isPublished=true&type=b2c`
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

  // Search courses based on input with improved error handling
  useEffect(() => {
    if (inputValue.length < 3 || !sheetOpen) {
      setSearchResults([]);
      return;
    }

    const searchCourses = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${backendUrl}/api/courses?limit=10&page=1&search=${encodeURIComponent(inputValue)}&isPublished=true&type=b2c`
        );

        if (!response.ok) {
          throw new Error(`Search request failed with status: ${response.status}`);
        }

        const data = await response.json();
        setSearchResults(data.data.courses || []);

        // Add to recent searches
        saveRecentSearch(inputValue);
      } catch (error) {
        console.error('Error searching courses:', error);
        setSearchResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    // Improved debounce with cleanup
    const timer = setTimeout(() => {
      searchCourses();
    }, 500); // Increased debounce time for better UX

    return () => clearTimeout(timer);
  }, [inputValue, sheetOpen, backendUrl]);

  // Save recent search
  const saveRecentSearch = (term: string) => {
    // Don't save empty searches
    if (!term.trim()) return;

    setRecentSearches(prevSearches => {
      // Check if this search already exists
      const existingIndex = prevSearches.findIndex(
        search => search.term.toLowerCase() === term.toLowerCase()
      );

      // Create new array to avoid mutation
      const updatedSearches = [...prevSearches];

      // If exists, remove it (we'll add it back at the top)
      if (existingIndex >= 0) {
        updatedSearches.splice(existingIndex, 1);
      }

      // Add at the beginning
      const newSearch = {
        id: `search-${Date.now()}`,
        term: term,
        timestamp: Date.now(),
      };

      // Keep only the latest 6 searches
      return [newSearch, ...updatedSearches].slice(0, 6);
    });
  };

  // Delete a recent search
  const deleteRecentSearch = (searchId: string, event: React.MouseEvent) => {
    // Prevent propagation so it doesn't trigger the parent onClick
    event.stopPropagation();

    setRecentSearches(prevSearches => prevSearches.filter(search => search.id !== searchId));

    // If localStorage is empty after deletion, remove the item
    if (recentSearches.length <= 1) {
      localStorage.removeItem('recentSearches');
    }
  };

  // Handle clicking on a recent search
  const handleRecentSearchClick = (term: string) => {
    setInputValue(term);
  };

  // Handle search input changes
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Clear search input
  const clearSearch = () => {
    setInputValue('');
  };

  // Navigate to course
  const handleCourseClick = (course: Course) => {
    router.push(`/course/${course.slug}`);
    setSheetOpen(false);
  };

  // Navigate to category
  const handleCategoryClick = (category: Category) => {
    router.push(`/individual-training?tab=${category.name}`);
    setSheetOpen(false);
  };

  // Close sheet
  const handleCloseSheet = () => {
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
          {/* New Design Structure */}
          <div className="flex min-h-screen md:px-10 ">
            {/* Left sidebar with background gradient */}
            {/* <div className="hidden md:block w-56 bg-indigo-950 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div
                  className="absolute w-full h-full"
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)',
                    backgroundSize: '100px 100px',
                  }}
                ></div>
              </div>
            </div> */}

            {/* Main content area */}
            <div className="flex-1 bg-white p-8">
              {/* Back button and search bar */}
              <div className="flex items-center mb-8">
                <button onClick={handleCloseSheet} className="mr-5">
                  <ArrowLeft size={40} />
                </button>
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Search courses"
                    className="w-full py-2 px-4 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={inputValue}
                    onChange={handleSearch}
                    autoFocus
                  />
                  <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                  {inputValue && (
                    <button
                      onClick={clearSearch}
                      className="absolute right-4 top-2.5 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X size={18} />
                    </button>
                  )}
                </div>
              </div>

              {/* Two column layout */}
              <div className="flex flex-col md:flex-row">
                {/* Left column */}
                <div className="w-full md:w-1/3 pr-0 md:pr-8 mb-8 md:mb-0">
                  {/* Popular searches / Recent searches */}
                  <div className="mb-8">
                    <h2 className="text-gray-600 font-medium mb-4">
                      {recentSearches.length > 0 ? 'Recent Searches' : 'Popular Searches'}
                    </h2>
                    <ul className="space-y-3">
                      {recentSearches.length > 0
                        ? recentSearches.map(search => (
                            <li key={search.id} className="flex items-center justify-between group">
                              <a
                                onClick={() => handleRecentSearchClick(search.term)}
                                className="text-blue-500  cursor-pointer"
                              >
                                {search.term}
                              </a>
                              <button
                                onClick={e => deleteRecentSearch(search.id, e)}
                                className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-gray-600 transition-opacity"
                              >
                                <X size={16} />
                              </button>
                            </li>
                          ))
                        : // Fallback to popular searches when no recent searches
                          ['aws', 'devops', 'data science', 'ceh', 'chatgpt', 'power bi'].map(
                            (term, index) => (
                              <li key={index}>
                                <a
                                  onClick={() => handleRecentSearchClick(term)}
                                  className="text-blue-500  cursor-pointer"
                                >
                                  {term}
                                </a>
                              </li>
                            )
                          )}
                    </ul>
                  </div>

                  {/* Popular course categories */}
                  <div>
                    <h2 className="text-gray-600 font-medium mb-4">Popular Course Categories</h2>
                    <div className="flex flex-wrap gap-2">
                      {categories.length === 0
                        ? // Loading state for categories
                          Array(5)
                            .fill(0)
                            .map((_, i) => <Skeleton key={i} className="h-9 w-32 bg-gray-200" />)
                        : categories.map(category => (
                            <Badge
                              key={category._id}
                              className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                              onClick={() => handleCategoryClick(category)}
                            >
                              {category.name}
                            </Badge>
                          ))}
                    </div>
                  </div>
                </div>

                {/* Right column - Popular courses or Search Results */}
                <div className="w-full md:w-2/3">
                  <h2 className="text-gray-600 font-medium mb-4">
                    {inputValue.length >= 3 ? 'Search Results' : 'Popular Courses'}
                  </h2>

                  {isLoading ? (
                    // Loading state
                    <div className="space-y-4">
                      {Array(3)
                        .fill(0)
                        .map((_, i) => (
                          <div key={i} className="border border-gray-200 rounded-lg p-4 bg-white">
                            <Skeleton className="h-4 w-1/3 bg-gray-200 mb-2" />
                            <Skeleton className="h-5 w-4/5 bg-gray-200 mb-2" />
                            <Skeleton className="h-4 w-3/4 bg-gray-200 mb-4" />
                            <div className="flex justify-between">
                              <Skeleton className="h-4 w-1/4 bg-gray-200" />
                              <Skeleton className="h-4 w-1/5 bg-gray-200" />
                            </div>
                          </div>
                        ))}
                    </div>
                  ) : inputValue.length >= 3 ? (
                    // Search Results
                    <motion.div
                      className="space-y-4"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {searchResults.length > 0 ? (
                        searchResults.map(course => (
                          <motion.div
                            key={course._id}
                            className="border border-gray-200 rounded-lg p-4 bg-white hover:shadow-md transition-shadow cursor-pointer"
                            onClick={() => handleCourseClick(course)}
                            variants={itemVariants}
                          >
                            <div className="text-sm text-gray-500 mb-1">
                              {/* Provider name could be added here */}
                              <img
                                src={course.previewImage?.viewUrl}
                                alt="course preview img"
                                className="w-20 h-20 object-cover rounded-md"
                              />
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-800 mb-1">{course.title}</h3>
                              {course.description && (
                                <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                                  {course.description}
                                </p>
                              )}
                              <div className="flex justify-between items-center">
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                  {course.durationHours && (
                                    <div className="flex items-center">
                                      <Clock size={14} className="mr-1" />
                                      {course.durationHours} hours
                                    </div>
                                  )}
                                </div>
                                <div className="text-sm text-blue-500 flex items-center ">
                                  KNOW MORE <ChevronRight size={16} />
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))
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
                    </motion.div>
                  ) : (
                    // Popular Courses
                    <div className=" grid grid-cols-2 gap-5">
                      {trendingCourses.length === 0
                        ? Array(4)
                            .fill(0)
                            .map((_, i) => (
                              <div
                                key={i}
                                className="border border-gray-200 rounded-lg p-4 bg-white"
                              >
                                <Skeleton className="h-4 w-1/3 bg-gray-200 mb-2" />
                                <Skeleton className="h-5 w-4/5 bg-gray-200 mb-2" />
                                <Skeleton className="h-4 w-3/4 bg-gray-200 mb-4" />
                                <div className="flex justify-between">
                                  <Skeleton className="h-4 w-1/4 bg-gray-200" />
                                  <Skeleton className="h-4 w-1/5 bg-gray-200" />
                                </div>
                              </div>
                            ))
                        : trendingCourses.map(course => (
                            <div
                              key={course._id}
                              className="border border-gray-200 rounded-lg p-4 bg-white hover:shadow-md transition-shadow cursor-pointer flex gap-x-5"
                              onClick={() => handleCourseClick(course)}
                            >
                              <img
                                src={course.previewImage?.viewUrl}
                                alt="course preview img"
                                className="w-32 h-32 object-cover rounded-md"
                              />
                              <div>
                                <h3 className="font-medium text-gray-800 mb-1">{course.title}</h3>
                                {course.description && (
                                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                                    {course.description ||
                                      'Includes Source Code Management, Continuous Integration, and more'}
                                  </p>
                                )}
                                <div className="flex justify-between items-center">
                                  <div className="text-sm text-blue-500 flex items-center ">
                                    KNOW MORE <ChevronRight size={16} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}

                      <div className="mt-6">
                        <Link href="/individual-training" className="text-blue-500 ">
                          View All Courses
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SearchSheetComponent;
