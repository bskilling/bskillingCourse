import React from 'react';
import Link from 'next/link';

export default function Thank() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Thank You!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Thank you for attending the exam. Your submission has been received
          successfully.
        </p>
      </div>
    </div>
  );
}
