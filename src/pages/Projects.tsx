import { PageLayout } from "@/components/PageLayout";
import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    title: "Project A — Modern Booker App",
    description:
      "A modern booking platform focused on a seamless multi-step flow and clean UI architecture.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    bullets: [
      "End-to-end booking flow (services → staff → time → confirmation).",
      "Calendar logic with availability constraints and guardrails.",
      "Admin dashboard for managing services, staff, and schedules.",
      "Component architecture with reusable form building blocks.",
      "Mobile-first, accessible design with consistent UX.",
    ],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Project B — Portfolio v3",
    description:
      "A polished portfolio with animated sections, reusable UI blocks, and theme support.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    bullets: [
      "Composable UI sections with flexible layout presets.",
      "Performance-optimized assets and lazy-loaded sections.",
      "Smooth motion using lightweight animation utilities.",
      "Dark/light themes with accessible color tokens.",
    ],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Project C — AI Tools Small Collection",
    description:
      "A set of lightweight AI utilities for content and script generation workflows.",
    tech: ["TypeScript", "OpenAI API", "React"],
    bullets: [
      "Script generator and content assistant utilities.",
      "Form UX tuned for quick iteration and repeatable prompts.",
      "Typed API wrapper with retries and request guards.",
      "Clear feedback states for loading, success, and errors.",
    ],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Project D — Misc React Apps",
    description:
      "A collection of focused React UI experiments for common product patterns.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    bullets: [
      "Filtering and sorting UI with debounced inputs.",
      "Pagination components with edge-case handling.",
      "Dashboard widgets for metrics and insights.",
    ],
    githubUrl: "#",
    demoUrl: "#",
  },
];

export default function Projects() {
  return (
    <PageLayout>
      <div className="container mx-auto max-w-6xl space-y-10">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Projects
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Selected Work
          </h1>
          <p className="max-w-2xl text-sm text-muted-foreground">
            A curated set of projects that highlight UI craftsmanship, performance
            tuning, and thoughtful system design.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </section>
      </div>
    </PageLayout>
  );
}
