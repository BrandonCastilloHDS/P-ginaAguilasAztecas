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
  {to: '/historia', label: 'Historia', icon: <MenuBookIcon sx={{ fontSize: 'medium' }} /> },
  { to: '/mision', label: 'Misión', icon: <AdsClickIcon sx={{ fontSize: 'medium' }} /> },
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
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">

        {/* Brand */}
        <Link to="/" className="flex items-center gap-4">
          <img
            src="/img/logos/FAMEX2027.png"
            alt="FAMEX Logo"
            className="h-14 w-auto drop-shadow-md"
          />
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
        <div className="hidden lg:flex items-center gap-7">
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
        <div className="bg-[#0b1728] border-t border-[#d4af37]/20">
          {links.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className={`relative flex items-center gap-3 text-xs font-bold tracking-[0.18em] uppercase transition-colors duration-200 group ${
              isActive(link.to) ? 'text-[#d4af37]' : 'text-white/85 hover:text-[#d4af37]'
            }`}
          >
            
            <div className="flex items-center gap-1">
              {link.icon}
              <span>{link.label}</span>
            </div>

            
          </Link>
        ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
