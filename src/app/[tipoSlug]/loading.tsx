export default function Loading() {
  return (
    <div className="flex items-center justify-center py-20" role="status">
      <div className="w-8 h-8 border-4 border-blue-900 border-t-transparent rounded-full animate-spin" />
      <span className="sr-only">Cargando...</span>
    </div>
  )
}
