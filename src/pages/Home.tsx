import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Wrench, Sparkles, ArrowRight, 
  MessageSquare, Sliders, Activity, Disc, Cpu 
} from 'lucide-react';
import { Hero } from '../components/Hero';
import { ServiceCard } from '../components/ServiceCard';
import { ProductCard } from '../components/ProductCard';
import { CTASection } from '../components/CTASection';
import { servicesData } from '../data/services';
import { useProducts } from '../hooks/useProducts';
import { businessConfig } from '../config/businessConfig';
import { generateWhatsAppLink } from '../utils/whatsapp';

export const Home: React.FC = () => {
  const { products } = useProducts();

  useEffect(() => {
    document.title = "Professional Musical Instrument Repair | Lekarsemir Musical";
  }, []);

  const featuredServices = servicesData.slice(0, 6);
  const featuredProducts = products.slice(0, 4);

  const whatsAppUrl = generateWhatsAppLink(
    `Hello ${businessConfig.businessName}, I am visiting your website and would like to learn more about your services.`
  );

  return (
    <div className="space-y-0">
      
      {/* Hero Section */}
      <Hero />

      {/* 1. Professional Introduction */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
                <Activity className="w-4 h-4" />
                <span>About Lekarsemir Musical</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Reliable Repairs. Better Sound. <span className="text-blue-600">Professional Results.</span>
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                At <strong className="text-slate-900">{businessConfig.businessName}</strong>, we specialize in high-precision musical instrument repair, audio gear maintenance, and technical sound engineering. Whether you perform with a vintage tube amplifier, a high-end stage piano, or a handcrafted acoustic guitar, our certified technicians ensure every component functions with peak acoustic accuracy.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 text-sm mb-1 flex items-center">
                    <Wrench className="w-4 h-4 text-blue-600 mr-2" />
                    Technical Precision
                  </div>
                  <p className="text-xs text-slate-500">Oscilloscope and acoustic signal path testing for zero degradation.</p>
                </div>
                
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 text-sm mb-1 flex items-center">
                    <ShieldCheck className="w-4 h-4 text-blue-600 mr-2" />
                    Quality Workmanship
                  </div>
                  <p className="text-xs text-slate-500">Genuine OEM replacement parts and structural guarantees.</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group"
                >
                  Learn more about our engineering team
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Intro Image Visual */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?q=80&w=1000&auto=format&fit=crop"
                  alt="Audio Engineering Equipment Servicing"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md text-white border border-slate-800">
                  <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Engineering Specialty</p>
                  <p className="text-sm font-bold text-white">Audio Mixers • Tube Amps • Studio Outboard Gear</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Services Preview */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600 bg-blue-100 px-3 py-1 rounded-md">
                Our Core Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
                Professional Repair & Technical Services
              </h2>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 group"
            >
              View all 12 services
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

        </div>
      </section>

      {/* 3. Why Choose Lekarsemir Musical */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-wider text-blue-400 bg-blue-950/80 px-3.5 py-1.5 rounded-full border border-blue-800/60">
              Why Musicians Trust Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Why Choose Lekarsemir Musical
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Dedicated to craftsmanship, technical accuracy, and customer satisfaction across every instrument we service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-3 hover:border-blue-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Professional Technical Service</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Advanced diagnostics and electronic testing to pinpoint root causes, eliminating recurrent faults.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-3 hover:border-blue-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Careful Instrument Handling</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Every instrument is stored in climate-controlled environments and handled with white-glove respect.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-3 hover:border-blue-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Quality Repair Solutions</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                We use high-grade parts, gold-plated contacts, and factory-standard structural adhesive resins.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-3 hover:border-blue-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Customer-Focused Service</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Transparent quotes, direct WhatsApp consultation, and clear progress updates throughout the repair process.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-3 hover:border-blue-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center">
                <Sliders className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Reliable Support</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Post-repair advice, playability fine-tuning, and long-term care recommendations for every gear owner.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-3 hover:border-blue-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center">
                <Disc className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Attention to Detail</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Microscopic inspection of soldering joints, key alignments, nut slots, and speaker voice coils.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Featured Products */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-md">
                Instrument & Audio Shop
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
                Featured Instruments & Pro Gear
              </h2>
            </div>

            <Link
              to="/shop"
              className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 group"
            >
              Browse Full Shop
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

        </div>
      </section>

      {/* 5. How It Works */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600 bg-blue-100 px-3 py-1 rounded-md">
              Simple 4-Step Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              How It Works
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Getting your instrument repaired or serviced by Lekarsemir Musical is effortless.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative space-y-4">
              <span className="w-10 h-10 rounded-xl bg-blue-600 text-white font-extrabold text-lg flex items-center justify-center shadow-md">
                1
              </span>
              <h3 className="text-lg font-bold text-slate-900">Contact Us</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Reach out via WhatsApp or our online contact form to describe your equipment issue.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative space-y-4">
              <span className="w-10 h-10 rounded-xl bg-blue-600 text-white font-extrabold text-lg flex items-center justify-center shadow-md">
                2
              </span>
              <h3 className="text-lg font-bold text-slate-900">Tell Us About Your Instrument</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Share the brand, model, symptoms, and preferred turnaround time with our engineering team.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative space-y-4">
              <span className="w-10 h-10 rounded-xl bg-blue-600 text-white font-extrabold text-lg flex items-center justify-center shadow-md">
                3
              </span>
              <h3 className="text-lg font-bold text-slate-900">Get a Recommendation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Receive an accurate diagnostic assessment, cost estimate, and component repair plan.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative space-y-4">
              <span className="w-10 h-10 rounded-xl bg-blue-600 text-white font-extrabold text-lg flex items-center justify-center shadow-md">
                4
              </span>
              <h3 className="text-lg font-bold text-slate-900">Ready to Perform</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Collect your fully calibrated, stress-tested instrument ready for your next session or gig.
              </p>
            </div>

          </div>

          <div className="text-center pt-4">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md"
            >
              <MessageSquare className="w-4 h-4 mr-2 fill-current" />
              Start Step 1 on WhatsApp Now
            </a>
          </div>

        </div>
      </section>

      {/* 6. CTA SECTION */}
      <CTASection />

    </div>
  );
};
