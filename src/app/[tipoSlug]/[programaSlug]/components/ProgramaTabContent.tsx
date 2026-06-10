import {
    TabsContent,
} from "@/components/ui/tabs"
import { PresentacionTab } from "./PresentacionTab"
import { MallaCurricularTab } from "./MallaCurricularTab"
import { InversionBecasTab } from "./InversionBecasTab"
import { LineasInvestigacionTab } from "./LineasInvestigacionTab"
import { Programa } from "@/lib/types"

interface Props {
    programa: Programa;
}

export function ProgramaTabContent({ programa }: Props) {
    return (
        <>
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
        </>
    )
}
