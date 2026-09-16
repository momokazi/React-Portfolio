import React from 'react';
import { ArrowRight, Briefcase, MapPin, PenLine, Server, WifiOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EXPERIENCE, PERSONAL_INFO } from '../constants';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { SectionHeading } from './ui/SectionHeading';

/** Grounded in the actual work below, rather than three interchangeable virtues. */
const PRINCIPLES = [
  {
    icon: Server,
    tone: 'bg-acid',
    title: 'I build the backend too',
    body: 'Knowing Node.js and Firebase means I can design the API I want to consume instead of working around one I was handed.',
  },
  {
    icon: WifiOff,
    tone: 'bg-sky',
    title: 'Assume the network is gone',
    body: 'Pill Tracker had to work in a basement with no signal. That pushed me toward offline-first storage as a default, not a feature.',
  },
  {
    icon: PenLine,
    tone: 'bg-rose',
    title: 'Writing is part of the job',
    body: 'Years of academic writing on the side made me better at PR descriptions, handover docs, and explaining a tradeoff to someone non-technical.',
  },
];

const AboutPage: React.FC = () => (
  <div>
    {/* Intro */}
    <section className="border-b-3 border-ink bg-surface">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:px-8 md:py-20 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="rotate-[2deg] border-3 border-ink bg-paper p-3 shadow-brutal-xl transition-transform duration-150 ease-brutal hover:rotate-0">
            <img
              src={PERSONAL_INFO.avatar}
              alt={PERSONAL_INFO.name}
              className="aspect-[4/5] w-full border-3 border-ink object-cover"
            />
          </div>
          <span className="absolute -bottom-4 -right-3 rotate-[6deg] border-3 border-ink bg-flame px-3 py-2 font-display text-sm uppercase text-white shadow-brutal">
            Hello
          </span>
        </div>

        <div>
          <SectionHeading
            eyebrow="About"
            tone="grape"
            title={
              <>
                I write apps.
                <br />
                Mostly in Dart.
              </>
            }
          />

          <div className="mt-6 space-y-4 text-lg font-medium leading-relaxed text-muted">
            <p>
              I&apos;m Husnain — a Flutter developer in Lahore. I got here by being nosy about
              why some apps feel instant and others feel like wading through mud, and never
              quite losing interest in the answer.
            </p>
            <p>
              Since 2024 I&apos;ve been shipping production mobile apps, currently at Techscale
              and Dobby. The work is mostly Flutter and Dart on the front, Node.js and Firebase
              behind it. Six of the things I&apos;ve built are on the work page, including a
              package I put on the open-source shelf after writing the same chat UI for the
              third time.
            </p>
            <p>
              Before any of that I was a content writer — and still am, part-time, on Master&apos;s
              theses for clients in Australia, the UK and the UAE. It pays for hardware and keeps
              my writing sharp.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            <Badge variant="surface" className="shadow-brutal">
              <MapPin size={12} /> {PERSONAL_INFO.location}
            </Badge>
            <Badge variant="surface" className="shadow-brutal">
              <Briefcase size={12} /> Flutter developer
            </Badge>
            <Badge variant="acid" className="shadow-brutal">
              Open to work
            </Badge>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="primary" size="lg">
              <Link to="/contact">
                Get in touch <ArrowRight size={18} />
              </Link>
            </Button>
            <Button asChild variant="neutral" size="lg">
              <Link to="/projects">See the work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="border-b-3 border-ink">
      <div className="mx-auto max-w-4xl px-4 py-16 md:px-8 md:py-20">
        <SectionHeading eyebrow="History" tone="mint" title="Where I've worked" align="center" />

        <ol className="relative mt-14 space-y-8">
          {/* Square-capped spine instead of a hairline */}
          <div
            className="absolute bottom-0 left-[26px] top-2 w-[3px] bg-ink md:left-[30px]"
            aria-hidden
          />

          {EXPERIENCE.map((item) => (
            <li key={`${item.company}-${item.role}-${item.period}`} className="relative flex gap-5 md:gap-7">
              <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden border-3 border-ink bg-white shadow-brutal md:h-16 md:w-16">
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-contain p-1"
                  />
                ) : (
                  <Briefcase size={20} className="text-ink" aria-hidden />
                )}
              </span>

              <Card interactive className="flex-1 p-5">
                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                  <div>
                    <h3 className="font-display text-xl uppercase leading-tight tracking-tight">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm font-bold">
                      {item.company}
                      <span className="font-medium text-muted"> · {item.type}</span>
                    </p>
                  </div>
                  <Badge variant="surface" size="sm" className="shrink-0 self-start">
                    {item.period}
                  </Badge>
                </div>

                <p className="mt-2 flex items-center gap-1.5 font-mono text-xs uppercase text-muted">
                  <MapPin size={12} aria-hidden /> {item.location}
                </p>
                <p className="mt-3 text-[15px] font-medium leading-relaxed text-muted">
                  {item.description}
                </p>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* How I work */}
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <SectionHeading eyebrow="How I work" tone="flame" title="Three things that stuck" />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PRINCIPLES.map(({ icon: Icon, tone, title, body }) => (
            <Card key={title} interactive className="bg-paper p-6">
              <span
                className={`mb-5 flex h-12 w-12 items-center justify-center border-3 border-ink text-ink ${tone}`}
              >
                <Icon size={22} aria-hidden />
              </span>
              <h3 className="font-display text-xl uppercase leading-tight tracking-tight">
                {title}
              </h3>
              <p className="mt-3 font-medium leading-relaxed text-muted">{body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
