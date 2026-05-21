import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface Props {
  title: string;
  description?: string;
  href: string;
  call: boolean;
}

export function CardImage({ title, description, href, call }: Props) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="relative">
        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
        <img
          src="https://avatar.vercel.sh/shadcn1"
          alt="Event cover"
          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        />
        {call && (
          <div className="absolute top-3 right-3 z-20">
            <Badge variant="secondary">En Convocatoria</Badge>
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">
          <Link href={href} className="w-full">
            Ver Mas
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
