"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import type { TipoPrograma } from "@/lib/types"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"

interface Props {
  tipos: TipoPrograma[]
}

export function FormProgram({ tipos }: Props) {
  const [selectedTipo, setSelectedTipo] = useState("")
  const [selectedPrograma, setSelectedPrograma] = useState("")
  const [nombres, setNombres] = useState("")
  const [apellidos, setApellidos] = useState("")
  const [bachiller, setBachiller] = useState("")
  const [mensaje, setMensaje] = useState("")

  const programas = tipos.find((t) => t.id.toString() === selectedTipo)?.programas ?? []

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1.5">
        <label className="text-xs font-bold tracking-wider uppercase text-muted-foreground/80">
          Nombres Completos
        </label>
        <Input
          placeholder="Ej. Carlos"
          type="text"
          value={nombres}
          onChange={(e) => setNombres(e.target.value)}
          required
          className="bg-secondary/40 dark:bg-secondary/10 h-11 px-4 text-sm focus-visible:ring-primary/40"
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-bold tracking-wider uppercase text-muted-foreground/80">Apellidos</label>
        <Input
          placeholder="Ej. Augusto"
          type="text"
          value={apellidos}
          onChange={(e) => setApellidos(e.target.value)}
          required
          className="bg-secondary/40 dark:bg-secondary/10 h-11 px-4 text-sm focus-visible:ring-primary/40"
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-bold tracking-wider uppercase text-muted-foreground/80">Tipo de programa</label>

        <select
          value={selectedTipo}
          onChange={(e) => {
            setSelectedTipo(e.target.value)
            setSelectedPrograma("")
          }}
          required
          className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Seleccione un tipo</option>
          {tipos.map((t) => (
            <option key={t.id} value={t.id}>
              {t.nombre}
            </option>
          ))}
        </select>
      </div>

      {selectedTipo && (
        <div>
          <label className="block text-sm font-medium mb-1">Programa</label>
          <select
            value={selectedPrograma}
            onChange={(e) => setSelectedPrograma(e.target.value)}
            required
            className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Seleccione un programa</option>
            {programas.map((p) => (
              <option key={p.id} value={p.id}>
                {p.nombre}
              </option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium mb-1">¿Es bachiller?</label>
        <select
          value={bachiller}
          onChange={(e) => setBachiller(e.target.value)}
          required
          className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Seleccione</option>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Mensaje</label>
        <textarea
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          rows={3}
          className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
      </div>

      <Button type="submit" className="w-full">
        Enviar
      </Button>
    </form>
  )
}
