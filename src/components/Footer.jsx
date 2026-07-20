import { Link } from 'react-router-dom';

const quickLinks = [
  { to: '/',                label: 'Inicio' },
  { to: '/historia',        label: 'Historia' },
  { to: '/mision',          label: 'Misión' },
  { to: '/participaciones', label: 'Participaciones' },
  { to: '/galeria',         label: 'Galería' },
  { to: '/contacto',        label: 'Contacto' },
];

function Footer() {
  return (
    <footer className="bg-[#0b1728] border-t border-[#b88a2a]/60">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <img src="/img/logos/FAMEX2027.png" alt="FAMEX Logo" className="h-10 w-auto" />
            <div className="border-l border-[#b88a2a]/40 pl-3">
              <p className="text-[#d4af37] text-[8px] font-bold tracking-[0.3em] uppercase leading-none mb-0.5">
                Fuerza Aérea Mexicana
              </p>
              <p className="text-white text-sm font-black tracking-wider leading-none">ÁGUILAS AZTECAS</p>
              <p className="text-[#d4af37] text-[7px] tracking-widest uppercase leading-none mt-0.5">
                IV R.A.M. · Edn. Ar. 402
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            {quickLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="text-white/45 text-xs hover:text-[#d4af37] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Legal */}
          <p className="text-white/25 text-[10px] uppercase tracking-widest whitespace-nowrap">
            SEDENA · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
