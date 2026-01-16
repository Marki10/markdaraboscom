import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InteractiveCanvas } from "./InteractiveCanvas";

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 pb-24 px-6 relative overflow-hidden">
      {/* Interactive background */}
      <div className="absolute inset-0">
        <InteractiveCanvas />
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10 pointer-events-none">
        <div className="max-w-3xl">
          <p className="text-muted-foreground mb-4 tracking-wide uppercase text-sm">
            Senior Web Developer
          </p>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
            John Doe
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            Senior Web Developer with 10+ years building scalable, accessible web platforms. 
            I focus on architecture, performance, and mentoring teams.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-12">
            {["Architecture", "Performance", "Mentorship", "Accessibility"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-sm border border-border rounded-full text-muted-foreground bg-background/80 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-4 pointer-events-auto">
            <Button asChild size="lg" className="gap-2">
              <a href="#work">
                View Work
                <ArrowDown className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 bg-background/80 backdrop-blur-sm">
              <a href="#contact">
                <Mail className="h-4 w-4" />
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
