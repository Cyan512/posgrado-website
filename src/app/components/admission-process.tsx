import Button from '@/src/components/button';
import { HomeAdmissionProcess } from '@/src/models/strapi/pages/home';

interface Props {
  data: HomeAdmissionProcess;
}
export default function AdmissionProcess({ data }: Props) {
  return (
    <section className="flex min-h-175 w-full flex-col lg:flex-row">
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden p-8 text-center md:p-16 lg:w-1/2">
        <img
          src={data.image.src.url}
          alt={data.image.alt}
          className="absolute inset-0 h-full w-full object-cover lg:hidden"
        />
        <img
          src="bg.svg"
          alt="Background Texture"
          className="absolute inset-0 hidden h-full w-full object-cover lg:block"
        />

        <div className="relative z-10 flex w-full flex-col items-center">
          <div className="mb-12">
            <h2 className="mb-2 inline-block pb-2 text-3xl tracking-widest text-white uppercase md:text-4xl">
              {data.title}
            </h2>
            <p className="font-serif text-4xl font-light tracking-widest text-white md:text-5xl">
              {data.highlight}
            </p>
          </div>

          <div className="grid w-full max-w-lg grid-cols-1 gap-6 sm:grid-cols-2">
            {data.steps.map((step, index) => (
              <div
                key={index}
                className="flex min-h-50 flex-col items-center justify-center rounded-[40px] border border-white/10 bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center">
                  <img
                    src={step.image.src.url}
                    alt={step.title}
                    className="h-full w-auto object-contain brightness-0 invert"
                  />
                </div>
                <h3 className="mb-2 leading-tight font-bold text-white">{step.title}</h3>
                <p className="text-sm text-white/80">{step.description}</p>
              </div>
            ))}
          </div>

          <Button href={data.link.href} variant={data.link.variant} size="md" className="mt-12">
            {data.link.label}
          </Button>
        </div>
      </div>

      <div className="relative hidden min-h-125 w-full items-center justify-center lg:flex lg:w-1/2">
        <img
          src={data.image.src.url}
          alt={data.image.alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
