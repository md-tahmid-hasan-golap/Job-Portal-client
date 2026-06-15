"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-900 rounded-3xl overflow-hidden shadow-lg border border-slate-800 relative">
        {/* Background Decorative Graphic */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>

        <div className="flex flex-col lg:flex-row items-center justify-between p-8 sm:p-12 lg:p-16 gap-8 relative z-10">
          <div className="max-w-2xl text-center lg:text-left space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Recruiting Talented Developers?
            </h2>
            <p className="text-slate-300 text-base max-w-lg">
              Post your job openings today and reach out to thousands of top
              MERN stack and software engineers in Bangladesh.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href={"/postaJob"}
              className="w-full sm:w-auto px-6 py-3.5 bg-white text-indigo-950 font-bold text-sm rounded-xl hover:bg-slate-50 shadow-md transition-all flex items-center justify-center gap-1.5"
            >
              Post a Job Now <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
