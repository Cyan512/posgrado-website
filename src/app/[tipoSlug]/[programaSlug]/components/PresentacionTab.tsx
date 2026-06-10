import { Presentacion } from "@/lib/types";

interface Props {
    data: Presentacion | null
}

export function PresentacionTab({ data }: Props) {
    if (!data) return null

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            {/* Objetivo General */}
            {data.objetivo_general && (
                <section className="group">
                    <div className="mb-4 pb-2 border-b-2 border-primary/20">
                        <h2 className="text-2xl font-semibold text-foreground tracking-tight">
                            Objetivo General
                        </h2>
                    </div>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-muted-foreground leading-relaxed text-[17px] font-light">
                            {data.objetivo_general}
                        </p>
                    </div>
                </section>
            )}

            {/* Objetivos Específicos */}
            {data.objetivos_especificos && (
                <section className="group">
                    <div className="mb-4 pb-2 border-b-2 border-primary/20">
                        <h2 className="text-2xl font-semibold text-foreground tracking-tight">
                            Objetivos Específicos
                        </h2>
                    </div>
                    <div className="space-y-3">
                        {data.objetivos_especificos
                            ?.split("\n")
                            .filter((item) => item.trim() !== "")
                            .map((objetivo, index) => (
                                <div
                                    key={index}
                                    className="bg-linear-to-r from-primary/5 to-transparent border-l-2 border-primary pl-6 py-2 transition-all duration-200 hover:from-primary/10 hover:border-l-4"
                                >
                                    <p className="text-muted-foreground leading-relaxed text-[16px] font-light">
                                        {objetivo}
                                    </p>
                                </div>
                            ))}
                    </div>
                </section>
            )}

            {/* Perfil del Graduado */}
            {data.perfil_posgraduado && (
                <section className="group">
                    <div className="mb-4 pb-2 border-b-2 border-primary/20">
                        <h2 className="text-2xl font-semibold text-foreground tracking-tight">
                            Perfil del Graduado
                        </h2>
                    </div>
                    <div className="bg-linear-to-r from-primary/5 to-transparent border-l-2 border-primary pl-6 py-4">
                        <p className="text-muted-foreground leading-relaxed text-[17px] font-light">
                            {data.perfil_posgraduado}
                        </p>
                    </div>
                </section>
            )}
        </div>
    )
}
