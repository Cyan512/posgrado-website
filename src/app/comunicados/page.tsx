import type { Metadata } from "next"
import { getComunicados } from "@/lib/repositories/comunicados"
import { ComunicadoCard } from "@/components/comunicado-card"
import { ROUTES } from "@/lib/constants/routes"

export const metadata: Metadata = {
  title: "Comunicados",
  description: "Comunicados oficiales de la Escuela de Posgrado UNSAAC",
}

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
            <p className="text-center text-gray-500" role="status">No hay comunicados disponibles.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {comunicados.map((com) => (
                <ComunicadoCard
                  key={com.id}
                  href={`${ROUTES.COMUNICADOS}/${com.slug}`}
                  imagen={com.imagen?.url}
                  titulo={com.titulo}
                  fecha={com.fecha}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
