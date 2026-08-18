// src/components/sections/AboutSection.tsx
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-300 px-6 py-20">
      <SectionHeading eyebrow="About" title="Professional background" />

      <div className="mt-8 max-w-3xl space-y-4 text-muted-foreground">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
