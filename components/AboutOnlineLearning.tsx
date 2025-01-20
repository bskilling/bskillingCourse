import React from 'react'

const AboutOnlineLearning = () => {
    return (
        <div className=" relative w-full h-[200px] md:h-[300px] lg:h-[400px] flex items-center justify-center">

            <div className="relative z-10 text-white text-center py-12">
                <p className='text-[16px] mb-6'>STARTING ONLINE LEARNING</p>

                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wider mb-4 uppercase">
                    Enhance your skIlls wIth best <br />
                    OnlIne courses
                </h1>
                <button className='border border-white rounded-full text-white px-6 py-2 mt-10 hover:bg-customPurple'>
                    Get Started Now
                </button>
            </div>
            <div className="bg-customBlue absolute inset-0 opacity-6"></div>
        </div>
    )
}

export default AboutOnlineLearning