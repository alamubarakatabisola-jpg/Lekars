import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Trash2, ArrowLeft, MessageSquare, ShieldCheck } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { formatNaira, generateCartWhatsAppMessage } from '../utils/whatsapp';

export const CartSummary: React.FC = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const total = getCartTotal();

  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    phone: '',
    location: '',
    notes: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCustomerDetails((prev) => ({ ...prev, [name]: value }));
  };

  const whatsAppUrl = generateCartWhatsAppMessage(cart, total, customerDetails);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-lg space-y-6 sticky top-28">
      <div className="border-b border-slate-100 pb-4">
        <h3 className="text-xl font-extrabold text-slate-900 flex items-center">
          <ShoppingBag className="w-5 h-5 mr-2 text-blue-600" />
          Order Summary
        </h3>
      </div>

      {/* Customer Optional Information Form */}
      <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
        <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">
          Optional Details (Appends to WhatsApp Order)
        </p>

        <div>
          <label htmlFor="name" className="block text-xs text-slate-600 font-medium mb-1">
            Your Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={customerDetails.name}
            onChange={handleInputChange}
            placeholder="e.g. Samuel Okon"
            className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs text-slate-600 font-medium mb-1">
            Phone / Contact Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={customerDetails.phone}
            onChange={handleInputChange}
            placeholder="e.g. 08087431135"
            className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-xs text-slate-600 font-medium mb-1">
            Delivery / Pickup City
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={customerDetails.location}
            onChange={handleInputChange}
            placeholder="e.g. Victoria Island, Lagos"
            className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
          />
        </div>

        <div>
          <label htmlFor="notes" className="block text-xs text-slate-600 font-medium mb-1">
            Additional Instructions
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={2}
            value={customerDetails.notes}
            onChange={handleInputChange}
            placeholder="Any special requests..."
            className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white resize-none"
          />
        </div>
      </div>

      {/* Pricing Breakdown */}
      <div className="space-y-3 pt-2">
        <div className="flex justify-between text-sm text-slate-600">
          <span>Subtotal</span>
          <span className="font-semibold text-slate-900">{formatNaira(total)}</span>
        </div>
        <div className="flex justify-between text-sm text-slate-600">
          <span>Estimated Logistics / Pickup</span>
          <span className="text-emerald-600 font-semibold">Calculated on WhatsApp</span>
        </div>
        <div className="border-t border-slate-200 pt-3 flex justify-between text-lg font-extrabold text-slate-900">
          <span>Total</span>
          <span className="text-blue-600">{formatNaira(total)}</span>
        </div>
      </div>

      {/* Main Order Trigger: Native anchor tag guarantees direct navigation without popup blocker issues */}
      <a
        href={cart.length > 0 ? whatsAppUrl : '#'}
        target={cart.length > 0 ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className={`w-full inline-flex items-center justify-center px-6 py-4 rounded-xl font-bold text-base shadow-lg transition-all duration-200 ${
          cart.length > 0
            ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/30'
            : 'bg-slate-300 text-slate-500 cursor-not-allowed pointer-events-none'
        }`}
      >
        <MessageSquare className="w-5 h-5 mr-2 fill-current" />
        Order on WhatsApp
      </a>

      {/* Secondary Actions */}
      <div className="flex items-center justify-between pt-2 text-xs">
        <Link
          to="/shop"
          className="inline-flex items-center text-slate-600 hover:text-blue-600 font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Continue Shopping
        </Link>

        {cart.length > 0 && (
          <button
            onClick={clearCart}
            className="inline-flex items-center text-slate-400 hover:text-red-600 font-medium transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5 mr-1" />
            Clear Cart
          </button>
        )}
      </div>

      <div className="pt-2 border-t border-slate-100 flex items-center justify-center text-[11px] text-slate-400 space-x-1">
        <ShieldCheck className="w-4 h-4 text-emerald-500" />
        <span>Direct WhatsApp Order Confirmation • No Portal Login Required</span>
      </div>

    </div>
  );
};
