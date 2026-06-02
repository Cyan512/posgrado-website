import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getTipoProgramaBySlug, getTipoProgramas } from "@/lib/repositories/tipos"
import { Hero } from "@/components/ui/Hero"
import { TipoProgramaFilter } from "@/features/programas/TipoProgramaFilter"

interface Props {
  params: Promise<{ tipoSlug: string }>
}

export async function generateStaticParams() {
  const tipos = await getTipoProgramas()
  return tipos.map((tipo) => ({ tipoSlug: tipo.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tipoSlug } = await params
  const tipo = await getTipoProgramaBySlug(tipoSlug)
  if (!tipo) return {}
  return {
    title: tipo.nombre,
    description: `Programas de ${tipo.nombre} en la Escuela de Posgrado UNSAAC`,
  }
}

export default async function TipoProgramaPage({ params }: Props) {
  const { tipoSlug } = await params
  const tipo = await getTipoProgramaBySlug(tipoSlug)

  if (!tipo) notFound()

  const bgUrl = tipo.imagen_bg?.formats?.large?.url ?? tipo.imagen_bg?.url ?? null

  return (
    <>
      <Hero title={tipo.nombre} backgroundUrl={bgUrl} />

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <TipoProgramaFilter programas={tipo.programas} tipoSlug={tipo.slug} />
        </div>
      </section>
    </>
  )
}
