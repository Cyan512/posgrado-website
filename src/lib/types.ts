export interface StrapiImage {
  id: number
  documentId: string
  url: string
  alternativeText: string | null
  width: number
  height: number
  formats?: {
    thumbnail?: StrapiImageFormat
    small?: StrapiImageFormat
    medium?: StrapiImageFormat
    large?: StrapiImageFormat
  }
}

interface StrapiImageFormat {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  size: number
  width: number
  height: number
}

export interface Comunicado {
  id: number
  documentId: string
  titulo: string
  fecha: string
  slug: string
  imagen: StrapiImage | null
}

export interface TipoPrograma {
  id: number
  documentId: string
  nombre: string
  slug: string
  programas: Programa[]
  imagen_card: StrapiImage | null
  imagen_bg: StrapiImage | null
}

export interface Programa {
  id: number
  documentId: string
  nombre: string
  slug: string
  descripcion: string | null
  tipo_programa: TipoProgramaRef | null
}

interface TipoProgramaRef {
  id: number
  documentId: string
  nombre: string
  slug: string
}

interface StrapiCollection<T> {
  data: T[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

interface StrapiSingle<T> {
  data: T
}
