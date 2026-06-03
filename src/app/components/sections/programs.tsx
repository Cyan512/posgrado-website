import { GridCard } from "@/components/ui-test/GridCard"
import Image from "next/image"
import Link from "next/link"

interface Props {
  tipos: any[]
}

export default function Programs({ tipos }: Props) {
  return (
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
  )
}
