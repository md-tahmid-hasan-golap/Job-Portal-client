"use client";
import UseAxiusSecure from "@/UseAxiusSecure/UseAxiusSecure";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";
import {
  Briefcase,
  MapPin,
  DollarSign,
  Calendar,
  Globe,
  User,
  Mail,
  CheckCircle2,
} from "lucide-react";

const AllJobDetails = () => {
  const { id } = useParams();
  const axiusSecure = UseAxiusSecure();

  const {
    data: jobDetails = null,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["jobDetails", id],
    queryFn: async () => {
      const res = await axiusSecure.get(`/all-job-details/${id}`);
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (isError || !jobDetails) {
    return (
      <div className="text-center py-12 text-red-500 font-medium">
        Job details could not be loaded or found.
      </div>
    );
  }

  const requirementsList = jobDetails.requirements
    ? jobDetails.requirements
        .split(/,|\n/)
        .map((req) => req.trim())
        .filter(Boolean)
    : [];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Header Section */}
        <div className="p-6 sm:p-8 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-3">
                {jobDetails.category || "General"}
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                {jobDetails.title}
              </h1>
              <p className="text-lg font-medium text-indigo-600 mt-1">
                {jobDetails.company}
              </p>
            </div>

            <div>
              <span className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-semibold bg-white text-gray-700 border border-gray-200 shadow-sm">
                {jobDetails.jobType || "Full-time"}
              </span>
            </div>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="flex items-center gap-2.5 text-gray-600">
              <MapPin className="w-5 h-5 text-gray-400 shrink-0" />
              <span className="text-sm">{jobDetails.location}</span>
            </div>
            <div className="flex items-center gap-2.5 text-gray-600">
              <DollarSign className="w-5 h-5 text-gray-400 shrink-0" />
              <span className="text-sm font-medium text-gray-800">
                {jobDetails.salary} BDT / month
              </span>
            </div>
            <div className="flex items-center gap-2.5 text-gray-600">
              <Calendar className="w-5 h-5 text-gray-400 shrink-0" />
              <span className="text-sm">
                Deadline:{" "}
                <span className="font-medium text-red-600">
                  {jobDetails.deadline}
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Body Section */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Description */}
          {jobDetails.description && (
            <div>
              <h2 className="text-lg font-bold text-gray-950 mb-3 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-indigo-500" /> Job
                Description
              </h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line bg-gray-50 p-4 rounded-xl border border-gray-100">
                {jobDetails.description}
              </p>
            </div>
          )}

          {/* Requirements */}
          {requirementsList.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-gray-950 mb-3">
                Requirements
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {requirementsList.map((req, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-600"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <hr className="border-gray-100" />

          {/* HR & Meta Info */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pt-2">
            {/* HR Contact */}
            {(jobDetails.hr_name || jobDetails.hr_email) && (
              <div className="space-y-1.5">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Contact HR
                </h3>
                <div className="flex flex-col gap-1 text-sm text-gray-600">
                  {jobDetails.hr_name && (
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="font-medium text-gray-800">
                        {jobDetails.hr_name}
                      </span>
                    </div>
                  )}
                  {jobDetails.hr_email && (
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <a
                        href={`mailto:${jobDetails.hr_email}`}
                        className="text-blue-600 hover:underline"
                      >
                        {jobDetails.hr_email}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              {jobDetails.website ? (
                <a
                  href={jobDetails.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all w-full sm:w-auto"
                >
                  <Globe className="w-4 h-4" /> Visit Website
                </a>
              ) : (
                <button
                  disabled
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-400 bg-gray-50 cursor-not-allowed w-full sm:w-auto"
                >
                  <Globe className="w-4 h-4" /> No Website
                </button>
              )}

              <button className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-100 transition-all text-center">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllJobDetails;
