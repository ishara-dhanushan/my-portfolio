// src/components/sections/TechStackSection.tsx
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { coreStack, techGroups } from "@/data/portfolio";

export function TechStackSection() {
  return (
    <section id="tech-stack" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-300 px-6 py-20">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Technologies I use to design, build, test, and deliver software products."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {coreStack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-border bg-background p-6"
            >
              <h3 className="font-heading text-sm font-semibold text-foreground">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.technologies.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
              {group.evidence && (
                <p className="mt-4 text-xs text-muted-foreground">
                  {group.evidence}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
