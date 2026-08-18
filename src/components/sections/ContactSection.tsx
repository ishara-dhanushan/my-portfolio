// src/components/sections/ContactSection.tsx
import { ButtonLink } from "@/components/ui/ButtonLink";
import { profile } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-300 px-6 py-24 text-center">
      <h2 className="font-heading text-3xl font-semibold text-foreground">
        Let&apos;s build useful software together.
      </h2>
      <p className="mt-4 text-muted-foreground">
        Open to software engineering opportunities and collaborations.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <ButtonLink href={`mailto:${profile.email}`}>Email me</ButtonLink>
        <ButtonLink href={profile.socials.github} variant="secondary">
          GitHub
        </ButtonLink>
        <ButtonLink href={profile.socials.linkedin} variant="secondary">
          LinkedIn
        </ButtonLink>
      </div>
    </section>
  );
}
