import { Link } from 'react-router-dom';
import "../styles.css";


function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f3f0e8]">


    
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
        
        
        <div className="absolute inset-0 bg-gradient-to-b from-blue/15 via-blue/45 to-[#d8d0bf]/10" />
        
      </div>
      
      

      

      {/* Decorative diagonal accent lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-38 -left-34 h-[52rem] w-22 rotate-[34deg] bg-[#125e58]/55 border-r border-[#c8a24a]/45" />
        <div className="absolute -top-15 -left-24 h-[52rem] w-12 rotate-[34deg] bg-[#ffffff]/100 border-r border-[#c8a24a]/45" />
        <div className="absolute -top-13 -left-12 h-[52rem] w-12 rotate-[34deg] bg-[#c0203c]/55 border-r border-[#c8a24a]/45" />
        <div className="absolute -top-20 left-8 h-[48rem] w-3 rotate-[34deg] bg-[#d4af37]/70" />
        
      <div className="absolute bottom-0 right-0 scale-x-[-1] scale-y-[-1]">
    <div className="absolute -top-58 -left-34 h-[52rem] w-22 rotate-[34deg] bg-[#c0203c]/85 border-r border-[#c8a24a]/45" />
    <div className="absolute -top-24 -left-32 h-[52rem] w-13 rotate-[34deg] bg-[#ffffff]/85 border-r border-[#c8a24a]/45" />
    <div className="absolute -top-19 -left-6 h-[42rem] w-14 rotate-[34deg] bg-[#125e58]/85 border-r border-[#c8a24a]/45" />
    <div className="absolute -top-18 left-1 h-[48rem] w-3 rotate-[34deg] bg-[#d4af37]/70" />
     </div>
    </div>
    
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24">

        {/* Top badge */}
        <div className="inline-flex flex-wrap items-center justify-center gap-4 mb-6">
          
          
          <span className="hidden sm:block h-px w-14 bg-[#b88a2a]" />
          <span className="text-[#102033] text-[13px] font-black tracking-[0.34em] uppercase">
            Fuerza Aérea Mexicana
          </span>
          <span className="text-[#b88a2a] text-sm font-black">✦</span>
          <span className="text-[#102033] text-[13px] font-black tracking-[0.34em] uppercase">
            Escuadrón Aéreo 402
          </span>
          <span className="hidden sm:block h-px w-14 bg-[#b88a2a]" />
          
        </div>

        {/* Main title */}
        



    <div className="text-center">
      <h1 className="hero-title-blue text-7xl sm:text-8xl md:text-[8.5rem] leading-[0.84]">
        ÁGUILAS
      </h1>

      <h1 className="hero-title-gold text-7xl sm:text-8xl md:text-[8.5rem] leading-[0.86]">
        AZTECAS
      </h1>
    </div>

        {/* Tagline */}
        <div className="flex flex-wrap items-center justify-center gap-5 my-7">
          <div className="w-14 h-px bg-[#b88a2a]" /> {/* liniea valores  */}
          <p className="text-[#102033] text-xs md:text-sm font-black tracking-[0.28em] uppercase">
            Excelencia &nbsp;·&nbsp; Precisión &nbsp;·&nbsp; Orgullo Nacional
          </p>
          <div className="w-14 h-px bg-[#b88a2a]" /> {/* liniea valores  */}
        </div>
      
        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link
            to="/historia"
            className="inline-flex min-w-48 items-center justify-center gap-3 bg-[#0d1c2e] text-white px-9 py-4 text-xs font-black uppercase tracking-[0.22em] border-2 border-[#b88a2a] hover:bg-[#132b49] transition-colors duration-200 shadow-lg shadow-black/20"
          >

            <img
                  src="/img/logos/aguila-dorada.png"
                  alt="Águila"
                  className="w-10 h-10 object-contain"
                />
            Nuestra Historia
          </Link>
          <Link
            to="/galeria"
            className="inline-flex min-w-48 items-center justify-center border-2 border-[#b88a2a] bg-white/85 text-[#0d1c2e] px-9 py-4 text-xs font-black uppercase tracking-[0.22em] hover:bg-white/90 transition-colors duration-200"
          >
            Ver Galería
          </Link>
        
        </div>
      

    </div>
    </section> 
    
  );

  
}

export default Hero;
