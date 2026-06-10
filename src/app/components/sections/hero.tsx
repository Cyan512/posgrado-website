import { FormProgram } from "@/features/programas/FormProgram"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface HeroProps {
  tipos: any[]
}

export default function Hero({ tipos }: HeroProps) {
  
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Imagen de fondo nativa con overlay oscuro */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/unsaac-facade.jpg"
          alt="Fachada de la Escuela de Posgrado"
          fill
          className="object-cover object-center scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-primary/40 lg:from-black/80 lg:via-black/60 lg:to-transparent" />
      </div>

      {/* Contenido Principal Grid */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Columna Izquierda: Mensaje de Impacto y Estadísticas */}
        <div className="lg:col-span-7 text-white space-y-6">
          <div className="inline-block bg-accent text-accent-foreground text-xs font-bold font-sans tracking-widest uppercase px-4 py-1.5 rounded-sm shadow-md animate-fade-in">
            Admisión 2024 Abierta
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-[1.1] tracking-tight max-w-2xl">
            Liderazgo Académico con <span className="text-accent">Prestigio Internacional.</span>
          </h1>
          
          <p className="text-sm md:text-lg text-white/80 font-sans font-light max-w-xl leading-relaxed">
            Formamos investigadores y líderes que transforman la sociedad. Descubre nuestros programas de Maestría, Doctorado y Especialización.
          </p>

          {/* Bloque de Contadores / Estadísticas */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10 max-w-md">
            <div>
              <span className="text-2xl md:text-3xl font-serif font-bold text-accent block">300+</span>
              <span className="text-xs tracking-widest uppercase text-white/60 font-bold mt-1 block leading-tight">
                Años de Tradición
              </span>
            </div>
            <div>
              <span className="text-2xl md:text-3xl font-serif font-bold text-accent block">50+</span>
              <span className="text-xs tracking-widest uppercase text-white/60 font-bold mt-1 block leading-tight">
                Programas Élite
              </span>
            </div>
            <div>
              <span className="text-2xl md:text-3xl font-serif font-bold text-accent block">#1</span>
              <span className="text-xs tracking-widest uppercase text-white/60 font-bold mt-1 block leading-tight">
                Ranking Regional
              </span>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Tarjeta con Formulario de Postulación 
        <div className="lg:col-span-5 w-full max-w-md mx-auto">
          <div className="bg-white dark:bg-card text-foreground p-6 md:p-8 rounded-xl shadow-md border border-border/20">
            <h2 className="text-2xl font-serif font-bold text-primary mb-2">
              Inicia tu Postulación
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground mb-6 leading-relaxed">
              Un asesor académico te guiará en cada paso de tu crecimiento profesional.
            </p>

            <FormProgram tipos={tipos} />
          </div>
        </div>
        */}
      </div>
    </section>
  )
}
