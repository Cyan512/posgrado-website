import Link from "next/link"
import { notFound } from "next/navigation"
import { getProgramaBySlug } from "@/lib/strapi"

interface Props {
  params: Promise<{ tipoSlug: string; programaSlug: string }>
}

export default async function ProgramaPage({ params }: Props) {
  const { tipoSlug, programaSlug } = await params
  const programa = await getProgramaBySlug(programaSlug)

  if (!programa) notFound()

  return (
    <>
      <div className="bg-gray-100 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">Inicio</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href={`/${tipoSlug}`} className="text-blue-600 hover:underline capitalize">
            {tipoSlug.replace(/-/g, " ")}
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">{programa.nombre}</span>
        </div>
      </div>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {programa.nombre}
          </h1>
          {programa.descripcion ? (
            <p className="text-gray-700 text-lg leading-relaxed">{programa.descripcion}</p>
          ) : (
            <p className="text-gray-500 italic">Sin descripción disponible.</p>
          )}
        </div>
      </section>
    </>
  )
}
