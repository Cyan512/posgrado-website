'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Search } from 'lucide-react';

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Programas', href: '/programas' },
  { name: 'Admisión', href: '/admision' },
  { name: 'Estudiantes', href: '/estudiantes' },
  { name: 'Investigación', href: '/investigacion' },
  { name: 'Contacto', href: '/contacto' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    // Sync state with current scroll position on mount
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
          isScrolled ? 'bg-primary shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 md:px-8 md:py-6">
          {/* Hamburger Menu Button - Left */}
          <button
            onClick={toggleMenu}
            className="hover:text-secondary text-white transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="h-8 w-8" />
          </button>

          {/* Logo - Center (Absolutely positioned) */}
          <div className="absolute left-1/2 -translate-x-1/2 transform">
            <a href="/" className="flex items-center">
              <Image
                src="/logo-postgrado.svg"
                alt="Escuela de Posgrado UNSAAC"
                width={200}
                height={50}
                className="h-auto w-56 md:w-64"
                priority
              />
            </a>
          </div>

          {/* Search Icon - Right */}
          <button className="hover:text-secondary text-white transition-colors" aria-label="Search">
            <Search className="h-7 w-7" />
          </button>
        </div>
      </header>

      {/* Full Screen Mobile Menu */}
      <div
        className={`bg-primary fixed inset-0 z-50 transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Menu Header */}
          <div className="flex items-center justify-between border-b border-white/20 px-6 py-3 md:px-8 md:py-4">
            <Image
              src="/logo.svg"
              alt="Escuela de Posgrado UNSAAC"
              width={180}
              height={45}
              className="h-auto w-40"
            />
            <button
              onClick={toggleMenu}
              className="hover:text-secondary text-white transition-colors"
              aria-label="Close menu"
            >
              <X className="h-7 w-7" />
            </button>
          </div>

          {/* Menu Links */}
          <nav className="flex flex-1 flex-col items-center justify-center gap-8 px-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={toggleMenu}
                className="hover:text-secondary text-2xl font-bold text-white transition-colors md:text-3xl"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Menu Footer */}
          <div className="border-t border-white/20 px-4 py-6 text-center">
            <p className="text-sm text-white/70">© 2026 Escuela de Posgrado UNSAAC</p>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && <div className="fixed inset-0 z-40 bg-black/50" onClick={toggleMenu} />}
    </>
  );
}
