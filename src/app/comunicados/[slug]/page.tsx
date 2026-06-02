import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getComunicadoBySlug, getComunicados } from "@/lib/repositories/comunicados"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const comunicados = await getComunicados()
  return comunicados.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const comunicado = await getComunicadoBySlug(slug)
  if (!comunicado) return {}
  return {
    title: comunicado.titulo,
    description: `Comunicado: ${comunicado.titulo}`,
    openGraph: {
      title: comunicado.titulo,
      images: comunicado.imagen ? [{ url: comunicado.imagen.url }] : [],
    },
  }
}

export default async function ComunicadoPage({ params }: Props) {
  const { slug } = await params
  const comunicado = await getComunicadoBySlug(slug)

  if (!comunicado) notFound()

  return (
    <>
      {comunicado.imagen && (
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src={comunicado.imagen.url}
            alt={comunicado.imagen.alternativeText ?? comunicado.titulo}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm text-gray-500 mb-2">
            {new Date(comunicado.fecha).toLocaleDateString("es-PE")}
          </p>
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{comunicado.titulo}</h1>
          <Link
            href="/comunicados"
            className="text-blue-600 hover:text-blue-800 underline mt-8 inline-block"
          >
            &larr; Volver a comunicados
          </Link>
        </div>
      </section>
    </>
  )
}
