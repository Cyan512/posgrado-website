import Image from 'next/image';

interface Props {
  categoria: string;
}

const categoriaInfo: Record<
  string,
  {
    title: string;
    description: string;
    image: string;
  }
> = {
  maestrias: {
    title: 'Maestrías',
    description:
      'Descubre nuestros programas de maestría diseñados para impulsar tu desarrollo profesional y académico con excelencia.',
    image: '/bg.svg',
  },
  doctorados: {
    title: 'Doctorados',
    description:
      'Alcanza el más alto nivel académico con nuestros programas de doctorado, enfocados en la investigación y la innovación.',
    image: '/bg.svg',
  },
  'residentado-medico': {
    title: 'Residentado Médico',
    description:
      'Especialízate en el área médica de tu elección con nuestros programas de residentado médico de alta calidad.',
    image: '/bg.svg',
  },
  'segunda-especialidad': {
    title: 'Segundas Especialidades',
    description:
      'Amplía tus conocimientos y competencias con nuestros programas de segunda especialidad profesional.',
    image: '/bg.svg',
  },
};

export default function CategoriaHero({ categoria }: Props) {
  const info = categoriaInfo[categoria] || {
    title: 'Programas de Postgrado',
    description: 'Explora nuestros programas académicos de excelencia.',
    image: '/bg.svg',
  };

  return (
    <section className="relative flex min-h-[50vh] w-full items-center overflow-hidden">
      <Image
        src={info.image}
        alt={info.title}
        fill
        className="object-cover object-center"
        priority
      />

      <div className="absolute inset-0 bg-[#0b2b53]/60" />

      <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-secondary font-merriweather max-w-3xl text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
            {info.title}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-white md:text-lg lg:text-xl">
            {info.description}
          </p>
        </div>
      </div>
    </section>
  );
}
