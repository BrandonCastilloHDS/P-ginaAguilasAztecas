import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HomeIcon from '@mui/icons-material/Home';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import GroupsIcon from '@mui/icons-material/Groups';
import CollectionsIcon from '@mui/icons-material/Collections';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';


const links = [
  { to: '/', label: 'Inicio', icon: <HomeIcon sx={{ fontSize: 'medium' }} /> },
  { to: '/historia', label: 'Sobre Nosotros', icon: <MenuBookIcon sx={{ fontSize: 'medium' }} /> },
  { to: '/participaciones', label: 'Participaciones', icon: <GroupsIcon sx={{ fontSize: 'medium' }} /> },
  { to: '/galeria', label: 'Galería', icon: <CollectionsIcon sx={{ fontSize: 'medium' }} /> },
  { to: '/contacto', label: 'Contacto', icon: <AlternateEmailIcon sx={{ fontSize: 'medium' }} /> },
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
      className={`fixed w-full z-50 transition-all duration-500 border-b-2 border-[#b88a2a] ${
        scrolled
          ? 'bg-[#0b1728]/96 backdrop-blur-md shadow-2xl shadow-black/40 py-2'
          : 'bg-[#0b1728] py-3'
      }`}
    >
      <div className="flex items-center ml-8 mr-8 gap-4 flex-1">

        {/* Brand */}
        <a
          href="https://www.f-airmexico.com.mx/"
        >
          <img
            src="/img/logos/FAMEX2027.png"
            alt="FAMEX Logo"
            className="h-14 w-auto drop-shadow-md hover:scale-105 transition-transform"
          />
        </a>

        <Link to="/" >
          
          <div className="border-l-2 border-[#b88a2a]/55 pl-4">
            <p className="text-[#d4af37] text-[9px] font-bold tracking-[0.35em] uppercase leading-none mb-0.5">
              Fuerza Aérea Mexicana
            </p>
            <h1 className="text-white text-2xl font-black tracking-[0.08em] leading-none">
              ÁGUILAS AZTECAS
            </h1>
            <p className="text-[#d4af37] text-[9px] font-semibold tracking-[0.25em] uppercase leading-none mt-0.5">
              Escuadrilla Acrobática
            </p>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-7 ml-auto">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative text-xs font-bold tracking-[0.18em] uppercase transition-colors duration-200 group ${
                isActive(link.to) ? 'text-[#d4af37]' : 'text-white/85 hover:text-[#d4af37]'
              }`}
            >
              <div className="flex items-center gap-2">
                {link.icon}
                <span>{link.label}</span>
              </div>
              
              
            </Link>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Abrir menú"
          className="lg:hidden ml-auto flex flex-col justify-center gap-1.5 p-2 cursor-pointer"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
<div
  className={`lg:hidden overflow-hidden transition-all duration-500 ${
    menuOpen ? 'max-h-[600px]' : 'max-h-0'
  }`}
>
  <div className="bg-[#081627] border-t border-[#d4af37]/20 px-4 py-5">

    <div className="flex flex-col gap-3">

      {links.map(link => (
        <Link
          key={link.to}
          to={link.to}
          onClick={() => setMenuOpen(false)}
          className={`flex items-center gap-5 rounded-2xl px-5 py-5 transition-all duration-300
            ${
              isActive(link.to)
                ? 'bg-[#12233b] text-[#d4af37] shadow-lg'
                : 'text-white hover:bg-[#10233d]'
            }`}
        >
          <span
            className={`transition-colors ${
              isActive(link.to)
                ? 'text-[#d4af37]'
                : 'text-gray-200'
            }`}
          >
            {link.icon}
          </span>

          <span className="font-black uppercase tracking-[0.25em] text-base">
            {link.label}
          </span>
        </Link>
      ))}

    </div>

  </div>
</div>
    </nav>
  );
}

export default Navbar;
