"use client";

import UseAxiusSecure from "@/UseAxiusSecure/UseAxiusSecure";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import LetestJobCard from "./LetestJobCard"; // সঠিক পাথ অনুযায়ী ইম্পোর্ট চেক করে নিবেন
import { Sparkles } from "lucide-react";

const LetestJob = () => {
  const axiusSecure = UseAxiusSecure();

  const { data: latestJobs = [], isLoading } = useQuery({
    queryKey: ["latest-jobs"],
    queryFn: async () => {
      const res = await axiusSecure.get("/letest-jobs");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 flex justify-center items-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 bg-slate-50/50 rounded-3xl my-10">
      {/* হেডার সেকশন */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 text-blue-600 text-xs font-bold rounded-full uppercase tracking-wider mb-3">
          <Sparkles className="h-3 w-3" /> Hot Opportunities
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
          Latest Job Openings
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
          Discover the freshest tech roles posted recently. Apply fast before
          the slots fill up!
        </p>
      </div>

      {/* যদি কোনো লেটেস্ট জব না থাকে */}
      {latestJobs.length === 0 ? (
        <div className="text-center py-12 bg-white border border-dashed border-slate-200 rounded-2xl">
          <p className="text-slate-400 text-sm font-medium">
            No recent jobs posted yet.
          </p>
        </div>
      ) : (
        /* গ্রিড লেআউট */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestJobs.slice(0, 6).map((job) => (
            <LetestJobCard key={job._id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LetestJob;
