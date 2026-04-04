"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    try {
      // Send email via mailto link (alternative: use an API endpoint)
      const mailtoLink = `mailto:manusha.balaji@gmail.com?subject=New Message from ${formData.firstName} ${formData.lastName}&body=Name: ${formData.firstName} ${formData.lastName}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0A%0AMessage:%0A${formData.message}`;
      
      window.location.href = mailtoLink;
      
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="py-16 lg:py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left side - Info */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-3 lg:space-y-4">
              <div className="inline-block px-4 py-2 bg-red-100 rounded-full">
                <span className="text-primary font-semibold text-sm lg:text-base">Contact Us</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-foreground">
                Get in Touch with Pazha Petti
              </h2>
              <p className="text-base sm:text-lg text-neutral-600">
                Have questions or feedback? Send us a message via email. For orders, please use WhatsApp!
              </p>
            </div>

            <div className="space-y-4 lg:space-y-6">
              {/* Phone */}
              <div className="flex gap-3 lg:gap-4">
                <div className="w-12 h-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-lg lg:text-xl">📞</span>
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm lg:text-base">Call Us</p>
                  <p className="text-neutral-600 text-sm lg:text-base">+91 9940547943</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3 lg:gap-4">
                <div className="w-12 h-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-lg lg:text-xl">✉️</span>
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm lg:text-base">Email</p>
                  <p className="text-neutral-600 text-sm lg:text-base">manusha.balaji@gmail.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-3 lg:gap-4">
                <div className="w-12 h-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-lg lg:text-xl">📍</span>
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm lg:text-base">Location</p>
                  <p className="text-neutral-600 text-sm lg:text-base">Ayappakkam, Chennai 77</p>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919940547943?text=Hi%20Mansuha!%20I%20would%20like%20to%20order%20fresh%20fruit%20slices.%20Can%20you%20help%20me%20with%20the%20options?"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-4 lg:py-6 text-base lg:text-lg font-semibold rounded-lg" asChild>
                  <span>💬 Order on WhatsApp</span>
                </Button>
              </a>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-white p-6 lg:p-8 rounded-2xl border border-neutral-200 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20 outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20 outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20 outline-none transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20 outline-none transition-all resize-none"
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white py-6 text-lg font-semibold rounded-lg transition-all"
              >
                {submitted ? "Email Opening... ✓" : "Send Message via Email"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
