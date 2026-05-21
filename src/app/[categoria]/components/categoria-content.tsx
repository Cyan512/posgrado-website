'use client';

import { useStrapi } from "@/src/hooks/use-strapi";


type Program = {
  id: number;
  name: string;
  slug: string | null;
};

type StrapiResponse = {
  data: Program[];
};

type Props = {
  categoria: string;
  categoriaStrapi: string;
};

export default function CategoriaContent({
  categoria,
  categoriaStrapi,
}: Props) {
  const endpoint = `/api/programs?populate=*&filters[program_type][name][$eq]=${encodeURIComponent(
    categoriaStrapi
  )}`;

  const { data, loading, error } = useStrapi<StrapiResponse>(endpoint);

  if (loading) {
    return (
      <section className="flex h-screen items-center justify-center">
        <h1 className="text-3xl font-bold">Cargando...</h1>
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex h-screen items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500">{error}</h1>
      </section>
    );
  }

  return (
    <>
      <section className="flex h-[40vh] items-center justify-center">
        <h1 className="text-5xl font-bold capitalize">
          {categoria.replace('-', ' ')}
        </h1>
      </section>

      <section className="container mx-auto px-4 py-10">
        <h2 className="mb-8 text-3xl font-semibold">
          Todos los programas
        </h2>

        {data?.data.length === 0 ? (
          <p>No hay programas disponibles.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data?.data.map((programa) => (
              <article
                key={programa.id}
                className="rounded-2xl border p-6 shadow-sm transition hover:shadow-md"
              >
                <h3 className="text-xl font-semibold">
                  {programa.name}
                </h3>

                {programa.slug && (
                  <p className="mt-2 text-sm text-gray-500">
                    {programa.slug}
                  </p>
                )}
                
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}