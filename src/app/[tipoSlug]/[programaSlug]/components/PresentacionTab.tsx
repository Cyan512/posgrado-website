import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Presentacion } from "@/lib/types";
import { Target, CheckCircle2, UserCheck, Lightbulb } from "lucide-react";

interface Props {
    data: Presentacion | null
}

export function PresentacionTab({ data }: Props) {
    if (!data) return null
    return (
        <div >
            {data.objetivo_general && (
                <div className="mb-14">
                    <h2 className="text-3xl font-bold mb-6 tracking-tight">Objetivo General</h2>
                    <p className="text-lg leading-relaxed font-normal">
                        {data.objetivo_general}
                    </p>
                </div>
            )}
            {data.objetivos_especificos && (
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 tracking-tight">
                        Objetivos Específicos
                    </h2>
                    <ul className="space-y-6">
                        {data.objetivos_especificos
                            ?.split("\n")
                            .filter((item) => item.trim() !== "")
                            .map((objetivo, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <span className="w-1.5 h-1.5 bg-[#9d2449] shrink-0 mt-2.5 rounded-sm" />
                                    <p className="text-[16px] leading-relaxed ">
                                        {objetivo}
                                    </p>
                                </li>
                            ))}
                    </ul>
                </div>
            )}
            {data.perfil_posgraduado && (
                <div className="bg-[#f8f8f8] border border-gray-100 rounded-2xl p-8 sm:p-10 shadow-sm transition-all duration-300 hover:shadow-md">
                    <h2 className="text-3xl font-bold mb-6 tracking-tight">
                        Perfil del Graduado
                    </h2>
                    <p className="text-[17px] leading-relaxed text-gray-600 font-normal">
                        {data.perfil_posgraduado}
                    </p>
                </div>
            )}
        </div>
    )
}