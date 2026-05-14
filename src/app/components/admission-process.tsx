const data = {
  title: 'Proceso de Admisión',
  highlight: '2026-1',
  step: [
    {
      icon: 'https://res.cloudinary.com/ds0tjwccs/image/upload/v1778778779/Group_gxfyp1.svg',
      title: 'Inscripciones',
      description: 'Del 25 de junio al 11 de julio del 2026',
    },
    {
      icon: 'https://res.cloudinary.com/ds0tjwccs/image/upload/v1778778780/Vector_rnjpam.svg',
      title: 'Costo por derecho de admisión',
      description: 'S/ 350.00',
    },
    {
      icon: 'https://res.cloudinary.com/ds0tjwccs/image/upload/v1778778779/Vector_1_unbhqf.svg',
      title: 'Charla de inducción virtual',
      description: 'Viernes 12 de julio a las 20:00 horas',
    },
    {
      icon: 'https://res.cloudinary.com/ds0tjwccs/image/upload/v1778778779/Group_1_rvba4j.svg',
      title: 'Examen de admisión virtual',
      description: 'Sábado 13 de julio',
    },
  ],
};
export default function AdmissionProcess() {
  return (
    <section className="flex min-h-175 w-full flex-col lg:flex-row">
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden p-8 text-center md:p-16 lg:w-1/2">
        <img
          src="https://res.cloudinary.com/ds0tjwccs/image/upload/v1778674128/Rectangle_9_phogva.svg"
          alt="Background Texture"
          className="absolute inset-0 h-full w-full object-cover lg:hidden"
        />
        <img
          src="bg.svg"
          alt="Background Texture"
          className="absolute inset-0 hidden h-full w-full object-cover lg:block"
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

      <div className="relative hidden min-h-125 w-full items-center justify-center lg:flex lg:w-1/2">
        <img
          src="https://res.cloudinary.com/ds0tjwccs/image/upload/v1778674128/Rectangle_9_phogva.svg"
          alt="Estudiantes en el aula"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
