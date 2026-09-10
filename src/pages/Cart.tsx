import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { CartItemRow } from '../components/CartItem';
import { CartSummary } from '../components/CartSummary';

export const Cart: React.FC = () => {
  const { cart } = useCart();

  useEffect(() => {
    document.title = "Shopping Cart | Lekarsemir Musical";
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 flex items-center">
              <ShoppingCart className="w-8 h-8 mr-3 text-blue-600" />
              Your Shopping Cart
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Review your selected musical instruments and audio gear before submitting your order via WhatsApp.
            </p>
          </div>

          <Link
            to="/shop"
            className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Continue Shopping
          </Link>
        </div>

        {/* Main Cart Content */}
        {cart.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Cart Items List */}
            <div className="lg:col-span-8 space-y-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider flex justify-between">
                <span>Items in Cart ({cart.length})</span>
                <span>Subtotal</span>
              </div>

              <div className="space-y-4">
                {cart.map((item) => (
                  <CartItemRow key={item.product.id} item={item} />
                ))}
              </div>
            </div>

            {/* Right Column: Order Summary & WhatsApp Dispatch */}
            <div className="lg:col-span-4">
              <CartSummary />
            </div>

          </div>
        ) : (
          /* Empty Cart State */
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto space-y-6 shadow-sm">
            <div className="w-20 h-20 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
              <ShoppingBag className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-slate-900">Your cart is empty.</h2>
              <p className="text-slate-500 text-sm">
                Explore our catalog of professional guitars, keyboards, microphones, amplifiers, and studio equipment.
              </p>
            </div>

            <div>
              <Link
                to="/shop"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-lg shadow-blue-600/20 transition-colors"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Continue Shopping
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
