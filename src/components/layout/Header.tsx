"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
  { name: "Artists", href: "#artists" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Membership", href: "#membership" },
  { name: "Book Now", href: "#booking" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-6",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Wordmark/Logo */}
          <Link
            href="#"
            className={cn(
              "font-cormorant text-2xl md:text-3xl font-medium tracking-wider transition-colors",
              isScrolled ? "text-foreground" : "text-primary"
            )}
          >
            LUMIÈRE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "font-montserrat text-sm tracking-wide transition-all",
                  item.name === "Book Now"
                    ? "bg-primary text-white hover:bg-primary/90 px-6 py-2 rounded-md"
                    : isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-primary hover:text-primary/80"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger 
              className={cn(
                "md:hidden transition-colors",
                isScrolled ? "text-foreground" : "text-primary"
              )} 
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full bg-background/98 backdrop-blur-md"
            >
              <div className="flex flex-col gap-8 mt-16">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "font-montserrat text-lg tracking-wide transition-all",
                      item.name === "Book Now"
                        ? "bg-primary text-white hover:bg-primary/90 px-6 py-2 rounded-md inline-block"
                        : "hover:text-primary"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
} 