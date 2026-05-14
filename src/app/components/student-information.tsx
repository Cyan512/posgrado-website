import Image from 'next/image';

const informationItems = [
  {
    id: 1,
    icon: 'https://res.cloudinary.com/ds0tjwccs/image/upload/v1778779027/politicas_1_oabhxt.svg',
    title: 'Reglamentos y Normas',
    description:
      'Conoce las disposiciones y lineamientos que rigen la vida académica y garantizan una convivencia respetuosa y ordenada.',
    link: '/reglamentos',
  },
  {
    id: 2,
    icon: 'https://res.cloudinary.com/ds0tjwccs/image/upload/v1778779027/tramites_1_y3ft6v.svg',
    title: 'Trámites Académicos',
    description:
      'Conoce las disposiciones y lineamientos que rigen la vida académica y garantizan una convivencia respetuosa y ordenada.',
    link: '/tramites',
  },
  {
    id: 3,
    icon: 'https://res.cloudinary.com/ds0tjwccs/image/upload/v1778779027/calendario_1_sqj6qq.svg',
    title: 'Calendario Académico y de Pagos',
    description:
      'Conoce las disposiciones y lineamientos que rigen la vida académica y garantizan una convivencia respetuosa y ordenada.',
    link: '/calendario',
  },
  {
    id: 4,
    icon: 'https://res.cloudinary.com/ds0tjwccs/image/upload/v1778779026/especializacion_1_wexwon.svg',
    title: 'Ruta del graduado',
    description:
      'Conoce las disposiciones y lineamientos que rigen la vida académica y garantizan una convivencia respetuosa y ordenada.',
    link: '/ruta-graduado',
  },
  {
    id: 5,
    icon: 'https://res.cloudinary.com/ds0tjwccs/image/upload/v1778779025/traduccion_1_niup72.svg',
    title: 'Acreditación del idioma',
    description:
      'Conoce las disposiciones y lineamientos que rigen la vida académica y garantizan una convivencia respetuosa y ordenada.',
    link: '/acreditacion-idioma',
  },
];

export default function StudentInformation() {
  return (
    <section className="bg-back py-12 md:py-20 bg-blue-500">
      <div className="container mx-auto px-4 bg-red-500">
        {/* Title */}
        <div className="mb-12">
          <h2 className="text-primary text-3xl font-bold md:text-4xl">
            <span className="border-secondary border-b-4 pb-1">Informacion</span> para el Estudiante
          </h2>
        </div>

        {/* Content Layout */}
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-start">
          {/* Left - Image with orange border */}
          <div className="lg:w-[45%]">
            <div className="overflow-hidden rounded-lg shadow-2xl">
              <div className="relative aspect-3/4">
                <Image
                  src="https://res.cloudinary.com/ds0tjwccs/image/upload/v1778779026/WhatsApp_Image_2024-01-24_at_10.38.22_AM_8_1_ygqlmq.svg"
                  alt="Estatua representativa de la universidad"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right - Information Card (overlapping on desktop) */}
          <div className="lg:absolute lg:top-48 lg:left-[35%] lg:max-w-2xl">
            <div className="rounded-2xl bg-white p-8 shadow-2xl">
              {/* Intro Text */}
              <p className="text-fonts/70 mb-8 text-sm leading-relaxed">
                En esta sección encontrarás toda la información esencial para empezar y gestionar tu
                vida académica, alumno. Te recomendamos revisarla con frecuencia para estar al tanto
                de fechas importantes, procesos administrativos.
              </p>

              {/* Information Items List */}
              <div className="space-y-6">
                {informationItems.map((item, index) => (
                  <div key={item.id} className="group">
                    <a
                      href={item.link}
                      className="flex items-start gap-4 transition-all duration-300"
                    >
                      {/* Icon */}
                      <div className="flex-shrink-0 pt-1">
                        <div className="flex h-14 w-14 items-center justify-center">
                          <Image
                            src={item.icon}
                            alt=""
                            width={56}
                            height={56}
                            className="object-contain"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-fonts group-hover:text-primary mb-2 text-base font-bold">
                          {item.title}
                        </h3>
                        <p className="text-fonts/60 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </a>

                    {/* Divider - except for last item */}
                    {index < informationItems.length - 1 && (
                      <div className="border-fonts/10 mt-6 border-t" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
