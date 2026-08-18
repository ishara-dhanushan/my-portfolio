// src/components/sections/CredentialsSection.tsx
import { SectionHeading } from "@/components/ui/SectionHeading";
import { credentials } from "@/data/portfolio";

export function CredentialsSection() {
  return (
    <section id="certifications" className="mx-auto max-w-300 px-6 py-20">
      <SectionHeading
        eyebrow="Certifications"
        title="Relevant certifications"
      />

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {credentials.map((credential) => (
          <div
            key={credential.name}
            className="rounded-2xl border border-border bg-surface p-5"
          >
            <p className="font-heading text-sm font-semibold text-foreground">
              {credential.name}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {credential.issuer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
