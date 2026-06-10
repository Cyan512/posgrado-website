import type { Programa } from "@/lib/types"
import { ProgramaCard } from "@/components/cards/ProgramaCard"

interface Props {
  programas: Programa[]
  tipoSlug: string
}

export function ProgramasGrid({ programas, tipoSlug }: Props) {
  if (programas.length === 0) {
    return (
      <p className="text-center text-gray-500" role="status">
        No se encontraron programas.
      </p>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {programas.map((prog) => (
        <ProgramaCard key={prog.id} programa={prog} tipoSlug={tipoSlug} />
      ))}
    </div>
  )
}
