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
            Senior Front-End Engineer | React, TypeScript, High-Performance UI
          </p>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
            Mark Darabos
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            I build scalable, high-quality web applications with a focus on performance, accessibility,
            and clean architecture. With 10+ years of experience across frontend engineering and large-scale
            platform operations, I bring both technical depth and product awareness to every project.
          </p>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            I’ve delivered data-driven interfaces, optimized complex UIs, and supported high-traffic systems
            with strong debugging and reliability practices.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-12">
            {["React", "TypeScript", "UI Architecture", "Performance", "Testing", "AWS", "Reliability"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-sm border border-accent-cool rounded-full text-foreground bg-accent-cool-soft backdrop-blur-sm"
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
