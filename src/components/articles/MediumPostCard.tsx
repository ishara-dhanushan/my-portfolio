// src/components/articles/MediumPostCard.tsx
"use client";

import { useState } from "react";
import type { MediumPost } from "@/lib/medium-feed";

export function MediumPostCard({ post }: { post: MediumPost }) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = post.coverImage && !imageFailed;

  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-primary/60"
    >
      <div className="aspect-video w-full overflow-hidden bg-background">
        {showImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.coverImage as string}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => setImageFailed(true)}
          />
        ) : (
          // Local fallback: no extra asset file required — just the brand gradient.
          <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-primary-subtle to-background">
            <span className="font-mono text-xs uppercase tracking-wider text-primary-subtle-foreground">
              Medium
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        {post.formattedDate && (
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            {post.formattedDate}
          </p>
        )}

        <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">
          {post.title}
        </h3>

        <p className="mt-3 text-sm text-muted-foreground">{post.excerpt}</p>

        <span className="mt-auto pt-4 text-sm font-medium text-primary group-hover:text-primary-hover">
          Read on Medium →
        </span>
      </div>
    </a>
  );
}
