import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Calendar, Users, Gift, Coffee } from 'lucide-react';
import { PACKAGES } from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function InteractiveCalculator() {
  const [selectedKey, setSelectedKey] = useState('meeting-kantor');
  const { addToCart, formatRupiah, setIsCartOpen } = useCart();

  const pkg = PACKAGES[selectedKey];

  const handleAddPackage = () => {
    const packageProduct = {
      id: `pkg-${selectedKey}-${Date.now()}`,
      title: pkg.name,
      price: pkg.price,
      desc: pkg.desc,
      categoryName: "Paket Katering Acara",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
      badge: "PAKET KHUSUS 🎁"
    };
    addToCart(packageProduct, 1);
    setIsCartOpen(true);
  };

  const options = [
    { key: 'sarapan-pribadi', label: 'Sarapan Pribadi / Duo', icon: <Coffee size={16} /> },
    { key: 'keluarga-harmonis', label: 'Keluarga Harmonis (4-6 Orang)', icon: <Users size={16} /> },
    { key: 'meeting-kantor', label: 'Meeting Kantor & Coffee Break (10 Pax)', icon: <Calendar size={16} /> },
    { key: 'hampers-premium', label: 'Hampers Hadiah & Souvenir', icon: <Gift size={16} /> },
  ];

  return (
    <section id="katering" className="py-24 bg-page">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-dark rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
              Kalkulator Katering & Acara
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Butuh Roti untuk Acara Spesial?
            </h2>
            <p className="text-sm sm:text-base text-gray-400 mt-2">
              Pilih kebutuhan acaramu. Kami menyusun komposisi pastry terbaik dengan harga hemat dan kemasan boks eksklusif.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Options Selector */}
            <div className="lg:col-span-7 space-y-3">
              <label className="text-xs font-semibold text-gray-400 block uppercase">
                Pilih Jenis Kebutuhan:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {options.map((opt) => {
                  const isSelected = selectedKey === opt.key;
                  return (
                    <button
                      key={opt.key}
                      onClick={() => setSelectedKey(opt.key)}
                      className={`text-left p-3.5 rounded-2xl border transition-all flex items-center gap-3 cursor-pointer ${
                        isSelected 
                          ? 'bg-white/15 border-brand-400 text-white shadow-md' 
                          : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${isSelected ? 'bg-brand-500 text-white' : 'bg-white/10 text-gray-400'}`}>
                        {opt.icon}
                      </div>
                      <span className="text-xs sm:text-sm font-semibold">{opt.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Selected Package Preview Card */}
            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between text-xs text-brand-400 font-bold uppercase mb-2">
                <span>Rekomendasi Paket</span>
                <span className="bg-brand-500/20 text-brand-300 px-2.5 py-0.5 rounded-full">Hemat 15%</span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2">{pkg.name}</h3>
              <p className="text-xs sm:text-sm text-gray-300 mb-6 leading-relaxed">
                {pkg.desc}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div>
                  <span className="text-[11px] text-gray-400 block uppercase font-medium">Total Paket</span>
                  <span className="text-xl sm:text-2xl font-black text-amber-400">
                    {formatRupiah(pkg.price)}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleAddPackage}
                  className="bg-brand-500 hover:bg-brand-400 text-dark font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-full flex items-center gap-2 cursor-pointer shadow-lg shadow-brand-500/20"
                >
                  <ShoppingCart size={15} />
                  <span>Ambil Paket</span>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
