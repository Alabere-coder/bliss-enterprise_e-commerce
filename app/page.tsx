import Link from "next/link";
import { ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";
import ProductCard from "../components/ProductCards";
import {
  getFeaturedProducts,
  getNewArrivals,
} from "../components/data/products";
import HomePage from "@/components/Hero";
import NewArrivalsSection from "@/components/new-products";
import ImageSlider from "@/components/image-slidder";

const sliderImages = [
  {
    image:
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Premium Electronics Collection",
    description:
      "Explore cutting-edge tech from our best-selling gadgets and work-from-home essentials.",
    ctaText: "Shop Electronics",
    ctaLink: "/category/electronics?collection=tech-gadgets,work-from-home",
  },
  {
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Summer Style Refresh",
    description:
      "Lightweight fabrics and vibrant designs from our summer-essentials collection.",
    ctaText: "Shop Clothing",
    ctaLink: "/category/clothing?collection=summer-essentials",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1664193968894-b1257541f463?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Home & Living Essentials",
    description:
      "Upgrade your space with our curated selection of kitchen and home accessories.",
    ctaText: "Shop Home",
    ctaLink: "/category/home?collection=kitchen-essentials",
  },
  {
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Fitness Gear Sale",
    description:
      "20% off all fitness equipment including yoga mats, resistance bands, and dumbbells.",
    ctaText: "Shop Fitness",
    ctaLink: "/category/fitness?collection=fitness-gear",
  },
  {
    image:
      "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Bestselling Books",
    description:
      "Discover our top-rated books in fiction, self-improvement, and business.",
    ctaText: "Shop Books",
    ctaLink: "/category/books?collection=bestsellers",
  },

  // New slides
  {
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Beauty Must-Haves",
    description:
      "New arrivals in skincare and makeup from our beauty collection.",
    ctaText: "Shop Beauty",
    ctaLink:
      "/category/beauty?collection=skincare-essentials,makeup-must-haves",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Work From Home Essentials",
    description:
      "Boost productivity with our top-rated home office gear and accessories.",
    ctaText: "Shop Now",
    ctaLink: "/collection/work-from-home",
  },
  {
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Eco-Friendly Living",
    description:
      "Sustainable products that help reduce your environmental footprint.",
    ctaText: "Shop Green",
    ctaLink: "/category/eco-friendly",
  },
  {
    image:
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "New Tech Releases",
    description:
      "Just launched: The latest smartphones, laptops, and smart home devices.",
    ctaText: "View New Arrivals",
    ctaLink: "/category/electronics?sort=newest",
  },
  {
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Gift Ideas for Everyone",
    description:
      "Thoughtful presents for all occasions, from tech gadgets to beauty sets.",
    ctaText: "Find Gifts",
    ctaLink: "/collection/gift-ideas",
  },
];

export default async function Home() {
  const featuredProducts = await getFeaturedProducts();
  const newArrivals = await getNewArrivals();

  return (
    <div className="flex flex-col min-h-screen">
      <ImageSlider slides={sliderImages} />
      <HomePage />

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="p-2 bg-background rounded-full">
                <ShoppingBag className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Fast Delivery</h3>
              <p className="text-muted-foreground">
                delivery is almost free and Fast within the state.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="p-2 bg-background rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Satisfaction Guaranteed</h3>
              <p className="text-muted-foreground">
                30-day money-back guarantee.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="p-2 bg-background rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Secure Payments</h3>
              <p className="text-muted-foreground">
                Your payment information is always secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center">
        <NewArrivalsSection products={newArrivals} />
      </div>

      {/* Featured Products */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container2 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Featured Products
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Check out our most popular items this season.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/products">
              <Button variant="outline" size="lg">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center animate-on-scroll">
            <span className="inline-block text-xs uppercase tracking-wider text-gray-500 mb-2">
              What Customers Say
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">
              From Our Community
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The craftsmanship is exceptional. These pieces have transformed my living space into something truly special.",
                author: "Sarah Johnson",
                role: "Interior Designer",
              },
              {
                quote:
                  "Beautiful, functional, and thoughtfully made. Every product feels like it was designed specifically for my home.",
                author: "Michael Chen",
                role: "Architect",
              },
              {
                quote:
                  "The attention to detail is remarkable. I appreciate how each item balances aesthetic appeal with practical functionality.",
                author: "Emma Rodriguez",
                role: "Home Decor Enthusiast",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm animate-on-scroll"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <p className="text-gray-600 mb-4 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">
              Join Our Community
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive offers, new product
              announcements, and thoughtfully curated content.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5"
              />
              <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-900 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
