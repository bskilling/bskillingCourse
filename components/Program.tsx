/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { Course } from 'common/util/types';
import Link from 'next/link';
import axios from 'axios';

const Program: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    'All'
  );
  const [visibleCourses, setVisibleCourses] = useState<number>(6);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const fetchData = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_TRAINING_BASE_URL}api/v1/get-course-title`,
      {
        withCredentials: true,
      }
    );
    const data = response;
    console.log(data, '----------------------------------------------------');
    setCourses(data?.data?.courses);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Extract unique categories, including "All"
  const uniqueCategories = Array.from(
    new Set(courses.map((course) => course.category))
  );
  let categories = ['All', ...uniqueCategories];

  // Separate the 'Others' category to ensure it's always under "More"
  const otherCategoryIndex = categories.indexOf('Others');
  if (otherCategoryIndex > -1) {
    categories.splice(otherCategoryIndex, 1);
    categories.push('Others');
  }

  // Split categories into visible and dropdown categories
  const visibleCategories = categories.slice(0, 8);
  const dropdownCategories = categories.slice(8);

  // Filter courses by selected category
  const filteredCourses =
    selectedCategory === 'All' || !selectedCategory
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  // Load more courses
  const loadMoreCourses = () => {
    setVisibleCourses((prevVisibleCourses) => prevVisibleCourses + 6);
  };

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">
        Professional Certification Courses
      </h1>
      <p className="text-xl text-center mb-10 text-subText">
        Transform Your Skills, Transform Your Career!
      </p>

      <div>
        <div className="flex flex-wrap justify-center mb-8 space-x-4">
          {visibleCategories.map((category, index) => (
            <span
              key={index}
              className={`cursor-pointer transition duration-300 text-base font-semibold hover:text-customRed ${
                selectedCategory === category
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-subText'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </span>
          ))}

          {dropdownCategories.length > 0 && (
            <div className="relative">
              <span
                onClick={() => setShowDropdown(!showDropdown)}
                className={`cursor-pointer transition duration-300 text-base font-semibold text-subText hover:text-customRed`}
              >
                More ▼
              </span>
              {showDropdown && (
                <div className="absolute z-10 bg-white border rounded shadow-lg mt-2">
                  {dropdownCategories.map((category, index) => (
                    <span
                      key={index}
                      className={`block px-4 py-2 cursor-pointer hover:bg-customRed transition duration-300 text-base font-semibold ${
                        selectedCategory === category
                          ? 'text-blue-600'
                          : 'text-subText'
                      }`}
                      onClick={() => {
                        setSelectedCategory(category);
                        setShowDropdown(false);
                      }}
                    >
                      {category}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {filteredCourses.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-6">
          {filteredCourses.slice(0, visibleCourses).map((course) => (
            <div
              key={course._id}
              className="bg-white p-0 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-[20rem] h-72 flex flex-col"
            >
              <Link href={'courses/course-details/' + course?.url}>
                <div className="overflow-hidden rounded-t-lg mb-4">
                  <img
                    src={
                      course.preview_image_uri
                        ? `${course.preview_image_uri}`
                        : '/images/emptycourse.jfif'
                    }
                    alt={course.title}
                    className="w-full h-40 object-cover transition-transform duration-300 transform hover:scale-105"
                  />
                </div>
                <h3 className="text-md text-black font-semibold mb-2 px-2 hover:text-customRed">
                  {course.title}
                </h3>
              </Link>
              <p className="text-lg text-cartBtn font-bold mb-2 mt-auto px-2">
                ₹ {course.price ? `${course.price}` : 'Price not available'}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-4">
          No courses available for this category.
        </p>
      )}

      {filteredCourses.length > visibleCourses && (
        <div className="text-center mt-8">
          <button
            onClick={loadMoreCourses}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Program;
