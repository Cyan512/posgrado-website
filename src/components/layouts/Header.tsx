"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const panel1Links = [
  { num: "01", label: "Inicio", href: "/" },
  { num: "02", label: "Nosotros", href: "/nosotros" },
  { num: "03", label: "Programas", href: "/programas" },
]

const panel2Links = [
  { num: "04", label: "Admisión", href: "/admision" },
  { num: "05", label: "Estudiantes", href: "/estudiantes" },
  { num: "06", label: "Investigación", href: "/investigacion" },
  { num: "07", label: "Contacto", href: "/contacto" },
]

function NavLink({ num, label, href, onClick }: { num: string; label: string; href: string; onClick: () => void }) {
  return (
    <li className="border-b border-white/[0.08]">
      <Link
        href={href}
        onClick={onClick}
        className="group flex items-center justify-between py-4 hover:pl-2 transition-all duration-300"
      >
        <div className="flex items-center gap-4">
          <span className="text-xs font-mono tracking-widest text-white/30 min-w-[24px]">{num}</span>
          <span className="font-serif text-2xl md:text-3xl font-light text-white leading-none group-hover:text-white/50 transition-colors duration-200">
            {label}
          </span>
        </div>
        <ArrowRight className="w-4 h-4 text-white/20 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
      </Link>
    </li>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      {/* =========================================================================
          1. BARRA SUPERIOR FIJA (NAVBAR)
         ========================================================================= */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-8 h-20 bg-secondary dark:bg-card border-b border-border/40 backdrop-blur-md">
        {/* Branding Izquierdo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 border border-primary flex items-center justify-center text-[11px] font-bold tracking-widest text-primary bg-white dark:bg-transparent rounded-sm shadow-sm transition-colors group-hover:bg-primary group-hover:text-white">
            EP
          </div>
          <div>
            <p className="text-xs font-serif font-bold text-primary tracking-wide leading-tight">Escuela de Posgrado</p>
            <p className="text-xs font-medium text-muted-foreground/80 tracking-wider uppercase mt-0.5">UNSAAC · Cusco, Perú</p>
          </div>
        </Link>

        {/* Botón Hamburguesa Interactivo */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="flex items-center gap-3 focus:outline-none py-2 group"
        >
          <span className={`text-xs font-bold tracking-widest uppercase text-primary transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`}>
            Menú
          </span>
          <div className="relative w-6 h-[12px] flex flex-col justify-between">
            <span className={`h-px bg-primary transition-all duration-300 ease-out ${open ? "w-6 translate-y-[5px] rotate-45" : "w-6"}`} />
            <span className={`h-px bg-primary transition-all duration-300 ease-out ${open ? "w-6 -translate-y-[6px] -rotate-45" : "w-4 self-end"}`} />
          </div>
        </button>
      </nav>

      {/* =========================================================================
          2. OVERLAY EN PANTALLA COMPLETA POR PANELES ASIMÉTRICOS
         ========================================================================= */}
      <div className={`fixed inset-0 z-40 grid grid-cols-1 md:grid-cols-3 transition-all duration-500 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        
        {/* PANEL 1: Identidad Corporativa y Enlaces Primarios */}
        <div className={`bg-primary flex flex-col justify-end px-6 md:px-10 pb-10 pt-24 border-r border-white/5 transition-transform duration-[550ms] ease-in-out ${open ? "translate-y-0" : "-translate-y-full"}`}>
          <div className="mb-8 space-y-2">
            <p className="text-[9px] tracking-widest uppercase text-white/40 font-medium">
              Universidad Nacional de San Antonio Abad del Cusco
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light italic text-white leading-tight tracking-wide">
              Escuela de<br />
              <span className="not-italic font-bold text-accent">Posgrado</span>
            </h2>
          </div>

          <div className="h-px bg-white/10 mb-2" />

          <ul className="space-y-1">
            {panel1Links.map((link) => (
              <NavLink key={link.href} {...link} onClick={close} />
            ))}
            
            {/* Solo en móviles: se acoplan aquí los links secundarios */}
            {panel2Links.map((link) => (
              <li key={link.href} className="border-b border-white/[0.08] md:hidden">
                <Link
                  href={link.href}
                  onClick={close}
                  className="group flex items-center justify-between py-4 hover:pl-2 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-mono tracking-widest text-white/30 min-w-[24px]">{link.num}</span>
                    <span className="font-serif text-2xl font-light text-white leading-none group-hover:text-white/50 transition-colors">
                      {link.label}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/20 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA de Admisión exclusivo en Mobile */}
          <Link
            href="/admision"
            onClick={close}
            className="md:hidden flex items-center justify-between w-full bg-accent hover:opacity-90 text-accent-foreground px-5 py-4 text-xs font-bold tracking-widest uppercase transition-opacity mt-6 rounded-xl shadow-md"
          >
            <span>Proceso de Admisión</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <p className="hidden md:block text-[9px] tracking-[0.25em] uppercase text-white/25 mt-8 font-mono">
            UNSAAC · 2026
          </p>
        </div>

        {/* PANEL 2: Enlaces Secundarios (Solo Desktop) */}
        <div className={`hidden md:flex bg-[#230511] flex-col justify-end px-10 pb-10 pt-24 border-r border-white/5 transition-transform duration-[550ms] ease-in-out delay-[50ms] ${open ? "translate-y-0" : "-translate-y-full"}`}>
          <div className="mb-8 space-y-1">
            <p className="text-[9px] tracking-widest uppercase text-white/30 font-medium">Formación Continua</p>
            <h2 className="font-serif text-2xl font-light italic text-white tracking-wide">
              Programas <span className="not-italic font-semibold text-accent">&amp;</span> Admisión
            </h2>
          </div>
          <div className="h-px bg-white/10 mb-2" />
          <ul className="space-y-1">
            {panel2Links.map((link) => (
              <NavLink key={link.href} {...link} onClick={close} />
            ))}
          </ul>
        </div>

        {/* PANEL 3: Datos de Contacto y CTA Principal (Solo Desktop) */}
        <div className={`hidden md:flex bg-[#140209] flex-col justify-end px-10 pb-10 pt-24 transition-transform duration-[550ms] ease-in-out delay-[100ms] ${open ? "translate-y-0" : "-translate-y-full"}`}>
          <div className="mb-6 space-y-5">
            <div>
              <p className="text-xs tracking-widest uppercase text-white/30 mb-1 font-bold">Ventanilla Digital</p>
              <p className="text-xs text-white/70 font-light tracking-wide">posgrado@unsaac.edu.pe</p>
            </div>
            <div className="h-px bg-white/[0.06]" />
            <div>
              <p className="text-xs tracking-widest uppercase text-white/30 mb-1 font-bold">Central Telefónica</p>
              <p className="text-xs text-white/70 font-light tracking-wide">+51 84 227841</p>
            </div>
            <div className="h-px bg-white/[0.06]" />
            <div>
              <p className="text-xs tracking-widest uppercase text-white/30 mb-1 font-bold">Sede Central</p>
              <p className="text-xs text-white/60 font-light leading-relaxed tracking-wide">
                Av. de la Cultura s/n<br />Cusco, Perú
              </p>
            </div>
          </div>
          <div className="h-px bg-white/10" />
          
          <Link
            href="/admision"
            onClick={close}
            className="flex items-center justify-between w-full bg-accent hover:bg-accent/90 text-accent-foreground px-5 py-4 text-xs font-bold tracking-widest uppercase transition-colors mt-6 rounded-xl shadow-md"
          >
            <span>Proceso de Admisión</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>

      </div>
    </>
  )
}