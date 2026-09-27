import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background interaction effect */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-2xl w-full">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start md:items-center">
          
          <div className="group cursor-default">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-foreground mb-4 relative transition-transform duration-500 group-hover:translate-x-2">
              404
            </h1>
            <div className="h-[1px] w-full bg-border/50 mb-4 transition-all duration-500 group-hover:w-1/2 group-hover:bg-accent"></div>
            <p className="text-xs font-mono text-muted uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Even reconnaissance has dead ends.
            </p>
          </div>
          
          <div className="space-y-6 flex-1">
            <h2 className="text-xl font-bold tracking-tight text-foreground">
              THIS ROUTE DOESN'T EXIST.
            </h2>
            
            <p className="text-muted font-light leading-relaxed">
              The requested page could not be found. It may have been moved, deleted, or you may have typed the address incorrectly.
            </p>
            
            <div className="font-mono text-xs text-muted/60 bg-muted/5 border border-border/40 p-4 rounded-md inline-block w-full">
              <div className="flex justify-between mb-1">
                <span>ROUTE</span>
                <span className="text-accent">NOT FOUND</span>
              </div>
              <div className="flex justify-between">
                <span>SYSTEM</span>
                <span>ONLINE</span>
              </div>
            </div>
            
            <div className="pt-4">
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-foreground bg-foreground text-background px-6 py-3 rounded-md hover:bg-accent hover:text-foreground transition-all duration-300 group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Return Home
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
