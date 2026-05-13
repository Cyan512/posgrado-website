import Container from '@/src/components/container';
import Link from 'next/link';

const data = {
  title: 'Lleva tu carrera al siguiente nivel con nuestros programas de Posgrado',
  description:
    'Expande tus conocimientos, especialízate y conviértete en un líder en tu campo. Descubre nuestras maestrías y doctorados diseñados para impulsar tu futuro profesional',
  links: [
    {
      label: 'prueba',
      href: '',
    },
  ],
};

export default function Hero() {
  return (
    <section className="overflow-hidde n relative min-h-screen">
      <div></div>
      <Container className="relative z-10 grid min-h-screen items-center lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl leading-tight font-bold sm:text-5xl md:text-6xl">{data.title}</h1>
          <p className="mt-4 text-base leading-relaxed md:text-lg">{data.description}</p>
          <div className="mt-8">
            {data.links.map((item, index) => (
              <Link key={index} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
