import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const FeaturedBanner = () => {
  return (
    <section className="py-12 px-4">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Banner 1 */}
          <div className="relative overflow-hidden rounded-xl gradient-card border border-border/50 p-8 md:p-12 card-shadow hover:glow-effect transition-all hover-lift">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-3 gradient-primary bg-clip-text text-transparent">
                New Arrivals
              </h3>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Check out the latest tech gadgets and innovations
              </p>
              <Button className="gradient-primary text-white hover:opacity-90">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
              <div className="w-full h-full gradient-primary" />
            </div>
          </div>

          {/* Banner 2 */}
          <div className="relative overflow-hidden rounded-xl gradient-card border border-border/50 p-8 md:p-12 card-shadow hover:glow-effect transition-all hover-lift">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-3">
                Premium Audio Sale
              </h3>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Up to 40% off on headphones and speakers
              </p>
              <Button variant="outline" className="border-primary hover:bg-primary/10">
                Explore Deals
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
              <div className="w-full h-full bg-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
