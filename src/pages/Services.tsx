import React, { useEffect, useState } from 'react';
import { Wrench, Search, MessageSquare } from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';
import { servicesData } from '../data/services';
import { businessConfig } from '../config/businessConfig';
import { generateWhatsAppLink } from '../utils/whatsapp';

export const Services: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    document.title = "Musical Instrument Repair Services | Lekarsemir Musical";
  }, []);

  const filteredServices = servicesData.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const whatsAppUrl = generateWhatsAppLink(
    `Hello ${businessConfig.businessName}, I would like to inquire about a custom repair service.`
  );

  return (
    <div className="bg-white min-h-screen pb-20 space-y-0">
      
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-blue-400 bg-blue-950/80 px-3.5 py-1.5 rounded-full border border-blue-800/60">
            Professional Technical Catalog
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Repair & Engineering <span className="text-blue-500">Services</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Comprehensive diagnostic, maintenance, and sound solution engineering for musical instruments and pro audio equipment.
          </p>

          {/* Search Filter Input */}
          <div className="pt-4 max-w-md mx-auto">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search services (e.g. guitar, amplifier, piano, mic)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <span className="text-sm font-bold text-slate-600">
              Showing <span className="text-blue-600">{filteredServices.length}</span> Engineering Services
            </span>

            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-bold text-emerald-600 hover:text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200"
            >
              <MessageSquare className="w-3.5 h-3.5 mr-1 fill-current" />
              Custom Service Inquiry
            </a>
          </div>

          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
              <Wrench className="w-12 h-12 text-slate-400 mx-auto" />
              <p className="text-slate-600 font-medium">No service matching "{searchTerm}" found.</p>
              <button
                onClick={() => setSearchTerm('')}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold"
              >
                Clear Search
              </button>
            </div>
          )}

        </div>
      </section>

    </div>
  );
};
