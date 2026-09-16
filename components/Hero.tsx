import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Instagram, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PERSONAL_INFO } from '../constants';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="border-b-3 border-ink">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        {/* Copy */}
        <div>
          <Badge variant="acid" className="mb-6 shadow-brutal">
            <span className="mr-1 inline-block h-2 w-2 bg-ink animate-blink" aria-hidden />
            Open to work
          </Badge>

          <h1 className="font-display text-[clamp(2.75rem,9vw,6rem)] uppercase leading-[0.86] tracking-tight">
            Flutter
            <br />
            <span className="text-flame">apps</span> that
            <br />
            ship.
          </h1>

          <p className="mt-7 max-w-xl text-lg font-medium leading-relaxed text-muted md:text-xl">
            {PERSONAL_INFO.bio}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="primary" size="lg">
              <Link to="/projects">
                See the work <ArrowRight size={18} />
              </Link>
            </Button>
            <Button asChild variant="neutral" size="lg">
              <Link to="/contact">Get in touch</Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <SocialLink href={PERSONAL_INFO.github} label="GitHub">
              <Github size={18} />
            </SocialLink>
            <SocialLink href={PERSONAL_INFO.linkedin} label="LinkedIn">
              <Linkedin size={18} />
            </SocialLink>
            <SocialLink href={PERSONAL_INFO.instagram} label="Instagram">
              <Instagram size={18} />
            </SocialLink>
            <SocialLink href={`mailto:${PERSONAL_INFO.email}`} label="Email">
              <Mail size={18} />
            </SocialLink>
          </div>
        </div>

        {/* Portrait — tilted frame, hard shadow, sticker overlays */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="absolute -right-3 -top-3 hidden h-full w-full border-3 border-ink bg-sky lg:block" aria-hidden />
          <div className="relative rotate-[-2deg] border-3 border-ink bg-surface p-3 shadow-brutal-xl transition-transform duration-150 ease-brutal hover:rotate-0">
            <img
              src={PERSONAL_INFO.avatar}
              alt={PERSONAL_INFO.name}
              loading="eager"
              className="aspect-[4/5] w-full border-3 border-ink object-cover"
            />
            <div className="mt-3 flex items-center justify-between gap-2 font-mono text-xs font-bold uppercase">
              <span className="flex items-center gap-1.5">
                <MapPin size={13} /> {PERSONAL_INFO.location}
              </span>
              <span className="text-muted">/ {PERSONAL_INFO.tagline}</span>
            </div>
          </div>

          {/* Top-left so it never lands on the caption row below the photo. */}
          <span className="absolute -left-4 -top-4 rotate-[-8deg] border-3 border-ink bg-acid px-3 py-2 font-display text-sm uppercase text-ink shadow-brutal">
            Est. 2022
          </span>
        </div>
      </div>
    </section>
  );
};

const SocialLink: React.FC<{ href: string; label: string; children: React.ReactNode }> = ({
  href,
  label,
  children,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 border-3 border-ink bg-surface px-3 py-2 font-mono text-xs font-bold uppercase tracking-wide shadow-brutal transition-[transform,box-shadow,background-color] duration-100 ease-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-acid hover:shadow-none"
  >
    {children}
    {label}
  </a>
);

export default Hero;
