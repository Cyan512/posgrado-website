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

export function ProgramaTabs() {
    return (
        <Tabs defaultValue="presentacion" className="w-[400px]">
            <TabsList>
                <TabsTrigger value="presentacion">Presentación</TabsTrigger>
                <TabsTrigger value="malla-curricular">Malla Curricular</TabsTrigger>
                <TabsTrigger value="inversion-becas">Inversión y Becas</TabsTrigger>
                <TabsTrigger value="lineas-investigacion">Líneas de Investigación</TabsTrigger>
            </TabsList>
            <TabsContent value="presentacion">
                <PresentacionTab />
            </TabsContent>
            <TabsContent value="malla-curricular">
                <MallaCurricularTab />
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
