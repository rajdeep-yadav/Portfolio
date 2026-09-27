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
            className="flex flex-col text-sm md:text-base font-light border border-border/40 rounded-xl overflow-hidden bg-card shadow-sm"
          >
            <div className="flex flex-col md:flex-row border-b border-border/40 hover:bg-muted/5 transition-colors">
              <div className="w-full md:w-1/3 p-6 md:border-r border-border/40 bg-muted/5">
                <span className="font-mono text-muted uppercase text-xs tracking-widest">Currently learning</span>
              </div>
              <div className="w-full md:w-2/3 p-6">
                <span className="text-foreground/90 font-medium">{now.learning.join(" · ")}</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row border-b border-border/40 hover:bg-muted/5 transition-colors">
              <div className="w-full md:w-1/3 p-6 md:border-r border-border/40 bg-muted/5">
                <span className="font-mono text-muted uppercase text-xs tracking-widest">Currently building</span>
              </div>
              <div className="w-full md:w-2/3 p-6">
                <span className="text-foreground/90 font-medium">{now.building.join(" · ")}</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row border-b border-border/40 hover:bg-muted/5 transition-colors">
              <div className="w-full md:w-1/3 p-6 md:border-r border-border/40 bg-muted/5">
                <span className="font-mono text-muted uppercase text-xs tracking-widest">Currently exploring</span>
              </div>
              <div className="w-full md:w-2/3 p-6">
                <span className="text-foreground/90 font-medium">{now.exploring.join(" · ")}</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row hover:bg-muted/5 transition-colors">
              <div className="w-full md:w-1/3 p-6 md:border-r border-border/40 bg-muted/5">
                <span className="font-mono text-muted uppercase text-xs tracking-widest">Open to</span>
              </div>
              <div className="w-full md:w-2/3 p-6 flex items-center">
                <span className="text-foreground/90 font-medium flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_var(--accent)]" />
                  {now.status}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
