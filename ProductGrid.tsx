import { ProductCard } from "./ProductCard";
import { products } from "@/data/products";

export const ProductGrid = () => {
  return (
    <section className="py-12 px-4 bg-background">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">All Products</h2>
            <p className="text-muted-foreground">
              Browse our complete collection
            </p>
          </div>
          <a
            href="#all-products"
            className="text-primary hover:underline font-medium hidden md:block"
          >
            View All ({products.length})
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              id={product.id}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              rating={product.rating}
              reviews={product.reviews}
              image={product.image}
              discount={product.discount}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
