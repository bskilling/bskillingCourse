/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useStudentSessionStore } from '@/lib/store/useSession';
import { Button } from '@/components/ui/button';
import { z } from 'zod';
import { useQuizAnswersStore } from '@/lib/store/useQuestions';
// import { useStudentSessionStore } from '@/store/studentSession'; // adjust path accordingly
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useRouter } from 'next/router';
import AlterLoader from '@/components/global/AlterLoader';

interface Question {
  question: string;
  options: string[];
}

interface FormData {
  formId: string;
  questions: Question[];
}

interface GstProps {
  formId: number;
  rollNo: string;
}

// Define a Zod schema to validate the request body
const submitExamSchema = z.object({
  rollNo: z.string().nonempty({ message: 'rollNo is required' }),
  // Coerce courseId to a number in case it is sent as a string
  courseId: z.preprocess(
    (arg) => Number(arg),
    z.number({ invalid_type_error: 'courseId must be a number' })
  ),
  // The answers object: keys can be question IDs (string) and value can be a number or an array of numbers
  answers: z.record(z.union([z.number(), z.array(z.number())])),
});

type SubmitExamRequest = z.infer<typeof submitExamSchema>;
export default function Gst({ formId, rollNo }: GstProps) {
  // Fetch form questions using React Query
  const router = useRouter();
  const { student, clearStudentSession, setStudentSession } =
    useStudentSessionStore();
  const {
    answers: ans,
    setAnswer,
    setAllAnswers,
    clearAnswers,
  } = useQuizAnswersStore();

  const { data, isLoading, error } = useQuery<FormData>({
    queryKey: ['form', formId],
    queryFn: async () => {
      const res = await axios.get(
        `https://backendbskilling-production-20ff.up.railway.app/api/questions/${
          formId + ''
        }`
      );
      return res.data;
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const res = await axios.post(
        `https://backendbskilling-production-20ff.up.railway.app/api/form/submitExam`,
        {
          rollNo,
          courseId: formId,
          answers,
        } as SubmitExamRequest
      );
      return res.data;
    },
    onSuccess: () => {
      clearStudentSession();
      clearAnswers();
      router.replace('/form/thank');
    },
  });
  // To store answers keyed by question index (option index)
  const [answers, setAnswers] = useState<{ [key: number]: number | null }>({});
  useEffect(() => {
    setAnswers(ans);
    console.log('bugggggggggg');
  }, []);
  useEffect(() => {
    setAllAnswers(answers);
  }, [answers]);

  console.log('bugggggggggg222222222');
  // Refs for each question card to allow scrolling
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleOptionChange = (qIndex: number, optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: optionIndex }));

    // Scroll to next question card if it exists
    if (questionRefs.current[qIndex + 1]) {
      questionRefs.current[qIndex + 1]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };
  const pendingCount = Object.values(answers).filter(
    (answer) => answer === null || answer === undefined
  ).length;

  // Get student session data from Zustand
  // const { student } = useStudentSessionStore();

  if (isLoading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8">Error loading form.</div>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-50 py-8">
      {isPending && <AlterLoader />}
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <div className="w-full px-6 flex items-center justify-between">
          <img
            src="/new-image/naan-logo.png"
            alt=""
            className="object-cover w-40"
          />
          <img
            src="/new-image/sfjlogo.png"
            alt=""
            className="object-cover w-24"
          />
        </div>
        {/* Student Info Header */}
        {student && (
          <div className="rounded-lg p-8 mb-10 mt-10 border border-gray-200 shadow-md">
            <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-4">
              {student['University Name']}
            </h2>
            <p className="text-gray-800 text-lg mb-3">
              <span className="font-semibold">College:</span>{' '}
              {student['College Name']}{' '}
              <span className="text-sm">(Code: {student['College Code']})</span>
            </p>
            <p className="text-gray-800 text-lg mb-3">
              <span className="font-semibold">Branch:</span> {student.Branch} |{' '}
              <span className="font-semibold">Semester:</span>{' '}
              {student.Semester}
            </p>
            <p className="text-gray-800 text-lg mb-3">
              <span className="font-semibold">Student:</span>{' '}
              {student['Student Name']}{' '}
            </p>
            <p className="text-gray-800 text-lg mb-3">
              <span className="font-semibold">Roll No:</span>{' '}
              {student['Student RollNo']}
            </p>

            <p className="text-gray-800 text-lg">
              <span className="font-semibold">Course:</span>{' '}
              {student['Course Name']}
            </p>
          </div>
        )}

        {/* Quiz Title */}
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          {formId === 2815 && 'GST'}
          {formId === 2851 && 'Financial Modelling'}
          {formId === 2814 && 'Graphic Design'}
          Quiz
        </h1>

        {/* Quiz Questions */}
        {data?.questions.map((q, index) => (
          <div
            key={index}
            ref={(el) => (questionRefs.current[index] = el)}
            className="bg-white shadow-md rounded-lg p-6 mb-6 border border-blue-100"
          >
            <p className="text-xl font-medium text-blue-700 mb-4">
              {index + 1}. {q.question}
            </p>
            <div className="space-y-3">
              {q.options.map((option, oIndex) => (
                <label
                  key={oIndex}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={oIndex + 1}
                    checked={answers[index] === oIndex + 1}
                    onChange={() => handleOptionChange(index, oIndex + 1)}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <span className="text-gray-800">{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
        <Dialog>
          <DialogTrigger>
            <div className="flex justify-end">
              <Button>Submit Quiz</Button>
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                {pendingCount > 0 ? (
                  <>
                    You have{' '}
                    <span className="font-semibold text-blue-600">
                      {pendingCount}
                    </span>{' '}
                    unanswered question{pendingCount !== 1 && 's'}. Once
                    submitted, you will not be able to modify or resubmit your
                    exam.
                  </>
                ) : (
                  'Are you sure you want to submit your exam? Once submitted, you will not be able to modify or resubmit your exam.'
                )}
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-end">
              <Button onClick={() => mutate()}>Submit Quiz</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
