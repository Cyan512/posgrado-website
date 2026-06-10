"use client"

import { useState } from "react"
import type { Programa } from "@/lib/types"
import { Filter } from "@/components/ui-test/Filter"
import { ProgramaCard } from "@/components/cards/ProgramaCard"

interface Props {
  programas: Programa[]
  tipoSlug: string
}

export function TipoProgramaFilter({ programas, tipoSlug }: Props) {
  const [search, setSearch] = useState("")

  const filtered = programas.filter((p) =>
    p.nombre.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <Filter value={search} onChange={setSearch} placeholder="Buscar programa..." />
      {filtered.length === 0 ? (
        <p className="text-center text-gray-500" role="status">No se encontraron programas.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filtered.map((prog) => (
            <ProgramaCard key={prog.id} programa={prog} tipoSlug={tipoSlug} />
          ))}
        </div>
      )}
    </>
  )
}
