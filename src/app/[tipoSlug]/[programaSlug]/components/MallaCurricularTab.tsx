import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cursos } from "@/lib/types"

const variantMap: Record<string, "default" | "secondary" | "outline"> = {
  Obligatorio: "default",
  Electivo: "secondary",
}
interface PropsV1 {
  data: Cursos[]
  title: string
}
function MallaTable({ data, title }: PropsV1) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">Nro</TableHead>
              <TableHead>Asignatura</TableHead>
              <TableHead className="w-20 text-center">Créditos</TableHead>
              <TableHead className="w-28">Categoría</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((curso, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{curso.asignatura}</TableCell>
                <TableCell className="text-center">{curso.creditos}</TableCell>
                <TableCell>
                  <Badge variant={variantMap[curso.categoria] ?? "outline"}>
                    {curso.categoria}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

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
    <div className="space-y-6">
      {Object.entries(grouped).map(([modulo, cursos]) => (
        <MallaTable key={modulo} data={cursos} title={modulo} />
      ))}
    </div>
  )
}
