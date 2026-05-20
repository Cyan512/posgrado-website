import { HomeStudentInformation } from '@/src/models/strapi/pages/home';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  data: HomeStudentInformation;
}

export default function StudentInformation({ data }: Props) {
  return (
    <section className="bg-back py-12 md:py-20">
      <div className="container mx-auto px-4">
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
                {data.items.map((item, index) => (
                  <div key={item.id} className="group">
                    <Link
                      href={item.link.href}
                      className="flex items-start gap-4 transition-all duration-300"
                    >
                      {/* Icon */}
                      <div className="flex-shrink-0 pt-1">
                        <div className="flex h-14 w-14 items-center justify-center">
                          <Image
                            src={item.icon.url}
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
                    </Link>

                    {/* Divider - except for last item */}
                    {index < data.items.length - 1 && (
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
