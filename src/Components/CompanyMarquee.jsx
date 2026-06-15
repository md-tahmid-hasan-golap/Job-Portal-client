"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { Building2 } from "lucide-react";

const CompanyMarquee = () => {
  // ডামি কোম্পানি লিস্ট (এখানে লোগোর বদলে আইকন ও নাম দিয়ে প্রিমিয়াম কার্ড বানানো হয়েছে)
  const companies = [
    { name: "Tech Solutions BD", jobs: "12 Open Jobs" },
    { name: "TechHive Solutions", jobs: "8 Open Jobs" },
    { name: "Pathao Tech", jobs: "15 Open Jobs" },
    { name: "Brain Station 23", jobs: "24 Open Jobs" },
    { name: "TigerIT Bangladesh", jobs: "6 Open Jobs" },
    { name: "Selise Rockin'", jobs: "10 Open Jobs" },
    { name: "Chaldal Tech", jobs: "9 Open Jobs" },
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
          Top Employers
        </p>
        <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mt-1">
          Trusted by 500+ Tech Companies
        </h2>
      </div>

      {/* Fast Marquee Slider */}
      <Marquee
        speed={40}
        gradient={true}
        gradientWidth={80}
        pauseOnHover={true}
      >
        {companies.map((company, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-gray-50 border border-gray-100/80 rounded-2xl p-4 mx-4 shadow-sm min-w-[220px] cursor-pointer hover:border-indigo-100 hover:bg-white transition-all duration-200"
          >
            <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-gray-800 tracking-tight">
                {company.name}
              </h3>
              <p className="text-[11px] text-gray-400 font-medium mt-0.5">
                {company.jobs}
              </p>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default CompanyMarquee;
