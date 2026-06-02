import Link from "next/link"
import Image from "next/image"
import { getTipoProgramas } from "@/lib/repositories/tipos"
import { getComunicados } from "@/lib/repositories/comunicados"
import { GridCard } from "@/components/ui-test/GridCard"
import { LatestComunicadoModal } from "@/features/comunicados/LatestComunicadoModal"
import { ComunicadoCard } from "@/components/comunicado-card"
import React from "react"

export default async function Home() {
  const [tipos, comunicados] = await Promise.all([
    getTipoProgramas(),
    getComunicados(),
  ])

  const latestComunicado = comunicados[0] ?? null

  return (
    <>
      {latestComunicado && <LatestComunicadoModal comunicado={latestComunicado} />}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Escuela de Posgrado UNSAAC
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Formación académica de excelencia para profesionales del futuro
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Programas
          </h2>
          <GridCard>
            {tipos.map((tipo) => (
              <Link
                key={tipo.id}
                href={`/${tipo.slug}`}
                className="group block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 w-full">
                  {tipo.imagen_card ? (
                    <Image
                      src={tipo.imagen_card.formats?.medium?.url ?? tipo.imagen_card.url}
                      alt={tipo.imagen_card.alternativeText ?? tipo.nombre}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                      {tipo.nombre}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 text-lg">{tipo.nombre}</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {tipo.programas.length} programa{tipo.programas.length !== 1 ? "s" : ""}
                  </p>
                </div>
              </Link>
            ))}
          </GridCard>
        </div>
      </section>

      {comunicados.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Últimos Comunicados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {comunicados.slice(0, 3).map((com) => (
                <ComunicadoCard
                  key={com.id}
                  href={`/comunicados/${com.slug}`}
                  imagen={com.imagen?.url}
                  titulo={com.titulo}
                  fecha={com.fecha}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
