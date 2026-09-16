import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const cardVariants = cva('border-3 border-ink rounded-brutal', {
  variants: {
    variant: {
      surface: 'bg-surface',
      paper: 'bg-paper',
      ink: 'bg-ink text-paper',
      flame: 'bg-flame text-white',
      acid: 'bg-acid text-ink',
      sky: 'bg-sky text-ink',
      grape: 'bg-grape text-white',
      rose: 'bg-rose text-ink',
      mint: 'bg-mint text-ink',
    },
    shadow: {
      none: '',
      sm: 'shadow-brutal',
      md: 'shadow-brutal-md',
      lg: 'shadow-brutal-lg',
      xl: 'shadow-brutal-xl',
    },
    /** Lifts toward the cursor on hover. Opt-in, so static cards stay still. */
    interactive: {
      true:
        'transition-[transform,box-shadow] duration-100 ease-brutal ' +
        'hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-brutal-xl',
      false: '',
    },
  },
  defaultVariants: { variant: 'surface', shadow: 'md', interactive: false },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, shadow, interactive, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, shadow, interactive }), className)}
      {...props}
    />
  )
);
Card.displayName = 'Card';

export { Card, cardVariants };
