import React, { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 shadow-lg bg-[#00519e] text-white">
            <div className="flex justify-between items-center px-4 md:px-6 py-4">

                <div className="flex items-center">
                    <a href="https://www.f-airmexico.com.mx/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/img/logos/FAMEX2027.png"
                            alt="Logo FAMEX2027"
                            className="h-14 md:h-20 drop-shadow-md hover:scale-105 transition-transform duration-300"
                        />
                    </a>

                    <h1 className="ml-6 md:ml-12 text-xl md:text-3xl font-extrabold tracking-widest uppercase drop-shadow-md text-transparent bg-clip-text bg-linear-to-r from-white to-gray-300">
                        Águilas Aztecas
                    </h1>
                </div>

                <div className="hidden md:flex gap-6 font-medium text-lg">
                    <a href="#" className="relative group transition-colors duration-300 hover:text-blue-200">
                        Sobre Nosotros
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#" className="relative group transition-colors duration-300 hover:text-blue-200">
                        Galería
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#" className="relative group transition-colors duration-300 hover:text-blue-200">
                        Aviones
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </div>

                <button
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>

            </div>

            {/* Menú Móvil */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'max-h-56 opacity-100' : 'max-h-0 opacity-0'
                } bg-[#004080]`}
            >
                <div className="flex flex-col px-4 py-4 gap-4 font-medium">
                    <a
                        href="#"
                        className="hover:text-blue-300 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Sobre Nosotros
                    </a>
                    <a
                        href="#"
                        className="hover:text-blue-300 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Galería
                    </a>
                    <a
                        href="#"
                        className="hover:text-blue-300 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Aviones
                    </a>
                </div>
            </div>
        </nav>
    );
}