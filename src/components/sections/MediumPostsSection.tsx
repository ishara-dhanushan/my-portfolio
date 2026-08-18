// src/components/sections/MediumPostsSection.tsx
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/portfolio";

// This section is intentionally a static scaffold for now. Per the implementation
// plan (6.4), the real version needs a MediumPostsFeed Client Component + a
// src/lib/medium-feed.ts adapter that fetches NEXT_PUBLIC_MEDIUM_FEED_API_URL in
// the browser, validates/normalizes the response, and handles loading/empty/error
// states. That's a separate build step — this just holds the section's place.
export function MediumPostsSection() {
  return (
    <section id="articles" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-300 px-6 py-20">
        <SectionHeading
          eyebrow="Writing"
          title="Latest articles"
          description="Recent software-engineering posts, loaded from Medium."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[1, 2, 3].map((placeholder) => (
            <div
              key={placeholder}
              className="h-64 animate-pulse rounded-2xl border border-border bg-background"
            />
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Article feed loads at runtime — this section is a static placeholder
          for now.
        </p>

        <a
          href={profile.socials.medium}
          className="mt-4 inline-block text-sm font-medium text-primary hover:text-primary-hover"
        >
          View all articles on Medium
        </a>
      </div>
    </section>
  );
}
