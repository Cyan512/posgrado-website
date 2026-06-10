import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Cursos } from "@/lib/types"

interface Props {
  data: Cursos[]
}

export function MallaCurricularTab({ data }: Props) {
  const grouped = data.reduce<Record<string, Cursos[]>>((acc, curso) => {
    const key = curso.modulo || "Otros"
    if (!acc[key]) acc[key] = []
    acc[key].push(curso)
    return acc
  }, {})

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {Object.entries(grouped).map(([modulo, cursos]) => {

        return (
          <section key={modulo} className="group">
            {/* Título del Módulo */}
            <div className="mb-4 pb-2 border-b-2 border-primary/20">
              <h2 className="text-2xl font-semibold text-foreground tracking-tight font-heading capitalize">
                {modulo}
              </h2>
            </div>

            {/* Tabla de Cursos */}
            <div className="overflow-x-auto border border-border/40">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-border bg-primary/5 hover:bg-primary/5">
                    <TableHead className="px-6 py-2 font-medium text-primary tracking-tight text-base normal-case">
                      Nro.
                    </TableHead>
                    <TableHead className="px-6 py-2 font-medium text-primary tracking-tight text-base normal-case">
                      Asignatura
                    </TableHead>
                    <TableHead className="px-6 py-2 font-medium text-primary tracking-tight text-base normal-case">
                      Créditos
                    </TableHead>
                    <TableHead className="px-6 py-2 font-medium text-primary tracking-tight text-base normal-case">
                      Categoría
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-border/40">
                  {cursos.map((curso, index) => (
                    <TableRow
                      key={index}
                      className="transition-colors duration-150 hover:bg-primary/5 border-b-0"
                    >
                      <TableCell className="px-6 py-4 text-muted-foreground font-light text-base">
                        {String(index + 1)}
                      </TableCell>
                      <TableCell className="px-6 py-4 text-muted-foreground font-light text-base">
                        {curso.asignatura}
                      </TableCell>
                      <TableCell className="px-6 py-4 text-muted-foreground font-light text-base">
                        {curso.creditos}
                      </TableCell>
                      <TableCell className="px-6 py-4 text-muted-foreground font-light text-base">
                        {curso.categoria}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </section>
        )
      })}
    </div>
  )
}
