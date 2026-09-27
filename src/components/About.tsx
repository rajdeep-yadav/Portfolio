"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-6xl mx-auto border-t border-border/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row gap-12 md:gap-24"
      >
        {/* Left: Section Marker */}
        <div className="w-full md:w-1/4">
          <div className="flex items-center gap-4 sticky top-32">
            <span className="text-sm font-mono text-muted uppercase tracking-widest">01 / About</span>
            <div className="h-[1px] flex-grow bg-border/50 md:hidden"></div>
          </div>
        </div>
        
        {/* Right: Content */}
        <div className="w-full md:w-3/4">
          <div className="text-2xl md:text-3xl text-foreground/90 leading-relaxed font-light space-y-10 max-w-3xl">
            <p>
              I’m a second-year Computer Science Engineering student specializing in Cybersecurity at Thakur College of Engineering and Technology. I enjoy building practical software, understanding how systems work underneath, and then looking at the same systems from a security perspective.
            </p>
            <p>
              My work sits at the intersection of software development and cybersecurity. I’ve worked on full-stack projects, hackathon solutions, healthcare technology, and practical learning platforms while gradually building my foundation in Linux, web security, CTFs, and security tooling.
            </p>
            <p>
              I learn best by building. Whether I’m designing an application, working through a technical problem, or testing how a system can fail, I’m interested in understanding the reasoning behind the technology—not just using the tools.
            </p>
            <p className="text-xl md:text-2xl">
              Currently, I’m focused on becoming stronger in software engineering, web security, and hands-on cybersecurity.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 pt-12 border-t border-border/30 text-sm font-mono">
            <div className="flex flex-col gap-2">
              <span className="text-muted">Location</span>
              <span className="text-foreground">Mumbai</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-muted">Education</span>
              <span className="text-foreground">TCET</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-muted">Focus</span>
              <span className="text-foreground">CSE Cybersecurity</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-muted">Status</span>
              <span className="flex items-center gap-2 text-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent)] animate-pulse" />
                Open to opportunities
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
