// src/components/sections/HeroSection.tsx
import { ButtonLink } from "@/components/ui/ButtonLink";
import { assetPrefix } from "@/utils/assetPrefix";
import { profile } from "@/data/portfolio";

export function HeroSection() {
  const resumeHref = profile.resumeUrl;

  return (
    <section id="top" className="mx-auto max-w-[1200px] px-6 py-24 sm:py-32">
      <p className="font-mono text-sm uppercase tracking-wider text-primary">
        {profile.eyebrow}
      </p>

      <h1 className="mt-4 max-w-3xl font-heading text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
        {profile.headline}
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
        {profile.summary}
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <ButtonLink href="#projects">View Projects</ButtonLink>
        <ButtonLink href={resumeHref} variant="secondary">
          Download CV
        </ButtonLink>
      </div>

      <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
        <a href={profile.socials.github} className="hover:text-foreground">
          GitHub
        </a>
        <a href={profile.socials.linkedin} className="hover:text-foreground">
          LinkedIn
        </a>
        <a href={profile.socials.medium} className="hover:text-foreground">
          Medium
        </a>
        <a href={`mailto:${profile.email}`} className="hover:text-foreground">
          Email
        </a>
      </div>
    </section>
  );
}
