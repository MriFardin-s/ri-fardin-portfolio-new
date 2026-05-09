"use client";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import SkillLevel from "@/components/SkillLevel";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import AboutSection from "@/components/AboutSection";
import Qualification from "@/components/Qualification";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="bg-white dark:bg-[#020617] bg-gradient-to-b from-transparent via-purple-950/5 to-transparent min-h-screen pt-24 text-black dark:text-white overflow-x-hidden relative transition-colors duration-500">
      

      <div className="hidden dark:block absolute top-[10%] -left-24 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="hidden dark:block absolute top-[40%] -right-24 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Hero Section */}
        <section className="relative z-10">
       <Hero/>
        </section>

        
    

        {/* Skills & Technologies */}
        <section id="" className="mt-32 relative z-10">
          <AboutSection/>
        </section>
        <section id="skills" className="mt-32 relative z-10">
          <Skills/>
        </section>

        {/* Skill Levels */}
        <section id="skill-level" className="mt-32 relative z-10">
          <SkillLevel/>
        </section>
        <section id="qualification" className="mt-32 relative z-10">
          <Qualification/>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-32 relative z-10">
          <Projects />
        </section>

        {/* Contact Section */}
        <section id="contact" className="mt-32 mb-32 relative z-10">
          <Contact/>
        </section>
        
      </div>

      {/* Footer */}
      <Footer/>
      
    </main>
  );
}