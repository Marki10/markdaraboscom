export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
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
