import { notFound } from "next/navigation"
import { getTipoProgramaBySlug } from "@/lib/strapi"
import Hero from "@/components/Hero"
import TipoProgramaFilter from "./filter"

interface Props {
  params: Promise<{ tipoSlug: string }>
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
