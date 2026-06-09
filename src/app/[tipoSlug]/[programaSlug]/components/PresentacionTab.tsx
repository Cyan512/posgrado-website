import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Presentacion } from "@/lib/types";
import { Target, CheckCircle2, UserCheck, Lightbulb } from "lucide-react";

interface Props{
    data: Presentacion | null
}

export function PresentacionTab({data}:Props) {
    if (!data) return null
    // Función para convertir texto con saltos de línea en párrafos
    const formatTextContent = (text: string) => {
        if (!text) return null;
        
        // Dividir por saltos de línea dobles para párrafos
        const paragraphs = text.split('\n\n').filter(p => p.trim());
        
        return paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 last:mb-0">
                {paragraph.trim()}
            </p>
        ));
    };

    // Función para formatear listas (si el texto contiene bullets o números)
    const formatListContent = (text: string) => {
        if (!text) return null;
        
        // Detectar si es una lista (líneas que empiezan con -, *, números, etc.)
        const lines = text.split('\n').filter(l => l.trim());
        const isList = lines.some(line => /^[\-\*\d]+[\.\)]\s/.test(line.trim()));
        
        if (isList) {
            const listItems = lines.map(line => line.replace(/^[\-\*\d]+[\.\)]\s*/, '').trim());
            return (
                <ul className="space-y-3">
                    {listItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>
            );
        }
        
        return formatTextContent(text);
    };

    return (
        <div className="space-y-6">
            {/* Objetivo General */}
            {data.objetivo_general && (
                <Card className="overflow-hidden border-2 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                                <Target className="h-6 w-6" />
                            </div>
                            <div>
                                <CardTitle className="text-2xl font-bold">
                                    Objetivo General
                                </CardTitle>
                                <CardDescription className="text-blue-100 mt-1">
                                    Propósito principal del programa
                                </CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="pt-6 pb-6">
                        <div className="prose prose-lg max-w-none dark:prose-invert">
                            {formatTextContent(data.objetivo_general)}
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Objetivos Específicos */}
            {data.objetivos_especificos && (
                <Card className="overflow-hidden border-2 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                                <Lightbulb className="h-6 w-6" />
                            </div>
                            <div>
                                <CardTitle className="text-2xl font-bold">
                                    Objetivos Específicos
                                </CardTitle>
                                <CardDescription className="text-purple-100 mt-1">
                                    Metas y competencias a desarrollar
                                </CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="pt-6 pb-6">
                        <div className="prose prose-lg max-w-none dark:prose-invert">
                            {formatListContent(data.objetivos_especificos)}
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Perfil del Posgraduado */}
            {data.perfil_posgraduado && (
                <Card className="overflow-hidden border-2 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                                <UserCheck className="h-6 w-6" />
                            </div>
                            <div>
                                <CardTitle className="text-2xl font-bold">
                                    Perfil del Posgraduado
                                </CardTitle>
                                <CardDescription className="text-emerald-100 mt-1">
                                    Competencias y habilidades al finalizar
                                </CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="pt-6 pb-6">
                        <div className="prose prose-lg max-w-none dark:prose-invert">
                            {formatListContent(data.perfil_posgraduado)}
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Nota informativa */}
            <Card className="border-indigo-200 bg-indigo-50/50 dark:bg-indigo-950/20 dark:border-indigo-800">
                <CardContent className="pt-6 pb-6">
                    <div className="flex gap-3">
                        <div className="text-indigo-600 dark:text-indigo-400 mt-0.5">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-1">
                                Información del Programa
                            </h4>
                            <p className="text-sm text-indigo-800 dark:text-indigo-200">
                                Este programa está diseñado para formar profesionales altamente capacitados 
                                con las competencias necesarias para enfrentar los desafíos del mercado laboral actual.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}