import Image from 'next/image';

const programs = [
  {
    id: 1,
    title: 'MAESTRÍAS',
    image:
      'https://res.cloudinary.com/ds0tjwccs/image/upload/v1778756356/Rectangle_4_oqhk1b.png',
    link: '/maestrias',
  },
  {
    id: 2,
    title: 'DOCTORADOS',
    image:
      'https://res.cloudinary.com/ds0tjwccs/image/upload/v1778756356/Rectangle_4_oqhk1b.png',
    link: '/doctorados',
  },
  {
    id: 3,
    title: 'SEGUNDAS ESPECIALIDADES',
    image:
      'https://res.cloudinary.com/ds0tjwccs/image/upload/v1778756356/Rectangle_4_oqhk1b.png',
    link: '/segundas-especialidades',
  },
  {
    id: 4,
    title: 'RESIDENTADO MÉDICO',
    image:
      'https://res.cloudinary.com/ds0tjwccs/image/upload/v1778756356/Rectangle_4_oqhk1b.png',
    link: '/residentado-medico',
  },
];

export default function Programs() {
  return (
    <section className="bg-back py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="mb-12">
          <h2 className="relative inline-block text-3xl font-bold text-primary md:text-4xl">
            Conoce Nuestros Programas
            <span className="absolute bottom-0 left-0 h-1 w-full bg-secondary" />
          </h2>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <a
              key={program.id}
              href={program.link}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              {/* Background Image */}
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-primary/70 transition-all duration-300 group-hover:bg-primary/80" />

              {/* Title */}
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <h3 className="text-center text-2xl font-bold uppercase leading-tight tracking-wide text-white transition-transform duration-300 group-hover:scale-105 md:text-3xl">
                  {program.title}
                </h3>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-4 border-transparent transition-all duration-300 group-hover:border-secondary" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
