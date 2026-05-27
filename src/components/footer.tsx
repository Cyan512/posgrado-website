import Image from 'next/image';

const footerLinks = {
  programas: [
    { name: 'Maestrías', href: '/maestrias' },
    { name: 'Doctorados', href: '/doctorados' },
    { name: 'Diplomados', href: '/diplomados' },
    { name: 'Segunda Especialidad', href: '/segunda-especialidad' },
  ],
  institucional: [
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Misión y Visión', href: '/mision-vision' },
    { name: 'Autoridades', href: '/autoridades' },
    { name: 'Reglamentos', href: '/reglamentos' },
  ],
  servicios: [
    { name: 'Admisión', href: '/admision' },
    { name: 'Biblioteca', href: '/biblioteca' },
    { name: 'Investigación', href: '/investigacion' },
    { name: 'Convenios', href: '/convenios' },
  ],
  estudiantes: [
    { name: 'Portal Estudiante', href: '/portal-estudiante' },
    { name: 'Calendario Académico', href: '/calendario' },
    { name: 'Trámites', href: '/tramites' },
    { name: 'Graduados', href: '/graduados' },
  ],
};

const contactInfo = [
  {
    label: 'Dirección',
    text: 'Av. de la Cultura 733, Cusco - Perú',
  },
  {
    label: 'Teléfono',
    text: '+51 84 232398',
  },
  {
    label: 'Email',
    text: 'posgrado@unsaac.edu.pe',
  },
];

const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com', label: 'Facebook' },
  { name: 'Instagram', href: 'https://instagram.com', label: 'Instagram' },
  { name: 'LinkedIn', href: 'https://linkedin.com', label: 'LinkedIn' },
  { name: 'YouTube', href: 'https://youtube.com', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/logo-white.svg"
                alt="Escuela de Posgrado UNSAAC"
                width={220}
                height={55}
                className="h-auto w-52"
              />
            </div>
            <p className="mb-6 text-sm leading-relaxed text-white/80">
              Formando líderes e investigadores de excelencia para el desarrollo regional y
              nacional.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-secondary text-sm font-semibold">{item.label}:</span>
                  <span className="text-sm text-white/80">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Programas */}
          <div>
            <h3 className="mb-4 text-base font-bold">Programas</h3>
            <ul className="space-y-2">
              {footerLinks.programas.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-secondary text-sm text-white/80 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Institucional */}
          <div>
            <h3 className="mb-4 text-base font-bold">Institucional</h3>
            <ul className="space-y-2">
              {footerLinks.institucional.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-secondary text-sm text-white/80 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="mb-4 text-base font-bold">Servicios</h3>
            <ul className="space-y-2">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-secondary text-sm text-white/80 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Estudiantes */}
          <div>
            <h3 className="mb-4 text-base font-bold">Estudiantes</h3>
            <ul className="space-y-2">
              {footerLinks.estudiantes.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-secondary text-sm text-white/80 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 border-t border-white/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h4 className="mb-4 text-center text-sm font-semibold md:text-left">
                Síguenos en redes sociales
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-secondary flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-semibold transition-colors"
                    aria-label={social.label}
                  >
                    {social.name.charAt(0)}
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Logo */}
            <div className="hidden md:block">
              <Image
                src="/logo-white-bottom.svg"
                alt="UNSAAC"
                width={120}
                height={40}
                className="h-auto w-28 opacity-80"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-primary/80 border-t border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col items-center justify-between gap-2 text-center text-xs text-white/70 md:flex-row md:text-left">
            <p>
              © {new Date().getFullYear()} Escuela de Posgrado UNSAAC. Todos los derechos
              reservados.
            </p>
            <div className="flex gap-4">
              <a href="/politica-privacidad" className="hover:text-secondary transition-colors">
                Política de Privacidad
              </a>
              <span>|</span>
              <a href="/terminos-condiciones" className="hover:text-secondary transition-colors">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
