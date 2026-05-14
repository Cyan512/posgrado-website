import ProgramCardV2 from '@/src/components/card/program-card-v2';

const programs = [
  {
    id: 1,
    title: 'MAESTRÍAS',
    image:
      'https://res.cloudinary.com/ds0tjwccs/image/upload/v1778779025/3b2fdf8b03990a67bce36365e4cedc134a7e240e_dk39a8.jpg',
    link: '/maestrias',
  },
  {
    id: 2,
    title: 'DOCTORADOS',
    image:
      'https://res.cloudinary.com/ds0tjwccs/image/upload/v1778779028/88210f3acdeb4010276a7cba78444696878f1bc6_xdkq5p.jpg',
    link: '/doctorados',
  },
  {
    id: 3,
    title: 'SEGUNDAS ESPECIALIDADES',
    image:
      'https://res.cloudinary.com/ds0tjwccs/image/upload/v1778779028/2c1867bd600373362873a36e35ec03e052d28b6f_mdyaoe.jpg',
    link: '/segundas-especialidades',
  },
  {
    id: 4,
    title: 'RESIDENTADO MÉDICO',
    image:
      'https://res.cloudinary.com/ds0tjwccs/image/upload/v1778779029/68a7fc879821b5ecf452f92c752a117aeb04dea2_x0o2az.jpg',
    link: '/residentado-medico',
  },
];

export default function Programs() {
  return (
    <section className="bg-back py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-primary relative inline-block text-3xl font-bold md:text-4xl">
            Conoce Nuestros Programas
            <span className="bg-secondary absolute bottom-0 left-0 h-1 w-full" />
          </h2>
        </div>

        <div className="mt-10 flex h-[550px] w-full items-stretch gap-2 max-md:h-auto max-md:flex-col max-md:gap-3">
          {programs.map((program) => (
            <ProgramCardV2 key={program.id} data={program} />
          ))}
        </div>
      </div>
    </section>
  );
}
