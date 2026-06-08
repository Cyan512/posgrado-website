import { GridCard } from "@/components/ui-test/GridCard"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Props {
  tipos: any[]
}

export default function Programs({ tipos }: Props) {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto bg-background">
      <div className="mb-16 text-left">
        <span className="text-xs font-bold tracking-widest uppercase text-accent mb-3 block">
          Excelencia Académica
        </span>
        <h2 className="text-4xl font-serif font-bold text-primary mb-4 tracking-tight">
          Nuestra Oferta Académica
        </h2>
        <p className="text-muted-foreground text-base max-w-2xl font-sans">
          Programas acreditados internacionalmente por su rigor y calidad, diseñados para los líderes del mañana.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tipos.map((tipo) => (
          <Link
            key={tipo.id}
            href={`/${tipo.slug}`}
            className="relative rounded-3xl overflow-hidden aspect-[1/2.3] group shadow-md border border-border/20"
          >
            {tipo.imagen_card ? (
              <Image
                src={tipo.imagen_card.formats?.medium?.url ?? tipo.imagen_card.url}
                alt={tipo.imagen_card.alternativeText ?? tipo.nombre}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            ) : (
              <div>
                {tipo.nombre}
              </div>
            )}
            {/* Capa de Gradiente (Guinda Institucional) */}
            <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/50 to-primary/10 mix-blend-multiply opacity-80" />

            {/* Segundo Gradiente de Legibilidad del Texto */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/20" />

            <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
              {/* Contenido Superior (Números) */}
              <div className="relative z-10">
                <span className="text-4xl md:text-5xl font-serif font-bold text-accent block">
                  {tipo.programas.length}
                </span>
                <span className="text-[10px] tracking-widest font-bold uppercase text-white/70 block mt-1">
                  {tipo.nombre}
                </span>
              </div>

              {/* Contenido Inferior (Títulos y Call to action) */}
              <div className="relative z-10 flex items-end gap-6">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white uppercase tracking-wide leading-tight" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                  {tipo.nombre}
                </h3>

                <span
                  className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-white/90 transition-colors"
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                  Explorar Programas
                  <ArrowRight className="w-3.5 h-3.5" style={{ transform: 'rotate(90deg)' }} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
