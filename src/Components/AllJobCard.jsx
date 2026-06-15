"use client";

import React from "react";
import Link from "next/link";

import { motion } from "framer-motion";
import {
  Building2,
  MapPin,
  DollarSign,
  Calendar,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const AllJobCard = ({ job, onViewDetails }) => {
  // ডিস্ট্রাকচারিং-এ job_image যুক্ত করা হলো
  const {
    _id,
    title,
    company,
    category,
    jobType,
    location,
    salary,
    deadline,
    job_image,
  } = job || {};

  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    if (dateStr.includes("-")) {
      const parts = dateStr.split("-");
      if (parts[0]?.length > 4) return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    try {
      return new Date(dateStr).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-white border border-slate-200/60 rounded-2xl p-6 flex flex-col justify-between shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_30px_-10px_rgba(59,130,246,0.12)] hover:border-blue-400/50 transition-all duration-300 group relative overflow-hidden h-full"
    >
      {/* গ্লোয়িং ব্যাকগ্রাউন্ড ডেকোরেশন */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-indigo-500/0 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

      <div>
        {/* টপ সেকশন: কোম্পানি লোগো/ইমেজ + ব্যাজেস */}
        <div className="flex items-start justify-between gap-4 mb-4">
          {/* ইমেজ/লোগো কন্টেইনার */}
          <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200/80 flex items-center justify-center shrink-0 shadow-sm group-hover:border-blue-200 transition-all overflow-hidden">
            {job_image ? (
              <img
                src={job_image}
                alt={`${company || "Company"} logo`}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  // ইমেজ লোড ফেল করলে বা ব্রোকেন হলে ওটা হাইড করে ফলব্যাক আইকন দেখাবে
                  e.target.style.display = "none";
                  if (e.target.nextSibling) {
                    e.target.nextSibling.style.display = "block";
                  }
                }}
              />
            ) : null}

            {/* ফলব্যাক আইকন */}
            <Building2
              className="h-5 w-5 text-slate-500 group-hover:text-blue-500 transition-colors"
              style={{ display: job_image ? "none" : "block" }}
            />
          </div>

          <div className="flex flex-wrap gap-1.5 justify-end">
            <span className="px-2.5 py-1 bg-blue-50/80 text-blue-600 text-[11px] font-semibold rounded-lg tracking-wide uppercase">
              {category || "General"}
            </span>
            <span className="px-2.5 py-1 bg-slate-50 text-slate-600 text-[11px] font-semibold rounded-lg flex items-center gap-1 border border-slate-100">
              <Briefcase className="h-3 w-3 text-slate-400" />{" "}
              {jobType || "Full-time"}
            </span>
          </div>
        </div>

        {/* জব টাইটেল এবং কোম্পানি */}
        <div className="mb-4">
          <h3 className="text-[17px] font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-1 leading-snug">
            {title}
          </h3>
          <p className="text-sm font-medium text-slate-500 mt-1 flex items-center gap-1">
            {company}
          </p>
        </div>

        {/* ইনফো গ্রিড: লোকেশন ও স্যালারি */}
        <div className="grid grid-cols-2 gap-2 py-3.5 my-3 border-y border-dashed border-slate-100 text-slate-600">
          <div className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-slate-400 shrink-0" />
            <span className="text-xs font-medium text-slate-500 line-clamp-1">
              {location}
            </span>
          </div>
          <div className="flex items-center gap-1.5 justify-end">
            <DollarSign className="h-4 w-4 text-emerald-500 shrink-0" />
            <span className="text-sm font-bold text-slate-800 tracking-tight">
              {salary}{" "}
              <span className="text-[10px] text-slate-400 font-normal">
                /mo
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* কার্ড ফুটার: ডেডলাইন এবং ফুল-উইডথ জব ডিটেইলস বাটন */}
      <div className="mt-4 pt-3 flex flex-col gap-3.5">
        {/* ডেডলাইন */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
          <Calendar className="h-3.5 w-3.5 text-slate-400" />
          <span>
            Deadline:{" "}
            <strong className="text-slate-600 font-semibold">
              {formatDate(deadline)}
            </strong>
          </span>
        </div>

        {/* সিঙ্গেল জব ডিটেইলস বাটন */}
        <Link
          href={`/all-job-details/${_id}`}
          onClick={() => onViewDetails && onViewDetails(_id)}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-blue-600 text-white rounded-xl text-xs font-semibold shadow-sm hover:shadow-md hover:shadow-blue-500/10 transition-all duration-200 active:scale-[0.98] group/btn"
        >
          Job Details
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default AllJobCard;
