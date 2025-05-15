/* eslint-disable @next/next/no-img-element */
import { Calendar, Clock, Users, Monitor, Award, CheckCircle } from 'lucide-react';
import { format } from 'date-fns';
import KeyFeatures from './KeyFeatures';
import ConsultationForm from './LeadForm';

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
  isPaid: boolean;
  courseId: string;
}

const CourseDetails: React.FC<CourseDetailsProps> = ({
  durationHours,
  enrolledStudents = 1200, // Default value
  trainingMode,
  enrollmentStart,
  enrollmentEnd,
  certification,
  overview,
  isPaid,
  courseId,
}) => {
  const formattedDescription = overview.description.replace(/\\n/g, '\n');

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="overview">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {/* Duration Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
          <div className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-800">Duration</h3>
                <div className="mt-1 text-2xl font-semibold text-blue-600">
                  {durationHours} Hours
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Students Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
          <div className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-purple-50 p-3 rounded-lg">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-800">Students</h3>
                <div className="mt-1 text-2xl font-semibold text-purple-600">
                  {enrolledStudents}+
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Training Mode Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
          <div className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-green-50 p-3 rounded-lg">
                <Monitor className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-800">Mode</h3>
                <div className="mt-1 text-xl font-semibold text-green-600">
                  {isPaid ? 'Virtual Training' : 'Self-Paced'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enrollment Period Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
          <div className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-amber-50 p-3 rounded-lg">
                <Calendar className="w-6 h-6 text-amber-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-800">Enrollment</h3>
                <div className="mt-1 text-sm font-medium text-amber-600">
                  {format(new Date(enrollmentStart), 'MMM d')} -{' '}
                  {format(new Date(enrollmentEnd), 'MMM d, yyyy')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Side: Course Overview */}
        <div className="w-full lg:w-3/5">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-800">Course Overview</h2>
            </div>

            {overview && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{overview.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 whitespace-pre-line">
                  {formattedDescription}
                </p>

                {/* Certification Info */}
                {certification && (
                  <div className="bg-blue-50 rounded-lg p-4 flex items-start space-x-3 mb-8">
                    <Award className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800">Certification</h4>
                      <p className="text-sm text-gray-600">{certification.title}</p>
                    </div>
                  </div>
                )}

                {/* Key Features Section */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {overview.keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 whitespace-pre-line">
                          {feature.replace(/\\n/g, '\n')}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Consultation Form */}
        <div className="w-full lg:w-2/5">
          <div className="sticky top-24">
            <ConsultationForm type1="b2g" courseId={courseId} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
