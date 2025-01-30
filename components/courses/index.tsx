/* eslint-disable @next/next/no-img-element */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Course } from 'common/util/types';
import Link from 'next/link';
import React, { useState } from 'react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [close, setClose] = useState(false);

  const { isLoading, data, error } = useQuery<Course[] | []>({
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
    new Set(data?.map((course) => course.category))
  );
  const filteredCourses = uniqueCategories.flatMap((category) =>
    selectedCategory === category
      ? data?.filter((course) => course.category === category)
      : []
  );

  return (
    <>
      <Sheet>
        <SheetTrigger className="md:hidden block">
          {' '}
          <Button
            size={'sm'}
            className="flex gap-x-2 items-center"
            variant={'outline'}
          >
            Courses <FaAngleDown />
          </Button>
        </SheetTrigger>
        <SheetContent side={'top'} className="w-full h-[100vh] overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Categories</SheetTitle>
          </SheetHeader>

          {uniqueCategories?.map((category, index) => (
            <div key={`item-${index}`}>
              <div>
                {' '}
                <p
                  key={index + category}
                  className={cn(
                    'p-2   hover:rounded-[8px] cursor-pointer mt-2 flex items-center justify-between w-full',
                    close &&
                      selectedCategory === category &&
                      ' bg-primary text-primary-foreground font-semibold shadow-md rounded-[8px]'
                  )}
                  onClick={() => {
                    handleCategoryHover(category);
                    setClose((prev) => !prev);
                  }}
                >
                  {category}{' '}
                  <span className="mx-2">
                    {close && selectedCategory === category ? (
                      <FaAngleDown />
                    ) : (
                      <FaAngleUp />
                    )}
                  </span>
                </p>
              </div>
              {close && selectedCategory === category && (
                <>
                  <div className="mt-4  rounded-md p-1 bg-muted">
                    <div className="grid grid-cols-2 gap-5">
                      {data &&
                        filteredCourses &&
                        filteredCourses?.map((course) => (
                          <Link
                            style={{ textDecoration: 'none' }}
                            href={`/courses/course-details/${course?.url}`}
                            key={course?._id}
                          >
                            <Card className="!p-0">
                              <CardHeader>
                                <img
                                  src={course?.preview_image_uri}
                                  alt={course?._id}
                                  className="w-full h-20 object-cover rounded-md"
                                />

                                {/* <CardDescription>
                                    {course?.endorsed_by}
                                  </CardDescription> */}
                              </CardHeader>
                              <CardContent>
                                <p className="text-xs">{course?.title}</p>
                                {/* <p>Card Content</p> */}
                              </CardContent>
                            </Card>

                            {/* <li className="p-2 hover:bg-customRed font-semibold text-black hover:text-blue-600 cursor-pointer">
                          {course?.preview_image_uri}
                        </li> */}
                          </Link>
                        ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </SheetContent>
      </Sheet>

      <Popover>
        <PopoverTrigger className="hidden md:flex ">
          {' '}
          <Button
            className="flex gap-x-2 items-center border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            variant={'outline'}
            size={'sm'}
          >
            Courses <FaAngleDown />
          </Button>
        </PopoverTrigger>
        <PopoverContent className=" w-[85vw] m-auto ml-[7.2vw] mt-3 max-h-[600px] ">
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
                <div className="grid grid-cols-3 gap-5">
                  {data &&
                    filteredCourses &&
                    filteredCourses?.map((course) => (
                      <Link
                        style={{ textDecoration: 'none' }}
                        href={`/courses/course-details/${course?.url}`}
                        key={course?._id}
                      >
                        <Card className="!p-0 h-[300px]">
                          <CardHeader>
                            <CardTitle>{course?.title}</CardTitle>
                            <CardDescription>
                              {course?.endorsed_by}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            {/* <p>Card Content</p> */}
                            <img
                              src={course?.preview_image_uri}
                              alt={course?._id}
                              className="w-full h-36 object-cover rounded-md"
                            />
                          </CardContent>
                        </Card>

                        {/* <li className="p-2 hover:bg-customRed font-semibold text-black hover:text-blue-600 cursor-pointer">
                          {course?.preview_image_uri}
                        </li> */}
                      </Link>
                    ))}
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-5">
                  {data?.map((course) => (
                    <Link
                      style={{ textDecoration: 'none' }}
                      href={`/courses/course-details/${course?.url}`}
                      key={course?._id}
                    >
                      <Card className="!p-0  ">
                        <CardHeader className="h-[100px]">
                          <CardTitle>{course?.title}</CardTitle>
                          <CardDescription>
                            {course?.endorsed_by}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          {/* <p>Card Content</p> */}
                          <img
                            src={course?.preview_image_uri}
                            alt={course?._id}
                            className="w-full h-36 object-cover rounded-md"
                          />
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}

//**
//       {/* Courses Section */}
{
  /* <div className="relative hidden md:block"> */
}
{
  /* <button
                    className="bg-dropdownBg text-black px-4 py-2 rounded-md flex items-center hover:bg-subText"
                    onMouseEnter={handleDropdownHover}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <span className="text-[14px] font-semibold">Courses</span>
                    <SlArrowDown className="ml-2 w-3 h-2" />
                  </button> */
}
{
  /* {dropdownOpen && (
                    <div
                      style={{
                        maxHeight: '500px',
                        overflowY: 'auto',
                      }}
                      className="absolute top-7 w-[90vw] left-0 z-[5000] flex bg-white rounded-lg shadow-lg mt-2 text-xs"
                      onMouseEnter={handleDropdownHover}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div
                        className="w-1/2 p-4 border-r border-gray-300"
                        onMouseEnter={() => setSelectedCategory(null)}
                      >
                        <div className="text-lg mb-2 font-bold text-black ">
                          Categories
                        </div>
                        <ul>
                          {uniqueCategories.map((category, index) => (
                            <li
                              key={index}
                              className="p-2 hover:bg-customRed hover:text-blue-600 cursor-pointer font-semibold"
                              onMouseEnter={() => handleCategoryHover(category)}
                            >
                              {category}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="w-1/2 p-4">
                        <div className="text-lg mb-2 font-bold text-customRed">
                          Courses
                        </div>
                        {filteredCourses.length > 0 ? (
                          <ul>
                            {filteredCourses.map((course) => (
                              <Link
                                style={{ textDecoration: 'none' }}
                                href={`/courses/courseDetails/${course?.url}`}
                                key={course._id}
                              >
                                <li className="p-2 hover:bg-customRed font-semibold text-black hover:text-blue-600 cursor-pointer">
                                  {course.title}
                                </li>
                              </Link>
                            ))}
                          </ul>
                        ) : (
                          <ul>
                            {SearchElementsData.map((course) => (
                              <Link
                                style={{ textDecoration: 'none' }}
                                href={`/courses/courseDetails/${course?.url}`}
                                key={course._id}
                              >
                                <li className="p-2 hover:bg-customRed font-semibold text-black hover:text-blue-600 cursor-pointer">
                                  {course.title}
                                </li>
                              </Link>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  )} */
}
{
  /* </div> */
}
//
//
//
//
//  */
