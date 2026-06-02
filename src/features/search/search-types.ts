export interface SearchItem {
  id: number
  title: string
  type: "tipo" | "programa" | "comunicado"
  href: string
  date?: string
}
