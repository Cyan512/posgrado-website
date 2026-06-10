"use client"
import { useState } from "react"

const tabs = [
  { id: 'presentacion', label: 'PRESENTACIÓN' },
  { id: 'malla', label: 'MALLA CURRICULAR' },
  { id: 'inversion', label: 'INVERSIÓN' },
  { id: 'lineas', label: 'LÍNEAS DE INVESTIGACIÓN' },
]

export default function ProgramTabs() {
  const [activeTab, setActiveTab] = useState('presentacion')

  return (
    <div className="w-full bg-white border-b border-gray-200 sticky top-20 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex space-x-8 overflow-x-auto scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-5 text-xs font-bold tracking-wider whitespace-nowrap border-b-2 transition-all duration-200 ${
                activeTab === tab.id
                  ? 'border-[#0f2d59] text-[#0f2d59]'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}