import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, MoveRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Programa } from "@/lib/types"

interface Props {
    programa: Programa
    tipoSlug: string
}

export function ProgramaCard({ programa, tipoSlug }: Props) {
    return (
        <Card className="group border border-border/60 bg-card hover:shadow-lg transition-all duration-300 rounded-none p-0">
            <div className="relative aspect-video w-full overflow-hidden bg-muted">
                {programa.convocatoria && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                        <Badge className="px-4 py-3 rounded-full text-xs font-semibold tracking-wider uppercase">
                            En Convocatoria
                        </Badge>
                    </div>
                )}
                <Image
                    src={programa.imagen?.url ?? "/placeholder.jpg"}
                    alt={programa.nombre}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={false}
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-b from-transparent to-black/60 z-0" />
            </div>

            <CardContent className="p-5 space-y-4">
                {/* Facultad */}
                <div className="flex items-center gap-2 text-primary">
                    <GraduationCap className="w-4 h-4 opacity-80" />
                    <span className="text-xs font-semibold uppercase tracking-wider opacity-90">
                        {programa.facultad}
                    </span>
                </div>

                {/* Título del Programa */}
                <div className="pb-3 border-b-2 border-primary/20">
                    <h3 className="text-xl font-semibold text-foreground tracking-tight font-heading">
                        {programa.nombre}
                    </h3>
                </div>

                {/* Botón */}
                <Link
                    href={`/${tipoSlug}/${programa.slug}`}
                    className="inline-flex w-full items-center justify-center gap-2.5 bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary/90 transition-all duration-200 shadow-sm"
                >
                    Ver detalles del programa
                    <MoveRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
            </CardContent>
        </Card>
    )
}
