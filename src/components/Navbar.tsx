import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Wrench, MessageSquare } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { businessConfig } from '../config/businessConfig';
import { generateWhatsAppLink } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getCartItemCount } = useCart();
  const itemCount = getCartItemCount();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact', path: '/contact' },
  ];

  const defaultWhatsAppUrl = generateWhatsAppLink(
    `Hello ${businessConfig.businessName}, I would like to make an inquiry about your instrument repair & engineering solutions.`
  );

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Name */}
          <Link to="/" onClick={closeMobileMenu} className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/30 group-hover:bg-blue-500 transition-colors">
              <Wrench className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white block uppercase">
                LEKARSEMIR <span className="text-blue-500 font-extrabold">MUSICAL</span>
              </span>
              <span className="text-[10px] tracking-wider text-slate-400 block font-medium uppercase -mt-0.5">
                Repair & Engineering
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
            <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-xs font-semibold transition-colors ${
                    isActive
                      ? 'text-blue-400 bg-slate-900 border-b-2 border-blue-500'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Tools: Cart + WhatsApp CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/cart"
              className="relative p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                  {itemCount}
                </span>
              )}
            </Link>

            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-lg shadow-emerald-600/20 transition-all duration-200"
            >
              <MessageSquare className="w-4 h-4 mr-2 fill-current" />
              Order on WhatsApp
            </a>
          </div>

          {/* Mobile Right Controls: Cart Icon & Hamburger Toggle */}
          <div className="flex items-center space-x-3 md:hidden">
            <Link
              to="/cart"
              onClick={closeMobileMenu}
              className="relative p-2 rounded-lg text-slate-300 hover:text-white"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-7 h-7 text-blue-400" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMobileMenu}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-600/20 text-blue-400 border-l-4 border-blue-500 pl-3'
                      : 'text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="w-full flex items-center justify-center px-4 py-3 rounded-lg bg-emerald-600 text-white font-semibold text-base shadow-md"
            >
              <MessageSquare className="w-5 h-5 mr-2 fill-current" />
              Order on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
