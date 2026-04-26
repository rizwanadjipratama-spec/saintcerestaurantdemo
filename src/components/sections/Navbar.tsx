"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-cream py-3 shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className={cn(
            "text-2xl font-serif font-bold tracking-tight transition-colors",
            isScrolled ? "text-coffee" : "text-cream"
          )}
        >
          SAINTCE<span className="text-accent">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium uppercase tracking-widest transition-colors",
                isScrolled ? "text-coffee hover:text-accent" : "text-cream hover:text-accent"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#reservation"
            className="bg-accent text-cream px-6 py-2 rounded-full text-sm font-medium uppercase tracking-widest hover:bg-coffee transition-all transform hover:scale-105"
          >
            Reserve
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden transition-colors",
            isScrolled ? "text-coffee" : "text-cream"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-cream z-40 transition-transform duration-500 md:hidden flex flex-col items-center justify-center space-y-8",
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-3xl font-serif hover:text-accent transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="#reservation"
          onClick={() => setIsMobileMenuOpen(false)}
          className="bg-coffee text-cream px-8 py-3 rounded-full text-lg font-medium uppercase tracking-widest"
        >
          Book a Table
        </Link>
      </div>
    </nav>
  );
}
