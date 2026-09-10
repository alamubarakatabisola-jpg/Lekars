import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Phone, Mail, MapPin, Clock, MessageSquare, Video } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';
import { generateWhatsAppLink } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const defaultWhatsAppUrl = generateWhatsAppLink(
    `Hello ${businessConfig.businessName}, I would like to get in touch regarding instrument repair and pro audio servicing.`
  );

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
                <Wrench className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white uppercase">
                LEKARSEMIR <span className="text-blue-500">MUSICAL</span>
              </span>
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed">
              {businessConfig.tagline}
            </p>
            
            <p className="text-blue-400 font-semibold text-sm">
              "{businessConfig.supportingMessage}"
            </p>

            <div className="pt-2">
              <a
                href={defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider shadow-md transition-colors"
              >
                <MessageSquare className="w-4 h-4 mr-2 fill-current" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-bold uppercase tracking-wider border-b border-slate-800 pb-2">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors flex items-center">
                  <span className="text-blue-500 mr-2">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors flex items-center">
                  <span className="text-blue-500 mr-2">›</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors flex items-center">
                  <span className="text-blue-500 mr-2">›</span> Repair Services
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-blue-400 transition-colors flex items-center">
                  <span className="text-blue-500 mr-2">›</span> Instrument Shop
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors flex items-center">
                  <span className="text-blue-500 mr-2">›</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Repair & Engineering Specialties */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-bold uppercase tracking-wider border-b border-slate-800 pb-2">
              Services & Expertise
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>• Guitar Repair & Fret Dressing</li>
              <li>• Keyboard & Synthesizer Calibration</li>
              <li>• Tube & Solid-State Amp Diagnostics</li>
              <li>• Speaker Re-coning & Driver Repair</li>
              <li>• Microphone Capsule Restoration</li>
              <li>• Sound System Engineering</li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-bold uppercase tracking-wider border-b border-slate-800 pb-2">
              Get In Touch
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-slate-400">{businessConfig.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <a href={`tel:${businessConfig.phoneNumber}`} className="hover:text-white transition-colors">
                  {businessConfig.phoneNumber}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <a href={`mailto:${businessConfig.email}`} className="hover:text-white transition-colors">
                  {businessConfig.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-slate-400 text-xs">{businessConfig.businessHours}</span>
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="pt-2">
              <p className="text-xs uppercase font-semibold text-slate-500 mb-2 tracking-wider">Follow Us</p>
              <div className="flex space-x-3">
                <a
                  href={businessConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors text-slate-400"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href={businessConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors text-slate-400"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                  </svg>
                </a>
                <a
                  href={businessConfig.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors text-slate-400"
                  aria-label="TikTok"
                >
                  <Video className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Footer Bottom Line */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 space-y-4 md:space-y-0">
          <p>© 2026 {businessConfig.businessName}. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <span>Musical Instrument Repair</span>
            <span>•</span>
            <span>Audio Engineering</span>
            <span>•</span>
            <span>Pro Gear Shop</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
