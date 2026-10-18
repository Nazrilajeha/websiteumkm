import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Plus, Minus, ShoppingBag, Flame, AlertCircle, Clock, ShieldCheck, Scale } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductDetailModal({ product, isOpen, onClose }) {
  const [qty, setQty] = useState(1);
  const { addToCart, formatRupiah, setIsCartOpen } = useCart();


  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, qty);
    onClose();
    setIsCartOpen(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col md:flex-row border border-gray-100"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-gray-700 hover:text-dark flex items-center justify-center shadow-md transition-all cursor-pointer"
              aria-label="Tutup"
            >
              <X size={18} />
            </button>

            {/* Left: Product Image & Badges */}
            <div className="md:w-5/12 relative bg-gray-100 flex-shrink-0 min-h-[260px] md:min-h-full">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
              
              {/* Badges on Image */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="bg-dark/85 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {product.badge}
                </span>
                {product.weight && (
                  <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-md text-dark text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                    <Scale size={11} className="text-brand-600" />
                    <span>{product.weight}</span>
                  </span>
                )}
              </div>

              {/* Rating on Mobile */}
              <div className="absolute bottom-4 left-4 md:hidden flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-dark text-xs font-bold px-3 py-1 rounded-full shadow-md">
                <Star size={13} className="text-amber-500 fill-amber-500" />
                <span>{product.rating}</span>
                <span className="text-gray-400 font-normal">({product.reviewsCount} ulasan)</span>
              </div>
            </div>

            {/* Right: Product Details & Actions */}
            <div className="md:w-7/12 p-6 sm:p-8 flex flex-col overflow-y-auto">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-brand-600">
                    {product.categoryName}
                  </span>
                  
                  {/* Rating for Desktop */}
                  <div className="hidden md:flex items-center gap-1 bg-amber-50 border border-amber-200/60 text-dark text-xs font-bold px-2.5 py-1 rounded-full">
                    <Star size={12} className="text-amber-500 fill-amber-500" />
                    <span>{product.rating}</span>
                    <span className="text-gray-400 font-medium">({product.reviewsCount})</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-dark tracking-tight">
                  {product.title}
                </h3>

                <div className="text-2xl font-black text-brand-700 mt-2">
                  {formatRupiah(product.price)}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                {product.longDesc || product.desc}
              </p>

              {/* Key Highlights / Info Grid */}
              <div className="space-y-4 mb-6">
                {/* Reheating Guide */}
                {product.reheatingTips && (
                  <div className="bg-amber-50/80 border border-amber-200/70 rounded-2xl p-3.5 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Flame size={17} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wide">
                        Saran Penyajian & Pemanasan
                      </h4>
                      <p className="text-xs text-amber-950/80 mt-0.5 leading-relaxed">
                        {product.reheatingTips}
                      </p>
                    </div>
                  </div>
                )}

                {/* Allergen & Storage Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {product.allergens && (
                    <div className="bg-gray-50 border border-gray-100 rounded-xl p-3">
                      <div className="flex items-center gap-1.5 text-gray-500 font-bold mb-1">
                        <AlertCircle size={13} className="text-amber-500" />
                        <span>Informasi Alergen</span>
                      </div>
                      <p className="text-gray-700 font-medium">
                        {product.allergens.join(', ')}
                      </p>
                    </div>
                  )}

                  {product.shelfLife && (
                    <div className="bg-gray-50 border border-gray-100 rounded-xl p-3">
                      <div className="flex items-center gap-1.5 text-gray-500 font-bold mb-1">
                        <Clock size={13} className="text-brand-600" />
                        <span>Masa Simpan</span>
                      </div>
                      <p className="text-gray-700 font-medium">
                        {product.shelfLife}
                      </p>
                    </div>
                  )}
                </div>

                {/* Ingredients Tags */}
                {product.ingredients && product.ingredients.length > 0 && (
                  <div>
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2">
                      Komposisi Bahan Pilihan:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {product.ingredients.map((ing, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-semibold bg-gray-100 text-gray-700 px-2.5 py-1 rounded-lg"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sticky / Bottom Action Section */}
              <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-4">
                {/* Quantity Control */}
                <div className="flex items-center justify-between w-full sm:w-auto bg-gray-100 rounded-full p-1.5 border border-gray-200">
                  <button
                    onClick={() => setQty(prev => Math.max(1, prev - 1))}
                    disabled={qty <= 1}
                    className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-dark hover:bg-gray-200 disabled:opacity-40 transition-colors cursor-pointer shadow-sm"
                    aria-label="Kurangi kuantitas"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-10 text-center font-bold text-sm text-dark">{qty}</span>
                  <button
                    onClick={() => setQty(prev => prev + 1)}
                    className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-dark hover:bg-gray-200 transition-colors cursor-pointer shadow-sm"
                    aria-label="Tambah kuantitas"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                {/* Add to Cart Button with total price calculation */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  className="w-full flex-1 bg-dark hover:bg-brand-600 text-white font-extrabold text-sm py-3.5 px-6 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-black/10 transition-all cursor-pointer"
                >
                  <ShoppingBag size={17} />
                  <span>Tambah ke Keranjang · {formatRupiah(product.price * qty)}</span>
                </motion.button>
              </div>

              <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-gray-400 font-medium">
                <ShieldCheck size={13} className="text-emerald-500" />
                <span>100% Mentega Segar Murni · Tanpa Pengawet Buatan</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
