// src/components/projects/ProjectCard.tsx
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/types/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/60">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-heading text-lg font-semibold text-foreground">
          {project.title}
        </h3>
        <span className="shrink-0 font-mono text-xs text-muted-foreground">
          {project.ownership}
        </span>
      </div>

      <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
        {project.category}
      </p>

      <p className="mt-4 text-sm text-muted-foreground">{project.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        {project.hasCaseStudy && (
          <a
            href={`projects/${project.slug}/`}
            className="font-medium text-primary hover:text-primary-hover"
          >
            View Case Study
          </a>
        )}
        {project.links.github && (
          <a
            href={project.links.github}
            className="text-muted-foreground hover:text-foreground"
          >
            GitHub
          </a>
        )}
        {project.links.demo && (
          <a
            href={project.links.demo}
            className="text-muted-foreground hover:text-foreground"
          >
            Live Demo
          </a>
        )}
        {project.links.video && (
          <a
            href={project.links.video}
            className="text-muted-foreground hover:text-foreground"
          >
            Demo Video
          </a>
        )}
        {project.links.figma && (
          <a
            href={project.links.figma}
            className="text-muted-foreground hover:text-foreground"
          >
            Figma Design
          </a>
        )}
      </div>
    </article>
  );
}
