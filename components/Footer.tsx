import { Anchor, Instagram, Facebook, Linkedin, Phone as PhoneIcon, FileText } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-navy text-sail pt-20 pb-24 md:pb-10 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand */}
            <div className="space-y-6">
              <a href="#" className="flex items-center gap-2" aria-label="Complete Yacht Detailing and Management Home">
                <Anchor className="w-8 h-8 text-gold" aria-hidden="true" />
                <span className="font-serif font-bold text-xl tracking-tight">
                  Complete Yacht Detailing and Management
                </span>
              </a>
              <p className="text-sail/70 leading-relaxed">
                Ultra-premium yacht detailing, ceramic coating, and management services. Veteran-owned and operated in Pompano Beach, FL.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/completeyachtdetailing/" target="_blank" rel="noopener noreferrer" className="text-sail/70 hover:text-gold transition-colors" aria-label="Instagram">
                  <Instagram className="w-6 h-6" aria-hidden="true" />
                </a>
                <a href="https://www.facebook.com/p/Complete-Yacht-Detailing-Management-100092533291254/" target="_blank" rel="noopener noreferrer" className="text-sail/70 hover:text-gold transition-colors" aria-label="Facebook">
                  <Facebook className="w-6 h-6" aria-hidden="true" />
                </a>
                <a href="#" className="text-sail/70 hover:text-gold transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-6 h-6" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#services" className="text-sail/70 hover:text-gold transition-colors">Services</a></li>
                <li><a href="#upgrades" className="text-sail/70 hover:text-gold transition-colors">Upgrades</a></li>
                <li><a href="#trust" className="text-sail/70 hover:text-gold transition-colors">Why Choose Us</a></li>
                <li><a href="#contact" className="text-sail/70 hover:text-gold transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-lg mb-6">Our Services</h4>
              <ul className="space-y-4">
                <li className="text-sail/70">Ceramic Coating</li>
                <li className="text-sail/70">Gelcoat Restoration</li>
                <li className="text-sail/70">Yacht Management</li>
                <li className="text-sail/70">Sharrow Propellers</li>
                <li className="text-sail/70">Whelen Lighting</li>
                <li className="text-sail/70">Brokerage</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="text-sail/70">Pompano Beach, FL</li>
                <li><a href="tel:+17543063367" className="text-sail/70 hover:text-gold transition-colors">(754) 306-3367</a></li>
                <li><a href="mailto:completeyachtdetailing@gmail.com" className="text-sail/70 hover:text-gold transition-colors">completeyachtdetailing@gmail.com</a></li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sail/50 text-sm">
              &copy; {currentYear} Complete Yacht Detailing and Management. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-sail/50">
              <a href="#" className="hover:text-sail transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-sail transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-navy border-t border-white/10 flex h-16 shadow-[0_-4px_10px_rgba(0,0,0,0.3)]">
        <a 
          href="tel:+17543063367" 
          className="flex-1 flex items-center justify-center gap-2 text-gold font-bold text-sm border-r border-white/10 active:bg-white/5 transition-colors"
        >
          <PhoneIcon className="w-4 h-4" aria-hidden="true" />
          Call Now
        </a>
        <a 
          href="#contact" 
          className="flex-1 flex items-center justify-center gap-2 text-sail font-bold text-sm active:bg-white/5 transition-colors"
        >
          <FileText className="w-4 h-4" aria-hidden="true" />
          Request Quote
        </a>
      </div>
    </>
  );
}
