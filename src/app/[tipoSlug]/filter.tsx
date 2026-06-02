"use client"

import { useState } from "react"
import type { Programa } from "@/lib/types"
import Filter from "@/components/Filter"
import GridCard from "@/components/GridCard"
import Card from "@/components/Card"

interface Props {
  programas: Programa[]
  tipoSlug: string
}

export default function TipoProgramaFilter({ programas, tipoSlug }: Props) {
  const [search, setSearch] = useState("")

  const filtered = programas.filter((p) =>
    p.nombre.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <Filter value={search} onChange={setSearch} placeholder="Buscar programa..." />
      {filtered.length === 0 ? (
        <p className="text-center text-gray-500">No se encontraron programas.</p>
      ) : (
        <GridCard>
          {filtered.map((prog) => (
            <Card
              key={prog.id}
              title={prog.nombre}
              slug={prog.slug}
              image={null}
              href={`/${tipoSlug}/${prog.slug}`}
            />
          ))}
        </GridCard>
      )}
    </>
  )
}
