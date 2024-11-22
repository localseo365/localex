import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-black/95' : 'bg-black/80'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-yellow-400 text-xl font-bold">LOCALEX</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#services" className="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm">Servicios</a>
              <a href="#projects" className="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm">Proyectos</a>
              <a href="#testimonials" className="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm">Testimonios</a>
              <a href="https://wa.link/qfc6gf" className="bg-yellow-400 text-black px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium hover:bg-yellow-300 transition-colors">
                <Phone size={18} />
                Contactar
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-yellow-400 p-2"
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full bg-black/95 border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a 
              href="#services" 
              className="text-gray-300 hover:text-yellow-400 block px-3 py-2 text-base"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </a>
            <a 
              href="#projects" 
              className="text-gray-300 hover:text-yellow-400 block px-3 py-2 text-base"
              onClick={() => setIsOpen(false)}
            >
              Proyectos
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-300 hover:text-yellow-400 block px-3 py-2 text-base"
              onClick={() => setIsOpen(false)}
            >
              Testimonios
            </a>
            <a 
              href="https://wa.link/qfc6gf" 
              className="bg-yellow-400 text-black px-4 py-2 rounded-md flex items-center gap-2 mx-3 my-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              <Phone size={18} />
              Contactar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}