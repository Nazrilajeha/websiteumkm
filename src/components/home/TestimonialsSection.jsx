import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2, Sparkles, Camera } from 'lucide-react';
import { TESTIMONIALS, INSTAGRAM_GALLERY } from '../../data/products';

function InstagramIcon({ size = 14, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimoni" className="py-24 bg-surface border-y border-gray-100 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100/70 border border-amber-200/80 text-amber-900 text-xs font-extrabold px-3.5 py-1.5 rounded-full mb-3 shadow-xs">
            <Sparkles size={13} className="text-amber-600" />
            <span>KATA MEREKA TENTANG KAMI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight leading-tight">
            Cerita Hangat dari Meja Makan Pelanggan Kami
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-3 leading-relaxed">
            Dengarkan langsung pengalaman para pencinta roti artisanal, keluarga, hingga rekan kantor yang memesan berkala.
          </p>
        </div>

        {/* Key Social Proof Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          <div className="bg-white p-5 rounded-2xl border border-gray-200/70 shadow-soft text-center">
            <div className="text-2xl sm:text-3xl font-black text-brand-600 mb-1">4.9 / 5.0</div>
            <div className="flex justify-center gap-0.5 text-amber-500 mb-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} className="fill-amber-500" />
              ))}
            </div>
            <p className="text-xs text-gray-500 font-semibold">Google Review (500+ Ulasan)</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200/70 shadow-soft text-center">
            <div className="text-2xl sm:text-3xl font-black text-dark mb-1">12.000+</div>
            <p className="text-xs font-bold text-gray-700 mb-1">Roti & Pastry Terjual</p>
            <p className="text-[11px] text-gray-400">Sejak hari pertama beroperasi</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200/70 shadow-soft text-center">
            <div className="text-2xl sm:text-3xl font-black text-brand-600 mb-1">100%</div>
            <p className="text-xs font-bold text-gray-700 mb-1">Halal & Pure Butter</p>
            <p className="text-[11px] text-gray-400">Tanpa bahan kimia sintetik</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200/70 shadow-soft text-center">
            <div className="text-2xl sm:text-3xl font-black text-dark mb-1">98%</div>
            <p className="text-xs font-bold text-gray-700 mb-1">Repeat Order Rate</p>
            <p className="text-[11px] text-gray-400">Pelanggan memesan kembali</p>
          </div>
        </motion.div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200/80 shadow-soft flex flex-col justify-between hover:shadow-hover transition-all duration-300 relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Star Rating */}
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-500" />
                    ))}
                  </div>
                  <Quote size={20} className="text-gray-200 group-hover:text-brand-300 transition-colors" />
                </div>

                {/* Comment */}
                <p className="text-sm text-gray-700 leading-relaxed font-normal mb-6">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                {/* Favorite Item Tag */}
                <div className="inline-block text-[11px] font-bold text-brand-700 bg-brand-50 px-2.5 py-0.5 rounded-full mb-3">
                  🥐 {t.favoriteProduct}
                </div>

                {/* User Info */}
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-gray-200 flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-bold text-xs sm:text-sm text-dark truncate">{t.name}</h4>
                      <CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" />
                    </div>
                    <p className="text-[11px] text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ambience & Craftsmanship Gallery */}
        <div className="pt-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-xs uppercase font-extrabold tracking-widest text-brand-600 mb-1 flex items-center gap-1.5">
                <Camera size={14} />
                <span>GALERI DAPUR & AMBIENCE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-dark tracking-tight">
                Keringat, Seni, & Dedikasi Setiap Pagi
              </h3>
            </div>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold bg-white hover:bg-gray-50 text-dark border border-gray-200 px-4 py-2 rounded-full shadow-xs transition-all w-fit"
            >
              <InstagramIcon size={14} className="text-pink-600" />
              <span>Follow @umifikabakery</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {INSTAGRAM_GALLERY.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative h-64 rounded-2xl overflow-hidden group shadow-soft cursor-pointer bg-gray-100"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                  <span className="text-[10px] font-bold text-amber-400 tracking-wider uppercase mb-1">
                    {item.tag}
                  </span>
                  <h4 className="font-bold text-sm leading-snug">{item.title}</h4>
                  <p className="text-[11px] text-gray-300 mt-0.5 line-clamp-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
