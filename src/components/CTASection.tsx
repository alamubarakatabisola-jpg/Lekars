import React from 'react';
import { MessageSquare, Wrench } from 'lucide-react';
import { WaveformBg } from './WaveformBg';
import { businessConfig } from '../config/businessConfig';
import { generateWhatsAppLink } from '../utils/whatsapp';

export const CTASection: React.FC = () => {
  const whatsAppUrl = generateWhatsAppLink(
    `Hello ${businessConfig.businessName}, my instrument/audio gear needs professional servicing. Please let me know how I can send it in.`
  );

  return (
    <section className="relative bg-slate-950 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-y border-slate-800">
      <WaveformBg />
      
      {/* Radial Blue Light Spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
        
        <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center mx-auto shadow-inner">
          <Wrench className="w-7 h-7" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Is Your Instrument Not Performing at Its Best?
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Let our team help you restore your instrument and get your sound back. Fast turnaround, precision diagnostics, and guaranteed workmanship.
        </p>

        <div className="pt-4">
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-xl shadow-emerald-600/30 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <MessageSquare className="w-5 h-5 mr-3 fill-current" />
            Chat With Us on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
