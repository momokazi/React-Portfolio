import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ProjectCard } from './ProjectCard';
import { Button } from './ui/Button';
import { SectionHeading } from './ui/SectionHeading';

const Projects: React.FC = () => {
  const featured = PROJECTS.slice(0, 3);

  return (
    <section id="projects" className="border-b-3 border-ink">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Selected work"
            tone="mint"
            title={
              <>
                Things I&apos;ve
                <br />
                built
              </>
            }
            lead="Mostly Flutter, mostly shipped. Three of six — the rest are in the gallery."
          />
          <Button asChild variant="neutral" size="md" className="shrink-0 self-start md:self-end">
            <Link to="/projects">
              All projects <ArrowRight size={16} />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
