import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import CollectionsIcon from '@mui/icons-material/Collections';


const links = [
  { to: '/', label: 'Inicio', icon: <HomeIcon sx={{ fontSize: 'medium' }} /> },
  { to: '/historia', label: 'Sobre Nosotros', icon: <MenuBookIcon sx={{ fontSize: 'medium' }} /> },
  { to: '/participaciones', label: 'Participaciones', icon: <GroupsIcon sx={{ fontSize: 'medium' }} /> },
  { to: '/galeria', label: 'Galería', icon: <CollectionsIcon sx={{ fontSize: 'medium' }} /> },
];

const languages = [
  { code: 'es', abbrev: 'ES', label: 'Español', flagClass: 'flag-mx' },
  { code: 'en', abbrev: 'EN', label: 'English', flagClass: 'flag-us' },
  { code: 'it', abbrev: 'IT', label: 'Italiano', flagClass: 'flag-it' },
  { code: 'zh-CN', abbrev: 'CN', label: 'Chino', flagClass: 'flag-cn' },
  { code: 'fr', abbrev: 'FR', label: 'Francés', flagClass: 'flag-fr' },
  { code: 'pt', abbrev: 'PT', label: 'Portugués', flagClass: 'flag-pt' },
  { code: 'de', abbrev: 'DE', label: 'Alemán', flagClass: 'flag-de' },
];


function Navbar({ lightTheme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [translatorReady, setTranslatorReady] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (window.google?.translate?.TranslateElement) {
      setTranslatorReady(true);
      return;
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'es',
          includedLanguages: languages.map(language => language.code).join(','),
          autoDisplay: false,
        },
        'google_translate_element',
      );
      setTranslatorReady(true);
    };

    if (!document.querySelector('script[src*="translate_a/element.js"]')) {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const isActive = (to) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  const translatePage = (languageCode) => {
    const select = document.querySelector('.goog-te-combo');

    if (!select || !translatorReady) {
      setTimeout(() => translatePage(languageCode), 500);
      return;
    }

    select.value = languageCode;
    select.dispatchEvent(new Event('change'));
    document.cookie = `googtrans=/es/${languageCode}; path=/`;
    document.cookie = `googtrans=/es/${languageCode}; path=/; domain=${window.location.hostname}`;
    setCurrentLanguage(languages.find(language => language.code === languageCode) || languages[0]);
    setLanguageOpen(false);
    setMenuOpen(false);
  };

  const selectLanguage = (event, languageCode) => {
    event.preventDefault();
    event.stopPropagation();
    translatePage(languageCode);
  };

  const languageMenu = (
    <div className="notranslate absolute right-0 top-full mt-2 w-52 overflow-hidden rounded-lg border border-[#d4af37]/35 bg-[#081627]/98 shadow-2xl shadow-black/35 backdrop-blur-md" translate="no">
      {languages.map(language => (
        <button
          key={language.code}
          type="button"
          onPointerDown={(event) => selectLanguage(event, language.code)}
          onClick={(event) => selectLanguage(event, language.code)}
          translate="no"
          className="flex w-full items-center gap-2.5 px-3 py-2 text-left text-white transition-colors hover:bg-[#d4af37]/15 hover:text-[#d4af37]"
        >
          <span className={`language-flag language-flag-menu ${language.flagClass}`} />
          <span className="notranslate text-base font-black tracking-wide" translate="no">{language.abbrev}</span>
          <span className="notranslate text-xs font-bold opacity-80" translate="no">{language.label}</span>
        </button>
      ))}
    </div>
  );

  return (
    <nav
      className={`site-navbar fixed w-full z-50 transition-all duration-500 border-b-2 border-[#b88a2a] ${
        scrolled
          ? 'bg-[#0b1728]/96 backdrop-blur-md shadow-2xl shadow-black/40 py-2'
          : 'bg-[#0b1728] py-3'
      }`}
    >
      <div id="google_translate_element" className="google-translate-element" />
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

          <div className="relative">
            <button
              type="button"
              onClick={() => setLanguageOpen(open => !open)}
              aria-label="Traducir página"
              translate="no"
              className="flex h-9 items-center gap-1.5 rounded-full border border-[#d4af37]/45 px-2 pr-3 text-white transition-colors hover:bg-[#d4af37]/15 hover:text-[#d4af37]"
            >
              <span className={`language-flag language-flag-sm ${currentLanguage.flagClass}`} />
              <span className="notranslate text-sm font-black tracking-wide" translate="no">{currentLanguage.abbrev}</span>
            </button>
            {languageOpen && languageMenu}
          </div>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={lightTheme ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro'}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37]/45 text-white transition-colors hover:bg-[#d4af37]/15 hover:text-[#d4af37]"
          >
            {lightTheme ? <Moon size={19} /> : <Sun size={19} />}
          </button>
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
  className={`lg:hidden transition-all duration-300 ${
    menuOpen ? 'max-h-[calc(100dvh-82px)] overflow-y-auto overscroll-contain' : 'max-h-0 overflow-hidden'
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

      <div className="relative mt-2 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => setLanguageOpen(open => !open)}
          translate="no"
          className="flex items-center justify-center gap-2 rounded-xl border border-[#d4af37]/35 px-4 py-3 font-black uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#10233d]"
          aria-label="Traducir página"
        >
          <span className={`language-flag language-flag-sm ${currentLanguage.flagClass}`} />
          <span className="notranslate text-sm font-black tracking-wide" translate="no">{currentLanguage.abbrev}</span>
        </button>
        <button
          type="button"
          onClick={onToggleTheme}
          className="flex items-center justify-center gap-2 rounded-xl border border-[#d4af37]/35 px-4 py-3 font-black uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#10233d]"
          aria-label={lightTheme ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro'}
        >
          {lightTheme ? <Moon size={19} /> : <Sun size={19} />}
        </button>
        {languageOpen && (
          <div className="notranslate col-span-2 max-h-56 overflow-y-auto rounded-xl border border-[#d4af37]/30 bg-[#0b1728] shadow-xl" translate="no">
            {languages.map(language => (
              <button
                key={language.code}
                type="button"
                onPointerDown={(event) => selectLanguage(event, language.code)}
                onClick={(event) => selectLanguage(event, language.code)}
                translate="no"
                className="flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-white transition-colors hover:bg-[#d4af37]/15 hover:text-[#d4af37]"
              >
                <span className={`language-flag language-flag-menu ${language.flagClass}`} />
                <span className="notranslate text-base font-black tracking-wide" translate="no">{language.abbrev}</span>
                <span className="notranslate text-xs font-bold opacity-80" translate="no">{language.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>

    </div>

  </div>
</div>
    </nav>
  );
}

export default Navbar;
