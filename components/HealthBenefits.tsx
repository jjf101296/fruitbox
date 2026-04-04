const benefits = [
  {
    icon: "🛡️",
    title: "Boosts Immunity",
    description: "Rich in vitamin C and antioxidants to strengthen your immune system",
  },
  {
    icon: "🔄",
    title: "Improves Digestion",
    description: "High fiber content promotes healthy gut bacteria and digestive wellness",
  },
  {
    icon: "✨",
    title: "Rich in Vitamins & Antioxidants",
    description: "Essential nutrients that protect cells and support overall health",
  },
  {
    icon: "❤️",
    title: "Supports Heart Health",
    description: "Potassium-rich fruits help maintain healthy blood pressure and heart function",
  },
  {
    icon: "⚡",
    title: "Keeps You Energized",
    description: "Natural sugars and minerals provide sustained energy throughout the day",
  },
  {
    icon: "🧠",
    title: "Enhances Brain Function",
    description: "Bioactive compounds support cognitive health and mental clarity",
  },
];

export default function HealthBenefits() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-3 lg:space-y-4 mb-12 lg:mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 rounded-full">
            <span className="text-success font-semibold text-sm lg:text-base">Health Benefits</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-foreground">
            Why Fruits Are Essential
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto px-2">
            Discover the incredible health benefits of incorporating fresh fruits into your daily diet
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 max-w-6xl mx-auto px-2">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 lg:p-8 rounded-xl border border-neutral-200 hover:border-primary hover:shadow-lg transition-all duration-300 bg-white hover:bg-red-50"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-12 lg:mt-16 bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 lg:p-12 text-white text-center space-y-3 lg:space-y-4 mx-2">
          <h3 className="text-xl sm:text-2xl font-bold">Ready to Transform Your Health?</h3>
          <p className="text-base sm:text-lg opacity-90">
            Start your journey to a healthier lifestyle with our premium fruit boxes today
          </p>
        </div>
      </div>
    </section>
  );
}
