"use client";

import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import {
  Briefcase,
  Building2,
  MapPin,
  DollarSign,
  Calendar,
  Layers,
  FileText,
  CheckCircle,
  Globe,
  User,
} from "lucide-react";
import UseAxiusSecure from "@/UseAxiusSecure/UseAxiusSecure";
import { AuthContext } from "@/providers/AuthProvider";

const PostJob = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const axiusSecure = UseAxiusSecure();
  const { user } = useContext(AuthContext);

  const onSubmit = async (data) => {
    // ইনপুট ফিল্ডের ডেটার সাথে HR-এর নাম ও ইমেইল ব্যাকএন্ডে পাঠানোর জন্য অবজেক্ট তৈরি
    const jobData = {
      ...data,
      hr_name: user?.displayName || "Anonymous HR",
      hr_email: user?.email || "No email found",
      postedAt: new Date(),
    };

    try {
      // ব্যাকএন্ডে সম্পূর্ণ ডেটা পাঠানো হচ্ছে
      const response = await axiusSecure.post("/jobs", jobData);

      if (response.data) {
        // সফলভাবে পোস্ট হলে SweetAlert পপআপ
        Swal.fire({
          title: "Successfully Published!",
          text: "Your new job vacancy is now live.",
          icon: "success",
          confirmButtonColor: "#2563eb", // Tailwind blue-600
          timer: 3000,
          timerProgressBar: true,
        });
        navigate("/myjobs");

        // ফর্ম ক্লিয়ার বা রিসেট করা
        reset();
      }
    } catch (error) {
      console.error("Error submitting job data:", error);
      Swal.fire({
        title: "Submission Failed",
        text: error.message || "Something went wrong while posting the job.",
        icon: "error",
        confirmButtonColor: "#ef4444", // Tailwind red-500
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto bg-white border border-slate-200 shadow-xl rounded-2xl overflow-hidden">
        {/* Form Header */}
        <div className="bg-slate-900 px-6 py-8 sm:px-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-20" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white relative z-10">
            Post a New Vacancy
          </h2>
          <p className="mt-2 text-sm text-slate-400 relative z-10">
            Attract top-tier global tech talent by providing clear job details.
          </p>
        </div>

        {/* Form Body */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 sm:p-8 space-y-6"
        >
          {/* HR Info Profile Card (UI তে নাম ও ইমেইল দেখানোর জন্য) */}
          <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 flex items-center gap-3.5">
            <div className="p-2.5 bg-blue-600 rounded-xl text-white shadow-md shadow-blue-600/10">
              <User className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Posting Authority (HR)
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-0.5">
                <span className="text-sm font-semibold text-slate-800">
                  {user?.displayName || "Loading Name..."}
                </span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <span className="text-xs text-slate-500 font-medium bg-slate-200/60 px-2 py-0.5 rounded-md">
                  {user?.email || "Loading Email..."}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Job Title */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Briefcase className="h-3.5 w-3.5 text-blue-500" /> Job Title *
              </label>
              <input
                type="text"
                placeholder="e.g., MERN Stack Developer"
                {...register("title", { required: "Job title is required" })}
                className={`w-full px-3 py-2.5 bg-slate-50 border rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.title
                    ? "border-red-500 focus:ring-red-200"
                    : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
                }`}
              />
              {errors.title && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Building2 className="h-3.5 w-3.5 text-blue-500" /> Company Name
                *
              </label>
              <input
                type="text"
                placeholder="e.g., TechNext Ltd."
                {...register("company", {
                  required: "Company name is required",
                })}
                className={`w-full px-3 py-2.5 bg-slate-50 border rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.company
                    ? "border-red-500 focus:ring-red-200"
                    : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
                }`}
              />
              {errors.company && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.company.message}
                </p>
              )}
            </div>

            {/* Job Category */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Layers className="h-3.5 w-3.5 text-blue-500" /> Job Category *
              </label>
              <select
                {...register("category", { required: "Category is required" })}
                className={`w-full px-3 py-2.5 bg-slate-50 border rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 transition-all ${
                  errors.category
                    ? "border-red-500 focus:ring-red-200"
                    : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
                }`}
              >
                <option value="">Select Category</option>
                <option value="Development">Development & Engineering</option>
                <option value="Design">UI/UX & Product Design</option>
                <option value="Marketing">Digital Marketing</option>
                <option value="Management">Project Management</option>
              </select>
              {errors.category && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.category.message}
                </p>
              )}
            </div>

            {/* Job Type */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Briefcase className="h-3.5 w-3.5 text-blue-500" /> Job Type *
              </label>
              <select
                {...register("jobType", { required: "Job type is required" })}
                className={`w-full px-3 py-2.5 bg-slate-50 border rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 transition-all ${
                  errors.jobType
                    ? "border-red-500 focus:ring-red-200"
                    : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
                }`}
              >
                <option value="">Select Job Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Remote">Remote</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
              {errors.jobType && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.jobType.message}
                </p>
              )}
            </div>

            {/* Job Location */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-blue-500" /> Location /
                Workplace Type *
              </label>
              <input
                type="text"
                placeholder="e.g., Dhaka, Bangladesh or Remote"
                {...register("location", {
                  required: "Location info is required",
                })}
                className={`w-full px-3 py-2.5 bg-slate-50 border rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.location
                    ? "border-red-500 focus:ring-red-200"
                    : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
                }`}
              />
              {errors.location && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.location.message}
                </p>
              )}
            </div>

            {/* Application Deadline */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-blue-500" /> Application
                Deadline *
              </label>
              <input
                type="date"
                {...register("deadline", { required: "Deadline is required" })}
                className={`w-full px-3 py-2.5 bg-slate-50 border rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 transition-all ${
                  errors.deadline
                    ? "border-red-500 focus:ring-red-200"
                    : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
                }`}
              />
              {errors.deadline && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.deadline.message}
                </p>
              )}
            </div>

            {/* Salary Range */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <DollarSign className="h-3.5 w-3.5 text-blue-500" /> Salary
                Range *
              </label>
              <input
                type="text"
                placeholder="e.g., $40k - $60k or Negotiable"
                {...register("salary", {
                  required: "Salary details are required",
                })}
                className={`w-full px-3 py-2.5 bg-slate-50 border rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.salary
                    ? "border-red-500 focus:ring-red-200"
                    : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
                }`}
              />
              {errors.salary && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.salary.message}
                </p>
              )}
            </div>

            {/* Company Website / Apply URL */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Globe className="h-3.5 w-3.5 text-blue-500" /> Company Website
                / Link
              </label>
              <input
                type="url"
                placeholder="https://example.com"
                {...register("website")}
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>
          </div>

          {/* Job Description */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <FileText className="h-3.5 w-3.5 text-blue-500" /> Job Description
              *
            </label>
            <textarea
              rows="4"
              placeholder="Provide a brief summary of the role, team environment, and expectations..."
              {...register("description", {
                required: "Job description is required",
              })}
              className={`w-full px-3 py-2.5 bg-slate-50 border rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                errors.description
                  ? "border-red-500 focus:ring-red-200"
                  : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
              }`}
            />
            {errors.description && (
              <p className="text-red-500 text-xs mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Requirements & Skills */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <CheckCircle className="h-3.5 w-3.5 text-blue-500" /> Requirements
              & Qualifications *
            </label>
            <textarea
              rows="4"
              placeholder="List required skills, experience levels, tools, or educational parameters..."
              {...register("requirements", {
                required: "Requirements are required",
              })}
              className={`w-full px-3 py-2.5 bg-slate-50 border rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                errors.requirements
                  ? "border-red-500 focus:ring-red-200"
                  : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
              }`}
            />
            {errors.requirements && (
              <p className="text-red-500 text-xs mt-1">
                {errors.requirements.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-all duration-200 shadow-md shadow-blue-600/10 active:scale-98 flex items-center justify-center gap-2 ${
                isSubmitting ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Publishing Vacancy...
                </>
              ) : (
                "Publish Job Order"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
