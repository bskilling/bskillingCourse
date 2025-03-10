/* eslint-disable @next/next/no-img-element */
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ICourse } from '../types/Course.types';

interface CourseCardProps {
  course: ICourse;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="relative overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-105 hover:shadow-2xl bg-white">
      <Link href={`/course/${course.slug}?id=${course._id.toString()}`}>
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
              course.price.amount === 0 ? 'text-green-600' : 'text-gray-800'
            )}
          >
            {course.price.amount === 0
              ? 'Free'
              : `${course.price.amount} ${course.price.currency}`}
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-4 border-t flex justify-between items-center">
        <Button asChild variant="outline" className="w-full font-semibold">
          <Link href={`/course/${course.slug}?id=${course._id.toString()}`}>
            View Course
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
