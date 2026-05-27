'use client';

import { CardImage } from '@/components/card-image';
import { useStrapi } from '@/src/hooks/use-strapi';
import CategoriaHero from './categoria-hero';

import { StrapiImage } from '@/src/models/strapi/shared/image';

type Program = {
  id: number;
  name: string;
  slug: string | null;
  call: boolean;
  time_end: string;
  mode: string;
  image: StrapiImage;
};

type ProgramWithSlug = Program & { slug: string };

type StrapiResponse = {
  data: Program[];
};

type Props = {
  categoria: string;
  categoriaStrapi: string;
};

// Función para formatear fecha de YYYY-MM-DD a "DD de Mes de YYYY"
function formatDate(dateString: string): string {
  const months = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];

  const [year, month, day] = dateString.split('-');
  const monthName = months[parseInt(month) - 1];

  return `${parseInt(day)} de ${monthName} de ${year}`;
}

export default function CategoriaContent({ categoria, categoriaStrapi }: Props) {
  const endpoint = `/api/programs?populate=*&filters[program_type][name][$eq]=${encodeURIComponent(
    categoriaStrapi
  )}`;

  const { data, loading, error } = useStrapi<StrapiResponse>(endpoint);

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

  return (
    <>
      <CategoriaHero categoria={categoria} />
      <section className="container mx-auto px-4 py-10">
        {data?.data.length === 0 ? (
          <p>No hay programas disponibles.</p>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
            {data?.data
              .filter((item): item is ProgramWithSlug => item.slug !== null)
              .map((item) => (
                <CardImage
                  key={item.id}
                  title={item.name}
                  href={`/${categoria}/${item.slug}`}
                  call={item.call}
                  time_end={formatDate(item.time_end)}
                  mode={item.mode}
                  image={item.image.url}
                />
              ))}
          </div>
        )}
      </section>
    </>
  );
}
