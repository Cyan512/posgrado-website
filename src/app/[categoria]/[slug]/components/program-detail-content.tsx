'use client';

import { useStrapi } from '@/src/hooks/use-strapi';
import { StrapiResponse } from '@/src/models/strapi/strapi';
import { Program } from '@/src/models/strapi/collection-types/program';
import Button from '@/src/components/button';
import { Calendar, HandCoins, CheckCircle2, XCircle } from 'lucide-react';
import { TabsDemo } from '@/components/tabs-demo';

const months = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
];

function formatDate(dateString: string): string {
  const [year, month, day] = dateString.split('-');
  return `${parseInt(day)} de ${months[parseInt(month) - 1]} de ${year}`;
}

type Props = {
  categoria: string;
  slug: string;
};

export default function ProgramDetailContent({ categoria, slug }: Props) {
  const endpoint = `/api/programs?populate=*&filters[slug][$eq]=${encodeURIComponent(slug)}`;
  const { data, loading, error } = useStrapi<StrapiResponse<Program[]>>(endpoint);

  if (loading) {
    return (
      <section className="flex h-screen items-center justify-center">
        <h1 className="text-3xl font-bold">Cargando...</h1>
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex h-screen items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500">{error}</h1>
      </section>
    );
  }

  const program = data?.data?.[0];

  if (!program) {
    return (
      <section className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Programa no encontrado</h1>
          <Button href={`/${categoria}`} variant="primary" className="mt-6">
            Volver a {categoria}
          </Button>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="relative">
        <div className="relative h-72 md:h-96">
          <div className="absolute inset-0 z-10 bg-black/50" />
          <img
            src={program.image.url}
            alt={program.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-end p-6 md:p-12">
            <div>
              <h1 className="text-3xl font-bold text-white md:text-5xl">
                {program.name}
              </h1>
              <p className="mt-2 text-lg text-white/80">{program.program_type?.name}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="mb-4 text-2xl font-semibold">Descripción</h2>
            <p className="text-gray-700 leading-relaxed dark:text-gray-300">
              {program.description}
            </p>
            <TabsDemo/>
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl border p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold">Detalles</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  {program.call ? (
                    <CheckCircle2 size={20} className="text-green-600" />
                  ) : (
                    <XCircle size={20} className="text-red-500" />
                  )}
                  <span className="text-sm">
                    {program.call ? 'En Convocatoria' : 'Convocatoria cerrada'}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar size={20} className="text-gray-600" />
                  <span className="text-sm">
                    <span className="font-semibold">Inscripciones hasta:</span>{' '}
                    {formatDate(program.time_end)}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <HandCoins size={20} className="text-gray-600" />
                  <span className="text-sm">
                    <span className="font-semibold">Modalidad:</span> {program.mode}
                  </span>
                </div>
              </div>
            </div>

            <Button
              href={`/${categoria}`}
              variant="outline"
              fullWidth
              arrow
            >
              Volver a {categoria}
            </Button>
          </aside>
        </div>
      </section>
    </>
  );
}
