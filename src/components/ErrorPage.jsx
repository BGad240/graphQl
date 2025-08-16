"use client";
import React from 'react';

const ErrorPage = ({ statusCode = 500, message = "Oops! Something went wrong." }) => {
  const handleGoHome = () => {
    // This will navigate the user to the homepage of the website.
    window.location.href = '/'; 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-center px-4">
      <div className="max-w-md w-full bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700">
        {/* Error Icon */}
        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-red-900/30">
          <svg className="h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        
        {/* Error Code */}
        <h1 className="mt-6 text-5xl font-extrabold text-red-500">
          {statusCode}
        </h1>
        
        {/* Error Message */}
        <p className="mt-4 text-lg text-slate-300">
          {message}
        </p>
        <p className="mt-2 text-sm text-slate-400">
          We're sorry, an unexpected error has occurred. Please try again later.
        </p>

        {/* Go Home Button */}
        <div className="mt-8">
          <button
            onClick={handleGoHome}
            className="w-full px-6 py-3 text-base font-medium text-white bg-pink-600 rounded-lg shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-transform transform hover:scale-105"
          >
            Go Back to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
