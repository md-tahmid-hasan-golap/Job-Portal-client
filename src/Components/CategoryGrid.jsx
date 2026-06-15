"use client";
import React from "react";
import { Code, Palette, Briefcase, BarChart, ArrowRight } from "lucide-react";

const CategoryGrid = () => {
  const categories = [
    {
      name: "Development",
      count: "120+ Jobs",
      icon: Code,
      color: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      name: "Design & Creative",
      count: "45+ Jobs",
      icon: Palette,
      color: "bg-purple-50 text-purple-600 border-purple-100",
    },
    {
      name: "Management",
      count: "32+ Jobs",
      icon: Briefcase,
      color: "bg-amber-50 text-amber-600 border-amber-100",
    },
    {
      name: "Marketing & Sales",
      count: "78+ Jobs",
      icon: BarChart,
      color: "bg-green-50 text-green-600 border-green-100",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
            Browse Jobs by Category
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Find your next career move based on your core professional
            expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-indigo-100 hover:shadow-md transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center border ${cat.color} mb-5 font-semibold`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-gray-400 mt-1">{cat.count}</p>
                <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-indigo-600">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
