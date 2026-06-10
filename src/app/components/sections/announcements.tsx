import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/constants/routes";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Comunicado } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface Props {
  comunicados: Comunicado[]
}

export default function Announcements({ comunicados }: Props) {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto bg-background">
      <div className="text-center mb-16">
        {/* Título Principal adaptado a la escala formal de tu base */}
        <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight font-heading mb-3">
          Comunicados
        </h2>
      </div>

      <div className="w-full px-4 md:px-12">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {comunicados.map((com, index) => (
              <Link key={index} href={`${ROUTES.COMUNICADOS}/${com.slug}`} className="block">
                <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">

                  {/* Card adaptado al diseño de Programas: Bordes rectos, fondo sólido y sombras */}
                  <Card className="group border border-border/60 bg-card hover:shadow-lg transition-all duration-300 rounded-none p-0">

                    {/* Contenedor de Imagen adaptado a aspect-video y bordes rectos */}
                    {com.imagen && (
                      <div className="relative aspect-video w-full overflow-hidden bg-muted">
                        <Image
                          src={com.imagen.url}
                          alt={com.titulo}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          priority={false}
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-b from-transparent to-black/60 z-0" />
                      </div>
                    )}

                    {/* Contenido con espaciado uniforme p-5 y space-y-4 */}
                    <CardContent className="p-5 space-y-4">

                      {/* Metadatos alineados */}
                      <div className="flex items-center gap-3">
                        <Badge
                          variant="secondary"
                          className="rounded-md px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-primary/90 bg-primary/5"
                        >
                          {com.categoria}
                        </Badge>
                        <span className="text-xs text-muted-foreground/70 font-light">
                          {com.fecha}
                        </span>
                      </div>

                      {/* Título del Comunicado con borde inferior del diseño de Programas */}
                      <div className="pb-3 border-b-2 border-primary/20">
                        <h3 className="text-xl font-semibold text-foreground tracking-tight font-heading line-clamp-2 leading-snug group-hover:text-primary transition-colors">
                          {com.titulo}
                        </h3>
                      </div>

                      {/* Botón de acción idéntico al patrón de diseño de Programas */}
                      <div className="inline-flex w-full items-center justify-center gap-2.5 bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary/90 transition-all duration-200 shadow-sm#">
                        Ver detalle del comunicado
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>

                  </Card>
                </CarouselItem>
              </Link>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}