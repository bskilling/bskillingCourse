/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import { Course, Coursedetailstype } from 'common/util/types';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import PopupForm from '@/component/PopupForm';

interface OtherCourseProps {
  courseDetails: Coursedetailstype | null;
}

const OtherCourse: React.FC<OtherCourseProps> = ({ courseDetails }) => {
  const Relatedcategory = courseDetails?.category;
  const [courses, setCourses] = useState<Course[]>([]);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => setPopupOpen(true);
  const handleClosePopup = () => setPopupOpen(false);

  const fetchApiData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_TRAINING_BASE_URL}api/v1/get-course-title`
      );

      const jsonData = response.data;
      const ListOfCoursesData = Object.values(jsonData.courses) as Course[][];
      const flattenedData: Course[] = ListOfCoursesData.flatMap(
        (innerArray) => innerArray
      );
      const filteredCourses = flattenedData.filter(
        (course) => course?.category === Relatedcategory
      );
      setCourses(filteredCourses);
    } catch (error) {
      console.error('Error fetching API:', error);
    }
  };

  useEffect(() => {
    if (Relatedcategory) {
      fetchApiData();
    }
  }, [Relatedcategory]);
  return (
    <div className="py-4 md:py-6 lg:py-8">
      <h2 className="text-3xl font-bold mb-4 ml-16 px-8">Other Courses</h2>
      {isPopupOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-1000"
            onClick={handleClosePopup}
          ></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <PopupForm
              handleClosePopup={handleClosePopup}
              title="Get a Callback for Our Trending Tech Courses"
            />
          </div>
        </>
      )}
      {courses.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-6">
          {courses.slice(0, 5).map((course) => (
            <div
              key={course._id}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-[20rem] h-80 flex flex-col"
            >
              <Link href={course?.url}>
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
                <h3 className="text-md text-black font-semibold mb-2 hover:text-customRed">
                  {course.title}
                </h3>
              </Link>
              <p className="text-lg text-cartBtn font-bold mb-2 mt-auto">
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

      {courses.length > 0 && (
        <div className="flex items-center justify-center mt-5">
          <button
            onClick={handleOpenPopup}
            className="w-fit bg-buttonBlue text-white  px-4 py-2 rounded-lg"
          >
            Get Details
          </button>
        </div>
      )}
    </div>
  );
};

export default OtherCourse;
