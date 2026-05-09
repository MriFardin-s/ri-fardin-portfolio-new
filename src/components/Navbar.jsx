"use client";

import {
  FiCode, FiHome, FiCpu, FiBookOpen,
  FiLayout, FiMessageSquare, FiMenu,
  FiUser, FiShield, FiBriefcase, FiChevronDown, FiStar, FiX
} from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";
// import Logo from "../assets/Logo.png";
// import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const moreRef = useRef(null);
  const mobileRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setMoreOpen(false);
      }
      if (mobileRef.current && !mobileRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const mainLinks = [
    { name: "Home", href: "/", icon: <FiHome className="text-amber-400" /> },
    { name: "Tech Stack", href: "#skills", icon: <FiCpu className="text-cyan-400" /> },
    { name: "Qualification", href: "#qualification", icon: <FiBookOpen className="text-purple-400" /> },
    { name: "Projects", href: "#projects", icon: <FiLayout className="text-orange-400" /> },
    { name: "Contact Me", href: "#contact", icon: <FiMessageSquare className="text-pink-400" /> },
  ];

  const moreLinks = [
    { name: "About Me", href: "#about", icon: <FiUser /> },
    { name: "Skills", href: "#skill-level", icon: <FiShield /> },
    { name: "Services", href: "#services", icon: <FiBriefcase /> },
    { name: "Testimonials", href: "#testimonials", icon: <FiStar /> },
  ];

  return (
    <nav className={`fixed top-4 left-0 w-full z-[100] transition-all duration-500 px-4 md:px-10`}>
      <div className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 px-6 py-3 rounded-full border ${isScrolled
          ? "bg-white/80 dark:bg-[#020617]/80 backdrop-blur-xl border-slate-200 dark:border-purple-500/20 shadow-lg"
          : "bg-white/10 dark:bg-white/5 backdrop-blur-md border-white/10"
        }`}>

        {/* Logo */}

{/* 
        <Link href="/" className="group">
          <Image 
  src={Logo} 
  alt="Logo" 
  className="w-[110px] h-[110px] object-contain scale-125 transition-transform" 
/>
        </Link> */}


        <div className="flex-none">
          <Link href="/" className="flex items-center gap-2 text-xl font-black text-slate-900 dark:text-white tracking-tighter group">
            <div className="p-1.5 bg-purple-600/10 rounded-lg group-hover:bg-purple-600/20 border border-purple-600/20 transition-all">
              <FiCode className="text-purple-600 text-xl" />
            </div>
            <span className="group-hover:text-purple-600 transition-colors hidden sm:block">
              FARDIN<span className="text-purple-600">.</span>DEV
            </span>
          </Link>
        </div>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-1">
          <ul className="flex items-center gap-1">
            {mainLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all hover:bg-black/5 dark:hover:bg-white/5 ${pathname === link.href ? "text-purple-500 bg-purple-500/10" : "text-slate-600 dark:text-gray-300"
                  }`}>
                  {link.icon} {link.name}
                </Link>
              </li>
            ))}

            {/* More dropdown */}
            <div className="relative" ref={moreRef}>
              <button
                onClick={() => setMoreOpen((o) => !o)}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-slate-600 dark:text-gray-300 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-all"
              >
                <FiMenu className="text-blue-400" /> More
                <FiChevronDown className={`transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`} />
              </button>

              {moreOpen && (
                <ul className="absolute right-0 mt-2 z-[200] p-2 shadow-xl bg-white dark:bg-[#0b0f1a] border border-slate-200 dark:border-purple-500/20 rounded-2xl w-48">
                  {moreLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        onClick={() => setMoreOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs text-slate-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-white/5 hover:text-purple-600 transition-all"
                      >
                        {link.icon} {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </ul>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <Link href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full font-bold text-xs transition-all shadow-lg shadow-purple-600/20">
              Hire Me
            </Link>
          </div>

          <ThemeToggle />

          {/* Mobile hamburger */}
          <div className="lg:hidden relative" ref={mobileRef}>
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="p-2 rounded-full text-slate-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all"
            >
              {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            {mobileOpen && (
              <ul className="absolute right-0 mt-4 z-[200] p-2 shadow-2xl bg-white dark:bg-[#0b0f1a] border border-slate-200 dark:border-purple-500/20 rounded-2xl w-64 space-y-1">
                {[...mainLinks, ...moreLinks].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-slate-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-white/5 hover:text-purple-600"
                    >
                      {link.icon} {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

      </div>
    </nav>
  );
}