'use client';

import React from 'react';
import { ShieldCheck, MapPin, Sparkles, Gem, Swords, Trophy, Crown } from 'lucide-react';

const citiesList = [
  { name: 'مدينة التوأم (Twin City)', desc: 'المدينة الرئيسية للبداية والتقاء الأبطال، المتاجر، حلبة القتال وميدان التحدي.' },
  { name: 'قلعة العنقاء (Phoenix Castle)', desc: 'قلعة المعارك الكبرى وحروب النقابات الملحمية، ومواقع صقل وترقية العتاد.' },
  { name: 'مدينة الصحراء (Desert City)', desc: 'صحراء الوحوش العاتية وصيد الدراجون بول ومواد الترقية النادرة.' },
  { name: 'جبل القردة (Ape Mountain)', desc: 'جبال الصيد السريع، المهمات اليومية، ورفع المستويات واكتساب الخبرة.' },
  { name: 'جزيرة الطيور (Bird Island)', desc: 'جزيرة الطيور النادرة والقتال السريع وتصفية الجواهر الفائقة وحجارة التطوير.' },
  { name: 'السوق المركزي (Market)', desc: 'سوق التجارة الحرة وتبادل العتاد والجواهر والجارمنتات بين اللاعبين بكل سهولة.' },
];

const combatSystemsList = [
  {
    icon: Gem,
    title: 'نظام صقل العتاد والسوكتات (Gear Socketing & Plus)',
    desc: 'يبدأ اللاعب بعتاد +8 مجاني بالشنطة ويمكن ترقيته لـ +12، فتح المقابس المزدوجة (2 Sockets)، وتطعيم العتاد بجواهر التنين الفائقة (Super Dragon Gems) لمضاعفة قوة الباتل باور Battle Power.',
  },
  {
    icon: Swords,
    title: 'أنظمة القتال الفردي والـ PK (PVP & Arena)',
    desc: 'حلبة مبارزة حرة متطورة ونزالات 1v1 مباشرة، مع إمكانية التبديل الفوري بين وضع السلام (Peace) ووضع القتال الحر (Free PK) لعيش أشرس أجواء المنافسة.',
  },
  {
    icon: Trophy,
    title: 'حروب القلعة والراية (Guild Wars)',
    desc: 'حروب نقابات يومية حماسية لاحتلال القلعة، تحطيم البوابة والعمود، المزايدة على راية السيرفر، وتوزيع الـ CPs على قادة وأعضاء النقابة الفائزة.',
  },
  {
    icon: Crown,
    title: 'نظام الميلاد وتطوير الشخصيات (Reborn System)',
    desc: 'الارتقاء بالمرتبة وخوض الميلاد الأول والثاني (Reborn 1 & Reborn 2) لفتح مهارات حصرية جديدة وزيادة خصائص الهجوم والدفاع والصحة بشكل مضاعف.',
  },
];

export default function GameSystems() {
  return (
    <section id="systems" className="py-10 sm:py-16 lg:py-20 bg-[#070b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">

        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0d1322] border border-cyan-500/30 text-cyan-400 text-xs font-black mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>مدن المعارك وساحات القتال</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            مدن وأنظمة القتال في{' '}
            <span dir="ltr" className="inline-flex items-center gap-1.5 font-sans">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-400">EQUINOX</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">VS</span>
            </span>
          </h2>
          <p className="text-slate-400 mt-2 text-xs sm:text-sm font-bold max-w-xl mx-auto">
            استكشف خريطة اللعبة الشاسعة، ساحات النزال المفتوحة، وأنظمة التطوير والصقل
          </p>
        </div>

        {/* Grid 1: Game Cities */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-lg sm:text-xl font-black text-white mb-4 sm:mb-5 flex items-center gap-2 border-r-4 border-cyan-400 pr-3">
            <MapPin className="w-5 h-5 text-cyan-400 shrink-0" />
            <span>مدن ومناطق المغامرة الكبرى</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            {citiesList.map((city, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#0e1424]/90 border border-slate-800 hover:border-cyan-500/40 transition-all backdrop-blur-md"
              >
                <div className="flex items-center gap-2 text-cyan-300 font-black text-xs sm:text-sm mb-1">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0"></span>
                  {city.name}
                </div>
                <p className="text-slate-400 text-xs font-medium leading-relaxed">{city.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Grid 2: Combat Systems */}
        <div>
          <h3 className="text-lg sm:text-xl font-black text-white mb-4 sm:mb-5 flex items-center gap-2 border-r-4 border-orange-500 pr-3">
            <ShieldCheck className="w-5 h-5 text-orange-400 shrink-0" />
            <span>أنظمة القتال وتطوير العتاد والسوكتات</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {combatSystemsList.map((sys, idx) => {
              const Icon = sys.icon;
              return (
                <div
                  key={idx}
                  className="p-4 sm:p-6 rounded-3xl bg-[#0e1424]/90 border border-slate-800 hover:border-orange-500/40 transition-all backdrop-blur-xl shadow-xl flex flex-col sm:flex-row gap-3.5 sm:gap-4 items-start"
                >
                  <div className="p-2.5 sm:p-3 rounded-2xl bg-[#141d33] border border-white/10 shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-black text-white mb-1">{sys.title}</h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">{sys.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
