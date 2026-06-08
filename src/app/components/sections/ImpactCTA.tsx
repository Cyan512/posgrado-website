import { Button } from "@/components/ui/button"

export default function ImpactCTA() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto bg-background">
      <div className="relative overflow-hidden rounded-4xl bg-primary text-primary-foreground py-16 px-6 md:px-12 text-center shadow-md">
        
        {/* Fondo sutil decorativo abstracto */}
        <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-6">
            ¿Listo para <span className="text-accent">Trascender</span> en tu Carrera?
          </h2>
          
          <p className="text-sm md:text-base text-primary-foreground/80 max-w-2xl mx-auto mb-10 font-sans leading-relaxed">
            Únete a la élite académica del Cusco y transforma tu potencial en resultados extraordinarios con nuestra formación de prestigio internacional.
          </p>

          {/* Botones de Acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="w-full sm:w-auto px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-transform hover:-translate-y-0.5"
            >
              Inscribirse Ahora
            </Button>
            <Button 
              variant="outline" 
              className="w-full sm:w-auto px-8 py-6 border-white/30 text-white hover:bg-white/10 font-bold text-xs uppercase tracking-wider rounded-xl backdrop-blur-sm"
            >
              Descargar Prospecto
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}