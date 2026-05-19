export type ProgramType = 'maestria' | 'doctorado' | 'segunda_especialidad' | 'residentado_medico';

export interface Program {
  id: number;
  name: string;
  program_type: ProgramType;
}
