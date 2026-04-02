const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Health Coach",
    text: "I&apos;ve been using Fresh Fruits Box for 6 months now. The quality is exceptional and the delivery is always on time. My clients love the variety!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Busy Professional",
    text: "As someone with limited time, this service is a lifesaver. Fresh fruits delivered to my door every week keeps me energized and healthy.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "Mother of Two",
    text: "My kids actually eat the fruits because they&apos;re so fresh and delicious. Worth every penny for my family&apos;s health!",
    rating: 5,
  },
  {
    name: "David Williams",
    role: "Fitness Enthusiast",
    text: "The premium box is perfect for my nutrition plan. Premium quality fruits at reasonable prices. Highly recommended!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 rounded-full">
            <span className="text-success font-semibold">Testimonials</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground">
            What Our Customers Say
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers enjoying fresh, healthy fruits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-neutral-200 bg-neutral-50 hover:bg-white hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Text */}
              <p className="text-neutral-700 leading-relaxed mb-6 italic">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author */}
              <div>
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-neutral-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
