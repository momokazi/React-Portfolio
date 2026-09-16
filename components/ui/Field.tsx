import React from 'react';
import { cn } from '../../lib/utils';

/**
 * Inputs read as pressed-in panels: inset hard shadow, thick border, and a
 * flat accent fill on focus. No rings, no glow.
 */
const fieldBase =
  'w-full bg-paper border-3 border-ink rounded-brutal px-4 py-3 text-ink font-medium ' +
  'placeholder:text-muted placeholder:font-normal shadow-brutal-inset ' +
  'outline-none transition-colors duration-100 focus:bg-acid/30 disabled:opacity-50';

export const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({
  className,
  ...props
}) => (
  <label
    className={cn('mb-2 block font-mono text-xs font-bold uppercase tracking-widest', className)}
    {...props}
  />
);

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input ref={ref} className={cn(fieldBase, className)} {...props} />
  )
);
Input.displayName = 'Input';

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea ref={ref} className={cn(fieldBase, 'resize-none', className)} {...props} />
));
Textarea.displayName = 'Textarea';

export const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, ...props }, ref) => (
  <select
    ref={ref}
    className={cn(fieldBase, 'cursor-pointer appearance-none pr-12', className)}
    {...props}
  />
));
Select.displayName = 'Select';
