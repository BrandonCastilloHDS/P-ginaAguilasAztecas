const recentVideos = [
  {
    title: 'Ceremonia inaugural de la Copa Mundial de Futbol 2026',
    eyebrow: 'Evento más reciente',
    location: 'Copa Mundial de Fútbol 2026',
    description: [
      'La Escuadrilla Acrobática "Águilas Aztecas" de la Fuerza Aérea Mexicana participó en la ceremonia inaugural de la Copa Mundial de Fútbol 2026.',
      'Dos helicópteros UH-60 de la Fuerza Aérea y de la Guardia Nacional protagonizaron uno de los momentos más emotivos y representativos del acto protocolario, al realizar un sobrevuelo llevando suspendida una bandera monumental de México ante la mirada de miles de asistentes y millones de espectadores alrededor del mundo.',
      'Estas acciones se consolidaron como una nueva expresión del talento, preparación y excelencia de los pilotos militares mexicanos.',
    ],
    src: '/img/aviones/Ceremonia_inagural_de_la_copa.mp4',
    
  },
];

function RecentEventVideos() {
  return (
    <section className="bg-[#f4f7fb] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="text-[#2e7d32] text-[11px] font-black uppercase tracking-[0.35em] mb-3">
              Eventos recientes
            </p>
            <h2 className="text-[#00296b] text-4xl md:text-5xl font-black tracking-wide">
              VIDEO DESTACADO
            </h2>
          </div>
          
        </div>

        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4">
          {recentVideos.map((video) => (
            <article
              key={video.src}
              className="snap-start shrink-0 w-[88vw] lg:w-full bg-white border border-[#00296b]/10 shadow-xl overflow-hidden rounded-lg"
            >
              <div className="px-6 py-8 md:px-10 md:py-12">
                <div className="max-w-3xl mx-auto text-center mb-8">
                  <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
                    <span className="bg-[#2e7d32] text-white text-[11px] font-black uppercase tracking-[0.22em] px-3 py-2 rounded">
                      {video.eyebrow}
                    </span>
                    <span className="text-[#00296b]/55 text-[11px] font-black uppercase tracking-[0.22em]">
                      {video.location}
                    </span>
                  </div>

                  <h3 className="text-[#00296b] text-3xl md:text-4xl font-black leading-tight">
                    {video.title}
                  </h3>
                </div>

                <div className="mx-auto w-full max-w-[430px] bg-black shadow-2xl">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster={video.poster}
                    className="aspect-[9/16] w-full object-contain"
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                </div>

                <div className="max-w-4xl mx-auto mt-8 space-y-4">
                  {video.description.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-[#00296b]/72 text-sm md:text-base leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentEventVideos;
