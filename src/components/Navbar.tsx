'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SearchBar } from '@/features/search/SearchBar';

const panel1Links = [
  { num: '01', label: 'Inicio', href: '/' },
  { num: '02', label: 'Nosotros', href: '/nosotros' },
  { num: '03', label: 'Programas', href: '/programas' },
];

const panel2Links = [
  { num: '04', label: 'Admisión', href: '/admision' },
  { num: '05', label: 'Estudiantes', href: '/estudiantes' },
  { num: '06', label: 'Investigación', href: '/investigacion' },
  { num: '07', label: 'Contacto', href: '/contacto' },
];

function NavLink({ num, label, href, onClick }: { num: string; label: string; href: string; onClick: () => void }) {
  return (
    <li className="border-b border-white/[0.08]">
      <Link
        href={href}
        onClick={onClick}
        className="group flex items-center justify-between py-[13px] hover:pl-1.5 transition-all duration-[250ms]"
      >
        <div className="flex items-center gap-3">
          <span className="text-[9px] tracking-[1.5px] text-white/25 min-w-[20px]">{num}</span>
          <span className="font-serif text-[2 8px] font-light text-white leading-none group-hover:text-white/40 transition-colors duration-200">
            {label}
          </span>
        </div>
        <span className="text-sm text-white/20 opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
          →
        </span>
      </Link>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {/* ── Barra superior ── */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-8 h-16 bg-[#f0ede8] border-b border-black/[0.08]">
               <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          className="flex items-center gap-2.5"
        >
          <div className="relative w-[22px] h-[10px]">
            <span className={`absolute top-0 left-0 h-px bg-gray-800 transition-all duration-[400ms] ease-[cubic-bezier(0.77,0,0.18,1)] ${open ? 'w-5 translate-y-[5px] rotate-45' : 'w-[22px]'}`} />
            <span className={`absolute bottom-0 left-0 h-px bg-gray-800 transition-all duration-[400ms] ease-[cubic-bezier(0.77,0,0.18,1)] ${open ? 'w-5 -rotate-45' : 'w-[14px]'}`} />
          </div>
        </button>
         <Link href="/" className="flex items-center">
          <Image
            src="/images/logos/logo-postgrado.svg"
            alt="Escuela de Posgrado UNSAAC"
            width={160}
            height={83}
            className="h-12 w-auto"
            priority
            unoptimized
          />
        </Link>
        <SearchBar/>
      </nav>

      {/* ── Overlay pantalla completa ── */}
      <div className={`fixed inset-0 z-40 grid grid-cols-1 md:grid-cols-3 transition-opacity duration-500 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>

        {/* Panel 1 — Vino */}
        <div className={`bg-[#8B1A3A] flex flex-col justify-end px-6 md:px-8 pb-8 pt-20 transition-transform duration-[550ms] ease-[cubic-bezier(0.77,0,0.18,1)] ${open ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="mb-8">
            <p className="text-[9px] tracking-[2.5px] uppercase text-white/30 mb-2">
              Universidad Nacional de San Antonio Abad del Cusco
            </p>
            <h2 className="font-serif text-[38px] md:text-[42px] font-light italic text-white leading-[1.1] tracking-tight">
              Escuela de<br />
              <span className="not-italic font-normal">Posgrado</span>
            </h2>
          </div>

          <div className="h-px bg-white/10" />

          <ul>
            {panel1Links.map((link) => (
              <NavLink key={link.href} {...link} onClick={close} />
            ))}
            {/* Solo en móvil: los links restantes */}
            {panel2Links.map((link) => (
              <li key={link.href} className="border-b border-white/[0.08] md:hidden">
                <Link
                  href={link.href}
                  onClick={close}
                  className="group flex items-center justify-between py-[13px] hover:pl-1.5 transition-all duration-[250ms]"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] tracking-[1.5px] text-white/25 min-w-[20px]">{link.num}</span>
                    <span className="font-serif text-[28px] font-light text-white leading-none group-hover:text-white/40 transition-colors">
                      {link.label}
                    </span>
                  </div>
                  <span className="text-sm text-white/20 opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">→</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA solo en móvil */}
          <Link
            href="/admision"
            onClick={close}
            className="md:hidden flex items-center justify-between w-full bg-white/10 hover:bg-white/20 text-white px-4 py-3.5 text-[11px] font-medium tracking-[1.5px] uppercase transition-colors mt-4"
          >
            <span>Proceso de Admisión</span>
            <span>→</span>
          </Link>

          <p className="hidden md:block text-[9px] tracking-[3px] uppercase text-white/15 mt-6">
            UNSAAC · 2026
          </p>
        </div>

        {/* Panel 2 — Vino oscuro (solo desktop) */}
        <div className={`hidden md:flex bg-[#2a0d17] flex-col justify-end px-8 pb-8 pt-20 transition-transform duration-[550ms] ease-[cubic-bezier(0.77,0,0.18,1)] delay-[60ms] ${open ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="mb-8">
            <p className="text-[9px] tracking-[2.5px] uppercase text-white/30 mb-2">Formación académica</p>
            <h2 className="font-serif text-[30px] font-light italic text-white leading-[1.1] tracking-tight">
              Programas<br />
              <span className="not-italic font-normal">&amp; Admisión</span>
            </h2>
          </div>
          <div className="h-px bg-white/10" />
          <ul>
            {panel2Links.map((link) => (
              <NavLink key={link.href} {...link} onClick={close} />
            ))}
          </ul>
        </div>

        {/* Panel 3 — Negro (solo desktop) */}
        <div className={`hidden md:flex bg-[#1a0a0f] flex-col justify-end px-8 pb-8 pt-20 transition-transform duration-[550ms] ease-[cubic-bezier(0.77,0,0.18,1)] delay-[120ms] ${open ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="mb-6 space-y-4">
            <div>
              <p className="text-[9px] tracking-[2px] uppercase text-white/25 mb-1">Correo</p>
              <p className="text-[12px] text-white/50 font-light">posgrado@unsaac.edu.pe</p>
            </div>
            <div className="h-px bg-white/[0.08]" />
            <div>
              <p className="text-[9px] tracking-[2px] uppercase text-white/25 mb-1">Teléfono</p>
              <p className="text-[12px] text-white/50 font-light">+51 84 227841</p>
            </div>
            <div className="h-px bg-white/[0.08]" />
            <div>
              <p className="text-[9px] tracking-[2px] uppercase text-white/25 mb-1">Dirección</p>
              <p className="text-[12px] text-white/50 font-light leading-relaxed">
                Av. de la Cultura s/n<br />Cusco, Perú
              </p>
            </div>
          </div>
          <div className="h-px bg-white/10" />
          <Link
            href="/admision"
            onClick={close}
            className="flex items-center justify-between w-full bg-[#8B1A3A] hover:bg-[#6f1430] text-white px-4 py-3.5 text-[11px] font-medium tracking-[1.5px] uppercase transition-colors mt-4"
          >
            <span>Proceso de Admisión</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </>
  );
}