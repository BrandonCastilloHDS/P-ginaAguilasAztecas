import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background video with overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/img/aviones/avion.jpeg"
          className="w-full h-full object-cover object-center"
        >
          <source src="/img/aviones/01 Texans (1).mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#00296b]/80 via-[#00296b]/55 to-[#00296b]" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#0093d1 1px, transparent 1px), linear-gradient(90deg, #0093d1 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Decorative diagonal accent lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -left-10 w-64 h-px bg-gradient-to-r from-transparent via-[#fdc400]/25 to-transparent rotate-[14deg]" />
        <div className="absolute top-[38%] -left-6  w-44 h-px bg-gradient-to-r from-transparent via-[#0093d1]/20 to-transparent rotate-[14deg]" />
        <div className="absolute bottom-1/3 -right-10 w-64 h-px bg-gradient-to-l from-transparent via-[#fdc400]/25 to-transparent -rotate-[14deg]" />
        <div className="absolute bottom-[38%] -right-6  w-44 h-px bg-gradient-to-l from-transparent via-[#0093d1]/20 to-transparent -rotate-[14deg]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">

        {/* Top badge */}
        <div className="inline-flex items-center gap-3 mb-7">
          <div className="w-10 h-px bg-[#0093d1]/70" />
          <span className="text-[#0093d1] text-[10px] font-bold tracking-[0.45em] uppercase">
            Fuerza Aérea Mexicana &nbsp;·&nbsp; Escuadrón Aéreo 402
          </span>
          <div className="w-10 h-px bg-[#0093d1]/70" />
        </div>

        {/* Main title */}
        <div className="mb-3">
          <h2 className="text-7xl md:text-9xl font-black text-white tracking-tight leading-none">
            ÁGUILAS
          </h2>
          <h2 className="text-7xl md:text-9xl font-black text-[#fdc400] tracking-tight leading-none -mt-2">
            AZTECAS
          </h2>
        </div>

        {/* Tagline */}
        <div className="flex items-center justify-center gap-5 my-7">
          <div className="w-14 h-px bg-[#fdc400]/50" />
          <p className="text-white/65 text-xs md:text-sm font-semibold tracking-[0.28em] uppercase">
            Excelencia &nbsp;·&nbsp; Precisión &nbsp;·&nbsp; Orgullo Nacional
          </p>
          <div className="w-14 h-px bg-[#fdc400]/50" />
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link
            to="/historia"
            className="bg-[#fdc400] text-[#00296b] px-11 py-4 text-xs font-black uppercase tracking-[0.22em] hover:bg-[#ffe84f] transition-colors duration-200 shadow-lg"
          >
            Nuestra Historia
          </Link>
          <Link
            to="/galeria"
            className="border-2 border-white/60 text-white px-11 py-4 text-xs font-black uppercase tracking-[0.22em] hover:border-[#fdc400] hover:text-[#fdc400] transition-colors duration-200"
          >
            Ver Galería
          </Link>
        </div>
      </div>

      {/* Bottom diagonal divider → gold stats bar */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 72" preserveAspectRatio="none" className="w-full h-14 md:h-[72px]">
          <polygon points="0,72 0,52 1440,8 1440,72" style={{ fill: '#fdc400' }} />
        </svg>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
