"use client"

import { useState } from "react"
import type { ReactNode } from "react"
import type { Programa } from "@/lib/types"
import { Filter } from "@/components/ui-test/Filter"

interface Props {
  programas: Programa[]
  tipoSlug: string
  children: (filtered: Programa[], tipoSlug: string) => ReactNode
}

export function FiltrosSection({ programas, tipoSlug, children }: Props) {
  const [search, setSearch] = useState("")

  const filtered = programas.filter((p) =>
    p.nombre.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <Filter value={search} onChange={setSearch} placeholder="Buscar programa..." />
      {children(filtered, tipoSlug)}
    </>
  )
}
