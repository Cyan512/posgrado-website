export default function Banner() {
  return (
    <section className="bg-[#FAF5F0] py-16 px-4 md:py-24 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Contenedor Principal con esquinas redondeadas y gradiente */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#6b0622] via-[#520216] to-[#36000c] px-6 py-16 md:py-20 md:px-12 text-center shadow-2xl">
          
          {/* Capa de textura o patrón geométrico sutil en el fondo (lado derecho) */}
          <div 
            className="absolute inset-0 opacity-10 bg-[linear-gradient(30deg,#000_12%,transparent_12.5%,transparent_87%,#000_87.5%,#000),linear-gradient(150deg,#000_12%,transparent_12.5%,transparent_87%,#000_87.5%,#000),linear-gradient(270deg,#000_12%,transparent_12.5%,transparent_87%,#000_87.5%,#000)] bg-[length:20px_35px] pointer-events-none"
            style={{ maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)', WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)' }}
          />

          {/* Contenido */}
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center space-y-6 md:space-y-8">
            
            {/* Título Principal */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight tracking-tight">
              ¿Listo para <span className="text-[#f59e0b] md:text-[#f19b20]">Trascender</span> en tu Carrera?
            </h2>

            {/* Subtítulo / Descripción */}
            <p className="text-red-100/80 text-sm md:text-base font-light leading-relaxed max-w-2xl">
              Únete a la élite académica del Cusco y transforma tu potencial en resultados extraordinarios con nuestra formación de prestigio internacional.
            </p>

            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              {/* Botón Principal (Inscribirse) */}
              <button className="w-full sm:w-auto bg-[#f19b20] hover:bg-[#d98514] text-white font-semibold text-xs md:text-sm tracking-[0.15em] uppercase py-4 px-10 rounded-full shadow-lg transition-all duration-200 hover:scale-[1.02]">
                Inscribirse Ahora
              </button>
              
              {/* Botón Secundario (Prospecto) */}
              <button className="w-full sm:w-auto border border-white/30 bg-transparent hover:bg-white/10 text-white font-semibold text-xs md:text-sm tracking-[0.15em] uppercase py-4 px-10 rounded-full transition-all duration-200">
                Descargar Prospecto
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
