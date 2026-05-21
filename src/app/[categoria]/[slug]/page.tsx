import { notFound } from 'next/navigation';
import ProgramDetailContent from './components/program-detail-content';

type Props = {
  params: Promise<{
    categoria: string;
    slug: string;
  }>;
};

const categoriasMap: Record<string, string> = {
  maestrias: 'Maestrias',
  doctorados: 'Doctorados',
  'residentado-medico': 'Residentado Medico',
  'segunda-especialidad': 'Segundas Especialidades',
};

export default async function ProgramPage({ params }: Props) {
  const { categoria, slug } = await params;

  if (!categoriasMap[categoria]) {
    notFound();
  }

  return <ProgramDetailContent categoria={categoria} slug={slug} />;
}
