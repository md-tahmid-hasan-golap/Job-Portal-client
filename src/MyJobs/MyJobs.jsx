"use client";
import JobCard from "@/Components/JobCard";
import { AuthContext } from "@/providers/AuthProvider";
import UseAxiusSecure from "@/UseAxiusSecure/UseAxiusSecure";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";

const MyJobs = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxiusSecure();
  const { data: myJobs = [], refetch } = useQuery({
    queryKey: ["my-jobs", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-jobs/${user?.email}`);

      return res.data;
    },
  });
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Section Title */}
      <div className="mb-6 text-center md:text-left">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          My Applied Jobs
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Total Jobs Found:{" "}
          <span className="font-semibold text-blue-600">{myJobs.length}</span>
        </p>
      </div>

      {/* Responsive Job Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {myJobs.map((job) => (
          <JobCard key={job._id} job={job} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default MyJobs;
