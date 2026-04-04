"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const boxes = [
  {
    id: 1,
    name: "Corporate / Office Employees",
    price: "₹75",
    weekdayPrice: "₹375",
    description: "Keep this box on your desk and break your fast the healthy way.",
    features: ["5-6 Fruit Slices", "Daily freshness", "Mixed variety"],
    image: "/daily-box.jpg",
    color: "from-orange-50 to-yellow-50",
  },
  {
    id: 2,
    name: "Family / Daily Use",
    price: "₹150",
    weekdayPrice: "₹750",
    description: "No time to cut fruits every day? We've got you covered—fresh, ready-to-eat fruits for your whole family.",
    features: ["10-12 Fruit Slices", "Variety pack", "Weekly freshness"],
    image: "/family-box.jpg",
    color: "from-green-50 to-emerald-50",
    popular: true,
  },
  {
    id: 3,
    name: "Gym / Fitness People",
    price: "₹300",
    weekdayPrice: "₹1500",
    description: "Hungry after a workout? Refuel your body with clean, natural energy from this power-packed fruit box.",
    features: ["20 Fruit Slices", "Exotic varieties", "Premium selection"],
    image: "/premium-box.jpg",
    color: "from-red-50 to-pink-50",
  },
];

export default function FruitBoxes() {
  const handleOrderClick = (boxName: string) => {
    const message = `Hi Mansuha! I would like to order the ${boxName}. Can you please provide more details?`;
    window.open(
      `https://wa.me/919940547943?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="py-16 lg:py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-3 lg:space-y-4 mb-12 lg:mb-16">
          <div className="inline-block px-4 py-2 bg-red-100 rounded-full">
            <span className="text-primary font-semibold text-sm lg:text-base">Our Collections</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Choose Your Perfect Fruit Slice Box
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto px-2">
            Select from our curated fruit slice boxes, each specially designed to meet different needs and preferences
          </p>
        </div>

        <div className="mb-8 lg:mb-12">
          <div className="flex justify-center gap-2 lg:gap-4 flex-wrap">
            <div className="inline-flex items-center gap-2 text-xs lg:text-sm">
              <span className="font-semibold text-neutral-600">Pricing:</span>
              <span className="px-3 py-1 bg-orange-100 text-primary rounded-full text-xs font-semibold">Daily</span>
              <span className="text-neutral-400">|</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">5-Day Weekday</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {boxes.map((box) => (
            <div
              key={box.id}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                box.popular ? "sm:scale-105 ring-2 ring-primary" : ""
              }`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${box.color}`}></div>

              {/* Popular badge */}
              {box.popular && (
                <div className="absolute top-3 right-3 z-10 bg-primary text-white px-3 py-1 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-bold">
                  Most Popular
                </div>
              )}

              {/* Content */}
              <div className="relative z-5 flex flex-col h-full p-5 lg:p-8">
                {/* Image */}
                <div className="relative h-32 sm:h-40 lg:h-48 mb-4 lg:mb-6 -mx-5 lg:-mx-8 mb-4 lg:mb-6">
                  <Image
                    src={box.image}
                    alt={box.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>

                {/* Text content */}
                <div className="flex-grow">
                  <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold text-foreground mb-1 lg:mb-2">
                    {box.name}
                  </h3>
                  <p className="text-sm lg:text-base text-neutral-600 mb-3 lg:mb-4">{box.description}</p>

                  <ul className="space-y-2 lg:space-y-3 mb-4 lg:mb-6">
                    {box.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 lg:gap-3 text-xs sm:text-sm lg:text-base text-neutral-700"
                      >
                        <span className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs flex-shrink-0">
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and button */}
                <div className="space-y-3 lg:space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white bg-opacity-70 rounded-lg p-2 lg:p-3">
                      <p className="text-xs text-neutral-600 mb-1">Daily</p>
                      <p className="text-base sm:text-lg lg:text-xl font-bold text-foreground">{box.price}</p>
                    </div>
                    <div className="bg-white bg-opacity-70 rounded-lg p-2 lg:p-3">
                      <p className="text-xs text-neutral-600 mb-1">5 Days</p>
                      <p className="text-base sm:text-lg lg:text-xl font-bold text-green-700">{box.weekdayPrice}</p>
                    </div>
                  </div>
                  <Button
                    onClick={() => handleOrderClick(box.name)}
                    className={`w-full py-4 lg:py-6 text-sm lg:text-lg font-semibold rounded-lg transition-all ${
                      box.popular
                        ? "bg-primary hover:bg-primary-dark text-white"
                        : "bg-white text-primary border-2 border-primary hover:bg-red-50"
                    }`}
                  >
                    Order Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
