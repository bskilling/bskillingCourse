import React from 'react';

interface PopupFormType {
    handleClosePopup: () => void;
}

const PopupForm: React.FC<PopupFormType> = ({ handleClosePopup }) => {
    return (
        <>
            <div
                className="fixed inset-0 bg-black opacity-50 z-40"
                onClick={handleClosePopup}
            ></div>
            <div
                className="fixed inset-0 flex items-center justify-center z-50"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-md mx-4 text-black">
                    {/* Close Button */}
                    <button
                        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                        onClick={handleClosePopup}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Logo */}
                    <div className="flex justify-center mb-4">
                        <img
                            src="/logo.png"
                            className="w-[100px] h-[30px] object-contain"
                            alt=""
                        />
                    </div>

                    <h2 className="text-lg text-lightBlue font-semibold text-center mb-4 tracking-widest">
                        Corporate Training Enquiry
                    </h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                                Full Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                                Official Email-ID
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700" htmlFor="contact">
                                Contact No
                            </label>
                            <input
                                id="contact"
                                name="contact"
                                type="text"
                                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            className="mt-4 w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                            onClick={handleClosePopup}
                        >
                            Close
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default PopupForm;
