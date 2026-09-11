import React, { useState } from 'react';
import { ShoppingCart, Check, MessageSquare, Tag, PackageX } from 'lucide-react';
import type { Product } from '../types';
import { useCart } from '../hooks/useCart';
import { formatNaira, generateProductWhatsAppMessage } from '../utils/whatsapp';

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const isOutOfStock = product.stockQty === 0 || !product.available;

  const handleAddToCart = () => {
    if (isOutOfStock) return;
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const whatsAppUrl = generateProductWhatsAppMessage(product.name, product.price);

  return (
    <div className={`bg-white rounded-xl border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group ${isOutOfStock ? 'border-slate-200 opacity-80' : 'border-slate-200'}`}>

      {/* Product Image Container */}
      <div className="relative aspect-video sm:aspect-square overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 ${isOutOfStock ? 'grayscale-[40%]' : 'group-hover:scale-105'}`}
          loading="lazy"
        />

        {/* Greyed out overlay for out of stock */}
        {isOutOfStock && (
          <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center">
            <div className="bg-slate-900/90 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center gap-2 font-bold text-sm shadow-xl">
              <PackageX className="w-4 h-4 text-red-400" />
              Out of Stock
            </div>
          </div>
        )}

        {/* Category Tag */}
        <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-md flex items-center">
          <Tag className="w-3 h-3 mr-1 text-blue-400" />
          {product.category}
        </span>

        {/* Availability Badge */}
        {isOutOfStock ? (
          <span className="absolute top-3 right-3 bg-red-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
            Out of Stock
          </span>
        ) : (
          <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider bg-emerald-500/90 text-white">
            {product.stockQty <= 3 ? `Only ${product.stockQty} left!` : 'In Stock'}
          </span>
        )}
      </div>

      {/* Product Content Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className={`text-lg font-bold mb-1 line-clamp-1 transition-colors ${isOutOfStock ? 'text-slate-500' : 'text-slate-900 group-hover:text-blue-600'}`}>
            {product.name}
          </h3>
          <p className="text-slate-600 text-xs line-clamp-2 leading-relaxed mb-4">
            {product.description}
          </p>
        </div>

        {/* Price + Stock Row */}
        <div className="pt-2 border-t border-slate-100 mb-4 flex items-end justify-between">
          <div>
            <span className="text-xs text-slate-500 block uppercase font-semibold">Price</span>
            <span className={`text-xl font-extrabold ${isOutOfStock ? 'text-slate-400' : 'text-slate-900'}`}>
              {formatNaira(product.price)}
            </span>
          </div>
          {/* Stock indicator */}
          <div className="text-right">
            <span className="text-[10px] font-bold uppercase text-slate-400 block">Stock</span>
            <span className={`text-sm font-bold ${
              product.stockQty === 0
                ? 'text-red-500'
                : product.stockQty <= 3
                ? 'text-amber-500'
                : 'text-emerald-600'
            }`}>
              {product.stockQty === 0 ? '—' : `${product.stockQty} units`}
            </span>
          </div>
        </div>

        {/* Action Buttons: Add to Cart & Buy on WhatsApp */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={handleAddToCart}
            disabled={isOutOfStock}
            className={`w-full inline-flex items-center justify-center px-3 py-2.5 rounded-lg font-semibold text-xs transition-colors duration-200 ${
              isOutOfStock
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
                : added
                ? 'bg-emerald-600 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm'
            }`}
          >
            {isOutOfStock ? (
              <>
                <PackageX className="w-4 h-4 mr-1" />
                Unavailable
              </>
            ) : added ? (
              <>
                <Check className="w-4 h-4 mr-1" />
                Added!
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4 mr-1" />
                Add to Cart
              </>
            )}
          </button>

          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center px-3 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors border border-slate-700"
          >
            <MessageSquare className="w-4 h-4 mr-1 text-emerald-400 fill-current" />
            WhatsApp
          </a>
        </div>

      </div>

    </div>
  );
};
