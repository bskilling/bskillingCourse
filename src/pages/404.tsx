/* eslint-disable @next/next/no-img-element */
'use client';
import Link from 'next/link';
export default function Custom404() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <img src="/404.jpg" className="h-[60%]" alt="" />

      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl md:text-4xl lg:text-5xl text-gray-800 mt-12">Page Not Found</p>
        <p className="md:text-lg lg:text-xl text-gray-600 mt-8">
          Sorry, the page you are looking for could not be found.
        </p>
        <div className="flex items-center text-white space-x-2 bg-buttonBlue  text- px-4 py-2 mt-12  transition duration-150">
          <Link style={{ textDecoration: 'none' }} href={'/'}>
            <span style={{ textDecoration: 'none' }} className="text-white">
              {' '}
              Home
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
