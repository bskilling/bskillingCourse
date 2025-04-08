import { GetServerSideProps } from 'next';
import { ICourse } from '@/component/types/Course.types';
import CourseLandingPage from '@/components/pages/course/_components/Course-Preview';
import Link from 'next/link';

interface CourseDetailsProps {
  course?: {
    data: ICourse;
  };
  error?: string; // Changed from boolean to string to store error message
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ course, error }) => {
  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">There was an error</h1>
        <p className="text-lg mb-8">
          We couldn't find the course you're looking for. Please contact our support team for
          assistance.
        </p>
        {/* Display the actual error message */}
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded mb-8">
          <p className="font-bold">Error details:</p>
          <p>{error}</p>
        </div>
        <Link
          href="/courses"
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          View All Courses
        </Link>
      </div>
    );
  }

  // Check if course data exists before rendering
  if (!course || !course.data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
        <p className="text-lg mb-8">
          The course data is missing or invalid. Please try again later.
        </p>
        <Link
          href="/courses"
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          View All Courses
        </Link>
      </div>
    );
  }

  return (
    <div>
      <CourseLandingPage courseData={course.data} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  // @ts-expect-error error
  const { slug } = context.params; // Get slug from params instead of query

  try {
    console.log(`Fetching course with slug: ${slug}`);
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/courses/slug/${slug}`);

    // Log the response status for debugging
    console.log(`API response status: ${res.status}`);

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`API error: ${errorText}`);
      return {
        props: {
          error: `API returned ${res.status}: ${errorText || 'No error details available'}`,
        },
      };
    }

    const data = await res.json();

    // Check if data structure is valid
    if (!data || !data.data) {
      return {
        props: {
          error: 'Invalid data structure returned from API',
        },
      };
    }

    return { props: { course: data } };
  } catch (error) {
    // Capture and return the actual error message
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('Error fetching course data:', errorMessage);

    return {
      props: {
        error: `Failed to fetch course: ${errorMessage}`,
      },
    };
  }
};

export default CourseDetails;
