import React, { useState } from 'react';

function Navegar() {
  const [añoSeleccionado, setAñoSeleccionado] = useState(2026);

  const años = [2026, 2025, 2024, 2023, 2022];
  const indiceSeleccionado = años.indexOf(añoSeleccionado);
  const posicionIndicador = `${((indiceSeleccionado + 0.5) / años.length) * 100}%`;

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 mb-6 px-4">
      <div className="relative pt-16">
        <div className="absolute left-0 right-0 top-8 h-1 bg-[#00296b]/15 rounded-full overflow-hidden">
          <div
            className="absolute top-0 h-full w-24 max-w-[20%] -translate-x-1/2 rounded-full bg-[#fdc400] transition-all duration-500 ease-out"
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

        <div className="grid grid-cols-5 items-center gap-2 border-b border-gray-200 pb-3">
        {años.map((año) => {
          const esActivo = añoSeleccionado === año;
          
          return (
            <button
              key={año}
              onClick={() => setAñoSeleccionado(año)}
              className={`
                min-w-0 px-2 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ease-in-out
                ${esActivo 
                  ? 'bg-[#00296b] text-white shadow-md scale-105' 
                  : 'text-gray-600 hover:bg-[#00296b]/5 hover:text-[#00296b]'
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
