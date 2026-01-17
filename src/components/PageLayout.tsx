import { ReactNode } from "react";
import { Navigation } from "@/components/Navigation";

type PageLayoutProps = {
  children: ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="px-2 pb-16 pt-[74px] sm:px-6 sm:pt-24">{children}</main>
    </div>
  );
}
