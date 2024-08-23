import React from 'react';
import { Coursedetailstype } from 'common/util/types';
import { FaCheck } from 'react-icons/fa';

interface OverviewProps {
    courseDetails: Coursedetailstype | null;
}

const Overview: React.FC<OverviewProps> = ({ courseDetails }) => {
    const skillsCovered = courseDetails?.training_metadata?.skills_covered;

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
            <div>
                <h3 className='text-xl font-semibold'>Who Is This Course For?</h3>
                <p>This course is designed for individuals from various backgrounds who are eager to delve into the realm of cloud computing. Ideal for aspiring cloud architects looking to hone their skills, IT professionals aiming to expand their expertise in cloud technologies too can benefit from this program. Additionally, systems administrators, DevOps engineers, and solution architects will find value in the comprehensive coverage of cloud migration strategies and best practices of this course. Cloud enthusiasts seeking to explore the intricacies of modern cloud environments will benefit from this course’s practical approach and hands-on projects.</p>
            </div>
            <div>
                <h3 className='text-xl font-semibold'>Eligibility</h3>
                <p>Candidates applying for this course should have basic IT knowledge and an understanding of networking fundamentals. While familiarity with cloud platforms such as AWS, Azure, or GCP is optional, it can be advantageous for participants to have some prior exposure to these technologies. Additionally, a foundational understanding of programming concepts will be beneficial for navigating certain aspects of the course content. Overall, this program welcomes individuals from diverse backgrounds who are eager to expand their skills and knowledge in the field of cloud engineering.</p>
            </div>
            <div>
                <h3 className='text-xl font-semibold'>Resources & Features</h3>
                <p>
                    Learn Cloud Engineering from the best in the field! Gain a comprehensive understanding of Cloud Engineering and master key concepts and techniques.
                    <ul className='list-disc ml-6 mt-2'>
                        <li>Benefit from the expertise of professionals who bring real-world insights to the table.</li>
                        <li>Enhance your practical skills with projects that mirror real-world scenarios.</li>
                        <li>Interact with instructors and peers in live sessions, demonstrations, and Q&A sessions.</li>
                        <li>Get personalized feedback on assignments and projects, enabling continuous growth.</li>
                        <li>Explore a wide range of topics and align your skills with industry demands.</li>
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default Overview;
