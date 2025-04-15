import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Coursedetailstype } from '@/component/common/util/types';
import LeadForm from './LeadForm';

interface CourseIncludesProps {
  courseDetails: Coursedetailstype | null;
}

const CourseIncludes: React.FC<CourseIncludesProps> = ({ courseDetails }) => {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <h3 className="text-2xl font-semibold mb-4 text-left">Includes</h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
            <p>Live Interactive Classes</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
            <p>1 - 1 Doubt Support</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
            <p>Real-Time Projects</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
            <p>LMS</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
            <p>Certification</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
            <p>Job Readiness</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10">
        <h3 className="text-2xl font-semibold mb-4 text-left">Course Features</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <p className="font-semibold">Lectures</p>
            <p className="text-subText">6</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold">Quizzes</p>
            <p className="text-subText">2</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold">Duration</p>
            <p className="text-subText">{courseDetails?.duration}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold">Skill level</p>
            <p className="text-subText">{courseDetails?.level}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold">Language</p>
            <p className="text-subText">{courseDetails?.language}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold">Assessments</p>
            <p className="text-subText">{courseDetails?.assessment_required ? 'Yes' : 'No'}</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10">
        <h3 className="text-2xl font-semibold mb-4 text-left">
          Get a Callback for Our Trending Tech Courses
        </h3>
        <div>
          <LeadForm />
        </div>
      </div>
    </>
  );
};

export default CourseIncludes;
