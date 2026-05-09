'use client'

import Image from "next/image";
import { FiSend, FiLinkedin, FiGithub, FiTwitter, FiInstagram } from "react-icons/fi";
import heroImg from "../assets/hero.png";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [activeBtn, setActiveBtn] = useState('hello');

  return (
    <div>

      <section className="min-h-screen bg-white dark:bg-[#020617] relative overflow-hidden px-6 md:px-16 flex flex-col justify-start pt-20 md:pt-28 transition-colors duration-500">


        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 dark:bg-purple-600/15 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-900/5 dark:bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row-reverse items-start justify-between gap-12 z-10">


          <div className="relative group flex-1 flex justify-center lg:justify-end">

            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-purple-800/10 dark:from-purple-500/30 dark:to-purple-800/20 rounded-full blur-[60px] opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>

            <div className="relative flex justify-center items-center">
              <Image
                src={heroImg}
                width={500}
                height={500}
                alt="Ri Fardin"
                priority
                className="transform transition-all duration-700 hover:scale-105 drop-shadow-[0_0_25px_rgba(168,85,247,0.1)] relative z-10 object-cover aspect-square [mask-image:radial-gradient(circle_at_center,black_40%,transparent_75%)]"
              />
            </div>
          </div>

          <div className="flex flex-row items-start gap-10 md:gap-20 flex-1">
            <div className="hidden sm:flex flex-col gap-6 text-xl text-slate-400 dark:text-gray-500 mt-4 border-r border-slate-200 dark:border-white/5 pr-6">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/m-rabbi-islam-fardin-23a3a4264"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-container hover:text-brand"
              >
                <FiLinkedin />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/MriFardin-s"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-container hover:text-brand"
              >
                <FiGithub />
              </a>

              {/* Twitter */}
              <a
                href="https://x.com/rifardin23"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-container hover:text-brand"
              >
                <FiTwitter />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/ri_fardin_/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-container hover:text-brand"
              >
                <FiInstagram />
              </a>
            </div>

            <div className="space-y-6">

              <div className="space-y-2">
                <h3 className="text-purple-600 dark:text-purple-500 font-medium tracking-widest uppercase text-sm md:text-base">
                  Welcome to my world
                </h3>

                <div className="flex items-center flex-wrap gap-x-4">
                  <div className="relative inline-block">

                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tighter leading-tight">
                      Ri Fardin
                    </h1>
                    <div className="h-1.5 bg-purple-600 rounded-full mt-[-8px] md:mt-[-12px] w-full shadow-[0_0_15px_rgba(147,51,234,0.3)] dark:shadow-[0_0_15px_rgba(147,51,234,0.5)]"></div>
                  </div>
                  <span className="inline-block animate-bounce origin-bottom text-4xl md:text-7xl">
                    👋
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-xl md:text-3xl text-slate-700 dark:text-gray-300 font-light flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-purple-500/30 dark:bg-purple-500/50"></span>
                  <p>
                    I am a <span className="text-purple-600 dark:text-purple-500 font-bold">
                      <Typewriter
                        words={['Web Designer', 'Web Developer', 'Problem Solver']}
                        loop={0}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={2000}
                      />
                    </span>
                  </p>
                </div>

                <p className="text-slate-600 dark:text-gray-400 max-w-lg leading-relaxed text-base md:text-lg">
                  🚀 <span className="text-slate-900 dark:text-white font-medium">Turning ideas into Stunning Websites.</span> Specialized in building high-performance web applications using the <span className="text-purple-600 dark:text-purple-400 font-semibold">MERN Stack</span>.
                </p>
              </div>


              <div className="pt-4 flex flex-wrap gap-5">
                <Link
                  href="#contact"
                  onClick={() => setActiveBtn('hello')}
                  className={`group relative flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg 
      ${activeBtn === 'hello'
                      ? 'bg-purple-600 text-white shadow-purple-500/25 scale-105'
                      : 'border border-purple-500/30 text-slate-800 dark:text-white hover:bg-purple-500/10'}`}
                >
                  Say Hello
                  <FiSend className={`transition-transform duration-300 ${activeBtn === 'hello' ? 'group-hover:translate-x-1 group-hover:-translate-y-1' : ''}`} />
                </Link>

                {/* View Work Link */}
                <Link
                  href="#projects"
                  onClick={() => setActiveBtn('work')}
                  className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 
      ${activeBtn === 'work'
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25 scale-105'
                      : 'border border-purple-500/30 text-slate-800 dark:text-white hover:bg-purple-500/10'}`}
                >
                  View Work -
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}