import { social } from "@/data/social";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border mt-24">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
        <div>
          <p className="font-medium text-foreground">Rajdeep Yadav &copy; 2026</p>
          <p>CSE &bull; Cybersecurity</p>
        </div>

        <div className="flex items-center gap-4">
          <a href={social.github} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
            GitHub
          </a>
          <a href={social.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
            LinkedIn
          </a>
          <a href={`mailto:${social.email}`} className="hover:text-accent transition-colors">
            Email
          </a>
        </div>

        <a href="#home" className="hover:text-foreground transition-colors group flex items-center gap-1">
          Back to top <span className="group-hover:-translate-y-1 transition-transform">&uarr;</span>
        </a>
      </div>
    </footer>
  );
}
