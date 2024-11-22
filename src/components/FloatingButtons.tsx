import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col gap-3 z-50">
      <a
        href="https://wa.link/qfc6gf"
        className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={22} />
      </a>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="bg-yellow-400 hover:bg-yellow-500 text-black p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
          aria-label="Volver arriba"
        >
          <ArrowUp size={22} />
        </button>
      )}
    </div>
  );
}