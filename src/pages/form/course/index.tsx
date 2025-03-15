'use client';
import Fm from '@/components/pages/form/courseId/Fm';
import Gd from '@/components/pages/form/courseId/Gd';
import Gst from '@/components/pages/form/courseId/Gst';
import { Button } from '@/components/ui/button';
import { useStudentSessionStore } from '@/lib/store/useSession';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React from 'react';

export default function AllForms() {
  const { student } = useStudentSessionStore();

  if (!student) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <p className="mb-6 text-xl text-gray-700 text-center">
          You haven&apos;t logged in or there is some issue. Please try logging
          in again.
        </p>
        <Link href="/form">
          <Button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
            Login
          </Button>
        </Link>
      </div>
    );
  }

  const courseId = student?.['Course ID'];

  // Handle the case when courseId is not yet defined
  if (!courseId) return <div>Loading...</div>;

  if (courseId) {
    return <Gst formId={courseId} rollNo={student['Student RollNo']} />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <p className="text-xl text-gray-700">
        The course you selected is not available.
      </p>
    </div>
  );
}
