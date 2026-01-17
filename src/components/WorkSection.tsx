import { CaseStudyCard } from "./CaseStudyCard";
import { FadeInSection } from "./FadeInSection";
import { experiences } from "@/data/experience";

const experienceToStudy = (experience: (typeof experiences)[number]) => ({
  title: experience.role,
  company: `${experience.company} · ${experience.location}`,
  year: experience.period,
  problem: experience.summary,
  constraints: experience.platformReliability.length
    ? experience.platformReliability.join(" ")
    : "Focused on delivering reliable, high-quality user-facing features.",
  role: [
    ...experience.frontendEngineering,
    ...experience.collaboration,
  ].join(" "),
  outcome:
    "Delivered reliable, high-quality frontend features with strong collaboration and operational awareness.",
  technologies: experience.technologies,
});

export function WorkSection() {
  return (
    <section id="work" className="py-24 px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Professional Experience
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Roles focused on production support, incident management, and improving
            reliability for cloud-based platforms.
          </p>
        </FadeInSection>
        
        <div className="space-y-4">
          {experiences.map((experience, index) => (
            <FadeInSection key={experience.company + experience.period} delay={index * 100}>
              <CaseStudyCard study={experienceToStudy(experience)} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
