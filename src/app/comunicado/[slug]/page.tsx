import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getComunicadoBySlug } from "@/lib/strapi"

export default async function ComunicadoPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
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
