import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-50 to-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              <span className="text-primary">Fresh Fruits,</span>
              <br />
              <span className="text-green-600">Healthy Life</span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Get your daily dose of natural nutrition delivered to your doorstep. Premium, farm-picked fruits with hygienic packaging and fast delivery.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-dark text-white text-lg px-8 py-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Order Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-red-50 text-lg px-8 py-6 rounded-lg font-semibold"
            >
              View Boxes
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600 text-xl">✓</span>
              </div>
              <span className="text-neutral-700 font-medium">100% Fresh</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                <span className="text-accent text-xl">⚡</span>
              </div>
              <span className="text-neutral-700 font-medium">Fast Delivery</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-full min-h-96 lg:min-h-screen flex items-center justify-center">
          <div className="relative w-full h-full max-w-2xl max-h-2xl">
            <Image
              src="/hero-fruits.jpg"
              alt="Fresh Fruit Box"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
