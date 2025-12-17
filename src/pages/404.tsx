/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Custom404() {
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(true);

  useEffect(() => {
    if (
      router.asPath ===
        '/courses/course-details/project-management-professional-(pmp)%C2%AE-certification-course' ||
      router.asPath ===
        '/courses/course-details/project-management-professional-(pmp)®-certification-course'
    ) {
      router.replace('/course/project-management-professional-course');
    }
    setIsRedirecting(false);
  }, [router]);

  if (isRedirecting) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-buttonBlue border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Redirecting...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <img src="/404.jpg" className="h-[60%]" alt="" />
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl md:text-4xl lg:text-5xl text-gray-800 mt-12">Page Not Found</p>
        <p className="md:text-lg lg:text-xl text-gray-600 mt-8">
          Sorry, the page you are looking for could not be found.
        </p>
        <div className="flex items-center text-white space-x-2 bg-buttonBlue px-4 py-2 mt-12 transition duration-150">
          <Link style={{ textDecoration: 'none' }} href={'/'}>
            <span style={{ textDecoration: 'none' }} className="text-white">
              Home
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
