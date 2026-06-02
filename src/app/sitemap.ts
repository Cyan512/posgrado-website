import type { MetadataRoute } from "next"
import { getTipoProgramas } from "@/lib/repositories/tipos"
import { getProgramas } from "@/lib/repositories/programas"
import { getComunicados } from "@/lib/repositories/comunicados"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [tipos, programas, comunicados] = await Promise.all([
    getTipoProgramas(),
    getProgramas(),
    getComunicados(),
  ])

  const baseUrl = "https://posgrado.unsaac.edu.pe"

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/comunicados`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  ]

  const tipoPages = tipos.map((tipo) => ({
    url: `${baseUrl}/${tipo.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }))

  const programaPages = programas
    .filter((p) => p.tipo_programa?.slug)
    .map((p) => ({
      url: `${baseUrl}/${p.tipo_programa!.slug}/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))

  const comunicadoPages = comunicados.map((c) => ({
    url: `${baseUrl}/comunicados/${c.slug}`,
    lastModified: new Date(c.fecha),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...staticPages, ...tipoPages, ...programaPages, ...comunicadoPages]
}
