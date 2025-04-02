import { getProducts } from "../components/data/products";
import ProductCard from "./ProductCards";

export default async function ProductList({
  category,
  sort,
}: {
  category?: string;
  sort?: string;
}) {
  const products = await getProducts(category, sort);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
