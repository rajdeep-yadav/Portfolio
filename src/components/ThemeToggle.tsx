"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md hover:bg-muted/20 transition-colors h-10 w-10 flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {!mounted ? null : theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
