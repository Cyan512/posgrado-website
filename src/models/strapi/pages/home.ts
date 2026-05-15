import { Link } from '@/src/models/strapi/shared/link';
import { StrapiEntity } from '@/src/models/strapi/strapi';
import { Image } from '@/src/models/strapi/shared/image';
import { Step } from '@/src/models/strapi/shared/step';
import { Announcement } from '../collection-types/announcement';

export interface HomeHero {
  __component: 'home.hero';
  id: number;
  title: string;
  description: string;
  links: Link[];
  image: Image;
}

export interface HomeAbout {
  __component: 'home.about';
  id: number;
  quote: string;
  description: string;
  authorityName: string;
  authorityRole: string;
  image: Image;
}

export interface HomeAdmissionProcess {
  __component: 'home.admission-process';
  id: number;
  title: string;
  highlight: string;
  image: Image;
  steps: Step[];
  link: Link;
}

export interface HomeAnnouncements {
  __component: 'home.announcements';
  id: number;
  title: string;
  link: Link;
  announcements: Announcement[];
}

export type HomeBlocks = HomeHero | HomeAbout | HomeAdmissionProcess | HomeAnnouncements;

export type HomeContent = StrapiEntity<{
  content: HomeBlocks[];
}>;
