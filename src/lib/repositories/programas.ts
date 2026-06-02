import { cache } from "react"
import type { Programa } from "@/lib/types"
import { fetchCollection } from "./client"

export const getProgramas = cache(async (): Promise<Programa[]> => {
  return fetchCollection<Programa>("/programas?populate[tipo_programa]=true")
})

export const getProgramaBySlug = cache(async (slug: string): Promise<Programa | null> => {
  const programas = await fetchCollection<Programa>(
    `/programas?filters[slug][$eq]=${slug}&populate[tipo_programa]=true`
  )
  return programas[0] || null
})
