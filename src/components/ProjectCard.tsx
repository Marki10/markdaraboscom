import { Button } from "@/components/ui/button";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  bullets: string[];
  githubUrl?: string;
  demoUrl?: string;
};

export function ProjectCard({
  title,
  description,
  tech,
  bullets,
  githubUrl,
  demoUrl,
}: ProjectCardProps) {
  return (
    <article className="rounded-xl border border-border bg-background/60 p-6 shadow-sm">
      <header className="space-y-3">
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium text-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </header>

      <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/70" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {(githubUrl || demoUrl) && (
        <div className="mt-6 flex flex-wrap gap-3">
          {githubUrl && (
            <Button asChild variant="outline">
              <a href={githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </Button>
          )}
          {demoUrl && (
            <Button asChild>
              <a href={demoUrl} target="_blank" rel="noreferrer">
                Demo
              </a>
            </Button>
          )}
        </div>
      )}
    </article>
  );
}
