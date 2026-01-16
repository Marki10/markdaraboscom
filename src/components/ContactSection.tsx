import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeInSection } from "./FadeInSection";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Get in Touch
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            I'm currently open to new opportunities. Whether you have a role in mind, 
            want to discuss a project, or just want to connect—I'd love to hear from you.
          </p>
        </FadeInSection>
        
        <FadeInSection delay={100}>
          <div className="flex flex-wrap gap-4 mb-16">
            <Button asChild size="lg" className="gap-2">
              <a href="mailto:hello@johndoe.dev">
                <Mail className="h-4 w-4" />
                hello@johndoe.dev
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </FadeInSection>
        
        <FadeInSection delay={200}>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
