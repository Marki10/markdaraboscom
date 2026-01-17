import { FadeInSection } from "./FadeInSection";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-2 sm:px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-foreground">
            Core Skills
          </h2>
        </FadeInSection>
        
        <div className="grid md:grid-cols-2 gap-10">
          {skillGroups.map((group, index) => (
            <FadeInSection key={group.title} delay={100 + index * 100}>
              <div className="space-y-4">
                <h3 className="text-sm uppercase tracking-wide text-muted-foreground">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                    className="px-4 py-2 border border-accent-cool rounded-lg text-foreground bg-accent-cool-soft"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
