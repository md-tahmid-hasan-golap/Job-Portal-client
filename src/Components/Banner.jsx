"use client";
import React from "react";
import Link from "next/link"; // রাউটিং এর জন্য Link ইম্পোর্ট করা হয়েছে
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  Briefcase,
  ArrowUpRight,
  CheckCircle2,
  Compass, // Explore আইকনের জন্য
} from "lucide-react";

const Banner = () => {
  // Ultra-smooth, slow floating movement for premium feel
  const smoothFloat = (delay = 0, yValue = 6) => ({
    initial: { y: 0 },
    animate: {
      y: [0, yValue, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay,
      },
    },
  });

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20 font-sans text-slate-900">
      {/* Premium Minimalist Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_0.7px,transparent_0.7px),linear-gradient(to_bottom,#e2e8f0_0.7px,transparent_0.7px)] bg-[size:2.5rem_2.5rem] opacity-50" />
      <div className="absolute top-0 right-1/4 h-[350px] w-[350px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* LEFT SIDE: Clean Typography & Compact Search */}
        <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-left">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.12] text-[#0f172a]"
          >
            The{" "}
            <span className="relative inline-block text-[#3b82f6]">
              Easiest Way
              <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#3b82f6]/10 -z-10 rounded-sm" />
            </span>{" "}
            <br className="hidden sm:inline" />
            to Get Your New <br />
            Job
          </motion.h1>

          {/* Subtitle / Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-500 text-xs sm:text-sm md:text-base max-w-lg leading-relaxed font-normal"
          >
            Each month, more than{" "}
            <strong className="text-slate-800 font-semibold">3 million</strong>{" "}
            job seekers turn to our website in their search for work, making
            over{" "}
            <strong className="text-slate-800 font-semibold">140,000</strong>{" "}
            applications every single day.
          </motion.p>

          {/* Compact Professional Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white border border-slate-200 p-1.5 rounded-xl shadow-md shadow-slate-100 flex flex-col sm:flex-row gap-1 items-center max-w-xl"
          >
            <div className="w-full flex items-center px-2.5 py-1.5 gap-2 border-b border-slate-100 sm:border-b-0">
              <Search className="h-4 w-4 text-blue-500 flex-shrink-0" />
              <input
                type="text"
                placeholder="Job title or keywords..."
                className="w-full bg-transparent text-slate-800 placeholder-slate-400 focus:outline-none text-xs sm:text-sm"
              />
            </div>

            <div className="hidden sm:block h-5 w-[1px] bg-slate-200" />

            <div className="w-full flex items-center px-2.5 py-1.5 gap-2">
              <MapPin className="h-4 w-4 text-indigo-500 flex-shrink-0" />
              <input
                type="text"
                placeholder="City or Remote"
                className="w-full bg-transparent text-slate-800 placeholder-slate-400 focus:outline-none text-xs sm:text-sm"
              />
            </div>

            <button className="w-full sm:w-auto bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-4 py-2 rounded-lg text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-1 group active:scale-95 shadow-sm">
              Search
              <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.div>

          {/* NEW: Explore Jobs Button & Trust Indicators Container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1"
          >
            {/* Explore Jobs Button */}
            <Link href="/jobs" passHref>
              <button className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-sm active:scale-95 group w-full sm:w-auto">
                <Compass className="h-4 w-4 text-blue-400 group-hover:rotate-45 transition-transform duration-300" />
                Explore Jobs
              </button>
            </Link>

            {/* Small Trust Indicators */}
            <div className="flex items-center gap-4 text-[11px] sm:text-xs font-medium text-slate-400">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-500" /> Verified
                Companies
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-500" /> Instant
                Apply
              </span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Perfectly proportioned compact image frame */}
        <div className="lg:col-span-6 w-full flex justify-center lg:justify-end mt-6 lg:mt-0">
          <motion.div
            variants={smoothFloat(0, 6)}
            initial="initial"
            animate="animate"
            className="relative w-full max-w-[460px] aspect-[1.4/1] px-2"
          >
            {/* Blue accent border frame */}
            <div className="absolute inset-0 border-[3px] border-[#3b82f6] border-r-0 border-b-0 rounded-tl-[40px] rounded-br-[40px] -translate-x-2.5 -translate-y-2.5 z-0" />

            {/* Main Premium Corporate Image Container */}
            <div className="w-full h-full bg-slate-100 rounded-tl-[35px] rounded-br-[35px] rounded-tr-xl rounded-bl-xl overflow-hidden shadow-xl relative z-10 border border-white">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
                alt="Professional corporate team collaboration"
                className="w-full h-full object-cover object-center contrast-[1.02]"
              />
            </div>

            {/* Micro Floating Tag 1: Clean Stats */}
            <motion.div
              variants={smoothFloat(0.8, -8)}
              initial="initial"
              animate="animate"
              className="absolute -top-4 -right-2 bg-white/95 backdrop-blur-sm border border-slate-100 rounded-lg px-2.5 py-1.5 shadow-md z-20 flex items-center gap-2"
            >
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-[11px] font-bold text-slate-800">
                Live: <span className="text-blue-600">12,450 vacancies</span>
              </p>
            </motion.div>

            {/* Micro Floating Tag 2: Success Check */}
            <motion.div
              variants={smoothFloat(2, 6)}
              initial="initial"
              animate="animate"
              className="absolute -bottom-4 -left-2 bg-white/95 backdrop-blur-sm border border-slate-100 rounded-lg px-3 py-1.5 shadow-md z-20 flex items-center gap-1.5"
            >
              <Briefcase className="h-3 w-3 text-indigo-500" />
              <p className="text-[11px] font-medium text-slate-600">
                Top remote roles added
              </p>
            </motion.div>

            {/* Minimal Dot Pattern */}
            <div className="absolute top-4 left-6 z-20 text-blue-500/30 pointer-events-none hidden sm:block">
              <svg
                width="40"
                height="40"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <pattern
                  id="dot-pattern-2"
                  x="0"
                  y="0"
                  width="3.5"
                  height="3.5"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="0.8" cy="0.8" r="0.8" />
                </pattern>
                <rect width="40" height="40" fill="url(#dot-pattern-2)" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
