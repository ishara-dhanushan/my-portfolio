import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { CredentialsSection } from "@/components/sections/CredentialsSection";
import { MediumPostsSection } from "@/components/sections/MediumPostsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Software Engineer Portfolio",
  description:
    "Ishara Dhanushan's software engineering portfolio, featuring full-stack applications, REST APIs, backend systems, and mobile projects.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProofSection />
      <ExperienceSection />
      <ProjectsSection />
      <TechStackSection />
      <CapabilitiesSection />
      <AboutSection />
      <EducationSection />
      <CredentialsSection />
      <MediumPostsSection />
      <ContactSection />
    </main>
  );
}
