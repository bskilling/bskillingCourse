import Link from 'next/link'
import React, { useState } from 'react'
import PopupForm from './PopupForm';


const Placement = () => {
    const [isCorporatePopupOpen, setCorporatePopupOpen] = useState(false);
    const [placementOpenPopupOpen, setPlacementPopupOpen] = useState(false)
    
    const handleCorporateOpenPopup = () => setCorporatePopupOpen(true);
    const handleCorporateClosePopup = () => setCorporatePopupOpen(false);

    const handlePlacementOpenPopup = () => setPlacementPopupOpen(true);
    const handlePlacementClosePopup = () => setPlacementPopupOpen(false);

    return (
        <div className='container bg-white mx-auto p-5'>
            <div className="flex flex-col md:flex-row items-center my-10 p-5 gap-6 shadow-md rounded-lg">
                <div className="md:w-1/2 mt-5 md:mt-0 md:ml-10">
                    <h2 className="text-2xl font-bold mb-3">CORPORATE TRAINING</h2>
                    <p className="mb-3 text-textColor text-sm">
                        Boost your team’s performance with BSkilling&apos;s corporate training solutions. Our programs address your organisation’s specific needs and goals, whether it&apos;s enhancing technical skills, fostering leadership development, or improving team collaboration. <br /><br />
                        Led by industry experts, our cutting-edge curriculum features interactive sessions and real-world case studies to ensure practical application. With flexible delivery options including on-site, virtual, or blended learning, we accommodate your team’s schedule and preferences. Plus, our comprehensive assessment tools track progress and measure ROI, ensuring a lasting impact on your organisation&apos;s success.
                    </p>

                    <button
                        className="mt-4 text-sm px-5 py-2 border border-textColor text-black hover:bg-subText rounded-full"
                        onClick={handleCorporateOpenPopup}
                    >
                        Know More
                    </button>
                    {isCorporatePopupOpen && (
                        <>

                            <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={handleCorporateClosePopup}></div>

                            <div className="fixed inset-0 flex items-center justify-center z-50">
                                <PopupForm handleClosePopup={handleCorporateClosePopup} title="CORPORATE TRAINING" />
                            </div>
                        </>
                    )}

                </div>
                <div className="md:w-1/2">
                    <img src="/images/support.jfif" alt="Corporate Training" className="rounded-md" />
                </div>

            </div>
            <div className="flex flex-col md:flex-row items-center my-10 p-5 bg-white shadow-md rounded-lg">
                <div className="md:w-1/2">
                    <img src="/images/placement.jfif" alt="Placement Support" className="rounded-md h-auto w-full" />
                </div>
                <div className="md:w-1/2 mt-5 md:mt-0 md:ml-10">
                    <h2 className="text-2xl font-bold mb-3">PLACEMENT SUPPORT</h2>
                    <p className="mb-3 text-textColor text-sm">
                        Our commitment to your success extends far beyond the completion of your course. We understand that securing the right job is crucial to your career advancement, which is why BSkilling offers comprehensive placement support for six months after you finish your program. <br />
                        Our dedicated team is here to help you navigate the job market with confidence. Through mock interviews, we simulate real-world scenarios to sharpen your interview skills and boost your confidence. Additionally, we offer expert guidance in resume building, ensuring that your qualifications and achievements shine on paper. With our holistic approach, you&apos;ll be well-equipped to land your dream job and embark on a rewarding career journey.<br /><br />
                        → Six months of dedicated assistance after course completion.<br />
                        → Mock interviews to refine your interview skills and boost confidence.<br />
                        → Expert guidance in resume building, highlighting your qualifications effectively.
                    </p>

                    <button
                        className="mt-4 text-sm px-5 py-2 border border-textColor text-black hover:bg-subText rounded-full"
                        onClick={handlePlacementOpenPopup}
                    >
                        Know More
                    </button>
                    {placementOpenPopupOpen && (
                        <>

                            <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={handlePlacementClosePopup}></div>

                            <div className="fixed inset-0 flex items-center justify-center z-50">
                                <PopupForm handleClosePopup={handlePlacementClosePopup} title="PLACEMENT SUPPORT" />
                            </div>
                        </>
                    )}

                </div>
            </div>
        </div>

    )
}

export default Placement