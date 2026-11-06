'use client';

import React, { useState } from 'react';
import { Eye, Sparkles, X } from 'lucide-react';

const galleryItems = [
  {
    id: 'ingame',
    title: 'معارك القتال المباشر والـ PK الملحمي',
    category: 'القتال المباشر',
    image: '/img/ingame.jpg',
    desc: 'لقطة حقيقية من داخل اللعبة تعكس حماسة المعارك وتأثيرات المهارات القتالية لبطل Equinox_VS.',
    badge: 'EQUINOX VS COMBAT',
    serverName: 'Equinox_VS - Arena Map',
    glow: 'border-cyan-500/40 hover:border-cyan-400',
  },
  {
    id: 'start',
    title: 'شاشة البداية وعالم المغامرة المفتوح',
    category: 'بداية الأسطورة',
    image: '/img/start.jpg',
    desc: 'انطلاقة الأبطال فور الدخول بعتاد المبتدئين +8 مكس بالحقيبة (مع إمكانية الترقية لـ +12) وصندوق الهدايا الأسطوري.',
    badge: 'EQUINOX VS START',
    serverName: 'Equinox_VS - World Spawn',
    glow: 'border-orange-500/40 hover:border-orange-400',
  },
  {
    id: 'servers',
    title: 'قائمة السيرفرات والاتصال المباشر',
    category: 'استقرار وأداء',
    image: '/img/servers.jpg',
    desc: 'سيرفر Equinox VS المباشر مع سرعة اتصال فائقة وأداء عالي على مدار الساعة.',
    badge: 'EQUINOX VS SERVER LIST',
    serverName: 'Equinox VS (مباشر Online)',
    glow: 'border-amber-500/40 hover:border-amber-400',
  },
  {
    id: 'login',
    title: 'واجهة الدخول السريعة وحماية الحسابات',
    category: 'الدخول الفوري',
    image: '/img/login.jpg',
    desc: 'واجهة تسجيل الدخول السريعة لسيرفر Equinox VS مع حفظ كامل لتقدم الشخصية والـ CPs.',
    badge: 'EQUINOX VS LOGIN',
    serverName: 'Equinox VS - Auth Portal',
    glow: 'border-emerald-500/40 hover:border-emerald-400',
  },
];

export default function GameGallery() {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section id="gallery" className="py-16 sm:py-22 bg-[#050811] relative overflow-hidden">

      {/* Ambient Background Glows */}
      <div className="absolute top-1/3 left-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/10 blur-[120px] sm:blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-orange-500/10 blur-[120px] sm:blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">

        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0c1222] border border-cyan-500/30 text-cyan-400 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> IN-GAME SCREENSHOTS SHOWCASE
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            لقطات شاشة حقيقية لسيرفر{' '}
            <span dir="ltr" className="inline-flex items-center gap-1.5 font-sans">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-orange-400">EQUINOX</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">VS</span>
            </span>
          </h2>
          <p className="text-slate-400 mt-2.5 sm:mt-3 text-sm sm:text-lg font-medium max-w-2xl mx-auto">
            لقطات فعلية من داخل اللعبة تستعرض قائمة السيرفرات، واجهة الدخول، وعالم المعارك لـ Equinox VS
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`group rounded-3xl bg-[#0e1424]/95 border ${item.glow} transition-all duration-300 overflow-hidden shadow-2xl backdrop-blur-xl relative flex flex-col justify-between`}
            >

              {/* Image Box */}
              <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-[#050811]">
                {/* Genuine Screenshot Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter saturate-110 contrast-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1424] via-transparent to-black/40"></div>

                {/* Top Right Tag */}
                <div dir="ltr" className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 px-3 py-1.5 rounded-full bg-[#050811]/90 border border-cyan-400/50 text-cyan-300 text-[10px] sm:text-xs font-black backdrop-blur-md shadow-lg flex items-center gap-1.5 font-sans">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                  <span>{item.badge}</span>
                </div>

                {/* Bottom Left Preview Button */}
                <button
                  onClick={() => setSelectedItem(item)}
                  className="absolute bottom-3.5 left-3.5 sm:bottom-4 sm:left-4 p-2 sm:p-2.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500 text-white border border-cyan-400/50 font-bold text-xs flex items-center gap-1.5 backdrop-blur-md transition-all shadow-lg cursor-pointer z-10"
                >
                  <Eye className="w-4 h-4" />
                  <span>تكبير الشاشة</span>
                </button>
              </div>

              {/* Caption Box */}
              <div className="p-5 sm:p-6 text-right">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1">
                  <h3 className="text-lg sm:text-2xl font-black text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs font-bold text-slate-400">{item.category}</span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/95 backdrop-blur-md cursor-pointer overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full p-4 sm:p-6 rounded-3xl bg-[#0e1424] border border-cyan-500/50 shadow-2xl text-right space-y-3 sm:space-y-4 max-h-[92vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="text-sm sm:text-lg font-black text-white truncate">{selectedItem.title} - Equinox VS</span>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="p-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-black">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-auto max-h-[70vh] object-contain mx-auto"
              />
            </div>

            <div className="p-3 sm:p-4 rounded-2xl bg-[#070b14] border border-cyan-500/30 text-[11px] sm:text-xs font-bold text-cyan-300 flex flex-col sm:flex-row items-center justify-between gap-2">
              <span dir="ltr" className="font-sans">سيرفر اللعبة الرسمي: {selectedItem.serverName}</span>
              <span dir="ltr" className="font-sans">إصدار التطبيق: v106</span>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
