import { ArrowRight } from 'lucide-react';
import AnnouncementCard from '@/src/components/announcement-card';

const announcements = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/ds0tjwccs/image/upload/v1778756356/Rectangle_4_oqhk1b.png',
    date: '14 June 2025',
    comments: '04',
    title:
      'Cuarto examen de suficiencia idiomática 2025 dirigido a los estudiantes de maestría y doctorado de la Escuela de Posgrado de la UNSAAC',
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/ds0tjwccs/image/upload/v1778756356/Rectangle_4_oqhk1b.png',
    date: '14 June 2025',
    comments: '04',
    title:
      'Cuarto examen de suficiencia idiomática 2025 dirigido a los estudiantes de maestría y doctorado de la Escuela de Posgrado de la UNSAAC',
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/ds0tjwccs/image/upload/v1778756356/Rectangle_4_oqhk1b.png',
    date: '14 June 2025',
    comments: '04',
    title:
      'Cuarto examen de suficiencia idiomática 2025 dirigido a los estudiantes de maestría y doctorado de la Escuela de Posgrado de la UNSAAC',
  },
];

export default function Announcements() {
  return (
    <section className="bg-back py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-primary text-3xl font-bold md:text-4xl">Comunicados</h2>
          <button className="bg-primary hover:bg-primary/90 flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all hover:gap-3">
            Más Comunicados
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {announcements.map((announcement) => (
            <AnnouncementCard key={announcement.id} data={announcement} />
          ))}
        </div>
      </div>
    </section>
  );
}
