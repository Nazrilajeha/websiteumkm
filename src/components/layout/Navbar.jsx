import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, MessageCircle } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const { totalCount, setIsCartOpen } = useCart();

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav 
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
        className="pointer-events-auto bg-dark/90 backdrop-blur-xl border border-white/10 rounded-full py-2.5 px-3 sm:px-5 flex items-center justify-between gap-4 sm:gap-8 shadow-2xl max-w-2xl w-full"
      >
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 text-white font-bold text-sm sm:text-base tracking-tight group">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-500 to-brand-600 flex items-center justify-center text-sm shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
            🥐
          </div>
          <span>Umi Fika <span className="text-brand-400 font-extrabold">Bakery</span></span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-white/70">
          <a href="#menu" className="hover:text-white transition-colors">Menu</a>
          <a href="#kualitas" className="hover:text-white transition-colors">Bahan</a>
          <a href="#katering" className="hover:text-white transition-colors">Paket Acara</a>
          <a href="#testimoni" className="hover:text-white transition-colors">Testimoni</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/10 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer"
          >
            <ShoppingBag size={15} className="text-brand-400" />
            <span className="hidden sm:inline">Keranjang</span>
            <span className="bg-brand-500 text-white font-bold text-[11px] px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
              {totalCount}
            </span>
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.94 }}
            href="https://wa.me/6281234567890?text=Halo%20Umi%20Fika%20Bakery,%20mau%20tanya%20menu%20ready"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 bg-white text-dark hover:bg-amber-100 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shadow-sm"
          >
            <MessageCircle size={14} className="text-emerald-600" />
            <span>Chat WA</span>
          </motion.a>
        </div>
      </motion.nav>
    </header>
  );
}
