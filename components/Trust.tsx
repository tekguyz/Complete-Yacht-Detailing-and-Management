import { ShieldCheck, Award, Star } from "lucide-react";

export default function Trust() {
  return (
    <section id="trust" className="py-24 bg-navy text-sail relative overflow-hidden">
      {/* Subtle background texture/gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Big Typography */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase tracking-widest">
                <Award className="w-4 h-4" aria-hidden="true" />
                Veteran Owned & Operated
              </div>
              
              <h2 className="text-5xl md:text-6xl font-serif leading-tight">
                The Gold Standard <br />
                <span className="text-gold italic">of Protection.</span>
              </h2>
              
              <p className="text-sail/70 text-xl leading-relaxed max-w-lg">
                We don&apos;t just detail; we preserve. Our military-grade precision ensures your vessel remains in showroom condition year-round.
              </p>

              <div className="flex flex-wrap gap-8 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gold/10 rounded-full">
                    <Star className="w-6 h-6 text-gold fill-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">5.0</p>
                    <p className="text-xs text-sail/50 uppercase tracking-widest">Google Rating</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gold/10 rounded-full">
                    <ShieldCheck className="w-6 h-6 text-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">1.5 Years</p>
                    <p className="text-xs text-sail/50 uppercase tracking-widest">Coating Warranty</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: High Impact Banner Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold/50 to-navy rounded-sm blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-navy border border-white/10 p-10 md:p-12 rounded-sm space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl font-serif text-gold">1.5-Year Ceramic Coating Warranty</h3>
                  <p className="text-sail/70 leading-relaxed">
                    Our certified application process guarantees a hydrophobic mirrored finish that resists oxidation, salt, and UV damage for 18 months.
                  </p>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "Certified Gtechniq & Starke Installers",
                    "Documented Multi-Stage Decontamination",
                    "Complimentary 6-Month Inspection",
                    "Transferable Protection Plans"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sail/90">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                      {item}
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="block w-full py-4 bg-gold text-navy text-center font-bold rounded-sm hover:bg-white transition-colors">
                  Secure Your Warranty
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
