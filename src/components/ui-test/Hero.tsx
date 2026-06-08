import Image from "next/image"
import { Button } from "../ui/button"

interface HeroProps {
  title: string
  backgroundUrl?: string | null
}

export function Hero({ title, backgroundUrl }: HeroProps) {
  return (
    <section className="relative w-full h-[50vh] min-h-[380px] flex items-center overflow-hidden">
      {/* Imagen de Fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundUrl ?? ""}
          alt="Campus UNSAAC Atardecer"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Capa de Gradiente Rojizo/Guinda Corporativo de la Imagen */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Contenido del Hero */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 md:px-8 text-white space-y-4">
        <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight">
          {title}
        </h1>
      </div>
    </section>
  )
}
