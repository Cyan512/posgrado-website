'use client';

import { useStrapi } from '@/src/hooks/use-strapi';
import { cn } from '@/src/lib/cn';
import { Program } from '@/src/models/strapi/collection-types/program';
import { ProgramType } from '@/src/models/strapi/collection-types/program_type';
import { HomeBanner } from '@/src/models/strapi/pages/home';
import { StrapiResponse } from '@/src/models/strapi/strapi';
import Image from 'next/image';

interface Props {
  data: HomeBanner;
}

export default function Banner({ data }: Props) {
  const {
    data: programs,
    loading,
    error,
  } = useStrapi<StrapiResponse<ProgramType[]>>('/api/program-types?populate=*');

  const programsList = programs?.data ?? [];

  return (
    <section className="relative flex min-h-112.5 w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={data.image.src.url}
          alt={data.image.alt}
          fill
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10 w-full px-4 py-8 lg:px-6 lg:py-16">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-0">
          {programsList.map((item, index) => (
            <div
              key={index}
              className={cn(
                'flex flex-col items-center text-center',
                index !== programsList.length - 1 ? 'lg:border-r lg:border-white/50' : ''
              )}
            >
              <div className="flex w-full flex-col items-center rounded-2xl bg-white/20 px-3 py-5 backdrop-blur-sm lg:hidden">
                <div className="mb-2 flex h-10 w-auto items-center justify-center">
                  <Image
                    src="/logo-white-bottom.svg"
                    alt="posgrado"
                    width={40}
                    height={40}
                    className="h-full w-auto object-contain opacity-90"
                  />
                </div>
                <h2 className="mb-1 text-4xl font-bold tracking-tighter text-white">
                  {item.programs.length}
                </h2>
                <p className="text-xs leading-tight font-bold tracking-[0.15em] text-white uppercase">
                  {item.name}
                </p>
              </div>

              <div className="hidden w-full flex-col items-center px-8 py-6 lg:flex">
                <div className="mb-6 flex h-20 w-auto items-center justify-center">
                  <Image
                    src="/logo-white-bottom.svg"
                    alt="posgrado"
                    width={80}
                    height={80}
                    className="h-full w-auto object-contain opacity-90"
                  />
                </div>
                <h2 className="mb-3 text-6xl font-bold tracking-tighter text-white xl:text-7xl">
                  {item.programs.length}
                </h2>
                <p className="max-w-45 text-sm leading-tight font-bold tracking-[0.15em] text-white uppercase md:text-base">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
