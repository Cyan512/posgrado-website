import { FormProgram } from "@/features/programas/FormProgram"

interface HeroProps {
  tipos: any[]
}

export default function Hero({ tipos }: HeroProps) {
  const dataInfo = {
    image: "",
    badge: "ADMISIÓN 2026 ABIERTA",
    title: "Liderazgo Académico con Prestigio Internacional.",
    description: "Formamos investigadores y líderes que transforman la sociedad. Descubre nuestros programas de Maestría, Doctorado y Especialización.",
  }
  return (
    <section>
      {dataInfo.badge}
      {dataInfo.title}
      {dataInfo.description}
      <FormProgram tipos={tipos} />
    </section>
  )
}
