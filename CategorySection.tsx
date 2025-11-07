import { Card } from "@/components/ui/card";
import { Laptop, Smartphone, Headphones, Tv, Watch, Gamepad2 } from "lucide-react";

const categories = [
  { name: "Laptops", icon: Laptop, count: "200+" },
  { name: "Smartphones", icon: Smartphone, count: "150+" },
  { name: "Audio", icon: Headphones, count: "120+" },
  { name: "TVs", icon: Tv, count: "80+" },
  { name: "Wearables", icon: Watch, count: "90+" },
  { name: "Gaming", icon: Gamepad2, count: "180+" },
];

export const CategorySection = () => {
  return (
    <section className="py-12 px-4 bg-muted/30">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.name}
                className="p-6 cursor-pointer hover-lift border-border/50 hover:border-primary/50 transition-all card-shadow hover:glow-effect group"
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{category.count}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
