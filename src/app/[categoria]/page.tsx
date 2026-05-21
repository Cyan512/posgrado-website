import { notFound } from 'next/navigation';
import CategoriaContent from './components/categoria-content';

type Props = {
  params: Promise<{
    categoria: string;
  }>;
};

const categoriasMap: Record<string, string> = {
  maestrias: 'Maestrias',
  doctorados: 'Doctorados',
  'residentado-medico': 'Residentado Medico',
  'segunda-especialidad': 'Segundas Especialidades',
};

export default async function CategoriaPage({ params }: Props) {
  const { categoria } = await params;

  const categoriaStrapi = categoriasMap[categoria];

  if (!categoriaStrapi) {
    notFound();
  }

  return (
    <CategoriaContent
      categoria={categoria}
      categoriaStrapi={categoriaStrapi}
    />
  );
}