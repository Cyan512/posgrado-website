"use client"

interface FilterProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function Filter({ value, onChange, placeholder = "Buscar..." }: FilterProps) {
  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <label htmlFor="filter-input" className="sr-only">{placeholder}</label>
      <input
        id="filter-input"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label={placeholder}
      />
    </div>
  )
}
