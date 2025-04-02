import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SearchNotFound() {
  return (
    <div className="container flex flex-col items-center justify-center py-16 text-center">
      <h1 className="text-3xl font-bold mb-4">No Search Query Provided</h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        Please enter a search term to find products in our store.
      </p>
      <Link href="/products">
        <Button>Browse All Products</Button>
      </Link>
    </div>
  );
}
