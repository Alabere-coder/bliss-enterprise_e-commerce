"use client";

import { useState } from "react";
import { ShoppingCart, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "./cart-provider";
import type { Product } from "./types/index";

export default function AddToCartButton({
  product,
  compact = false,
}: {
  product: Product;
  compact?: boolean;
}) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);

    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  if (compact) {
    return (
      <Button
        size="sm"
        variant="secondary"
        className="w-9 p-0"
        onClick={handleAddToCart}
        disabled={isAdded}
      >
        {isAdded ? (
          <Check className="h-4 w-4" />
        ) : (
          <ShoppingCart className="h-4 w-4" />
        )}
        <span className="sr-only">Add to cart</span>
      </Button>
    );
  }

  return (
    <Button onClick={handleAddToCart} className="w-full" disabled={isAdded}>
      {isAdded ? (
        <>
          <Check className="mr-2 h-4 w-4" /> Added to Cart
        </>
      ) : (
        <>
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </>
      )}
    </Button>
  );
}
