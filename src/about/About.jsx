import React from "react";
import { Briefcase, Users, Target, Rocket, ShieldCheck } from "lucide-react";
import Link from "next/link";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50/50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* 1. Hero / Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-600 uppercase tracking-wider">
            Who We Are
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            About{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              JobPortal
            </span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to JobPortal — your trusted ecosystem designed to bridge the
            gap between talented job seekers and industry-leading global
            companies. We empower growth by making career opportunities
            accessible to everyone.
          </p>
        </div>

        {/* 2. Stats / Achievement Grid (Optional Image/Section রিকোয়ারমেন্টের জন্য) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              id: 1,
              label: "Active Jobs",
              value: "12K+",
              color: "from-blue-500 to-indigo-500",
            },
            {
              id: 2,
              label: "Top Companies",
              value: "500+",
              color: "from-indigo-500 to-purple-500",
            },
            {
              id: 3,
              label: "Happy Candidates",
              value: "80K+",
              color: "from-purple-500 to-pink-500",
            },
            {
              id: 4,
              label: "Daily Applications",
              value: "25K+",
              color: "from-pink-500 to-rose-500",
            },
          ].map((stat) => (
            <div
              key={stat.id}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center transform hover:scale-[1.02] transition-all duration-300"
            >
              <span
                className={`block text-3xl sm:text-4xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}
              >
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* 3. Core Values & Mission Grid */}
        <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-12 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-950 flex items-center gap-3">
              <Target className="w-7 h-7 text-indigo-600" /> Our Core Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our ultimate goal is to streamline the hiring workflow. Whether
              you are a fresh graduate taking your first professional steps or
              an enterprise seeking top-tier engineering talent, JobPortal
              provides a clean, responsive, and robust interface to achieve
              success.
            </p>
            <div className="flex flex-col gap-3.5 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-green-50 text-green-600 rounded-lg mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-950 text-sm">
                    Verified Employers Only
                  </h4>
                  <p className="text-xs text-gray-500">
                    Every single company profile goes through manual checks.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-blue-50 text-blue-600 rounded-lg mt-0.5">
                  <Rocket className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-950 text-sm">
                    Instant Applications
                  </h4>
                  <p className="text-xs text-gray-500">
                    Apply with your updated resume in just a single click.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Feature Visual List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 bg-gradient-to-br from-indigo-50/50 to-indigo-50 rounded-2xl border border-indigo-100/50 space-y-2">
              <Briefcase className="w-6 h-6 text-indigo-600" />
              <h3 className="font-bold text-gray-900 text-base">
                Explore Roles
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Filter seamlessly through high-salary enterprise, remote, or
                hybrid postings.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50/50 to-blue-50 rounded-2xl border border-blue-100/50 space-y-2">
              <Users className="w-6 h-6 text-blue-600" />
              <h3 className="font-bold text-gray-900 text-base">
                Network Direct
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Get authentic contact channels straight to the active HR
                recruitment desks.
              </p>
            </div>
          </div>
        </div>

        {/* 4. Technology Badges / Meta Info */}
        <div className="text-center space-y-4 pt-4">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
            Built with Modern Tech Stack
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-xl mx-auto">
            {[
              "Next.js 14 (App Router)",
              "Tailwind CSS",
              "Firebase Auth",
              "TanStack Query",
              "Axios Secure",
              "MongoDB",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1.5 rounded-xl bg-white border border-gray-200 shadow-sm text-xs font-medium text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="pt-6">
            <Link
              href="/jobs"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all transform hover:-translate-y-0.5"
            >
              Browse Open Jobs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
