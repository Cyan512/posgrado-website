import { getTipoProgramas } from "@/lib/repositories/tipos"
import { getComunicados } from "@/lib/repositories/comunicados"
import { LatestComunicadoModal } from "@/features/comunicados/LatestComunicadoModal"
import Hero from "@/app/components/sections/hero"
import Programs from "./components/sections/programs"
import Announcements from "./components/sections/announcements"

export default async function Home() {
  const [tipos, comunicados] = await Promise.all([
    getTipoProgramas(),
    getComunicados(),
  ])

  const latestComunicado = comunicados[0] ?? null

  return (
    <>
      {latestComunicado && <LatestComunicadoModal comunicado={latestComunicado} />}
      <Hero tipos={tipos} />
      <Programs tipos={tipos} />
      {comunicados.length > 0 && (
        <Announcements comunicados={comunicados} />
      )}
    </>
  )
}
