import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EXPERIENCE, PERSONAL_INFO } from '../constants';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { SectionHeading } from './ui/SectionHeading';

const About: React.FC = () => {
  const current = EXPERIENCE.filter((item) => item.period.includes('Present')).slice(0, 2);

  return (
    <section id="about" className="border-b-3 border-ink">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Who's writing this"
            tone="rose"
            title={
              <>
                Lahore-based,
                <br />
                Flutter-shaped
              </>
            }
          />
          <div className="mt-6 space-y-4 text-lg font-medium leading-relaxed text-muted">
            <p>
              I started out wanting to know why apps felt fast or slow, which turned into a
              career writing them. These days that means Flutter on the front and Node.js
              behind it, so I am rarely blocked waiting on someone else&apos;s endpoint.
            </p>
            <p>
              Outside the day job I write academic research for clients abroad — which, oddly,
              is the thing that taught me to explain technical work to people who do not share
              my vocabulary.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            <Badge variant="surface" className="shadow-brutal">
              <MapPin size={12} /> {PERSONAL_INFO.location}
            </Badge>
            <Badge variant="surface" className="shadow-brutal">
              Since 2022
            </Badge>
            <Badge variant="surface" className="shadow-brutal">
              Open to remote
            </Badge>
          </div>

          <Button asChild variant="neutral" size="md" className="mt-8">
            <Link to="/about">
              Full history <ArrowRight size={16} />
            </Link>
          </Button>
        </div>

        {/* Current roles only — the whole timeline lives on /about */}
        <div>
          <p className="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-muted">
            Currently
          </p>
          <ul className="space-y-5">
            {current.map((item) => (
              <li key={`${item.company}-${item.role}`}>
                <Card interactive className="flex items-start gap-4 p-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden border-3 border-ink bg-white">
                    {item.logo ? (
                      <img
                        src={item.logo}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-contain p-1"
                      />
                    ) : (
                      <span className="font-display text-lg text-ink">{item.company[0]}</span>
                    )}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg uppercase leading-tight tracking-tight">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm font-bold">{item.company}</p>
                    <p className="mt-0.5 font-mono text-xs uppercase text-muted">{item.period}</p>
                    <p className="mt-3 text-sm font-medium leading-snug text-muted">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
