'use client';

import {
  About,
  AdmissionProcess,
  Announcements,
  Banner,
  Hero,
  Programs,
  StudentInformation,
} from '@/src/app/(main)/components';
import { useStrapi } from '@/src/hooks/use-strapi';
import { HomeBlocks, HomeContent } from '@/src/models/strapi/pages/home';
import { StrapiResponse } from '@/src/models/strapi/strapi';

function renderComponent(component: HomeBlocks, index: number) {
  const key = `${component.id}-${index}`;

  switch (component.__component) {
    case 'home.hero':
      return <Hero key={key} data={component} />;
    case 'home.about':
      return <About key={key} data={component} />;
    case 'home.admission-process':
      return <AdmissionProcess key={key} data={component} />;
    case 'home.announcements':
      return <Announcements key={key} data={component} />;
    case 'home.banner':
      return <Banner key={key} data={component} />;
    case 'home.programs':
      return <Programs key={key} data={component} />;
    case 'home.student-information':
      return <StudentInformation key={key} data={component} />;
    default:
      return null;
  }
}

export default function Home() {
  const { data, loading, error } = useStrapi<StrapiResponse<HomeContent>>('/api/home?populate=*');

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  const content = data?.data?.content ?? [];

  return <>{content.map((component, index) => renderComponent(component, index))}</>;
}
