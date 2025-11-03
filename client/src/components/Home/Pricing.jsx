import React from "react";
import Title from "./Title";
import { GemIcon } from "lucide-react";

const Pricing = () => {
  return (
    <div id="pricing" className="flex flex-col items-center my-10 scroll-mt-12">
      {" "}
      <div className="flex items-center gap-2 text-sm text-indigo-600 bg-indigo-400/10 rounded-full px-6 py-1.5">
        <GemIcon className="size-4.5 stroke-indigo-600" />
        <span>Pricing</span>
      </div>
      <Title
        title="Choose Your Plan"
        description="Select the plan that best fits your learning needs and start your journey today. Upgrade, downgrade, or cancel anytime.
          "
      />
      <div className="flex flex-wrap items-center justify-center gap-6 my-10">
        <div className="w-72 bg-white text-center text-gray-800/80 border border-gray-200 p-6 pb-16 rounded-lg">
          <p className="font-semibold">Basic</p>
          <h1 className="text-3xl font-semibold">
            ETB 299
            <span className="text-gray-500 text-sm font-normal">/Year</span>
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
                  fill="indigo"
                />
              </svg>
              <p>Create resumes</p>
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
                  fill="indigo"
                />
              </svg>
              <p>Access resume templates</p>
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
                  fill="indigo"
                />
              </svg>
              <p>4 basic templates</p>
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
                  fill="indigo"
                />
              </svg>
              <p>Save and manage 1 resume</p>
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
                  fill="indigo"
                />
              </svg>
              <p>Basic community support</p>
            </li>
          </ul>
          <button
            type="button"
            className="bg-indigo-500 text-sm w-full py-2 rounded text-white font-medium mt-7 hover:bg-indigo-600 transition-all"
          >
            Get Started
          </button>
        </div>

        <div className="w-72 bg-indigo-500 relative text-center text-white border border-gray-500/30 p-6 pb-14 rounded-lg">
          <p className="font-semibold pt-2">Standared</p>
          <h1 className="text-3xl font-semibold">
            ETB 599<span className="text-sm font-normal">/Year</span>
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
              <p>Access to all template</p>
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
              <p>LinkedIn AI optimization</p>
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
              <p>Faster AI processing</p>
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
              <p>Advanced AI career assistant</p>
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
            className="bg-white text-sm w-full py-2 rounded text-indigo-500 font-medium mt-7 hover:bg-gray-200 transition-all"
          >
            Get Started
          </button>
        </div>

        <div className="w-72 bg-white text-center text-gray-800/80 border border-gray-200 p-6 rounded-lg">
          <p className="font-semibold">Enterprise</p>
          <h1 className="text-3xl font-semibold">
            ETB 999
            <span className="text-gray-500 text-sm font-normal">/Year</span>
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
                  fill="indigo"
                />
              </svg>
              <p>Unlimited templates</p>
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
                  fill="indigo"
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
                  fill="indigo"
                />
              </svg>
              <p>AI job suggestions</p>
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
                  fill="indigo"
                />
              </svg>
              <p>Full AI resume writing</p>
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
                  fill="indigo"
                />
              </svg>
              <p>Resume analytic</p>
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
                  fill="indigo"
                />
              </svg>
              <p>AI interview preparation</p>
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
                  fill="indigo"
                />
              </svg>
              <p>Multi-language resume</p>
            </li>
          </ul>
          <button
            type="button"
            className="bg-indigo-500 text-sm w-full py-2 rounded text-white font-medium mt-7 hover:bg-indigo-600 transition-all"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
