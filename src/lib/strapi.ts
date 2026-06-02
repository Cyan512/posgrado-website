import type { Comunicado, TipoPrograma, Programa } from "./types"

interface StrapiCollection<T> {
  data: T[]
}

interface StrapiSingle<T> {
  data: T
}

const STRAPI_URL = process.env.STRAPI_URL!
const STRAPI_TOKEN = process.env.STRAPI_TOKEN!

async function fetchAPI<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = `${STRAPI_URL}/api${endpoint}`
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
      "Content-Type": "application/json",
    },
    next: { revalidate: 3600 },
    ...options,
  })
  if (!res.ok) throw new Error(`Strapi fetch error: ${res.status} ${res.statusText}`)
  return res.json()
}

export async function getTipoProgramas(): Promise<TipoPrograma[]> {
  const res = await fetchAPI<StrapiCollection<TipoPrograma>>("/tipo-programas?populate[programas]=true&populate[imagen_card]=true&populate[imagen_bg]=true")
  return res.data
}

export async function getTipoProgramaBySlug(slug: string): Promise<TipoPrograma | null> {
  const res = await fetchAPI<StrapiCollection<TipoPrograma>>(`/tipo-programas?filters[slug][$eq]=${slug}&populate[programas]=true&populate[imagen_card]=true&populate[imagen_bg]=true`)
  return res.data[0] || null
}

export async function getProgramas(): Promise<Programa[]> {
  const res = await fetchAPI<StrapiCollection<Programa>>("/programas?populate[tipo_programa]=true")
  return res.data
}

export async function getProgramaBySlug(slug: string): Promise<Programa | null> {
  const res = await fetchAPI<StrapiCollection<Programa>>(`/programas?filters[slug][$eq]=${slug}&populate[tipo_programa]=true`)
  return res.data[0] || null
}

export async function getComunicados(): Promise<Comunicado[]> {
  const res = await fetchAPI<StrapiCollection<Comunicado>>("/comunicados?populate[imagen]=true&sort[fecha]=desc")
  return res.data
}

export async function getComunicadoBySlug(slug: string): Promise<Comunicado | null> {
  const res = await fetchAPI<StrapiCollection<Comunicado>>(`/comunicados?filters[slug][$eq]=${slug}&populate[imagen]=true`)
  return res.data[0] || null
}
