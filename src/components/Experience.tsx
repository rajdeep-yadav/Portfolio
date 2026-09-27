"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6 max-w-6xl mx-auto border-t border-border/50">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        {/* Left: Section Marker */}
        <div className="w-full md:w-1/4">
          <div className="flex items-center gap-4 sticky top-32">
            <span className="text-sm font-mono text-muted uppercase tracking-widest">04 / Experience</span>
            <div className="h-[1px] flex-grow bg-border/50 md:hidden"></div>
          </div>
        </div>
        
        {/* Right: Content */}
        <div className="w-full md:w-3/4">
          <div className="relative border-l border-border/30 ml-2 space-y-16">
            {experience.map((exp, index) => (
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
                    {exp.duration}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 tracking-tight">{exp.role}</h3>
                    <div className="text-muted mt-1">{exp.company}</div>
                  </div>
                </div>
                
                <div className="md:ml-[152px]">
                  <p className="text-foreground/70 leading-relaxed font-light max-w-2xl">
                    {exp.description}
                  </p>

                  <div className="mt-8 space-y-8 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                    {exp.whatIDo && (
                      <div>
                        <h4 className="text-xs font-mono text-muted uppercase tracking-widest mb-3 flex items-center gap-2">
                          <span className="w-4 h-[1px] bg-accent"></span> What I Do
                        </h4>
                        <p className="text-foreground/80 leading-relaxed font-light text-sm max-w-2xl">{exp.whatIDo}</p>
                      </div>
                    )}
                    
                    {exp.responsibilities && exp.responsibilities.length > 0 && (
                      <div>
                        <h4 className="text-xs font-mono text-muted uppercase tracking-widest mb-3 flex items-center gap-2">
                          <span className="w-4 h-[1px] bg-accent"></span> Responsibilities
                        </h4>
                        <ul className="space-y-2 max-w-2xl">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start gap-3 text-foreground/80 font-light text-sm">
                              <span className="text-accent mt-0.5">▹</span>
                              <span className="leading-relaxed">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {exp.professionalDevelopment && (
                      <div>
                        <h4 className="text-xs font-mono text-muted uppercase tracking-widest mb-3 flex items-center gap-2">
                          <span className="w-4 h-[1px] bg-accent"></span> Professional Development
                        </h4>
                        <p className="text-foreground/80 leading-relaxed font-light text-sm max-w-2xl">{exp.professionalDevelopment}</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
