/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Skeleton } from '@/components/ui/skeleton';
import usePrograms from '@/lib/hooks/usePrograms';
import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useQuery } from '@tanstack/react-query';
import { Course } from 'common/util/types';
import axios from 'axios';
import { cn } from '@/lib/utils';
const breakpoints = [
  { width: 1800, items: 14 }, // Ultra-wide screens
  { width: 1600, items: 10 }, // Extra-large screens
  { width: 1440, items: 10 }, // 2xl screens
  { width: 1280, items: 8 }, // xl screens
  { width: 1100, items: 6 }, // Between xl and lg
  { width: 1024, items: 3 }, // Laptops (lg)
  { width: 900, items: 2 }, // Between tablets and laptops
  { width: 768, items: 0 }, // Tablets (md)
];

export default function Cats() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [close, setClose] = useState(false);

  const {
    isLoading: isLoading1,
    data: data1,
    error: error1,
  } = useQuery<Course[] | []>({
    queryKey: ['courses'],
    queryFn: async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_TRAINING_BASE_URL}api/v1/get-course-title`
        );

        const jsonData = response.data;
        console.log('res', jsonData);
        const ListOfCoursesData = Object.values(jsonData.courses);
        console.log('res', ListOfCoursesData);
        const flattenedData = ListOfCoursesData.flatMap(innerArray => innerArray);

        return flattenedData as Course[];
      } catch (error) {
        console.error('Error fetching API:', error);
        return [];
      }
    },
    staleTime: 60 * 60 * 1000,
  });
  const handleCategoryHover = (category: any) => {
    setSelectedCategory(category);
  };

  const uniqueCategories = Array.from(new Set(data1?.map(course => course.category)));
  const filteredCourses = uniqueCategories.flatMap(category =>
    selectedCategory === category ? data1?.filter(course => course.category === category) : []
  );

  const { data, isLoading, error } = usePrograms();
  const [currentCat, setCurrentCat] = useState('Artificial intelligence');
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1440
  );

  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const { visibleItems, hiddenItems } = useMemo(() => {
    if (!data) return { visibleItems: [], hiddenItems: [] };
    const maxItems = breakpoints.find(bp => windowWidth >= bp.width)?.items || 1;
    const keys = Object.keys(data);
    return {
      visibleItems: keys.slice(0, maxItems),
      hiddenItems: keys.slice(maxItems),
    };
  }, [windowWidth, data]);
  if (isLoading) return <CategorySkelton />;

  return (
    <>
      <div className="md:hidden flex items-center justify-between gap-x-4 overflow-x-auto w-[100vw] p-2">
        {data &&
          Object.entries(data).map(([key, value]) => (
            <Link
              href={`/individual-training?tab=${key}`}
              key={key}
              className="text-xs w-full whitespace-nowrap"
            >
              {key}
            </Link>
          ))}
      </div>
      <div className="hidden md:flex items-center justify-between gap-x-4  px-5 py-5 ">
        <div className="w-full flex flex-wrap items-center  gap-10 gap-y-5">
          {visibleItems.map(key => (
            <Link
              key={key}
              href={`/individual-training?tab=${key}`}
              className="text-sm text-muted-foreground"
            >
              <Button variant={'outline'} className="rounded-full">
                {key}
              </Button>
            </Link>
          ))}
          {hiddenItems?.length > 0 && (
            <Popover>
              <PopoverTrigger>
                <RxHamburgerMenu size={20} />
              </PopoverTrigger>
              <PopoverContent className="flex flex-col gap-y-4">
                {hiddenItems.map(key => (
                  <Link key={key} href={`/individual-training?tab=${key}`} className="text-sm">
                    {key}
                  </Link>
                ))}
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </>
  );
}

function CategorySkelton() {
  return (
    <>
      <div className="flex  gap-2">
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-[100px] h-[20px] rounded-full" />

        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-[100px] h-[20px] rounded-full" />

        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
      </div>
    </>
  );
}
