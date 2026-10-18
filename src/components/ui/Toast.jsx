import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/CartContext';

export default function Toast() {
  const { toast } = useCart();

  return (
    <AnimatePresence>
      {toast.show && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-dark text-white px-5 py-3 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-2.5 shadow-2xl border border-white/10 pointer-events-none"
        >
          <span className="text-base">🍞</span>
          <span>{toast.message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
