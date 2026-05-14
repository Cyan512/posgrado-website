const data = {
  title: 'Proceso de Admisión',
  highlight: '2026-1',
  step: [
    {
      icon: '/icons/edit.png', // Reemplaza con tu ruta
      title: 'Inscripciones',
      description: 'Del 25 de junio al 11 de julio del 2026',
    },
    {
      icon: '/icons/money.png',
      title: 'Costo por derecho de admisión',
      description: 'S/ 350.00',
    },
    {
      icon: '/icons/monitor.png',
      title: 'Charla de inducción virtual',
      description: 'Viernes 12 de julio a las 20:00 horas',
    },
    {
      icon: '/icons/exam.png',
      title: 'Examen de admisión virtual',
      description: 'Sábado 13 de julio',
    },
  ],
};
export default function AdmissionProcess() {
  return (
    <section className="flex min-h-175 w-full flex-col md:flex-row">
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden p-8 text-center md:w-1/2 md:p-16">
        <img
          src="bg.svg"
          alt="Background Texture"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="relative z-10 flex w-full flex-col items-center">
          <div className="mb-12">
            <h2 className="mb-2 inline-block pb-2 text-3xl tracking-widest text-white uppercase md:text-4xl">
              {data.title}
            </h2>
            <p className="font-serif text-4xl font-light tracking-widest text-white md:text-5xl">
              {data.highlight}
            </p>
          </div>

          <div className="grid w-full max-w-lg grid-cols-1 gap-6 sm:grid-cols-2">
            {data.step.map((step, index) => (
              <div
                key={index}
                className="flex min-h-50 flex-col items-center justify-center rounded-[40px] border border-white/10 bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="h-full w-auto object-contain brightness-0 invert"
                  />
                </div>
                <h3 className="mb-2 leading-tight font-bold text-white">{step.title}</h3>
                <p className="text-sm text-white/80">{step.description}</p>
              </div>
            ))}
          </div>

          <button className="mt-12 rounded-xl bg-[#f49b33] px-8 py-3 font-bold text-white shadow-lg transition-colors duration-300 hover:bg-[#e08a2a]">
            Más Información
          </button>
        </div>
      </div>

      <div className="relative flex min-h-125 w-full items-center justify-center bg-gray-100 p-8 md:w-1/2">
        <img
          src="/images/students-classroom.jpg"
          alt="Estudiantes en el aula"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative z-10 h-4/5 w-4/5 rotate-3 transform overflow-hidden rounded-lg border-12 border-white shadow-2xl transition-transform duration-500 hover:rotate-0">
          <img
            src="/images/campus-detail.jpg"
            alt="Detalle del Campus"
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-4 left-4 rounded-lg bg-[#f49b33] px-4 py-2 font-bold text-white">
            Campus 2026
          </div>
        </div>
      </div>
    </section>
  );
}
