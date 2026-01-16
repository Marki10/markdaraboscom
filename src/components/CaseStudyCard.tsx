import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface CaseStudy {
  title: string;
  company: string;
  year: string;
  problem: string;
  constraints: string;
  role: string;
  outcome: string;
  technologies: string[];
}

interface CaseStudyCardProps {
  study: CaseStudy;
}

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article 
      className="border border-border rounded-lg overflow-hidden transition-all duration-200 hover:border-muted-foreground/30"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 md:p-8 text-left flex items-start justify-between gap-4"
      >
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-sm text-muted-foreground">{study.year}</span>
            <span className="text-muted-foreground/50">•</span>
            <span className="text-sm text-muted-foreground">{study.company}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-foreground">
            {study.title}
          </h3>
        </div>
        <ChevronDown 
          className={cn(
            "h-5 w-5 text-muted-foreground transition-transform flex-shrink-0 mt-1",
            isExpanded && "rotate-180"
          )}
        />
      </button>
      
      <div 
        className={cn(
          "grid transition-all duration-200",
          isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-6 md:px-8 pb-8 space-y-6 border-t border-border pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-2">
                  Problem
                </h4>
                <p className="text-foreground">{study.problem}</p>
              </div>
              
              <div>
                <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-2">
                  Constraints
                </h4>
                <p className="text-foreground">{study.constraints}</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-2">
                  My Role
                </h4>
                <p className="text-foreground">{study.role}</p>
              </div>
              
              <div>
                <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-2">
                  Outcome
                </h4>
                <p className="text-foreground">{study.outcome}</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-3">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {study.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-sm bg-secondary text-secondary-foreground rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
