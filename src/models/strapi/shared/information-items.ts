import { StrapiImage } from './image';
import { Link } from './link';

export interface InformationItems {
  id: number;
  title: string;
  description: string;
  link: Link;
  icon: StrapiImage;
}
