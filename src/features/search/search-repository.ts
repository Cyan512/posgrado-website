import { cache } from "react"
import { getTipoProgramas } from "@/lib/repositories/tipos"
import { getProgramas } from "@/lib/repositories/programas"
import { getComunicados } from "@/lib/repositories/comunicados"
import type { SearchItem } from "./search-types"

export const getSearchIndex = cache(async (): Promise<SearchItem[]> => {
  const [tipos, programas, comunicados] = await Promise.all([
    getTipoProgramas(),
    getProgramas(),
    getComunicados(),
  ])

  return [
    ...tipos.map((t) => ({
      id: t.id,
      title: t.nombre,
      type: "tipo" as const,
      href: `/${t.slug}`,
    })),
    ...programas.map((p) => ({
      id: p.id,
      title: p.nombre,
      type: "programa" as const,
      href: `/${p.tipo_programa?.slug ?? ""}/${p.slug}`,
      date: p.descripcion ?? undefined,
    })),
    ...comunicados.map((c) => ({
      id: c.id,
      title: c.titulo,
      type: "comunicado" as const,
      href: `/comunicados/${c.slug}`,
      date: c.fecha,
    })),
  ]
})
