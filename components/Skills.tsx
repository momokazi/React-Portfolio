import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SKILLS } from '../constants';
import { cn } from '../lib/utils';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { SectionHeading } from './ui/SectionHeading';

const toneBg: Record<string, string> = {
  flame: 'bg-flame',
  acid: 'bg-acid',
  sky: 'bg-sky',
  grape: 'bg-grape',
  rose: 'bg-rose',
  mint: 'bg-mint',
};

const Skills: React.FC = () => {
  // Teaser only — the full grouped list lives on /skills.
  const featured = SKILLS.slice(0, 6);

  return (
    <section id="skills" className="border-b-3 border-ink bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="The stack"
            tone="sky"
            title="What I reach for"
            lead={`No percentage bars. Here is what each one actually does in my work — six of ${SKILLS.length}.`}
          />
          <Button asChild variant="neutral" size="md" className="shrink-0 self-start md:self-end">
            <Link to="/skills">
              Full stack <ArrowRight size={16} />
            </Link>
          </Button>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((skill) => (
            <li key={skill.name}>
              <Card interactive className="flex h-full items-start gap-4 bg-paper p-5">
                <span
                  className={cn(
                    'flex h-14 w-14 shrink-0 items-center justify-center border-3 border-ink p-2.5',
                    toneBg[skill.tone]
                  )}
                >
                  <img
                    src={skill.imagePath}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </span>
                <div>
                  <h3 className="font-display text-xl uppercase leading-none tracking-tight">
                    {skill.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium leading-snug text-muted">{skill.note}</p>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
