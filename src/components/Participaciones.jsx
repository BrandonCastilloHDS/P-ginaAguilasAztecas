const eventos = [
  {
    year: '2017',
    items: [
      { fecha: 'Abril 2017',  nombre: 'Feria Aeroespacial México 2017', especial: false },
      { fecha: 'Mayo 2017',   nombre: '7.° Espectáculo Aéreo y Espectáculo Aéreo Jalisco', especial: false },
    ],
  },
  {
    year: '2019',
    items: [
      { fecha: 'Abril 2019', nombre: 'Feria Aeroespacial México 2019', especial: false },
    ],
  },
  {
    year: '2021',
    items: [
      { fecha: 'Abril 2021', nombre: 'Feria Aeroespacial México 2021', especial: false },
    ],
  },
  {
    year: '2022',
    items: [
      { fecha: 'Septiembre 2022', nombre: '8.° Espectáculo Aéreo', especial: false },
    ],
  },
  {
    year: '2023',
    items: [
      { fecha: 'Abril 2023', nombre: 'Feria Aeroespacial México 2023', especial: false },
    ],
  },
  {
    year: '2024',
    items: [
      {
        fecha: 'Marzo 2024',
        nombre: '"Fiesta of Flight 2024" — Laughlin, Del Rio, Texas, EUA',
        especial: true,
        badge: 'Primera participación internacional',
      },
    ],
  },
  {
    year: '2025',
    items: [
      { fecha: 'Febrero 2025',   nombre: '110 Aniversario de la Fuerza Aérea Mexicana', especial: false },
      { fecha: 'Febrero 2025',   nombre: 'Carrera "La Gran Fuerza de México"', especial: false },
      {
        fecha: 'Abril 2025',
        nombre: 'Feria Aeroespacial México 2025',
        especial: true,
        badge: '1.er Certificado FAA',
      },
      { fecha: 'Mayo 2025',      nombre: '107 Aniversario de Puerto Vallarta y 57 años como ciudad', especial: false },
      { fecha: 'Julio 2025',     nombre: '22.° Festival Mar Bermejo', especial: false },
      { fecha: 'Noviembre 2025', nombre: 'Acapulco Airshow 2025', especial: false },
    ],
  },
  {
    year: '2026',
    items: [
      { fecha: 'Abril 2026', nombre: 'Tulum Airshow 2026', especial: false },
    ],
  },
];

function Participaciones() {
  return (
    <section id="participaciones" className="bg-[#0b1728] py-24 relative overflow-hidden">

      {/* Decorative background texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(45deg, #d4af37 25%, transparent 25%), linear-gradient(-45deg, #d4af37 25%, transparent 25%)',
          backgroundSize: '8px 8px',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#d4af37] text-[10px] font-bold tracking-[0.5em] uppercase mb-3">
            Trayectoria
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-[#f4f0e8] mb-4 tracking-wide">
            PARTICIPACIONES
          </h2>
          <div className="w-50 h-1 bg-gradient-to-r from-[#006847] via-[#E7E7E7] to-[#ce1126] mx-auto" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#b88a2a]/20 -translate-x-1/2" />

          <div className="space-y-10">
            {eventos.map((grupo, gi) => (
              <div key={gi} className="md:grid md:grid-cols-2 md:gap-8 items-start">

                {/* Year marker */}
                <div className={`flex ${gi % 2 === 0 ? 'md:justify-end' : 'md:col-start-2 md:justify-start'} md:col-span-2 justify-start mb-3 md:mb-0 relative`}>
                  <div className="md:absolute md:left-1/2 md:-translate-x-1/2 bg-[#b88a2a] text-[#0b1728] px-5 py-1.5 font-black text-sm tracking-[0.15em]">
                    {grupo.year}
                  </div>
                </div>

                {/* Events — alternate sides */}
                <div className={`md:col-span-2 grid md:grid-cols-2 gap-3`}>
                  {grupo.items.map((ev, ei) => (
                    <div
                      key={ei}
                      className={`${
                        gi % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'
                      } flex items-start gap-3 bg-white/[0.055] border border-[#f4f0e8]/10 px-5 py-4 hover:border-[#b88a2a]/45 transition-colors`}
                    >
                      <div className={`mt-1.5 w-2 h-2 flex-shrink-0 ${ev.especial ? 'bg-[#d4af37]' : 'bg-[#006847]'}`} />
                      <div>
                        <p className="text-[#d4af37] text-[9px] font-bold tracking-[0.25em] uppercase mb-0.5">
                          {ev.fecha}
                        </p>
                        <p className={`text-sm font-semibold leading-snug ${ev.especial ? 'text-white' : 'text-[#f4f0e8]/72'}`}>
                          {ev.nombre}
                        </p>
                        {ev.badge && (
                          <span className="inline-block mt-1.5 bg-[#d4af37] text-[#0b1728] text-[8px] font-black uppercase tracking-widest px-2 py-0.5">
                            {ev.badge}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Participaciones;
