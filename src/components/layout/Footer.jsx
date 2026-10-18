import React from 'react';
import { MapPin, Phone, Clock, Heart } from 'lucide-react';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-400 pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2 text-white font-extrabold text-lg">
              <span className="text-xl">🥐</span>
              <span>Umi Fika Bakery</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Toko roti & pastry artisanal rumahan dengan kualitas bahan hotel bintang lima. Dipanggang fresh setiap pagi untuk kehangatan harimu.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3">Menu Terfavorit</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#menu" className="hover:text-brand-400 transition-colors">Signature Croissant</a></li>
              <li><a href="#menu" className="hover:text-brand-400 transition-colors">Pain au Chocolat</a></li>
              <li><a href="#menu" className="hover:text-brand-400 transition-colors">San Francisco Sourdough</a></li>
              <li><a href="#menu" className="hover:text-brand-400 transition-colors">Hokkaido Milk Bread</a></li>
            </ul>
          </div>

          {/* Operational Hours */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3">Jam Buka Oven</h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <Clock size={15} className="text-brand-400 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Senin – Minggu</p>
                  <p className="text-gray-400">06.30 – 21.00 WIB</p>
                </div>
              </div>
              <div className="flex items-start gap-2 pt-2">
                <MapPin size={15} className="text-brand-400 mt-0.5" />
                <p className="text-gray-400">Jl. Bintaro Raya No. 18, Jakarta Selatan</p>
              </div>
            </div>
          </div>

          {/* Contact & WA */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3">Pesan Cepat</h4>
            <p className="text-xs sm:text-sm text-gray-400 mb-3">
              Menerima pesanan katering kantor, arisan, & hampers hari raya.
            </p>
            <a
              href="https://wa.me/6281234567890?text=Halo%20Umi%20Fika%20Bakery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-[#20bd5a] transition-colors"
            >
              <Phone size={13} />
              <span>WhatsApp: 0812-3456-7890</span>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {currentYear} Umi Fika Bakery & Pastry. Hak Cipta Dilindungi.</p>
          <p className="flex items-center gap-1">
            Dibuat dengan <Heart size={12} className="text-red-500 fill-red-500" /> untuk pecinta roti sejati.
          </p>
        </div>
      </div>
    </footer>
  );
}
