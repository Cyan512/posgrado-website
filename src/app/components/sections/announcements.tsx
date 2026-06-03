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

interface Props {
  comunicados: Comunicado[]
}

export default function Announcements({ comunicados }: Props) {
  return (
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
  )
}
