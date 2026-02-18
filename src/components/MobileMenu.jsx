// src/components/MobileMenu.jsx
import React, { useState } from 'react';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          )}
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-primary text-white shadow-lg py-2 z-20">
          <ul className="flex flex-col items-center space-y-2">
            <li><a href="/" className="block py-2 px-4 hover:bg-secondary">Inicio</a></li>
            <li><a href="/quienes-somos" className="block py-2 px-4 hover:bg-secondary">Quiénes Somos</a></li>
            <li className="relative group w-full text-center">
              <button className="block py-2 px-4 hover:bg-secondary w-full">Soluciones</button>
              <ul className="bg-primary text-white space-y-1 py-1">
                <li><a href="/seguridad-electronica" className="block py-2 px-4 hover:bg-secondary text-sm">Seguridad Electrónica</a></li>
                <li><a href="/seguridad-electronica#cctv" className="block py-2 px-4 hover:bg-secondary text-sm">CCTV</a></li>
                <li><a href="/seguridad-electronica#gps" className="block py-2 px-4 hover:bg-secondary text-sm">GPS</a></li>
                <li><a href="/seguridad-electronica#alarmas" className="block py-2 px-4 hover:bg-secondary text-sm">Alarmas</a></li>
                <li><a href="/seguridad-electronica#control-acceso" className="block py-2 px-4 hover:bg-secondary text-sm">Control de Acceso</a></li>
                <li><a href="/telecomunicaciones" className="block py-2 px-4 hover:bg-secondary text-sm">Telecomunicaciones</a></li>
              </ul>
            </li>
            <li><a href="/productos" className="block py-2 px-4 hover:bg-secondary">Productos</a></li>
            <li><a href="/clientes" className="block py-2 px-4 hover:bg-secondary">Clientes</a></li>
            <li>
              <a href="/contactos" className="bg-accent text-white px-4 py-2 rounded hover:bg-secondary block mt-2">Contacto</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
