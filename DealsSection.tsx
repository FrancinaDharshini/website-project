import { ProductCard } from "./ProductCard";
import { products } from "@/data/products";

export const DealsSection = () => {
  // Get products with discounts
  const dealsProducts = products.filter((p) => p.discount && p.discount > 0);

  return (
    <section className="py-12 px-4">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Today's Hot Deals</h2>
            <p className="text-muted-foreground">Limited time offers on top products</p>
          </div>
          <a
            href="#all-deals"
            className="text-primary hover:underline font-medium hidden md:block"
          >
            View All Deals
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dealsProducts.slice(0, 4).map((product) => (
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
