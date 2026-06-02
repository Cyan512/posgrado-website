import Link from "next/link"
import { getTipoProgramas } from "@/lib/strapi"
import SearchBar from "./SearchBar"

export default async function Navbar() {
  const tipos = await getTipoProgramas()

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold text-gray-900">
          Posgrado UNSAAC
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-gray-700 hover:text-gray-900">
            Inicio
          </Link>
          {tipos.map((tipo) => (
            <Link
              key={tipo.id}
              href={`/${tipo.slug}`}
              className="text-gray-700 hover:text-gray-900"
            >
              {tipo.nombre}
            </Link>
          ))}
          <Link href="/comunicados" className="text-gray-700 hover:text-gray-900">
            Comunicados
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <SearchBar />
        </div>
      </div>
    </nav>
  )
}
