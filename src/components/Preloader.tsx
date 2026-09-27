"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // We are temporarily ignoring sessionStorage so you can actually see the preloader!
    
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Random bursts of progress to feel realistic
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 100);

    const timer = setTimeout(() => {
      setShow(false);
    }, 1800);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-background text-foreground"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Skip button */}
          <button 
            onClick={() => setShow(false)}
            className="absolute top-8 right-8 text-xs font-mono tracking-widest text-muted hover:text-foreground transition-colors z-50"
          >
            SKIP &rarr;
          </button>

          <div className="flex flex-col items-center justify-center w-full max-w-md px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tighter mb-8 text-foreground"
            >
              RY
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm md:text-base font-bold tracking-[0.3em] mb-2"
            >
              RAJDEEP YADAV
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-[10px] font-mono tracking-[0.2em] text-muted uppercase mb-12"
            >
              CSE &bull; CYBERSECURITY
            </motion.div>

            {/* Loading Bar */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="w-full"
            >
              <div className="flex justify-between text-[10px] font-mono text-muted mb-2">
                <span>SYSTEM INIT</span>
                <span>{Math.min(progress, 100)}%</span>
              </div>
              <div className="h-[2px] w-full bg-border/40 overflow-hidden relative">
                <motion.div 
                  className="absolute top-0 left-0 bottom-0 bg-accent"
                  initial={{ width: "0%" }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
