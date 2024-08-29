import React from 'react';

const Experience = () => {
    return (
        <div className="flex flex-col md:flex-col items-center justify-center w-full md:px-20 lg:px-30 px-4 mt-20 py-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">THE BSKILLING EXPERIENCE</h1>
            <p className="text-lg md:text-xl text-center mb-8">Transforming Careers Through Innovative Learning</p>

            {/* Card 1 */}
            <div className="flex flex-col md:flex-row w-full bg-white shadow-lg rounded-lg overflow-hidden mb-6 md:mb-20 md:py-10 py-4 relative">
                {/* Left half */}
                <div className="w-full flex flex-col md:w-1/2 p-4 relative text-center items-center">
                    <img src="/images/Personalised_learning.png" alt="Card 1" className="w-10 h-10 rounded-lg mb-4" />

                    <div className="ml-2">
                        <h2 className="text-xl md:text-xl font-bold mb-2">Personalised Learning</h2>
                        <p className="text-base md:text-sm text-textColor text-justify">
                            BSkilling prioritises quality education tailored to meet individual needs. With small batches of 15-20 students, we ensure personalised attention and support from our expert faculty. This allows for a more interactive and engaging learning experience, where every learner’s requirements are addressed.
                        </p>
                    </div>
                </div>

                {/* Right half */}
                <div className="w-full flex flex-col md:w-1/2 p-8 relative text-center items-center">
                    <img src="/images/easy_course.png" alt="Card 1" className="w-10 h-10 rounded-lg mb-4" />
                    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-textColor"></div>

                    <div className="ml-2">
                        <h2 className="text-xl md:text-xl font-bold mb-2">Easily Accessible Courses</h2>
                        <p className="text-base md:text-sm text-textColor text-justify">
                            Learning should be accessible to everyone, which is why we offer a range of online courses to kickstart your learning journey. Whether you are a beginner exploring a new field or a professional seeking to expand your skill set, our courses provide excellent opportunities for learning and career growth.
                        </p>
                    </div>
                </div>
                {/* <button className="bg-primaryButton text-sm text-white px-8 py-2 border-none rounded-xl  absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    Get in touch
                </button> */}
            </div>

            {/* Card 2 */}
            <div className="flex flex-col md:flex-row w-full bg-white shadow-lg rounded-lg overflow-hidden py-4">
                {/* Left half */}
                <div className="w-full flex flex-col md:w-1/2 p-4 relative text-center items-center">
                    <img src="/images/lms_access.png" alt="Card 2" className="w-10 h-10 rounded-lg mb-4" />

                    <div className="ml-2">
                        <h2 className="text-xl md:text-xl font-bold mb-2">Convenient Learning with LMS Access</h2>
                        <p className="text-base md:text-sm text-textColor text-justify">
                            Experience the convenience of learning on your terms with access to our comprehensive Learning Management System (LMS). Our intuitive platform enables you to access course materials whenever and wherever it suits you best. From listening to lectures to completing assignments, our user-friendly interface helps you to navigate your learning journey with ease. Now you can integrate your studies into your busy schedule and progress at your own pace.
                        </p>
                    </div>
                    <button className='bg-primaryButton px-10 py-2 border-none rounded-xl font-semibold text-sm text-white mt-10'>
                        Explore
                    </button>
                </div>
                {/* Right half */}
                <div className="w-full flex flex-col md:w-1/2 p-4 relative text-center items-center">
                    <img src="/images/support.png" alt="Card 2" className="w-10 h-10 rounded-lg mb-4" />
                    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-textColor"></div>
                    <div className="ml-2">
                        <h2 className="text-xl md:text-xl font-bold mb-2">Projects and Mentor Support</h2>
                        <p className="text-base md:text-sm text-textColor text-justify">
                            At BSkilling, we emphasise practical learning through projects and mentor support. Our hands-on approach ensures that you not only grasp theoretical concepts but also gain valuable real-world experience. Engage in project-based learning under the guidance of experienced mentors who provide personalised support and feedback, empowering you to apply your skills confidently in the professional world.
                        </p>
                    </div>
                    <button className='bg-primaryButton px-10 py-2 border-none rounded-xl font-semibold text-sm text-white mt-10'>
                        Explore
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Experience;
