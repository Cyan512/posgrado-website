import {
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export function ProgramaTabList() {
    return (
        <div className="w-full border-b">
            <div className="max-w-7xl mx-auto px-6">
                <TabsList className="flex space-x-8 overflow-x-auto scrollbar-none p-0 bg-transparent">
                    <TabsTrigger value="presentacion" className="data-active:bg-transparent data-active:border-b-red-500">Presentación</TabsTrigger>
                    <TabsTrigger value="malla-curricular" className="data-active:bg-transparent data-active:border-b-red-500">Malla Curricular</TabsTrigger>
                    <TabsTrigger value="inversion-becas" className="data-active:bg-transparent data-active:border-b-red-500">Inversión y Becas</TabsTrigger>
                    <TabsTrigger value="lineas-investigacion" className="data-active:bg-transparent data-active:border-b-red-500">Líneas de Investigación</TabsTrigger>
                </TabsList>
            </div>
        </div>
    )
}