import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Página no encontrada</h1>
      <p className="text-gray-600 mb-6">La página que buscas no existe o ha sido movida.</p>
      <Link
        href="/"
        className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  )
}
