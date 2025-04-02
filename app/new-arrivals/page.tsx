import { Suspense } from "react";
import { getNewArrivals } from "../../components/data/products";
import ProductCard from "@/components/ProductCards";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata = {
  title: "New Arrivals | Modern Ecommerce",
  description: "Check out our latest products fresh off the shelves",
};

export default async function NewArrivalsPage() {
  const newArrivals = await getNewArrivals();

  return (
    <div className="container2 px-4 py-8 md:py-12">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">New Arrivals</h1>
          <p className="text-muted-foreground mt-1">
            Check out our latest products fresh off the shelves
          </p>
        </div>
      </div>

      <Suspense fallback={<ProductsLoading />}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Suspense>
    </div>
  );
}

function ProductsLoading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="border rounded-lg p-4">
          <Skeleton className="h-48 w-full rounded-md mb-4" />
          <Skeleton className="h-4 w-3/4 mb-2" />
          <Skeleton className="h-4 w-1/2 mb-4" />
          <Skeleton className="h-8 w-28" />
        </div>
      ))}
    </div>
  );
}
