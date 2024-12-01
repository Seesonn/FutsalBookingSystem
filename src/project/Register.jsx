


import React from 'react';
import Soo from'../assets/messi.png';

export default function Register() {
  return (
    <div className="min-h-screen bg-[#04153F] font-roboto flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-green-100 bg-opacity-70 backdrop-blur-lg rounded-lg overflow-hidden flex flex-col md:flex-row shadow-lg">
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-4xl font-bold mb-6 text-center text-[#04153F]">Sign Up</h1>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 bg-[#ebf8ff] rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-[#ebf8ff] rounded-md"
            />
            <input
              type="password"
              placeholder="Create Password"
               className="w-full p-3 bg-[#ebf8ff] rounded-md"
            />
            <input
              type="tel"
              placeholder=" Number"
              className="w-full p-3 bg-[#ebf8ff] rounded-md"
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full p-3 bg-[#ebf8ff] rounded-md"
            />
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="mr-2"
              />
              <label htmlFor="terms" className="text-sm">
                I agree to the{' '}
                <a href="#" className="text-[#04163d] hover:underline">
                  terms and conditions
                </a>
              </label>
            </div>
            <button className="w-full p-3 bg-[#04153F] text-white rounded-md flex items-center justify-center hover:bg-[#04153F]/90 transition-colors">
              SIGN UP
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
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <img
            src={Soo}
            alt="goat with trophy"
            className="max-w-full h-auto rounded-lg shadow-md hidden md:block"
          />
        </div>
      </div>
    </div>
  );
}
