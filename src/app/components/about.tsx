import Image from 'next/image';

const data = {
  quote: '"La educación es el arma más poderosa que puedes usar para cambiar el mundo"',

  description:
    'Desde 1984, nos hemos dedicado a una misión singular: dotar a la próxima generación de las habilidades de pensamiento crítico necesarias para desenvolverse en un mundo complejo. La Escuela de Posgrado de la Universidad Nacional de San Antonio Abad del Cusco no es solo una universidad, es un crisol para el cambio.',

  authority: {
    name: 'Dr. Pepito W. Hamilton',
    role: 'Director de la Escuela de Posgrado',
  },

  image: {
    src: 'https://res.cloudinary.com/ds0tjwccs/image/upload/v1778756356/Rectangle_4_oqhk1b.png',
    alt: 'Auditorio de la Escuela de Posgrado',
  },
};

export default function About() {
  return (
    <section className="relative overflow-hidden py-12 md:py-20">
      <div className="absolute inset-0 -z-10">
        <Image
          src="bg-cuadrilatero.svg"
          alt="Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <div className="flex w-full justify-center">
              <div className="relative h-12 w-12 md:h-20 md:w-20">
                <Image
                  src="/icons/Icon-posgrado.svg"
                  alt="Icono Posgrado"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h2 className="text-primary text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">
              {data.quote}
            </h2>
            <div className="pt-6">
              <p className="text-fonts text-base leading-relaxed md:text-lg">{data.description}</p>
            </div>

            <div className="pt-4">
              <p className="text-fonts text-lg font-bold">{data.authority.name}</p>
              <p className="text-fonts/70 text-sm md:text-base">{data.authority.role}</p>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="bg-tertiary/20 absolute -bottom-4 -left-4 -z-10 h-24 w-24  md:h-32 md:w-32" />
            <div className="border-4 border-tertiary absolute -right-4 -top-4 -z-10 h-32 w-32 md:h-40 md:w-40" />

            <div className="border-secondary relative aspect-4/3 overflow-hidden border-4 shadow-2xl">
              <Image
                src={data.image.src}
                alt={data.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
