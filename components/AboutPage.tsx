import React from 'react';
import {
  ArrowRight,
  Award,
  Briefcase,
  GaugeCircle,
  GraduationCap,
  MapPin,
  PenLine,
  Users,
  WifiOff,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  CERTIFICATIONS,
  COMMUNITY,
  EDUCATION,
  EXPERIENCE,
  PERSONAL_INFO,
} from '../constants';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { SectionHeading } from './ui/SectionHeading';

/** Each one traces back to something in the experience list below. */
const PRINCIPLES = [
  {
    icon: WifiOff,
    tone: 'bg-sky',
    title: 'Assume the network is gone',
    body: 'Dobby’s technicians work on site without a reliable connection. I re-architected state around GetX with a local caching layer and background syncing so the app keeps working when the network does not.',
  },
  {
    icon: GaugeCircle,
    tone: 'bg-acid',
    title: 'Measure before claiming',
    body: '"Feels faster" is not a result — a number is. The work I did on Dobby cut in-app API loading times by more than half, and that is the version worth putting in writing.',
  },
  {
    icon: PenLine,
    tone: 'bg-rose',
    title: 'Writing is part of the job',
    body: 'Years of academic writing on the side made me better at PR descriptions, handover docs, and explaining a tradeoff to someone who does not share my vocabulary.',
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
              I&apos;m Husnain — a Flutter developer in Lahore, and a Computer Science graduate
              of Riphah International University. I got here by being nosy about why some apps
              feel instant and others feel like wading through mud, and never quite losing
              interest in the answer.
            </p>
            <p>
              At Techscale I build the Flutter app for{' '}
              <strong className="text-ink">Dobby</strong>, a coffee-service operations platform,
              and tailor it for operators across Europe and the UK. It has five distinct user
              roles, technicians who regularly work without signal, and a permission model that
              has to hold up for all of them.
            </p>
            <p>
              Two things I&apos;ve built are public rather than just described: the{' '}
              <a
                href={PERSONAL_INFO.pubDev}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b-2 border-flame text-ink hover:bg-acid"
              >
                gemini_chat_fab
              </a>{' '}
              package on pub.dev, and Rizz Up on the Google Play Store.
            </p>
            <p>
              Before any of that I was a content writer — and still am, part-time, on
              Master&apos;s theses for clients in Australia, the UK and the UAE.
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
            <li
              key={`${item.company}-${item.role}-${item.period}`}
              className="relative flex gap-5 md:gap-7"
            >
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

                {item.highlights && (
                  <ul className="mt-4 space-y-2 border-t-3 border-ink pt-4">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-2.5 text-[15px] font-medium leading-relaxed text-muted"
                      >
                        <span
                          className="mt-[7px] h-2 w-2 shrink-0 bg-flame"
                          aria-hidden
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* Education + certifications */}
    <section className="border-b-3 border-ink bg-surface">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:px-8 md:py-20 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Education" tone="sky" title="Studied" />
          <ul className="mt-8 space-y-5">
            {EDUCATION.map((item) => (
              <li key={item.institution}>
                <Card interactive className="flex items-start gap-4 bg-paper p-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border-3 border-ink bg-sky text-ink">
                    <GraduationCap size={22} aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-lg uppercase leading-tight tracking-tight">
                      {item.qualification}
                    </h3>
                    <p className="mt-1 text-sm font-bold">{item.institution}</p>
                    <p className="mt-1 font-mono text-xs uppercase text-muted">
                      {item.period} · {item.location}
                    </p>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <SectionHeading eyebrow="Certifications" tone="acid" title="Certified" />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {CERTIFICATIONS.map((cert) => (
              <li key={cert.name}>
                <Card interactive className="flex h-full items-start gap-3 bg-paper p-4">
                  <Award size={20} className="mt-0.5 shrink-0 text-flame" aria-hidden />
                  <div>
                    <h3 className="text-sm font-bold leading-snug">{cert.name}</h3>
                    <p className="mt-1 font-mono text-[11px] uppercase text-muted">
                      {cert.issuer}
                    </p>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* How I work */}
    <section className="border-b-3 border-ink">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <SectionHeading eyebrow="How I work" tone="flame" title="Three things that stuck" />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PRINCIPLES.map(({ icon: Icon, tone, title, body }) => (
            <Card key={title} interactive className="bg-surface p-6">
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

    {/* Community */}
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <SectionHeading
          eyebrow="Off the keyboard"
          tone="grape"
          title="Clubs, campuses, Comic Con"
          lead="I founded a gaming club, then spent a few years being the person who gets students to turn up to things."
        />

        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {COMMUNITY.map((item) => (
            <li key={`${item.organisation}-${item.role}`}>
              <Card interactive className="flex h-full flex-col bg-paper p-5">
                <span className="mb-4 flex h-11 w-11 items-center justify-center border-3 border-ink bg-grape text-white">
                  <Users size={20} aria-hidden />
                </span>
                <h3 className="font-display text-lg uppercase leading-tight tracking-tight">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm font-bold">{item.organisation}</p>
                <p className="mt-1 font-mono text-xs uppercase text-muted">{item.period}</p>
                <p className="mt-3 text-sm font-medium leading-relaxed text-muted">
                  {item.description}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </div>
);

export default AboutPage;
