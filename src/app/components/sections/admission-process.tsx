"use client"

import { ClipboardPlus, FileText, GraduationCap, CheckCircle, ArrowRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const steps = [
  {
    number: "1",
    title: "Registro",
    description: "Pre-inscripción digital intuitiva a través de nuestro portal de admisión.",
    icon: ClipboardPlus,
  },
  {
    number: "2",
    title: "Expediente",
    description: "Validación digital de certificados y propuesta preliminar de tesis.",
    icon: FileText,
  },
  {
    number: "3",
    title: "Evaluación",
    description: "Entrevista personal de alto nivel y examen de suficiencia académica.",
    icon: GraduationCap,
  },
  {
    number: "4",
    title: "Resultados",
    description: "Publicación oficial de ingresantes e inducción a la vida académica.",
    icon: CheckCircle,
  },
]

export default function AdmissionProcess() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto bg-background">
      <div className="text-center mb-16">
        <span className="text-xs font-bold tracking-widest uppercase text-accent block mb-3">
          Próxima Convocatoria
        </span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4 tracking-tight">
          Tu Ruta hacia el Éxito
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-sans">
          Un proceso transparente y riguroso diseñado para identificar el talento excepcional.
        </p>
      </div>

      {/* Carousel para Mobile y Tablet */}
      <div className="md:hidden mb-16">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-sm mx-auto"
        >
          <CarouselContent>
            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <CarouselItem key={index}>
                  <div className="flex flex-col items-center text-center p-4">
                    {/* Contenedor del Icono Círculo */}
                    <div className="w-32 h-32 rounded-full bg-card shadow-lg flex items-center justify-center mb-6 border border-border/40 transition-transform duration-300">
                      <div className="w-24 h-24 rounded-full bg-secondary/30 flex items-center justify-center text-primary">
                        <IconComponent className="w-8 h-8 stroke-[1.5]" />
                      </div>
                    </div>

                    {/* Textos */}
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {step.number}. {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-60">
                      {step.description}
                    </p>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>

      {/* Timeline Grid para Desktop */}
      <div className="hidden md:block relative mb-16">
        {/* Línea conectora horizontal para escritorio */}
        <div className="absolute top-16 left-[12.5%] right-[12.5%] h-px bg-border z-0" />

        <div className="grid grid-cols-4 gap-12 relative z-10">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="flex flex-col items-center text-center group">
                {/* Contenedor del Icono Círculo */}
                <div className="w-32 h-32 rounded-full bg-card shadow-lg flex items-center justify-center mb-6 border border-border/40 transition-transform duration-300 group-hover:scale-105">
                  <div className="w-24 h-24 rounded-full bg-secondary/30 flex items-center justify-center text-primary">
                    <IconComponent className="w-8 h-8 stroke-[1.5]" />
                  </div>
                </div>

                {/* Textos */}
                <h3 className="text-xl font-bold text-primary mb-2">
                  {step.number}. {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-60">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Enlace de Acción Inferior */}
      <div className="text-center mt-16">
          <a
          href="#"
          className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-primary hover:opacity-80 transition-opacity focus-visible:ring-2 focus-visible:ring-ring rounded-sm group"
        >
          Ver Guía de Admisión Detallada
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  )
}