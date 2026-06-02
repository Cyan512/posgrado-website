import Link from "next/link"
import Image from "next/image"
import type { StrapiImage } from "@/lib/types"

interface CardProps {
  title: string
  image: StrapiImage | null
  href: string
}

export function CardProgram({ title, image, href }: CardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
      aria-label={title}
    >
      <div className="relative h-48 w-full">
        {image ? (
          <Image
            src={image.formats?.medium?.url ?? image.url}
            alt={image.alternativeText ?? title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
            {title}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900">{title}</h3>
      </div>
    </Link>
  )
}
