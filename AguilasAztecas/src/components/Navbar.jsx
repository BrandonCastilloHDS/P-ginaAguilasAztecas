import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/',                label: 'Inicio' },
  { to: '/historia',        label: 'Historia' },
  { to: '/mision',          label: 'Misión' },
  { to: '/participaciones', label: 'Participaciones' },
  { to: '/galeria',         label: 'Galería' },
  { to: '/contacto',        label: 'Contacto' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (to) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 border-b-2 border-[#fdc400] ${
        scrolled
          ? 'bg-[#00296b]/96 backdrop-blur-md shadow-2xl shadow-black/40 py-2'
          : 'bg-[#00296b] py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">

        {/* Brand */}
        <Link to="/" className="flex items-center gap-4">
          <img
            src="/img/logos/FAMEX2027.png"
            alt="FAMEX Logo"
            className="h-14 w-auto drop-shadow-md"
          />
          <div className="border-l-2 border-[#fdc400]/40 pl-4">
            <p className="text-[#0093d1] text-[9px] font-bold tracking-[0.35em] uppercase leading-none mb-0.5">
              Fuerza Aérea Mexicana
            </p>
            <h1 className="text-white text-2xl font-black tracking-[0.08em] leading-none">
              ÁGUILAS AZTECAS
            </h1>
            <p className="text-[#fdc400] text-[9px] font-semibold tracking-[0.25em] uppercase leading-none mt-0.5">
              Escuadrilla Acrobática
            </p>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-7">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative text-xs font-bold tracking-[0.18em] uppercase transition-colors duration-200 group ${
                isActive(link.to) ? 'text-[#fdc400]' : 'text-white/85 hover:text-[#fdc400]'
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-px bg-[#fdc400] transition-all duration-300 ${
                  isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Abrir menú"
          className="lg:hidden flex flex-col justify-center gap-1.5 p-2 cursor-pointer"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-[#003f87] border-t border-[#fdc400]/20">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`block px-6 py-4 text-sm font-bold uppercase tracking-widest border-b border-white/5 transition-colors ${
                isActive(link.to)
                  ? 'text-[#fdc400] bg-[#00519e]'
                  : 'text-white hover:bg-[#00519e] hover:text-[#fdc400]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
