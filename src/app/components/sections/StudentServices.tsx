import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BookOpen, Monitor, Users, Heart, ShieldCheck, FileCheck } from "lucide-react"

const services = [
  { title: "Biblioteca", desc: "Acceso ilimitado a bases científicas globales y repositorio digital.", icon: BookOpen },
  { title: "Asesoría", desc: "Acompañamiento personalizado por investigadores RENACYT.", icon: Users },
  { title: "Aula Virtual", desc: "Plataforma LMS avanzada para el aprendizaje híbrido dinámico.", icon: Monitor },
  { title: "Bienestar", desc: "Apoyo psicopedagógico y programas integrales de salud.", icon: Heart },
  { title: "Trámites Académicos", desc: "Gestión digital eficiente de certificados y constancias mediante autoservicio.", icon: FileCheck, fullWidth: true },
]

export default function StudentServices() {
  return (
    <section className="py-20 px-4 w-full bg-secondary dark:bg-secondary/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <div className="lg:col-span-7">
          <span className="text-xs font-bold tracking-widest uppercase text-accent mb-3 block">
            Recursos Académicos
          </span>
          <h2 className="text-4xl font-serif font-bold text-primary mb-4 tracking-tight">
            Servicios al Estudiante
          </h2>
          <p className="text-muted-foreground text-base mb-12 max-w-2xl leading-relaxed">
            Infraestructura tecnológica y académica de primer nivel para potenciar tu experiencia en la Escuela de Posgrado UNSAAC.
          </p>

          {/* Grid de Servicios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mb-12">
            {services.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className={`flex gap-4 ${item.fullWidth ? "sm:col-span-2" : ""}`}>
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs uppercase tracking-wider rounded-xl shadow-md">
              Acceder al Portal
            </Button>
            <Button variant="outline" className="px-8 py-6 border-primary/30 text-primary hover:bg-primary/5 bg-transparent font-bold text-xs uppercase tracking-wider rounded-xl">
              Manual del Estudiante
            </Button>
          </div>
        </div>

        {/* Columna Derecha - Imagen con Tarjeta Flotante */}
        <div className="lg:col-span-5 relative w-full aspect-[4/5] max-w-md mx-auto lg:max-w-none">
          <div className="w-full h-full rounded-4xl overflow-hidden shadow-md">
            <Image 
              src="/images/campus.jpg" 
              alt="Campus e Infraestructura Universitaria" 
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

          {/* Tarjeta Flotante Informativa */}
          <div className="absolute bottom-6 left-6 right-6 bg-white dark:bg-card p-5 rounded-2xl shadow-md flex items-center gap-4 border border-border/40">
            <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center shrink-0 shadow-md shadow-accent/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-primary uppercase tracking-wide">Atención Preferencial 24/7</h4>
              <p className="text-xs text-muted-foreground leading-tight mt-0.5">Soporte técnico y académico continuo para todos nuestros estudiantes.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}