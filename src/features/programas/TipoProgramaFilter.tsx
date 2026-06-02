"use client"

import { useState } from "react"
import type { Programa } from "@/lib/types"
import { Filter } from "@/components/ui/Filter"
import { GridCard } from "@/components/ui/GridCard"
import { Card } from "@/components/ui/Card"

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
        <GridCard>
          {filtered.map((prog) => (
            <Card
              key={prog.id}
              title={prog.nombre}
              image={null}
              href={`/${tipoSlug}/${prog.slug}`}
            />
          ))}
        </GridCard>
      )}
    </>
  )
}
