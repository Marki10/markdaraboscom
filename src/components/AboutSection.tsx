import { FadeInSection } from "./FadeInSection";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-2 sm:px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-foreground">
            About
          </h2>
        </FadeInSection>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6">
            <FadeInSection delay={100}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a frontend-focused engineer with over a decade of experience building and supporting
                high-availability, user-facing platforms. My background spans React, TypeScript, scalable
                UI engineering, and the operational discipline needed to ship reliable features at scale.
              </p>
            </FadeInSection>
            
            <FadeInSection delay={200}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I’ve worked across the full lifecycle — from designing and developing intuitive interfaces,
                to improving performance and debugging complex production issues in high-traffic environments.
                I enjoy turning data into clear, meaningful visual experiences and building frontend systems
                that are maintainable and resilient.
              </p>
            </FadeInSection>
            
            <FadeInSection delay={300}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I collaborate well across global teams and have mentored junior engineers to help them grow.
                My goal is to create fast, accessible, well-structured applications while supporting the
                operational stability teams need to ship with confidence.
              </p>
            </FadeInSection>
          </div>
          
          <FadeInSection delay={200}>
            <aside className="space-y-8">
              <div>
                <h3 className="text-sm uppercase tracking-wide text-muted-foreground mb-3">
                  Experience
                </h3>
                <p className="text-foreground font-medium">10+ Years</p>
              </div>
              
              <div>
                <h3 className="text-sm uppercase tracking-wide text-muted-foreground mb-3">
                  Location
                </h3>
                <p className="text-foreground font-medium">Bathgate, Scotland</p>
              </div>
              
              <div>
                <h3 className="text-sm uppercase tracking-wide text-muted-foreground mb-3">
                  Focus
                </h3>
                <ul className="space-y-1 text-foreground">
                  <li>Frontend engineering</li>
                  <li>React & TypeScript</li>
                  <li>UI architecture & performance</li>
                  <li>Data-driven interfaces</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm uppercase tracking-wide text-muted-foreground mb-3">
                  Currently
                </h3>
                <p className="text-foreground font-medium">Open to opportunities</p>
              </div>
            </aside>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
