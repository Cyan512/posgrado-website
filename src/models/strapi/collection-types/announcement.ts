import { Image } from '@/src/models/strapi/shared/image';

export interface Announcement {
  id: number;
  image: Image;
  date: string;
  title: string;
}
