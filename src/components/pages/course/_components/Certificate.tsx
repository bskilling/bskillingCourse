/* eslint-disable @next/next/no-img-element */
import { Calendar, Clock } from 'lucide-react';
import { BiSolidCertification } from 'react-icons/bi';
import { FaChalkboardTeacher } from 'react-icons/fa';
//
import { format } from 'date-fns';

interface CourseDetailsProps {
  durationHours: number;
  enrolledStudents?: number;
  trainingMode: 'Online' | 'Offline' | 'Hybrid';
  enrollmentStart: string;
  enrollmentEnd: string;
  certification?: {
    title: string;
  };
}

const CourseDetails: React.FC<CourseDetailsProps> = ({
  durationHours,
  enrolledStudents = 1200, // Default value
  trainingMode,
  enrollmentStart,
  enrollmentEnd,
  certification,
}) => {
  return (
    <section className="py-10 bg-card rounded-lg shadow-lg px-12 relative z-40  w-[80vw] flex flex-col md:flex-row justify-between m-auto min-h-[320px] gap-8">
      {/* Left Section: Course Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 w-full md:w-1/2">
        <div className="flex items-center gap-x-4">
          <Clock className="w-7 h-7 text-purple-600" />
          <div>
            <p className="font-semibold text-gray-800">Duration</p>
            <p className="text-gray-600 text-lg">{durationHours} Hours</p>
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <Calendar className="w-7 h-7 text-green-500" />
          <div>
            <p className="font-semibold text-gray-800">Enrolled Students</p>
            <p className="text-gray-600 text-lg">
              {enrolledStudents}+ Students
            </p>
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <FaChalkboardTeacher className="w-7 h-7 text-blue-500" />
          <div>
            <p className="font-semibold text-gray-800">Training Mode</p>
            <p className="text-gray-600 text-lg">{trainingMode}</p>
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <Calendar className="w-7 h-7 text-orange-500" />
          <div>
            <p className="font-semibold text-gray-800">Enrollment Period</p>
            <p className="text-gray-600 text-lg">
              {format(new Date(enrollmentStart), 'dd MMM yyyy')} -{' '}
              {format(new Date(enrollmentEnd), 'dd MMM yyyy')}
            </p>
          </div>
        </div>
      </div>

      {/* Right Section: Certification */}
      <div className="w-full md:w-1/2 flex flex-col items-center text-center">
        <p className="font-semibold flex items-center gap-x-3 text-lg text-gray-800">
          <BiSolidCertification className="w-7 h-7 text-red-500" />
          Certification
        </p>
        {certification?.title && (
          <p className="font-semibold text-lg mt-2 text-gray-700">
            {certification.title}
          </p>
        )}
        <p className="text-gray-600 text-sm mt-3">
          Completing this course grants an industry-recognized certification to
          enhance your professional skills.
        </p>
        <img
          src="/assets/certificate.png"
          className="w-4/5 max-h-44 object-contain rounded-lg mt-4 shadow-md"
          alt="Certification"
        />
      </div>
    </section>
  );
};

export default CourseDetails;
