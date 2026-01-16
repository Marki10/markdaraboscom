import { CaseStudyCard } from "./CaseStudyCard";
import { FadeInSection } from "./FadeInSection";

const caseStudies = [
  {
    title: "E-commerce Platform Modernization",
    company: "TechRetail Inc.",
    year: "2023",
    problem: "Legacy monolithic application couldn't scale for Black Friday traffic. Page load times exceeded 8 seconds, causing significant cart abandonment.",
    constraints: "500k daily active users, 3-month deadline before peak season, team of 4 developers, couldn't afford downtime during migration.",
    role: "Led the architecture redesign. Implemented incremental migration strategy using the strangler fig pattern. Mentored junior developers on React performance patterns.",
    outcome: "Reduced page load to under 2 seconds. Zero downtime during migration. Platform handled 3x previous Black Friday traffic. Reduced infrastructure costs by 40%.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS"],
  },
  {
    title: "Real-time Analytics Dashboard",
    company: "FinanceFlow",
    year: "2022",
    problem: "Trading desk needed real-time visibility into market positions. Existing tools had 15-minute delay, causing missed opportunities and risk exposure.",
    constraints: "Sub-second latency requirements, SOC 2 compliance, integration with 12 different data sources, small team with no prior WebSocket experience.",
    role: "Designed the real-time data pipeline. Built the React visualization layer with optimized rendering for high-frequency updates. Established testing patterns for real-time systems.",
    outcome: "Achieved 200ms average latency. Dashboard now serves 50+ traders daily. Contributed to $2M in recovered trading opportunities in first quarter.",
    technologies: ["React", "D3.js", "WebSocket", "Kafka", "TimescaleDB", "Docker"],
  },
  {
    title: "Design System & Component Library",
    company: "HealthTech Solutions",
    year: "2021",
    problem: "Six product teams building inconsistent UIs. Accessibility issues across products. Design-to-development handoff taking weeks instead of days.",
    constraints: "Must support React and Vue teams, needed buy-in from skeptical stakeholders, zero dedicated design system budget initially.",
    role: "Championed the initiative from proof-of-concept to adoption. Built the core component library. Created documentation and contribution guidelines. Trained teams on usage.",
    outcome: "Adopted by all 6 teams within 6 months. Reduced new feature UI development time by 60%. Achieved WCAG 2.1 AA compliance across all products.",
    technologies: ["React", "Vue", "Storybook", "Styled Components", "Jest", "Chromatic"],
  },
];

export function WorkSection() {
  return (
    <section id="work" className="py-24 px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Selected Work
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            A few projects that represent the kind of problems I enjoy solving. 
            Each involved significant technical and organizational complexity.
          </p>
        </FadeInSection>
        
        <div className="space-y-4">
          {caseStudies.map((study, index) => (
            <FadeInSection key={study.title} delay={index * 100}>
              <CaseStudyCard study={study} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
