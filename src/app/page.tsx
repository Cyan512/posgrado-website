import Link from "next/link"
import Image from "next/image"
import { getTipoProgramas } from "@/lib/repositories/tipos"
import { getComunicados } from "@/lib/repositories/comunicados"
import { GridCard } from "@/components/ui-test/GridCard"
import { LatestComunicadoModal } from "@/features/comunicados/LatestComunicadoModal"
import { ComunicadoCard } from "@/components/comunicado-card"
import { FormProgram } from "@/features/programas/FormProgram"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { ROUTES } from "@/lib/constants/routes"
import { ArrowRight } from "lucide-react"

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
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Escuela de Posgrado UNSAAC
            </h1>
            <p className="text-xl text-blue-200 max-w-2xl">
              Formación académica de excelencia para profesionales del futuro
            </p>
          </div>
          <FormProgram tipos={tipos} />
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
        <section className="pt-12 md:pt-20">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex gap-4 flex-col sm:flex-row items-center sm:justify-between">
              <h2 className="font-bold uppercase tracking-wider text-2xl md:text-3xl">
                Comunicados
              </h2>
              <Button variant="outline" className="items-center gap-2 hidden sm:flex" asChild>
                <Link href={ROUTES.COMUNICADOS} className="flex items-center gap-2">
                  Ver todos
                  <ArrowRight />
                </Link>
              </Button>
            </div>
            <Carousel className="w-full">
              <CarouselContent className="-ml-1">
                {comunicados.map((com, index) => (
                  <CarouselItem key={index} className="basis-1/2 pl-1 lg:basis-1/3">
                    <div className="p-1">
                      <ComunicadoCard
                        href={`${ROUTES.COMUNICADOS}/${com.slug}`}
                        imagen={com.imagen?.url}
                        titulo={com.titulo}
                        fecha={com.fecha}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="mt-8 flex justify-center sm:hidden">
              <Button variant="outline" className="flex items-center gap-2" asChild>
                <Link href={ROUTES.COMUNICADOS} className="flex items-center gap-2">
                  Ver todos
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
