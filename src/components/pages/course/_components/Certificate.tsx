/* eslint-disable @next/next/no-img-element */
import { Calendar, Clock } from 'lucide-react';
import { BiSolidCertification } from 'react-icons/bi';
import { FaChalkboardTeacher } from 'react-icons/fa';
//
import { format } from 'date-fns';
import ConsultationForm from '../../indiviual/LeadForm';
import KeyFeatures from './KeyFeatures';

interface CourseDetailsProps {
  durationHours: number;
  enrolledStudents?: number;
  trainingMode: 'Online' | 'Offline' | 'Hybrid';
  enrollmentStart: string;
  enrollmentEnd: string;
  certification?: {
    title: string;
  };
  overview: {
    title: string;
    description: string;
    keyFeatures: string[];
  };
}

const CourseDetails: React.FC<CourseDetailsProps> = ({
  durationHours,
  enrolledStudents = 1200, // Default value
  trainingMode,
  enrollmentStart,
  enrollmentEnd,
  certification,
  overview,
}) => {
  return (
    <section className="py-10 bg-card rounded-lg  px-12 relative z-40  w-[80vw] flex flex-col justify-between m-auto min-h-[320px] gap-8">
      {/* Left Section: Course Details */}
      <div className="flex justify-between px-5 gap-y-8 w-full md:w-full bg-gray-100 py-20">
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
      <div className="flex   justify-between ">
        {' '}
        <div className="w-full ">
          <h2 className="text-xl font-semibold text-gray-900 mt-10 tracking-wide">
            Course Overview
          </h2>

          {overview && (
            <section className="mt-6 space-y-3 w-full ">
              <h3 className="text-lg font-medium text-gray-800">
                {overview.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {overview.description}
              </p>
            </section>
          )}

          <KeyFeatures features={overview.keyFeatures} />
        </div>
        <div className="flex justify-end  w-[45vw]">
          <ConsultationForm />
        </div>
      </div>

      {/* Right Section: Certification */}
    </section>
  );
};

export default CourseDetails;
