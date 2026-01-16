import { ReactNode } from "react";
import { Navigation } from "@/components/Navigation";

type PageLayoutProps = {
  children: ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="px-6 pb-16 pt-24">{children}</main>
    </div>
  );
}
