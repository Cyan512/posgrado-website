import Image from "next/image"
import { Separator } from "@/components/ui/separator"

export default function DirectorsMessage() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        <div className="lg:col-span-5 relative p-4 rounded-4xl bg-secondary/40 aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none">
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-md">
            <Image
              src="/images/director.jpg"
              alt="Director de la Escuela de Posgrado"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            {/* Gradiente Oscuro Inferior Sobre la Imagen */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent flex flex-col justify-end p-8 md:p-10" />
            
            {/* Texto Flotante de Cita */}
            <div className="absolute bottom-0 inset-x-0 p-8 md:p-10 z-10 text-white">
              <blockquote className="text-lg md:text-xl italic font-sans font-light mb-4 leading-relaxed">
                "Nuestra misión trasciende el aula; forjamos el pensamiento crítico que la nación exige."
              </blockquote>
              <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground/90">
                Director de la Escuela de Posgrado
              </p>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Contenido Institucional */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className="text-xs font-bold tracking-widest uppercase text-accent mb-3 block">
            Nuestra Institución
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight tracking-tight">
            Excelencia con más de Tres Siglos de Historia
          </h2>
          
          <div className="space-y-6 text-muted-foreground font-sans text-base md:text-lg leading-relaxed">
            <p>
              Fundada en 1692, la Universidad Nacional de San Antonio Abad del Cusco es una de las instituciones académicas más antiguas y prestigiosas de América Latina. Nuestra Escuela de Posgrado hereda este legado de excelencia, combinando la tradición secular con la investigación de vanguardia.
            </p>
            <p>
              Nos dedicamos a la formación de investigadores y profesionales de alto nivel, comprometidos con el desarrollo sostenible de nuestra región y el país, bajo los más altos estándares de calidad académica internacional.
            </p>
          </div>

          <Separator className="my-8 bg-border" />

          {/* Firma */}
          <div className="flex flex-col">
            <span className="text-xl font-serif font-bold text-primary">
              Dr. Eleazar Crucinta Ugarte
            </span>
            <span className="text-xs font-bold tracking-widest uppercase text-accent mt-1">
              Rector UNSAAC
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
