import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Flame, HeartHandshake, Sparkles } from 'lucide-react';

export default function StatementSection() {
  const values = [
    {
      icon: <Flame className="text-amber-500" size={24} />,
      title: "Dipanggang Tiap Pagi",
      desc: "Tidak pernah menjual sisa kemarin. Semua batch dipanggang subuh hari untuk cita rasa puncak."
    },
    {
      icon: <ShieldCheck className="text-emerald-500" size={24} />,
      title: "100% Halal & Amanah",
      desc: "Menggunakan bahan baku bersertifikat halal resmi, tanpa perisa sintetis berlebih."
    },
    {
      icon: <HeartHandshake className="text-brand-500" size={24} />,
      title: "Pure New Zealand Butter",
      desc: "Mentega alami kaya rasa, memberikan harum aroma khas yang tidak bikin enek di tenggorokan."
    }
  ];

  return (
    <section id="kualitas" className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Editorial Big Typography Statement */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs uppercase font-extrabold tracking-widest text-brand-600 mb-3 flex items-center gap-2">
            <Sparkles size={14} />
            <span>KOMITMEN KUALITAS RASA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-dark tracking-tight leading-tight">
            Kami percaya sarapan terbaik dimulai dari roti yang dibuat{' '}
            <span className="font-serif italic font-normal text-brand-600">dengan ketulusan</span> dan ragi alami.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 font-normal leading-relaxed">
            Menghindari pengembang instan kimiawi. Kami membiarkan adonan mengembang secara alami melalui proses fermentasi lambat hingga 48 jam demi kesehatan pencernaan Anda.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="p-6 rounded-3xl bg-page border border-gray-200/70 hover:border-brand-500/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200/60 flex items-center justify-center mb-5 shadow-sm">
                {v.icon}
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">{v.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
