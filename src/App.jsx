import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/home/HeroSection';
import StatementSection from './components/home/StatementSection';
import InteractiveCalculator from './components/home/InteractiveCalculator';
import TestimonialsSection from './components/home/TestimonialsSection';
import FaqSection from './components/home/FaqSection';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';
import Toast from './components/ui/Toast';
import ProductCard from './components/product/ProductCard';
import ProductDetailModal from './components/product/ProductDetailModal';
import { PRODUCTS, CATEGORIES } from './data/products';
import { Sparkles } from 'lucide-react';

function BakeryApp() {
  const [selectedCategory, setSelectedCategory] = useState('semua');
  const [selectedProductForModal, setSelectedProductForModal] = useState(null);

  const filteredProducts = selectedCategory === 'semua'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-page text-dark flex flex-col font-sans selection:bg-brand-500 selection:text-white">
      {/* Floating Pill Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Craftsmanship & Quality Statement Section */}
      <StatementSection />

      {/* Product Catalog Section */}
      <section id="menu" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase font-extrabold tracking-widest text-brand-600 mb-2 flex items-center gap-1.5">
              <Sparkles size={14} />
              <span>PILIHAN MENU HARI INI</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">
              Etalase Roti & Pastry Favorit
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Dipanggang terbatas setiap hari agar kualitas rasa dan kerenyahan tetap maksimal. Klik produk untuk melihat info bahan & alergen.
            </p>
          </div>

          {/* Category Filter Pills (Apple / Segmented Control Style) */}
          <div className="inline-flex bg-gray-200/60 p-1.5 rounded-full overflow-x-auto max-w-full">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-white text-dark shadow-sm'
                    : 'text-gray-500 hover:text-dark'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onOpenDetail={setSelectedProductForModal}
            />
          ))}
        </div>
      </section>

      {/* Interactive Catering Package Calculator */}
      <InteractiveCalculator />

      {/* Customer Testimonials & Ambience Gallery */}
      <TestimonialsSection />

      {/* Customer Frequently Asked Questions */}
      <FaqSection />

      {/* Modern Minimalist Dark Footer */}
      <Footer />

      {/* Product Quick View / Detail Modal */}
      <ProductDetailModal
        key={selectedProductForModal?.id || 'none'}
        product={selectedProductForModal}
        isOpen={Boolean(selectedProductForModal)}
        onClose={() => setSelectedProductForModal(null)}
      />

      {/* Global Slide-Over Cart Drawer */}
      <CartDrawer />

      {/* Floating Toast Notification */}
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <BakeryApp />
    </CartProvider>
  );
}
