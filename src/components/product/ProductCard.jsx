import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Star, Eye } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, onOpenDetail }) {
  const { addToCart, formatRupiah } = useCart();

  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="bg-white border border-gray-200/80 rounded-3xl p-4 sm:p-5 flex flex-col shadow-soft hover:shadow-hover hover:border-brand-500/30 transition-all duration-300 group"
    >
      {/* Product Image Media */}
      <div 
        onClick={() => onOpenDetail && onOpenDetail(product)}
        className="relative h-56 rounded-2xl overflow-hidden bg-gray-100 mb-4 cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Hover Quick View Overlay */}
        <div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="inline-flex items-center gap-1.5 bg-white/95 text-dark font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye size={13} className="text-brand-600" />
            <span>Lihat Detail</span>
          </span>
        </div>

        <div className="absolute top-3 left-3 bg-dark/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
          {product.badge}
        </div>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-dark text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
          <Star size={12} className="text-amber-500 fill-amber-500" />
          <span>{product.rating}</span>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col">
        <span className="text-[11px] font-extrabold tracking-wider uppercase text-brand-600 mb-1">
          {product.categoryName}
        </span>
        <h3 
          onClick={() => onOpenDetail && onOpenDetail(product)}
          className="font-extrabold text-base sm:text-lg text-dark tracking-tight mb-2 group-hover:text-brand-600 transition-colors cursor-pointer"
        >
          {product.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 line-clamp-2 leading-relaxed mb-4 flex-1">
          {product.desc}
        </p>

        {/* Price & Add to Cart Action */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between mt-auto">
          <div>
            <span className="text-[10px] font-semibold text-gray-400 block uppercase">Harga</span>
            <span className="font-extrabold text-base sm:text-lg text-dark tracking-tight">
              {formatRupiah(product.price)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenDetail && onOpenDetail(product)}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors cursor-pointer sm:hidden"
              title="Lihat Detail"
            >
              <Eye size={14} />
            </button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => addToCart(product)}
              className="bg-dark hover:bg-brand-600 text-white font-bold text-xs sm:text-sm py-2 px-4 rounded-full flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
            >
              <Plus size={14} />
              <span>Tambah</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
