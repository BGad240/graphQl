"use client";
import React from 'react';

const LoadingPage = () => {
  return (
    <div className="fixed inset-0 bg-slate-900 flex flex-col justify-center items-center z-50">
      <div className="relative flex justify-center items-center">
        {/* Spinner Animation: A circle with a transparent top border that spins */}
        <div className="w-16 h-16 border-4 border-pink-500 border-solid rounded-full animate-spin border-t-transparent"></div>
      </div>
      <p className="mt-5 text-lg font-medium text-slate-300 tracking-wider">
        Loading...
      </p>
    </div>
  );
};

export default LoadingPage;
