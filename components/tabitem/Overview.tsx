import React from 'react';
import { Coursedetailstype } from 'common/util/types';
import { FaCheck } from 'react-icons/fa';

interface OverviewProps {
    courseDetails: Coursedetailstype | null;
}

const Overview: React.FC<OverviewProps> = ({ courseDetails }) => {
    const skillsCovered = courseDetails?.training_metadata?.skills_covered;
    const objectives = courseDetails?.training_metadata?.objectives;
    const prerequisites = courseDetails?.training_metadata?.prerequisites;
    const resources = courseDetails?.training_metadata?.resources;
    const benefits = courseDetails?.training_metadata?.benefits;

    return (
        <div className='bg-white p-6 rounded-lg shadow-md space-y-6 md:py-10'>
            <h1 className='text-2xl font-bold'>Overview</h1>
            <div>
                <h3 className='text-xl font-semibold'>Course Description</h3>
                <p>{courseDetails?.training_metadata?.overview || 'No overview available.'}</p>
            </div>
            <div>
                <h3 className='text-xl font-semibold'>Skills Covered</h3>
                {skillsCovered && skillsCovered.length > 0 ? (
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        {skillsCovered.map((skill, index) => (
                            <div key={index} className='flex items-start space-x-2'>
                                <FaCheck className='text-green-500 mt-1' /> {/* Tick icon */}
                                <p>{skill.title || 'No title available'}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No skills covered listed.</p>
                )}
            </div>
            <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Objectives</h3>
                {objectives && objectives.length > 0 ? (
                    <div className="space-y-4">
                        {objectives.map((obj, index) => (
                            <div
                                key={index}
                                className="flex items-start p-4 bg-white shadow-md rounded-lg transition-transform duration-300 hover:shadow-lg"
                            >
                                <FaCheck className="text-green-500 mt-1 flex-shrink-0" /> {/* Tick icon */}
                                <p className="ml-4">{obj.title || 'No title available'}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 mt-4">No objectives listed.</p>
                )}
            </div>

            <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Prerequisites</h3>
                {prerequisites && prerequisites.length > 0 ? (
                    <div className="space-y-4">
                        {prerequisites.map((reqisite, index) => (
                            <div
                                key={index}
                                className="flex items-start p-4 bg-white shadow-md rounded-lg transition-transform duration-300 hover:shadow-lg"
                            >
                                <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                                <p className="ml-4">{reqisite.title || 'No title available'}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 mt-4">No objectives listed.</p>
                )}
            </div>
            <div>
                <h3 className='text-xl font-bold mb-4'>Resources & Features</h3>
                {resources && resources.length > 0 ? (
                    <div className="space-y-4">
                        {resources.map((resource, index) => (
                            <div
                                key={index}
                                className="flex items-start p-4 bg-white shadow-md rounded-lg transition-transform duration-300 hover:shadow-lg"
                            >
                                <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                                <p className="ml-4">{resource.title || 'No title available'}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 mt-4">No resource listed.</p>
                )}
            </div>
            <div>
                <h3 className='text-xl font-bold'>Benefits</h3>
                {benefits && benefits.length > 0 ? (
                    <div className="space-y-4">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="flex items-start p-4 bg-white shadow-md rounded-lg transition-transform duration-300 hover:shadow-lg"
                            >
                                <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                                <p className="ml-4">{benefit.title}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 mt-4">No resource listed.</p>
                )}
            </div>
        </div>
    );
};

export default Overview;
