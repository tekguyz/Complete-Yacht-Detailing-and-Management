"use client";

import { useState, useEffect } from "react";
import { Menu, X, Anchor, Facebook, Instagram } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Triggering at 10px to catch the sliver early
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Upgrades", href: "#upgrades" },
    { name: "Trust", href: "#trust" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 flex flex-col transition-all duration-300">
      
      {/* ANNOUNCEMENT BAR: THE SLIVER FIX IS HERE */}
      <div 
        className={`bg-navy text-sail text-center text-sm font-medium tracking-wide transition-all duration-500 ease-in-out overflow-hidden ${
          isScrolled 
            ? "max-h-0 py-0 opacity-0 border-none" 
            : "max-h-20 py-2.5 px-4 opacity-100"
        }`}
      >
        <p className="leading-tight">
          Veteran-Owned & Operated | Serving Pompano Beach & South Florida | Call Now: (754) 306-3367
        </p>
      </div>

      {/* NAVIGATION BAR */}
      <nav
        className={`w-full transition-all duration-300 border-b ${
          isScrolled 
            ? "bg-navy/95 backdrop-blur-md shadow-2xl py-3 border-white/5" 
            : "bg-transparent py-6 border-white/10"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group" aria-label="Complete Yacht Detailing and Management Home">
            <Anchor className="w-8 h-8 text-gold group-hover:text-sail transition-colors" />
            <span className="font-serif font-bold text-lg md:text-xl tracking-tight text-sail leading-none">
              Complete Yacht Detailing and Management
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-sail/90 hover:text-gold transition-colors tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-4 border-l border-sail/20 pl-6">
              <a href="https://www.facebook.com/p/Complete-Yacht-Detailing-Management-100092533291254/" target="_blank" rel="noopener noreferrer" className="text-sail/90 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/completeyachtdetailing/" target="_blank" rel="noopener noreferrer" className="text-sail/90 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            <a
              href="#contact"
              className="bg-gold text-navy px-6 py-2.5 rounded-sm text-sm font-bold hover:bg-white transition-colors duration-300"
            >
              Request Quote
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-sail p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`lg:hidden absolute top-full left-0 w-full bg-navy/98 backdrop-blur-xl border-t border-white/10 shadow-2xl transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="flex flex-col py-6 px-6 gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xl font-medium text-sail/90 hover:text-gold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gold text-navy px-6 py-4 rounded-sm text-center font-bold text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Request Quote
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}