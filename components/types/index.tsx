export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  features?: string[];
  isNew?: boolean;
  dateAdded?: string;
  collectionIds?: string[];
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  featured?: boolean;
  slug: string;
}
