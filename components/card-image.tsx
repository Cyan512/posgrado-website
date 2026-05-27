import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, HandCoins } from 'lucide-react';
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { StrapiImage } from '@/src/models/strapi/shared/image';

interface Props {
  title: string;
  description?: string;
  href: string;
  call: boolean;
  time_end: string;
  mode: string;
  image: string;
}

export function CardImage({ title, description, href, call, time_end, mode, image }: Props) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="relative">
        <div className="absolute inset-0 z-30" />
        <img
          src={image}
          alt="Event cover"
          className="relative z-20 w-full object-cover brightness-70"
        />
        <div className="absolute inset-0 z-40 p-4">
          {call && (
            <div className="absolute top-0 left-1/2 z-100 -translate-x-1/2">
              <Badge variant="secondary">En Convocatoria</Badge>
            </div>
          )}
          <div className="absolute right-4 bottom-4 left-4 z-100">
            <CardTitle className="text-white">{title}</CardTitle>
          </div>
        </div>
      </div>
      <CardHeader className="">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Calendar size={20} className="text-gray-600 dark:text-gray-400" />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                Inscripciones hasta:
              </span>{' '}
              {time_end}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <HandCoins size={20} className="text-gray-600 dark:text-gray-400" />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              <span className="font-semibold text-gray-900 dark:text-gray-100">Modalidad:</span>{' '}
              {mode}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardFooter className="p-2">
        <Button className="w-full" variant="link">
          <Link href={href} className="w-full">
            Ver Mas
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
