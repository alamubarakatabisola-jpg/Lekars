import React, { useEffect } from 'react';
import { 
  Wrench, ShieldCheck, Target, Eye, Cpu, Award, CheckCircle2, MessageSquare, ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { businessConfig } from '../config/businessConfig';
import { generateWhatsAppLink } from '../utils/whatsapp';

export const About: React.FC = () => {
  useEffect(() => {
    document.title = "About Lekarsemir Musical | Instrument Repair & Engineering";
  }, []);

  const whatsAppUrl = generateWhatsAppLink(
    `Hello ${businessConfig.businessName}, I am interested in learning more about your technical expertise.`
  );

  return (
    <div className="bg-white min-h-screen space-y-0">
      
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-blue-400 bg-blue-950/80 px-3.5 py-1.5 rounded-full border border-blue-800/60">
            Technical Craftsmen
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            About <span className="text-blue-500">{businessConfig.businessName}</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            {businessConfig.tagline}
          </p>
        </div>
      </section>

      {/* 1. WHO WE ARE */}
      <section className="py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-md">
                <Wrench className="w-4 h-4" />
                <span>Who We Are</span>
              </div>

              <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
                Dedicated Technical Solutions for Musicians & Sound Engineers
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                <strong className="text-slate-900">{businessConfig.businessName}</strong> is a specialized musical instrument repair and engineering firm dedicated to keeping your instruments performing at peak acoustic efficiency. We combine traditional lutherie and acoustic restoration skills with modern electrical engineering diagnostics.
              </p>

              <p className="text-slate-600 text-base leading-relaxed">
                Whether servicing high-value electric guitars, precision stage synthesizers, tube amplifiers, dynamic studio microphones, or venue sound reinforcement systems, our technician team approaches every job with methodical rigor and deep musical passion.
              </p>

              <div className="pt-2">
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md"
                >
                  <MessageSquare className="w-4 h-4 mr-2 fill-current" />
                  Connect With Our Technicians
                </a>
              </div>
            </div>

            {/* Who We Are Graphic */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop"
                  alt="Lekarsemir Musical Engineering Bench"
                  className="w-full h-[380px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2 & 3. OUR MISSION & OUR VISION */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission Card */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md space-y-4 relative">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">OUR MISSION</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To deliver uncompromising repair quality, precise acoustic calibration, and reliable technical engineering services that empower musicians, churches, recording studios, and event venues to sound their best without technical interruption.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 font-medium pt-2">
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" /> Rapid Diagnostic & Quote Response</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" /> Zero Compromise Component Quality</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" /> Complete Customer Transparency</li>
              </ul>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md space-y-4 relative">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">OUR VISION</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To be the most trusted and technically proficient musical instrument repair and engineering company, set apart by technical integrity, innovative service solutions, and enduring customer relationships.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 font-medium pt-2">
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" /> Benchmark for Musical Engineering</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" /> Modernized Equipment Diagnostics</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" /> Nationwide Sound Maintenance Support</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 4. OUR EXPERTISE */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-md">
              Core Competencies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              OUR EXPERTISE
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Specialized technical disciplines spanning analog electronics, electro-acoustics, and mechanical craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <Cpu className="w-8 h-8 text-blue-600" />
              <h3 className="text-lg font-bold text-slate-900">Electronics & Circuitry</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                PCB diagnostics, soldering, capacitor recapping, and micro-component replacements on synthesizers and preamps.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <Wrench className="w-8 h-8 text-blue-600" />
              <h3 className="text-lg font-bold text-slate-900">Mechanical & Lutherie</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                String instrument fretwork, nut cutting, bridge re-gluing, keybed mechanical leveling, and acoustic structural repairs.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <Award className="w-8 h-8 text-blue-600" />
              <h3 className="text-lg font-bold text-slate-900">Transducer & Audio Drivers</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Speaker cone re-coning, voice coil re-winding, and microphone dynamic/condenser capsule cleaning and alignment.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <ShieldCheck className="w-8 h-8 text-blue-600" />
              <h3 className="text-lg font-bold text-slate-900">System Signal Chains</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ground loop elimination, signal loss diagnostics, custom patch cabling, and venue sound system acoustic alignment.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-white">
              WHY CHOOSE LEKARSEMIR MUSICAL
            </h2>
            <p className="text-slate-400 text-sm">
              We operate with high standards of technical precision, fast turnarounds, and friendly customer care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 space-y-2">
              <p className="text-blue-400 font-bold text-base">✓ Certified Technical Standards</p>
              <p className="text-xs text-slate-400">Strict adherence to electrical safety and acoustic engineering specs.</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 space-y-2">
              <p className="text-blue-400 font-bold text-base">✓ Clear WhatsApp Quotes</p>
              <p className="text-xs text-slate-400">No hidden charges. We confirm repair estimates before work commences.</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 space-y-2">
              <p className="text-blue-400 font-bold text-base">✓ Safe Instrument Storage</p>
              <p className="text-xs text-slate-400">Insured, climate-controlled workshop safeguards your valuable gear.</p>
            </div>
          </div>

          <div className="text-center pt-6">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg"
            >
              Explore Our Services Catalog
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};
