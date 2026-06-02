import { NextResponse } from "next/server"
import { getSearchIndex } from "@/features/search/search-repository"

export type { SearchItem } from "@/features/search/search-types"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const items = await getSearchIndex()
    return NextResponse.json(items)
  } catch {
    return NextResponse.json({ error: "Error al obtener el índice de búsqueda" }, { status: 500 })
  }
}
