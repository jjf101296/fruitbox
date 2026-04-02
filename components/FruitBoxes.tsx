import Image from "next/image";
import { Button } from "@/components/ui/button";

const boxes = [
  {
    id: 1,
    name: "Daily Box",
    price: "₹75",
    description: "Perfect for individuals",
    features: ["5-6 Fruits", "Daily freshness", "Mixed selection"],
    image: "/daily-box.jpg",
    color: "from-orange-50 to-yellow-50",
  },
  {
    id: 2,
    name: "Family Box",
    price: "₹150",
    description: "Great for families",
    features: ["12-15 Fruits", "Variety pack", "Weekly freshness"],
    image: "/family-box.jpg",
    color: "from-green-50 to-emerald-50",
    popular: true,
  },
  {
    id: 3,
    name: "Premium Box",
    price: "₹300",
    description: "For the fruit enthusiasts",
    features: ["18-20 Fruits", "Exotic varieties", "Premium selection"],
    image: "/premium-box.jpg",
    color: "from-red-50 to-pink-50",
  },
];

export default function FruitBoxes() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block px-4 py-2 bg-red-100 rounded-full">
            <span className="text-primary font-semibold">Our Collections</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground">
            Choose Your Perfect Fruit Box
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Select from our curated fruit boxes, each specially designed to meet different needs and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {boxes.map((box) => (
            <div
              key={box.id}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                box.popular ? "lg:scale-105 ring-2 ring-primary" : ""
              }`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${box.color}`}></div>

              {/* Popular badge */}
              {box.popular && (
                <div className="absolute top-4 right-4 z-10 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}

              {/* Content */}
              <div className="relative z-5 flex flex-col h-full p-8">
                {/* Image */}
                <div className="relative h-48 mb-6 -m-8 mb-6">
                  <Image
                    src={box.image}
                    alt={box.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>

                {/* Text content */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {box.name}
                  </h3>
                  <p className="text-neutral-600 mb-4">{box.description}</p>

                  <ul className="space-y-3 mb-6">
                    {box.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-neutral-700"
                      >
                        <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and button */}
                <div className="space-y-4">
                  <p className="text-3xl font-bold text-foreground">
                    {box.price}
                    <span className="text-lg text-neutral-600">/week</span>
                  </p>
                  <Button
                    className={`w-full py-6 text-lg font-semibold rounded-lg transition-all ${
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
