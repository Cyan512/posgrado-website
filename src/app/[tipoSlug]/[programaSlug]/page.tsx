import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getProgramaBySlug, getProgramas } from "@/lib/repositories/programas"
import { Button } from "@/components/ui/button"
import { Calendar, Compass, GraduationCap, Layers } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { ProgramaTabs } from "./components/ProgramaTabs"

interface Props {
  params: Promise<{ tipoSlug: string; programaSlug: string }>
}

export async function generateStaticParams() {
  const programas = await getProgramas()
  return programas
    .filter((p) => p.tipo_programa?.slug)
    .map((p) => ({
      tipoSlug: p.tipo_programa!.slug,
      programaSlug: p.slug,
    }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { programaSlug } = await params
  const programa = await getProgramaBySlug(programaSlug)
  if (!programa) return {}
  return {
    title: programa.nombre,
    description: programa.descripcion ?? `Información sobre ${programa.nombre}`,
  }
}

export default async function ProgramaPage({ params }: Props) {
  const { tipoSlug, programaSlug } = await params
  const programa = await getProgramaBySlug(programaSlug)

  if (!programa) notFound()
  return (
    <>
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={programa.imagen?.url ?? "/placeholder.jpg"}
            alt="Research Center UNSAAC"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
        </div>

        <div className="relative z-10 max-w-5xl w-full mx-auto px-6 text-white pt-20 space-y-6 ">
          <Badge className="bg-accent text-accent-foreground text-xs font-bold tracking-widest uppercase rounded-md">
            {programa.facultad}
          </Badge>

          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight max-w-3xl leading-tight">
            {programa.nombre}
          </h1>

          <p className="text-white/80 text-xs md:text-sm max-w-2xl font-light leading-relaxed">
            {programa.descripcion}
          </p>

          {/* Fila de Datos Técnicos en Bloques */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/20 max-w-4xl">

            <div className="space-y-1">
              <span className="text-xs font-bold text-white/50 tracking-widest uppercase block">DURACIÓN</span>
              <span className="text-sm font-semibold flex items-center gap-2"><Calendar className="w-4 h-4 text-accent" /> {programa.inversion?.n_matricula} Semestres</span>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-white/50 tracking-widest uppercase block">MODALIDAD</span>
              <span className="text-sm font-semibold flex items-center gap-2"><Layers className="w-4 h-4 text-accent" /> {programa.modalidad}</span>
            </div>
          </div>

          {/* Botones de Acción del Hero */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="bg-primary hover:bg-primary/95 text-primary-foreground font-bold text-xs uppercase tracking-widest h-11 px-6 rounded-xl shadow-md">
              Inscribirse Ahora
            </Button>
            <Button variant="outline" className="border-white/40 text-white bg-transparent hover:bg-white/10 font-bold text-xs uppercase tracking-widest h-11 px-6 rounded-xl">
              Descargar Plan Curricular
            </Button>
          </div>
        </div>
      </section>
      <ProgramaTabs programa={programa}/>
    </>
  )
}
