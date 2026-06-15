"use client";

import AllJobCard from "@/Components/AllJobCard";
import UseAxiusSecure from "@/UseAxiusSecure/UseAxiusSecure";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Search, MapPin } from "lucide-react";

const Jobs = () => {
  const axiusSecure = UseAxiusSecure();

  const [searchTitle, setSearchTitle] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  const { data: jobs = [] } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const res = await axiusSecure.get("/alljobs");
      return res.data;
    },
  });

  const filteredJobs = jobs.filter((job) => {
    const matchesTitle = job.title
      ?.toLowerCase()
      .includes(searchTitle.toLowerCase());
    const matchesLocation = job.location
      ?.toLowerCase()
      .includes(searchLocation.toLowerCase());
    return matchesTitle && matchesLocation;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* হেডার ও ডানপাশের সার্চ বার সেকশন */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10 pb-6 border-b border-slate-100">
        {/* বামপাশে টাইটেল */}
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight sm:text-3xl">
            Available Job Openings
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Explore the latest opportunities ({filteredJobs.length} jobs)
          </p>
        </div>

        {/* ডানপাশে কমপ্যাক্ট সার্চ বার দুটি */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
          {/* টাইটেল সার্চ ইনপুট */}
          <div className="relative flex items-center w-full sm:w-56">
            <Search className="absolute left-3 h-4 w-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search title..."
              value={searchTitle}
              onChange={(e) => setSearchTitle(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-900 placeholder-slate-400 text-xs rounded-xl focus:outline-none transition-all shadow-sm"
            />
          </div>

          {/* লোকেশন সার্চ ইনপুট */}
          <div className="relative flex items-center w-full sm:w-48">
            <MapPin className="absolute left-3 h-4 w-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Location..."
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-900 placeholder-slate-400 text-xs rounded-xl focus:outline-none transition-all shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* রেজাল্ট সেকশন */}
      {filteredJobs.length === 0 ? (
        <div className="text-center py-16 bg-slate-50 border border-dashed border-slate-200 rounded-2xl">
          <p className="text-slate-400 text-sm font-medium">
            No jobs match your search keywords.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <AllJobCard key={job._id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Jobs;
