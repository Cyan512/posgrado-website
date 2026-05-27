import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, HandCoins } from 'lucide-react';
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface Props {
  title: string;
  href: string;
  call: boolean;
  time_end: string;
  mode: string;
  image: string;
}

export function CardImage({ title, href, call, time_end, mode, image }: Props) {
  return (
    <Card className="relative mx-auto flex h-full w-full max-w-sm flex-col overflow-hidden p-0">
      <div className="relative h-48 w-full flex-shrink-0">
        <img src={image} alt="Event cover" className="h-full w-full object-cover brightness-70" />
        {call && (
          <div className="absolute top-4 left-1/2 z-10 -translate-x-1/2">
            <Badge variant="secondary">En Convocatoria</Badge>
          </div>
        )}
        <div className="absolute right-4 bottom-4 left-4 z-10">
          <CardTitle className="line-clamp-3 text-white">{title}</CardTitle>
        </div>
      </div>
      <CardHeader className="flex-grow">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Calendar size={20} className="flex-shrink-0 text-gray-600 dark:text-gray-400" />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                Inscripciones hasta:
              </span>{' '}
              {time_end}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <HandCoins size={20} className="flex-shrink-0 text-gray-600 dark:text-gray-400" />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              <span className="font-semibold text-gray-900 dark:text-gray-100">Modalidad:</span>{' '}
              {mode}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardFooter className="mt-auto p-2">
        <Button className="w-full" variant="link">
          <Link href={href} className="w-full">
            Ver Mas
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
