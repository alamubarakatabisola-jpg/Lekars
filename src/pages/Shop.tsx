import React, { useEffect, useState } from 'react';
import { ShoppingBag, Search, ShieldCheck } from 'lucide-react';
import { ProductGrid } from '../components/ProductGrid';
import { useProducts } from '../hooks/useProducts';

export const Shop: React.FC = () => {
  const { products } = useProducts();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    document.title = "Musical Equipment Shop | Lekarsemir Musical";
  }, []);

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen pb-20 space-y-0">
      
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-blue-400 bg-blue-950/80 px-3.5 py-1.5 rounded-full border border-blue-800/60">
            Certified Gear Catalog
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Instrument & Audio <span className="text-blue-500">Shop</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Browse our inspected, tested, and calibrated musical instruments, microphones, and sound engineering accessories.
          </p>

          {/* Search Box */}
          <div className="pt-4 max-w-md mx-auto">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search products (e.g. guitar, synthesizer, headphones, cable)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Shop Catalog Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="flex items-center space-x-2 text-slate-700 text-sm font-semibold">
              <ShoppingBag className="w-5 h-5 text-blue-600" />
              <span>Available Inventory ({filteredProducts.length} Items)</span>
            </div>

            <div className="flex items-center space-x-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>All products fully tested & backed by technical support</span>
            </div>
          </div>

          <ProductGrid products={filteredProducts} showCategoryFilter={true} />

        </div>
      </section>

    </div>
  );
};
