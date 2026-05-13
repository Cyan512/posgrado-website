import { cn } from '@/src/lib/cn';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: Props) {
  return <div className={cn('mx-auto max-w-7xl px-6 lg:px-8', className)}>{children}</div>;
}
