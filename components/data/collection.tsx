import type { Collection } from "../types/index";
import { getProducts } from "./products";

// Collection section

const collections: Collection[] = [
  {
    id: "summer-essentials",
    name: "Summer Essentials",
    description:
      "Everything you need for the perfect summer - from beach accessories to lightweight clothing.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
    featured: true,
    slug: "summer-essentials",
  },
  {
    id: "work-from-home",
    name: "Work From Home",
    description:
      "Upgrade your home office with comfortable essentials and productivity boosters.",
    image:
      "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
    featured: true,
    slug: "work-from-home",
  },
  {
    id: "eco-friendly",
    name: "Eco-Friendly",
    description: "Sustainable products that are good for you and the planet.",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
    featured: true,
    slug: "eco-friendly",
  },
  {
    id: "tech-gadgets",
    name: "Tech Gadgets",
    description: "The latest and greatest in technology and smart devices.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
    featured: false,
    slug: "tech-gadgets",
  },
  {
    id: "fitness-gear",
    name: "Fitness Gear",
    description:
      "Everything you need to stay fit and active, from workout equipment to activewear.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
    featured: false,
    slug: "fitness-gear",
  },
  {
    id: "gift-ideas",
    name: "Gift Ideas",
    description:
      "Perfect presents for every occasion - birthdays, anniversaries, or just because.",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
    featured: false,
    slug: "gift-ideas",
  },
];

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getCollections(): Promise<Collection[]> {
  await delay(500); // Simulate network delay
  return collections;
}

export async function getFeaturedCollections(): Promise<Collection[]> {
  await delay(500); // Simulate network delay
  return collections.filter((collection) => collection.featured);
}

export async function getCollectionBySlug(
  slug: string
): Promise<Collection | undefined> {
  await delay(300); // Simulate network delay
  return collections.find((collection) => collection.slug === slug);
}

export async function getProductsByCollection(collectionId: string) {
  await delay(500); // Simulate network delay

  // Get all products
  const allProducts = await getProducts();

  // Filter products by collection ID
  return allProducts.filter(
    (product) =>
      product.collectionIds && product.collectionIds.includes(collectionId)
  );
}
