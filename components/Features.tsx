'use client';

import React from 'react';
import { Swords, Gift, Target, Gem, Trophy, Sparkles } from 'lucide-react';

const featuresList = [
  {
    icon: Swords,
    title: 'عتاد مبتدئين +8 مجاني (قابل للترقية لـ +12)',
    description: 'ينزل بطلُك بطقم عتاد كامل +8 مكس بالحقيبة مجاناً فور الدخول، مع إمكانية ترقيته وصقله في اللعبة حتى +12.',
    tag: 'بداية أسطورية',
    glow: 'border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,240,255,0.25)]',
    tagBg: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
  },
  {
    icon: Target,
    title: 'مكافأة الوحوش (10 Kills = 5 CPs)',
    description: 'احصل تلقائياً على 5 CPs حرة مجانية عند قتل كل 10 وحوش في جميع المدن والخرائط لدعم تقدمك ورصيدك.',
    tag: 'دروب ومكافآت',
    glow: 'border-orange-500/40 hover:border-orange-400 hover:shadow-[0_0_30px_rgba(255,69,0,0.25)]',
    tagBg: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
  },
  {
    icon: Gift,
    title: 'صندوق الهدايا الترحببي بالحقيبة',
    description: 'صندوق جوائز مجاني ينزل في حقيبة شخصيتك يحتوي على أحجار التطوير Stone +5، الجواهر، والـ CPs الأولية.',
    tag: 'جوائز مجانية',
    glow: 'border-amber-500/40 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(255,191,0,0.25)]',
    tagBg: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
  },
  {
    icon: Trophy,
    title: 'حروب القلعة والنقابات اليومية',
    description: 'تحديات حماسية وحروب Guild Wars يومية لاحتلال القلعة والفوز بـ تاج القائد والألقاب والجوائز الأسطورية.',
    tag: 'تحدي وPK',
    glow: 'border-orange-500/40 hover:border-orange-400 hover:shadow-[0_0_30px_rgba(255,69,0,0.25)]',
    tagBg: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
  },
  {
    icon: Gem,
    title: 'متجر CPs وصقل الجواهر والعتاد',
    description: 'متاجر متكاملة لشراء الجارمنتات (Garments)، الجواهر الفائقة (Super Gems)، وفتح مقابس الأسلحة وصقلها.',
    tag: 'اقتصاد واقتناء',
    glow: 'border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,240,255,0.25)]',
    tagBg: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
  },
  {
    icon: Sparkles,
    title: 'توازن الفئات ونظام الميلاد (Reborn)',
    description: 'تم ضبط مهارات وقوة التروجان والسيّاف والرامي والحاوي والنينجا مع دعم ترقية الميلاد واستعادة القوى السحرية.',
    tag: 'توازن واحتراف',
    glow: 'border-purple-500/40 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]',
    tagBg: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
  },
];

export default function Features() {
  return (
    <section id="game-features" className="py-14 sm:py-20 bg-[#070b14] relative">

      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/2 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-orange-500/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">

        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-block px-3.5 sm:px-4 py-1.5 rounded-full bg-[#0d1322] border border-cyan-500/30 text-cyan-400 text-xs font-bold mb-3">
            GAME FEATURES & SYSTEMS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            مميزات وأنظمة عالم <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-400">Equinox</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">VS</span>
          </h2>
          <p className="text-slate-400 mt-2 sm:mt-3 text-sm sm:text-lg max-w-2xl mx-auto font-medium">
            كل ما تحتاجه لتجربة قتالية أسطورية وممتعة في Conquer Mobile
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {featuresList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-5 sm:p-7 rounded-3xl bg-[#0e1424]/90 backdrop-blur-xl border ${item.glow} transition-all transform hover:-translate-y-1.5 group shadow-xl relative overflow-hidden flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="p-2.5 sm:p-3 rounded-2xl bg-[#141d33] border border-white/10 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <span className={`text-[11px] sm:text-xs font-extrabold px-2.5 py-1 sm:px-3 sm:py-1 rounded-full border ${item.tagBg}`}>
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white mb-2 sm:mb-2.5">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-xs sm:text-sm font-medium">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
