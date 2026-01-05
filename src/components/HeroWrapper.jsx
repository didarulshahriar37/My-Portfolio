"use client";

import { useState, useEffect } from "react";

const HeroWrapper = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = event.clientX - window.innerWidth / 2;
      const y = event.clientY - window.innerHeight / 2;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative overflow-hidden">

      {/* BACKGROUND GRID */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          animation: "moveGrid 20s linear infinite",
          transform: `translate(${mousePosition.x / 30}px, ${mousePosition.y / 30}px)`,
          // Fade out at the bottom
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* GLOW */}
      <div className="absolute -z-10 top-1/2 left-1/2 w-[60vmin] h-[60vmin] bg-cyan-500/20 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />

      {children}

      <style jsx>{`
        @keyframes moveGrid {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 80px 80px;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroWrapper;
