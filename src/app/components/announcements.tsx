'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import { ArrowRight } from 'lucide-react';
import AnnouncementCard from '@/src/components/announcement-card';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const announcements = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/ds0tjwccs/image/upload/v1778779025/Container_r5qrqz.svg',
    date: '14 June 2025',
    comments: '04',
    title:
      'Cuarto examen de suficiencia idiomática 2025 dirigido a los estudiantes de maestría y doctorado de la Escuela de Posgrado de la UNSAAC',
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/ds0tjwccs/image/upload/v1778779025/Container_1_ofl0xz.svg',
    date: '14 June 2025',
    comments: '04',
    title:
      'Cuarto examen de suficiencia idiomática 2025 dirigido a los estudiantes de maestría y doctorado de la Escuela de Posgrado de la UNSAAC',
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/ds0tjwccs/image/upload/v1778779025/Container_2_coicp2.svg',
    date: '14 June 2025',
    comments: '04',
    title:
      'Cuarto examen de suficiencia idiomática 2025 dirigido a los estudiantes de maestría y doctorado de la Escuela de Posgrado de la UNSAAC',
  },
];

export default function Announcements() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <h2 className="text-primary text-3xl font-bold md:text-4xl">Comunicados</h2>
          <button className="bg-primary hover:bg-primary/90 hidden items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all hover:gap-3 md:flex">
            Más Comunicados
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          className="pb-14"
        >
          {announcements.map((announcement) => (
            <SwiperSlide key={announcement.id} className="rounded-lg">
              <AnnouncementCard data={announcement} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-8 flex justify-center md:hidden">
          <button className="bg-primary hover:bg-primary/90 flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all hover:gap-3">
            Más Comunicados
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
