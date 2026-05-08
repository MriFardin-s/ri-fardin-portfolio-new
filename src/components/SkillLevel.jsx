"use client";
import React, { useState } from 'react';
import { FiCheckCircle, FiX } from 'react-icons/fi';

const SkillLevel = () => {
  const [activeCard, setActiveCard] = useState(null);

  const frontendSkills = [
    { name: "HTML5", level: "Expert" },
    { name: "Next.JS", level: "Expert" },
    { name: "TypeScript", level: "Expert" },
    { name: "Tailwind Css", level: "Intermediate" },
    { name: "JavaScript", level: "Expert" },
    { name: "React.JS", level: "Expert" },
  ];

  const backendSkills = [
    { name: "Node.JS", level: "Expert" },
    { name: "SQL", level: "Intermediate" },
    { name: "Express.JS", level: "Expert" },
    { name: "Docker", level: "Intermediate" },
    { name: "MongoDB", level: "Expert" },
    { name: "Kubernetes", level: "Intermediate" },
  ];

  const renderSkills = (skills) => (
    <div className="grid grid-cols-2 gap-y-8 gap-x-4">
      {skills.map((skill, index) => (
        <div key={index} className="flex items-start gap-3 group">
          <FiCheckCircle className="text-purple-600 dark:text-purple-500 mt-1 text-lg flex-shrink-0 group-hover:scale-110 transition-transform" />
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold leading-none text-sm md:text-base group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              {skill.name}
            </h4>
            <p className="text-slate-500 dark:text-gray-500 text-xs mt-2 font-medium">{skill.level}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (

    <section id="skills" className="py-24 bg-white dark:bg-[#020617] px-6 relative overflow-hidden transition-colors duration-500">
      

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      {activeCard && (
        <div 
          onClick={() => setActiveCard(null)}
          className="fixed inset-0 bg-slate-900/40 dark:bg-black/80 z-40 backdrop-blur-sm cursor-pointer transition-opacity duration-300"
        />
      )}

      <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">
          Technical <span className="text-purple-600">Level</span>
        </h2>
        <p className="text-slate-600 dark:text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
          Detailed proficiency in <span className="text-purple-600 dark:text-purple-400/80">frontend</span> and <span className="text-purple-600 dark:text-purple-400/80">backend</span> technologies.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 relative">

        <div
          onClick={() => setActiveCard(activeCard === 'frontend' ? null : 'frontend')}
          className={`p-8 md:p-12 rounded-[40px] shadow-xl backdrop-blur-md cursor-pointer relative transition-all duration-500 group border ${
            activeCard === 'frontend' 
            ? 'scale-105 z-50 bg-white dark:bg-white/10 border-purple-500 shadow-purple-500/20' 
            : 'bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 hover:border-purple-500/40 hover:shadow-purple-500/10'
          }`}
        >
          {activeCard === 'frontend' && (
            <button className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              <FiX size={24} />
            </button>
          )}

          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white text-center mb-12 tracking-tight">
            Frontend <span className="text-purple-600">Developer</span>
          </h3>
          
          {renderSkills(frontendSkills)}
          
          {!activeCard && (
            <p className="text-center text-purple-600/40 dark:text-purple-500/40 text-xs mt-10 animate-pulse font-medium">Click to expand</p>
          )}
        </div>

   
        <div
          onClick={() => setActiveCard(activeCard === 'backend' ? null : 'backend')}
          className={`p-8 md:p-12 rounded-[40px] shadow-xl backdrop-blur-md cursor-pointer relative transition-all duration-500 group border ${
            activeCard === 'backend' 
            ? 'scale-105 z-50 bg-white dark:bg-white/10 border-purple-500 shadow-purple-500/20' 
            : 'bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 hover:border-purple-500/40 hover:shadow-purple-500/10'
          }`}
        >
          {activeCard === 'backend' && (
            <button className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              <FiX size={24} />
            </button>
          )}

          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white text-center mb-12 tracking-tight">
            Backend <span className="text-purple-600">Developer</span>
          </h3>
          
          {renderSkills(backendSkills)}

          {!activeCard && (
            <p className="text-center text-purple-600/40 dark:text-purple-500/40 text-xs mt-10 animate-pulse font-medium">Click to expand</p>
          )}
        </div>

      </div>
    </section>
  );
};

export default SkillLevel;