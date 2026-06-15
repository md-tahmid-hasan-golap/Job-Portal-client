"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const JobFaq = () => {
  // টাইপস্ক্রিপ্টের কোড সরিয়ে একদম প্লেইন জাভাস্ক্রিপ্ট স্টেট করা হলো
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "Is it free to apply for jobs here?",
      a: "Yes, completely! Candidates can create profiles, search, and apply for any number of jobs without paying a single taka.",
    },
    {
      q: "How do I contact the HR directly?",
      a: "Once you open a specific job detail page, verified employer and HR email addresses or platform links are provided at the bottom.",
    },
    {
      q: "Can I post remote or international jobs?",
      a: "Absolutely. Our platform supports Full-time, Part-time, Hybrid, and fully Remote job categories globally.",
    },
    {
      q: "How long does the job review take?",
      a: "Once submitted, our internal moderation team verifies the company details and approves the job within 2 to 4 hours.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50/60 border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Got questions about our job portal? Find quick answers right here.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-gray-900 hover:bg-gray-50/50 transition-colors gap-4"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-indigo-600" : ""}`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-40 border-t border-gray-50" : "max-h-0"}`}
                >
                  <p className="p-5 text-sm text-gray-600 leading-relaxed bg-gray-50/30">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JobFaq;
