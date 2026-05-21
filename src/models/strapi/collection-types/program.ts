import { ProgramType } from './program_type';
import { StrapiImage } from '../shared/image';

export interface Program {
  id: number;
  name: string;
  program_type: ProgramType;
  slug: string;
  description: string;
  call: boolean;
  time_end: string;
  mode: string;
  image: StrapiImage;
}
