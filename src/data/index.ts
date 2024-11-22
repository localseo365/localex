import { Service, Testimonial, Project } from '../types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Vaciado de Locales Comerciales',
    description: 'Servicio integral de vaciado para todo tipo de espacios comerciales, incluyendo oficinas, tiendas y almacenes. Realizamos el trabajo de forma rápida y profesional, garantizando la correcta gestión de todos los elementos retirados.',
    price: 'Desde 500€',
    icon: 'building'
  },
  {
    id: '2',
    title: 'Servicio de Urgencia',
    description: 'Disponibles 24 horas al día, 7 días a la semana para situaciones que requieren atención inmediata. Respuesta rápida y eficiente para minimizar cualquier interrupción en su negocio.',
    price: 'Desde 800€',
    icon: 'siren'
  },
  {
    id: '3',
    title: 'Limpieza Industrial',
    description: 'Servicio especializado de limpieza y vaciado para instalaciones industriales, incluyendo fábricas, naves y espacios de producción. Cumplimos con todas las normativas de seguridad y medio ambiente.',
    price: 'Presupuesto Personalizado',
    icon: 'factory'
  },
  {
    id: '4',
    title: 'Retirada de Mobiliario y Equipamiento',
    description: 'Servicio profesional de desmontaje, embalaje y retirada de todo tipo de mobiliario y equipamiento de oficina. Gestionamos el reciclaje y la donación de elementos en buen estado.',
    price: 'Desde 300€',
    icon: 'building'
  },
  {
    id: '5',
    title: 'Limpieza Posterior al Vaciado',
    description: 'Servicio completo de limpieza y acondicionamiento tras el vaciado, dejando el espacio en perfectas condiciones para su siguiente uso. Incluye limpieza profunda y gestión de residuos.',
    price: 'Desde 200€',
    icon: 'building'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'María Rodríguez',
    company: 'Barcelona Real Estate Group',
    content: 'LOCALEX superó todas nuestras expectativas al transformar nuestro almacén abandonado en un espacio totalmente limpio y listo para alquilar en solo 48 horas. Su equipo profesional y eficiente hizo que todo el proceso fuera sin complicaciones. Recomiendo sus servicios sin dudarlo.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: '2',
    name: 'Carlos Mendoza',
    company: 'Retail Solutions BCN',
    content: 'El servicio de urgencia de LOCALEX fue fundamental cuando necesitábamos preparar rápidamente nuestro local comercial para un nuevo inquilino. Su respuesta inmediata y trabajo profesional nos permitió cumplir con nuestros plazos. Un servicio excepcional que recomendaré a todos mis contactos del sector.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150'
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Vaciado Completo de Complejo de Oficinas',
    description: 'Proyecto integral de vaciado de un espacio de oficinas de 2000m² en el distrito empresarial de Barcelona. Incluyo desmontaje de mobiliario, gestión de residuos electrónicos y acondicionamiento completo del espacio para su renovación.',
    beforeImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    afterImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200',
    category: 'Oficina'
  },
  {
    id: '2',
    title: 'Transformación de Almacén Industrial',
    description: 'Proyecto de vaciado y limpieza de una nave industrial de 1500m² en el polígono industrial de Barcelona. El trabajo incluyó la retirada de maquinaria pesada, gestión de residuos industriales y limpieza especializada para preparar el espacio para nuevos inquilinos.',
    beforeImage: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=1200',
    afterImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
    category: 'Industrial'
  }
];