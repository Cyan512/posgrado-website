export default function ProgramDetails() {
  return (
    <div className="space-y-12">
      {/* Objetivo General */}
      <section>
        <h2 className="text-2xl font-bold text-[#0f2d59] mb-4">Objetivo General</h2>
        <p className="text-gray-600 leading-relaxed text-[15px]">
          Formar magísteres con una visión crítica y prospectiva de la educación superior, 
          capaces de diseñar e implementar modelos de gestión de la calidad académica que 
          respondan a los estándares internacionales. El programa integra la excelencia 
          docente con la eficiencia administrativa para potenciar el impacto social de las 
          instituciones educativas.
        </p>
      </section>

      {/* Objetivos Específicos */}
      <section>
        <h2 className="text-2xl font-bold text-[#0f2d59] mb-4">Objetivos Específicos</h2>
        <ul className="space-y-3">
          {[
            "Desarrollar competencias avanzadas en evaluación y acreditación universitaria según marcos regulatorios globales.",
            "Liderar procesos de innovación curricular basados en el aprendizaje por competencias y la digitalización educativa.",
            "Aplicar metodologías de investigación científica para la resolución de nudos críticos en la gestión académica.",
            "Fomentar una cultura de ética profesional y responsabilidad social en todos los niveles del liderazgo institucional."
          ].map((item, index) => (
            <li key={index} className="flex items-start text-gray-600 text-[15px]">
              <span className="text-[#0f2d59] mr-3 mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#0f2d59]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Perfil del Graduado */}
      <section className="bg-gray-50 p-8 rounded-sm border-l-4 border-[#0f2d59]">
        <h2 className="text-xl font-bold text-[#0f2d59] mb-3">Perfil del Graduado</h2>
        <p className="text-gray-600 leading-relaxed text-[15px]">
          Al concluir el programa, el profesional poseerá una sólida base teórico-práctica para 
          desempeñarse como Rector, Vicerrector Académico o Director de Calidad en universidades 
          de prestigio. Estará facultado para dirigir equipos multidisciplinarios, gestionar fondos 
          concursables de investigación y liderar transformaciones digitales en el aula, asegurando 
          siempre la pertinencia y el rigor científico de la oferta académica.
        </p>
      </section>
    </div>
  )
}