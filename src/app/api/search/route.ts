import { getTipoProgramas, getProgramas, getComunicados } from "@/lib/strapi"
import { NextResponse } from "next/server"

export interface SearchItem {
  id: number
  title: string
  type: "tipo" | "programa" | "comunicado"
  href: string
  date?: string
}

export async function GET() {
  const [tipos, programas, comunicados] = await Promise.all([
    getTipoProgramas(),
    getProgramas(),
    getComunicados(),
  ])

  const items: SearchItem[] = [
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

  return NextResponse.json(items)
}
