import { searchProducts } from "./data/products";
import ProductCard from "./ProductCards";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function SearchResults({ query }: { query: string }) {
  const products = await searchProducts(query);

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-medium mb-4">No products found</h2>
        <p className="text-muted-foreground mb-8">
          We could not find any products matching {query}.
        </p>
        <Link href="/products">
          <Button>Browse All Products</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
