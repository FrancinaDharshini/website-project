import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import heroGaming from "@/assets/hero-gaming.jpg";
import heroAudio from "@/assets/hero-audio.jpg";
import heroSmartHome from "@/assets/hero-smarthome.jpg";

const heroSlides = [
  {
    title: "Latest Gaming Laptops",
    subtitle: "Up to 40% off on premium devices",
    cta: "Shop Now",
    image: heroGaming,
  },
  {
    title: "Premium Audio",
    subtitle: "Wireless headphones & smart devices",
    cta: "Explore Deals",
    image: heroAudio,
  },
  {
    title: "Smart Home Revolution",
    subtitle: "Transform your living space",
    cta: "Discover More",
    image: heroSmartHome,
  },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroSlides[currentSlide].image}
          alt={heroSlides[currentSlide].title}
          className="w-full h-full object-cover transition-opacity duration-700"
          key={currentSlide}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative container h-full flex items-center px-4">
        <div className="max-w-2xl animate-slide-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {heroSlides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            {heroSlides[currentSlide].subtitle}
          </p>
          <div className="flex gap-4">
            <Button 
              size="lg" 
              className="gradient-primary text-white font-semibold hover:opacity-90 transition-opacity glow-effect"
            >
              {heroSlides[currentSlide].cta}
            </Button>
            <Button size="lg" variant="outline" className="border-primary hover:bg-primary/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background border border-border/50 transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background border border-border/50 transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? "w-8 bg-primary"
                : "w-2 bg-muted-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
