import Image from "next/image";
import { ArrowUpRight, Zap, Shield, Anchor } from "lucide-react";

export default function Upgrades() {
  return (
    <section id="upgrades" className="py-24 bg-navy text-sail overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-sm font-bold tracking-widest text-gold uppercase">Specialty Upgrades</h2>
            <h3 className="text-4xl md:text-5xl font-serif">Performance & <span className="text-gold italic">Prestige.</span></h3>
          </div>
          <p className="text-sail/60 text-lg max-w-sm">
            Authorized sales and installation of the marine industry&apos;s most elite performance upgrades.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[800px]">
          
          {/* Card 1: Sharrow Marine (Large) */}
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-sm border border-white/10 bg-white/5">
            <Image
              src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=1200&auto=format&fit=crop"
              alt="Sharrow Marine Propellers"
              fill
              className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12 space-y-6">
              <div className="inline-flex p-3 bg-gold text-navy rounded-sm">
                <Zap className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="space-y-2">
                <h4 className="text-3xl md:text-5xl font-serif">Sharrow Marine Props</h4>
                <p className="text-gold font-bold tracking-widest uppercase text-sm">Authorized Sales Agent</p>
              </div>
              <p className="text-sail/70 text-lg max-w-xl leading-relaxed">
                Experience the future of propulsion. Sharrow propellers offer unmatched efficiency, 30% more range, and a significantly quieter ride by eliminating tip vortices.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 bg-gold text-navy px-6 py-3 rounded-sm font-bold hover:bg-white transition-colors">
                Upgrade Your Propulsion <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Card 2: Whelen Marine Lights */}
          <div className="relative group overflow-hidden rounded-sm border border-white/10 bg-white/5 p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="inline-flex p-3 bg-navy border border-white/10 text-gold rounded-sm">
                <Shield className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-serif">Whelen Marine Lights</h4>
                <p className="text-gold font-bold tracking-widest uppercase text-xs">Certified Distributor</p>
              </div>
              <p className="text-sail/60 leading-relaxed">
                Government-grade LED lighting systems designed for extreme marine environments. Superior visibility and aviation-grade durability.
              </p>
            </div>
            <a href="#contact" className="text-gold font-bold flex items-center gap-2 hover:text-white transition-colors">
              View Lighting Catalog <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          {/* Card 3: Von Berg Yachts */}
          <div className="relative group overflow-hidden rounded-sm border border-white/10 bg-white/5 p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="inline-flex p-3 bg-navy border border-white/10 text-gold rounded-sm">
                <Anchor className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-serif">Von Berg Yachts</h4>
                <p className="text-gold font-bold tracking-widest uppercase text-xs">International LLC</p>
              </div>
              <p className="text-sail/60 leading-relaxed">
                Exclusive yacht brokerage assistance. Leverage our international network to find your next vessel or sell your current one at peak value.
              </p>
            </div>
            <a href="#contact" className="text-gold font-bold flex items-center gap-2 hover:text-white transition-colors">
              Brokerage Consultation <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
