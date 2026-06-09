import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { PresentacionTab } from "./PresentacionTab"
import { MallaCurricularTab } from "./MallaCurricularTab"
import { InversionBecasTab } from "./InversionBecasTab"
import { LineasInvestigacionTab } from "./LineasInvestigacionTab"
import { Programa } from "@/lib/types"

interface Props {
    programa: Programa;
}

export function ProgramaTabs({ programa }: Props) {


    return (
        <Tabs defaultValue="presentacion" className="w-full max-w-4xl mx-auto">
            <TabsList>
                <TabsTrigger value="presentacion">Presentación</TabsTrigger>
                <TabsTrigger value="malla-curricular">Malla Curricular</TabsTrigger>
                <TabsTrigger value="inversion-becas">Inversión y Becas</TabsTrigger>
                <TabsTrigger value="lineas-investigacion">Líneas de Investigación</TabsTrigger>
            </TabsList>
            <TabsContent value="presentacion">
                <PresentacionTab data={programa.presentacion} />
            </TabsContent>
            <TabsContent value="malla-curricular">
                <MallaCurricularTab data={programa.malla_curricular} />
            </TabsContent>
            <TabsContent value="inversion-becas">
                <InversionBecasTab />
            </TabsContent>
            <TabsContent value="lineas-investigacion">
                <LineasInvestigacionTab />
            </TabsContent>
        </Tabs>

    )
}
