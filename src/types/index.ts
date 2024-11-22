export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  category: string;
}