"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = [
    {
      title: "LANGUAGES",
      skills: [
        { name: "Python", projects: ["ARGUS"] },
        { name: "Java", projects: [] },
        { name: "JavaScript", projects: ["PRAXIS"] },
        { name: "TypeScript", projects: ["Triage.OS"] },
        { name: "HTML", projects: [] },
        { name: "CSS", projects: [] },
      ]
    },
    {
      title: "DEVELOPMENT",
      skills: [
        { name: "React", projects: ["ARGUS", "PRAXIS"] },
        { name: "Next.js", projects: [] },
        { name: "Node.js", projects: ["PRAXIS"] },
        { name: "Express.js", projects: [] },
        { name: "Vite", projects: ["PRAXIS"] },
        { name: "Tailwind CSS", projects: ["PRAXIS"] },
      ]
    },
    {
      title: "DATABASE / BACKEND",
      skills: [
        { name: "MongoDB", projects: ["PRAXIS"] },
        { name: "MongoDB Atlas", projects: ["PRAXIS"] },
        { name: "Mongoose", projects: ["PRAXIS"] },
        { name: "Supabase", projects: ["PRAXIS", "Triage.OS"] },
      ]
    },
    {
      title: "CYBERSECURITY",
      skills: [
        { name: "Nmap", projects: [] },
        { name: "Wireshark", projects: [] },
        { name: "Burp Suite", projects: [] },
        { name: "Linux", projects: [] },
        { name: "Web Security", projects: [] },
        { name: "CTF Practice", projects: [] },
      ]
    },
    {
      title: "TOOLS",
      skills: [
        { name: "Git", projects: [] },
        { name: "GitHub", projects: ["ARGUS", "PRAXIS", "Triage.OS"] },
        { name: "VS Code", projects: [] },
        { name: "Vercel", projects: ["Triage.OS"] },
      ]
    }
  ];

  // Helper to determine if a skill should be highlighted based on hover
  const getSkillState = (skillName: string) => {
    if (!hoveredSkill) return "text-muted border-border/40 hover:text-foreground hover:border-accent/40 bg-transparent";
    if (hoveredSkill === skillName) return "text-foreground border-accent bg-accent/5";
    return "text-muted/30 border-border/20 bg-transparent";
  };

  return (
    <section id="skills" className="py-32 px-6 max-w-6xl mx-auto border-t border-border/50">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        {/* Left: Section Marker */}
        <div className="w-full md:w-1/4">
          <div className="flex items-center gap-4 sticky top-32">
            <span className="text-sm font-mono text-muted uppercase tracking-widest">05 / Skills</span>
            <div className="h-[1px] flex-grow bg-border/50 md:hidden"></div>
          </div>
        </div>
        
        {/* Right: Content Toolkit */}
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {categories.map((category, idx) => (
              <div key={idx}>
                <h3 className="text-sm font-mono text-foreground uppercase tracking-widest border-b border-border/40 pb-4 mb-6">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: sIdx * 0.05 }}
                      className={`relative cursor-default px-4 py-2 rounded-md text-sm font-mono transition-all duration-300 border ${getSkillState(skill.name)}`}
                    >
                      {skill.name}
                      
                      {/* Floating project connection tooltip */}
                      {hoveredSkill === skill.name && skill.projects.length > 0 && (
                        <div className="absolute top-full mt-2 left-0 z-10 w-max pointer-events-none">
                          <div className="bg-card border border-border/50 shadow-xl rounded p-3 text-xs font-mono text-muted">
                            <span className="text-foreground/50 block mb-1">USED IN:</span>
                            {skill.projects.map(p => (
                              <div key={p} className="flex items-center gap-2">
                                <span className="text-accent">→</span> {p}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
