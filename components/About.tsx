export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="inline-block px-4 py-2 bg-orange-100 rounded-full">
            <span className="text-accent font-semibold">About Us</span>
          </div>
          
          <h2 className="text-4xl font-bold text-foreground">
            Your Partner in Healthy Living
          </h2>
          
          <p className="text-lg text-neutral-600 leading-relaxed">
            We&apos;re committed to bringing the freshest, most nutritious fruits directly from local farms to your doorstep. 
            Our mission is to make healthy living accessible, convenient, and affordable for everyone.
          </p>
          
          <p className="text-lg text-neutral-600 leading-relaxed">
            With over a decade of experience in the fresh produce industry, we&apos;ve built strong relationships with trusted 
            farmers who share our commitment to quality, sustainability, and excellence.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            {[
              { number: "10K+", label: "Happy Customers" },
              { number: "50+", label: "Fruit Varieties" },
              { number: "24/7", label: "Delivery Service" },
              { number: "100%", label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-2">
                <p className="text-3xl font-bold text-primary">{stat.number}</p>
                <p className="text-sm text-neutral-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
