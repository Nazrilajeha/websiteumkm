import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-20 overflow-hidden text-center">
      {/* Ambient Aurora Glowing Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none -z-10 overflow-hidden">
        <div className="aurora-blob w-[500px] h-[450px] top-[-100px] left-[10%] bg-purple-200/40" />
        <div className="aurora-blob w-[550px] h-[500px] top-[40px] right-[10%] bg-amber-200/50" style={{ animationDelay: '-5s' }} />
        <div className="aurora-blob w-[600px] h-[380px] top-[300px] left-[25%] bg-emerald-100/40" style={{ animationDelay: '-9s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Trust Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 bg-white border border-gray-200/80 px-5 py-2 rounded-full text-xs sm:text-sm font-medium text-gray-700 shadow-[0_2px_10px_rgba(0,0,0,0.03)] mb-7 hover:-translate-y-0.5 transition-all select-none"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.2)]" />
          <span className="text-gray-700 font-medium">Artisanal Bakery</span>
          <span className="text-gray-500">•</span>
          <span className="text-[#C86C12] font-bold">100% French Technique & Halal Certified</span>
        </motion.div>

        {/* Hero Title (Editorial Typographic Headline ala Screenshot) */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-[4.75rem] font-extrabold tracking-[-0.04em] text-dark max-w-5xl mx-auto leading-[1.1] mb-6 text-center select-none"
        >
          <span className="block">
            Artisanal Bakes{' '}
            <span className="inline-flex items-center whitespace-nowrap">
              F
              <span className="inline-flex items-center justify-center bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-full px-2 sm:px-2.5 h-[0.74em] min-w-[1.25em] mx-[0.03em] -translate-y-[0.06em] shadow-[0_2px_8px_rgba(217,119,6,0.32)] transition-transform hover:scale-105">
                <span className="text-[0.62em] leading-none drop-shadow-sm select-none">🥐</span>
              </span>
              r
            </span>
          </span>
          <span className="block mt-1 sm:mt-2">
            Wholesome{' '}
            <span className="font-serif italic font-normal tracking-[-0.01em] text-dark">
              Mornings
            </span>
          </span>
        </motion.h1>

        {/* Hero Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed mb-8"
        >
          Dibuat dengan 100% New Zealand Pure Butter, fermentasi ragi alami, dan tanpa pengawet. 
          Roti artisanal pilihan untuk sarapan hangat keluarga & sajian istimewa kantor.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12"
        >
          <a
            href="#menu"
            className="inline-flex items-center gap-2 bg-dark hover:bg-black text-white px-7 py-3.5 rounded-full text-sm sm:text-base font-bold shadow-lg shadow-black/15 hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            <span>Pilih Menu Roti</span>
            <ArrowRight size={16} />
          </a>
          <a
            href="https://wa.me/6281234567890?text=Halo%20Umi%20Fika%20Bakery,%20mau%20tanya%20menu%20dan%20pemesanan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200/90 px-6 py-3.5 rounded-full text-sm sm:text-base font-semibold shadow-sm hover:-translate-y-0.5 transition-all"
          >
            <MessageCircle size={17} className="text-emerald-600" />
            <span>Tanya via WhatsApp</span>
          </a>
        </motion.div>

        {/* Social Proof Avatar Row */}
        <div className="flex items-center justify-center gap-3 text-xs sm:text-sm text-gray-600">
          <div className="flex -space-x-2 overflow-hidden">
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Pelanggan" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Pelanggan" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Pelanggan" />
          </div>
          <div className="text-left font-medium">
            <span className="font-extrabold text-dark">1.200+ Pelanggan Senang</span> · Rating 4.9 ★ Google Maps
          </div>
        </div>

        {/* Center Stage Floating Visual Arena */}
        <div className="mt-14 relative max-w-4xl mx-auto">
          {/* Main Visual Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-3 sm:p-4 rounded-3xl border border-gray-200/80 shadow-2xl relative z-10 overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80"
              alt="Artisan Pastry & Bakery Fresh Oven"
              className="w-full h-64 sm:h-96 object-cover rounded-2xl"
            />
            <div className="flex items-center justify-between px-3 pt-3 pb-1 text-left">
              <div>
                <p className="font-bold text-dark text-sm sm:text-base">Batch Pagi #1 — Fresh from the Oven</p>
                <p className="text-xs text-gray-500">Butter Croissant & Sourdough Siap Dikirim Sekarang</p>
              </div>
              <span className="bg-amber-100 text-brand-800 text-xs font-bold px-3 py-1 rounded-full">
                Tersedia Hari Ini
              </span>
            </div>
          </motion.div>

          {/* Left Floating Status Card */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="hidden sm:block absolute -left-6 top-1/3 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white shadow-xl text-left z-20 w-52"
          >
            <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Status Pemanggangan</div>
            <div className="font-extrabold text-sm text-dark mt-1 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              Suhu Oven 210°C Stabil
            </div>
            <p className="text-[11px] text-gray-500 mt-1">Crust renyah keemasan terjamin</p>
          </motion.div>

          {/* Right Floating Status Card */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="hidden sm:block absolute -right-6 top-1/2 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white shadow-xl text-left z-20 w-56"
          >
            <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Kualitas Bahan</div>
            <div className="font-extrabold text-sm text-brand-600 mt-1">
              🧈 100% New Zealand Butter
            </div>
            <p className="text-[11px] text-gray-500 mt-1">Bebas minyak sawit & tanpa pengawet</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
