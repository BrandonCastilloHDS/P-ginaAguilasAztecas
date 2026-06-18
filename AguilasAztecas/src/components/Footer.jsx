const quickLinks = [
  { href: '#inicio',         label: 'Inicio' },
  { href: '#historia',       label: 'Historia' },
  { href: '#mision',         label: 'Misión y Visión' },
  { href: '#participaciones',label: 'Participaciones' },
  { href: '#galeria',        label: 'Galería' },
];

function Footer() {
  return (
    <footer id="contacto" className="bg-[#00296b] border-t-2 border-[#fdc400]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-4 mb-5">
              <img
                src="/img/logos/FAMEX2027.png"
                alt="FAMEX Logo"
                className="h-16 w-auto"
              />
              <div className="border-l-2 border-[#fdc400]/30 pl-4">
                <p className="text-[#0093d1] text-[9px] font-bold tracking-[0.3em] uppercase">
                  Fuerza Aérea Mexicana
                </p>
                <p className="text-white text-lg font-black tracking-wider">
                  ÁGUILAS AZTECAS
                </p>
              </div>
            </div>
            <p className="text-white/50 text-xs leading-relaxed">
              Escuadrilla Acrobática de la Fuerza Aérea Mexicana. Excelencia, precisión y orgullo nacional en cada maniobra.
            </p>
            <div className="mt-5 w-12 h-0.5 bg-[#fdc400]" />
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[#fdc400] text-xs font-black uppercase tracking-[0.3em] mb-5">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/55 text-sm hover:text-[#fdc400] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#0093d1] flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-[#fdc400] text-xs font-black uppercase tracking-[0.3em] mb-5">
              Información
            </h4>
            <div className="space-y-4 text-white/55 text-sm">
              <div>
                <p className="text-[#0093d1] text-[9px] font-bold tracking-widest uppercase mb-1">Unidad</p>
                <p>IV R.A.M. · 14.a Z.A.M.</p>
                <p>2.° Gpo. Ar. · Edn. Ar. 402</p>
              </div>
              <div>
                <p className="text-[#0093d1] text-[9px] font-bold tracking-widest uppercase mb-1">Plaza</p>
                <p>Ciudad de Ixtepec, Oaxaca</p>
                <p>México</p>
              </div>
              <div>
                <p className="text-[#0093d1] text-[9px] font-bold tracking-widest uppercase mb-1">Aeronave</p>
                <p>Texan II T-6C+</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Águilas Aztecas — Fuerza Aérea Mexicana. Todos los derechos reservados.
          </p>
          <p className="text-white/25 text-[10px] uppercase tracking-widest">
            Secretaría de la Defensa Nacional · SEDENA
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
