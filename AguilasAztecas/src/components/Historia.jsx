const hitos = [
  {
    year: '1915',
    texto: 'Fundación de la Fuerza Aérea Mexicana, institución dedicada a la defensa de la soberanía y los cielos mexicanos.',
    destacado: false,
  },
  {
    year: '2010',
    texto: 'El 2 de julio se autorizó la integración del primer equipo acrobático con aviones Pilatus PC-7, de pilotos de la Escuela Militar de Aviación.',
    destacado: false,
  },
  {
    year: '2017',
    texto: 'Nacimiento del equipo acrobático del Escuadrón Aéreo 402 con aeronaves Texan II T-6C+, semilla de lo que hoy son las "Águilas Aztecas".',
    destacado: false,
  },
  {
    year: 'Mar 2024',
    texto: '"Fiesta of Flight 2024" — Base Aérea de Laughlin, Del Rio, Texas. Primera participación internacional de la FAM fuera del territorio mexicano.',
    destacado: true,
  },
  {
    year: 'Sep 2024',
    texto: 'Aprobación de la Directiva para la integración y operación de la Escuadrilla Acrobática de la FAM, primer marco normativo oficial.',
    destacado: false,
  },
  {
    year: 'Ene 2025',
    texto: 'Revista de entrada por el Secretario de la DEFENSA, General Ricardo Trevilla Trejo. Ciudad de Ixtepec, Oaxaca.',
    destacado: false,
  },
  {
    year: 'Feb 2025',
    texto: 'Debut oficial en el "110 Aniversario de la FAM" e inauguración del Grupo de Base Aérea No. 12 en Tulum, Q. Roo.',
    destacado: false,
  },
  {
    year: 'Abr 2025',
    texto: 'Primer certificado de la Administración Federal de Aviación (FAA) para ejecutar maniobras acrobáticas en territorio estadounidense.',
    destacado: true,
  },
];

function Historia() {
  return (
    <section id="historia" className="bg-[#003f87] py-24 relative">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0093d1]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#0093d1] text-[10px] font-bold tracking-[0.5em] uppercase mb-3">
            Reseña Histórica
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-wide">
            NUESTRA HISTORIA
          </h2>
          <div className="w-20 h-1 bg-[#fdc400] mx-auto" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Left col: narrative text (3/5) */}
          <div className="lg:col-span-3 space-y-5">
            <p className="text-white/80 text-base leading-relaxed">
              La <span className="text-[#fdc400] font-semibold">Fuerza Aérea Mexicana</span>, desde su constitución en 1915, ha velado por la defensa de la soberanía y los cielos mexicanos. La Escuadrilla Acrobática realiza espectáculos aéreos para incrementar la moral de la población e inspirar a las y los jóvenes de México, apegándose a los más altos estándares de seguridad, directivas, reglamentación aeronáutica y profesionalismo.
            </p>
            <p className="text-white/80 text-base leading-relaxed">
              En <span className="text-[#fdc400] font-semibold">mayo de 2017</span>, al integrarse escuadrillas de los Escuadrones Aéreos 201 (Cozumel), 204 (Hermosillo) y 402 (Ciudad Ixtepec, Oaxaca) para participar en el 7.° Espectáculo Aéreo con la nueva flota de aeronaves <span className="text-white font-semibold">Texan II T-6C+</span>, nació el equipo acrobático del Escuadrón Aéreo 402, semilla de las hoy célebres <span className="text-[#fdc400] font-bold">"Águilas Aztecas"</span>.
            </p>
            <p className="text-white/80 text-base leading-relaxed">
              El <span className="text-[#fdc400] font-semibold">9 de marzo de 2024</span> marcó un hito histórico: por primera vez, la Fuerza Aérea Mexicana participó en un espectáculo aéreo fuera del territorio nacional, con actuación en la Base Aérea de Laughlin, Del Rio, Texas. En <span className="text-[#fdc400] font-semibold">abril de 2025</span> obtuvieron el primer certificado de la FAA para maniobras acrobáticas en suelo estadounidense.
            </p>

            {/* Highlight badge */}
            <div className="inline-flex items-center gap-3 bg-[#00296b]/60 border border-[#fdc400]/30 px-5 py-3 mt-4">
              <div className="w-2 h-2 bg-[#fdc400] rounded-full flex-shrink-0" />
              <p className="text-white/70 text-xs font-semibold uppercase tracking-wider">
                Escuadrón Aéreo 402 &nbsp;·&nbsp; Ciudad Ixtepec, Oaxaca
              </p>
            </div>
          </div>

          {/* Right col: timeline (2/5) */}
          <div className="lg:col-span-2">
            <div className="relative pl-6 border-l-2 border-[#0093d1]/25 space-y-7">
              {hitos.map((h, i) => (
                <div key={i} className="relative">
                  {/* Dot */}
                  <div
                    className={`absolute -left-[29px] top-1 w-7 h-7 rounded-full border-2 flex items-center justify-center ${
                      h.destacado
                        ? 'bg-[#fdc400] border-[#fdc400]'
                        : 'bg-[#003f87] border-[#0093d1]/50'
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full ${h.destacado ? 'bg-[#00296b]' : 'bg-[#0093d1]'}`} />
                  </div>

                  <p className={`text-[10px] font-black tracking-[0.25em] uppercase mb-1 ${h.destacado ? 'text-[#fdc400]' : 'text-[#0093d1]'}`}>
                    {h.year}
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed">{h.texto}</p>
                  {h.destacado && (
                    <span className="inline-block mt-1.5 bg-[#fdc400] text-[#00296b] text-[8px] font-black uppercase tracking-widest px-2 py-0.5">
                      Hito Internacional
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="w-full h-10 md:h-12">
          <polygon points="0,48 1440,0 1440,48" style={{ fill: '#ffffff' }} />
        </svg>
      </div>
    </section>
  );
}

export default Historia;
