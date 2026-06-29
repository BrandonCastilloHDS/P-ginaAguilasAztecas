import React, { useState } from 'react';

function Navegar() {
  const [añoSeleccionado, setAñoSeleccionado] = useState(2026);

  const años = [2026, 2025, 2024, 2023, 2022];

  return (
    <div className="w-full max-w-2xl mx-auto my-6 px-4">
      <div className="flex justify-between items-center gap-2 border-b border-gray-200 pb-2 overflow-x-auto no-scrollbar">
        {años.map((año) => {
          const esActivo = añoSeleccionado === año;
          
          return (
            <button
              key={año}
              onClick={() => setAñoSeleccionado(año)}
              className={`
                px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ease-in-out
                ${esActivo 
                  ? 'bg-blue-600 text-white shadow-md scale-105' 
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }
              `}
            >
              {año}
            </button>
          );
        })}
      </div>
      
     
    </div>
  );
}

export default Navegar;