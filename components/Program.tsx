/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { Course } from 'common/util/types';
import Link from 'next/link';
import axios from 'axios';
import { CheckCircle } from 'lucide-react';
import LeadForm from '@/components/global/LeadForm';

const Program: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [visibleCourses, setVisibleCourses] = useState<number>(8);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_TRAINING_BASE_URL}api/v1/get-course-title`,
        { withCredentials: true }
      );
      setCourses(response?.data?.courses);
    };
    fetchData();
  }, []);

  const uniqueCategories = Array.from(
    new Set(courses.map((course) => course.category))
  );
  const categories = ['All', ...uniqueCategories];
  const filteredCourses =
    selectedCategory === 'All'
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <div className="min-h-screen w-[90vw] m-auto bg-gray-50 text-gray-900 py-12 px-6 mt-10 ">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-blue-800">
        Explore Our Courses
      </h1>
      <p className="text-lg text-center mb-8 text-gray-600">
        Gain industry-leading skills and elevate your career!
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories
          .filter((cat) => cat !== 'SAP')
          .map((category, index) => (
            <span
              key={index}
              className={`cursor-pointer px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-md ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </span>
          ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {filteredCourses
          .slice(0, visibleCourses)
          .filter((course) => course.category !== 'SAP')
          .map((course) => (
            <Link
              key={course._id}
              href={'/courses/course-details/' + course?.url}
            >
              <div className="relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
                <img
                  src={course.preview_image_uri || '/images/emptycourse.jfif'}
                  alt={course.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-5 flex flex-col gap-2">
                  <h3 className=" font-semibold text-gray-900">
                    {course.title}
                  </h3>
                  <p className="text-sm font-bold text-blue-600">
                    ₹ {course.price || 'N/A'}
                  </p>
                  <span className="self-start bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                    {course.category}
                  </span>
                </div>
              </div>
            </Link>
          ))}
      </div>

      {filteredCourses.length > visibleCourses && (
        <div className="text-center mt-10">
          <button
            onClick={() => setVisibleCourses((prev) => prev + 8)}
            className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-bold shadow-md hover:bg-blue-700 transition duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Program;
