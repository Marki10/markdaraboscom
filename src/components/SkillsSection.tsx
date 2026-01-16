import { FadeInSection } from "./FadeInSection";

export function SkillsSection() {
  const skillGroups = [
    {
      title: "Frontend Engineering",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "RTK Query",
        "React Query",
        "Redux",
        "Zustand",
        "HTML5",
        "CSS3",
        "SASS",
        "Responsive UI",
        "Accessibility (WCAG)",
        "Performance optimisation",
        "Component architecture",
        "Frontend architecture",
        "Scalable UI patterns (atomic, feature-based, modular)",
        "Storybook",
      ],
    },
    {
      title: "Platform & Reliability",
      items: [
        "Incident management",
        "On-call support",
        "SLO/SLA delivery",
        "Root-cause analysis",
        "Monitoring & alerting",
        "Sentry",
        "CloudWatch",
        "Logging & observability",
        "Release management",
        "CI/CD workflows",
      ],
    },
    {
      title: "Backend & APIs",
      items: [
        "Node.js",
        "Express",
        "REST API development",
        "SQL / MySQL",
        "Caching",
        "Authentication / JWT",
      ],
    },
    {
      title: "Cloud & DevOps",
      items: [
        "AWS (EC2, S3, CloudFront, Lambda)",
        "Docker",
        "GitHub Actions",
        "Jenkins",
        "Networking basics",
        "HTTPS/security best practices",
      ],
    },
    {
      title: "Testing & Quality",
      items: [
        "Jest",
        "Playwright",
        "Cypress",
        "React Testing Library",
        "Integration testing",
      ],
    },
    {
      title: "CMS & Platforms",
      items: [
        "WordPress",
        "Adobe Experience Manager",
        "Content management systems",
      ],
    },
    {
      title: "Design & Collaboration",
      items: [
        "Figma",
        "Design systems",
        "UI/UX collaboration",
      ],
    },
    {
      title: "Workflow & Delivery",
      items: [
        "Agile",
        "Scrum",
        "Sprints",
        "Jira",
        "Cross-functional teamwork",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 border-t border-border">
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
                      className="px-4 py-2 border border-border rounded-lg text-foreground"
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
