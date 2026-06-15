"use client";

import React, { useEffect, useState, useContext } from "react";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import UseAxiusSecure from "@/UseAxiusSecure/UseAxiusSecure";
import { AuthContext } from "@/providers/AuthProvider";
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

const UpdateJob = () => {
  const { id } = useParams();
  const router = useRouter();
  const axiosSecure = UseAxiusSecure();
  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // react-hook-form হুক ইনিশিয়ালাইজেশন
  const { register, handleSubmit, reset } = useForm();

  // ডাটাবেজ থেকে ডিটেইলস API কল করে ফর্মে ডিফল্ট ভ্যালু বসানো
  useEffect(() => {
    if (id) {
      axiosSecure
        .get(`/all-job-details/${id}`) // আপনার এক্সিস্টিং ডিটেইলস এন্ডপয়েন্ট
        .then((res) => {
          const jobData = res.data;

          // ডেট ফরম্যাটটি input[type="date"] এর উপযোগী করার জন্য ট্রিম করা হলো
          if (jobData?.deadline) {
            jobData.deadline = jobData.deadline.split("T")[0];
          }

          // রিয়্যাক্ট হুক ফর্মের অল-ইন-ওয়ান রিসেট ফাংশন (ডিফল্ট ভ্যালু বসে যাবে)
          reset(jobData);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching job details for update:", err);
          setLoading(false);
        });
    }
  }, [id, axiosSecure, reset]);

  // ফর্ম সাবমিট হ্যান্ডলার
  const onSubmit = async (data) => {
    setIsSubmitting(true);

    // ১. ফর্মের ডাটা কপি করে নতুন অবজেক্ট করা হলো
    const updatedJobData = { ...data };

    // ২. ফ্রন্টএন্ড এরর ফিক্স: ডাটার ভেতরে অরিজিনাল _id থাকলে তা রিমুভ করা হলো
    if (updatedJobData._id) {
      delete updatedJobData._id;
    }

    // ৩. মেটাডাটা যোগ করা হলো
    updatedJobData.hr_name =
      user?.displayName || updatedJobData?.hr_name || "Anonymous HR";
    updatedJobData.hr_email =
      user?.email || updatedJobData?.hr_email || "No email found";
    updatedJobData.updatedAt = new Date();

    try {
      // ব্যাকএন্ডের PUT এন্ডপয়েন্টে ডাটা পাঠানো হচ্ছে
      const res = await axiosSecure.put(`/jobs/${id}`, updatedJobData);

      // মডিফাইড অথবা ম্যাচড যেকোনো একটা হলেই সাকসেস ট্রিপ হবে
      if (res.data.modifiedCount > 0 || res.data.matchedCount > 0) {
        Swal.fire({
          title: "Successfully Updated!",
          text: "Your job details have been modified.",
          icon: "success",
          confirmButtonColor: "#2563eb",
          timer: 3000,
          timerProgressBar: true,
        });
        router.push("/myjobs"); // আপডেট শেষে হোম বা নির্দিষ্ট পেজে রিডাইরেক্ট
      } else {
        Swal.fire({
          title: "No Changes Made",
          text: "You didn't modify any fields.",
          icon: "info",
          confirmButtonColor: "#2563eb",
        });
      }
    } catch (error) {
      console.error("Error updating job from frontend:", error);
      Swal.fire({
        title: "Update Failed",
        text: error.message || "Something went wrong while updating.",
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto bg-white border border-slate-200 shadow-xl rounded-2xl overflow-hidden">
        {/* Title Header */}
        <div className="bg-slate-900 px-6 py-8 sm:px-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-20" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white relative z-10">
            Update Job Vacancy
          </h2>
          <p className="mt-2 text-sm text-slate-400 relative z-10">
            Modify the specific fields below to update your job post
            information.
          </p>
        </div>

        {/* Form Body */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 sm:p-8 space-y-6"
        >
          {/* HR Profile Banner */}
          <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 flex items-center gap-3.5">
            <div className="p-2.5 bg-blue-600 rounded-xl text-white shadow-md shadow-blue-600/10">
              <User className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Authorized Editor (HR)
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
                {...register("title", { required: true })}
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
              />
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
                {...register("company", { required: true })}
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>

            {/* Job Category */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Layers className="h-3.5 w-3.5 text-blue-500" /> Job Category *
              </label>
              <select
                {...register("category", { required: true })}
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
              >
                <option value="">Select Category</option>
                <option value="Development">Development & Engineering</option>
                <option value="Design">UI/UX & Product Design</option>
                <option value="Marketing">Digital Marketing</option>
                <option value="Management">Project Management</option>
              </select>
            </div>

            {/* Job Type */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Briefcase className="h-3.5 w-3.5 text-blue-500" /> Job Type *
              </label>
              <select
                {...register("jobType", { required: true })}
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
              >
                <option value="">Select Job Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Remote">Remote</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            {/* Job Location */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-blue-500" /> Location *
              </label>
              <input
                type="text"
                placeholder="e.g., Dhaka, Bangladesh"
                {...register("location", { required: true })}
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>

            {/* Application Deadline */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-blue-500" /> Deadline *
              </label>
              <input
                type="date"
                {...register("deadline", { required: true })}
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>

            {/* Salary Range */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <DollarSign className="h-3.5 w-3.5 text-blue-500" /> Salary
                Range *
              </label>
              <input
                type="text"
                placeholder="e.g., 40k - 60k BDT"
                {...register("salary", { required: true })}
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>

            {/* Company Website */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Globe className="h-3.5 w-3.5 text-blue-500" /> Company Website
              </label>
              <input
                type="url"
                placeholder="https://example.com"
                {...register("website")}
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
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
              placeholder="Provide job descriptions..."
              {...register("description", { required: true })}
              className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>

          {/* Requirements */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <CheckCircle className="h-3.5 w-3.5 text-blue-500" /> Requirements
              *
            </label>
            <textarea
              rows="4"
              placeholder="List requirements separated by comma or new lines..."
              {...register("requirements", { required: true })}
              className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-all duration-200 shadow-md flex items-center justify-center gap-2 ${
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
                  Saving Changes...
                </>
              ) : (
                "Save Changes & Update"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateJob;
