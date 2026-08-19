// src/components/sections/MediumPostsSection.tsx
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediumPostsFeed } from "@/components/articles/MediumPostsFeed";
import { profile } from "@/data/portfolio";

// Server Component: renders the static heading/layout and the section
// wrapper. Only MediumPostsFeed (a Client Component) fetches at runtime.
export function MediumPostsSection() {
  return (
    <section id="articles" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-300 px-6 py-20">
        <SectionHeading
          eyebrow="Writing"
          title="Latest articles"
          description="Recent articles, loaded live from Medium."
        />

        <MediumPostsFeed />

        <a
          href={profile.socials.medium}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block text-sm font-medium text-primary hover:text-primary-hover"
        >
          View all articles on Medium
        </a>
      </div>
    </section>
  );
}
