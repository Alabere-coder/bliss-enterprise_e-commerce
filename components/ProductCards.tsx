import Link from "next/link";
import Image from "next/image";
import type { Product } from "./types/index";
import AddToCartButton from "./add-to-cart-button";
import { Badge } from "@/components/ui/badge";

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
          <AddToCartButton product={product} compact />
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

// import React, { useState } from "react";
// import Link from "next/link";
// import { Product } from "./types";

// interface ProductCardProps {
//   product: Product;
// }

// export function ProductCard({ product }: ProductCardProps) {
//   const [isHovered, setIsHovered] = useState(false);
//   const [imageLoaded, setImageLoaded] = useState(false);

//   return (
//     <Link
//       href={`/product/${product.id}`}
//       className="product-card group"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className="image-container aspect-[3/4] mb-4 bg-gray-100 overflow-hidden rounded-lg">
//         <img
//           src={
//             isHovered && product.hoverImage ? product.hoverImage : product.image
//           }
//           alt={product.name}
//           className={`image w-full h-full object-cover transition-all duration-700 ${
//             imageLoaded ? "image-loaded" : "image-loading"
//           }`}
//           onLoad={() => setImageLoaded(true)}
//         />
//       </div>

//       <div className="product-details transition-opacity">
//         <p className="text-xs text-gray-500 mb-1">{product.category}</p>
//         <h3 className="text-base font-medium text-gray-900 mb-1">
//           {product.name}
//         </h3>
//         <div className="flex items-center justify-between">
//           <p className="text-sm font-medium">
//             ${product.price.toFixed(2)}
//             {product.compareAtPrice && (
//               <span className="text-gray-400 line-through ml-2">
//                 ${product.compareAtPrice.toFixed(2)}
//               </span>
//             )}
//           </p>
//           {product.isNew && (
//             <span className="inline-block bg-black text-white text-xs px-2 py-1 rounded">
//               New
//             </span>
//           )}
//           {product.compareAtPrice && !product.isNew && (
//             <span className="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded">
//               Sale
//             </span>
//           )}
//         </div>
//       </div>
//     </Link>
//   );
// }
