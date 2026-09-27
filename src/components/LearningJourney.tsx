"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { learningJourney, currentFocus } from "@/data/learningJourney";
import { ArrowRight } from "lucide-react";

export function LearningJourney() {
  const [hoveredTopic, setHoveredTopic] = useState<{catIndex: number, topIndex: number} | null>(null);

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto border-t border-border/50">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        {/* Left: Section Marker */}
        <div className="w-full md:w-1/4">
          <div className="flex items-center gap-4 sticky top-32">
            <span className="text-sm font-mono text-muted uppercase tracking-widest">Learning Journey</span>
            <div className="h-[1px] flex-grow bg-border/50 md:hidden"></div>
          </div>
        </div>
        
        {/* Right: Content */}
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            {learningJourney.map((category, catIndex) => (
              <div key={catIndex}>
                <h3 className="text-xs font-mono text-foreground uppercase tracking-widest border-b border-border/40 pb-4 mb-6">
                  {category.category}
                </h3>
                <ul className="space-y-4">
                  {category.topics.map((topic, topIndex) => {
                    const isHovered = hoveredTopic?.catIndex === catIndex && hoveredTopic?.topIndex === topIndex;
                    
                    return (
                      <motion.li 
                        key={topIndex}
                        className="relative"
                        onMouseEnter={() => setHoveredTopic({ catIndex, topIndex })}
                        onMouseLeave={() => setHoveredTopic(null)}
                      >
                        <div className={`flex items-center gap-3 transition-colors duration-300 cursor-default ${isHovered ? "text-accent" : "text-muted"}`}>
                          <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${isHovered ? "bg-accent shadow-[0_0_8px_var(--accent)]" : "bg-border"}`} />
                          <span className={`font-light tracking-wide transition-all duration-300 ${isHovered ? "translate-x-1" : ""}`}>
                            {topic.name}
                          </span>
                          <ArrowRight 
                            size={14} 
                            className={`transition-all duration-300 ${isHovered ? "opacity-100 translate-x-1" : "opacity-0 -translate-x-2"}`} 
                          />
                        </div>
                        
                        <AnimatePresence>
                          {isHovered && topic.tools && topic.tools.length > 0 && (
                            <motion.div
                              initial={{ opacity: 0, height: 0, marginTop: 0 }}
                              animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                              exit={{ opacity: 0, height: 0, marginTop: 0 }}
                              className="overflow-hidden ml-4 pl-4 border-l border-border/40"
                            >
                              <div className="flex flex-wrap gap-2 py-2">
                                {topic.tools.map((tool, i) => (
                                  <span key={i} className="text-[10px] font-mono text-muted bg-muted/10 border border-border/40 px-2 py-1 rounded">
                                    {tool}
                                  </span>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="inline-flex items-center gap-4 bg-muted/5 border border-border/40 px-6 py-4 rounded-md">
            <span className="text-xs font-mono text-muted uppercase tracking-widest">Current Focus</span>
            <span className="text-accent text-sm">→</span>
            <span className="text-sm font-medium tracking-wide text-foreground">{currentFocus}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
