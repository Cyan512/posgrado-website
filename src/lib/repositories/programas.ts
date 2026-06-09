import { cache } from "react"
import type { Programa } from "@/lib/types"
import { fetchCollection } from "./client"

const POPULATE = [
  "populate[tipo_programa]=true",
  "populate[imagen]=true",
  "populate[inversion]=true",
  "populate[malla_curricular][populate][primer_semestres]=true",
  "populate[malla_curricular][populate][segundo_semestres]=true",
  "populate[malla_curricular][populate][electivos]=true",
].join("&")

export const getProgramas = cache(async (): Promise<Programa[]> => {
  return fetchCollection<Programa>(`/programas?${POPULATE}`)
})

export const getProgramaBySlug = cache(async (slug: string): Promise<Programa | null> => {
  const programas = await fetchCollection<Programa>(
    `/programas?filters[slug][$eq]=${slug}&${POPULATE}`
  )
  return programas[0] || null
})