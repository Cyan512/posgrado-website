import { Image } from '@/src/models/strapi/shared/image';

export interface Step {
  id: number;
  image: Image;
  title: string;
  description: string;
}
