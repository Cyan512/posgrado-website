import Image from 'next/image';

const data = {
  image: 'https://res.cloudinary.com/ds0tjwccs/image/upload/v1778755625/Foto-91_1_dv4bmg.png',
  title: 'Lleva tu carrera al siguiente nivel con nuestros programas de Posgrado',
  description:
    'Expande tus conocimientos, especialízate y conviértete en un líder en tu campo. Descubre nuestras maestrías y doctorados diseñados para impulsar tu futuro profesional',
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden">
      <Image
        src={data.image}
        alt="Hero background"
        fill
        className="object-cover object-center"
        priority
      />

      <div className="absolute inset-0 bg-[#0b2b53]/60" />

      <div className="relative z-10 max-w-3xl px-8 md:px-20">
        <h1 className="text-secondary font-merriweather mb-6 text-4xl leading-tight font-bold md:text-5xl">
          {data.title}
        </h1>
        <p className="text-sm leading-relaxed text-white md:text-base">{data.description}</p>
      </div>
    </section>
  );
}
