"use client";

import { useState, useEffect } from "react";
import { projects } from "@/data/projects";
import { ArrowRight, X, Code, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [selectedProject]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject !== null) {
      setSelectedProject((selectedProject + 1) % projects.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject !== null) {
      setSelectedProject((selectedProject - 1 + projects.length) % projects.length);
    }
  };

  return (
    <section id="projects" className="py-32 px-6 max-w-4xl mx-auto border-t border-border/50 relative">
      <motion.div 
        className="flex items-center gap-4 mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <span className="text-sm font-mono text-muted uppercase tracking-widest">03 / Projects</span>
        <div className="h-[1px] w-12 bg-border/50"></div>
      </motion.div>
      
      {/* Floating Project Recon Preview Removed */}

      <div className="space-y-32">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="group relative cursor-pointer border border-border/40 rounded-xl p-8 md:p-12 bg-card hover:border-accent/50 hover:bg-muted/5 transition-all duration-300 shadow-sm hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
            onClick={() => setSelectedProject(index)}
          >
            {/* Minimal Timeline Line linking projects implicitly via layout */}
            
            <div className="flex flex-col gap-6 transition-all duration-500 group-hover:-translate-y-1">
              
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-border group-hover:bg-accent group-hover:shadow-[0_0_10px_var(--accent)] transition-all duration-300" />
                <span className="text-sm font-mono text-muted group-hover:text-accent transition-colors duration-300">
                  {project.year}
                </span>
              </div>

              <div className="pl-6">
                <div className="flex items-end justify-between mb-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 tracking-tight">
                    {project.title}
                  </h3>
                  <ArrowRight className="text-muted opacity-0 group-hover:opacity-100 group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                
                <p className="text-lg text-muted mb-8 max-w-2xl">
                  {project.description}
                </p>

                {/* Inline project preview removed */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1 bg-muted/10 border border-border/50 group-hover:border-accent/30 rounded text-muted font-mono transition-colors duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md p-0 md:p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="w-full h-full md:h-auto max-h-screen md:max-h-[90vh] max-w-6xl bg-card md:border md:border-border/40 md:rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 text-muted hover:text-foreground bg-background/50 backdrop-blur rounded-full hover:bg-muted/20 transition-all z-20"
              >
                <X size={20} />
              </button>

              {/* Left Side - Visual Focus */}
              <div className="w-full md:w-1/2 bg-muted/5 relative min-h-[30vh] md:min-h-0 border-b md:border-b-0 md:border-r border-border/40 flex flex-col">
                <div className="p-8 pb-0">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-mono text-accent">{projects[selectedProject].year}</span>
                    <span className="text-xs font-mono text-muted">
                      {String(selectedProject + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">{projects[selectedProject].title}</h3>
                  <p className="text-lg text-muted mb-8">{projects[selectedProject].description}</p>
                </div>
                
                <div className="flex-grow relative w-full mt-4 bg-muted/10 border-t border-border/40 flex items-center justify-center">
                  <div className="font-mono text-muted/30 text-sm tracking-widest">
                    CASE STUDY DATA
                  </div>
                </div>
              </div>
              
              {/* Right Side - Case Study Details */}
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto space-y-12 bg-card relative pb-32 md:pb-12">
                
                <div>
                  <h4 className="text-xs font-mono text-muted uppercase tracking-widest mb-4 flex items-center gap-3">
                    <span className="w-4 h-[1px] bg-accent"></span> Problem
                  </h4>
                  <p className="text-foreground/80 leading-relaxed font-light">{projects[selectedProject].problem}</p>
                </div>
                
                <div>
                  <h4 className="text-xs font-mono text-muted uppercase tracking-widest mb-4 flex items-center gap-3">
                    <span className="w-4 h-[1px] bg-accent"></span> What I Built
                  </h4>
                  <p className="text-foreground/80 leading-relaxed font-light">{projects[selectedProject].whatIBuilt}</p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-muted uppercase tracking-widest mb-4 flex items-center gap-3">
                    <span className="w-4 h-[1px] bg-accent"></span> Key Features
                  </h4>
                  <ul className="space-y-3 text-foreground/80 font-light">
                    {projects[selectedProject].features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-accent text-sm mt-1">▹</span>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xs font-mono text-muted uppercase tracking-widest mb-4 flex items-center gap-3">
                    <span className="w-4 h-[1px] bg-accent"></span> Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].technologies.map((tech) => (
                      <span key={tech} className="text-xs px-3 py-1.5 bg-muted/10 border border-border/40 rounded text-foreground font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcome / Learning */}
                {projects[selectedProject].outcome && (
                  <div>
                    <h4 className="text-xs font-mono text-muted uppercase tracking-widest mb-4 flex items-center gap-3">
                      <span className="w-4 h-[1px] bg-accent"></span> Outcome / Learning
                    </h4>
                    <p className="text-foreground/80 leading-relaxed font-light">{projects[selectedProject].outcome}</p>
                  </div>
                )}

                <div className="pt-8 border-t border-border/40 flex flex-wrap gap-4">
                  {projects[selectedProject].github && projects[selectedProject].github !== "#" && (
                    <a 
                      href={projects[selectedProject].github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium bg-foreground text-background px-6 py-3 rounded hover:bg-accent hover:text-foreground transition-all duration-300"
                    >
                      <Code size={16} /> Source Code
                    </a>
                  )}
                  {projects[selectedProject].live && projects[selectedProject].live !== "#" && (
                    <a 
                      href={projects[selectedProject].live} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium border border-border/60 bg-card text-foreground px-6 py-3 rounded hover:border-accent hover:text-accent transition-all duration-300"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>

                {/* Navigation */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-card via-card to-transparent flex justify-between items-center md:border-t md:border-border/20 md:static md:bg-none md:p-0 md:mt-12 md:pt-8">
                  <button onClick={handlePrev} className="flex items-center gap-2 text-sm font-mono text-muted hover:text-foreground transition-colors group">
                    <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Prev
                  </button>
                  <button onClick={handleNext} className="flex items-center gap-2 text-sm font-mono text-muted hover:text-foreground transition-colors group">
                    Next <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
