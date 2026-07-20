const recentVideos = [
  {
    id: 1,
    title: "Ceremonia inaugural de la Copa Mundial de Futbol 2026",

    description: [
    'Las instalaciones del estadio “Ciudad de México” se constituyeron en un escenario de relevancia mundial donde la Escuadrilla Acrobática “Águilas Aztecas” engalanó el cielo del estadio de futbol, con una demostración aérea de precisión y profesionalismo. Esta agrupación de la Fuerza Aérea Mexicana se refleja como un símbolo de modernidad, capacidad técnica y acercamiento con la sociedad; realizó evoluciones que captaron la atención de millones de espectadores dentro y fuera del estadio al realizar maniobras adornadas con humo tricolor.',
    'Dos helicópteros UH-60 de la Fuerza Aérea y de la Guardia Nacional protagonizaron uno de los momentos más emotivos y representativos del acto protocolario, al realizar un sobrevuelo llevando suspendida una bandera monumental de México ante la mirada de miles de asistentes y millones de espectadores alrededor del mundo; estas acciones se consolidaron como una nueva expresión del talento, preparación y excelencia de los pilotos militares mexicanos.'],
    src: "/img/aviones/Ceremonia_inagural_de_la_copa.mp4",
    orientation: "vertical",
  },

  {
    id: 2,
    title: "El cielo de Zapopan se vistió de tricolor.",
    description: [
      "En el marco del partido de la Copa Mundial de Futbol 2026, México vs. Corea del Sur, realizado el 18 de junio de 2026 en el estadio Guadalajara en Zapopan, Jalisco, la Escuadrilla Acrobática “Águilas Aztecas” de la Fuerza Aérea Mexicana engalanó el cielo con una demostración aérea de precisión, disciplina y profesionalismo.",
     
    ],
    src: "/img/aviones/video2.mp4",
    orientation: "vertical",
  },

  {
    id: 3,
    title: "Águilas Aztecas: precisión, disciplina y pasión por volar.",

    description: [
      "El 31 de mayo de 2026, la Escuadrilla Acrobática “Águilas Aztecas” de la Fuerza Aérea Mexicana cautivó a jaliscienses, turistas nacionales y extranjeros que se reunieron para conmemorar el 108 aniversario de la fundación del municipio y 58 Aniversario de la elevación a ciudad de Puerto Vallarta, Jalisco.",
      "La participación de la Escuadrilla Acrobática Águilas Aztecas demostró en cada una de las maniobras ejecutadas, el alto nivel de adiestramiento, habilidades, destrezas, disciplina, valor y vocación de servicio que distinguen a las mujeres y hombres de la Fuerza Aérea Mexicana."
    ],
    src: "/img/aviones/AguilasAztecas_video3.mp4",
    orientacion: "horizontal",
  },
];

function RecentEventVideos() {
  return (
    <section className="bg-[#f4f0e8] py-20">
    <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16">
            <p className="text-[#006847] uppercase tracking-[0.35em] font-black text-xs">
                Eventos recientes
            </p>

            <h2 className="text-5xl font-black mt-3 text-[#0b1728]">
                VIDEOS DESTACADOS
            </h2>
        </div>

        <div className="space-y-14">

            {recentVideos.map((video) => (

                <article
                    key={video.id}
                    className={`
                        grid
                        gap-12
                        bg-white
                        rounded-2xl
                        shadow-xl
                        overflow-hidden
                        p-7
                        hover:shadow-2xl
                        transition
                        ${
                            video.orientation === "vertical"
                                ? "lg:grid-cols-[260px_1fr]"
                                : "lg:grid-cols-[450px_1fr]"
                        }
                    `}
                >

                    {/* VIDEO */}

                    <div className="flex justify-center lg:justify-start">

                        <video
                        controls
                        preload="metadata"
                        className={`
                            rounded-2xl
                            shadow-2xl
                            border
                            border-gray-200
                            bg-black
                            ${
                                video.orientation === "vertical"
                                    ? "w-[260px] aspect-[9/16] object-cover"
                                    : "w-full max-w-[650px] aspect-video object-cover"
                            }
                        `}
                    >
                        <source src={video.src} type="video/mp4" />
                    </video>

                    </div>

                    {/* INFORMACIÓN */}

                    <div>

                        <h3 className="text-4xl font-black mt-5 text-[#0b1728]">
                            {video.title}
                        </h3>

                        

                        <div className="space-y-4 mt-8">

                            {video.description.map((text,index)=>(
                                <p
                                    key={index}
                                    className="text-gray-900 leading-8 text-lg text-justify text-center"
                                >
                                    {text}
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
