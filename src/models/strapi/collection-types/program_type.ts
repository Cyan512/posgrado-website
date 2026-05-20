import { StrapiImage } from '../shared/image';
import { Link } from '../shared/link';
import { Program } from './program';

export interface ProgramType {
  id: number;
  name: string;
  programs: Program[];
  image: StrapiImage;
  link: Link;
}
