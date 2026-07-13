const cards = [
  {
    numeral: 'I',
    title: 'MISIÓN',
    accentColor: '#0b1728',
    text: 'Establecer un vínculo entre las Fuerzas Armadas Mexicanas con la población civil, a través de Operaciones Aéreas Militares que reflejen la destreza, compromiso y dedicación del personal de la Fuerza Aérea Mexicana.',
  },
  {
    numeral: 'II',
    title: 'VISIÓN',
    accentColor: '#006847',
    text: 'Convertirse en símbolo emblemático de la DEFENSA/FAM a nivel internacional para inspirar orgullo nacional y admiración en otras naciones.',
  },
  {
    numeral: 'III',
    title: 'OBJETIVO',
    accentColor: '#8f1020',
    text: 'Contribuir al fortalecimiento de la imagen institucional de la DEFENSA a través de la demostración de destreza, promoviendo el orgullo e identidad nacional e incrementando la seguridad operacional en todos los eventos cívico-militares.',
  },
];

const principios = [
  'Preservación de la vida humana',
  'Salvaguarda del material aéreo',
  'Mitigación de riesgos operacionales',
  'Responsabilidad y profesionalismo',
  'Mejora continua de procedimientos',
  'Estricto sentido de pertenencia institucional',
];

function MisionVision() {
  return (
    <section id="mision" className="bg-[#f4f0e8] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#b88a2a] text-[10px] font-bold tracking-[0.5em] uppercase mb-3">
            Filosofía Operacional
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-[#0b1728] mb-4 tracking-wide">
            MISIÓN, VISIÓN Y OBJETIVO
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#006847] via-[#E7E7E7] to-[#ce1126] mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group flex flex-col overflow-hidden border border-[#0b1728]/10 bg-white/70 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Top color bar */}
              <div className="h-1.5 w-full" style={{ backgroundColor: card.accentColor }} />

              <div className="bg-white/85 p-8 flex-1 border border-white/70 group-hover:border-[#b88a2a]/35 transition-colors duration-300">
                {/* Numeral badge */}
                <div
                  className="inline-flex items-center justify-center w-12 h-12 border-2 text-lg font-black mb-5"
                  style={{ borderColor: card.accentColor, color: card.accentColor }}
                >
                  {card.numeral}
                </div>

                <div className="w-8 h-0.5 bg-[#b88a2a] mb-4" />

                <h3
                  className="text-2xl font-black tracking-[0.15em] mb-4"
                  style={{ color: card.accentColor }}
                >
                  {card.title}
                </h3>
                <p className="text-[#253348]/75 leading-relaxed text-sm">{card.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Principios fundamentales */}
        <div className="bg-white/65 border-l-4 border-[#b88a2a] p-8 shadow-sm">
          <p className="text-[#006847] text-[9px] font-bold tracking-[0.4em] uppercase mb-2">
            Marco de Actuación
          </p>
          <h4 className="text-[#0b1728] text-xl font-black uppercase tracking-wider mb-6">
            Principios Fundamentales
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {principios.map((p, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-1.5 w-2 h-2 bg-[#006847] shrink-0" />
                <p className="text-[#253348] text-sm font-medium leading-snug">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MisionVision;
