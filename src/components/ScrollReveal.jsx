"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({ children, x = 0, y = 30, scale = 1, opacity = 0 }) => {
  const elementRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {

    ScrollTrigger.refresh();

    const ctx = gsap.context(() => {
      gsap.from(elementRef.current, {
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        x: x,
        y: y,
        scale: scale,
        opacity: opacity,
        duration: 0.8,
        ease: "power2.out",
      });
    });

    return () => {
      ctx.revert();
     
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [pathname, x, y, scale, opacity]);

  return <div ref={elementRef}>{children}</div>;
};

export default ScrollReveal;