import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
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
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video" />
      <img
        src={imagen}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">
            {fecha}
          </Badge>
        </CardAction>
        <CardTitle className="normal-case">
          {titulo}
        </CardTitle>
      </CardHeader>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href={href}>
            Leer Más
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
