// src/components/ui/ButtonAnchor.tsx
import type { ReactNode } from "react";

interface ButtonAnchorProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  download?: boolean | string;
}

export function ButtonAnchor({
  href,
  children,
  variant = "primary",
  external,
  download,
}: ButtonAnchorProps) {
  const base =
    "inline-flex h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium transition-colors";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-primary-hover"
      : "border border-border text-foreground hover:bg-surface-hover";

  return (
    <a
      href={href}
      className={`${base} ${styles}`}
      {...(download
        ? { download: typeof download === "string" ? download : true }
        : {})}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
