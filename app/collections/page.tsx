import { Suspense } from "react";
import { getCollections } from "../../components/data/collection";
import CollectionsGrid from "@/components/collections";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata = {
  title: "Collections | Modern Ecommerce",
  description: "Browse our curated collections for every style and occasion",
};

export default async function CollectionsPage() {
  const collections = await getCollections();

  return (
    <div className="container2 px-4 py-8 md:py-12">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Collections</h1>
          <p className="text-muted-foreground mt-1">
            Browse our curated collections for every style and occasion
          </p>
        </div>
      </div>

      <Suspense fallback={<CollectionsLoading />}>
        <CollectionsGrid collections={collections} />
      </Suspense>
    </div>
  );
}

function CollectionsLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="aspect-[4/3] w-full relative rounded-lg overflow-hidden"
        >
          <Skeleton className="absolute inset-0" />
        </div>
      ))}
    </div>
  );
}
