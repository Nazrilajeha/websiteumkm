import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ArrowRight, MessageCircle } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cart, 
    updateQuantity, 
    removeFromCart, 
    totalPrice, 
    formatRupiah, 
    checkoutWhatsApp 
  } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm cursor-pointer"
          />

          {/* Slide-out Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="absolute top-0 right-0 bottom-0 w-full max-w-md bg-white shadow-2xl flex flex-col z-10"
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-surface">
              <div className="flex items-center gap-2.5">
                <span className="text-xl">🛍️</span>
                <h3 className="font-extrabold text-lg text-dark tracking-tight">Keranjang Pesanan</h3>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-dark flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-16 px-4">
                  <div className="text-5xl mb-4">🥐</div>
                  <h4 className="font-bold text-gray-900 text-base mb-1">Keranjang Masih Kosong</h4>
                  <p className="text-sm text-gray-500 max-w-xs mx-auto mb-6">
                    Pilih roti & pastry hangat dari katalog untuk menemani sarapan atau santai soremu!
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="inline-flex items-center gap-2 bg-dark text-white font-semibold text-xs px-5 py-2.5 rounded-full hover:bg-brand-600 transition-colors"
                  >
                    Mulai Belanja Roti <ArrowRight size={14} />
                  </button>
                </div>
              ) : (
                cart.map(item => (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex gap-4 p-3 bg-gray-50/70 border border-gray-100 rounded-2xl items-center"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm text-dark truncate">{item.title}</h4>
                      <p className="text-xs font-semibold text-brand-600 mt-0.5">
                        {formatRupiah(item.price)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-6 h-6 rounded-md bg-white border border-gray-200 flex items-center justify-center text-xs font-bold hover:bg-gray-100"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-xs font-bold text-dark w-5 text-center">{item.qty}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-6 h-6 rounded-md bg-white border border-gray-200 flex items-center justify-center text-xs font-bold hover:bg-gray-100"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-extrabold text-dark">
                        {formatRupiah(item.price * item.qty)}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 p-1 mt-2 inline-block transition-colors"
                        title="Hapus"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Drawer Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-page space-y-4">
                <div className="flex items-center justify-between text-base">
                  <span className="font-medium text-gray-500">Estimasi Total:</span>
                  <span className="font-extrabold text-xl text-brand-700">
                    {formatRupiah(totalPrice)}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={checkoutWhatsApp}
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 px-4 rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all cursor-pointer"
                >
                  <MessageCircle size={18} />
                  <span>Pesan via WhatsApp Sekarang</span>
                </motion.button>
                <p className="text-[11px] text-center text-gray-400">
                  ⚡ Konfirmasi cepat dalam hitungan menit · Diantar fresh kurir instan
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
