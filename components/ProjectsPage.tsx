import React, { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import { PROJECTS } from '../constants';
import { cn } from '../lib/utils';
import { ProjectCard } from './ProjectCard';
import { Input } from './ui/Field';
import { SectionHeading } from './ui/SectionHeading';

const FILTERS = ['All', 'Mobile', 'Web', 'Tool'] as const;
type Filter = (typeof FILTERS)[number];

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<Filter>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return PROJECTS.filter((project) => {
      const matchesCategory = filter === 'All' || project.category === filter;
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.overview.toLowerCase().includes(query) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [filter, searchTerm]);

  return (
    <div>
      <section className="border-b-3 border-ink bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <SectionHeading
            eyebrow="Work"
            tone="mint"
            title="Every project"
            lead="Six builds — mobile apps, one Flutter Web dashboard, and a package I published because I kept rewriting it."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          {/* Filters — a filled block marks the active one, no sliding pill */}
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter projects by category"
          >
            {FILTERS.map((category) => {
              const isActive = filter === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setFilter(category)}
                  aria-pressed={isActive}
                  className={cn(
                    'border-3 border-ink rounded-brutal px-4 py-2.5 text-sm font-bold uppercase tracking-wide',
                    'transition-[transform,box-shadow] duration-100 ease-brutal',
                    isActive
                      ? 'bg-ink text-paper shadow-none translate-x-[3px] translate-y-[3px]'
                      : 'bg-surface text-ink shadow-brutal hover:bg-acid'
                  )}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-80">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
              aria-hidden
            />
            <Input
              type="search"
              placeholder="Search projects"
              aria-label="Search projects"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="pl-11"
            />
          </div>
        </div>

        <p aria-live="polite" className="mb-6 font-mono text-xs font-bold uppercase tracking-widest text-muted">
          {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
        </p>

        {filtered.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="border-3 border-ink bg-surface p-12 text-center shadow-brutal-md">
            <X size={40} className="mx-auto mb-4" aria-hidden />
            <h3 className="font-display text-2xl uppercase tracking-tight">Nothing matches</h3>
            <p className="mt-2 font-medium text-muted">
              Try a different category or clear the search.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default ProjectsPage;
