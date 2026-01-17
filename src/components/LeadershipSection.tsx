import { FadeInSection } from "./FadeInSection";
import { leadershipExperiences } from "@/data/leadership";

export function LeadershipSection() {
  return (
    <section className="py-24 px-2 sm:px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Engineering Excellence & Collaboration
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            I combine strong frontend engineering with operational awareness to help teams ship fast, reliable, high-quality products.
          </p>
        </FadeInSection>
        
        <div className="grid md:grid-cols-2 gap-8">
          {leadershipExperiences.map((exp, index) => (
            <FadeInSection key={exp.title} delay={index * 100}>
              <article className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </article>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
