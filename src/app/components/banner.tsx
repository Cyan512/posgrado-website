import { cn } from '@/src/lib/cn';

const data = {
  image: {
    src: 'https://res.cloudinary.com/ds0tjwccs/image/upload/v1778672668/WhatsApp_Image_2024-01-24_at_10.38.22_AM_13_1_p3eu3c.png',
    alt: 'Escuela de Posgrado',
  },
  stats: [
    {
      number: 39,
      label: 'Maestrias',
      image: {
        src: 'https://res.cloudinary.com/ds0tjwccs/image/upload/v1778673119/Logos-08_3_pireaa.svg',
        alt: '',
      },
    },
    {
      number: 0o6,
      label: 'Doctorados',
      image: {
        src: 'https://res.cloudinary.com/ds0tjwccs/image/upload/v1778673119/Logos-08_3_pireaa.svg',
        alt: '',
      },
    },
    {
      number: 12,
      label: 'Segundas Especialidades',
      image: {
        src: 'https://res.cloudinary.com/ds0tjwccs/image/upload/v1778673119/Logos-08_3_pireaa.svg',
        alt: '',
      },
    },
    {
      number: 11,
      label: 'Residentado Medico',
      image: {
        src: 'https://res.cloudinary.com/ds0tjwccs/image/upload/v1778673119/Logos-08_3_pireaa.svg',
        alt: '',
      },
    },
  ],
};

export default function Banner() {
  return (
    <section className="relative flex min-h-112.5 w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={data.image.src}
          alt={data.image.alt}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10 w-full px-4 py-8 lg:px-6 lg:py-16">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-0">
          {data.stats.map((item, index) => (
            <div
              key={index}
              className={cn(
                'flex flex-col items-center text-center',
                index !== data.stats.length - 1 ? 'lg:border-r lg:border-white/50' : ''
              )}
            >
              {/* Mobile: card with background */}
              <div className="flex w-full flex-col items-center rounded-2xl bg-white/20 px-3 py-5 backdrop-blur-sm lg:hidden">
                <div className="mb-2 flex h-10 w-auto items-center justify-center">
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    className="h-full w-auto object-contain opacity-90"
                  />
                </div>
                <h2 className="mb-1 text-4xl font-bold tracking-tighter text-white">
                  {item.number}
                </h2>
                <p className="text-xs leading-tight font-bold tracking-[0.15em] text-white uppercase">
                  {item.label}
                </p>
              </div>

              {/* Desktop: original style, no card background */}
              <div className="hidden w-full flex-col items-center px-8 py-6 lg:flex">
                <div className="mb-6 flex h-20 w-auto items-center justify-center">
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    className="h-full w-auto object-contain opacity-90"
                  />
                </div>
                <h2 className="mb-3 text-6xl font-bold tracking-tighter text-white xl:text-7xl">
                  {item.number}
                </h2>
                <p className="max-w-45 text-sm leading-tight font-bold tracking-[0.15em] text-white uppercase md:text-base">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
