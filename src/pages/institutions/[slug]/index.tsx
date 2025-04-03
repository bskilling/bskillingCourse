import { GetServerSideProps } from 'next';
import { ICourse } from '@/component/types/Course.types';
import CourseLandingPage from '@/components/pages/institution/_components/Course-Preview';

interface CourseDetailsProps {
  course: {
    data: ICourse;
  };
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ course }) => {
  return (
    <div>
      {/* <p>{JSON.stringify(course?.data)}</p> */}
      <CourseLandingPage courseData={course?.data} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const id = context.query.id;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/courses/${id}`);

  if (!res.ok) {
    return {
      notFound: true,
    };
  }

  const data = await res.json();

  return { props: { course: data } };
};

export default CourseDetails; // ✅ Ensure there is a default export
