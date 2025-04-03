/* eslint-disable @next/next/no-img-element */
'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

import { cn } from '@/lib/utils';
import { ICourse } from './types/Course.types';
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
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import CourseCard from './courses/CourseCard';
const backendUrl =
  process.env.NEXT_PUBLIC_BACKEND_URL ?? 'https://backendbskilling-production-20ff.up.railway.app';
export default function Program() {
  const selectedType = 'b2c';
  const [show, setShow] = useState(false);
  const [scategory, setScategory] = useState<ICategories['categories'][number] | null>(null);
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

  const [isPublished, setIsPublished] = useState<boolean | undefined>(false);
  const { data } = useQuery<{ courses: ICourse[] }>({
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

  return (
    <div className="p-8 w-[80vw] mx-auto">
      {/* Categories */}
      <h1 className="text-4xl font-bold mb-2 ">Explore Our Course Categories</h1>
      <p className="text-gray-500 ">Find the perfect learning path tailored to your goals</p>
      <div className="flex flex-wrap gap-4 mt-5">
        <div
          className={cn(
            'flex items-center justify-center px-4 hover:cursor-pointer py-3 border border-blue-500 rounded-lg shadow-md bg-white text-blue-700 font-medium transition-all hover:bg-blue-500 hover:text-white hover:shadow-lg hover:-translate-y-1',
            !scategory?._id && 'bg-blue-600 text-white border-blue-700 shadow-lg scale-[1.02]'
          )}
          onClick={() => setScategory(null)}
        >
          <p className="text-sm text-center">All</p>
        </div>
        {categoryQuery?.data?.categories?.map(category => (
          <div
            key={category.slug}
            className={cn(
              'flex items-center justify-center px-4 hover:cursor-pointer py-3 border border-blue-500 rounded-lg shadow-md bg-white text-blue-700 font-medium transition-all hover:bg-blue-500 hover:text-white hover:shadow-lg hover:-translate-y-1',
              category._id === scategory?._id &&
                'bg-blue-600 text-white border-blue-700 shadow-lg scale-[1.02]'
            )}
            onClick={() => setScategory(category)}
          >
            <p className="text-sm text-center">{category.name}</p>
          </div>
        ))}
      </div>

      {/* Courses */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-12">
        {data?.courses.map(course => <CourseCard key={course._id} course={course} />)}
      </div>
    </div>
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
