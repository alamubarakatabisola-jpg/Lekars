export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'Guitar' | 'Keyboard & Piano' | 'Audio Equipment' | 'Microphones' | 'Drums & Percussion' | 'Accessories';
  available: boolean;
  features?: string[];
  specs?: Record<string, string>;
}

export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  details: string[];
  turnaroundTime?: string;
  recommendedFor?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceOrProduct: string;
  message: string;
}
