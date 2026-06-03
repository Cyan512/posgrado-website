import { FormProgram } from "@/features/programas/FormProgram"

interface HeroProps {
  tipos: any[]
}

export default function Hero({ tipos }: HeroProps) {
  return (
    <section className="bg-blue-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Escuela de Posgrado UNSAAC
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            Formación académica de excelencia para profesionales del futuro
          </p>
        </div>
        <FormProgram tipos={tipos} />
      </div>
    </section>
  )
}
