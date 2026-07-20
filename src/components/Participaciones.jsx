<<<<<<< HEAD
=======
import React, { useState } from 'react';

>>>>>>> devB
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
<<<<<<< HEAD
  return (
    <section id="participaciones" className="bg-[#0b1728] py-24 relative overflow-hidden">

      {/* Decorative background texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
=======
  // Estado para saber qué evento se está haciendo hover
  const [eventoHover, setEventoHover] = useState(null);

  return (
    <section id="participaciones" className="bg-[#050B14] py-24 relative overflow-hidden font-sans">

      {/* Gradiente radial de fondo para profundidad */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0f2038] via-[#050b14] to-[#050b14] opacity-80" />

      {/* Textura decorativa original */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
>>>>>>> devB
        style={{
          backgroundImage:
            'linear-gradient(45deg, #d4af37 25%, transparent 25%), linear-gradient(-45deg, #d4af37 25%, transparent 25%)',
          backgroundSize: '8px 8px',
        }}
      />

<<<<<<< HEAD
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
=======
      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Encabezado */}
        <div className="text-center mb-24">
          <p className="text-[#d4af37] text-xs font-bold tracking-[0.5em] uppercase mb-3">
            Trayectoria
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-[#f4f0e8] mb-6 tracking-wider drop-shadow-lg">
            PARTICIPACIONES
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#006847] via-[#f4f0e8] to-[#ce1126] mx-auto rounded-full" />
        </div>

        {/* Línea del Tiempo */}
        <div className="relative">
          
          {/* Línea vertical central iluminada */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#b88a2a] to-transparent -translate-x-1/2 shadow-[0_0_12px_#b88a2a]" />

          <div className="space-y-16">
            {eventos.map((grupo, gi) => (
              <div key={gi} className="relative w-full">
                
                {/* Etiqueta del Año */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 -top-5 w-20 h-10 bg-[#b88a2a] rounded-full items-center justify-center text-[#050B14] font-black text-sm tracking-widest shadow-[0_0_15px_rgba(184,138,42,0.4)] z-20 border-2 border-[#050B14]">
                  {grupo.year}
                </div>
                <div className="md:hidden flex justify-start mb-6 relative z-20">
                  <div className="bg-[#b88a2a] px-6 py-2 rounded-full text-[#050B14] font-black text-sm tracking-widest shadow-lg">
>>>>>>> devB
                    {grupo.year}
                  </div>
                </div>

<<<<<<< HEAD
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
=======
                <div className="md:grid md:grid-cols-2 md:gap-16">
                  <div className={`${gi % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'} flex flex-col gap-5`}>
                    {grupo.items.map((ev, ei) => (
                      <div
                        key={ei}
                        className={`relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-xl ${
                          gi % 2 === 0 ? 'md:text-right' : 'md:text-left'
                        }`}
                      >
                        {/* Nodo conector hacia la línea central */}
                        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-[#050B14] ${
                          ev.especial ? 'bg-[#d4af37]' : 'bg-[#006847]'
                        } ${gi % 2 === 0 ? '-right-[2.55rem]' : '-left-[2.55rem]'} z-10 shadow-[0_0_8px_rgba(255,255,255,0.3)]`} />

                        <div className={`flex flex-col ${gi % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                          
                          {/* Elemento Fecha Interactivo */}
                          <div 
                            className="inline-block cursor-pointer group/fecha"
                            onMouseEnter={() => setEventoHover(ev)}
                            onMouseLeave={() => setEventoHover(null)}
                          >
                            <p className="text-[#d4af37] text-[10px] font-bold tracking-[0.25em] uppercase mb-1.5 opacity-90 border-b border-dashed border-[#d4af37]/30 group-hover/fecha:border-[#d4af37] transition-colors pb-0.5">
                              {ev.fecha}
                            </p>
                          </div>

                          <p className={`text-base font-medium leading-relaxed ${ev.especial ? 'text-white' : 'text-[#f4f0e8]/75'}`}>
                            {ev.nombre}
                          </p>
                          {ev.badge && (
                            <span className="inline-block mt-3 bg-gradient-to-r from-[#d4af37] to-[#b88a2a] text-[#050B14] text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded shadow-sm">
                              {ev.badge}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
>>>>>>> devB
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
<<<<<<< HEAD
=======

      {/* Modal Flotante (Controlado por Estado) */}
      <div 
        className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#050B14]/80 backdrop-blur-sm transition-all duration-300 pointer-events-none ${
          eventoHover ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className={`bg-white/[0.05] border border-[#b88a2a]/50 p-6 rounded-2xl shadow-[0_0_40px_rgba(184,138,42,0.15)] max-w-2xl w-full mx-4 transform transition-transform duration-300 ${
          eventoHover ? 'scale-100' : 'scale-95'
        }`}>
          {/* Cabecera del Modal */}
          <div className="text-center mb-6">
            <p className="text-[#d4af37] text-xs font-bold tracking-[0.3em] uppercase mb-2">
              {eventoHover?.fecha}
            </p>
            <h3 className="text-white text-lg font-medium">
              {eventoHover?.nombre}
            </h3>
          </div>
          
          {/* Contenedor para tu Imagen */}
          <div className="w-full aspect-video bg-[#050B14] rounded-xl border border-white/10 flex items-center justify-center overflow-hidden">
             {/* Aquí colocarás tu etiqueta <img>. Por ahora hay un placeholder. */}
             <p className="text-white/30 text-sm tracking-widest uppercase">Área para imagen</p>
          </div>
        </div>
      </div>

>>>>>>> devB
    </section>
  );
}

<<<<<<< HEAD
export default Participaciones;
=======
export default Participaciones;
>>>>>>> devB
