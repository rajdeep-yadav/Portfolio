"use client";

import { motion } from "framer-motion";
import { education } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="py-32 px-6 max-w-6xl mx-auto border-t border-border/50">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        {/* Left: Section Marker */}
        <div className="w-full md:w-1/4">
          <div className="flex items-center gap-4 sticky top-32">
            <span className="text-sm font-mono text-muted uppercase tracking-widest">06 / Education</span>
            <div className="h-[1px] flex-grow bg-border/50 md:hidden"></div>
          </div>
        </div>
        
        {/* Right: Content */}
        <div className="w-full md:w-3/4">
          <div className="relative border-l border-border/30 ml-2 space-y-16">
            {education.map((edu, index) => (
              <motion.div 
                key={index} 
                className="relative pl-10 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-border group-hover:bg-accent group-hover:shadow-[0_0_8px_var(--accent)] transition-all duration-300" />
                
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-4">
                  <div className="text-xs font-mono text-muted group-hover:text-accent transition-colors duration-300 w-32 shrink-0">
                    {edu.duration}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 tracking-tight">{edu.degree}</h3>
                    <div className="text-muted mt-1">{edu.institution}</div>
                  </div>
                </div>
                
                <div className="md:ml-[152px]">
                  
                  {edu.status && (
                    <div className="mb-4 inline-flex items-center gap-3 bg-muted/5 border border-border/40 px-4 py-2 rounded-md text-xs font-mono text-foreground uppercase tracking-widest">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                      {edu.status}
                    </div>
                  )}

                  {edu.performance && (
                    <div className="mb-4 inline-flex items-center gap-2 bg-muted/5 border border-border/40 px-4 py-2 rounded-md text-sm font-mono text-foreground ml-3">
                      <span className="text-muted mr-2">PERFORMANCE:</span>
                      {edu.performance}
                    </div>
                  )}

                  <p className="text-foreground/70 leading-relaxed font-light max-w-2xl mt-2">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
