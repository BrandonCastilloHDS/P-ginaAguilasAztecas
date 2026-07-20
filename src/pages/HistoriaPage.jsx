import Footer from '../components/Footer';


const heraldica = [
  {
    titulo: 'Forma',
    texto: 'Círculo completo, representando unidad, perfección y continuidad en el vuelo y en la misión del escuadrón.',
  },
  {
    titulo: 'Campo (fondo)',
    texto: 'De azul (azul oscuro), símbolo del cielo, la lealtad, el valor y la justicia, campos donde las Águilas Aztecas despliegan sus maniobras acrobáticas.',
  },
  {
    titulo: 'Bordura',
    lista: [
      'Anillo dorado, emblema de excelencia, nobleza, honor y distinción. Contiene el nombre de la institución y de la Escuadrilla.',
      'En la parte superior: "FUERZA AÉREA MEXICANA"',
      'En la parte inferior: "ÁGUILAS AZTECAS"',
      'Ambos textos en letras capitales, de sable (negro), indicando firmeza y autoridad.',
    ],
  },
  {
    titulo: 'Tres aviones acrobáticos',
    texto: 'Representados en formación, apuntando hacia la derecha y en ascenso, evocando disciplina, coordinación, destreza y el espíritu de superación. De plata (color metálico), reflejan la tecnología, el dinamismo y la claridad de propósito.',
  },
  {
    titulo: 'Ala estilizada de águila',
    texto: 'Situada en la parte inferior izquierda del campo. De plata, representa el espíritu de libertad, fuerza y vigilancia. Es también símbolo del guerrero mexica, exaltando la identidad nacional y el vínculo con el glorioso pasado de los pueblos originarios.',
  },
  {
    titulo: 'Dos escarapelas tricolores en forma de triángulo invertido',
    texto: 'Una a cada lado del campo, escarapela de la Fuerza Aérea Mexicana.',
  },
];

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <div className="w-8 h-px bg-[#b88a2a]" />
      <p className="text-[#006847] text-[10px] font-black tracking-[0.45em] uppercase">{children}</p>
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="text-4xl md:text-5xl font-black text-white tracking-wide mb-5">{children}</h2>
  );
}

function Divider() {
  return <div className="w-16 h-1 bg-[#b88a2a]" />;
}

function HistoriaPage() {
  return (
    <div className="pt-[52px]">

      {/* ── BANNER ── */}
      <div className="relative bg-[#0b1728] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#006847 1px, transparent 1px), linear-gradient(90deg, #006847 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-8">
            <polygon points="0,40 1440,10 1440,40" style={{ fill: '#132b49' }} />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-16 pb-20 relative z-10">
          <SectionLabel>F.A.M. · Escuadrón Aéreo 402</SectionLabel>
          <SectionTitle>RESEÑA HISTÓRICA</SectionTitle>
          <Divider />
          <p className="text-white/60 text-sm mt-4 tracking-wider">
            Escuadrilla Acrobática "Águilas Aztecas"
          </p>
        </div>

        {/* Encabezado militar */}
        <div className="absolute top-6 right-6 text-right hidden md:block">
          <p className="text-white/30 text-[10px] tracking-widest leading-loose">
            IV R.A.M. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 14/a. Z.A.M.<br />
            2/o Gpo. Ar. &nbsp;&nbsp;&nbsp;&nbsp; Edn. Ar. 402
          </p>
        </div>
      </div>

      {/* ── HISTORIA NARRATIVA ── */}
      <section className="bg-[#132b49] py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-7">
          <p className="text-white/85 text-base leading-relaxed text-justify">
            La materialización de operaciones aéreas de la Escuadrilla Acrobática Águilas Aztecas (E.A.A.A.) implica desarrollar una sinergia entre diferentes equipos de trabajo dedicado al ramo aeronáutico, los cuales deben de coordinarse y complementarse de forma armoniosa y exacta, a fin de concluir con éxito sus actividades con los más altos estándares de seguridad.
          </p>
          <p className="text-white/85 text-base leading-relaxed text-justify">
            La Fuerza Aérea Mexicana desde su constitución en <span className="text-[#b88a2a] font-semibold">1915</span> a la fecha, es una institución que ha velado por la defensa de la soberanía y cielos mexicanos, apoyando al desarrollo del país a través de sus misiones fundamentales, asimismo realiza eventos cívicos como medida de acercamiento de las Fuerzas Armadas a la población, la Escuadrilla Acrobática de la Fuerza Aérea realiza espectáculos aéreos para incrementar la moral de la población e inspirar a las y los jóvenes de México, apegándose a los estándares de seguridad, directivas, reglamentación aeronáutica y profesionalismo.
          </p>
          <p className="text-white/85 text-base leading-relaxed text-justify">
            El 16 de febrero de <span className="text-[#b88a2a] font-semibold">2010</span> se remitió una propuesta de la Fuerza Aérea Mexicana para la integración de un equipo acrobático con aviones <span className="text-white font-medium">Pilatus PC-7</span>, el cual tenía como propósito fortalecer la confianza que se detenta en las instituciones militares nacionales, así fue como el 02 de Julio del 2010 se autorizó la integración del 1/er. equipo acrobático del Colegio del Aire con pilotos aviadores de la Escuela Militar de Aviación, teniendo diversas participaciones a lo largo de su existencia hasta el año 2017.
          </p>
          <p className="text-white/85 text-base leading-relaxed text-justify">
            En mayo del <span className="text-[#b88a2a] font-semibold">2017</span> se ordenó la integración de 3 Escuadrillas Acrobáticas pertenecientes a los Edns. Ars. 201 (Cozumel, Q. Roo.), 204 (Hermosillo, Son.) y 402 (Cd. Ixtepec, Oax.) con el fin de participar en el "7/o Espectáculo Aéreo" y "Espectáculo Aéreo Jalisco" con la flota de aeronaves <span className="text-white font-medium">Texan II T-6C+</span> de reciente adquisición, fue entonces cuando nació el equipo acrobático del Escuadrón Aéreo 402, el cual en un futuro cambiaria de nominación al nombre emblemático de "Águilas Aztecas".
          </p>
          <p className="text-white/85 text-base leading-relaxed text-justify">
            El <span className="text-[#b88a2a] font-semibold">9 de marzo de 2024</span>, la Escuadrilla Acrobática del Escuadrón Aéreo 402 participó en el espectáculo Aéreo <span className="text-white font-medium">"Fiesta of Flight 2024"</span> en las instalaciones de la Base Aérea de Laughlin, ubicada en Del Rio, Texas, E.U.A., siendo la primera vez que la Fuerza Aérea Mexicana participa en un espectáculo aéreo fuera del territorio mexicano.
          </p>
          <p className="text-white/85 text-base leading-relaxed text-justify">
            En septiembre de 2024, se aprobó el primer documento que establece el marco normativo de la Escuadrilla Águilas Aztecas; "La Directiva para la integración y operación de la Escuadrilla Acrobática de la Fuerza Aérea Mexicana" la cual tiene como propósito establecer los lineamientos para la integración, adiestramiento y operación de la misma, así mismo establece cual es el motivo por el cual se creó: <span className="text-white/70 italic">"…las Escuadrillas Acrobáticas emergen como un símbolo tradicional y emblemático de la destreza, profesionalismo y dedicación en el ámbito aeronáutico de los miembros de las Fuerzas Armadas a nivel internacional, por lo cual la Directiva no solo constituye una herramienta esencial para el desempeño eficaz y seguro de las maniobras aéreas durante los diversos eventos cívicos-militares, sino que también refleja el profundo compromiso de la DEFENSA con la excelencia, la seguridad y el servicio a la nación…"</span>.
          </p>
          <p className="text-white/85 text-base leading-relaxed text-justify">
            La Escuadrilla Acrobática "Águilas Aztecas" tiene su origen en el Escuadrón Aéreo 402, en la plaza de Ciudad de Ixtepec, Oaxaca, pasó revista de entrada el <span className="text-[#b88a2a] font-semibold">17 de enero del 2025</span> por el Secretario de la Defensa Nacional, el Gral. Ricardo Trevilla Trejo y el 10 de febrero del mismo año durante el marco del "110 aniversario de la Fuerza Aérea Mexicana" e inauguración del Grupo de Base Aérea No. 12 (Tulum, Q. Roo.), debutó con una serie de maniobras que demostraron la destreza y capacidad operativa de sus pilotos aviadores; sin embargo la consolidación de las "Águilas Aztecas" fue el resultado de un proyecto nacional que a través de los años se ha ido perfeccionando.
          </p>
          <p className="text-white/85 text-base leading-relaxed text-justify">
            El <span className="text-[#b88a2a] font-semibold">23 de abril de 2025</span>, las Águilas Aztecas obtuvieron su primer certificado de las maniobras acrobáticas expedido por la Administración Federal de Aviación (F.A.A. por sus siglas en inglés), el cual aprueba a las Águilas Aztecas la ejecución de maniobras acrobáticas durante la evolución de su tabla en los Estados Unidos de América.
          </p>
        </div>
      </section>

      {/* ── FILOSOFÍA OPERACIONAL ── */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel style={{ '--label-color': '#006847' }}>Doctrina</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black text-[#0b1728] tracking-wide mb-5">
            FILOSOFÍA OPERACIONAL
          </h2>
          <div className="w-16 h-1 bg-[#b88a2a] mb-10" />

          <div className="space-y-6">
            <p className="text-gray-700 text-base leading-relaxed text-justify">
              La Escuadrilla Acrobática "Águilas Aztecas" orienta su filosofía operacional hacia la excelencia en la ejecución de maniobras acrobáticas, la estandarización de procedimientos y la administración eficiente del riesgo operacional, bajo un enfoque de seguridad, disciplina y precisión táctica.
            </p>
            <p className="text-gray-700 text-base leading-relaxed text-justify">
              Cada misión, práctica o demostración aérea es el resultado de un proceso integral de planeación, análisis de riesgos, coordinación logística y ejecución controlada, en estricto apego a la doctrina vigente de operaciones aéreas militares y a los lineamientos establecidos por la Fuerza Aérea Mexicana.
            </p>
            <p className="text-gray-700 text-base leading-relaxed text-justify">
              El personal integrante de la Escuadrilla, en sus diferentes áreas de responsabilidad, mantiene un compromiso permanente con la seguridad operacional, la eficiencia en el uso de recursos y el cumplimiento de estándares institucionales, aplicando las mejores prácticas de aviación militar.
            </p>
            <p className="text-gray-700 text-base leading-relaxed text-justify">
              La filosofía de operación de la E.A.A.A. establece como eje rector la mejora continua, sustentada en la retroalimentación técnica derivada de cada actividad aérea, el análisis de lecciones aprendidas, y la actualización periódica de procedimientos, con el objetivo de garantizar la ejecución segura, precisa y profesional de cada maniobra.
            </p>

            {/* Principios fundamentales */}
            <div className="bg-[#f4f0e8] border-l-4 border-[#b88a2a] p-6 mt-4">
              <p className="text-[#0b1728] text-sm font-black uppercase tracking-widest mb-3">
                Principios Fundamentales
              </p>
              <p className="text-gray-700 text-base leading-relaxed text-justify">
                Como principios fundamentales, la Escuadrilla Acrobática "Águilas Aztecas" prioriza la preservación de la vida humana, la salvaguarda del material aéreo y la mitigación de riesgos operacionales, actuando siempre con responsabilidad, profesionalismo y estricto sentido de pertenencia institucional, en beneficio de la imagen y prestigio de la Fuerza Aérea Mexicana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HERÁLDICA ── */}
      <section className="bg-[#f4f0e8] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#006847] text-[10px] font-black tracking-[0.45em] uppercase mb-3">
            Identidad Visual
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#0b1728] tracking-wide mb-5">
            HERÁLDICA DE LA RODELA
          </h2>
          <div className="w-16 h-1 bg-[#b88a2a] mb-10" />

          <div className="grid md:grid-cols-2 gap-10 items-start">

            {/* Elementos heráldicos */}
            <div className="space-y-5">
              {heraldica.map((el, i) => (
                <div key={i} className="bg-white border border-gray-200 p-5 shadow-sm">
                  <h4 className="text-[#0b1728] text-sm font-black uppercase tracking-wider mb-2 flex items-center gap-2">
                    <span className="w-4 h-0.5 bg-[#b88a2a]" />
                    {el.titulo}
                  </h4>
                  {el.texto && (
                    <p className="text-gray-600 text-sm leading-relaxed">{el.texto}</p>
                  )}
                  {el.lista && (
                    <ul className="space-y-1.5 mt-1">
                      {el.lista.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-gray-600 text-sm">
                          <div className="mt-1.5 w-1.5 h-1.5 bg-[#006847] flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* Significado conjunto */}
              <div className="bg-[#0b1728] p-5">
                <h4 className="text-[#b88a2a] text-sm font-black uppercase tracking-wider mb-2 flex items-center gap-2">
                  <span className="w-4 h-0.5 bg-[#b88a2a]" />
                  Significado Conjunto
                </h4>
                <p className="text-white/75 text-sm leading-relaxed">
                  La rodela representa la excelencia, precisión y orgullo de las Águilas Aztecas como Escuadrilla Acrobática, evocando no solo su maestría aérea, sino también el vínculo con la historia, la tradición militar y la soberanía nacional de México. La combinación de los elementos aéreos con símbolos patrios refleja el compromiso con la nación y la inspiración que estas maniobras ofrecen al pueblo mexicano.
                </p>
              </div>
            </div>

            {/* Imagen de la rodela */}
            <div className="flex flex-col items-center gap-4">
              <div className="bg-white border-2 border-[#0b1728]/10 p-6 shadow-lg w-full flex items-center justify-center">
                <img
                  src="/img/logos/rodela.png"
                  alt="Rodela Águilas Aztecas"
                  className="w-full max-w-xs"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div
                  className="hidden flex-col items-center justify-center gap-3 py-16 text-center"
                  style={{ display: 'none' }}
                >
                  <div className="w-24 h-24 rounded-full border-4 border-[#0b1728]/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border-2 border-[#b88a2a]/40" />
                  </div>
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest">
                    Imagen de la Rodela
                  </p>
                  <p className="text-gray-300 text-[10px]">
                    Colocar en public/img/logos/rodela.png
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-xs text-center uppercase tracking-widest">
                Rodela oficial · Águilas Aztecas
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HistoriaPage;

