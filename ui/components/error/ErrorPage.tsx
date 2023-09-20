import React from "react";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-4xl font-bold mb-4">Something went wrong</div>
      <p className="text-gray-600">We apologize for the inconvenience.</p>
    </div>
  );
};

export default ErrorPage;
