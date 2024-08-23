import React, { useState, useEffect } from 'react';
import { Course } from 'common/util/types';
import Link from 'next/link';

const Program: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>("All");
    const [visibleCourses, setVisibleCourses] = useState<number>(6); // Initial number of courses to display

    const fetchData = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_TRAINING_BASE_URL}api/v1/get-course-title`);
        const data = await response.json();
        setCourses(data.courses);
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Extract unique categories, including "All"
    const uniqueCategories = Array.from(new Set(courses.map(course => course.category)));
    const categories = ["All", ...uniqueCategories];

    // Filter courses by selected category
    const filteredCourses = selectedCategory === "All" || !selectedCategory
        ? courses
        : courses.filter(course => course.category === selectedCategory);

    // Load more courses
    const loadMoreCourses = () => {
        setVisibleCourses(prevVisibleCourses => prevVisibleCourses + 6);
    };

    return (
        <div className="p-6 max-w-screen-xl mx-auto">
            <h1 className='text-4xl font-bold text-center mb-6'>PROFESSIONAL CERTIFICATE PROGRAMS</h1>
            <p className='text-xl text-center mb-10 text-subText'>Transform Your Skills, Transform Your Career!</p>

            <div>
                <div className="flex flex-wrap justify-center mb-8 space-x-4">
                    {categories.map((category, index) => (
                        <span
                            key={index}
                            className={`cursor-pointer transition duration-300 text-base font-semibold ${selectedCategory === category ? 'text-blue-600 border-b-2 border-blue-600' : 'text-subText'}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </span>
                    ))}
                </div>
            </div>

            {filteredCourses.length > 0 ? (
                <div className='flex flex-wrap justify-center gap-6'>
                    {filteredCourses.slice(0, visibleCourses).map(course => (
                        <div key={course._id} className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-xs'>
                            <img src={course.preview_image_uri ? `${course.preview_image_uri}` : "/images/emptycourse.jfif"} alt={course.title} className='w-full h-40 object-cover rounded-t-lg mb-4' />
                            <Link href={"courses/courseDetails/" + course._id} >
                                <h3 className='text-lg text-black font-semibold mb-2'>{course.title}</h3>
                            </Link>

                            <p className='text-lg text-cartBtn font-bold mb-2'>₹ {course.price ? `${course.price}` : 'Price not available'}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className='text-center text-gray-500 mt-4'>No courses available for this category.</p>
            )}

            {filteredCourses.length > visibleCourses && (
                <div className='text-center mt-8'>
                    <button
                        onClick={loadMoreCourses}
                        className='bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300'
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Program;
