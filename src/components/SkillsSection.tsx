import { FadeInSection } from "./FadeInSection";

export function SkillsSection() {
  const regularTools = [
    "TypeScript", "React", "Node.js", "PostgreSQL", 
    "GraphQL", "AWS", "Docker", "Git"
  ];

  const principles = [
    "Progressive enhancement over graceful degradation",
    "Composition over inheritance",
    "Explicit over implicit",
    "Boring technology for critical paths",
    "Measure before optimizing",
  ];

  return (
    <section id="skills" className="py-24 px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-foreground">
            Technical Depth
          </h2>
        </FadeInSection>
        
        <div className="grid md:grid-cols-2 gap-16">
          <FadeInSection delay={100}>
            <div>
              <h3 className="text-sm uppercase tracking-wide text-muted-foreground mb-6">
                Things I Work With Regularly
              </h3>
              <div className="flex flex-wrap gap-3">
                {regularTools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 border border-border rounded-lg text-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </FadeInSection>
          
          <FadeInSection delay={200}>
            <div>
              <h3 className="text-sm uppercase tracking-wide text-muted-foreground mb-6">
                Principles I Follow
              </h3>
              <ul className="space-y-3">
                {principles.map((principle) => (
                  <li key={principle} className="text-muted-foreground flex items-start gap-3">
                    <span className="text-foreground mt-1.5">→</span>
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
