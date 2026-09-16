import React from 'react';
import { Layout, Server, Terminal, Github } from 'lucide-react';
import { PERSONAL_INFO, SKILLS } from '../constants';
import { cn } from '../lib/utils';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { SectionHeading } from './ui/SectionHeading';
import { Ticker } from './ui/Ticker';

const CATEGORIES = [
  {
    id: 'Mobile & Frontend',
    icon: Layout,
    tone: 'bg-sky',
    description: 'Where most of my hours go.',
  },
  {
    id: 'Backend & Cloud',
    icon: Server,
    tone: 'bg-acid',
    description: 'Enough to build and run the services my apps talk to.',
  },
  {
    id: 'Tools & DevOps',
    icon: Terminal,
    tone: 'bg-rose',
    description: 'The day-to-day around the code.',
  },
] as const;

const toneBg: Record<string, string> = {
  flame: 'bg-flame',
  acid: 'bg-acid',
  sky: 'bg-sky',
  grape: 'bg-grape',
  rose: 'bg-rose',
  mint: 'bg-mint',
};

const SkillsPage: React.FC = () => (
  <div>
    <section className="border-b-3 border-ink bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <SectionHeading
          eyebrow="The stack"
          tone="sky"
          title="What I work with"
          lead="Grouped by what it is for, described by what I use it to do. Self-assigned percentages left out on purpose — they never meant anything."
        />
      </div>
    </section>

    <div className="mx-auto max-w-7xl space-y-10 px-4 py-12 md:px-8 md:py-16">
      {CATEGORIES.map((category) => {
        const skills = SKILLS.filter((skill) => skill.category === category.id);
        if (skills.length === 0) return null;
        const Icon = category.icon;

        return (
          <section key={category.id}>
            <Card shadow="lg" className="overflow-hidden">
              <header
                className={cn(
                  'flex items-center gap-4 border-b-3 border-ink p-5 text-ink md:p-6',
                  category.tone
                )}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center border-3 border-ink bg-white">
                  <Icon size={22} aria-hidden />
                </span>
                <div>
                  <h2 className="font-display text-2xl uppercase leading-none tracking-tight md:text-3xl">
                    {category.id}
                  </h2>
                  <p className="mt-1.5 font-mono text-xs font-bold uppercase tracking-wide">
                    {category.description}
                  </p>
                </div>
              </header>

              <ul className="grid gap-5 bg-surface p-5 md:grid-cols-2 md:p-6">
                {skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-start gap-4 border-3 border-ink bg-paper p-5"
                  >
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
                      <p className="mt-2 text-sm font-medium leading-snug text-muted">
                        {skill.note}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </section>
        );
      })}
    </div>

    <Ticker items={['Learning next', 'Generative AI', 'System design', 'Rust']} speed={45} />

    <section className="border-t-3 border-ink">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center md:px-8 md:py-20">
        <h2 className="font-display text-3xl uppercase leading-none tracking-tight md:text-5xl">
          Still adding to it
        </h2>
        <p className="mt-5 text-lg font-medium text-muted">
          Right now that means generative AI features in mobile apps, more rigour around system
          design, and picking up Rust in the evenings.
        </p>
        <Button asChild variant="neutral" size="lg" className="mt-8">
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer">
            <Github size={18} /> Code on GitHub
          </a>
        </Button>
      </div>
    </section>
  </div>
);

export default SkillsPage;
