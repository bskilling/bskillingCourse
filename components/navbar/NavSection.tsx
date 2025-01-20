import PopupForm from 'components/PopupForm';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoMdCall } from 'react-icons/io';

export default function NavSection() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const handleOpenPopup = () => setPopupOpen(true);
  const handleClosePopup = () => setPopupOpen(false);
  return (
    <div>
      <div className="hidden sm:flex justify-between items-center px-14 py-1 w-full  mx-auto bg-gradient-to-br from-[#5dade2] via-[#4b97ca] to-[#0063a5] text-white text-sm">
        <div className="flex space-x-4">
          <p className="flex items-center">
            <span className="mr-2">
              <IoMdCall className="text-white" />
            </span>{' '}
            +91-9845348601
          </p>
          <Link
            href="mailto:support@bskilling.com"
            className="flex items-center text-white"
          >
            <span className="mr-2">📧</span> support@bskilling.com
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <p
              className="text-sm text-white cursor-pointer hover:font-bold"
              onClick={handleOpenPopup}
            >
              Become an Instructor
            </p>
            {isPopupOpen && (
              <>
                <div
                  className="fixed inset-0 bg-white opacity-50 z-40"
                  onClick={handleClosePopup}
                ></div>

                <div className="fixed inset-0 flex items-center justify-center z-50">
                  <PopupForm handleClosePopup={handleClosePopup} title="" />
                </div>
              </>
            )}
          </div>
          <Link href="https://lms.bskilling.com/login/index.php">
            <div className="flex items-center space-x-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNzXYh-X4wxX1jfbPywa8HWoNGDnx1Tlo0-g&s"
                alt="Login/Register"
                className="w-6 h-6"
              />

              <p className="text-sm text-white"> Login/Register</p>
            </div>
          </Link>
          {/* <div className="flex items-center space-x-2">
                <img
                  src="https://www.shutterstock.com/image-vector/shopping-cart-icon-bag-260nw-1520865410.jpg"
                  alt="cart"
                  className="w-6 h-6"
                />

              </div> */}
        </div>
      </div>
    </div>
  );
}
