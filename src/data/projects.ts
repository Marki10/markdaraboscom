export type Project = {
  title: string;
  description: string;
  tech: string[];
  bullets: string[];
  githubUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Modern Booker App",
    description:
      "A production-style booking platform designed to make scheduling effortless through a clean multi-step flow, real-time availability logic, and a modular, scalable frontend architecture.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    bullets: [
      "End-to-end booking flow covering service selection, staff assignment, time-slot picking, and final confirmation.",
      "State-driven availability engine with guardrails for busy slots, staff schedules, and service duration rules.",
      "Role-based admin dashboard for managing services, staff schedules, pricing, and opening hours.",
      "Reusable component and form architecture with predictable state management and validation.",
      "Fast, mobile-first UI with accessible navigation, smooth transitions, and a consistent design system.",
    ],
    githubUrl: "https://github.com/Marki10/booker",
    demoUrl: "https://marki10.github.io/booker",
  },
  {
    title: "Portfolio v3",
    description:
      "A modern, performance-focused developer portfolio showcasing projects, skills, and experience through reusable UI blocks, smooth animations, and theme support.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    bullets: [
      "Composable section-based layout enabling rapid iteration and content reuse.",
      "Dark/light theme support using design tokens and accessible color contrast.",
      "Performance-optimized assets with lazy loading and minimal bundle size.",
      "Subtle motion and transitions using lightweight animation utilities.",
      "Clean information hierarchy focused on clarity, readability, and recruiter experience.",
    ],
    githubUrl: "https://github.com/Marki10/portfolio-v3",
  },
  {
    title: "React AWS CI/CD Tutorial",
    description:
      "A hands-on tutorial project demonstrating how to build, test, and deploy a React application using AWS infrastructure and modern CI/CD pipelines.",
    tech: ["React", "AWS", "GitHub Actions", "CI/CD"],
    bullets: [
      "Configured automated build and deployment pipelines using GitHub Actions.",
      "Deployed a React app to AWS infrastructure with repeatable, versioned releases.",
      "Integrated basic testing and quality checks into the CI workflow.",
      "Documented setup steps and architecture decisions for clarity and reuse.",
      "Focused on reliability, reproducibility, and real-world deployment practices.",
    ],
    githubUrl: "https://github.com/Marki10/React-AWS-CI-CD-Tutorial",
    demoUrl: "",
  },
  {
    title: "Drum Machine",
    description:
      "An interactive browser-based drum machine built to explore timing, state management, and responsive UI interactions in a small but polished frontend project.",
    tech: ["JavaScript", "TypeScript", "Web Audio API"],
    bullets: [
      "Implemented real-time audio playback using the Web Audio API.",
      "Mapped keyboard and UI interactions to trigger sounds with low latency.",
      "Managed application state for active pads, tempo, and playback controls.",
      "Responsive layout designed for both desktop and mobile interaction.",
      "Focused on clean state updates and predictable user interactions.",
    ],
    githubUrl: "https://github.com/Marki10/drum-machine",
    demoUrl: "",
  },
];
