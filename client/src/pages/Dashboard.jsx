import { FilePenLineIcon, PlusIcon, UploadCloudIcon } from "lucide-react";
import React from "react";
import { useEffect } from "react";
import dummyResumeData from "../assets/assets";
const Dashboard = () => {
  const colors = [
    "from-indigo-500 to-purple-600",
    "from-green-500 to-teal-600",
    "from-pink-500 to-red-600",
    "from-yellow-500 to-orange-600",
  ];
  const [allResumes, setAllResumes] = React.useState([]);
  const loadAllResumes = async () => {
    setAllResumes(dummyResumeData);
  };
  useEffect(() => {
    loadAllResumes();
  }, []);
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <p className="">Welcome, Joe Doe</p>
        <div className="flex gap-4">
          <button className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <PlusIcon className="size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-indigo-300 to-indigo-500 text-white rounded-full" />
            <p className="text-sm group-hover:text-indigo-600 transition-all-duration-300">
              Create Resume
            </p>
          </button>
          <button className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <UploadCloudIcon className="size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-indigo-300 to-indigo-500 text-white rounded-full" />
            <p className="text-sm group-hover:text-indigo-600 transition-all-duration-300">
              Upload Resume
            </p>
          </button>
        </div>

        <hr className="border-slate-300 my-6 sm:w-[305px]" />
        <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
          {allResumes.map((resume, index) => {
            const baseColor = colors[index % colors.length];
            return (
              <button
                button
                key={index}
                className="relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group-hover:shadow-lg transition-all duration-300 cursor-pointer"
                style={{
                  background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}40)`,
                  borderColor: baseColor + "40",
                }}
              >
                <FilePenLineIcon
                  className="size-7 group-hover:scale-105 transition-all"
                  style={{ color: baseColor }}
                />
                <p
                  className="text-sm-group-hover:scale-105 transition-all px-2 text-center"
                  style={{ color: baseColor }}
                >
                  {resume.title}
                </p>
                <p className="absolute bottom-1 text-[11px] text-slate-400 group-hover:text-slate-500 transition-all duration-300 px-2 text-center" style={{ color: baseColor + '90' }}>
                  Updated on {new Date(resume.updatedAt).toLocaleDateString()}{" "}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
