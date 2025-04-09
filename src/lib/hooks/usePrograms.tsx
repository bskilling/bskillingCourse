// useCoursesAndCategories.ts
import { ICourse } from '@/component/types/Course.types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

// Types

// Define the types for categories as provided
interface Pagination {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
}

interface Logo {
  _id: string;
  viewUrl: string;
}

interface Category {
  _id: string;
  name: string;
  slug: string;
  logo: Logo;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ICategories {
  categories: Category[];
  pagination: Pagination;
}

export interface ICourseResponse {
  courses: ICourse[];
  pagination: Pagination;
}

// Hook interface
interface UseCoursesAndCategoriesProps {
  type: 'b2c' | 'b2b' | 'b2i' | 'b2g'; // Business to Consumer, Business, Individual, Government
  initialCategory?: Category | null;
  searchTerm?: string;
  limit?: number;
  page?: number;
}

// Backend URL
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'https://backendbskilling.up.railway.app';

/**
 * Custom hook to fetch both categories and courses with proper caching
 */
export const useCoursesAndCategories = ({
  type,
  initialCategory = null,
  searchTerm = '',
  limit = 100,
  page = 1,
}: UseCoursesAndCategoriesProps) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>(searchTerm);

  // Fetch categories
  const categoriesQuery = useQuery<ICategories>({
    queryKey: ['categories', type],
    queryFn: async () => {
      const res = await axios.get(`${backendUrl}/api/categories`, {
        params: {
          limit,
          page,
          type,
          isPublished: true,
        },
      });
      return res.data.data;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  // Fetch courses based on selected category
  const coursesQuery = useQuery<ICourseResponse>({
    queryKey: ['courses', type, selectedCategory?._id, true], // true for isPublished
    queryFn: async () => {
      const res = await axios.get(`${backendUrl}/api/courses`, {
        params: {
          limit,
          page,
          category: selectedCategory?._id ?? undefined,
          isPublished: true,
          type,
        },
      });
      return res.data.data;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  // Filter courses by search term if provided
  const filteredCourses = coursesQuery.data?.courses.filter(
    course => !searchQuery || course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Select a category
  const selectCategory = (category: Category | null) => {
    setSelectedCategory(category);
  };

  // Update search query
  const updateSearchQuery = (query: string) => {
    setSearchQuery(query);
  };

  return {
    // Categories data and state
    categories: categoriesQuery.data?.categories || [],
    categoriesLoading: categoriesQuery.isLoading,
    categoriesError: categoriesQuery.error,
    selectedCategory,
    selectCategory,

    // Courses data and state
    courses: filteredCourses || [],
    allCourses: coursesQuery.data?.courses || [],
    coursesLoading: coursesQuery.isLoading,
    coursesError: coursesQuery.error,

    // Search functionality
    searchQuery,
    updateSearchQuery,

    // Refetch methods
    refetchCategories: categoriesQuery.refetch,
    refetchCourses: coursesQuery.refetch,

    // Pagination data
    pagination: coursesQuery.data?.pagination,
  };
};
