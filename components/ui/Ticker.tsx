import React from 'react';
import Marquee from 'react-fast-marquee';
import { cn } from '../../lib/utils';

interface TickerProps {
  items: string[];
  className?: string;
  /** Tailwind bg/text classes for the strip. */
  tone?: string;
  direction?: 'left' | 'right';
  speed?: number;
}

/**
 * Full-bleed scrolling strip between sections — the brutalist answer to a
 * divider. Sits above the page grid on thick ink rules.
 */
export const Ticker: React.FC<TickerProps> = ({
  items,
  className,
  tone = 'bg-ink text-paper',
  direction = 'left',
  speed = 55,
}) => (
  <div className={cn('border-y-3 border-ink overflow-hidden py-3', tone, className)}>
    <Marquee direction={direction} speed={speed} autoFill gradient={false}>
      {items.map((item, i) => (
        <span
          key={`${item}-${i}`}
          className="mx-6 inline-flex items-center gap-6 font-display text-lg uppercase tracking-tight md:text-xl"
        >
          {item}
          <span aria-hidden className="text-flame">
            ✳
          </span>
        </span>
      ))}
    </Marquee>
  </div>
);
