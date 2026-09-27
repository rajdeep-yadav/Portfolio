"use client";

import { siteConfig } from "@/config/site";
import { useState } from "react";
import { Send, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const subject = encodeURIComponent("Portfolio Contact");
    const body = encodeURIComponent(
      `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\n${formData.get("message")}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-32 px-6 max-w-4xl mx-auto border-t border-border/50 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="w-full text-center"
      >
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-[1px] w-12 bg-border/50"></div>
          <span className="text-sm font-mono text-muted uppercase tracking-widest">07 / Contact</span>
          <div className="h-[1px] w-12 bg-border/50"></div>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">LET'S CONNECT</h2>
        <p className="text-lg md:text-xl text-muted max-w-xl mx-auto mb-16 font-light leading-relaxed">
          Have an interesting opportunity, technical project or collaboration in mind? Let's talk.
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto space-y-4 text-left">
          <div className="group">
            <label htmlFor="name" className="sr-only">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Name" 
              required
              className="w-full bg-card/50 border border-border/40 rounded-md px-5 py-4 text-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all placeholder:text-muted/60"
            />
          </div>
          
          <div className="group">
            <label htmlFor="email" className="sr-only">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Email" 
              required
              className="w-full bg-card/50 border border-border/40 rounded-md px-5 py-4 text-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all placeholder:text-muted/60"
            />
          </div>
          
          <div className="group">
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea 
              id="message" 
              name="message" 
              placeholder="Message" 
              required
              rows={5}
              className="w-full bg-card/50 border border-border/40 rounded-md px-5 py-4 text-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all resize-none placeholder:text-muted/60"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting || submitted}
            className="flex items-center justify-center gap-3 w-full bg-foreground text-background px-8 py-4 rounded-md font-medium hover:bg-accent hover:text-foreground hover:scale-[1.02] hover:shadow-[0_4px_20px_0_rgba(16,185,129,0.3)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group/btn"
          >
            {submitted ? (
              "Message Sent"
            ) : isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Submit
                <Send size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </>
            )}
          </button>
        </form>
        
        <div className="mt-32 border-t border-border/30 pt-16 flex flex-col items-center select-none opacity-50 hover:opacity-100 transition-opacity duration-700">
          <h1 className="text-4xl md:text-7xl font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/10">
            RAJDEEP YADAV
          </h1>
        </div>
      </motion.div>
    </section>
  );
}
