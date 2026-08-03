import {
  Handshake,
  ShieldCheck,
  AlertTriangle,
  UserCheck,
  TrendingUp,
  Award,
} from 'lucide-react';
const cards = [
  {
    numeral: 'I',
    title: 'MISIÓN',
    accentColor: '#102a43', // 
    bgPattern: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=600', // Ilustración aérea / ciudad
    text: 'Establecer un vínculo entre las Fuerzas Armadas Mexicanas con la población civil, a través de Operaciones Aéreas Militares que reflejen la destreza, compromiso y dedicación del personal de la Fuerza Aérea Mexicana.',
  },
  {
    numeral: 'II',
    title: 'VISIÓN',
    accentColor: '#064e3b', 
    bgPattern: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600', // Mapa global / conectividad
    text: 'Convertirse en símbolo emblemático de la DEFENSA/FAM a nivel internacional para inspirar orgullo nacional y admiración en otras naciones.',
  },
  {
    numeral: 'III',
    title: 'OBJETIVO',
    accentColor: '#7f1d1d', 
    bgPattern: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600', // Engranajes / tecnología
    text: 'Contribuir al fortalecimiento de la imagen institucional de la DEFENSA a través de la demostración de destreza, promoviendo el orgullo e identidad nacional e incrementando la seguridad operacional en todos los eventos cívico-militares.',
  },
];

const principios = [
  { text: 'Preservación de la vida humana', icon: Handshake, color: '#102a43' },
  { text: 'Salvaguarda del material aéreo', icon: ShieldCheck, color: '#064e3b' },
  { text: 'Mitigación de riesgos operacionales', icon: AlertTriangle, color: '#064e3b' },
  { text: 'Responsabilidad y profesionalismo', icon: UserCheck, color: '#064e3b' },
  { text: 'Mejora continua de procedimientos', icon: TrendingUp, color: '#7f1d1d' },
  { text: 'Estricto sentido de pertenencia institucional', icon: Award, color: '#7f1d1d' },
];

function MisionVision() {
  return (
    <section id="mision" className="bg-[#132b49] py-20 text-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header principal */}
        <div className="text-center mb-14">
          <p className="text-[#8c734b] text-xs font-bold tracking-[0.4em] uppercase mb-2">
            Filosofía Operacional de Águilas Aztecas
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#FFFFFF] tracking-wide mb-3">
            MISIÓN, VISIÓN Y OBJETIVO
          </h2>
          {/* Línea tricolor sutil */}
          <div className="w-24 h-1 mx-auto flex rounded-full overflow-hidden">
            <div className="w-1/3 bg-[#064e3b]"></div>
            <div className="w-1/3 bg-white"></div>
            <div className="w-1/3 bg-[#7f1d1d]"></div>
          </div>
        </div>

        {/* Tarjetas Principales */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, i) => (
            <div
              key={i}
              className="relative group bg-[#0b1728] rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col justify-between"
            >
              {/* Barra de color superior */}
              <div className="h-1.5 w-full" style={{ backgroundColor: card.accentColor }} />

              <div className="p-8 relative z-10 flex-1 flex flex-col justify-between">
                <div>
                  {/* Badge numeral */}
                  <div
                    className="inline-flex items-center justify-center w-10 h-10 border-2 font-black text-base mb-4 bg-white/80 backdrop-blur-sm"
                    style={{ borderColor: card.accentColor, color: card.accentColor }}
                  >
                    {card.numeral}
                  </div>

                  <h3
                    className="text-2xl font-black tracking-wider mb-3 text-white"
                    
                  >
                    {card.title}
                  </h3>

                  <p className="text-white text-base leading-relaxed font-normal relative z-10  backdrop-blur-[2px] rounded p-1">
                    {card.text}
                  </p>
                </div>
              </div>

              {/* Imagen / Marca de agua de fondo integrada */}
              <div 
                className="h-32 w-full opacity-20 group-hover:opacity-35 transition-opacity duration-300 bg-cover bg-center mix-blend-multiply"
                style={{ backgroundImage: `url(${card.bgPattern})` }}
              />
            </div>
          ))}
        </div>

        {/* Marco de Actuación: Línea de tiempo de Principios */}
        <div className="bg-[#0b1728] border border-[#d3c7b2] rounded-xl p-8 shadow-inner">
          <div className="mb-8">
            <p className="text-[#8c734b] text-[10px] font-bold tracking-[0.3em] uppercase mb-1">
              Marco de Actuación
            </p>
            <h4 className="text-[#FFFFFF] text-2xl font-black uppercase tracking-wider">
              Principios Fundamentales de Aguilas Aztecas
            </h4>
          </div>

          {/* Secuencia Horizontal (Línea conectora) */}
          <div className="relative">
            {/* Línea dorada conectora (Visible solo en desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-[#d3c7b2] -translate-y-6 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
              {principios.map((p, i) => {
                const IconComponent = p.icon;
                return (
                  <div key={i} className="flex flex-col items-center text-center group">
                    {/* Badge hexagonal / circular con icono */}
                    <div 
                      className="w-12 h-12 rounded-full bg-white  border-2 flex items-center justify-center shadow-md mb-3 group-hover:scale-110 transition-transform duration-200"
                      
                    >
                      <IconComponent className="w-5 h-5 " />
                    </div>

                    {/* Número de secuencia */}
                    <span 
                      className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white mb-2"
                      style={{ backgroundColor: p.color }}
                   S >
                      0{i + 1}
                    </span>

                    {/* Texto del principio */}
                    <p className="text-xs  text-white font-semibol leading-tight">
                      {p.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default MisionVision;
