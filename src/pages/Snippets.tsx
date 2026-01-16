import { useMemo, useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { SnippetCard } from "@/components/SnippetCard";
import { snippetCategories } from "@/data/snippets";

export default function Snippets() {
  const [selected, setSelected] = useState(snippetCategories[0]?.name ?? "");
  const activeCategory = useMemo(
    () =>
      snippetCategories.find((category) => category.name === selected) ??
      snippetCategories[0],
    [selected]
  );

  return (
    <PageLayout>
      <div className="container mx-auto max-w-6xl space-y-10">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Code Snippets Library
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Snippets & Patterns
          </h1>
          <p className="max-w-2xl text-sm text-muted-foreground">
            A curated library of frontend utilities, patterns, and deep dives for
            building reliable interfaces.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
          <aside className="space-y-3">
            {snippetCategories.map((category) => {
              const isActive = category.name === activeCategory?.name;
              return (
                <button
                  key={category.name}
                  onClick={() => setSelected(category.name)}
                  className={`w-full rounded-lg border px-4 py-2 text-left text-sm transition-colors ${
                    isActive
                      ? "border-primary/60 bg-primary/10 text-foreground"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category.name}
                </button>
              );
            })}
          </aside>

          <section className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold text-foreground">
                {activeCategory?.name}
              </h2>
              <p className="text-sm text-muted-foreground">
                {activeCategory?.snippets.length ?? 0} snippets
              </p>
            </div>
            <div className="grid gap-6">
              {activeCategory?.snippets.map((snippet) => (
                <SnippetCard key={snippet.title} {...snippet} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
