"use client";

import { useState } from "react";
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
    <nav className="sticky top-0 z-50 bg-white bg-opacity-95 backdrop-blur border-b border-neutral-200 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="text-3xl">🍎</div>
            <div className="flex flex-col gap-0">
              <span className="font-bold text-xl text-foreground hidden sm:inline">
                Fresh Fruits Box
              </span>
              <span className="text-xs text-primary font-semibold hidden sm:inline">
                Proprietor: Manush Merlin
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
            <Button className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-2 rounded-lg">
              Order Now
            </Button>
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
            <Button className="w-full bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg mt-4">
              Order Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
