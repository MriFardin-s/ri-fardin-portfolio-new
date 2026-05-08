"use client";
import React from 'react';
import { FaGithub } from 'react-icons/fa'; 
import { FiExternalLink } from 'react-icons/fi'; 
import project1Img from '../assets/qurbani-hut.png';
import project2Img from '../assets/ri-digi.png';
import project3Img from '../assets/book-vibe.png';
import Image from 'next/image';

const projects = [
  {
    title: "Livestock Marketplace (Qurbani Hut)",
    description: "A real-time livestock marketplace with category filtering and dynamic search.",
    image: project1Img, 
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/MriFardin-s/ri-ecommerce-site",
    live: "https://ri-ecommerce-site.vercel.app/"
  },
  {
    title: "Ri-DigiApp: Product Management",
    description: "A digital product management tool featuring interactive product cards and cart systems.",
    image: project2Img,
    tags: ["MERN Stack", "Tailwind CSS", "DaisyUI"],
    github: "https://github.com/MriFardin-s/Ri-DigiApp",
    live: "https://ri-digi-app.netlify.app/"
  },
  {
    title: "BookVibe: Personal Library",
    description: "A sleek book repository application to manage your personal reading list.",
    image: project3Img,
    tags: ["React", "Lucide-React", "Tailwind"],
    github: "https://github.com/MriFardin-s/Ri-BookVibe",
    live: "https://ri-book-vibe.netlify.app/"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#020617] px-6 relative overflow-hidden transition-colors duration-500">
      

      <div className="absolute top-1/4 -right-20 w-[400px] h-[400px] bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
  
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">
            My <span className="text-purple-600">Projects</span>
          </h2>
          <p className="text-slate-500 dark:text-gray-500 font-medium uppercase tracking-widest text-sm">Recent Works</p>
        </div>

  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-50 dark:bg-[#0b0f1a] border border-slate-200 dark:border-white/5 rounded-[32px] overflow-hidden flex flex-col h-full shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-purple-500/30 hover:-translate-y-2"
            >
        
              <div className="relative h-60 w-full overflow-hidden">
       
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-[#0b0f1a] via-transparent to-transparent z-10" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

    
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-purple-600 dark:group-hover:text-purple-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-purple-600/5 dark:bg-purple-500/10 border border-purple-600/10 dark:border-purple-500/20 rounded-lg text-[10px] text-purple-600 dark:text-purple-300 font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

  
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    target="_blank"             
                    rel="noopener noreferrer"   
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-200 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 rounded-xl text-slate-900 dark:text-white text-xs font-bold transition-all"
                  >
                    <FaGithub className="text-lg" /> GitHub
                  </a>

                  <a 
                    href={project.live}
                    target="_blank"                
                    rel="noopener noreferrer"   
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl text-white text-xs font-bold transition-all shadow-lg shadow-purple-600/20 active:scale-95"
                  >
                    <FiExternalLink className="text-lg" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;