'use client';

import { Programs } from '@/src/models/programs';
import Image from 'next/image';

interface Props {
  data: Programs;
}

export default function ProgramCardV2({ data }: Props) {
  return (
    <a
      href={data.link}
      className="group relative h-full min-w-0 flex-1 overflow-hidden rounded-2xl transition-all duration-500 ease-in-out hover:flex-[3] focus-visible:flex-[3] focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
    >
      {/* Background image */}
      <Image
        src={data.image}
        alt={data.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, 50vw"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Collapsed label — vertical text, hidden on hover */}
      <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
        <span className="origin-center -rotate-90 text-sm font-semibold tracking-widest whitespace-nowrap text-white uppercase drop-shadow">
          {data.title}
        </span>
      </div>

      {/* Expanded content — visible on hover */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-opacity delay-150 duration-300 group-hover:opacity-100">
        <h3 className="mb-3 text-xl font-bold tracking-wide text-white uppercase drop-shadow-lg">
          {data.title}
        </h3>
        <span className="inline-flex w-fit items-center gap-1 rounded-full border border-white/60 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/20">
          Ver más
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </a>
  );
}
