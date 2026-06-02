"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import type { Comunicado } from "@/lib/types"

interface Props {
  comunicado: Comunicado
}

const SS_KEY = "seen-comunicado-modal"

export function LatestComunicadoModal({ comunicado }: Props) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(SS_KEY)) return
    sessionStorage.setItem(SS_KEY, "true")
    setOpen(true)
  }, [])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden">
        {comunicado.imagen && (
          <div className="relative h-48 w-full">
            <Image
              src={comunicado.imagen.url}
              alt={comunicado.imagen.alternativeText ?? comunicado.titulo}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="p-6">
          <p className="text-sm text-gray-500 mb-1">
            {new Date(comunicado.fecha).toLocaleDateString("es-PE")}
          </p>
          <h2 id="modal-title" className="text-xl font-bold text-gray-900 mb-3">
            {comunicado.titulo}
          </h2>

          <div className="flex items-center gap-3 mt-6">
            <Link
              href={`/comunicados/${comunicado.slug}`}
              className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              Ver comunicado
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
