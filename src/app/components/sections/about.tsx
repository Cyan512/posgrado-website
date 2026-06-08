export default function About() {
  return (
    <section className="bg-white py-12 px-4 md:py-20 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        {/* Columna Izquierda: Imagen y Cita */}
        <div className="lg:col-span-5 relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden shadow-xl group">
          {/* Etiqueta img nativa */}
          <img
            src="/director-image.jpg" // Reemplaza con la ruta de tu imagen real
            alt="Director de la Escuela de Posgrado"
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          {/* Gradiente oscuro inferior para legibilidad del texto */}
          <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 via-red-950/40 to-transparent" />

          {/* Contenido de la Cita */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
            <blockquote className="text-lg md:text-xl italic font-light leading-relaxed mb-4">
              "Nuestra misión trasciende el aula; forjamos el pensamiento crítico que la nación exige."
            </blockquote>
            <p className="text-xs md:text-sm font-semibold tracking-wider uppercase text-red-200">
              Director de la Escuela de Posgrado
            </p>
          </div>
        </div>

        {/* Columna Derecha: Texto Informativo */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8">

          {/* Ceja / Subtítulo */}
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-amber-600">
            Nuestra Institución
          </span>

          {/* Título Principal */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-red-950 leading-tight">
            Excelencia con más de Tres Siglos de Historia
          </h2>

          {/* Párrafos de Descripción */}
          <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed font-light">
            <p>
              Fundada en 1692, la Universidad Nacional de San Antonio Abad del Cusco es una de las
              instituciones académicas más antiguas y prestigiosas de América Latina. Nuestra Escuela de
              Posgrado hereda este legado de excelencia, combinando la tradición secular con la
              investigación de vanguardia.
            </p>
            <p>
              Nos dedicamos a la formación de investigadores y profesionales de alto nivel, comprometidos
              con el desarrollo sostenible de nuestra región y el país, bajo los más altos estándares de
              calidad académica internacional.
            </p>
          </div>

          {/* Firma del Rector */}
          <div className="pt-4 border-t border-gray-100 flex items-center space-x-4">
            {/* Línea decorativa minimalista */}
            <div className="w-12 h-[1px] bg-gray-300 hidden sm:block" />
            <div>
              <h4 className="text-base md:text-lg font-bold text-red-900">
                Dr. Eleazar Cruceinta Ugarte
              </h4>
              <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
                Rector UNSAAC
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
