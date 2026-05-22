'use client';

import { useStrapi } from '@/src/hooks/use-strapi';
import { ProgramType } from '@/src/models/strapi/collection-types/program_type';
import { HomePrograms } from '@/src/models/strapi/pages/home';
import { StrapiResponse } from '@/src/models/strapi/strapi';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  data: HomePrograms;
}

export default function Programs({ data }: Props) {
  const {
    data: programs,
    loading,
    error,
  } = useStrapi<StrapiResponse<ProgramType[]>>('/api/program-types?populate=*');
  console.log('test', programs);

  const programsList = programs?.data ?? [];
  return (
    <section className="bg-back py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-primary relative inline-block text-3xl font-bold md:text-4xl">
            {data.title}
            <span className="bg-secondary absolute bottom-0 left-0 h-1 w-full" />
          </h2>
        </div>

        <div className="mt-10 flex h-137.5 w-full items-stretch gap-2 max-md:h-auto max-md:flex-col max-md:gap-3">
          {programsList.map((program) => (
            <Link
              key={program.id}
              href={program.link.href}
              className="group relative h-35 w-full shrink-0 overflow-hidden rounded-2xl transition-all duration-500 ease-in-out focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none md:h-full md:w-auto md:min-w-0 md:flex-1 md:hover:flex-3 md:focus-visible:flex-3"
            >
              <Image
                src={program.image.url}
                alt={program.name}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-4 md:hidden">
                <h3 className="text-base font-bold tracking-wide text-white uppercase drop-shadow-lg">
                  {program.name}
                </h3>

                <span className="mt-1 text-sm font-medium text-white/80">Ver más</span>
              </div>

              <div className="absolute inset-0 hidden px-6 opacity-100 transition-opacity duration-300 group-hover:opacity-0 md:block">
                <span className="absolute bottom-6 rotate-180 text-xl font-bold tracking-widest text-white uppercase drop-shadow [writing-mode:vertical-rl]">
                  {program.name}
                </span>
              </div>

              <div className="absolute inset-0 hidden flex-col justify-end p-6 opacity-0 transition-opacity delay-150 duration-300 group-hover:opacity-100 md:flex">
                <h3 className="mb-3 text-xl font-bold tracking-wide text-white uppercase drop-shadow-lg">
                  {program.name}
                </h3>
                <span className="inline-flex w-fit items-center gap-1 rounded-full border border-white/60 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/20">
                  Ver más
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
