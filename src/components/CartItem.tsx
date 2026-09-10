import React from 'react';
import { Plus, Minus, Trash2 } from 'lucide-react';
import type { CartItem as CartItemType } from '../types';
import { useCart } from '../hooks/useCart';
import { formatNaira } from '../utils/whatsapp';

export const CartItemRow: React.FC<{ item: CartItemType }> = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeItem } = useCart();
  const subtotal = item.product.price * item.quantity;

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-white rounded-xl border border-slate-200 shadow-sm gap-4 transition-all hover:border-slate-300">
      
      {/* Product Image & Title */}
      <div className="flex items-center space-x-4 w-full sm:w-auto">
        <img
          src={item.product.image}
          alt={item.product.name}
          className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg bg-slate-100 shrink-0"
        />
        <div className="space-y-1">
          <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-tight">
            {item.product.name}
          </h4>
          <p className="text-xs text-slate-500">
            Category: <span className="font-semibold text-slate-700">{item.product.category}</span>
          </p>
          <p className="text-xs text-blue-600 font-bold sm:hidden">
            {formatNaira(item.product.price)} each
          </p>
        </div>
      </div>

      {/* Quantity & Actions Group */}
      <div className="flex items-center justify-between sm:justify-end space-x-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100">
        
        {/* Unit Price (Desktop) */}
        <div className="hidden sm:block text-right">
          <span className="text-xs text-slate-400 block uppercase font-semibold">Unit Price</span>
          <span className="text-sm font-semibold text-slate-700">{formatNaira(item.product.price)}</span>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
          <button
            onClick={() => decreaseQuantity(item.product.id)}
            className="p-2 text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>

          <span className="px-3 py-1 font-bold text-slate-900 text-sm min-w-[2.5rem] text-center">
            {item.quantity}
          </span>

          <button
            onClick={() => increaseQuantity(item.product.id)}
            className="p-2 text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Subtotal Display */}
        <div className="text-right min-w-[100px]">
          <span className="text-xs text-slate-400 block uppercase font-semibold">Subtotal</span>
          <span className="text-base font-extrabold text-slate-900">
            {formatNaira(subtotal)}
          </span>
        </div>

        {/* Delete Item Trigger */}
        <button
          onClick={() => removeItem(item.product.id)}
          className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          aria-label={`Remove ${item.product.name}`}
        >
          <Trash2 className="w-5 h-5" />
        </button>

      </div>

    </div>
  );
};
