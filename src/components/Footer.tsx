import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Linkedin, Twitter, X } from 'lucide-react';

export default function Footer() {
  const [showCookieNotice, setShowCookieNotice] = useState(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem('cookieAccepted');
    if (!cookieAccepted) {
      setShowCookieNotice(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setShowCookieNotice(false);
  };

  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-yellow-400 text-xl font-bold mb-4">LOCALEX</h3>
            <p className="mb-4">Servicios profesionales de vaciado de locales en Barcelona. Disponibles 24/7 para todas tus necesidades de vaciado comercial.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-400"><Facebook size={20} /></a>
              <a href="#" className="hover:text-yellow-400"><Twitter size={20} /></a>
              <a href="#" className="hover:text-yellow-400"><Instagram size={20} /></a>
              <a href="#" className="hover:text-yellow-400"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400">Vaciado Comercial</a></li>
              <li><a href="#" className="hover:text-yellow-400">Servicios de Urgencia</a></li>
              <li><a href="#" className="hover:text-yellow-400">Limpieza Industrial</a></li>
              <li><a href="#" className="hover:text-yellow-400">Gestión de Residuos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-yellow-400">Proyectos</a></li>
              <li><a href="#" className="hover:text-yellow-400">Testimonios</a></li>
              <li><a href="#" className="hover:text-yellow-400">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-yellow-400">Términos de Servicio</a></li>
              <li><a href="#" className="hover:text-yellow-400">Política de Cookies</a></li>
              <li><a href="#" className="hover:text-yellow-400">Mapa del Sitio</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} LOCALEX. Todos los derechos reservados.</p>
        </div>
      </div>

      {showCookieNotice && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 p-4 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-300">
              Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación.
            </p>
            <div className="flex gap-4">
              <button
                onClick={acceptCookies}
                className="bg-yellow-400 text-black px-6 py-2 rounded-md text-sm font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap"
              >
                Aceptar cookies
              </button>
              <button
                onClick={() => setShowCookieNotice(false)}
                className="text-gray-300 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}