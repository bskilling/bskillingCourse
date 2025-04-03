import React, { useState } from 'react';
import { ICourse } from './types';
import { ChevronDown, ChevronUp, PlayCircle, Clock, CheckCircle, BookOpen } from 'lucide-react';
import { LockClosedIcon } from '@heroicons/react/24/outline';

interface ModulesProps {
  chapters: ICourse['curriculum']['chapters'];
}

export default function Modules({ chapters }: ModulesProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First module open by default
  const [showAll, setShowAll] = useState(false);

  const toggleModule = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const visibleChapters = showAll ? chapters : chapters.slice(0, 5);
  const totalModules = chapters.length;
  const totalLessons = chapters.reduce((acc, chapter) => acc + chapter.lessons.length, 0);

  return (
    <div className="container mx-auto max-w-7xl py-8 px-8">
      {/* Curriculum Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Course Curriculum</h2>
          <p className="text-gray-600 mt-1">
            {totalModules} modules • {totalLessons} lessons
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-1 text-blue-600" />
            <span>15 hours</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <BookOpen className="h-4 w-4 mr-1 text-green-600" />
            <span>Beginner to Advanced</span>
          </div>
        </div>
      </div>

      {/* Module Progress Bar */}
      <div className="w-full bg-gray-100 h-2 rounded-full mb-8">
        <div
          className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full"
          style={{ width: '0%' }} // This would be dynamic based on user progress
        ></div>
      </div>

      {/* Modules */}
      <div className="space-y-4">
        {visibleChapters.map((chapter, index) => {
          // const totalDuration = chapter.lessons.reduce(
          //   (acc, lesson) => acc + (lesson.duration || 0),
          //   0
          // );
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                isOpen
                  ? 'shadow-md border-blue-200 bg-white'
                  : 'bg-white border-gray-200 hover:border-blue-200'
              }`}
            >
              {/* Module Header */}
              <button
                className="w-full p-4 flex justify-between items-center text-left focus:outline-none"
                onClick={() => toggleModule(index)}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      isOpen ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <h3 className={`font-semibold ${isOpen ? 'text-blue-700' : 'text-gray-800'}`}>
                      {chapter.title}
                    </h3>
                    <div className="flex items-center mt-1 text-sm text-gray-500 space-x-4">
                      <span className="flex items-center">
                        <PlayCircle className="h-3.5 w-3.5 mr-1" />
                        {chapter.lessons.length} lessons
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-3.5 w-3.5 mr-1" />
                        {Math.round(8000 / 60)} min
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {index === 0 && (
                    <span className="text-xs font-medium bg-green-100 text-green-700 py-1 px-2 rounded">
                      Free Preview
                    </span>
                  )}
                  {isOpen ? (
                    <ChevronUp
                      className={`h-5 w-5 ${isOpen ? 'text-blue-600' : 'text-gray-400'}`}
                    />
                  ) : (
                    <ChevronDown
                      className={`h-5 w-5 ${isOpen ? 'text-blue-600' : 'text-gray-400'}`}
                    />
                  )}
                </div>
              </button>

              {/* Module Content */}
              <div
                className={`border-t border-gray-100 transition-all duration-300 ${
                  isOpen ? 'block' : 'hidden'
                }`}
              >
                {chapter.lessons.map((lesson, lessonIndex) => (
                  <div
                    key={lessonIndex}
                    className="flex items-center justify-between p-4 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                  >
                    <div className="flex items-center gap-3 text-gray-700">
                      {index === 0 && lessonIndex < 2 ? (
                        <PlayCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      ) : (
                        <LockClosedIcon className="h-5 w-5 text-gray-400 flex-shrink-0" />
                      )}
                      <div>
                        <span className="font-medium">{lesson.title}</span>
                        {lesson.content && (
                          <p className="text-xs text-gray-500 mt-0.5">{lesson.content}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {index === 0 && lessonIndex === 0 && (
                        <span className="flex items-center text-green-600 text-xs font-medium">
                          <CheckCircle className="h-3.5 w-3.5 mr-1" />
                          Completed
                        </span>
                      )}
                      {/* <span className="text-xs text-gray-500 bg-gray-100 py-1 px-2 rounded-full">
                        {lesson.duration
                          ? `${Math.round(lesson.duration / 60)} min`
                          : '5 min'}
                      </span> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Show More Button */}
      {chapters.length > 5 && (
        <div className="flex justify-center mt-8">
          <button
            className="py-3 px-6 bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium rounded-lg transition-colors flex items-center gap-2"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? (
              <>
                <ChevronUp className="h-4 w-4" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                Show All {chapters.length} Modules
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
