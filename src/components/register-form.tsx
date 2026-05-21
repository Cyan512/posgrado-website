'use client';

import { useState } from 'react';
import { useStrapi } from '../hooks/use-strapi';
import { StrapiResponse } from '../models/strapi/strapi';
import { ProgramType } from '../models/strapi/collection-types/program_type';

const docTypes = ['DNI', 'CE', 'Pasaporte'];

export default function RegisterForm() {
  const { data, loading } = useStrapi<StrapiResponse<ProgramType[]>>(
    '/api/program-types?populate=programs'
  );

  const categories = data?.data ?? [];

  const programCategories = categories.map((cat) => ({
    value: cat.name.toLowerCase().replace(/\s+/g, '-'),
    label: cat.name,
    programs: cat.programs ?? [],
  }));

  console.log('Categories:', categories);
  console.log('ProgramCategories:', programCategories);

  const getProgramsForCategory = (categoryName: string) => {
    const category = categories.find(
      (c) => c.name.toLowerCase().replace(/\s+/g, '-') === categoryName
    );
    return category?.programs?.map((p) => p.name) ?? [];
  };

  const [docType, setDocType] = useState('DNI');
  const [bachelor, setBachelor] = useState<'si' | 'no' | null>(null);
  const [authorized, setAuthorized] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('');

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    setSelectedProgram('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: connect to backend
  };

  return (
    <div className="bg-back w-full rounded-2xl p-6 shadow-2xl md:p-8">
      <h2 className="font-merriweather text-primary mb-1 text-center text-2xl font-bold">
        ¡Regístrate ya!
      </h2>
      <p className="text-fonts/60 mb-6 text-center text-sm">
        Empieza tu futuro profesional con nosotros
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {/* Nombre y Apellido paterno */}
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            required
            className="text-fonts placeholder-fonts/40 focus:ring-primary/30 rounded-xl bg-gray-100 px-4 py-3 text-sm outline-none focus:ring-2"
          />
          <input
            type="text"
            placeholder="Ingresa tu ape. paterno"
            required
            className="text-fonts placeholder-fonts/40 focus:ring-primary/30 rounded-xl bg-gray-100 px-4 py-3 text-sm outline-none focus:ring-2"
          />
        </div>

        {/* Tipo de documento + número */}
        <div className="flex overflow-hidden rounded-xl bg-gray-100">
          <select
            value={docType}
            onChange={(e) => setDocType(e.target.value)}
            className="text-fonts bg-gray-100 px-3 py-3 text-sm font-semibold outline-none"
          >
            {docTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <div className="bg-fonts/20 my-2 w-px" />
          <input
            type="text"
            placeholder="Ingresa doc."
            required
            className="text-fonts placeholder-fonts/40 flex-1 bg-gray-100 px-4 py-3 text-sm outline-none"
          />
        </div>

        {/* Correo y Celular */}
        <div className="grid grid-cols-2 gap-3">
          <input
            type="email"
            placeholder="Ingresa tu correo elec."
            required
            className="text-fonts placeholder-fonts/40 focus:ring-primary/30 rounded-xl bg-gray-100 px-4 py-3 text-sm outline-none focus:ring-2"
          />
          <input
            type="tel"
            placeholder="Ingresa tu celular telf."
            required
            className="text-fonts placeholder-fonts/40 focus:ring-primary/30 rounded-xl bg-gray-100 px-4 py-3 text-sm outline-none focus:ring-2"
          />
        </div>

        {/* Categoría de programa */}
        <div className="relative">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            required
            disabled={loading}
            className="border-primary bg-back focus:ring-primary/30 w-full appearance-none rounded-xl border-2 px-4 py-3 text-sm outline-none focus:ring-2 disabled:opacity-50"
            style={{ color: selectedCategory ? 'var(--fonts)' : 'rgba(40,41,50,0.5)' }}
          >
            <option value="" disabled>
              {loading ? 'Cargando...' : 'Elige tu programa'}
            </option>
            {!loading &&
              programCategories.map((cat) => (
                <option key={cat.value} value={cat.value} className="text-fonts">
                  {cat.label}
                </option>
              ))}
          </select>
          <span className="text-fonts/40 pointer-events-none absolute top-1/2 right-4 -translate-y-1/2">
            &#8964;
          </span>
        </div>

        {/* Especialidad — aparece solo cuando hay categoría seleccionada */}
        {selectedCategory && (
          <div className="relative">
            <select
              value={selectedProgram}
              onChange={(e) => setSelectedProgram(e.target.value)}
              required
              className="border-primary bg-back focus:ring-primary/30 w-full appearance-none rounded-xl border-2 px-4 py-3 text-sm outline-none focus:ring-2"
              style={{ color: selectedProgram ? 'var(--fonts)' : 'rgba(40,41,50,0.5)' }}
            >
              <option value="" disabled>
                Elige tu especialidad
              </option>
              {getProgramsForCategory(selectedCategory).map((p) => (
                <option key={p} value={p} className="text-fonts">
                  {p}
                </option>
              ))}
            </select>
            <span className="text-fonts/40 pointer-events-none absolute top-1/2 right-4 -translate-y-1/2">
              &#8964;
            </span>
          </div>
        )}

        {/* Grado de Bachiller */}
        <div className="flex items-center gap-4">
          <span className="text-fonts text-sm">¿Cuentas con grado de Bachiller?*</span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setBachelor('si')}
              className={`rounded-xl px-6 py-2 text-sm font-semibold transition-colors ${
                bachelor === 'si'
                  ? 'bg-primary text-back'
                  : 'text-fonts bg-gray-100 hover:bg-gray-200'
              }`}
            >
              Sí
            </button>
            <button
              type="button"
              onClick={() => setBachelor('no')}
              className={`rounded-xl px-6 py-2 text-sm font-semibold transition-colors ${
                bachelor === 'no'
                  ? 'bg-primary text-back'
                  : 'text-fonts bg-gray-100 hover:bg-gray-200'
              }`}
            >
              No
            </button>
          </div>
        </div>

        {/* Autorización */}
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={authorized}
            onChange={(e) => setAuthorized(e.target.checked)}
            required
            className="accent-primary mt-0.5 h-4 w-4 shrink-0"
          />
          <span className="text-fonts/60 text-xs leading-relaxed">
            Autorizo a la Escuela de Posgrado de la UNSAAC a enviarme información académica y a
            tratar mis datos personales conforme a sus políticas de privacidad.{' '}
            <a href="/politicas-privacidad" className="hover:text-primary underline">
              Ver políticas de privacidad
            </a>
          </span>
        </label>

        {/* Submit */}
        <button
          type="submit"
          className="bg-primary text-back hover:bg-primary/90 mt-1 w-full rounded-xl py-3 text-sm font-bold transition-colors"
        >
          Enviar datos
        </button>
      </form>
    </div>
  );
}
