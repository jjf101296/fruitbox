"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const handleViewBoxes = () => {
    const boxesSection = document.getElementById("boxes");
    if (boxesSection) {
      boxesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-50 to-white py-12 lg:py-0">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 lg:w-96 lg:h-96 bg-orange-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 lg:w-96 lg:h-96 bg-red-100 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 lg:space-y-8">
          <div className="space-y-3 lg:space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              <span className="text-primary">Fresh Fruit</span>
              <br />
              <span className="text-primary">Slices,</span>
              <br />
              <span className="text-green-600">Healthy Life</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-600 leading-relaxed">
              Get your daily dose of natural nutrition with delicious fresh fruit slices, delivered to your doorstep. Premium quality, hygienic packaging, and fast delivery.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 w-full sm:w-auto">
            <a
              href="https://wa.me/919940547943?text=Hi%20Mansuha!%20I%20would%20like%20to%20order%20fresh%20fruit%20slices.%20Can%20you%20help%20me%20with%20the%20options?"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-dark text-white text-base lg:text-lg px-6 lg:px-8 py-5 lg:py-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all w-full"
                asChild
              >
                <span>Order Now</span>
              </Button>
            </a>
            <Button
              onClick={handleViewBoxes}
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-red-50 text-base lg:text-lg px-6 lg:px-8 py-5 lg:py-6 rounded-lg font-semibold flex-1 sm:flex-none"
            >
              View Boxes
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-xl">✓</span>
              </div>
              <span className="text-neutral-700 font-medium text-sm sm:text-base">100% Fresh</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                <span className="text-accent text-xl">⚡</span>
              </div>
              <span className="text-neutral-700 font-medium text-sm sm:text-base">Fast Delivery</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-64 sm:h-80 lg:h-screen lg:min-h-96 flex items-center justify-center">
          <div className="relative w-full h-full max-w-md lg:max-w-2xl">
            <Image
              src="/hero-fruits.jpg"
              alt="Fresh Fruit Slices Box"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
