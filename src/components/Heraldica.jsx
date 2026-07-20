const elementos = [
  {
    titulo: 'Forma',
    descripcion: 'Círculo completo, representando unidad, perfección y continuidad en el vuelo y en la misión del escuadrón.',
  },
  {
    titulo: 'Campo (Fondo)',
    descripcion: 'De azul oscuro, símbolo del cielo, la lealtad, el valor y la justicia — campos donde las Águilas Aztecas despliegan sus maniobras.',
  },
  {
    titulo: 'Bordura Dorada',
    descripcion: 'Anillo dorado, emblema de excelencia, nobleza, honor y distinción. Contiene "FUERZA AÉREA MEXICANA" (superior) y "ÁGUILAS AZTECAS" (inferior).',
  },
  {
    titulo: 'Tres Aviones Acrobáticos',
    descripcion: 'En formación de plata, apuntando hacia la derecha en ascenso, evocando disciplina, coordinación, destreza y espíritu de superación.',
  },
  {
    titulo: 'Ala Estilizada de Águila',
    descripcion: 'De plata, en la parte inferior izquierda. Representa libertad, fuerza y vigilancia. Evoca al guerrero mexica y exalta la identidad nacional.',
  },
  {
    titulo: 'Escarapelas Tricolores',
    descripcion: 'Dos escarapelas de la Fuerza Aérea Mexicana en forma de triángulo invertido, una a cada lado del campo.',
  },
];

function Heraldica() {
  return (
    <section id="heraldica" className="bg-[#132b49] py-24 relative overflow-hidden">

      {/* Background accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0b1728]/35 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#d4af37] text-[10px] font-bold tracking-[0.5em] uppercase mb-3">
            Identidad Visual
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-wide">
            HERÁLDICA
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#006847] via-[#b88a2a] to-[#ce1126] mx-auto mb-6" />
          <p className="text-white/70 text-sm max-w-2xl mx-auto leading-relaxed">
            La rodela representa la excelencia, precisión y orgullo de las Águilas Aztecas, evocando su maestría aérea,
            el vínculo con la historia, la tradición militar y la soberanía nacional de México.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {elementos.map((el, i) => (
            <div
              key={i}
              className="bg-[#0b1728]/45 border border-white/10 p-6 hover:border-[#d4af37]/45 hover:bg-[#0b1728]/65 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#b88a2a] flex items-center justify-center">
                  <span className="text-[#0b1728] text-xs font-black">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <h4 className="text-[#d4af37] text-sm font-black uppercase tracking-wider mb-2">
                    {el.titulo}
                  </h4>
                  <p className="text-white/70 text-sm leading-relaxed">{el.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Significado conjunto */}
        <div className="mt-10 bg-[#0b1728]/60 border border-[#b88a2a]/25 p-8">
          <p className="text-[#d4af37] text-[9px] font-black tracking-[0.4em] uppercase mb-2">
            Significado Conjunto
          </p>
          <p className="text-white/80 text-sm leading-relaxed max-w-4xl">
            La combinación de los elementos aéreos con símbolos patrios refleja el compromiso con la nación y la inspiración
            que estas maniobras ofrecen al pueblo mexicano, demostrando que la destreza, el honor y la identidad nacional
            vuelan juntos en cada actuación de las <span className="text-[#d4af37] font-bold">Águilas Aztecas</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Heraldica;
