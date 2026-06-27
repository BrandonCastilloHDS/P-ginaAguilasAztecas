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
          
          <div className="w-10 h-px bg-[#43A047]/70" />
          
          <span className="text-[#43A047] text-[12px] font-bold tracking-[0.45em] uppercase">
            Fuerza Aérea Mexicana &nbsp;·&nbsp; Escuadrón Aéreo 402
          </span>
          <div className="w-10 h-px bg-[#43A047]/70" />
        </div>

        {/* Main title */}
        <div className="mb-3">
          <h2 className="text-7xl md:text-9xl font-black text-white tracking-tight leading-none">
            ÁGUILAS
          </h2>
          <h2 className="text-7xl md:text-9xl font-black text-[#8a0700] tracking-tight leading-none -mt-2">
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
            className="bg-[#8a0700] text-[#E8F5E9] px-11 py-4 text-xs font-black uppercase tracking-[0.22em] hover:bg-[#2e7d32] transition-colors duration-200 shadow-lg"
          >
            Nuestra Historia
          </Link>
          <Link
            to="/galeria"
            className="border-2 border-white/60 text-white px-11 py-4 text-xs font-black uppercase tracking-[0.22em] hover:border-[#2e7d32] hover:text-[#2e7d32] transition-colors duration-200"
          >
            Ver Galería
          </Link>
        
        </div>
      

    </div>
    </section> 
    
  );

  
}

export default Hero;
