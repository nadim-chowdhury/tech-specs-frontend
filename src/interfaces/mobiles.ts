export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  ram: string;
  storage: string;
  image: string;
}

export interface Filter {
  brand: string;
  priceRange: number[];
  ram: string;
  storage: string;
}
