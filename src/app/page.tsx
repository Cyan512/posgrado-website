import { getTipoProgramas } from "@/lib/repositories/tipos"
import { getComunicados } from "@/lib/repositories/comunicados"
import { LatestComunicadoModal } from "@/features/comunicados/LatestComunicadoModal"
import Hero from "@/app/components/sections/hero"
import Programs from "@/app/components/sections/programs"
import Announcements from "@/app/components/sections/announcements"
import DirectorsMessage from "@/app/components/sections/DirectorsMessage"
import AdmissionProcess from "@/app/components/sections/admission-process"
import ImpactCTA from "@/app/components/sections/ImpactCTA"
import StudentServices from "@/app/components/sections/StudentServices"

export default async function Home() {
  const [tipos, comunicados] = await Promise.all([
    getTipoProgramas(),
    getComunicados(),
  ])
  console.log(comunicados)

  const latestComunicado = comunicados[0] ?? null

  return (
    <>
      {latestComunicado &&
        <LatestComunicadoModal comunicado={latestComunicado} />
      }
      <Hero tipos={tipos} />
      <DirectorsMessage />
      <AdmissionProcess />
      {comunicados.length > 0 && (
        <Announcements comunicados={comunicados} />
      )}
      <Programs tipos={tipos} />
      <StudentServices />
      <ImpactCTA />
    </>
  )
}
