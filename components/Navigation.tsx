"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Boxes", href: "#boxes" },
    { name: "Benefits", href: "#benefits" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-primary to-orange-500 text-white py-3 text-center font-bold text-sm sm:text-base">
        🎉 Grab Your Summer Offer Soon! Limited Time Only!
      </div>

      <nav className="sticky top-0 z-50 bg-white bg-opacity-95 backdrop-blur border-b border-neutral-200 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/pazha-petti-logo.png"
                  alt="Pazha Petti Logo"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <div className="flex flex-col gap-0">
                <span className="font-bold text-lg sm:text-xl text-foreground hidden sm:inline">
                  Pazha Petti
                </span>
                <span className="text-xs text-primary font-semibold hidden sm:inline">
                  Fresh Fruit Slices by Mansuha Merlin
                </span>
              </div>
            </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-neutral-700 hover:text-primary font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/919940547943?text=Hi%20Mansuha!%20I%20would%20like%20to%20order%20fresh%20fruits.%20Can%20you%20help%20me%20with%20the%20options?"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-2 rounded-lg" asChild>
                <span>Order Now</span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:bg-neutral-100 rounded-lg transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-neutral-200 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-2 text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/919940547943?text=Hi%20Mansuha!%20I%20would%20like%20to%20order%20fresh%20fruits.%20Can%20you%20help%20me%20with%20the%20options?"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg mt-4" asChild>
                <span>Order Now</span>
              </Button>
            </a>
          </div>
        )}
        </div>
      </nav>
    </>
  );
}
