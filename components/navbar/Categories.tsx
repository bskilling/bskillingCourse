/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
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

export default function Categories() {
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
        const flattenedData = ListOfCoursesData.flatMap(
          (innerArray) => innerArray
        );

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

  const uniqueCategories = Array.from(
    new Set(data1?.map((course) => course.category))
  );
  const filteredCourses = uniqueCategories.flatMap((category) =>
    selectedCategory === category
      ? data1?.filter((course) => course.category === category)
      : []
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
    const maxItems =
      breakpoints.find((bp) => windowWidth >= bp.width)?.items || 1;
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
      <div className="hidden md:flex items-center justify-between gap-x-4 2xl:px-14 px-5 py-1 bg-muted">
        <Popover>
          <PopoverTrigger className="">
            {' '}
            <div className="   font-medium flex flex-col justify-start items-start">
              <p className="text-sm font-normal">All</p>
              <p className="inline-flex gap-x-2 items-center">
                Courses <FaAngleDown />
              </p>
            </div>
          </PopoverTrigger>
          <PopoverContent className=" w-[55vw] m-auto ml-3 max-h-[600px] ">
            {' '}
            <div className="flex text-sm font-normal">
              <div
                className="w-1/4 p-4  h-[570px]  overflow-y-auto"
                //   onMouseEnter={() => setSelectedCategory(null)}
              >
                <div className="text-lg mb-2 font-bold text-black ">
                  Categories
                </div>
                <ul>
                  {uniqueCategories.map((category, index) => (
                    <li
                      key={index}
                      className={cn(
                        'p-2  hover:bg-primary hover:text-primary-foreground hover:rounded-[8px] cursor-pointer mt-2',
                        selectedCategory === category &&
                          ' bg-primary text-primary-foreground font-semibold shadow-md rounded-[8px]'
                      )}
                      onClick={() => handleCategoryHover(category)}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-3/4 p-4 max-h-[560px] border-l overflow-y-auto">
                <div className="text-lg mb-2 font-bold text-customRed">
                  Courses
                </div>
                {filteredCourses?.length > 0 ? (
                  <div className="grid grid-cols-1 gap-5">
                    {data &&
                      filteredCourses &&
                      filteredCourses?.map((course) => (
                        <Link
                          style={{ textDecoration: 'none' }}
                          href={`/courses/course-details/${course?.url}`}
                          key={course?._id}
                        >
                          <p>{course?.title}</p>
                        </Link>
                      ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-5">
                    {data1?.map((course) => (
                      <Link
                        style={{ textDecoration: 'none' }}
                        href={`/courses/course-details/${course?.url}`}
                        key={course?._id}
                      >
                        <p>{course?.title}</p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {/* <Popover>
          <PopoverTrigger className="">
            {' '}
            <div className="   font-medium flex flex-col justify-start items-start">
              <p className="text-sm font-normal">All</p>
              <p className="inline-flex gap-x-2 items-center">
                Courses <FaAngleDown />
              </p>
            </div>
          </PopoverTrigger>
          <PopoverContent className=" 2xl:w-[800px] md:w-[600px] w-[95vw] flex m-auto md:ml-10  mt-3 max-h-[600px] ">
            <div className="flex flex-col gap-y-5">
              {data &&
                Object.entries(data).map(([key, value]) => (
                  <p key={key} className="text-sm">
                    {key}
                  </p>
                ))}
            </div>{' '}
            <div className="border-l pl-3 flex flex-col gap-y-5 ml-2">
              {data &&
                data[currentCat].map((content, key) => (
                  <div key={key} className="w-full text-sm">
                    <Link
                      href={'courses/course-details/' + content?.url}
                      key={content._id}
                    >
                      <p>{content?.title}</p>
                    </Link>
                  </div>
                ))}
            </div>
          </PopoverContent>
        </Popover> */}
        <div className="w-full flex items-center  justify-end gap-x-10">
          {visibleItems.map((key) => (
            <Link
              key={key}
              href={`/individual-training?tab=${key}`}
              className="text-sm text-muted-foreground"
            >
              {key}
            </Link>
          ))}
          {hiddenItems?.length > 0 && (
            <Popover>
              <PopoverTrigger>
                <RxHamburgerMenu size={20} />
              </PopoverTrigger>
              <PopoverContent className="flex flex-col gap-y-4">
                {hiddenItems.map((key) => (
                  <Link
                    key={key}
                    href={`/individual-training?tab=${key}`}
                    className="text-sm"
                  >
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
