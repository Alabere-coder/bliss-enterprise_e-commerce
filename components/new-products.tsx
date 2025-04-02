import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCards";
import type { Product } from "./types/index";

export default function NewArrivalsSection({
  products,
}: {
  products: Product[];
}) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-20 bg-background">
      <div className="container2 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            Just Landed
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              New Arrivals
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Check out our latest products fresh off the shelves.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/products?sort=newest">
            <Button size="lg">View All New Arrivals</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
