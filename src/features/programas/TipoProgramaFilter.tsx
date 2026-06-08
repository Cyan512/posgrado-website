"use client"

import { useState } from "react"
import type { Programa } from "@/lib/types"
import { Filter } from "@/components/ui-test/Filter"
import { GridCard } from "@/components/ui-test/GridCard"
import { CardProgram } from "@/components/ui-test/CardProgram"

interface Props {
  programas: Programa[]
  tipoSlug: string
}

export function TipoProgramaFilter({ programas, tipoSlug }: Props) {
  const [search, setSearch] = useState("")

  const filtered = programas.filter((p) =>
    p.nombre.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <Filter value={search} onChange={setSearch} placeholder="Buscar programa..." />
      {filtered.length === 0 ? (
        <p className="text-center text-gray-500" role="status">No se encontraron programas.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filtered.map((prog) => (
            <>
              <div
                key={prog.id}
                className="bg-white dark:bg-card rounded-xl overflow-hidden shadow-md border border-border/20 flex flex-col h-full"
              >
                {/* Imagen del Programa (Sin padding, bordes superiores redondeados) */}
                <div className="relative aspect-[16/10] w-full bg-muted">
                  {/*
                  <Image
                    src={prog.}
                    alt={prog.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  */}
                </div>

                {/* Cuerpo de la Tarjeta */}
                <div className="p-6 flex flex-col flex-grow space-y-4">
                  {/* Fila de Badges */}
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-wider rounded-md">
                      {prog.area}
                    </Badge>
                    <Badge variant="secondary" className="bg-muted text-muted-foreground text-[10px] font-bold uppercase tracking-wider rounded-md">
                      {prog.modality}
                    </Badge>
                  </div>

                  {/* Título del Programa */}
                  <h3 className="text-lg font-bold text-primary font-serif leading-snug line-clamp-2 pt-1">
                    {prog.nombre}
                  </h3>

                  {/* Duración con Icono de Reloj */}
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground/90 font-medium">
                    <Clock className="w-4 h-4 text-primary/60 stroke-[2]" />
                    <span>{prog.duration}</span>
                  </div>

                  {/* Botón de Acción Inferior Estilo Outline Fino */}
                  <div className="pt-4 mt-auto">
                    <Button
                      variant="outline"
                      className="w-full h-11 border-accent/40 text-accent hover:bg-accent/10 rounded-xl text-xs font-bold uppercase tracking-widest"
                    >
                      Ver detalles
                    </Button>
                  </div>
                </div>
              </div>



              {/*
            
            <CardProgram
              key={prog.id}
              title={prog.nombre}
              image={null}
              href={`/${tipoSlug}/${prog.slug}`}
            />
            
            */}
            </>
          ))}
        </div>
      )}
    </>
  )
}
