import React from 'react';
import { Building, Factory, Siren } from 'lucide-react';
import { services } from '../data';

const iconMap: { [key: string]: React.ReactNode } = {
  building: <Building size={32} />,
  factory: <Factory size={32} />,
  siren: <Siren size={32} />
};

export default function Services() {
  return (
    <section id="services" className="bg-gray-900 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Servicios especializados de vaciado</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Ofrecemos soluciones integrales y profesionales de vaciado adaptadas a cada tipo de local comercial, industrial o espacio de oficinas en Barcelona. Nuestro equipo especializado garantiza un servicio eficiente y respetuoso con el medio ambiente.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-black p-6 md:p-8 rounded-lg border border-gray-800 hover:border-yellow-400 transition-colors">
              <div className="text-yellow-400 mb-4">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4 text-sm md:text-base">{service.description}</p>
              <p className="text-yellow-400 font-semibold">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}