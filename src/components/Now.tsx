"use client";

import { motion } from "framer-motion";
import { now } from "@/data/now";

export function Now() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        {/* Left: Section Marker */}
        <div className="w-full md:w-1/4">
          <div className="flex items-center gap-4 sticky top-32">
            <span className="text-sm font-mono text-muted uppercase tracking-widest">NOW</span>
            <div className="h-[1px] flex-grow bg-border/50 md:hidden"></div>
          </div>
        </div>
        
        {/* Right: Content */}
        <div className="w-full md:w-3/4">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8 text-sm md:text-base font-light"
          >
            <div className="flex flex-col md:flex-row gap-2 md:gap-8">
              <span className="w-40 shrink-0 font-mono text-muted uppercase text-xs tracking-widest pt-1">Currently learning</span>
              <span className="text-foreground/90">{now.learning.join(" · ")}</span>
            </div>
            
            <div className="h-[1px] w-full bg-border/30"></div>
            
            <div className="flex flex-col md:flex-row gap-2 md:gap-8">
              <span className="w-40 shrink-0 font-mono text-muted uppercase text-xs tracking-widest pt-1">Currently building</span>
              <span className="text-foreground/90">{now.building.join(" · ")}</span>
            </div>
            
            <div className="h-[1px] w-full bg-border/30"></div>
            
            <div className="flex flex-col md:flex-row gap-2 md:gap-8">
              <span className="w-40 shrink-0 font-mono text-muted uppercase text-xs tracking-widest pt-1">Currently exploring</span>
              <span className="text-foreground/90">{now.exploring.join(" · ")}</span>
            </div>
            
            <div className="h-[1px] w-full bg-border/30"></div>
            
            <div className="flex flex-col md:flex-row gap-2 md:gap-8">
              <span className="w-40 shrink-0 font-mono text-muted uppercase text-xs tracking-widest pt-1">Open to</span>
              <span className="text-foreground/90 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_var(--accent)]" />
                {now.status}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
