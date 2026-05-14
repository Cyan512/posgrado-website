import { Programs } from '@/src/models/programs';
import Image from 'next/image';

interface Props {
  data: Programs;
}

export default function ProgramCardV1({ data }: Props) {
  return (
    <a
      key={data.id}
      href={data.link}
      className="group relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl"
    >
      <Image
        src={data.image}
        alt={data.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />

      <div className="bg-primary/70 group-hover:bg-primary/80 absolute inset-0 transition-all duration-300" />

      <div className="absolute inset-0 flex items-center justify-center p-6">
        <h3 className="text-center text-2xl leading-tight font-bold tracking-wide text-white uppercase transition-transform duration-300 group-hover:scale-105 md:text-3xl">
          {data.title}
        </h3>
      </div>

      <div className="group-hover:border-secondary absolute inset-0 border-4 border-transparent transition-all duration-300" />
    </a>
  );
}
