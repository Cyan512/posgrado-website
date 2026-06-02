import { cache } from "react"
import type { Comunicado } from "@/lib/types"
import { fetchCollection } from "./client"

export const getComunicados = cache(async (): Promise<Comunicado[]> => {
  return fetchCollection<Comunicado>("/comunicados?populate[imagen]=true&sort[fecha]=desc")
})

export const getComunicadoBySlug = cache(async (slug: string): Promise<Comunicado | null> => {
  const comunicados = await fetchCollection<Comunicado>(
    `/comunicados?filters[slug][$eq]=${slug}&populate[imagen]=true`
  )
  return comunicados[0] || null
})
