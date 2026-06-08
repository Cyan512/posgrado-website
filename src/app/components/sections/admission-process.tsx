import { ClipboardPlus, FileUp, UserCheck, BadgeCheck, ArrowRight } from 'lucide-react';

export default function AdmissionProcess() {
  const steps = [
    {
      icon: <ClipboardPlus className="w-6 h-6 text-red-950" />,
      number: "1. Registro",
      description: "Pre-inscripción digital intuitiva a través de nuestro portal de admisión."
    },
    {
      icon: <FileUp className="w-6 h-6 text-red-950" />,
      number: "2. Expediente",
      description: "Validación digital de certificados y propuesta preliminar de tesis."
    },
    {
      icon: <UserCheck className="w-6 h-6 text-red-950" />,
      number: "3. Evaluación",
      description: "Entrevista personal de alto nivel y examen de suficiencia académica."
    },
    {
      icon: <BadgeCheck className="w-6 h-6 text-red-950" />,
      number: "4. Resultados",
      description: "Publicación oficial de ingresantes e inducción a la vida académica."
    }
  ];

  return (
    <section className="bg-white py-16 px-4 md:py-24 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Encabezado Principal */}
        <div className="text-center space-y-4 max-w-2xl mb-16 md:mb-24">
          <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-red-800">
            Próxima Convocatoria
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-red-950">
            Tu Ruta hacia el Éxito
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed">
            Un proceso transparente y riguroso diseñado para identificar el talento excepcional.
          </p>
        </div>

        {/* Contenedor del Flujo de Pasos */}
        <div className="relative w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Línea conectora horizontal (solo visible desde pantallas grandes) */}
          <div className="absolute top-12 left-[12.5%] right-[12.5%] h-[1px] bg-red-100 hidden lg:block pointer-events-none z-0" />

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center space-y-4 group">
              
              {/* Círculo contenedor del Icono con Sombra */}
              <div className="w-24 h-24 rounded-full bg-white border border-red-50/50 shadow-[0_10px_30px_rgba(139,9,40,0.06)] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <div className="w-20 h-20 rounded-full bg-[#FAF5F0]/30 flex items-center justify-center">
                  {step.icon}
                </div>
              </div>

              {/* Título del Paso */}
              <h4 className="text-lg font-serif font-bold text-red-950 pt-2">
                {step.number}
              </h4>

              {/* Descripción */}
              <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed max-w-[240px]">
                {step.description}
              </p>

            </div>
          ))}

        </div>

        {/* Enlace de Acción Inferior */}
        <a 
          href="#guia" 
          className="inline-flex items-center space-x-2 text-xs md:text-sm font-bold tracking-widest text-red-950 uppercase group hover:text-red-800 transition-colors duration-200"
        >
          <span>Ver guía de admisión detallada</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </a>

      </div>
    </section>
  );
}
