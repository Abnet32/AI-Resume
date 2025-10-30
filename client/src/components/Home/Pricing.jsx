import React from "react";
import Title from "./Title";

const Pricing = () => {
  return (
    <div
      id="features"
      className="flex flex-col items-center my-10 scroll-mt-12"
    >
      {" "}
      <Title
        title="Choose Your Plan"
        description="Select the plan that best fits your learning needs and start your journey today. Upgrade, downgrade, or cancel anytime.
          "
      />
      <div className="flex flex-wrap items-center justify-center gap-6 my-10">
        <div className="w-72 bg-white text-center text-gray-800/80 border border-gray-200 p-6 pb-16 rounded-lg">
          <p className="font-semibold">Basic</p>
          <h1 className="text-3xl font-semibold">
            $9
            <span className="text-gray-500 text-sm font-normal">/month</span>
          </h1>
          <ul className="list-none text-gray-500 text-sm mt-6 space-y-1">
            <li className="flex items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
                  fill="green"
                />
              </svg>
              <p>Access to all basic courses</p>
            </li>
            <li className="flex items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
                  fill="green"
                />
              </svg>
              <p>Community support</p>
            </li>
            <li className="flex items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
                  fill="green"
                />
              </svg>
              <p>10 practice projects</p>
            </li>
            <li className="flex items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
                  fill="green"
                />
              </svg>
              <p>Course completion certificate</p>
            </li>
            <li className="flex items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
                  fill="green"
                />
              </svg>
              <p>Basic code review</p>
            </li>
          </ul>
          <button
            type="button"
            className="bg-green-500 text-sm w-full py-2 rounded text-white font-medium mt-7 hover:bg-green-600 transition-all"
          >
            Get Started
          </button>
        </div>

        <div className="w-72 bg-green-500 relative text-center text-white border border-gray-500/30 p-6 pb-14 rounded-lg">
          <p className="font-semibold pt-2">Standared</p>
          <h1 className="text-3xl font-semibold">
            $19<span className="text-sm font-normal">/month</span>
          </h1>
          <ul className="list-none text-white text-sm mt-6 space-y-1">
            <li className="flex items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
                  fill="currentColor"
                />
              </svg>
              <p>Access to all Pro courses</p>
            </li>
            <li className="flex items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
                  fill="currentColor"
                />
              </svg>
              <p>Priority community support</p>
            </li>
            <li className="flex items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
                  fill="currentColor"
                />
              </svg>
              <p>30 practice projects</p>
            </li>
            <li className="flex items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
                  fill="currentColor"
                />
              </svg>
              <p>Course completion certificate</p>
            </li>
            <li className="flex items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
                  fill="currentColor"
                />
              </svg>
              <p>Advance code review</p>
            </li>
            <li className="flex items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
                  fill="currentColor"
                />
              </svg>
              <p>1-on-1 mentoring sessions</p>
            </li>
            <li className="flex items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
                  fill="currentColor"
                />
              </svg>
              <p>Job assistance</p>
            </li>
          </ul>
          <button
            type="button"
            className="bg-white text-sm w-full py-2 rounded text-green-500 font-medium mt-7 hover:bg-gray-200 transition-all"
          >
            Get Started
          </button>
        </div>

        <div className="w-72 bg-white text-center text-gray-800/80 border border-gray-200 p-6 rounded-lg">
          <p className="font-semibold">Enterprise</p>
          <h1 className="text-3xl font-semibold">
            $29
            <span className="text-gray-500 text-sm font-normal">/month</span>
          </h1>
          <ul className="list-none text-gray-500 text-sm mt-6 space-y-1">
            <li className="flex items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
                  fill="green"
                />
              </svg>
              <p>Access to all courses</p>
            </li>
            <li className="flex items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
                  fill="green"
                />
              </svg>
              <p>Dedicated support</p>
            </li>
            <li className="flex items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
                  fill="green"
                />
              </svg>
              <p>Unlimited projects</p>
            </li>
            <li className="flex items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
                  fill="green"
                />
              </svg>
              <p>Course completion certificate</p>
            </li>
            <li className="flex items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
                  fill="green"
                />
              </svg>
              <p>Premium code review</p>
            </li>
            <li className="flex items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
                  fill="green"
                />
              </svg>
              <p>Weekly 1-on-1 mentoring</p>
            </li>
            <li className="flex items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
                  fill="green"
                />
              </svg>
              <p>Job guarantee</p>
            </li>
          </ul>
          <button
            type="button"
            className="bg-green-500 text-sm w-full py-2 rounded text-white font-medium mt-7 hover:bg-green-600 transition-all"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
