"use client";
import React, { useState } from 'react';
import { FiBookOpen, FiBriefcase, FiCalendar } from "react-icons/fi";
import DataList from './DataList';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  // আপনার শিক্ষা সংক্রান্ত তথ্য
  const educationData = [
    {
      title: "SSC (Science)",
      subtitle: "Khulna Zilla School, Khulna",
      date: "2013 - 2021",
    },
    {
      title: "HSC (Science)",
      subtitle: "Govt. Sundarban College, Khulna",
      date: "2021 - 2023",
    },
    {
      title: "Honours (Sociology)",
      subtitle: "Govt. B.L. College, Khulna",
      date: "2023 - Present",
    },
  ];

  // আপনার অভিজ্ঞতা সংক্রান্ত তথ্য
  const experienceData = [
    {
      title: "Help Desk Specialist",
      subtitle: "Professional Support",
      date: "2024 - Present",
    },
    {
      title: "Full-Stack Web Dev (MERN)",
      subtitle: "Programming Hero",
      date: "Jan 2026 - July 2026",
    },
  ];

  // এটি একটি ইন্টারনাল কম্পোনেন্ট যা ডেটা রেন্ডার করে


  return (
    <section className="py-24 px-6 transition-colors duration-300" id="qualification">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Qualification
          </h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-500 dark:text-slate-400 font-medium mt-4">My personal journey</p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center items-center gap-4 md:gap-12 mb-12">
          <button
            className={`flex items-center gap-3 px-6 py-3 rounded-2xl text-lg font-bold transition-all duration-300 ${
              toggleState === 1 
              ? "bg-purple-600 text-white shadow-xl shadow-purple-600/20" 
              : "text-slate-500 hover:bg-slate-100 dark:hover:bg-white/5"
            }`}
            onClick={() => setToggleState(1)}
          >
            <FiBookOpen className="text-xl" /> Education
          </button>
          
          <button
            className={`flex items-center gap-3 px-6 py-3 rounded-2xl text-lg font-bold transition-all duration-300 ${
              toggleState === 2 
              ? "bg-purple-600 text-white shadow-xl shadow-purple-600/20" 
              : "text-slate-500 hover:bg-slate-100 dark:hover:bg-white/5"
            }`}
            onClick={() => setToggleState(2)}
          >
            <FiBriefcase className="text-xl" /> Experience
          </button>
        </div>

        {/* Dynamic Content */}
        <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-700">
          {toggleState === 1 ? <DataList data={educationData} /> : <DataList data={experienceData} />}
        </div>
      </div>
    </section>
  );
};

export default Qualification;