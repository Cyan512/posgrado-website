import Image from "next/image"
import { Separator } from "@/components/ui/separator"

export default function DirectorsMessage() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        {/* Columna Izquierda: Imagen del director (Diseño intacto) */}
        <div className="lg:col-span-5 relative p-4 rounded-4xl bg-secondary/40 aspect-3/3 w-full max-w-md mx-auto lg:max-w-none">
          <div className="relative w-full h-full overflow-hidden shadow-md">
            <Image
              src="/images/director-posgrado.jpg"
              alt="Director de la Escuela de Posgrado"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            {/* Gradiente Oscuro Inferior Sobre la Imagen */}
            <div className="absolute inset-0 bg-linear-to-t from-primary/95 via-primary/40 to-transparent flex flex-col justify-end p-8 md:p-10" />

            {/* Texto Flotante de Cita */}
            <div className="absolute bottom-0 inset-x-0 p-8 md:p-10 z-10 text-white">
              <blockquote className="text-lg md:text-xl italic font-sans font-light mb-4 leading-relaxed">
                "Nuestra misión trasciende el aula; forjamos el pensamiento crítico que la nación exige."
              </blockquote>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Contenido Institucional */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className="text-xs font-bold tracking-widest uppercase text-accent mb-3 block">
            Nuestra Institución
          </span>

          {/* Título adaptado al tamaño de tu base con su borde inferior */}
          <div className="mb-4 pb-2 border-b-2 border-primary/20">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight font-heading">
              Excelencia con más de Tres Siglos de Historia
            </h2>
          </div>

          {/* Párrafos con el color y peso exacto de tu base */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-base font-light">
              Fundada en 1692, la Universidad Nacional de San Antonio Abad del Cusco es una de las instituciones académicas más antiguas y prestigiosas de América Latina. Nuestra Escuela de Posgrado hereda este legado de excelencia, combinando la tradición secular con la investigación de vanguardia.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base font-light">
              Nos dedicamos a la formación de investigadores y profesionales de alto nivel, comprometidos con el desarrollo sostenible de nuestra región y el país, bajo los más altos standards de calidad académica internacional.
            </p>
          </div>

          <Separator className="my-8 bg-border" />

          {/* Firma adaptada al patrón de bloque destacado de tu base */}
          <div className="bg-linear-to-r from-primary/5 to-transparent border-l-2 border-primary pl-6 py-4 transition-all duration-200 hover:from-primary/10 hover:border-l-4">
            <span className="text-base font-semibold text-foreground tracking-tight block">
              Dr. Eleazar Crucinta Ugarte
            </span>
            <span className="text-xs font-medium tracking-widest uppercase text-primary/70 mt-1 block">
              Rector UNSAAC
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}