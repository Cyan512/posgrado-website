"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { useRouter } from "next/navigation"
import type { SearchItem } from "./search-types"

const typeLabels: Record<SearchItem["type"], string> = {
  tipo: "Tipo de Programa",
  programa: "Programa",
  comunicado: "Comunicado",
}

export function SearchBar() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [items, setItems] = useState<SearchItem[]>([])
  const [loading, setLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (!open) return
    setLoading(true)
    fetch("/api/search")
      .then((r) => r.json())
      .then((data: SearchItem[]) => setItems(data))
      .finally(() => setLoading(false))
  }, [open])

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus()
    }
  }, [open])

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false)
        setQuery("")
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setOpen((v) => !v)
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  useEffect(() => {
    if (!open) return
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
        setQuery("")
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [open])

  const q = query.toLowerCase().trim()

  const filtered = q
    ? items.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.date?.toLowerCase().includes(q),
      )
    : items

  const grouped = filtered.reduce<Record<string, SearchItem[]>>((acc, item) => {
    const label = typeLabels[item.type]
    ;(acc[label] ??= []).push(item)
    return acc
  }, {})

  const handleSelect = useCallback(
    (href: string) => {
      setOpen(false)
      setQuery("")
      router.push(href)
    },
    [router],
  )

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setOpen(true)}
        className="p-2 text-gray-700 hover:text-gray-900"
        aria-label="Abrir búsqueda"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="w-5 h-5"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/40"
          role="dialog"
          aria-modal="true"
          aria-label="Búsqueda"
        >
          <div className="w-full max-w-xl bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="flex items-center gap-3 px-4 border-b">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="w-5 h-5 text-gray-400 shrink-0"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar programas, comunicados..."
                className="flex-1 py-4 outline-none text-gray-900 placeholder:text-gray-400"
                aria-label="Buscar"
              />
              <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs text-gray-400 bg-gray-100 rounded">
                ESC
              </kbd>
            </div>

            <div className="max-h-96 overflow-y-auto">
              {loading ? (
                <div className="p-6 text-center text-gray-500" role="status">
                  <span>Cargando...</span>
                </div>
              ) : Object.keys(grouped).length === 0 ? (
                <div className="p-6 text-center text-gray-500">
                  {q ? "Sin resultados" : "Cargando datos..."}
                </div>
              ) : (
                Object.entries(grouped).map(([label, group]) => (
                  <div key={label}>
                    <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase bg-gray-50">
                      {label}
                    </div>
                    {group.slice(0, 5).map((item) => (
                      <button
                        key={`${item.type}-${item.id}`}
                        onClick={() => handleSelect(item.href)}
                        className="w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors flex items-center gap-3"
                      >
                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-medium text-gray-900 truncate">
                            {item.title}
                          </div>
                          {item.date && (
                            <div className="text-xs text-gray-400 truncate">
                              {item.type === "comunicado"
                                ? new Date(item.date).toLocaleDateString("es-PE")
                                : item.date}
                            </div>
                          )}
                        </div>
                        {item.type === "programa" && (
                          <span className="text-xs text-blue-600 shrink-0">
                            Programa
                          </span>
                        )}
                        {item.type === "comunicado" && (
                          <span className="text-xs text-green-600 shrink-0">
                            Comunicado
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
