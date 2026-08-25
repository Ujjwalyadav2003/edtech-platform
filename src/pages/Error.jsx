import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaArrowLeft } from "react-icons/fa";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-richblack-900 text-white flex flex-col items-center justify-center px-4 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-purple-600 opacity-20 blur-[120px] rounded-full"></div>

      {/* Sad Face Box */}
      <div className="border border-richblack-700 rounded-xl p-10 mb-8 backdrop-blur-sm">
        <div className="text-6xl text-center">☹</div>
      </div>

      {/* 404 Text */}
      <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
        404
      </h1>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mt-4 text-center">
        Oops! <span className="text-purple-400">Page Not Found</span>
      </h2>

      {/* Description */}
      <p className="text-richblack-300 text-center max-w-xl mt-4">
        The page you're looking for doesn't exist or has been moved.
        Let's get you back on track.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <Link
          to="/"
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
        >
          <FaHome />
          Go to Homepage
        </Link>

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 border border-richblack-600 hover:border-purple-500 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
        >
          <FaArrowLeft />
          Go Back
        </button>
      </div>

      {/* Support Text */}
      <p className="mt-8 text-richblack-400">
        Need help?{" "}
        <span className="text-purple-400 cursor-pointer hover:underline">
          Contact Support
        </span>
      </p>

      {/* Decorative Dots */}
      <div className="absolute left-10 bottom-20 grid grid-cols-5 gap-2 opacity-30">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
        ))}
      </div>

      <div className="absolute right-10 bottom-20 grid grid-cols-5 gap-2 opacity-30">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
        ))}
      </div>
    </div>
  );
};

export default Error;