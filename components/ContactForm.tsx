"use client";

import { useState } from "react";
import { UploadCloud, Send, MapPin, Phone, Mail } from "lucide-react";

export default function ContactForm() {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName(null);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-sm font-bold tracking-widest text-navy uppercase">Get in Touch</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-navy">Request a Consultation</h3>
              <p className="text-carbon/70 text-lg leading-relaxed max-w-md">
                Ready to elevate your vessel&apos;s standard? Contact us today for a custom quote tailored to your specific needs.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-navy/5 rounded-sm text-navy">
                  <MapPin className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-lg">Location</h4>
                  <p className="text-carbon/70">Pompano Beach, FL<br/>Serving all of South Florida</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-navy/5 rounded-sm text-navy">
                  <Phone className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-lg">Phone</h4>
                  <a href="tel:+17543063367" className="text-carbon/70 hover:text-gold transition-colors">(754) 306-3367</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-navy/5 rounded-sm text-navy">
                  <Mail className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-lg">Email</h4>
                  <a href="mailto:completeyachtdetailing@gmail.com" className="text-carbon/70 hover:text-gold transition-colors">completeyachtdetailing@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-sail p-8 md:p-10 rounded-sm border border-gray-100 shadow-sm">
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              netlify-honeypot="bot-field"
              className="space-y-8"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>Don&apos;t fill this out if you&apos;re human: <input name="bot-field" /></label>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Full Name */}
                <div className="relative group">
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="peer w-full px-0 py-3 bg-transparent border-b-2 border-gray-200 focus:outline-none focus:border-navy transition-colors placeholder-transparent" 
                    placeholder="Full Name"
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-navy peer-focus:text-sm font-medium"
                  >
                    Full Name *
                  </label>
                </div>

                {/* Phone */}
                <div className="relative group">
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    className="peer w-full px-0 py-3 bg-transparent border-b-2 border-gray-200 focus:outline-none focus:border-navy transition-colors placeholder-transparent" 
                    placeholder="Phone Number"
                  />
                  <label 
                    htmlFor="phone" 
                    className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-navy peer-focus:text-sm font-medium"
                  >
                    Phone Number *
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Vessel Make/Size */}
                <div className="relative group">
                  <input 
                    type="text" 
                    id="vessel" 
                    name="vessel" 
                    className="peer w-full px-0 py-3 bg-transparent border-b-2 border-gray-200 focus:outline-none focus:border-navy transition-colors placeholder-transparent" 
                    placeholder="Vessel Make/Size"
                  />
                  <label 
                    htmlFor="vessel" 
                    className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-navy peer-focus:text-sm font-medium"
                  >
                    Vessel Make/Size
                  </label>
                </div>

                {/* Vessel Location */}
                <div className="relative group">
                  <input 
                    type="text" 
                    id="location" 
                    name="location" 
                    className="peer w-full px-0 py-3 bg-transparent border-b-2 border-gray-200 focus:outline-none focus:border-navy transition-colors placeholder-transparent" 
                    placeholder="Vessel Location"
                  />
                  <label 
                    htmlFor="location" 
                    className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-navy peer-focus:text-sm font-medium"
                  >
                    Vessel Location
                  </label>
                </div>
              </div>

              {/* Service Requested */}
              <div className="relative group">
                <select 
                  id="service" 
                  name="service" 
                  className="peer w-full px-0 py-3 bg-transparent border-b-2 border-gray-200 focus:outline-none focus:border-navy transition-colors appearance-none"
                  required
                  defaultValue=""
                >
                  <option value="" disabled hidden></option>
                  <option value="ceramic">Ceramic Coating</option>
                  <option value="gelcoat">Gelcoat Restoration</option>
                  <option value="management">Yacht Management</option>
                  <option value="upgrades">Upgrades (Sharrow/Whelen)</option>
                  <option value="brokerage">Brokerage</option>
                  <option value="other">Other</option>
                </select>
                <label 
                  htmlFor="service" 
                  className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-focus:-top-3.5 peer-focus:text-navy peer-focus:text-sm font-medium"
                >
                  Service Requested *
                </label>
                <div className="absolute right-0 top-4 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Photo Upload */}
              <div className="space-y-4">
                <span className="text-sm font-bold text-navy">Upload Photo (Optional)</span>
                <label 
                  htmlFor="photo" 
                  className="flex flex-col items-center justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-sm appearance-none cursor-pointer hover:border-navy focus:outline-none"
                >
                  <span className="flex items-center space-x-2">
                    <UploadCloud className="w-6 h-6 text-gray-400" aria-hidden="true" />
                    <span className="font-medium text-gray-600">
                      {fileName ? fileName : "Drop files to Attach, or browse"}
                    </span>
                  </span>
                  <input type="file" id="photo" name="photo" accept="image/*" className="hidden" onChange={handleFileChange} />
                </label>
              </div>

              <button 
                type="submit" 
                className="w-full bg-navy text-sail px-8 py-4 rounded-sm font-bold text-lg hover:bg-navy/90 transition-colors flex items-center justify-center gap-2 group"
              >
                Send Request
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
