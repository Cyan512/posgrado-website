"use client"

export default function ComunicadosError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center" role="alert">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Error al cargar comunicados</h1>
      <p className="text-gray-600 mb-6">{error.message || "Ocurrió un error inesperado."}</p>
      <button
        onClick={reset}
        className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
      >
        Intentar de nuevo
      </button>
    </div>
  )
}
