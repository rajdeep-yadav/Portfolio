"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { social } from "@/data/social";
import { motion, AnimatePresence } from "framer-motion";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh]">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative z-[101] w-full max-w-xl mx-4 overflow-hidden rounded-xl border border-border bg-card shadow-2xl"
          >
            <Command className="w-full flex flex-col bg-transparent">
              <Command.Input 
                autoFocus 
                placeholder="Search portfolio..." 
                className="w-full border-b border-border bg-transparent px-4 py-4 text-sm outline-none placeholder:text-muted"
              />
              <Command.List className="max-h-[300px] overflow-y-auto p-2">
                <Command.Empty className="py-6 text-center text-sm text-muted">No results found.</Command.Empty>
                
                <Command.Group heading="Navigation" className="px-2 py-1.5 text-xs font-medium text-muted">
                  <Command.Item onSelect={() => runCommand(() => router.push("#home"))} className="flex cursor-pointer select-none items-center rounded-md px-2 py-2 text-sm aria-selected:bg-accent/10 aria-selected:text-accent">Home</Command.Item>
                  <Command.Item onSelect={() => runCommand(() => router.push("#about"))} className="flex cursor-pointer select-none items-center rounded-md px-2 py-2 text-sm aria-selected:bg-accent/10 aria-selected:text-accent">About</Command.Item>
                  <Command.Item onSelect={() => runCommand(() => router.push("#education"))} className="flex cursor-pointer select-none items-center rounded-md px-2 py-2 text-sm aria-selected:bg-accent/10 aria-selected:text-accent">Education</Command.Item>
                  <Command.Item onSelect={() => runCommand(() => router.push("#projects"))} className="flex cursor-pointer select-none items-center rounded-md px-2 py-2 text-sm aria-selected:bg-accent/10 aria-selected:text-accent">Projects</Command.Item>
                  <Command.Item onSelect={() => runCommand(() => router.push("#experience"))} className="flex cursor-pointer select-none items-center rounded-md px-2 py-2 text-sm aria-selected:bg-accent/10 aria-selected:text-accent">Experience</Command.Item>
                  <Command.Item onSelect={() => runCommand(() => router.push("#skills"))} className="flex cursor-pointer select-none items-center rounded-md px-2 py-2 text-sm aria-selected:bg-accent/10 aria-selected:text-accent">Skills</Command.Item>
                  <Command.Item onSelect={() => runCommand(() => router.push("#learning"))} className="flex cursor-pointer select-none items-center rounded-md px-2 py-2 text-sm aria-selected:bg-accent/10 aria-selected:text-accent">Learning & Achievements</Command.Item>
                  <Command.Item onSelect={() => runCommand(() => router.push("#contact"))} className="flex cursor-pointer select-none items-center rounded-md px-2 py-2 text-sm aria-selected:bg-accent/10 aria-selected:text-accent">Contact</Command.Item>
                </Command.Group>
                
                <Command.Group heading="Links" className="px-2 py-1.5 text-xs font-medium text-muted mt-2">
                  <Command.Item onSelect={() => runCommand(() => window.open(social.github, "_blank"))} className="flex cursor-pointer select-none items-center rounded-md px-2 py-2 text-sm aria-selected:bg-accent/10 aria-selected:text-accent">GitHub</Command.Item>
                  <Command.Item onSelect={() => runCommand(() => window.open(social.linkedin, "_blank"))} className="flex cursor-pointer select-none items-center rounded-md px-2 py-2 text-sm aria-selected:bg-accent/10 aria-selected:text-accent">LinkedIn</Command.Item>
                  <Command.Item onSelect={() => runCommand(() => window.open(social.resume, "_blank"))} className="flex cursor-pointer select-none items-center rounded-md px-2 py-2 text-sm aria-selected:bg-accent/10 aria-selected:text-accent">Resume</Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
