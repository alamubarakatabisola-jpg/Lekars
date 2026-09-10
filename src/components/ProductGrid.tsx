import React, { useState, useMemo } from 'react';
import type { Product } from '../types';
import { ProductCard } from './ProductCard';
import { SlidersHorizontal } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  showCategoryFilter?: boolean;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  showCategoryFilter = true,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const cats = ['All', ...new Set(products.map((p) => p.category))];
    return cats;
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [products, selectedCategory]);

  return (
    <div className="space-y-8">
      {/* Category Filter Controls */}
      {showCategoryFilter && (
        <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-slate-200">
          <div className="flex items-center text-xs font-bold text-slate-500 uppercase mr-3">
            <SlidersHorizontal className="w-4 h-4 mr-1.5 text-blue-600" />
            Category:
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Grid of Product Cards */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-xl border border-slate-200">
          <p className="text-slate-500 font-medium">No products found in this category.</p>
        </div>
      )}
    </div>
  );
};
