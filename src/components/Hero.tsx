import React from 'react';
import { ArrowRight, Clock, Shield, Trophy } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-black min-h-[calc(100vh-4rem)] flex items-center pt-16 md:pt-0">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2070"
          alt="Espacio de oficina profesional en Barcelona preparado para vaciado"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="lg:w-2/3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Servicios profesionales de vaciado de locales en Barcelona
          </h1>
          <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8">
            Expertos en vaciado integral de locales comerciales, oficinas y naves industriales en Barcelona y área metropolitana. Servicio disponible 24/7 para emergencias, con más de 15 años de experiencia en el sector.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12">
            <a href="https://wa.link/qfc6gf" className="bg-yellow-400 text-black px-6 py-3 rounded-md flex items-center justify-center gap-2 font-semibold hover:bg-yellow-300 transition-colors text-sm md:text-base">
              Solicitar Presupuesto Gratuito
              <ArrowRight size={20} />
            </a>
            <a href="#services" className="border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 hover:text-black transition-colors text-center text-sm md:text-base">
              Descubrir Nuestros Servicios
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            <div className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
              <Clock className="text-yellow-400 flex-shrink-0" size={24} />
              <span>Atención 24/7: 644 613 451</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
              <Shield className="text-yellow-400 flex-shrink-0" size={24} />
              <span>Servicio 100% Asegurado</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
              <Trophy className="text-yellow-400 flex-shrink-0" size={24} />
              <span>15+ Años de Experiencia</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}