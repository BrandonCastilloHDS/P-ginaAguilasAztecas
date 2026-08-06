import React, { useState } from 'react';

function Navegar() {
  const [anioseleccionado, setanioseleccionado] = useState(2026);

  const anios = [2026];  //aquí se pondrán los anios de las ediciones para la navegación 
  const indiceSeleccionado = anios.indexOf(anioseleccionado);
  const posicionIndicador = `${((indiceSeleccionado + 0.5) / anios.length) * 100}%`;

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 mb-6 px-4">
      <div className="relative pt-16">
        <div className="absolute left-0 right-0 top-8 h-1 bg-[#0b1728]/15 rounded-full overflow-hidden">
          <div
            className="absolute top-0 h-full w-24 max-w-[20%] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#006847] via-[#E7E7E7] to-[#ce1126] transition-all duration-500 ease-out"
            style={{ left: posicionIndicador }}
          />
        </div>

        <img
          src="/img/aviones/Avion.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute top-0 h-12 w-16 -translate-x-1/2 object-contain drop-shadow-lg transition-all duration-500 ease-out md:h-14 md:w-20"
          style={{ left: posicionIndicador }}
        />
         {/*En clases agregar la clase de grid para activar la clase de abajo */}
         {/*En clases agregar la clase grid-col-n, donde n es la cantidad de anios que se agregaron en la constante de anios */}
        <div className=" items-center gap-2 border-b border-gray-200 pb-3">
        {anios.map((año) => {
          const esActivo = anioseleccionado === año;
          
          return (
            <button
              key={año}
              onClick={() => setanioseleccionado(año)}
              className={`
                min-w-0 px-2 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ease-in-out
                ${esActivo 
                  ? 'bg-[#0b1728] text-white shadow-md scale-105' 
                  : 'text-white hover:bg-[#0b1728]/5 hover:text-[#0b1728]'
                }
              `}
            >
              {año}
            </button>
          );
        })}
        </div>
      </div>
    </div>
  );
}

export default Navegar;
