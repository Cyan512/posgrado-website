import Image from 'next/image';
import RegisterForm from '@/src/components/register-form';
import Button from '@/src/components/button';
import { HomeHero } from '@/src/models/strapi/pages/home';

interface Props {
  data: HomeHero;
}

export default function Hero({ data }: Props) {
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden">
      <Image
        src={data.image.src.url}
        alt={data.image.alt}
        fill
        className="object-cover object-center"
        priority
      />

      <div className="absolute inset-0 bg-[#0b2b53]/40" />

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-12 md:pt-28 md:pb-16 lg:py-0">
        <div className="flex flex-col items-center gap-6 text-center lg:hidden">
          <h1 className="text-secondary font-merriweather max-w-3xl text-4xl leading-tight font-bold">
            {data.title}
          </h1>
          <div className="w-full max-w-md">
            <RegisterForm />
          </div>
        </div>

        <div className="hidden items-center justify-between gap-8 lg:flex">
          <div className="flex flex-col items-start text-start">
            <h1 className="text-secondary font-merriweather mb-6 max-w-3xl text-4xl leading-tight font-bold md:text-5xl">
              {data.title}
            </h1>
            <p className="mb-10 max-w-2xl text-sm leading-relaxed text-white md:text-base">
              {data.description}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              {data.links?.map((item, index) => (
                <Button key={index} href={item.href} variant={item.variant} size="md">
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
          <div className="w-full max-w-md shrink-0">
            <RegisterForm />
          </div>
        </div>
      </div>
    </section>
  );
}
