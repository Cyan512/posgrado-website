import { Button } from "@/components/ui/button"

const itemsInfo = [
  { label: "DURACIÓN", value: "18 Meses (3 Semestres)", icon: "📅" },
  { label: "MODALIDAD", value: "Semipresencial (Híbrida)", icon: "🎓" },
  { label: "CRÉDITOS", value: "48 Créditos Académicos", icon: "📜" },
  { label: "IDIOMA", value: "Español / Inglés (B2)", icon: "🌐" },
]

export default function InfoSidebar() {
  return (
    <div className="space-y-6 sticky top-40">
      {/* Caja de Información Clave */}
      <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm">
        <h3 className="text-lg font-bold text-[#0f2d59] mb-6">Información Clave</h3>
        
        <div className="space-y-5 mb-6">
          {itemsInfo.map((item, index) => (
            <div key={index} className="flex items-start space-x-3">
              <span className="text-xl mt-0.5">{item.icon}</span>
              <div>
                <span className="block text-[10px] font-bold text-gray-400 tracking-wider uppercase">
                  {item.label}
                </span>
                <span className="text-sm font-semibold text-gray-800">
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        <Button className="w-full bg-[#8a3d73] hover:bg-[#732d5e] text-white font-medium py-3 rounded-none text-xs tracking-wider uppercase transition-colors">
          Solicitar Admisión
        </Button>
      </div>

      {/* Caja de Soporte/Ayuda */}
      <div className="bg-[#0f2d59] text-white p-6 rounded-sm relative overflow-hidden group">
        <div className="relative z-10">
          <h4 className="text-lg font-bold mb-2">¿Necesitas ayuda?</h4>
          <p className="text-xs text-gray-300 leading-relaxed mb-6">
            Nuestros asesores académicos están listos para guiarte en tu proceso de postulación.
          </p>
          <button className="text-xs font-bold tracking-wider uppercase inline-flex items-center group-hover:underline">
            Agendar llamada 
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
        {/* Signo de interrogación translúcido de fondo */}
        <div className="absolute -bottom-10 -right-6 text-9xl font-bold text-white/5 select-none pointer-events-none">
          ?
        </div>
      </div>
    </div>
  )
}