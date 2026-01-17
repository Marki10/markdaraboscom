type SnippetCardProps = {
  title: string;
  description: string;
  code: string;
};

export function SnippetCard({ title, description, code }: SnippetCardProps) {
  return (
    <article className="rounded-xl border border-border bg-background/60 p-5 shadow-sm">
      <header className="space-y-2">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </header>
      <pre className="mt-4 overflow-x-auto rounded-lg border border-border bg-muted/40 p-4 text-xs text-foreground">
        <code>{code}</code>
      </pre>
    </article>
  );
}
