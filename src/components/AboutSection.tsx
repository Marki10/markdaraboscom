import { FadeInSection } from "./FadeInSection";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 border-t border-border">
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
                I'm a senior web developer with over a decade of experience building for the web. 
                I've worked across startups, scale-ups, and enterprise environments—from 
                greenfield projects to complex legacy migrations.
              </p>
            </FadeInSection>
            
            <FadeInSection delay={200}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My approach centers on making informed trade-offs. I believe great software 
                comes from understanding constraints deeply—whether they're technical debt, 
                team capacity, or business timelines. I care about code that's maintainable 
                in two years, not just code that ships today.
              </p>
            </FadeInSection>
            
            <FadeInSection delay={300}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond individual contribution, I invest heavily in mentorship and team 
                growth. I've led technical initiatives, established code review practices, 
                and helped shape engineering culture at multiple organizations.
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
                  Domains
                </h3>
                <ul className="space-y-1 text-foreground">
                  <li>E-commerce</li>
                  <li>FinTech</li>
                  <li>SaaS Platforms</li>
                  <li>Healthcare</li>
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
