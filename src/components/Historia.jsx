
import Footer from '../components/Footer';
import { useState } from 'react';


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
  const [opcionActiva, setOpcionActiva] = useState('historia');
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
          <SectionTitle>ÁGUILAS AZTECAS</SectionTitle>
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


      {/*Aquí va lo del submenú */}
      <section className='bg-[#0f223d] border'>
        <div className="flex p-1.5 space-x-1  rounded-xl select-none max-w-sm mx-auto backdrop-blur-sm shadow-xl">

          {/* Opción: Historia */}
          <label className="flex-grow cursor-pointer">
            <input
              type="radio"
              name="submenu_historia"
              value="historia"
              className="peer hidden"
              checked={opcionActiva === 'historia'}
              onChange={() => setOpcionActiva('historia')}
            />
            <div className="flex items-center justify-center text-[11px] font-bold uppercase tracking-[0.25em] text-white/50 peer-checked:bg-gradient-to-r peer-checked:from-[#d4af37] peer-checked:to-[#b88a2a] peer-checked:text-[#050B14] peer-checked:shadow-[0_0_15px_rgba(184,138,42,0.4)] py-2.5 px-6 rounded-lg transition-all duration-300">
              Historia
            </div>
          </label>

          {/* Opción: Heráldica */}
          <label className="flex-grow cursor-pointer">
            <input
              type="radio"
              name="submenu_historia"
              value="heraldica"
              className="peer hidden"
              checked={opcionActiva === 'heraldica'}
              onChange={() => setOpcionActiva('heraldica')}
            />
            <div className="flex items-center justify-center text-[11px] font-bold uppercase tracking-[0.25em] text-white/50 peer-checked:bg-gradient-to-r peer-checked:from-[#d4af37] peer-checked:to-[#b88a2a] peer-checked:text-[#050B14] peer-checked:shadow-[0_0_15px_rgba(184,138,42,0.4)] py-2.5 px-6 rounded-lg transition-all duration-300">
              Heráldica
            </div>
          </label>

        </div>
      </section>

      {/*Aquí es lo de las fechas  */}
      {/* {opcionActiva === 'historia' && (
        <section className="bg-[#0f223d] py-12 border-y border-white/10 ">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

              <div className="text-center">
                <p className="text-5xl font-black text-[#b88a2a]">1915</p>
                <p className="text-white/70 mt-2 uppercase tracking-widest text-xs">
                  Fundación de la FAM
                </p>
              </div>

              <div className="text-center">
                <p className="text-5xl font-black text-[#b88a2a]">2017</p>
                <p className="text-white/70 mt-2 uppercase tracking-widest text-xs">
                  Nacen las Águilas Aztecas
                </p>
              </div>

              <div className="text-center">
                <p className="text-5xl font-black text-[#b88a2a]">2024</p>
                <p className="text-white/70 mt-2 uppercase tracking-widest text-xs">
                  Primera misión internacional
                </p>
              </div>

              <div className="text-center">
                <p className="text-5xl font-black text-[#b88a2a]">2025</p>
                <p className="text-white/70 mt-2 uppercase tracking-widest text-xs">
                  Certificación FAA
                </p>
              </div>

            </div>

          </div>
        </section>


      )} */}


      {/* ── HISTORIA NARRATIVA ── */}
      {opcionActiva === 'historia' && (
        <section className="bg-[#132b49] py-20">
          <div className="max-w-5xl mx-auto px-6 space-y-7">

            <p className="text-white/85 text-base leading-relaxed text-justify">
              La Escuadrilla Acrobática "Águilas Aztecas" (E.A.A.A.) es un equipo de la Fuerza Aérea Mexicana, institución creada en <span className="text-[#b88a2a] font-semibold">1915</span>. Su propósito fundamental es realizar espectáculos aéreos con los más altos estándares de seguridad para inspirar a la juventud, elevar la moral pública y demostrar la destreza y profesionalismo de las Fuerzas Armadas.
            </p>

            <p className="text-white/85 text-base leading-relaxed text-justify">
              Los antecedentes del equipo se remontan a <span className="text-[#b88a2a] font-semibold">2010</span>, cuando se autorizó el primer equipo acrobático oficial operando aviones <span className="text-white font-medium">Pilatus PC-7</span>. Posteriormente, en <span className="text-[#b88a2a] font-semibold">mayo de 2017</span>, se ordenó la integración de nuevas escuadrillas con aeronaves <span className="text-white font-medium">Texan II T-6C+</span>. Fue entonces cuando el Escuadrón Aéreo 402 se estableció como la base de lo que en el futuro tomaría el nombre emblemático de "Águilas Aztecas".
            </p>

            <p className="text-white/85 text-base leading-relaxed text-justify">
              El <span className="text-[#b88a2a] font-semibold">9 de marzo de 2024</span> representó un hito histórico para la escuadrilla al participar en la <span className="text-white font-medium">"Fiesta of Flight 2024"</span> en Del Rio, Texas. Esto marcó la primera vez que la Fuerza Aérea Mexicana participaba en un espectáculo aéreo fuera del territorio nacional. Meses más tarde, en septiembre, se aprobó la primera directiva que estableció formalmente su marco normativo y operativo.
            </p>

            <p className="text-white/85 text-base leading-relaxed text-justify">
              A inicios de <span className="text-[#b88a2a] font-semibold">2025</span>, la escuadrilla pasó revista de entrada y debutó oficialmente durante el 110 Aniversario de la Fuerza Aérea Mexicana en Tulum. Poco después, el <span className="text-[#b88a2a] font-semibold">23 de abril de 2025</span>, consolidaron su prestigio internacional al obtener su primer certificado expedido por la F.A.A. (Administración Federal de Aviación), autorizándolos para ejecutar maniobras acrobáticas en los Estados Unidos.
            </p>

            <p className="text-white/85 text-base leading-relaxed text-justify">
              La consolidación de las "Águilas Aztecas" es el resultado de un proyecto nacional que a través de los años se ha ido perfeccionando, uniendo el trabajo en equipo, el estricto apego a la reglamentación aeronáutica y un profundo compromiso con el servicio a la nación.
            </p>

          </div>
        </section>
      )}

      {/* ── FILOSOFÍA OPERACIONAL ── */}
      {opcionActiva === 'historia' && (
        <section className="bg-white py-20 ">
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
      )}


      {/* ── HERÁLDICA ── */}

    {opcionActiva === 'heraldica' && ( 

      <section className="bg-[#f4f0e8] py-20 ">
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

    )}

      <Footer />
    </div>
  );
}

export default HistoriaPage;

