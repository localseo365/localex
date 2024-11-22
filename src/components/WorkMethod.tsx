import React from 'react';
import { PhoneCall, ClipboardCheck, Calculator, Truck, CheckCircle } from 'lucide-react';

export default function WorkMethod() {
  const steps = [
    {
      icon: <PhoneCall size={32} />,
      title: 'Contacto',
      description: 'Solicita tu presupuesto online o por teléfono.'
    },
    {
      icon: <ClipboardCheck size={32} />,
      title: 'Evaluación',
      description: 'Visitamos el local para evaluar el trabajo.'
    },
    {
      icon: <Calculator size={32} />,
      title: 'Presupuesto',
      description: 'Te enviamos una oferta clara y detallada.'
    },
    {
      icon: <Truck size={32} />,
      title: 'Ejecución',
      description: 'Equipo profesional ejecuta el vaciado en tiempo récord.'
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Finalización',
      description: 'Limpieza y entrega del espacio listo.'
    }
  ];

  return (
    <section className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Así trabajamos en LOCALEX
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Proceso profesional y eficiente para garantizar los mejores resultados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-black p-6 rounded-lg border border-gray-800 hover:border-yellow-400 transition-colors text-center">
                <div className="text-yellow-400 mb-4 flex justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-yellow-400" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}