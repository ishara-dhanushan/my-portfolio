// src/components/sections/ProjectsSection.tsx
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  const featured = projects.filter((project) => project.featured);
  const supporting = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="mx-auto max-w-300 px-6 py-20">
      <SectionHeading
        eyebrow="Projects"
        title="Featured work"
        description="Three case studies with the deepest architecture and delivery story."
      />

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <h3 className="mt-16 font-heading text-xl font-semibold text-foreground">
        More projects
      </h3>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {supporting.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
