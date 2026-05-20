import { ProgramType } from './program_type';

export interface Program {
  id: number;
  name: string;
  program_type: ProgramType;
}
