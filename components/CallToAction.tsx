import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PERSONAL_INFO } from '../constants';
import { Button } from './ui/Button';

/**
 * The home page used to carry a full second copy of the contact form. This
 * points at /contact instead so there is one form on the site.
 */
const CallToAction: React.FC = () => (
  <section className="border-b-3 border-ink bg-flame text-white">
    <div className="mx-auto max-w-5xl px-4 py-16 text-center md:px-8 md:py-24">
      <h2 className="font-display text-[clamp(2.25rem,7vw,4.5rem)] uppercase leading-[0.9] tracking-tight">
        Got something
        <br />
        that needs building?
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-lg font-medium md:text-xl">
        Contract work, a full-time role, or a question about one of the projects — all fine.
        I answer within a couple of days.
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button asChild variant="inverse" size="lg">
          <Link to="/contact">
            Start a conversation <ArrowRight size={18} />
          </Link>
        </Button>
        <Button asChild variant="neutral" size="lg">
          <a href={`mailto:${PERSONAL_INFO.email}`}>
            <Mail size={18} /> Email directly
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default CallToAction;
