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
                <article key={com.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  {com.imagen && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={com.imagen.url}
                        alt={com.imagen.alternativeText ?? com.titulo}
                        fill
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
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
