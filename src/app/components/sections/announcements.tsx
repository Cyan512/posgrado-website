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
import { ComunicadoCard } from "@/components/comunicado-card";
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
        <h2 className="text-4xl font-serif font-bold text-primary mb-3 tracking-tight">
          Actualidad Académica
        </h2>
        <p className="text-muted-foreground text-base font-sans">
          Mantente informado sobre los hitos y eventos de nuestra escuela.
        </p>
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

              <Link key={index} href={`${ROUTES.COMUNICADOS}/${com.slug}`}>
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="border-none bg-transparent shadow-none group">
                    <CardContent className="p-0">
                      {/* Imagen de Noticia */}
                      {com.imagen && (
                        <div className="relative overflow-hidden rounded-xl shadow-md aspect-[16/10] w-full mb-5">
                          <Image
                            src={com.imagen.url}
                            alt={com.titulo}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                      )}

                      {/* Metadatos */}
                      <div className="flex items-center gap-3 mb-3">
                        <Badge
                          variant="secondary"
                          className="rounded-md px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary bg-secondary"
                        >
                          {com.categoria}
                        </Badge>
                        <span className="text-xs text-muted-foreground/80 font-medium">
                          {com.fecha}
                        </span>
                      </div>

                      {/* Títulos y contenido */}
                      <h3 className="text-xl font-serif font-bold text-primary mb-2 line-clamp-2 leading-snug group-hover:text-primary/80 transition-colors">
                        {com.titulo}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                        {com.descripcion}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </Link>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section >
  )
}
