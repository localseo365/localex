import React from 'react';
import { Clock, Leaf, Users, Recycle, Heart, Shield } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Conoce LOCALEX: líderes en vaciado de locales en Barcelona
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Desde 2008, nos hemos especializado en ofrecer soluciones profesionales de vaciado de locales, comprometidos con la excelencia, la sostenibilidad y la satisfacción total de nuestros clientes en Barcelona y su área metropolitana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="text-center">
            <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="text-black" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">15 Años de Experiencia Profesional</h3>
            <p className="text-gray-400">
              Más de una década y media ofreciendo servicios especializados de vaciado de locales en Barcelona, con miles de proyectos completados exitosamente y clientes satisfechos que avalan nuestra profesionalidad y experiencia.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="text-black" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Compromiso Medioambiental</h3>
            <p className="text-gray-400">
              Implementamos prácticas sostenibles en cada proyecto, asegurando la correcta gestión y reciclaje de residuos. Colaboramos con centros de reciclaje autorizados y organizaciones benéficas para dar una segunda vida a mobiliario y equipamiento en buen estado.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="text-black" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Equipo Altamente Cualificado</h3>
            <p className="text-gray-400">
              Nuestro equipo está formado por profesionales especializados en vaciado de locales, con amplia experiencia en el sector y formación continua en las últimas técnicas y normativas de seguridad y medio ambiente.
            </p>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Nuestra Misión y Valores</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Shield className="text-yellow-400 mt-1" size={24} />
                  <p className="text-gray-400">
                    Nos esforzamos por ser la referencia en el sector del vaciado de locales en Barcelona, ofreciendo soluciones integrales que combinan eficiencia, profesionalidad y respeto por el medio ambiente. Nuestro objetivo es superar las expectativas de nuestros clientes en cada proyecto.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <Heart className="text-yellow-400 mt-1" size={24} />
                  <p className="text-gray-400">
                    Nuestros valores fundamentales incluyen la transparencia en cada presupuesto, el compromiso con la calidad del servicio, la responsabilidad medioambiental y la atención personalizada a cada cliente.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Compromiso con la Sostenibilidad</h3>
              <div className="flex items-start gap-4">
                <Recycle className="text-yellow-400 mt-1" size={24} />
                <p className="text-gray-400">
                  Mantenemos alianzas estratégicas con centros de reciclaje certificados y organizaciones benéficas en Barcelona para asegurar que el mobiliario y equipamiento en buen estado tenga una segunda oportunidad. Nuestro compromiso con la sostenibilidad se refleja en cada aspecto de nuestro trabajo, desde la planificación hasta la ejecución final del proyecto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}