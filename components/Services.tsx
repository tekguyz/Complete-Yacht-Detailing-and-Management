import Image from "next/image";
import { Sparkles, Droplets, Waves, Shield } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "ceramic",
      title: "Certified Ceramic Coating",
      subtitle: "Hydrophobic mirrored finish.",
      description: "Our multi-layer ceramic applications create a permanent bond with your vessel's surface, providing a deep, wet-look shine that lasts for years. Experience superior protection against South Florida's harsh UV rays and salt spray.",
      icon: <Sparkles className="w-6 h-6" aria-hidden="true" />,
      image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "gelcoat",
      title: "Professional Gelcoat Refinishing",
      subtitle: "Machine compounding & oxidation removal.",
      description: "We specialize in restoring chalky, oxidized gelcoats to their original factory luster. Our multi-stage machine compounding process removes surface defects and prepares the hull for long-term protection.",
      icon: <Droplets className="w-6 h-6" aria-hidden="true" />,
      image: "https://images.unsplash.com/photo-1525456535336-65e0abf79908?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "maintenance",
      title: "Routine Maintenance",
      subtitle: "Bi-weekly washing & chamois drying.",
      description: "Keep your vessel ready at a moment's notice. Our scheduled maintenance plans include thorough top-side washes, non-skid cleaning, and meticulous chamois drying to prevent water spots.",
      icon: <Waves className="w-6 h-6" aria-hidden="true" />,
      image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "teak",
      title: "Brightwork & Teak Care",
      subtitle: "Hand polishing stainless & teak refinishing.",
      description: "Preserve the elegant details of your yacht. We provide expert hand-polishing for all stainless steel and chrome fixtures, along with professional teak cleaning and oiling to maintain that rich, golden hue.",
      icon: <Shield className="w-6 h-6" aria-hidden="true" />,
      image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section id="services" className="py-32 bg-sail overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <h2 className="text-sm font-bold tracking-widest text-gold uppercase mb-4">Core Services</h2>
          <h3 className="text-5xl md:text-6xl font-serif text-navy leading-tight">
            Meticulous Craftsmanship <br />
            <span className="text-gold italic">for the Discerning.</span>
          </h3>
        </div>

        {/* Services List */}
        <div className="space-y-32 md:space-y-48">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute -inset-4 bg-navy/5 rounded-sm -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex p-3 bg-navy text-gold rounded-sm">
                  {service.icon}
                </div>
                <div className="space-y-2">
                  <h4 className="text-3xl md:text-4xl font-serif text-navy">{service.title}</h4>
                  <p className="text-gold font-bold tracking-wide uppercase text-sm">{service.subtitle}</p>
                </div>
                <p className="text-carbon/70 text-lg leading-relaxed max-w-xl">
                  {service.description}
                </p>
                <div className="pt-4">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 text-navy font-bold border-b-2 border-gold pb-1 hover:text-gold transition-colors"
                  >
                    Inquire About This Service
                    <span className="text-xl">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
