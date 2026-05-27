'use client';

import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { CardImage } from '@/components/card-image';
import { useStrapi } from '@/src/hooks/use-strapi';
import CategoriaHero from './categoria-hero';
import { cn } from '@/src/lib/cn';

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
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre',
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

  const [search, setSearch] = useState('');
  const [modeFilter, setModeFilter] = useState('');

  const programs = useMemo(() => data?.data ?? [], [data]);

  const modes = useMemo(() => {
    const unique = new Set(programs.map((p) => p.mode).filter(Boolean));
    return Array.from(unique).sort();
  }, [programs]);

  const filtered = useMemo(() => {
    return programs
      .filter((item): item is ProgramWithSlug => item.slug !== null)
      .filter((item) => {
        const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
        const matchesMode = !modeFilter || item.mode === modeFilter;
        return matchesSearch && matchesMode;
      });
  }, [programs, search, modeFilter]);

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
        {programs.length > 0 && (
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-xs">
              <Search className="pointer-events-none absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por nombre..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={cn(
                  'w-full rounded-lg border border-gray-300 py-2.5 pr-4 pl-10 text-sm',
                  'focus:border-primary focus:ring-primary/20 placeholder:text-gray-400 focus:ring-2 focus:outline-none'
                )}
              />
            </div>

            <select
              value={modeFilter}
              onChange={(e) => setModeFilter(e.target.value)}
              className={cn(
                'w-full rounded-lg border border-gray-300 py-2.5 pr-8 pl-4 text-sm sm:w-auto',
                'focus:border-primary focus:ring-primary/20 focus:ring-2 focus:outline-none',
                'appearance-none bg-white bg-[url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%239ca3af%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.23%207.21a.75.75%200%20011.06.02L10%2011.168l3.71-3.938a.75.75%200%20111.08%201.04l-4.25%204.5a.75.75%200%2001-1.08%200l-4.25-4.5a.75.75%200%2001.02-1.06z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E")] bg-[length:1.25rem_1.25rem] bg-[right_0.5rem_center] bg-no-repeat'
              )}
            >
              <option value="">Todas las modalidades</option>
              {modes.map((mode) => (
                <option key={mode} value={mode}>
                  {mode}
                </option>
              ))}
            </select>
          </div>
        )}

        {filtered.length === 0 ? (
          <p>No hay programas disponibles.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((item) => (
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
