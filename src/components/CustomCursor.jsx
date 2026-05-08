"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation"; 

const CustomCursor = () => {
  const mainCursorRef = useRef(null);
  const followerRef = useRef(null);
  const pathname = usePathname(); 

  useEffect(() => {

    const handleMouseOut = () => {
      gsap.to([mainCursorRef.current, followerRef.current], { opacity: 0 });
    };
    const handleMouseEnter = () => {
      gsap.to([mainCursorRef.current, followerRef.current], { opacity: 1 });
    };

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;

      gsap.to(mainCursorRef.current, {
        x: x,
        y: y,
        duration: 0.1,
        ease: "power2.out",
      });

      gsap.to(followerRef.current, {
        x: x,
        y: y,
        duration: 0.4, 
        ease: "power2.out",
      });
    };

    const handleHover = () => {
      gsap.to(mainCursorRef.current, { scale: 3, opacity: 0.2, duration: 0.3 });
      gsap.to(followerRef.current, { 
        scale: 1.8, 
        borderColor: "rgba(168, 85, 247, 1)", 
        backgroundColor: "rgba(168, 85, 247, 0.1)",
        duration: 0.3 
      });
    };

    const handleHoverOut = () => {
      gsap.to(mainCursorRef.current, { scale: 1, opacity: 1, duration: 0.3 });
      gsap.to(followerRef.current, { 
        scale: 1, 
        borderColor: "rgba(168, 85, 247, 0.4)", 
        backgroundColor: "transparent",
        duration: 0.3 
      });
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseOut);
    document.addEventListener("mouseenter", handleMouseEnter);

    const interactiveElements = document.querySelectorAll("a, button, .group, .cursor-pointer");
    
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleHoverOut);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseOut);
      document.removeEventListener("mouseenter", handleMouseEnter);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleHoverOut);
      });
    };
  }, [pathname]);

  return (
    <>

      <div 
        ref={mainCursorRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-purple-500 rounded-full z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_#a855f7] mix-blend-difference"
      />

      <div 
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-purple-500/40 rounded-full z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-colors duration-300 backdrop-blur-[1px]"
      />
    </>
  );
};

export default CustomCursor;