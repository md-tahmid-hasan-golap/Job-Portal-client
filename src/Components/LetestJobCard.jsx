import React from "react";
import {
  MapPin,
  DollarSign,
  Calendar,
  ArrowUpRight,
  Building2,
  Briefcase,
} from "lucide-react";
import Link from "next/link"; // Next.js এর জন্য, React Router হলে 'react-router-dom' থেকে Link নিবেন।

const LetestJobCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    location,
    salary,
    deadline,
    jobType,
    category,
    description,
  } = job || {};

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 flex flex-col h-full group">
      {/* টপ ব্যাজ ও ক্যাটাগরি */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md">
          {category || "Tech"}
        </span>
        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-md border border-emerald-100">
          {jobType || "Full-time"}
        </span>
      </div>

      {/* টাইটেল ও কোম্পানি */}
      <div className="mb-4 flex-grow">
        <h3 className="text-lg font-bold text-slate-800 line-clamp-1 group-hover:text-blue-600 transition-colors">
          {title || "Software Engineer"}
        </h3>
        <p className="text-xs font-medium text-slate-500 flex items-center gap-1 mt-1">
          <Building2 className="h-3.5 w-3.5 text-slate-400" />{" "}
          {company || "Unknown Company"}
        </p>

        {/* ডেসক্রিপশন ট্রাঙ্কেট/শর্ট করা */}
        <p className="text-xs text-slate-400 mt-3 line-clamp-2 leading-relaxed">
          {description || "No description provided for this job opening."}
        </p>
      </div>

      {/* মিডেল ইনফো (লোকেশন, স্যালারি, ডেডলাইন) */}
      <div className="space-y-2 py-3 border-t border-b border-slate-100 mb-5 text-xs text-slate-600">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-slate-500">
            <MapPin className="h-3.5 w-3.5 text-slate-400" /> Location
          </span>
          <span className="font-medium text-slate-700">
            {location || "Remote"}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-slate-500">
            <DollarSign className="h-3.5 w-3.5 text-slate-400" /> Salary
          </span>
          <span className="font-semibold text-blue-600">
            {salary || "Negotiable"}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-slate-500">
            <Calendar className="h-3.5 w-3.5 text-slate-400" /> Deadline
          </span>
          <span className="font-medium text-slate-700">
            {deadline ? new Date(deadline).toLocaleDateString() : "N/A"}
          </span>
        </div>
      </div>

      {/* ৫. একশন বাটন (View Details) */}
      <div className="mt-auto">
        <Link
          href={`/all-job-details/${_id}`} // আপনার প্রজেক্টের রুট অনুযায়ী ডাইনামিক আইডি পাথ পরিবর্তন করতে পারেন
          className="w-full py-2.5 bg-slate-900 hover:bg-blue-600 text-white font-semibold text-xs rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm group-hover:shadow-md group-hover:shadow-blue-600/10 active:scale-98"
        >
          View Details
          <ArrowUpRight className="h-3.5 w-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default LetestJobCard;
