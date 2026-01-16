import { CaseStudyCard } from "./CaseStudyCard";
import { FadeInSection } from "./FadeInSection";

const experiences = [
  {
    company: "Incentive Games",
    location: "Edinburgh, Scotland",
    role: "Front-End Engineer",
    period: "Apr 2019 – Sep 2025",
    summary:
      "A key contributor to building and maintaining web applications used by millions of players across global gaming clients.",
    frontendEngineering: [
      "Built and optimized UI components and frontend features in React/TypeScript for high-traffic applications.",
      "Improved performance and responsiveness, reducing load times and enhancing user experience.",
      "Collaborated with designers and backend teams to deliver consistent, accessible, user-focused interfaces.",
      "Supported release cycles with regression testing, debugging, and rapid iteration on user-facing features.",
    ],
    platformReliability: [
      "Helped monitor production behavior and resolve UI-related issues to ensure smooth player experience.",
      "Improved visibility into frontend errors using monitoring tools (CloudWatch, Sentry, internal dashboards).",
      "Built internal tools and automation scripts to streamline workflows and reduce manual effort for engineering teams.",
    ],
    collaboration: [
      "Worked closely with distributed teams across the UK, Croatia, India, and the USA.",
      "Mentored junior engineers and improved onboarding material for frontend contributors.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "AWS (EC2/S3)",
      "CI/CD",
      "CloudWatch",
      "Sentry",
    ],
  },
  {
    company: "EPAM Systems",
    location: "Szeged, Hungary",
    role: "Software Engineer (Frontend & Platform Support)",
    period: "Jan 2016 – Feb 2019",
    summary:
      "Worked on enterprise-scale web applications for finance and manufacturing clients, contributing to both frontend development and platform stability.",
    frontendEngineering: [
      "Developed and maintained UI components and internal tools used by global teams.",
      "Assisted in debugging UI and API integration issues across complex distributed systems.",
    ],
    platformReliability: [
      "Supported CI/CD processes and collaborated on frontend deployment workflows.",
    ],
    collaboration: [
      "Worked in Agile teams with engineers across Europe, India, and the US to deliver stable releases.",
    ],
    technologies: ["JavaScript", "TypeScript", "React (exposure)", "Node.js", "AWS", "Jenkins", "REST APIs"],
  },
  {
    company: "Self-Employed",
    location: "Szeged, Hungary",
    role: "Full-Stack Web Developer",
    period: "Nov 2015 – Jan 2016",
    summary: "Built websites and small web applications for gaming and travel SMEs.",
    frontendEngineering: [
      "Implemented responsive UI, API integrations, and performance optimizations.",
      "Managed hosting, deployments, and client communication.",
    ],
    platformReliability: [],
    collaboration: [],
    technologies: ["JavaScript", "HTML/CSS", "PHP", "WordPress", "jQuery"],
  },
  {
    company: "S-Press 5 Ltd",
    location: "Szeged, Hungary",
    role: "Front-End Developer",
    period: "Mar 2015 – Nov 2015",
    summary: "Developed UI features and improved frontend performance for production websites.",
    frontendEngineering: [
      "Worked with designers to implement layouts and optimize rendering.",
      "Assisted with deployments and testing cycles.",
    ],
    platformReliability: [],
    collaboration: [],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
  },
];

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
