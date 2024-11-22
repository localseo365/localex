import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = 'https://wa.link/qfc6gf';
  };

  return (
    <section id="contact" className="bg-black py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">Contacta con Nosotros</h2>
            <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base">
              Ponte en contacto para un presupuesto gratuito o servicio de urgencia
            </p>

            <div className="space-y-4 md:space-y-6">
              <a href="https://wa.link/qfc6gf" className="flex items-center gap-4">
                <div className="bg-yellow-400 p-3 rounded-full">
                  <Phone className="text-black" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Teléfono</h3>
                  <p className="text-gray-400">644 613 451</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="bg-yellow-400 p-3 rounded-full">
                  <Mail className="text-black" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-gray-400">info@localex.vercel.app</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-yellow-400 p-3 rounded-full">
                  <MapPin className="text-black" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Dirección</h3>
                  <p className="text-gray-400">Carrer de Francesc Boix Campo, 7<br />Sants-Montjuïc, 08038 Barcelona</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-900 p-6 md:p-8 rounded-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2 text-sm">Nombre</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-black text-white px-4 py-2 md:py-3 rounded-md border border-gray-800 focus:border-yellow-400 focus:outline-none text-sm md:text-base"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2 text-sm">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-black text-white px-4 py-2 md:py-3 rounded-md border border-gray-800 focus:border-yellow-400 focus:outline-none text-sm md:text-base"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="mb-4 md:mb-6">
              <label htmlFor="phone" className="block text-gray-400 mb-2 text-sm">Teléfono</label>
              <input
                type="tel"
                id="phone"
                className="w-full bg-black text-white px-4 py-2 md:py-3 rounded-md border border-gray-800 focus:border-yellow-400 focus:outline-none text-sm md:text-base"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <div className="mb-4 md:mb-6">
              <label htmlFor="message" className="block text-gray-400 mb-2 text-sm">Mensaje</label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-black text-white px-4 py-2 md:py-3 rounded-md border border-gray-800 focus:border-yellow-400 focus:outline-none text-sm md:text-base"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-2 md:py-3 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-yellow-300 transition-colors text-sm md:text-base"
            >
              <Send size={20} />
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}