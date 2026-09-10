import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, ShieldCheck, ChevronRight, MessageSquare, Activity, Disc } from 'lucide-react';
import { WaveformBg } from './WaveformBg';
import { businessConfig } from '../config/businessConfig';
import { generateWhatsAppLink } from '../utils/whatsapp';

export const Hero: React.FC = () => {
  const whatsAppUrl = generateWhatsAppLink(
    `Hello ${businessConfig.businessName}, I would like to book an instrument repair or technical service consultation.`
  );

  return (
    <section className="relative bg-slate-950 text-white overflow-hidden border-b border-slate-800">
      {/* Background Sound Wave SVG & Circuit Grid */}
      <WaveformBg />
      <div className="absolute inset-0 circuit-grid opacity-30 pointer-events-none"></div>

      {/* Blue Ambient Glow Spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action Buttons */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <Activity className="w-4 h-4 text-blue-400 animate-pulse" />
              <span>Precision Instrument & Audio Engineering</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Professional Musical Instrument <span className="gradient-text-blue">Repair & Engineering</span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
              Expert repair, maintenance and technical solutions for musical instruments and audio equipment — helping musicians and professionals keep their sound performing at its best.
            </p>

            {/* Action Buttons Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-xl shadow-blue-600/30 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Wrench className="w-5 h-5 mr-2" />
                Book a Repair
              </Link>

              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-base transition-colors"
              >
                Explore Services
                <ChevronRight className="w-5 h-5 ml-1" />
              </Link>

              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-lg shadow-emerald-600/20 transition-all duration-200"
              >
                <MessageSquare className="w-5 h-5 mr-2 fill-current" />
                Order on WhatsApp
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Precision Calibrated</span>
              </div>
              <div className="flex items-center space-x-2">
                <Disc className="w-5 h-5 text-blue-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Pro Audio Grade</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wrench className="w-5 h-5 text-blue-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Expert Technicians</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Graphic */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Image Card */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 audio-glow group">
                <img
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop"
                  alt="Lekarsemir Musical Instrument Repair & Technical Workshop"
                  className="w-full h-[400px] lg:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                {/* Floating Technical Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl dark-audio-card text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
                      <div>
                        <p className="text-xs font-bold text-blue-400 uppercase tracking-wider">Technical Workshop Active</p>
                        <p className="text-sm font-semibold text-white">Synthesizers • Guitars • Amplifiers • Pro Audio</p>
                      </div>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded bg-blue-900/60 text-blue-300 border border-blue-700/50 font-mono">
                      100% Calibrated
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
