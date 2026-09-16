import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PERSONAL_INFO } from '../constants';

const social = [
  { href: PERSONAL_INFO.github, label: 'GitHub', Icon: Github },
  { href: PERSONAL_INFO.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: PERSONAL_INFO.instagram, label: 'Instagram', Icon: Instagram },
  { href: `mailto:${PERSONAL_INFO.email}`, label: 'Email', Icon: Mail },
];

const pages = [
  { to: '/projects', label: 'Work' },
  { to: '/skills', label: 'Stack' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const Footer: React.FC = () => (
  <footer className="border-t-3 border-ink bg-ink text-paper">
    <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
      <div className="flex flex-col justify-between gap-10 md:flex-row">
        <div>
          <Link to="/" className="font-display text-3xl uppercase tracking-tight">
            {PERSONAL_INFO.name}
          </Link>
          <p className="mt-3 max-w-sm font-medium text-paper/70">{PERSONAL_INFO.tagline}</p>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="mt-4 inline-block border-b-2 border-flame font-mono text-sm font-bold hover:text-flame"
          >
            {PERSONAL_INFO.email}
          </a>
        </div>

        <nav aria-label="Footer">
          <p className="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-paper/50">
            Pages
          </p>
          <ul className="space-y-2">
            {pages.map((page) => (
              <li key={page.to}>
                <Link
                  to={page.to}
                  className="font-bold uppercase tracking-wide hover:text-acid"
                >
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-paper/50">
            Elsewhere
          </p>
          <ul className="flex gap-2">
            {social.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center border-3 border-paper transition-colors duration-100 hover:bg-acid hover:text-ink"
                >
                  <Icon size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-2 border-t-3 border-paper/20 pt-6 font-mono text-xs uppercase text-paper/50 sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {PERSONAL_INFO.name}
        </p>
        <p>React · Vite · Tailwind · Hand-built</p>
      </div>
    </div>
  </footer>
);

export default Footer;
