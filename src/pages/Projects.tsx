import { PageLayout } from "@/components/PageLayout";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";


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
