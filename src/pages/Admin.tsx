import React, { useState, useEffect } from 'react';
import { 
  Plus, Edit3, Trash2, ShieldCheck, Lock, LogOut, Search, 
  Tag, CheckCircle2, XCircle, RefreshCw, AlertTriangle, Check, Eye, EyeOff,
  UploadCloud, Loader2
} from 'lucide-react';
import type { Product } from '../types';
import { useProducts } from '../hooks/useProducts';
import { businessConfig } from '../config/businessConfig';
import { formatNaira } from '../utils/whatsapp';
import { uploadToCloudinary } from '../utils/cloudinary';

export const Admin: React.FC = () => {
  const { products, addProduct, updateProduct, deleteProduct, resetToDefaultProducts } = useProducts();

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('lekarsemir_admin_auth') === 'true';
  });
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Modal States
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [deletingProductId, setDeletingProductId] = useState<string | null>(null);
  const [isResetConfirmOpen, setIsResetConfirmOpen] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [isUploadingImage, setIsUploadingImage] = useState(false);

  // Form Fields
  const [formData, setFormData] = useState<{
    name: string;
    description: string;
    price: number;
    image: string;
    category: Product['category'];
    available: boolean;
    featuresText: string;
  }>({
    name: '',
    description: '',
    price: 0,
    image: '',
    category: 'Guitar',
    available: true,
    featuresText: '',
  });

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingImage(true);
    try {
      const url = await uploadToCloudinary(file);
      setFormData((prev) => ({ ...prev, image: url }));
      showFeedback('Image uploaded to Cloudinary successfully!', 'success');
    } catch (err: any) {
      showFeedback(err.message || 'Image upload failed. Please try again.', 'error');
    } finally {
      setIsUploadingImage(false);
    }
  };

  useEffect(() => {
    document.title = "Admin Portal | Lekarsemir Musical";
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === businessConfig.adminPasscode) {
      setIsAuthenticated(true);
      sessionStorage.setItem('lekarsemir_admin_auth', 'true');
      setAuthError('');
    } else {
      setAuthError('Invalid passcode. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('lekarsemir_admin_auth');
  };

  const openAddForm = () => {
    setEditingProduct(null);
    setFormData({
      name: '',
      description: '',
      price: 150000,
      image: 'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?q=80&w=800&auto=format&fit=crop',
      category: 'Guitar',
      available: true,
      featuresText: 'High Build Quality, Studio Calibrated',
    });
    setIsFormOpen(true);
  };

  const openEditForm = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
      category: product.category,
      available: product.available,
      featuresText: product.features ? product.features.join(', ') : '',
    });
    setIsFormOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || formData.price <= 0) {
      setFeedbackMsg({ text: 'Please fill in a valid product name and price.', type: 'error' });
      return;
    }

    const featuresArray = formData.featuresText
      ? formData.featuresText.split(',').map((f) => f.trim()).filter(Boolean)
      : undefined;

    if (editingProduct) {
      updateProduct(editingProduct.id, {
        name: formData.name,
        description: formData.description,
        price: Number(formData.price),
        image: formData.image || 'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?q=80&w=800&auto=format&fit=crop',
        category: formData.category,
        available: formData.available,
        features: featuresArray,
      });
      showFeedback('Product updated successfully!');
    } else {
      addProduct({
        name: formData.name,
        description: formData.description,
        price: Number(formData.price),
        image: formData.image || 'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?q=80&w=800&auto=format&fit=crop',
        category: formData.category,
        available: formData.available,
        features: featuresArray,
      });
      showFeedback('New product added to catalog!');
    }

    setIsFormOpen(false);
  };

  const confirmDelete = (id: string) => {
    deleteProduct(id);
    setDeletingProductId(null);
    showFeedback('Product removed from catalog.');
  };

  const handleResetCatalog = () => {
    resetToDefaultProducts();
    setIsResetConfirmOpen(false);
    showFeedback('Product catalog restored to factory default list.');
  };

  const showFeedback = (msg: string, type: 'success' | 'error' = 'success') => {
    setFeedbackMsg({ text: msg, type });
    setTimeout(() => setFeedbackMsg(null), 3500);
  };

  // Filtered Products
  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categoriesList = ['All', 'Guitar', 'Keyboard & Piano', 'Audio Equipment', 'Microphones', 'Drums & Percussion', 'Accessories'];

  // Passcode Protection Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
        <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl space-y-6 relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center mx-auto">
            <Lock className="w-7 h-7" />
          </div>

          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold text-white uppercase tracking-wider">
              {businessConfig.businessName}
            </h1>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
              Admin Control Panel Login
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="passcode" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Enter Admin Passcode
              </label>
              <input
                type="password"
                id="passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Passcode (Default: 1234)"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-mono text-center tracking-widest"
                autoFocus
              />
              {authError && <p className="text-xs text-red-400 mt-2 font-medium">{authError}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all duration-200"
            >
              Access Admin Dashboard
            </button>
          </form>

          <p className="text-[11px] text-center text-slate-500">
            Default Passcode: <span className="font-mono text-blue-400 font-bold">1234</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-20">

      {/* Admin Top Header Banner */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white uppercase tracking-wider">
                Product Inventory Admin Panel
              </h1>
              <span className="text-xs text-blue-400 font-mono">
                {products.length} Products Registered in Store
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={openAddForm}
              className="inline-flex items-center px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-all"
            >
              <Plus className="w-4 h-4 mr-1.5" />
              Add New Product
            </button>

            <button
              onClick={() => setIsResetConfirmOpen(true)}
              className="inline-flex items-center px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs border border-slate-700 transition-colors"
              title="Reset products to default sample catalog"
            >
              <RefreshCw className="w-3.5 h-3.5 mr-1" />
              Reset Catalog
            </button>

            <button
              onClick={handleLogout}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-red-950/60 hover:text-red-400 text-slate-400 transition-colors border border-slate-700"
              title="Exit Admin Session"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Floating Notification Banner */}
      {feedbackMsg && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div
            className={`px-5 py-3 rounded-xl shadow-2xl text-xs font-bold flex items-center space-x-2 ${feedbackMsg.type === 'success' ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white'
              }`}
          >
            <Check className="w-4 h-4" />
            <span>{feedbackMsg.text}</span>
          </div>
        </div>
      )}

      {/* Main Admin Dashboard Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        {/* Metric Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-1">
            <span className="text-xs uppercase tracking-wider font-bold text-slate-400">Total Products</span>
            <p className="text-3xl font-extrabold text-white">{products.length}</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-1">
            <span className="text-xs uppercase tracking-wider font-bold text-emerald-400">In Stock Products</span>
            <p className="text-3xl font-extrabold text-emerald-400">
              {products.filter((p) => p.available).length}
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-1">
            <span className="text-xs uppercase tracking-wider font-bold text-blue-400">Categories</span>
            <p className="text-3xl font-extrabold text-blue-400">
              {new Set(products.map((p) => p.category)).size}
            </p>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Filter products by title or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
            {categoriesList.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${selectedCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Management Table */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-950/80 text-slate-400 border-b border-slate-800 font-semibold uppercase tracking-wider">
                  <th className="py-4 px-6">Product</th>
                  <th className="py-4 px-4">Category</th>
                  <th className="py-4 px-4">Price (₦)</th>
                  <th className="py-4 px-4">Status</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <tr key={product.id} className="hover:bg-slate-800/40 transition-colors">

                      {/* Product details */}
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-4">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-14 h-14 object-cover rounded-xl bg-slate-950 border border-slate-800 shrink-0"
                          />
                          <div>
                            <p className="font-bold text-white text-sm line-clamp-1">{product.name}</p>
                            <p className="text-slate-400 text-[11px] line-clamp-1 max-w-xs">{product.description}</p>
                          </div>
                        </div>
                      </td>

                      {/* Category */}
                      <td className="py-4 px-4">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-950 text-blue-400 border border-slate-800 font-semibold">
                          <Tag className="w-3 h-3 mr-1" />
                          {product.category}
                        </span>
                      </td>

                      {/* Price */}
                      <td className="py-4 px-4 font-bold text-white text-sm">
                        {formatNaira(product.price)}
                      </td>

                      {/* Status */}
                      <td className="py-4 px-4">
                        {product.available ? (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 font-semibold">
                            <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> In Stock
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-red-950/80 text-red-400 border border-red-800/60 font-semibold">
                            <XCircle className="w-3.5 h-3.5 mr-1" /> Out of Stock
                          </span>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-6 text-right space-x-2">
                        <button
                          onClick={() => openEditForm(product)}
                          className="px-3 py-1.5 rounded-lg bg-blue-950 text-blue-400 hover:bg-blue-900 hover:text-white border border-blue-800/60 font-semibold transition-colors"
                        >
                          <Edit3 className="w-3.5 h-3.5 inline mr-1" /> Edit
                        </button>
                        <button
                          onClick={() => setDeletingProductId(product.id)}
                          className="px-3 py-1.5 rounded-lg bg-red-950 text-red-400 hover:bg-red-900 hover:text-white border border-red-800/60 font-semibold transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5 inline mr-1" /> Delete
                        </button>
                      </td>

                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-slate-500 font-medium">
                      No products match your filter criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </main>

      {/* CREATE / EDIT PRODUCT MODAL FORM */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-6 my-8">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h2 className="text-xl font-bold text-white flex items-center">
                {editingProduct ? <Edit3 className="w-5 h-5 mr-2 text-blue-400" /> : <Plus className="w-5 h-5 mr-2 text-blue-400" />}
                {editingProduct ? `Edit Product` : `Add New Product`}
              </h2>
              <button
                onClick={() => setIsFormOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* Product Name */}
                <div>
                  <label htmlFor="prodName" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Product Title *
                  </label>
                  <input
                    type="text"
                    id="prodName"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Fender Custom Stratocaster"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>

                {/* Category */}
                <div>
                  <label htmlFor="prodCat" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Category *
                  </label>
                  <select
                    id="prodCat"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as Product['category'] })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="Guitar">Guitar</option>
                    <option value="Keyboard & Piano">Keyboard & Piano</option>
                    <option value="Audio Equipment">Audio Equipment</option>
                    <option value="Microphones">Microphones</option>
                    <option value="Drums & Percussion">Drums & Percussion</option>
                    <option value="Accessories">Accessories</option>
                  </select>
                </div>

                {/* Price (₦) */}
                <div>
                  <label htmlFor="prodPrice" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Price in Naira (₦) *
                  </label>
                  <input
                    type="number"
                    id="prodPrice"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                    placeholder="e.g. 250000"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    min="0"
                    required
                  />
                </div>

                {/* Availability Toggle */}
                <div>
                  <label htmlFor="prodAvailable" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Stock Availability
                  </label>
                  <div className="flex items-center space-x-3 pt-2">
                    <input
                      type="checkbox"
                      id="prodAvailable"
                      checked={formData.available}
                      onChange={(e) => setFormData({ ...formData, available: e.target.checked })}
                      className="w-5 h-5 rounded bg-slate-950 border-slate-800 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-xs font-semibold text-slate-300">
                      {formData.available ? 'Available (In Stock)' : 'Out of Stock'}
                    </span>
                  </div>
                </div>

              </div>

              {/* Product Image: Cloudinary Direct Upload + URL Input */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Product Image (Cloudinary Upload or Direct URL)
                </label>

                {/* Cloudinary File Upload Button */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <label
                    htmlFor="cloudinary-upload"
                    className={`inline-flex items-center justify-center px-4 py-2.5 rounded-xl border border-blue-500/40 text-xs font-bold cursor-pointer transition-all ${
                      isUploadingImage
                        ? 'bg-blue-950/60 text-blue-300 animate-pulse'
                        : 'bg-blue-600 hover:bg-blue-500 text-white shadow-md'
                    }`}
                  >
                    {isUploadingImage ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin text-blue-300" />
                        Uploading to Cloudinary...
                      </>
                    ) : (
                      <>
                        <UploadCloud className="w-4 h-4 mr-2" />
                        Upload Image File to Cloudinary
                      </>
                    )}
                  </label>
                  <input
                    type="file"
                    id="cloudinary-upload"
                    accept="image/*"
                    onChange={handleFileUpload}
                    disabled={isUploadingImage}
                    className="hidden"
                  />

                  <span className="text-[11px] text-slate-500 text-center sm:text-left">or paste image URL below:</span>
                </div>

                {/* Direct URL input & Preview */}
                <div className="flex items-center space-x-3">
                  <input
                    type="url"
                    id="prodImage"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="https://res.cloudinary.com/dbbsvb9b5/..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  {formData.image && (
                    <div className="relative group shrink-0">
                      <img
                        src={formData.image}
                        alt="Preview"
                        className="w-12 h-12 object-cover rounded-xl bg-slate-950 border border-slate-700"
                      />
                      {formData.image.includes('cloudinary') && (
                        <span className="absolute -bottom-1 -right-1 bg-emerald-500 text-slate-950 text-[9px] font-extrabold px-1 rounded shadow">
                          Cloud
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="prodDesc" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Short Description
                </label>
                <textarea
                  id="prodDesc"
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Provide technical specs and overview of this instrument..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Key Features (Comma Separated) */}
              <div>
                <label htmlFor="prodFeat" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Key Features (Comma Separated)
                </label>
                <input
                  type="text"
                  id="prodFeat"
                  value={formData.featuresText}
                  onChange={(e) => setFormData({ ...formData, featuresText: e.target.value })}
                  placeholder="Dual Pickups, Solid Mahogany, Locking Tuners"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Form Buttons */}
              <div className="flex justify-end space-x-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30"
                >
                  {editingProduct ? 'Save Changes' : 'Create Product'}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* DELETE CONFIRMATION MODAL */}
      {deletingProductId && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 text-center">
            <div className="w-12 h-12 rounded-2xl bg-red-950 border border-red-800 text-red-400 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Delete Product?</h3>
            <p className="text-slate-400 text-xs">
              Are you sure you want to delete this product from the catalog? This action cannot be undone.
            </p>
            <div className="flex justify-center space-x-3 pt-2">
              <button
                onClick={() => setDeletingProductId(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={() => confirmDelete(deletingProductId)}
                className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* RESET CATALOG CONFIRMATION MODAL */}
      {isResetConfirmOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 text-center">
            <div className="w-12 h-12 rounded-2xl bg-blue-950 border border-blue-800 text-blue-400 flex items-center justify-center mx-auto">
              <RefreshCw className="w-6 h-6 animate-spin" />
            </div>
            <h3 className="text-lg font-bold text-white">Reset to Default Catalog?</h3>
            <p className="text-slate-400 text-xs">
              This will restore the factory initial sample products list and clear custom modifications.
            </p>
            <div className="flex justify-center space-x-3 pt-2">
              <button
                onClick={() => setIsResetConfirmOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleResetCatalog}
                className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold"
              >
                Reset Products
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
