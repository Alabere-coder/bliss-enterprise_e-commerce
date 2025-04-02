import { Suspense } from "react";
import ProductList from "@/components/product-list";
import ProductFilters from "@/components/product-filters";
import ProductsLoading from "../../components/loading";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // Await the searchParams promise
  const resolvedSearchParams = await searchParams;

  const category =
    typeof resolvedSearchParams.category === "string"
      ? resolvedSearchParams.category
      : undefined;

  const sort =
    typeof resolvedSearchParams.sort === "string"
      ? resolvedSearchParams.sort
      : undefined;

  return (
    <div className="container2 px-4 py-8 md:py-12">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-64 flex-shrink-0">
          <ProductFilters />
        </div>

        <div className="flex-1">
          <Suspense fallback={<ProductsLoading />}>
            <ProductList category={category} sort={sort} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
