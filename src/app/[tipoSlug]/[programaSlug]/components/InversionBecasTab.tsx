import { Inversion } from "@/lib/types";
import { Wallet, Calendar, GraduationCap, CheckCircle2 } from "lucide-react";

interface Props {
  data: Inversion;
  modalidad: string
}

export function InversionBecasTab({ data, modalidad }: Props) {
  if (!data) return null;

  const matriculaMonto = Number(data.matricula) || 0;
  const nMatricula = Number(data.n_matricula) || 0;
  const cuotasCantidad = Number(data.cuotas) || 0;
  const valorCuota = Number(data.valor_cuota) || 0;

  const inversionTotal = (matriculaMonto * nMatricula) + (cuotasCantidad * valorCuota);

  const formatCurrency = (value: number) => {
    return `S/. ${value.toLocaleString("es-PE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Encabezado de Sección */}
      <div className="mb-4 pb-2 border-b-2 border-primary/20">
        <h2 className="text-2xl font-semibold text-foreground tracking-tight font-heading">
          Inversión del Programa
        </h2>
      </div>

      {/* Bloque Principal: Inversión Total Calculada */}
      <div className="bg-primary text-primary-foreground p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-sm transition-all duration-200">
        <div className="space-y-1">
          <span className="text-xs font-medium tracking-wider uppercase opacity-80">
            Inversión Total del Programa
          </span>
          <p className="text-3xl md:text-5xl font-bold tracking-tight">
            {formatCurrency(inversionTotal)}
          </p>
        </div>
        <div className="inline-flex items-center gap-1.5 bg-pink-500/20 text-pink-200 border border-pink-500/30 px-4 py-2 text-sm rounded-full">
          <CheckCircle2 className="w-4 h-4 text-pink-400" />
          <span className="font-medium">Valor Garantizado 2026</span>
        </div>
      </div>

      {/* Grid de Alternativas: Matrícula y Financiamiento */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Bloque: Matrícula */}
        <div className="border border-border/40 bg-card p-6 flex flex-col justify-between space-y-4 hover:shadow-md transition-all duration-200">
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-muted border border-border/40 text-foreground/80">
                <Wallet className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-md uppercase tracking-tight font-heading">
                  Matrícula
                </h3>
                <p className="text-xs text-muted-foreground font-light">
                  {nMatricula > 1 ? `Pago en ${nMatricula} partes` : "Pago único inicial"}
                </p>
              </div>
            </div>
            <div className="pt-2 border-b border-border/40">
              <p className="text-xl font-medium text-foreground pb-2">
                {formatCurrency(matriculaMonto)}
              </p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed font-light">
            Requisito para reserva de cupo y formalización de ingreso.
          </p>
        </div>

        {/* Bloque: Plan de Financiamiento */}
        <div className="border border-border/40 bg-card p-6 flex flex-col justify-between space-y-4 hover:shadow-md transition-all duration-200">
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-muted border border-border/40 text-foreground/80">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-md uppercase tracking-tight font-heading">
                  Plan de Financiamiento
                </h3>
                <p className="text-xs text-muted-foreground font-light">
                  Pagos mensuales
                </p>
              </div>
            </div>
            <div className="pt-2 border-b border-border/40">
              <p className="text-xl font-light text-foreground pb-2">
                <span className="font-medium">{cuotasCantidad} cuotas</span> de{" "}
                <span className="font-medium text-primary">{formatCurrency(valorCuota)}</span>
              </p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed font-light">
            Sin intereses durante la duración estándar del programa académico.
          </p>
        </div>
      </div>

      {/* Bloque Inferior: Modalidad de Estudios */}
      <div className="bg-muted/40 border border-border/40 p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="text-primary">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Modalidad de Estudios
            </h4>
            <p className="text-md font-medium text-foreground capitalize">
              {modalidad}
            </p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground font-light max-w-md md:text-right leading-relaxed">
          {modalidad === "semipresencial"
            ? "Combina clases virtuales interactivas con sesiones presenciales intensivas una vez al mes."
            : modalidad === "presencial"
              ? "Desarrolla tus estudios mediante clases presenciales con interacción directa y acceso a los recursos del campus."
              : modalidad === "virtual"
                ? "Accede a una formación flexible y de calidad mediante clases virtuales desde cualquier lugar."
                : ""}
        </p>
      </div>

      {/* Términos y Condiciones Legales */}
      <div className="bg-linear-to-r from-primary/5 to-transparent border-l-2 border-primary pl-6 py-4">
        <p className="text-xs italic text-muted-foreground leading-relaxed font-light">
          * Los valores presentados están sujetos a cambios según las políticas institucionales.
          Consulte con un asesor los descuentos por pago al contado o convenios empresariales vigentes.
        </p>
      </div>
    </div>
  );
}