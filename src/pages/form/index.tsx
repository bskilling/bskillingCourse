'use client';
import FormRegister from '@/components/pages/form/Form';
import React, { useEffect, useState } from 'react';
import { useStudentSessionStore } from '@/lib/store/useSession';
import { useRouter } from 'next/router';

export default function FormPage() {
  const { student, sessionActive, sessionExpiry } = useStudentSessionStore();
  const router = useRouter();
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    // If a student session exists and is active
    if (student && sessionActive) {
      if (Date.now() > sessionExpiry) {
        // Session expired
        setExpired(true);
      } else {
        // Valid session found: redirect to /course
        router.push('/form/course');
      }
    }
  }, [student, sessionActive, sessionExpiry, router]);

  if (expired) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <p className="mb-6 text-xl text-gray-700 text-center">
          Your exam session has expired (5 hours have passed). You cannot attend
          this test. Please contact our team for further assistance.
        </p>
      </div>
    );
  }

  // If there's no active session, display the login form.
  return (
    <div>
      <FormRegister />
    </div>
  );
}
