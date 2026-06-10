import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getProgramaBySlug, getProgramas } from "@/lib/repositories/programas"
import { Tabs } from "@/components/ui/tabs"
import { ProgramaTabList } from "./components/ProgramaTabList"
import { ProgramaTabContent } from "./components/ProgramaTabContent"
import InfoSidebar from "./components/sections/info-sidebar"
import Hero from "./components/sections/hero"

interface Props {
  params: Promise<{ tipoSlug: string; programaSlug: string }>
}

export async function generateStaticParams() {
  const programas = await getProgramas()
  return programas
    .filter((p) => p.tipo_programa?.slug)
    .map((p) => ({
      tipoSlug: p.tipo_programa!.slug,
      programaSlug: p.slug,
    }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { programaSlug } = await params
  const programa = await getProgramaBySlug(programaSlug)
  if (!programa) return {}
  return {
    title: programa.nombre,
    description: programa.descripcion ?? `Información sobre ${programa.nombre}`,
  }
}

export default async function ProgramaPage({ params }: Props) {
  const { tipoSlug, programaSlug } = await params
  const programa = await getProgramaBySlug(programaSlug)

  if (!programa) notFound()
  return (
    <>
      <Hero programa={programa} />
      <Tabs defaultValue="presentacion">
        <ProgramaTabList />
        <main className="grow max-w-7xl mx-auto w-full px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <ProgramaTabContent programa={programa} />
            </div>
            <aside className="lg:col-span-1">
              <InfoSidebar />
            </aside>
          </div>
        </main>
      </Tabs>
    </>
  )
}
