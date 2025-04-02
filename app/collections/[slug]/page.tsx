import { Suspense } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getCollectionBySlug,
  getProductsByCollection,
} from "../../..//components/data/collection";
import ProductCard from "@/components/ProductCards";
import { Skeleton } from "@/components/ui/skeleton";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const collection = await getCollectionBySlug(resolvedParams.slug);

  if (!collection) {
    return {
      title: "Collection Not Found",
    };
  }

  return {
    title: `${collection.name} | Modern Ecommerce`,
    description: collection.description,
  };
}

export default async function CollectionPage({ params }: PageProps) {
  const resolvedParams = await params;
  const collection = await getCollectionBySlug(resolvedParams.slug);

  if (!collection) {
    notFound();
  }

  const products = await getProductsByCollection(collection.id);
  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-8">
        <Image
          src={collection.image || "/placeholder.svg"}
          alt={collection.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white p-6 max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {collection.name}
            </h1>
            <p className="text-lg text-white/90">{collection.description}</p>
          </div>
        </div>
      </div>

      <Suspense fallback={<ProductsLoading />}>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-xl font-medium mb-2">No products found</h2>
            <p className="text-muted-foreground">
              This collection does not have any products yet.
            </p>
          </div>
        )}
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
