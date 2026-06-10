import { Button } from "@/components/ui/button"

export default function Hero() {
    return (
        <section className="relative w-full bg-gradient-to-r from-[#0f2d59] to-[#1d4477] text-white py-20 px-6 overflow-hidden">
            {/* Fondo decorativo imitando la biblioteca opaca */}
            <div className="absolute inset-0 opacity-10 bg-[url('/library-bg.jpg')] bg-cover bg-center mix-blend-overlay"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <span className="inline-block bg-[#ff6b9d] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm mb-6">
                    POSGRADO • FACULTAD DE HUMANIDADES
                </span>

                <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl mb-6 leading-tight">
                    Maestría en Excelencia Académica
                </h1>

                <p className="text-lg text-gray-300 max-w-2xl mb-8 font-light leading-relaxed">
                    Liderando la transformación educativa a través de la investigación rigurosa,
                    el diseño pedagógico innovador y la gestión estratégica institucional.
                </p>

                <div className="flex flex-wrap gap-4">
                    <Button variant="secondary" className="rounded-none px-8 py-3 font-semibold shadow-md">
                        Apply Now
                    </Button>
                    <Button variant="outline" className="rounded-none px-8 py-3 font-semibold border-white/40 hover:bg-white/10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-2 inline">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                        Brochure 2024
                    </Button>
                </div>
            </div>
        </section>
    )
}