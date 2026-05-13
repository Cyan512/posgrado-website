import Link from 'next/link';
import { cn } from '../lib/cn';

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'destructive' | 'link';
  size?: 'default' | 'xs' | 'sm' | 'lg' | 'icon' | 'icon-xs' | 'icon-sm' | 'icon-lg';
}

export default function Button({
  href,
  children,
  className,
  variant = 'default',
  size = 'default',
}: Props) {
  const variants = {};
  return (
    <Link href={href} className={cn('', className)}>
      {children}
    </Link>
  );
}
