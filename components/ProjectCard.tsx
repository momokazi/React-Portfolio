import React from 'react';
import { Github, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import { cn } from '../lib/utils';
import { Badge } from './ui/Badge';
import { Card } from './ui/Card';

const toneBg: Record<Project['tone'], string> = {
  flame: 'bg-flame text-white',
  acid: 'bg-acid text-ink',
  sky: 'bg-sky text-ink',
  grape: 'bg-grape text-white',
  rose: 'bg-rose text-ink',
  mint: 'bg-mint text-ink',
};

interface ProjectCardProps {
  project: Project;
  /** Shown large in the header band. */
  index: number;
  className?: string;
}

/**
 * A colour band carries the logo and a big ordinal instead of a stock photo —
 * the type and the flat block do the work an Unsplash image used to fake.
 */
export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, className }) => (
  <Card
    interactive
    shadow="lg"
    className={cn('flex h-full flex-col overflow-hidden', className)}
  >
    <div
      className={cn(
        'relative flex items-center justify-between gap-4 border-b-3 border-ink p-5',
        toneBg[project.tone]
      )}
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center border-3 border-ink bg-white p-2">
        <img
          src={project.logoUrl}
          alt=""
          loading="lazy"
          className="h-full w-full object-contain"
        />
      </div>
      <span
        aria-hidden
        className="font-display text-5xl leading-none opacity-30 md:text-6xl"
      >
        {String(index + 1).padStart(2, '0')}
      </span>
    </div>

    <div className="flex flex-1 flex-col p-5">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Badge variant="ink" size="sm">
          {project.category}
        </Badge>
        <Badge variant="surface" size="sm">
          {project.year}
        </Badge>
      </div>

      <h3 className="font-display text-2xl uppercase leading-none tracking-tight">
        {project.title}
      </h3>
      <p className="mt-1.5 font-mono text-xs font-bold uppercase tracking-wide text-muted">
        {project.subtitle}
      </p>

      <p className="mt-4 flex-1 text-[15px] font-medium leading-relaxed text-muted">
        {project.overview}
      </p>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <li key={tech}>
            <Badge variant="surface" size="sm" className="shadow-none">
              {tech}
            </Badge>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex gap-2 border-t-3 border-ink pt-5">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 border-3 border-ink bg-paper px-3 py-2.5 text-sm font-bold uppercase tracking-wide transition-colors duration-100 hover:bg-acid"
          >
            <Github size={16} /> Code
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 border-3 border-ink bg-flame px-3 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-colors duration-100 hover:bg-ink hover:text-paper"
          >
            <ArrowUpRight size={16} /> Demo
          </a>
        )}
      </div>
    </div>
  </Card>
);
