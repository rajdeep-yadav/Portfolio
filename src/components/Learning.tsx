"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/achievements";

export function Learning() {
  const learningItems = [
    "Web Security",
    "CTFs",
    "Linux",
    "Offensive Security",
    "Security Tools",
    "DSA with Java",
    "Software Engineering"
  ];

  return (
    <section id="learning" className="py-32 px-6 max-w-6xl mx-auto border-t border-border/50">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        {/* Left: Section Marker */}
        <div className="w-full md:w-1/4">
          <div className="flex items-center gap-4 sticky top-32">
            <span className="text-sm font-mono text-muted uppercase tracking-widest">07 / Learning & Achievements</span>
            <div className="h-[1px] flex-grow bg-border/50 md:hidden"></div>
          </div>
        </div>
        
        {/* Right: Content Split */}
        <div className="w-full md:w-3/4 flex flex-col md:flex-row gap-16 md:gap-24">
          
          {/* Currently Learning */}
          <div className="w-full md:w-1/2 space-y-8">
            <h3 className="text-sm font-mono text-foreground uppercase tracking-widest border-b border-border/40 pb-4">
              Currently Learning
            </h3>
            <ul className="space-y-4">
              {learningItems.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 text-muted hover:text-foreground transition-colors group cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-accent group-hover:shadow-[0_0_8px_var(--accent)] transition-all" />
                  <span className="font-light tracking-wide">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          <div className="w-full md:w-1/2 space-y-8">
            <h3 className="text-sm font-mono text-foreground uppercase tracking-widest border-b border-border/40 pb-4">
              Achievements
            </h3>
            <ul className="space-y-8">
              {achievements.map((achievement, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group border border-border/40 rounded-xl p-6 bg-card hover:border-accent/50 hover:bg-muted/5 transition-all duration-300 shadow-sm"
                >
                  <div className="text-xs font-mono text-muted mb-2 group-hover:text-accent transition-colors">{achievement.year}</div>
                  <h4 className="text-foreground font-medium mb-3 tracking-tight">{achievement.title}</h4>
                  <p className="text-sm text-foreground/60 font-light leading-relaxed">{achievement.description}</p>
                </motion.li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
