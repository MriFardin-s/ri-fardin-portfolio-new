"use client";
import React from 'react';
import { FiAward, FiBriefcase, FiHeadphones, FiFileText } from "react-icons/fi";
import { motion } from "framer-motion";

const AboutSection = () => {
  const stats = [
    {
      id: 1,
      icon: <FiAward className="text-amber-400" />, // Navbar style colorful icon
      title: "Experience",
      desc: "Help Desk Specialist", 
    },
    {
      id: 2,
      icon: <FiBriefcase className="text-cyan-400" />, 
      title: "Completed",
      desc: "MERN Stack Projects", 
    },
    {
      id: 3,
      icon: <FiHeadphones className="text-purple-400" />, 
      title: "Support",
      desc: "Online 24/7",
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="about">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          About <span className="text-purple-600">Me</span>
        </h2>
        <div className="h-1.5 w-16 bg-purple-600 mx-auto mt-4 rounded-full"></div>
        <p className="text-slate-500 dark:text-slate-400 font-medium mt-4 uppercase tracking-widest text-sm">
          My Introduction
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="p-6 rounded-3xl bg-white/50 dark:bg-[#020617]/40 backdrop-blur-md border border-slate-200 dark:border-purple-500/20 flex flex-col items-center text-center shadow-xl shadow-purple-500/5 transition-all"
            >
              <span className="text-3xl mb-3">{item.icon}</span>
              <h3 className="text-sm font-bold dark:text-white text-slate-900 mb-1">{item.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-tight">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <div className="p-1 inline-block rounded-lg bg-purple-600/10 border border-purple-600/20 mb-2">
            <span className="px-3 py-1 text-xs font-bold text-purple-600 uppercase tracking-tighter">
              Aspiring Web Developer
            </span>
          </div>
          
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            I am a second-year <span className="text-slate-900 dark:text-white font-bold underline decoration-purple-500/30">Sociology student</span> at Govt. B.L. College with a deep passion for Full-Stack Web Development. 
            Currently serving as a <span className="text-purple-600 font-bold">Help Desk Specialist</span>, 
            I am bridging the gap between hardware support and software engineering.
          </p>

          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            With expertise in the <span className="text-purple-600 font-bold">MERN Stack</span>, I focus on building high-performance applications that solve real-world problems. My journey from social sciences to technology drives my unique perspective on user-centric design.
          </p>

          {/* Action Button */}
          <div className="pt-4 flex flex-wrap gap-4">
            <button className="group relative flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-purple-600/25 active:scale-95 overflow-hidden">
              <span className="relative z-10">Download CV</span>
              <FiFileText className="text-xl relative z-10 group-hover:rotate-12 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
            </button>
            
            <a href="#contact" className="flex items-center gap-2 px-8 py-4 rounded-2xl font-bold border border-slate-200 dark:border-purple-500/20 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;