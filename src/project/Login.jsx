import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Logi from "../assets/is.png";


export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#04153F] font-roboto flex items-center  justify-center p-4">
      <div className="w-full max-w-4xl bg-green-100 bg-opacity-70 backdrop-blur-lg rounded-lg overflow-hidden flex flex-col md:flex-row shadow-lg">
        {/* Form Container */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-6 text-center text-[#04153F]">Login</h1>
          <form className="flex flex-col gap-4">
            <div className="relative">
              <input
                type="email"
                placeholder="login@gmail.com"
                className="w-full p-3 bg-[#ebf8ff] border-none rounded-md"
              />
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full p-3 bg-[#ebf8ff] border-none rounded-md"
              />
              <button
                type="button"
                className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-none border-none cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <Eye className="h-5 w-5 text-gray-400" />
                ) : (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
            <div className="flex justify-end">
              <a href="#" className="text-sm text-[#04153F] hover:underline">
                Forgot Password?
              </a>
            </div>
            <button className="w-full p-3 bg-[#04153F] text-white rounded-md flex items-center justify-center cursor-pointer hover:bg-[#04153F]">
              LOGIN
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account yet?{' '}
            <a href="#" className="text-[#04153F] hover:underline">
              Sign up
            </a>
          </p>
        </div>
        {/* Image Container */}
        <div className="hidden md:flex items-center justify-center w-full md:w-1/2">
          <img src={Logi} alt="player sisan" className="object-contain w-3/4 h-auto" />
        </div>
      </div>
    </div>
  );
}
