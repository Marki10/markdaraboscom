import { PageLayout } from "@/components/PageLayout";
import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    title: "Modern Booker App",
    description:
      "A fully featured booking platform designed to make scheduling effortless through a clean multi-step flow, real-time availability logic, and a modular frontend architecture.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    bullets: [
      "End-to-end booking experience including service selection, staff assignment, time-slot picking, and final confirmation.",
      "Dynamic availability engine with guardrails (busy slots, staff availability, service duration rules).",
      "Role-based admin dashboard for managing services, staff schedules, pricing and opening hours.",
      "Reusable component architecture with form state management and validation built on controlled components.",
      "Fast, mobile-first UI with accessible navigation, smooth transitions, and a consistent design system.",
    ],
    githubUrl: "https://github.com/Marki10/booker",
    demoUrl: "https://marki10.github.io/booker",
  }
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
