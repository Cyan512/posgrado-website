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
  descripcion: string
  categoria: string
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
  facultad: string
  nombre: string
  slug: string
  tipo_programa: TipoProgramaRef | null
  descripcion: string | null
  imagen: StrapiImage
  convocatoria: boolean
  inversion: Inversion
  modalidad: string
  malla_curricular: Cursos[]
  presentacion: Presentacion | null
}

/* Shared */
export interface Inversion {
  id: number
  matricula: number
  n_matricula: number
  cuotas: number
  valor_cuota: number
}

export interface Cursos {
  id: number
  documentId: string
  asignatura: string
  creditos: number
  categoria: string
  modulo: string
  programa: { id: number; documentId: string; nombre: string; slug: string } | null
}

export interface Presentacion{
  id:number
  objetivo_general: string
  objetivos_especificos: string
  perfil_posgraduado: string
}
/* */

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
