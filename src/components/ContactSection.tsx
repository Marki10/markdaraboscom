import { Github, Linkedin, Mail, Phone } from "lucide-react";
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
            I’m open to opportunities in frontend engineering, UI development, and platform-focused product work.
            If you'd like to discuss a role, a project, or a collaboration, feel free to reach out.
          </p>
        </FadeInSection>
        
        <FadeInSection delay={100}>
          <div className="flex flex-wrap gap-4 mb-16">
            <Button asChild size="lg" className="gap-2">
              <a href="mailto:markdarabos@gmail.com">
                <Mail className="h-4 w-4" />
                markdarabos@gmail.com
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="tel:+447432659979">
                <Phone className="h-4 w-4" />
                +44 7432 659 979
              </a>
            </Button>
          </div>
        </FadeInSection>
        
        <FadeInSection delay={200}>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Marki10"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-accent-cool bg-accent-cool-soft p-2 text-accent-cool transition-colors hover:bg-accent-cool/15"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/darabos-mark"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-accent-cool bg-accent-cool-soft p-2 text-accent-cool transition-colors hover:bg-accent-cool/15"
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
