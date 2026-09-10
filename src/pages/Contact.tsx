import React, { useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck, Wrench } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { businessConfig } from '../config/businessConfig';
import { generateWhatsAppLink } from '../utils/whatsapp';

export const Contact: React.FC = () => {
  useEffect(() => {
    document.title = "Contact Lekarsemir Musical | Instrument Repair & Servicing";
  }, []);

  const primaryWhatsAppUrl = generateWhatsAppLink(
    `Hello ${businessConfig.businessName}, I would like to get in touch regarding a repair service or gear purchase.`,
    businessConfig.whatsappNumber
  );

  const secondaryWhatsAppUrl = generateWhatsAppLink(
    `Hello ${businessConfig.businessName}, I would like to get in touch regarding a repair service or gear purchase.`,
    businessConfig.secondaryWhatsAppNumber
  );

  return (
    <div className="bg-slate-50 min-h-screen pb-20 space-y-0">
      
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-blue-400 bg-blue-950/80 px-3.5 py-1.5 rounded-full border border-blue-800/60">
            Technical Support & Inquiries
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Contact <span className="text-blue-500">Lekarsemir Musical</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Have a faulty instrument, audio equipment repair request, or technical inquiry? Reach out to our engineering team today.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Business Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-lg space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">Official Details</span>
                  <h2 className="text-2xl font-bold text-slate-900 mt-1">{businessConfig.businessName}</h2>
                  <p className="text-slate-500 text-xs mt-1">{businessConfig.tagline}</p>
                </div>

                <div className="space-y-5 text-sm">
                  
                  {/* Phone Lines */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 uppercase font-semibold block">Phone Support</span>
                      <div className="space-y-0.5 mt-0.5">
                        <a href={`tel:${businessConfig.phoneNumber}`} className="text-slate-900 font-bold hover:text-blue-600 transition-colors block">
                          {businessConfig.displayWhatsApp} (Primary)
                        </a>
                        <a href={`tel:${businessConfig.secondaryPhoneNumber}`} className="text-slate-900 font-bold hover:text-blue-600 transition-colors block">
                          {businessConfig.displaySecondaryWhatsApp} (Line 2)
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Options */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 uppercase font-semibold block">WhatsApp Direct Chat</span>
                      <div className="space-y-1 mt-1">
                        <a
                          href={primaryWhatsAppUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-xs font-bold text-emerald-600 hover:underline bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 mr-2 mb-1"
                        >
                          Chat {businessConfig.displayWhatsApp}
                        </a>
                        <a
                          href={secondaryWhatsAppUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-xs font-bold text-emerald-600 hover:underline bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200"
                        >
                          Chat {businessConfig.displaySecondaryWhatsApp}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 uppercase font-semibold block">Email Address</span>
                      <a href={`mailto:${businessConfig.email}`} className="text-slate-900 font-bold hover:text-blue-600 transition-colors">
                        {businessConfig.email}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 uppercase font-semibold block">Workshop Address</span>
                      <p className="text-slate-900 font-medium text-xs leading-relaxed">
                        {businessConfig.address}
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 uppercase font-semibold block">Operating Hours</span>
                      <p className="text-slate-900 font-medium text-xs">
                        {businessConfig.businessHours}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Instant WhatsApp Action Box */}
                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={primaryWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all duration-200"
                  >
                    <MessageSquare className="w-5 h-5 mr-2 fill-current" />
                    Chat With Us on WhatsApp ({businessConfig.displayWhatsApp})
                  </a>
                </div>

              </div>

              {/* Service Promise Box */}
              <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center space-x-2 text-blue-400 font-bold text-sm">
                  <Wrench className="w-4 h-4" />
                  <span>Workshop Guarantee</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  All instruments dropped off for service receive a complete diagnostic report before work begins. No unexpected costs.
                </p>
                <div className="flex items-center space-x-1 text-[11px] text-slate-400 pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Verified Musical Instrument Technicians</span>
                </div>
              </div>

            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
