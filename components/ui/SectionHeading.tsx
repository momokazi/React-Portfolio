import React from 'react';
import { cn } from '../../lib/utils';
import { Badge } from './Badge';

interface SectionHeadingProps {
  /** Small mono kicker above the title. */
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  /** Badge colour for the eyebrow, so sections stay visually distinct. */
  tone?: 'flame' | 'acid' | 'sky' | 'grape' | 'rose' | 'mint';
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  lead,
  tone = 'acid',
  align = 'left',
  className,
}) => (
  <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
    {eyebrow && (
      <Badge variant={tone} className="mb-5 shadow-brutal">
        {eyebrow}
      </Badge>
    )}
    <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-tight md:text-6xl">
      {title}
    </h2>
    {lead && <p className="mt-5 text-lg font-medium text-muted md:text-xl">{lead}</p>}
  </div>
);
