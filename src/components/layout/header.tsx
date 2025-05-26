
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, BarChart3 } from "lucide-react";
import { navLinks } from "@/lib/constants";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Avoid rendering on server to prevent hydration mismatch for Sheet
  }

  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center">
          <BarChart3 className="h-8 w-8 mr-2 text-brand-primary" />
          <span className="text-brand-primary">Synergy</span><span className="text-foreground">Insights</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground hover:text-brand-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact">
            <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Contact Us
            </Button>
          </Link>
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-card p-6">
              <div className="flex justify-between items-center mb-8">
                <Link href="/" className="text-xl font-bold flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                  <BarChart3 className="h-7 w-7 mr-2 text-brand-primary" />
                   <span className="text-brand-primary">Synergy</span><span className="text-foreground">Insights</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg text-foreground hover:text-brand-primary transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="default" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-4">
                    Contact Us
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
