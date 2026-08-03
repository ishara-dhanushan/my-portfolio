import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { profile } from "@/data/portfolio";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#tech-stack", label: "Tech Stack" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#articles", label: "Articles" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const resumeHref = profile.resumeUrl;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <Link
          href="#top"
          className="font-heading text-lg font-semibold text-foreground"
        >
          {profile.initials}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href={resumeHref} variant="secondary">
            Download CV
          </ButtonLink>
        </div>

        <MobileMenu links={navLinks} resumeHref={resumeHref} />
      </div>
    </header>
  );
}
