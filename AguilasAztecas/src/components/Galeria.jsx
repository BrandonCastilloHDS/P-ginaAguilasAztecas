// Genera automáticamente el arreglo de 10 fotos (aviones_1 hasta aviones_10)
const fotos = Array.from({ length: 13 }, (_, i) => {
  const numero = i + 1;
  return {
    src: `/img/aviones/avion_${numero}.webp`, 
    alt: `Águilas Aztecas - Fotografía ${numero}`
  };
});

function VideoPlaceholder({ label }) {
  return (
    <div className="relative aspect-video bg-[#003f87] border border-[#0093d1]/20 flex flex-col items-center justify-center gap-3 group hover:border-[#fdc400]/40 transition-colors cursor-pointer">
      {/* Play icon */}
      <div className="w-14 h-14 border-2 border-white/30 rounded-full flex items-center justify-center group-hover:border-[#fdc400]/60 transition-colors">
        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-14 border-l-white/50 border-b-8 border-b-transparent ml-1 group-hover:border-l-[#fdc400] transition-colors" />
      </div>
      <p className="text-white/40 text-xs font-semibold uppercase tracking-widest group-hover:text-white/60 transition-colors">
        {label}
      </p>
    </div>
  );
}

function Galeria() {
  return (
    <section id="galeria" className="bg-[#f0f4f8] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#0093d1] text-[10px] font-bold tracking-[0.5em] uppercase mb-3">
            Medios
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-[#00296b] mb-4 tracking-wide">
            GALERÍA
          </h2>
          <div className="w-20 h-1 bg-[#fdc400] mx-auto" />
        </div>

        {/* Photo grid */}
        <div className="mb-6">
          <p className="text-[#00296b] text-xs font-black uppercase tracking-widest mb-5 flex items-center gap-3">
            <span className="w-6 h-px bg-[#fdc400]" />
            Fotografías
            <span className="w-6 h-px bg-[#fdc400]" />
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {fotos.map((foto, i) => (
              <div
                key={i}
                className={`relative overflow-hidden group cursor-pointer ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
              >
                <img
                  src={foto.src}
                  alt={foto.alt}
                  className="w-full h-48 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ minHeight: i === 0 ? '320px' : '180px' }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#00296b]/0 group-hover:bg-[#00296b]/50 transition-all duration-300 flex items-end">
                  <div className="w-full px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs font-semibold uppercase tracking-wider">{foto.alt}</p>
                  </div>
                </div>
                {/* Gold corner accent */}
                <div className="absolute top-0 left-0 w-8 h-1 bg-[#fdc400] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Video section */}
        <div className="mt-10">
          <p className="text-[#00296b] text-xs font-black uppercase tracking-widest mb-5 flex items-center gap-3">
            <span className="w-6 h-px bg-[#fdc400]" />
            Videos
            <span className="w-6 h-px bg-[#fdc400]" />
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <VideoPlaceholder label="Próximamente" />
            <VideoPlaceholder label="Próximamente" />
            <VideoPlaceholder label="Próximamente" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Galeria;
