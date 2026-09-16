import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 border-2 border-ink rounded-brutal font-mono font-bold uppercase leading-none tracking-wide',
  {
    variants: {
      variant: {
        surface: 'bg-surface text-ink',
        ink: 'bg-ink text-paper',
        flame: 'bg-flame text-white',
        acid: 'bg-acid text-ink',
        sky: 'bg-sky text-ink',
        grape: 'bg-grape text-white',
        rose: 'bg-rose text-ink',
        mint: 'bg-mint text-ink',
      },
      size: {
        sm: 'px-1.5 py-1 text-[10px]',
        md: 'px-2.5 py-1.5 text-xs',
      },
    },
    defaultVariants: { variant: 'surface', size: 'md' },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge: React.FC<BadgeProps> = ({ className, variant, size, ...props }) => (
  <span className={cn(badgeVariants({ variant, size }), className)} {...props} />
);

export { Badge, badgeVariants };
