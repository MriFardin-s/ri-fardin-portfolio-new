"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CustomCursor from "@/components/CustomCursor";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "@/components/ThemeProvider";

// GSAP প্লাগইন রেজিস্টার করা
gsap.registerPlugin(ScrollTrigger);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    // ১. Lenis স্মুথ স্ক্রল সেটআপ
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    // ২. GSAP এর সাথে Lenis কানেক্ট করা
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // ৩. ক্লিনআপ ফাংশন
    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <html
      lang="en"
      suppressHydrationWarning 
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-[#020617] text-slate-900 dark:text-white transition-colors duration-300 selection:bg-purple-500/30 selection:text-purple-200">
        
        {/* থিম প্রোভাইডার যা পুরো অ্যাপের লাইট/ডার্ক মোড কন্ট্রোল করবে */}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          
          {/* আপনার কাস্টম কার্সার কম্পোনেন্ট */}
          <CustomCursor />
          
          {/* নোটিফিকেশন কন্টেইনার */}
          <ToastContainer position="bottom-right" autoClose={3000} />
          
          {/* নেভিগেশন বার */}
          <Navbar />

          <main className="flex-grow overflow-x-hidden">
            {/* পেজ ট্রানজিশন এনিমেশন */}
            <AnimatePresence mode="wait">
              <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </main>
          
        </ThemeProvider>
        
      </body>
    </html>
  );
}