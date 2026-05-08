"use client";

import {
  FiCode, FiHome, FiCpu, FiBookOpen,
  FiLayout, FiMessageSquare,
 FiMenu
} from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainLinks = [
    { name: "Home", href: "/", icon: <FiHome /> },
    { name: "Tech", href: "#skills", icon: <FiCpu /> }, 
    { name: "Education", href: "/qualification", icon: <FiBookOpen /> },
    { name: "Projects", href: "#projects", icon: <FiLayout /> },
    { name: "Contact", href: "#contact", icon: <FiMessageSquare /> },
  ];

  return (
   
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-4 md:px-10 ${
      isScrolled 
      ? "bg-white/90 dark:bg-[#020617]/80 py-3 backdrop-blur-xl border-b border-slate-200 dark:border-purple-500/20 shadow-sm" 
      : "py-6 bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">


        <div className="flex-none">
          <Link href="/" className="flex items-center gap-2 md:gap-3 text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tighter group">
            <div className="p-1.5 md:p-2 bg-purple-600/10 rounded-lg group-hover:bg-purple-600/20 border border-purple-600/20 transition-all">
              <FiCode className="text-purple-600 text-xl md:text-2xl" />
            </div>
            <span className="group-hover:text-purple-600 transition-colors hidden sm:block">
              FARDIN<span className="text-purple-600">.</span>DEV
            </span>
          </Link>
        </div>


        <div className={`hidden lg:flex items-center gap-1 p-1 rounded-2xl border transition-all duration-500
          ${isScrolled
            ? "bg-white/50 dark:bg-white/5 border-slate-200 dark:border-white/10 shadow-sm"
            : "bg-slate-100/50 dark:bg-white/5 backdrop-blur-md border-transparent"}`}>
          <ul className="flex items-center gap-1">
            {mainLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link href={link.href} className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                        isActive
                        ? "bg-purple-600 text-white shadow-md shadow-purple-600/20"
                        : "text-slate-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-white hover:bg-purple-50 dark:hover:bg-white/5"
                      }`}>
                    {link.icon} {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden sm:block">
            <Link href="/contact" className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-purple-600/20 active:scale-95">
              Hire Me
            </Link>
          </div>
          
          <div className="bg-slate-100 dark:bg-white/5 p-1 rounded-xl border border-slate-200 dark:border-white/10">
            <ThemeToggle />
          </div>


          <div className="lg:hidden dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle text-slate-900 dark:text-white hover:bg-purple-50 dark:hover:bg-white/10">
              <FiMenu size={24} />
            </label>
            <ul tabIndex={0} className="dropdown-content mt-4 z-[1] p-2 shadow-2xl bg-white dark:bg-[#0b0f1a] border border-slate-200 dark:border-purple-500/20 rounded-2xl w-56 space-y-1">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-white/5 hover:text-purple-600">
                    {link.icon} {link.name}
                  </Link>
                </li>
              ))}
              <div className="h-[1px] bg-slate-100 dark:bg-white/10 my-2 mx-4"></div>
              <li>
                <Link href="/contact" className="flex items-center justify-center bg-purple-600 text-white mx-2 py-3 rounded-xl font-bold">
                  Hire Me
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
}