const reasons = [
  {
    number: "01",
    title: "Fresh Farm-Picked Fruits",
    description: "Hand-selected from trusted local farms within 24 hours of harvest",
  },
  {
    number: "02",
    title: "Hygienic Packaging",
    description: "Premium eco-friendly packaging ensures fruits stay fresh and pristine",
  },
  {
    number: "03",
    title: "Fast Delivery",
    description: "Same-day or next-day delivery to your doorstep across the city",
  },
  {
    number: "04",
    title: "Affordable Pricing",
    description: "Best quality fruits at competitive prices with subscription discounts",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block px-4 py-2 bg-orange-100 rounded-full">
            <span className="text-accent font-semibold">Why Choose Us</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground">
            What Sets Us Apart
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            We&apos;re committed to delivering excellence in every aspect of our service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white border border-neutral-200 hover:border-primary hover:shadow-xl transition-all duration-300"
            >
              {/* Number background */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary opacity-10 rounded-full group-hover:bg-primary group-hover:opacity-20 transition-all duration-300"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-4xl font-bold text-primary mb-4">
                  {reason.number}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>

              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
