import { FadeInSection } from "./FadeInSection";

export function LeadershipSection() {
  const experiences = [
    {
      title: "Mentoring & Growth",
      description: "Mentored 15+ developers across career levels. Designed structured onboarding programs that reduced ramp-up time from 3 months to 6 weeks.",
    },
    {
      title: "Code Review Philosophy",
      description: "Advocate for reviews as teaching moments, not gatekeeping. Focus on why over what. Established async review practices that improved team velocity by 25%.",
    },
    {
      title: "Cross-team Collaboration",
      description: "Led technical alignment across product, design, and platform teams. Facilitated architecture decision records (ADRs) to document and share technical decisions.",
    },
    {
      title: "Hiring & Team Building",
      description: "Conducted 100+ technical interviews. Developed structured interview rubrics focused on problem-solving approach rather than trivia knowledge.",
    },
  ];

  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Leadership & Collaboration
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Senior engineering is about more than code. Here's how I contribute to teams and organizations beyond individual features.
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
