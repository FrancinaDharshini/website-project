import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CategorySection } from "@/components/CategorySection";
import { DealsSection } from "@/components/DealsSection";
import { FeaturedBanner } from "@/components/FeaturedBanner";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <CategorySection />
      <DealsSection />
      <FeaturedBanner />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default Index;
