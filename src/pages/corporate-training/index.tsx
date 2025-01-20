/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function CorporateTraining() {
  return (
    <div className="w-9/12 bg-red-200 m-auto">
      <h1 className="text-3xl text-center ">Corporate Training</h1>

      <div className="w-full flex  justify-center">
        <div className="w-full h-full bg-gray-400">
          <h1 className="text-4xl">
            <span className="text-blue-400">b</span>Skilling
          </h1>
          <p>World`s First AI-Powered Connected Classroom Technology</p>
        </div>
        <div className="w-full">
          {/* <h1 className="text-2xl">
            <span className="text-blue-400">b</span>Skilling
          </h1> */}
          <img
            src="/new-images/corporate-train.jpg"
            alt="corproate training"
            className="w-full object-cover h-96"
          />
        </div>
      </div>
    </div>
  );
}
