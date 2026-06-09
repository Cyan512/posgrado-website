import { cache } from "react"
import type { TipoPrograma } from "@/lib/types"
import { fetchCollection } from "./client"

const PROGRAMA_POPULATE = [
  "populate[programas][populate][imagen]=true",
  "populate[programas][populate][tipo_programa]=true",
  "populate[programas][populate][inversion]=true",
  "populate[programas][populate][malla_curricular][populate][primer_semestres]=true",
  "populate[programas][populate][malla_curricular][populate][segundo_semestres]=true",
  "populate[programas][populate][malla_curricular][populate][electivos]=true",
].join("&")

const POPULATE = [
  "populate[imagen_card]=true",
  "populate[imagen_bg]=true",
  PROGRAMA_POPULATE,
].join("&")

export const getTipoProgramas = cache(async (): Promise<TipoPrograma[]> => {
  return fetchCollection<TipoPrograma>(`/tipo-programas?${POPULATE}`)
})

export const getTipoProgramaBySlug = cache(async (slug: string): Promise<TipoPrograma | null> => {
  const tipos = await fetchCollection<TipoPrograma>(
    `/tipo-programas?filters[slug][$eq]=${slug}&${POPULATE}`
  )
  return tipos[0] || null
})