import { cache } from "react"
import type { TipoPrograma } from "@/lib/types"
import { fetchCollection } from "./client"

const POPULATE = "populate[programas]=true&populate[imagen_card]=true&populate[imagen_bg]=true"

export const getTipoProgramas = cache(async (): Promise<TipoPrograma[]> => {
  return fetchCollection<TipoPrograma>(`/tipo-programas?${POPULATE}`)
})

export const getTipoProgramaBySlug = cache(async (slug: string): Promise<TipoPrograma | null> => {
  const tipos = await fetchCollection<TipoPrograma>(
    `/tipo-programas?filters[slug][$eq]=${slug}&${POPULATE}`
  )
  return tipos[0] || null
})
