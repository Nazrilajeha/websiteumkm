import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: "Berapa lama daya tahan roti dan pastry Umi Fika?",
    a: "Karena tanpa bahan pengawet buatan, produk kami bertahan 2-3 hari di suhu ruang dalam wadah kedap udara. Untuk Sourdough dapat bertahan hingga 5 hari di chiller kulkas dan 1 bulan di freezer."
  },
  {
    q: "Apakah seluruh produk dijamin 100% Halal?",
    a: "Ya, 100% Halal. Kami hanya menggunakan bahan baku berlabel halal resmi LPPOM MUI, tidak menggunakan rum, gelatin hewani non-halal, atau bahan turunannya."
  },
  {
    q: "Bagaimana cara terbaik memanaskan kembali Croissant?",
    a: "Panaskan dalam oven atau air fryer pada suhu 175°C selama 3–4 menit. Kulit luarnya akan kembali renyah garing berlayer (flaky) seperti baru diangkat dari oven kami!"
  },
  {
    q: "Apakah melayani pengiriman sameday dan instan?",
    a: "Tentu! Kami bekerja sama dengan kurir instan (GoSend / GrabExpress) se-Jabodetabek. Pesanan yang masuk sebelum jam 13:00 WIB dikirim pada hari yang sama."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
            <HelpCircle size={14} />
            <span>Pertanyaan Umum</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">
            Kerap Ditanyakan Pelanggan
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-gray-200/80 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-dark text-sm sm:text-base hover:bg-gray-50/70 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${isOpen ? 'bg-brand-500 text-white rotate-45' : 'bg-gray-100 text-gray-500'}`}>
                    <Plus size={16} />
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
