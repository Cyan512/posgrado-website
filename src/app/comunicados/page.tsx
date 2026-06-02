import Link from "next/link"
import Image from "next/image"
import { getComunicados } from "@/lib/strapi"

export default async function ComunicadosPage() {
  const comunicados = await getComunicados()

  return (
    <>
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Comunicados</h1>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {comunicados.length === 0 ? (
            <p className="text-center text-gray-500">No hay comunicados disponibles.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {comunicados.map((com) => (
                <Link
                  key={com.id}
                  href={`/comunicado/${com.slug}`}
                  className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {com.imagen && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={com.imagen.url}
                        alt={com.imagen.alternativeText ?? com.titulo}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <p className="text-sm text-gray-500 mb-2">
                      {new Date(com.fecha).toLocaleDateString("es-PE")}
                    </p>
                    <h2 className="font-semibold text-gray-900">{com.titulo}</h2>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
