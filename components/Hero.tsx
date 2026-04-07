import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=1920&auto=format&fit=crop"
          alt="Luxury Yacht on the Ocean"
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        {/* Cinematic Radial Spotlight Overlays */}
        <div className="absolute inset-0 z-0 bg-black/60" aria-hidden="true" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-deep-ocean-navy/20 via-deep-ocean-navy/90 to-[#0a0f1a]" aria-hidden="true" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center pt-40">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          
          {/* "Glass Vault" Trust Pill */}
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-gold/30 rounded-full px-6 py-2 mx-auto">
            <Star className="w-4 h-4 fill-gold text-gold" aria-hidden="true" />
            <span className="text-sail text-sm font-medium tracking-wide">
              Complete Yacht Detailing and Management | 20+ Years Experience
            </span>
          </div>
          
          {/* Editorial Typography */}
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-gold/70 leading-tight">
            THE STANDARD IN MARINE EXCELLENCE.
          </h1>
          
          <h2 className="text-xl md:text-2xl text-sail/90 max-w-2xl mx-auto font-light leading-relaxed">
            High-End Detailing, Protective Coatings & Vessel Management.
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <a
              href="#contact"
              className="w-full sm:w-auto bg-gold text-navy px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl shadow-gold/20 flex items-center justify-center gap-2 group"
            >
              Get a Custom Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto bg-transparent text-sail px-8 py-4 rounded-full font-medium text-lg hover:text-gold transition-colors"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
