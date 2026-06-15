"use client";
import React from "react";
import { UserPlus, Search, FileText, CheckCircle } from "lucide-react";

const WorkingProcess = () => {
  const steps = [
    {
      title: "Create Account",
      desc: "Sign up and build your developer profile within minutes.",
      icon: UserPlus,
    },
    {
      title: "Search & Filter",
      desc: "Filter jobs by tech-stack, location, salary or company.",
      icon: Search,
    },
    {
      title: "Apply Fast",
      desc: "Submit your live portfolio links directly with a click.",
      icon: FileText,
    },
    {
      title: "Get Hired",
      desc: "Connect with tech HRs directly and start your journey.",
      icon: CheckCircle,
    },
  ];

  return (
    <section className="py-16 bg-gray-50/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950">
            How It Works
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Get hired in 4 simple and automated steps
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="text-center relative group">
                {/* Connecting Line for desktop */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-7 left-[60%] w-full h-[2px] bg-indigo-100 z-0" />
                )}

                <div className="w-14 h-14 bg-white border border-gray-100 rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-5 relative z-10 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-base">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-500 max-w-xs mx-auto mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
