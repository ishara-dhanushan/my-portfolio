import { SectionHeading } from "@/components/ui/SectionHeading";
import { capabilities } from "@/data/portfolio";

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="mx-auto max-w-[1200px] px-6 py-20">
      <SectionHeading
        eyebrow="Engineering Capabilities"
        title="How the stack gets applied"
      />

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {capabilities.map((capability) => (
          <div
            key={capability}
            className="flex gap-3 rounded-2xl border border-border bg-surface p-5 text-sm text-foreground"
          >
            <span
              className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
              aria-hidden="true"
            />
            <span>{capability}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
