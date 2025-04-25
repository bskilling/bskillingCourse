import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { GraduationCap, Search } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'https://backendbskilling.up.railway.app';

export default function NsdcCourses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentShow, setCurrentShow] = useState(8);

  const { data: courseData, isLoading } = useQuery({
    queryKey: ['courses', '67f4e7fc0547cfbc81ce9d07'], // NSDC category ID
    queryFn: async () => {
      const res = await axios.get(backendUrl + '/api/courses', {
        params: {
          limit: 100,
          page: 1,
          category: '67f4e7fc0547cfbc81ce9d07',
          isPublished: true,
          type: 'b2g',
        },
      });
      return res.data.data;
    },
    staleTime: 1000 * 60 * 5,
  });

  const filteredCourses =
    // @ts-expect-error
    courseData?.courses?.filter(course =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  const handleShowMore = () => {
    setCurrentShow(currentShow + 8);
  };

  const handleShowLess = () => {
    setCurrentShow(Math.max(8, currentShow - 8));
  };

  return (
    <motion.div
      className="my-20"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-2 bg-indigo-100 rounded-full mb-4">
          <GraduationCap className="h-6 w-6 text-blue-600" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">
          Available NSDC Courses
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Browse our curated NSDC courses to boost your skills and accelerate your career journey.
        </p>
      </div>

      {isLoading ? (
        <div className="py-12 text-center">
          <div className="inline-block w-16 h-16 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin"></div>
          <p className="mt-4 text-slate-600">Loading courses...</p>
        </div>
      ) : filteredCourses.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mx-auto max-w-7xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {
            // @ts-expect-error
            filteredCourses.slice(0, currentShow).map(course => (
              <motion.div key={course._id} variants={cardAnimation} className="w-full">
                <Card className="h-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white">
                  <CardHeader className="p-0">
                    {course?.previewImage?.viewUrl ? (
                      <img
                        src={course?.previewImage?.viewUrl}
                        alt={course.title}
                        className="w-full h-52 object-cover"
                      />
                    ) : (
                      <img
                        src={'/images/placeholder.png'}
                        alt="Placeholder"
                        className="w-full h-52 object-cover p-3"
                      />
                    )}
                  </CardHeader>

                  <CardContent className="p-5 space-y-3">
                    <CardTitle className="text-xl font-semibold text-blue-600 line-clamp-1">
                      {course?.title || 'No Title'}
                    </CardTitle>
                    <CardDescription className="text-base text-gray-600 line-clamp-2">
                      {course?.description || 'No Description Available'}
                    </CardDescription>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="font-medium">Duration:</span>
                      <span>{course.durationHours} hours</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          }
        </motion.div>
      ) : (
        <div className="py-16 text-center bg-slate-50 rounded-lg border border-slate-200">
          <div className="w-16 h-16 bg-slate-100 rounded-full mx-auto flex items-center justify-center mb-4">
            <Search className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">No courses found</h3>
          <p className="text-slate-600 mb-6">
            {searchTerm
              ? `No results match "${searchTerm}". Try different keywords or browse all courses.`
              : 'No courses available in this category yet.'}
          </p>
          <Button
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-600/10"
            onClick={() => setSearchTerm('')}
          >
            View All Courses
          </Button>
        </div>
      )}

      {filteredCourses.length > 0 && (
        <div className="flex justify-center mt-10 gap-4">
          {currentShow > 8 && (
            <Button
              onClick={handleShowLess}
              variant="outline"
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-600/10"
            >
              Show Less
            </Button>
          )}

          {currentShow < filteredCourses.length && (
            <Button
              onClick={handleShowMore}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium shadow-md"
            >
              Show More
            </Button>
          )}
        </div>
      )}
    </motion.div>
  );
}
