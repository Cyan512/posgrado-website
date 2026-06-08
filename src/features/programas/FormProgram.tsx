"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import type { TipoPrograma } from "@/lib/types"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight } from "lucide-react"

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

        <Select
          value={selectedTipo}
          onValueChange={(value) => {
            setSelectedTipo(value)
            setSelectedPrograma("")
          }}
          required
        >
          <SelectTrigger className="bg-secondary/40 dark:bg-secondary/10 h-11 px-4 text-sm focus:ring-primary/40 text-muted-foreground">
            <SelectValue placeholder="Seleccione un tipo" />
          </SelectTrigger>
          <SelectContent className="rounded-xl border-border">
            {tipos.map((t) => (
              <SelectItem key={t.id} value={t.id.toString()}>
                {t.nombre}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedTipo && (
        <div className="space-y-1.5">
          <label className="text-xs font-bold tracking-wider uppercase text-muted-foreground/80">Programa</label>
          <Select
            value={selectedPrograma}
            onValueChange={setSelectedPrograma}
            required
          >
            <SelectTrigger className="bg-secondary/40 dark:bg-secondary/10 h-11 px-4 text-sm focus:ring-primary/40 text-muted-foreground">
              <SelectValue placeholder="Seleccione un programa" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-border">
              {programas.map((p) => (
                <SelectItem key={p.id} value={p.id.toString()}>
                  {p.nombre}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="space-y-1.5">
        <label className="text-xs font-bold tracking-wider uppercase text-muted-foreground/80">¿Es bachiller?</label>
        <Select
          value={bachiller}
          onValueChange={setBachiller}
          required
        >
          <SelectTrigger className="bg-secondary/40 dark:bg-secondary/10 h-11 px-4 text-sm focus:ring-primary/40 text-muted-foreground">
            <SelectValue placeholder="Seleccione" />
          </SelectTrigger>
          <SelectContent className="rounded-xl border-border">
            <SelectItem value="si">Sí</SelectItem>
            <SelectItem value="no">No</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-bold tracking-wider uppercase text-muted-foreground/80">Mensaje</label>
        <textarea
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          rows={3}
          className="w-full bg-secondary/40 dark:bg-secondary/10 px-4 py-3 text-sm rounded-lg border border-border/50 focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none resize-none placeholder:text-muted-foreground/60"
          placeholder="Escribe tu mensaje..."
        />
      </div>

      <Button
        type="submit"
        className="w-full h-12 bg-primary hover:bg-primary/95 text-primary-foreground font-bold text-xs uppercase tracking-wider rounded-xl shadow-md mt-4 flex items-center justify-center gap-2"
      >
        Solicitar Información
        <ArrowRight className="w-4 h-4" />
      </Button>
    </form>
  )
}
