import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/data/portfolio";

export function EducationSection() {
  return (
    <section id="education" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-[1200px] px-6 py-20">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="mt-10 space-y-6">
          {education.map((entry) => (
            <div
              key={entry.level}
              className="rounded-2xl border border-border bg-background p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {entry.level}
                </h3>
                <span className="font-mono text-sm text-muted-foreground">
                  {entry.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {entry.institution}
              </p>
              <p className="mt-3 text-sm text-foreground">{entry.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
