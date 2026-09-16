import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

/**
 * The press behaviour is the whole point: the element slides into its own
 * drop shadow instead of fading or scaling. Steps-based transitions keep it
 * feeling mechanical rather than springy.
 */
const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 border-3 border-ink rounded-brutal font-bold uppercase tracking-wide ' +
    'shadow-brutal-md transition-[transform,box-shadow] duration-100 ease-brutal ' +
    'hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal ' +
    'active:translate-x-[5px] active:translate-y-[5px] active:shadow-none ' +
    'disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-flame text-white',
        acid: 'bg-acid text-ink',
        sky: 'bg-sky text-ink',
        grape: 'bg-grape text-white',
        neutral: 'bg-surface text-ink',
        inverse: 'bg-ink text-paper',
      },
      size: {
        sm: 'h-9 px-3 text-xs',
        md: 'h-12 px-5 text-sm',
        lg: 'h-14 px-7 text-base',
        icon: 'h-11 w-11 shrink-0',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
