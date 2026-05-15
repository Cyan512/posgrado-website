import Link from 'next/link';
import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/src/lib/cn';

const buttonVariants = cva(
  'group inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary',

        secondary: 'bg-secondary text-white hover:bg-secondary/90 focus-visible:ring-secondary',

        tertiary: 'bg-tertiary text-white hover:bg-tertiary/90 focus-visible:ring-tertiary',

        outline:
          'border border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-primary',

        ghost: 'text-primary hover:bg-primary/10 focus-visible:ring-primary',

        light: 'bg-back text-fonts border border-primary/20 hover:bg-primary hover:text-white',
      },

      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-13 px-8 text-lg',
        icon: 'h-11 w-11',
      },

      fullWidth: {
        true: 'w-full',
        false: '',
      },

      arrow: {
        true: '',
        false: '',
      },
    },

    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
      arrow: false,
    },
  }
);

interface Props extends VariantProps<typeof buttonVariants> {
  href: string;
  children?: ReactNode;
  className?: string;
}

export default function Button({
  href,
  children,
  className,
  variant,
  size,
  fullWidth,
  arrow,
}: Props) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({
          variant,
          size,
          fullWidth,
          arrow,
        }),
        className
      )}
    >
      {size !== 'icon' && children}

      {arrow && (
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </Link>
  );
}
