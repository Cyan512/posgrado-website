import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface Announcement {
  id: number;
  image: string;
  date: string;
  comments: string;
  title: string;
}

interface Props {
  data: Announcement;
}

export default function AnnouncementCard({ data }: Props) {
  return (
    <article
      key={data.id}
      className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="p-6">
        <div className="text-fonts/60 mb-4 flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="bg-secondary inline-block h-2 w-2 rounded-full" />
            <span>{data.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-secondary inline-block h-2 w-2 rounded-full" />
            <span>Comment ({data.comments})</span>
          </div>
        </div>

        <h3 className="text-fonts line-clamp-3w mb-6 text-base leading-snug font-semibold">
          {data.title}
        </h3>

        <button className="bg-primary hover:bg-primary/90 flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-all hover:gap-3">
          Leer Más
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
}
