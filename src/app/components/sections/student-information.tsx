import { BookOpen, Laptop, FileText, Users, Heart, Shield } from 'lucide-react';

export default function StudentInformation() {
  const services = [
    {
      icon: <BookOpen className="w-5 h-5 text-red-900" />,
      title: "Biblioteca",
      description: "Acceso ilimitado a bases científicas globales y repositorio digital."
    },
    {
      icon: <Users className="w-5 h-5 text-red-900" />,
      title: "Asesoría",
      description: "Acompañamiento personalizado por investigadores RENACYT."
    },
    {
      icon: <Laptop className="w-5 h-5 text-red-900" />,
      title: "Aula Virtual",
      description: "Plataforma LMS avanzada para el aprendizaje híbrido dinámico."
    },
    {
      icon: <Heart className="w-5 h-5 text-red-900" />,
      title: "Bienestar",
      description: "Apoyo psicopedagógico y programas integrales de salud."
    },
    {
      icon: <FileText className="w-5 h-5 text-red-900" />,
      title: "Trámites Académicos",
      description: "Gestión digital eficiente de certificados y constancias mediante autoservicio."
    }
  ];

  return (
    <section className="bg-[#FAF5F0] py-16 px-4 md:py-24 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Columna Izquierda: Contenido y Servicios */}
        <div className="lg:col-span-7 flex flex-col space-y-8">

          {/* Encabezado */}
          <div className="space-y-3">
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-amber-600 block">
              Recursos Académicos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-red-950">
              Servicios al Estudiante
            </h2>
            <p className="text-gray-600 text-sm md:text-base font-light max-w-2xl leading-relaxed">
              Infraestructura tecnológica y académica de primer nivel para potenciar tu experiencia en la Escuela de Posgrado UNSAAC.
            </p>
          </div>

          {/* Grilla de Servicios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex items-start space-x-4 ${index === 4 ? 'sm:col-span-2' : ''}`}
              >
                {/* Contenedor del Icono */}
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-900/10 flex items-center justify-center">
                  {service.icon}
                </div>
                {/* Texto */}
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-red-950">{service.title}</h4>
                  <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Botones de Acción */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-red-900 hover:bg-red-950 text-white font-medium text-xs md:text-sm tracking-wider uppercase py-3.5 px-8 rounded-lg shadow-md transition-colors duration-200">
              Acceder al Portal
            </button>
            <button className="border border-red-900/30 bg-transparent hover:bg-red-900/5 text-red-950 font-medium text-xs md:text-sm tracking-wider uppercase py-3.5 px-8 rounded-lg transition-colors duration-200">
              Manual del Estudiante
            </button>
          </div>

        </div>

        {/* Columna Derecha: Imagen con Tarjeta Flotante */}
        <div className="lg:col-span-5 relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-square xl:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
          <img
            src="/student-services.jpg" // Reemplaza con tu ruta de imagen real
            alt="Instalaciones y Servicios al Estudiante UNSAAC"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />

          {/* Tarjeta Flotante Inferior */}
          <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-lg flex items-center space-x-4 border border-white/20">
            {/* Círculo del Icono de Alerta/Escudo */}
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white shadow-md shadow-amber-500/20">
              <Shield className="w-5 h-5 fill-current" />
            </div>
            {/* Texto de Atención */}
            <div className="space-y-0.5">
              <h5 className="text-xs md:text-sm font-bold text-red-950 tracking-wider uppercase">
                Atención Preferencial 24/7
              </h5>
              <p className="text-[11px] md:text-xs text-gray-500 leading-relaxed font-light">
                Soporte técnico y académico continuo para todos nuestros estudiantes.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
