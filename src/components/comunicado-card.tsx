import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

interface Props {
  href: string;
  imagen?: string;
  titulo: string;
  fecha: string;
}

export function ComunicadoCard({ href, imagen, titulo, fecha }: Props) {
  return (
    <Card className="relative mx-auto w-full max-w-sm p-4 gap-4">
      <div className="absolute inset-0 z-30 aspect-video" />
      <img
        src={imagen}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover"
      />
      <CardHeader className="p-0">
        <Badge variant="secondary" className="mb-2 w-fit">
          {fecha}
        </Badge>
        <CardTitle className="normal-case">
          {titulo}
        </CardTitle>
      </CardHeader>
      <CardFooter className="p-0">
        <Button asChild>
          <Link href={href}>
            Leer Más
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
