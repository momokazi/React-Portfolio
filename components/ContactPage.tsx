import React, { useState } from 'react';
import {
  Send,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { Input, Label, Select, Textarea } from './ui/Field';
import { SectionHeading } from './ui/SectionHeading';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xlgwjrkk';

const social = [
  { href: PERSONAL_INFO.github, label: 'GitHub', Icon: Github },
  { href: PERSONAL_INFO.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: PERSONAL_INFO.instagram, label: 'Instagram', Icon: Instagram },
];

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState<FormState>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setFormState('submitting');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        form.reset();
        setFormState('success');
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  return (
    <div>
      <section className="border-b-3 border-ink bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <SectionHeading
            eyebrow="Contact"
            tone="flame"
            title="Say something"
            lead="A role, a contract, or a question about one of the projects. The form goes straight to my inbox."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          {/* Details */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="font-display text-2xl uppercase leading-none tracking-tight">
                Direct
              </h2>

              <dl className="mt-6 space-y-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border-3 border-ink bg-flame text-white">
                    <Mail size={18} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <dt className="font-mono text-xs font-bold uppercase tracking-widest text-muted">
                      Email
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="break-all border-b-2 border-flame font-bold hover:bg-acid"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border-3 border-ink bg-sky text-ink">
                    <MapPin size={18} aria-hidden />
                  </span>
                  <div>
                    <dt className="font-mono text-xs font-bold uppercase tracking-widest text-muted">
                      Based in
                    </dt>
                    <dd className="mt-1 font-bold">{PERSONAL_INFO.location}</dd>
                  </div>
                </div>
              </dl>

              <ul className="mt-7 flex gap-2 border-t-3 border-ink pt-6">
                {social.map(({ href, label, Icon }) => (
                  <li key={label} className="flex-1">
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 border-3 border-ink bg-paper px-2 py-3 text-xs font-bold uppercase tracking-wide transition-colors duration-100 hover:bg-acid"
                    >
                      <Icon size={16} aria-hidden />
                      <span className="hidden sm:inline">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Card>

            <Card variant="acid" className="p-6">
              <h3 className="font-display text-lg uppercase tracking-tight">What to expect</h3>
              <ul className="mt-4 space-y-3 text-sm font-medium">
                <li className="flex gap-2.5">
                  <CheckCircle2 size={18} className="shrink-0" aria-hidden />
                  A reply within two working days.
                </li>
                <li className="flex gap-2.5">
                  <CheckCircle2 size={18} className="shrink-0" aria-hidden />
                  Rough scope and timeline if you have one — it helps.
                </li>
                <li className="flex gap-2.5">
                  <CheckCircle2 size={18} className="shrink-0" aria-hidden />
                  Put &ldquo;urgent&rdquo; in the message if it genuinely is.
                </li>
              </ul>
            </Card>
          </div>

          {/* Form */}
          <Card shadow="xl" className="p-6 md:p-8">
            {formState === 'success' ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="mb-6 flex h-20 w-20 items-center justify-center border-3 border-ink bg-mint shadow-brutal-md">
                  <Send size={34} aria-hidden />
                </span>
                <h2 className="font-display text-3xl uppercase tracking-tight">Sent</h2>
                <p className="mt-4 max-w-sm font-medium text-muted">
                  It&apos;s in my inbox. You&apos;ll hear back within a couple of days.
                </p>
                <Button
                  variant="neutral"
                  size="md"
                  className="mt-8"
                  onClick={() => setFormState('idle')}
                >
                  Send another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Your name</Label>
                    <Input id="name" name="name" type="text" required placeholder="Jane Doe" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="role">What's this about</Label>
                  <Select id="role" name="role" defaultValue="Project inquiry">
                    <option>Project inquiry</option>
                    <option>Job opportunity</option>
                    <option>Freelance work</option>
                    <option>Just saying hi</option>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={7}
                    required
                    placeholder="What you're building, roughly when you need it, and anything else worth knowing."
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={formState === 'submitting'}
                >
                  {formState === 'submitting' ? (
                    'Sending…'
                  ) : (
                    <>
                      Send message <Send size={18} />
                    </>
                  )}
                </Button>

                {formState === 'error' && (
                  <p
                    role="alert"
                    className="flex items-center gap-2 border-3 border-ink bg-flame px-4 py-3 text-sm font-bold text-white"
                  >
                    <AlertTriangle size={18} className="shrink-0" aria-hidden />
                    That didn&apos;t send. Email me directly at {PERSONAL_INFO.email}.
                  </p>
                )}
              </form>
            )}
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
