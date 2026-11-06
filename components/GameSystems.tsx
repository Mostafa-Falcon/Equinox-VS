'use client';

import React from 'react';
import { ShieldCheck, MapPin, Sparkles, Gem, Swords, Trophy, Crown } from 'lucide-react';

const citiesList = [
  { name: 'مدينة التوأم (Twin City)', desc: 'المدينة الرئيسية للبداية والتقاء الأبطال والمتاجر وحلبة القتال الأساسية.' },
  { name: 'قلعة العنقاء (Phoenix Castle)', desc: 'قلعة المعارك وحروب النقابات الملحمية وصقل العتاد الثمين.' },
  { name: 'مدينة الصحراء (Desert City)', desc: 'صحراء الوحوش الأقوياء وتجميع الدراجون بول ومواد الترقية.' },
  { name: 'جبل القردة (Ape Mountain)', desc: 'جبال القردة السريعة والمهمات اليومية الصعبة ودروب الخبرة.' },
  { name: 'جزيرة الطيور (Bird Island)', desc: 'جزيرة الطيور النادرة والقتال السريع وتصفية الجواهر الفائقة.' },
  { name: 'السوق المركزي (Market)', desc: 'سوق التجارة وتبادل العتاد والجواهر والجارمنتات بين اللاعبين.' },
];

const combatSystemsList = [
  {
    icon: Gem,
    title: 'نظام صقل العتاد والمقابس (Gear Socketing & Plus)',
    desc: 'يبدأ اللاعب بعتاد +8 مجاني بالحقيبة ويمكن ترقيته لـ +12، فتح المقابس المزدوجة، وتطعيم العتاد بجواهر التنين (Dragon Gems) والجواهر الفائقة لرفع القوة القتالية Battle Power.',
  },
  {
    icon: Swords,
    title: 'أنظمة القتال الفردي والـ PK (PVP & Arena)',
    desc: 'ساحة قتال حرة وحلبة مبارزة متطورة، مع إمكانية التبديل بين وضع السلام (Peace) ووضع القتال الحر (Free PK) وتصفية نقاط القتل عند تاجر الحلبة.',
  },
  {
    icon: Trophy,
    title: 'حروب القلعة والنقابات (Guild Wars)',
    desc: 'تحديات حماسية لاحتلال القلعة، المزايدة على الراية، وتعيين رتب القادة (CP Agent, CP Supervisor) للحصول على مكافآت الجيلد الأسطورية.',
  },
  {
    icon: Crown,
    title: 'نظام الميلاد وتطوير المهارات (Reborn System)',
    desc: 'الارتقاء بالمرتبة والميلاد (Reborn 1 & Reborn 2) لفتح مهارات حصرية وزيادة خصائص الشخصيات بشكل مضاعف.',
  },
];

export default function GameSystems() {
  return (
    <section id="systems" className="py-14 sm:py-20 bg-[#070b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">

        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#0d1322] border border-cyan-500/30 text-cyan-400 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> GAME WORLD & COMBAT SYSTEMS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            مدن وأنظمة القتال في <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-400">Equinox</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">VS</span>
          </h2>
          <p className="text-slate-400 mt-2 sm:mt-3 text-sm sm:text-lg font-medium">استكشف خريطة اللعبة الشاسعة وأنظمة التطوير المتقدمة</p>
        </div>

        {/* Grid 1: Game Cities */}
        <div className="mb-10 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-black text-white mb-4 sm:mb-6 flex items-center gap-2 border-r-4 border-cyan-400 pr-3">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 shrink-0" />
            <span>مدن ومناطق العالم الأسطوري</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {citiesList.map((city, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-[#0e1424]/90 border border-slate-800 hover:border-cyan-500/40 transition-all backdrop-blur-md"
              >
                <div className="flex items-center gap-2 text-cyan-300 font-black text-sm sm:text-base mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0"></span>
                  {city.name}
                </div>
                <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed">{city.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Grid 2: Combat Systems */}
        <div>
          <h3 className="text-xl sm:text-2xl font-black text-white mb-4 sm:mb-6 flex items-center gap-2 border-r-4 border-orange-500 pr-3">
            <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400 shrink-0" />
            <span>أنظمة القتال وتطوير العتاد</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {combatSystemsList.map((sys, idx) => {
              const Icon = sys.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-7 rounded-3xl bg-[#0e1424]/90 border border-slate-800 hover:border-orange-500/40 transition-all backdrop-blur-xl shadow-xl flex flex-col sm:flex-row gap-4 sm:gap-5"
                >
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-[#141d33] border border-white/10 shrink-0 h-fit w-fit">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-2xl font-black text-white mb-1.5">{sys.title}</h4>
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
