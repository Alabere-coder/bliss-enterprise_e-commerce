import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getProductById,
  getRelatedProducts,
} from "../../../components/data/products";
import AddToCartButton from "@/components/add-to-cart-button";
import ProductCard from "@/components/ProductCards";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = await getProductById(resolvedParams.id);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | Modern Ecommerce`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const resolvedParams = await params;
  const product = await getProductById(resolvedParams.id);

  if (!product) {
    notFound();
  }

  const relatedProducts = await getRelatedProducts(
    product.category,
    product.id
  );

  // Check if product is new
  const isNew =
    product.isNew || (product.dateAdded && isRecentlyAdded(product.dateAdded));

  return (
    <div className="container2 px-4 py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="relative aspect-square">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          {isNew && (
            <div className="absolute top-4 left-4">
              <Badge className="bg-primary hover:bg-primary">New</Badge>
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-semibold mt-2">
            ${product.price.toFixed(2)}
          </p>

          <div className="mt-4 text-muted-foreground">
            {product.description}
          </div>

          {product.collectionIds && product.collectionIds.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {product.collectionIds.map((collectionId) => (
                <Link key={collectionId} href={`/collections/${collectionId}`}>
                  <Badge
                    variant="outline"
                    className="cursor-pointer hover:bg-secondary"
                  >
                    {collectionId
                      .split("-")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </Badge>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-8">
            <AddToCartButton product={product} />
          </div>

          <div className="mt-8 border-t pt-8">
            <h3 className="font-medium mb-2">Product Details</h3>
            <ul className="list-disc pl-5 text-sm text-muted-foreground">
              <li>Category: {product.category}</li>
              <li>SKU: {product.id}</li>
              {product.features?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Helper function to check if a product was added within the last 30 days
function isRecentlyAdded(dateString: string): boolean {
  const productDate = new Date(dateString);
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  return productDate >= thirtyDaysAgo;
}
