"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import { ArrowRight, FileText } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [gridCoords, setGridCoords] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);

  useEffect(() => {
    const section = containerRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMousePosition({ x, y });

      setGridCoords({
        x: Math.floor((x / rect.width) * 100),
        y: Math.floor((y / rect.height) * 100),
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseenter", handleMouseEnter);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseenter", handleMouseEnter);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const name = ["RAJDEEP", "YADAV"];

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative pt-32 sm:pt-40 pb-20 px-5 sm:px-6 max-w-6xl mx-auto flex flex-col justify-center min-h-[90vh] overflow-hidden"
    >
      <motion.div className="relative z-10 group max-w-4xl">
        {/* Name */}
        <div className="mb-4">
          <h1 className="font-black tracking-tighter text-foreground leading-[0.9] text-5xl sm:text-6xl md:text-8xl">
            {name.map((word, wordIndex) => (
              <span
                key={word}
                className={`block md:inline-block ${
                  wordIndex === 0 ? "md:mr-4" : ""
                }`}
              >
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${word}-${charIndex}`}
                    className="inline-block"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: (wordIndex * 7 + charIndex) * 0.03,
                      ease: [0.2, 0.65, 0.3, 0.9],
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>
        </div>

        {/* Role */}
        <motion.h2
          className="text-lg md:text-xl text-accent font-mono uppercase tracking-widest mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          CSE &bull; CYBERSECURITY
        </motion.h2>

        {/* Introduction */}
        <motion.p
          className="text-lg md:text-2xl text-muted max-w-2xl mb-12 leading-relaxed font-light"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Computer Science student building practical software and exploring
          how to secure, test, and break it.
        </motion.p>

        {/* Technical Metadata */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-16 text-xs font-mono text-muted uppercase tracking-wider"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {/* Location */}
          <div className="flex flex-col gap-1 min-w-0">
            <span className="text-foreground/50 border-b border-border/40 pb-1 mb-1">
              Location
            </span>
            <span className="text-foreground">
              {siteConfig.location}
            </span>
          </div>

          {/* Focus */}
          <div className="flex flex-col gap-1 min-w-0">
            <span className="text-foreground/50 border-b border-border/40 pb-1 mb-1">
              Focus
            </span>
            <span className="text-foreground">
              Cybersecurity
            </span>
          </div>

          {/* Education */}
          <div className="flex flex-col gap-1 min-w-0">
            <span className="text-foreground/50 border-b border-border/40 pb-1 mb-1">
              Education
            </span>
            <span className="text-foreground">
              TCET
            </span>
          </div>

          {/* Status */}
          <div className="flex flex-col gap-1 min-w-0">
            <span className="text-foreground/50 border-b border-border/40 pb-1 mb-1">
              Status
            </span>

            <span className="flex items-start gap-2 text-foreground">
              <span className="w-1.5 h-1.5 mt-1 rounded-full bg-accent shadow-[0_0_8px_var(--accent)] animate-pulse shrink-0" />

              <span>
                2nd Year • Open to Internship Opportunities
              </span>
            </span>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row sm:justify-start items-center gap-6"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {/* View My Work */}
          <a
            href="#projects"
            className="flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded font-medium hover:bg-accent hover:text-foreground hover:scale-[1.02] hover:shadow-[0_4px_20px_0_rgba(16,185,129,0.3)] transition-all duration-300 group/btn"
          >
            VIEW MY WORK

            <ArrowRight
              size={18}
              className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300"
            />
          </a>

          {/* Resume */}
          <button
            onClick={(e) => {
              if (!siteConfig.resume.available) {
                e.preventDefault();
                setShowResumeModal(true);
              } else {
                window.open(
                  siteConfig.resume.url,
                  "_blank",
                  "noopener,noreferrer"
                );
              }
            }}
            className="flex items-center gap-2 text-muted hover:text-foreground transition-all text-sm font-mono tracking-widest uppercase hover:bg-muted/10 px-6 py-4 rounded duration-300"
          >
            <FileText size={16} />
            Resume
          </button>
        </motion.div>
      </motion.div>

      {/* Resume Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card border border-border/40 p-8 rounded-lg max-w-sm w-full text-center shadow-2xl relative"
          >
            <div className="text-accent mb-4 flex justify-center">
              <FileText size={32} />
            </div>

            <h3 className="text-lg font-bold text-foreground mb-2">
              Resume is currently being updated.
            </h3>

            <p className="text-sm text-muted font-light mb-8">
              A full technical resume will be available soon.
            </p>

            <button
              onClick={() => setShowResumeModal(false)}
              className="w-full bg-foreground text-background py-3 rounded text-sm font-mono tracking-widest hover:bg-accent transition-colors duration-300"
            >
              CLOSE
            </button>
          </motion.div>
        </div>
      )}

      {/* Interactive Grid Field */}
      <div
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-1000"
        style={{
          opacity: isHovering ? 1 : 0.3,
        }}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--border) 1px, transparent 1px),
              linear-gradient(to bottom, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: "4rem 4rem",
            opacity: 0.15,
            maskImage: isHovering
              ? `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`
              : "none",
            WebkitMaskImage: isHovering
              ? `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`
              : "none",
          }}
        />

        {/* Floating Coordinates */}
        {isHovering && (
          <div
            className="absolute font-mono text-[10px] text-accent pointer-events-none transition-transform duration-75"
            style={{
              left: mousePosition.x + 15,
              top: mousePosition.y + 15,
            }}
          >
            X {String(gridCoords.x).padStart(3, "0")}
            <br />
            Y {String(gridCoords.y).padStart(3, "0")}
          </div>
        )}
      </div>
    </section>
  );
}
