import { FadeInSection } from "./FadeInSection";

export function LeadershipSection() {
  const experiences = [
    {
      title: "Production Reliability & Debugging",
      description: "Handled on-call support for high-traffic systems, diagnosing UI and API issues under pressure and reducing time-to-recovery.",
    },
    {
      title: "Performance & Monitoring",
      description: "Improved monitoring, alerting, and debugging workflows — enabling faster identification of frontend bottlenecks and production regressions.",
    },
    {
      title: "Release & Quality Readiness",
      description: "Supported release cycles with regression testing, feature validation, and launch preparation for enterprise-scale applications.",
    },
    {
      title: "Team Collaboration & Mentorship",
      description: "Worked closely with designers, backend engineers, and product teams across global time zones; mentored junior engineers on best practices and workflows.",
    },
  ];

  return (
    <section className="py-24 px-6 border-t border-border">
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
          {experiences.map((exp, index) => (
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
