import Link from "next/link"
import { getTipoProgramas } from "@/lib/repositories/tipos"
import { SearchBar } from "@/features/search/SearchBar"
import { ROUTES } from "@/lib/constants/routes"
import { Menu } from "lucide-react"

/*
{tipos.map((tipo) => (
            <Link
              key={tipo.id}
              href={`/${tipo.slug}`}
              className="text-gray-700 hover:text-gray-900"
            >
              {tipo.nombre}
            </Link>
          ))}

*/

export async function Navbar() {
  const tipos = await getTipoProgramas()

  return (
    <nav >
      <div>
        <button>
          <Menu />
        </button>
        <Link href={ROUTES.INICIO}>
          <img src="/images/logos/logo-postgrado.svg" alt="logo posgrado" />
        </Link>
        <SearchBar />
      </div>
    </nav>
  )
}
