import { getTipoProgramas } from "@/lib/repositories/tipos"
import { getComunicados } from "@/lib/repositories/comunicados"
import { LatestComunicadoModal } from "@/features/comunicados/LatestComunicadoModal"
import Hero from "@/app/components/sections/hero"
import Programs from "@/app/components/sections/programs"
import Announcements from "@/app/components/sections/announcements"
import About from "@/app/components/sections/about"
import AdmissionProcess from "@/app/components/sections/admission-process"
import Banner from "@/app/components/sections/banner"
import StudentInformation from "@/app/components/sections/student-information"

export default async function Home() {
  const [tipos, comunicados] = await Promise.all([
    getTipoProgramas(),
    getComunicados(),
  ])
  console.log(tipos)

  const latestComunicado = comunicados[0] ?? null

  return (
    <>
      {latestComunicado &&
        <LatestComunicadoModal comunicado={latestComunicado} />
      }
      <Hero tipos={tipos} />
      <About />
      <AdmissionProcess />
      {comunicados.length > 0 && (
        <Announcements comunicados={comunicados} />
      )}
      <Banner />
      <Programs tipos={tipos} />
      <StudentInformation />
    </>
  )
}
