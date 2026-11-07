'use client';

import React from 'react';
import { Swords, Gift, Target, Gem, Trophy, Sparkles } from 'lucide-react';

const featuresList = [
  {
    icon: Swords,
    title: 'طقم عتاد +8 كامل مجاناً بالشنطة',
    description: 'ينزل بطلُك بطقم عتاد كامل +8 مكس بالشنطة فور تسجيل الدخول، جاهز للقتال المباشر مع إمكانية ترقيته وصقله في اللعبة حتى +12.',
    tag: 'بداية أسطورية',
    glow: 'border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,240,255,0.25)]',
    tagBg: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
  },
  {
    icon: Target,
    title: 'مكافأة الوحوش (10 Kills = 5 CPs)',
    description: 'احصل تلقائياً على 5 CPs حرة مجانية عند قتل كل 10 وحوش في جميع المدن والخرائط لدعم رصيدك وشراء الجارمنتات والجواهر بدون شحن.',
    tag: 'دروب وسيبسات',
    glow: 'border-orange-500/40 hover:border-orange-400 hover:shadow-[0_0_25px_rgba(255,69,0,0.25)]',
    tagBg: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
  },
  {
    icon: Gift,
    title: 'صندوق الهدايا الترحيبي اليومي',
    description: 'صندوق جوائز أسطوري بالشنطة يحتوي على أحجار الترقية Stone +5، الجواهر الفائقة (Super Gems)، ورصيد CPs أولي لتجهيز شخصيتك.',
    tag: 'هدايا مجانية',
    glow: 'border-amber-500/40 hover:border-amber-400 hover:shadow-[0_0_25px_rgba(255,191,0,0.25)]',
    tagBg: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
  },
  {
    icon: Trophy,
    title: 'حروب القلعة والنقابات اليومية',
    description: 'معارك Guild Wars طاحنة وتحديات يومية لاحتلال القلعة، الفوز بتاج القائد، توزيع الـ CPs على أعضاء النقابة، وألقاب الفخر.',
    tag: 'حروب القلعة والـ PK',
    glow: 'border-orange-500/40 hover:border-orange-400 hover:shadow-[0_0_25px_rgba(255,69,0,0.25)]',
    tagBg: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
  },
  {
    icon: Gem,
    title: 'صقل العتاد والجواهر والسوكتات',
    description: 'نظام متكامل لفتح مقابس الأسلحة المزدوجة (2 Sockets)، تطعيم جواهر التنين والجواهر الفائقة، وصقل العتاد حتى +12 لرفع الـ Battle Power.',
    tag: 'تطوير وسوكتات',
    glow: 'border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,240,255,0.25)]',
    tagBg: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
  },
  {
    icon: Sparkles,
    title: 'توازن الفئات وفصل المهارات بالكامل',
    description: 'فصل دقيق للمهارات بين التروجان، السيّاف، الرامي، السحرة، والنينجا لمنع أي تداخل، مع دعم نظام الميلاد (Reborn 1 & Reborn 2) بكفاءة.',
    tag: 'توازن واحتراف',
    glow: 'border-purple-500/40 hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]',
    tagBg: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
  },
];

export default function Features() {
  return (
    <section id="game-features" className="pt-8 pb-12 sm:pt-10 sm:pb-16 bg-[#070b14] relative border-t border-slate-800/40">

      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/2 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-orange-500/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">

        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0d1322] border border-cyan-500/30 text-cyan-400 text-xs font-black mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>مميزات وأنظمة سيرفر إكوينوكس</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            مميزات عالم{' '}
            <span dir="ltr" className="inline-flex items-center gap-1.5 font-sans">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-400">EQUINOX</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">VS</span>
            </span>
          </h2>
          <p className="text-slate-400 mt-2 text-xs sm:text-sm max-w-xl mx-auto font-bold">
            كل ما تحتاجه لتجربة قتالية حماسية بدون تعقيد، هدايا يومية مجانية، وسرعة في رفع مستواك وعتادك
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {featuresList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-5 sm:p-6 rounded-3xl bg-[#0e1424]/90 backdrop-blur-xl border ${item.glow} transition-all transform hover:-translate-y-1 group shadow-xl relative overflow-hidden flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="p-2.5 sm:p-3 rounded-2xl bg-[#141d33] border border-white/10 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full border ${item.tagBg}`}>
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-white mb-2">{item.title}</h3>
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
