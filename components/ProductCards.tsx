import Link from "next/link";
import Image from "next/image";
import type { Product } from "./types/index";
import AddToCartButton from "./add-to-cart-button";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import WhatsAppShare from "./whatsapp/share-to";

export default function ProductCard({ product }: { product: Product }) {
  // Check if product is new (either explicitly marked or added within the last 30 days)
  const isNew =
    product.isNew || (product.dateAdded && isRecentlyAdded(product.dateAdded));

  return (
    <div className="border rounded-lg overflow-hidden group relative">
      {isNew && (
        <div className="absolute top-2 left-2 z-10">
          <Badge className="bg-primary hover:bg-primary">New</Badge>
        </div>
      )}

      <Link
        href={`/products/${product.id}`}
        className="block relative aspect-square"
      >
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </Link>

      <div className="p-4">
        <h3 className="font-medium truncate">
          <Link href={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="text-sm text-muted-foreground mb-3">{product.category}</p>
        <div className="flex items-center justify-between">
          <span className="font-semibold">${product.price.toFixed(2)}</span>
          <div className="flex items-center gap-1">
            <AddToCartButton product={product} compact />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm" variant="ghost" className="h-9 w-9 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">More options</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href={`/products/${product.id}`}>View Details</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <WhatsAppShare
                    product={product}
                    variant="ghost"
                    className="w-full justify-start px-2"
                  />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
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
