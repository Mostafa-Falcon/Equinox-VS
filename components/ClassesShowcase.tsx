'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Swords, Shield, Crosshair, Sparkles, Zap, Flame, Snowflake, Crown, Anchor, Wind, Compass, ShieldAlert, Award } from 'lucide-react';

const classesData = [
  {
    id: 'trojan',
    name: 'التروجان',
    englishName: 'TROJAN',
    icon: Swords,
    portraitImg: '/classes/zyjqspic.jpg',
    avatarImg: '/classes/newjqslwt.jpg',
    modelRender: '/classes/hero_trojan.jpg',
    weapon: 'سيفين مزدوجين (Dual Swords)',
    role: 'ملك القتال الفردي والضرر القاتل السريع',
    desc: 'التروجان هو ملك النزالات المباشرة في Conquer! يمتلك أعتى قوة هجومية بسيفين مزدوجين مع مهارات الحركة الخاطفة (Scent Sword & Fast Blade) التي تمكنه من الإطاحة بالخصوم في أجزاء من الثانية.',
    stats: { attack: 100, defense: 75, speed: 90, difficulty: 60 },
    highlights: [
      'استخدام سلاحين مزدوجين في نفس الوقت',
      'مهارة السيف السريع (Fast Blade & Scent Sword)',
      'سرعة قفز وضرر حاسم قاتل في معارك الـ PK'
    ],
    theme: 'border-orange-500/50 bg-gradient-to-r from-orange-500 to-amber-500',
    badge: 'bg-orange-500/15 text-orange-400 border-orange-500/40',
    accentColor: '#f97316',
    glowGradient: 'from-orange-600/30 via-amber-500/10 to-transparent',
  },
  {
    id: 'warrior',
    name: 'السيّاف',
    englishName: 'WARRIOR',
    icon: Shield,
    portraitImg: '/classes/zyzspic.jpg',
    avatarImg: '/classes/newzslwt.jpg',
    modelRender: '/classes/hero_warrior.jpg',
    weapon: 'سيف ودرع ثقيل (Sword & Shield)',
    role: 'الدرع البشري المتين وحامي الفريق',
    desc: 'السيّاف هو الحصن المنيع الذي يتحمل أشرس الضربات! يمتلك أضخم معدل صحة (HP) وأعلى دفاع باللعبة، مع مهارات حجب الهجمات وقيادة الصفوف الأولى في حروب القلعة.',
    stats: { attack: 80, defense: 100, speed: 65, difficulty: 50 },
    highlights: [
      'أعلى معدل دفاع وصحة (HP) في اللعبة',
      'استخدام الدرع لحجب وصد ضربات الخصوم',
      'دعم أساسي وحماية الفئات الأخرى في حروب القلعة'
    ],
    theme: 'border-cyan-500/50 bg-gradient-to-r from-cyan-400 to-sky-500',
    badge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/40',
    accentColor: '#06b6d4',
    glowGradient: 'from-cyan-600/30 via-sky-500/10 to-transparent',
  },
  {
    id: 'archer',
    name: 'الرامي',
    englishName: 'ARCHER',
    icon: Crosshair,
    portraitImg: '/classes/zygspic.jpg',
    avatarImg: '/classes/newgslwt.jpg',
    modelRender: '/classes/hero_archer.jpg',
    weapon: 'قوس وكيفر السهام (Bow & Arrows)',
    role: 'صياد الوحوش السريع والقتال البعيد',
    desc: 'الرامي يصطاد أهدافه بسهام قاتلة من مسافات أمان بعيدة. يمتلك مهارة المطر السهمي (Scatter Strike) التي تقضي على أرتال الوحوش وتجمّع الـ CPs بأعلى سرعة خرافية باللعبة.',
    stats: { attack: 85, defense: 50, speed: 100, difficulty: 70 },
    highlights: [
      'مهارة المطر السهمي لإصابة عشرات الأهداف (Scatter)',
      'أسرع فئة في تجميع الـ CPs وقتل الوحوش ورفع الـ Level',
      'مناورة سريعة وركض خاطف أمان عن بعد'
    ],
    theme: 'border-emerald-500/50 bg-gradient-to-r from-emerald-400 to-teal-500',
    badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40',
    accentColor: '#10b981',
    glowGradient: 'from-emerald-600/30 via-teal-500/10 to-transparent',
  },
  {
    id: 'fire_taoist',
    name: 'حاوي النار',
    englishName: 'FIRE TAOIST',
    icon: Flame,
    portraitImg: '/classes/zyhdpic.jpg',
    avatarImg: '/classes/newhdlwt.jpg',
    modelRender: '/classes/hero_fire_taoist.jpg',
    weapon: 'عصا السحر وكرة النار (Fire Backsword)',
    role: 'سيد السحر الناري والضررات المساحية',
    desc: 'سيد الانفجارات السحرية الصاعقة! يطلق الكرات النارية والنيازك الحارقة التي تسحق تشكيلات الأعداء وتدمر خطوط القتال الخلفية في حرب النقابات.',
    stats: { attack: 100, defense: 45, speed: 75, difficulty: 75 },
    highlights: [
      'أعلى ضرر سحري تفجيري مساحي (Fire Meteor)',
      'تدمير تكتلات الأعداء في حروب القلعة',
      'مهارات النيران المتسلسلة القاتلة'
    ],
    theme: 'border-red-500/50 bg-gradient-to-r from-red-500 to-rose-600',
    badge: 'bg-red-500/15 text-red-300 border-red-500/40',
    accentColor: '#ef4444',
    glowGradient: 'from-red-600/30 via-rose-500/10 to-transparent',
  },
  {
    id: 'water_taoist',
    name: 'حاوي الماء',
    englishName: 'WATER TAOIST',
    icon: Sparkles,
    portraitImg: '/classes/zydspic.jpg',
    avatarImg: '/classes/newdslwt.jpg',
    modelRender: '/classes/hero_water_taoist.jpg',
    weapon: 'عصا الشفاء والطلاسم (Talismans & Staff)',
    role: 'الشفاء الخارق وإعادة الإحياء',
    desc: 'قلب الفريق النابض باللعبة! يمتلك المهارة الأسطورية لإعادة إحياء الأبطال فوراً (Resurrect)، مع الشفاء التام وزيادة سرعة اكتساب الخبرة الـ EXP.',
    stats: { attack: 60, defense: 80, speed: 70, difficulty: 80 },
    highlights: [
      'إعادة إحياء الأبطال الميتين فوراً (Resurrect)',
      'علاج وشحن صحة وطاقة الفريق بالكامل',
      'عنصر لا غنى عنه مطلقاً في حروب النقابات'
    ],
    theme: 'border-purple-500/50 bg-gradient-to-r from-purple-400 to-indigo-500',
    badge: 'bg-purple-500/15 text-purple-300 border-purple-500/40',
    accentColor: '#a855f7',
    glowGradient: 'from-purple-600/30 via-indigo-500/10 to-transparent',
  },
  {
    id: 'ninja',
    name: 'النينجا',
    englishName: 'NINJA',
    icon: Zap,
    portraitImg: '/classes/zyrzpic.jpg',
    avatarImg: '/classes/newrzlwt.jpg',
    modelRender: '/classes/hero_ninja.jpg',
    weapon: 'خناجر الكاتانا المزدوجة (Dual Katana)',
    role: 'الاغتيال الخاطف والاختفاء وسرعة الحركة',
    desc: 'سيد الظلال والسرعة المرعبة! يباغت الأعداء من حيث لا يشعرون باستخدام مهارات الضباب السام والاختفاء وضربة الموت الحاسمة (Fatal Strike).',
    stats: { attack: 95, defense: 55, speed: 95, difficulty: 85 },
    highlights: [
      'مهارات الاختفاء والضباب السام (Toxic Fog)',
      'ضربات خاطفة واغتيال مرعب بلمسة واحدة',
      'سرعة فائقة جداً في الركض والمناورة'
    ],
    theme: 'border-rose-500/50 bg-gradient-to-r from-rose-500 to-pink-600',
    badge: 'bg-rose-500/15 text-rose-300 border-rose-500/40',
    accentColor: '#f43f5e',
    glowGradient: 'from-rose-600/30 via-pink-500/10 to-transparent',
  },
  {
    id: 'monk',
    name: 'الراهب',
    englishName: 'MONK',
    icon: Crown,
    portraitImg: '/classes/zylspic.jpg',
    avatarImg: '/classes/newlslwt.jpg',
    modelRender: '/classes/hero_monk.jpg',
    weapon: 'عصا التسبيح والخرز (Prayer Beads)',
    role: 'تطهير اللعنات ودعم دفاع الفريق',
    desc: 'البطل المقدس وحامي الفريق! يمتلك هجمات القتال القريب الموزونة مع قدرة تطهير اللعنات والسموم وإبطال السحر ورش بوفات الحماية لأعضاء النقابة.',
    stats: { attack: 85, defense: 85, speed: 75, difficulty: 65 },
    highlights: [
      'تطهير وإزالة اللعنات والسموم فوراً (Radiance)',
      'هجمات كومبو قتالية متوازنة وقوية',
      'دروع حماية ومكافآت قوة لأفراد التيم'
    ],
    theme: 'border-amber-500/50 bg-gradient-to-r from-amber-400 to-yellow-500',
    badge: 'bg-amber-500/15 text-amber-300 border-amber-500/40',
    accentColor: '#eab308',
    glowGradient: 'from-amber-600/30 via-yellow-500/10 to-transparent',
  },
  {
    id: 'pirate',
    name: 'القرصان',
    englishName: 'PIRATE',
    icon: Anchor,
    portraitImg: '/classes/zyxkpic.jpg',
    avatarImg: '/classes/newxklwt.jpg',
    modelRender: '/classes/hero_pirate.jpg',
    weapon: 'مسدسات وسيف القرصان (Pistols & Rapier)',
    role: 'قتال هجين قريب وبعيد مع ضرر حاسم',
    desc: 'سيد البحار والمغامرات الشرسة! يجمع بين المبارزة القريبة بسيف السايف والرمي بالمسدسات النارية المتتالية مع القنابل الدخانية.',
    stats: { attack: 90, defense: 65, speed: 85, difficulty: 75 },
    highlights: [
      'أسلوب قتال هجين بالسيف والمسدسات',
      'مهارات القنابل والدخان المتفجر',
      'ضررات حاسمة متتالية وطلاقة حركة عالية'
    ],
    theme: 'border-sky-500/50 bg-gradient-to-r from-sky-400 to-blue-500',
    badge: 'bg-sky-500/15 text-sky-300 border-sky-500/40',
    accentColor: '#0ea5e9',
    glowGradient: 'from-sky-600/30 via-blue-500/10 to-transparent',
  },
  {
    id: 'windwalker',
    name: 'محارب الرياح',
    englishName: 'WINDWALKER',
    icon: Wind,
    portraitImg: '/classes/zywspic.jpg',
    avatarImg: '/classes/newwslwt.jpg',
    modelRender: '/classes/hero_windwalker.jpg',
    weapon: 'مراوح الرياح والمخالب (Fan & Claws)',
    role: 'سرعة الأعاصير والشفاء الذاتي',
    desc: 'مقاتل الأعاصير الخاطف! يمتلك أسرع معدل حركات متتالية بمهارات المروحة وتحويل الضرر الموجه إليه إلى صحة وامتصاص الدماء.',
    stats: { attack: 92, defense: 70, speed: 100, difficulty: 80 },
    highlights: [
      'أسرع حركات واندفاع خاطف في النزالات (Chaser)',
      'سحر الأعاصير الجوية وامتصاص الصحة',
      'مرونة وتأقلم خرافي في معارك الـ PK'
    ],
    theme: 'border-teal-500/50 bg-gradient-to-r from-teal-400 to-emerald-500',
    badge: 'bg-teal-500/15 text-teal-300 border-teal-500/40',
    accentColor: '#14b8a6',
    glowGradient: 'from-teal-600/30 via-emerald-500/10 to-transparent',
  },
  {
    id: 'dragon',
    name: 'التنين',
    englishName: 'DRAGON WARRIOR',
    icon: Compass,
    portraitImg: '/classes/zytspic.jpg',
    avatarImg: '/classes/newtslwt.jpg',
    modelRender: '/classes/hero_dragon.jpg',
    weapon: 'النونشاكو وقبضات التنين (Nunchaku)',
    role: 'قتال الكونغ فو والضرر التتابعي الشرس',
    desc: 'أسطورة القتال الفردي بروح التنين! يمتلك ضربات النونشاكو الخاطفة والمتتالية بدون توقف مع مهارات اختراق دروع الخصم وسحقه.',
    stats: { attack: 98, defense: 75, speed: 95, difficulty: 85 },
    highlights: [
      'ضربات نونشاكو خاطفة متتالية (Nunchaku Combo)',
      'غضب التنين وسحق دروع الأعداء',
      'سيطرة مطلقة في مبارزات الـ 1v1'
    ],
    theme: 'border-yellow-500/50 bg-gradient-to-r from-amber-500 to-orange-500',
    badge: 'bg-amber-500/15 text-amber-300 border-amber-500/40',
    accentColor: '#f59e0b',
    glowGradient: 'from-amber-600/30 via-orange-500/10 to-transparent',
  }
];

export default function ClassesShowcase() {
  const [activeClass, setActiveClass] = useState(classesData[0]);
  const ClassIcon = activeClass.icon;

  return (
    <section id="classes" className="py-16 sm:py-24 lg:py-32 bg-[#030611] relative overflow-hidden select-none">

      {/* Dynamic Background Spotlight Ambient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[800px] h-[450px] sm:h-[800px] blur-[140px] sm:blur-[180px] pointer-events-none transition-all duration-1000 opacity-20 rounded-full"
        style={{ backgroundColor: activeClass.accentColor }}
      ></div>

      {/* Grid Pattern Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">

        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#090e1c] border border-cyan-500/30 text-cyan-400 text-xs font-black mb-3 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
            <Award className="w-4 h-4 text-amber-400 animate-pulse" /> AAA IN-GAME HERO SHOWCASE <Sparkles className="w-4 h-4 text-cyan-400" />
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            استعرض أبطال ومجسمات{' '}
            <span dir="ltr" className="inline-flex items-center gap-1.5 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-orange-500 font-sans">
              EQUINOX VS
            </span>
          </h2>
          <p className="text-slate-400 mt-2 sm:mt-3 text-sm sm:text-lg font-bold max-w-2xl mx-auto">
            اختر البطل المفضل لديك واستكشف المجسم البطولي المباشر، الأسلحة القتالية، والمواصفات الكاملة
          </p>
        </div>

        {/* Sleek Horizontal Tab Selector with Avatars & Distinct Titles */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center justify-start sm:justify-center gap-2.5 sm:gap-3 overflow-x-auto pb-4 pt-1 no-scrollbar px-1">
            {classesData.map((cls) => {
              const isActive = activeClass.id === cls.id;
              return (
                <button
                  key={cls.id}
                  onClick={() => setActiveClass(cls)}
                  className={`group relative px-3.5 sm:px-5 py-2.5 sm:py-3.5 rounded-2xl font-black text-xs sm:text-sm transition-all duration-300 flex items-center gap-2.5 shrink-0 cursor-pointer border backdrop-blur-2xl ${
                    isActive
                      ? 'bg-[#0f172a] text-white border-amber-400/80 shadow-[0_0_30px_rgba(0,240,255,0.35)] scale-105 z-10'
                      : 'bg-[#070b16]/80 text-slate-400 border-slate-800/80 hover:text-slate-100 hover:border-slate-700 hover:bg-[#0c1222]'
                  }`}
                  style={isActive ? { borderColor: cls.accentColor } : {}}
                >
                  {/* Top Active Indicator Light */}
                  {isActive && (
                    <span
                      className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full shadow-[0_0_12px] transition-all"
                      style={{ backgroundColor: cls.accentColor, boxShadow: `0 0 12px ${cls.accentColor}` }}
                    ></span>
                  )}

                  {/* Character Avatar Circle */}
                  <div
                    className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 shrink-0 transition-transform duration-300 ${
                      isActive ? 'border-amber-300 scale-110 shadow-md' : 'border-slate-700 opacity-70 group-hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={cls.avatarImg}
                      alt={cls.name}
                      width={36}
                      height={36}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Class Name */}
                  <span className="whitespace-nowrap font-black">{cls.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Hero Showcase Main Stage Card */}
        <div className="p-6 sm:p-10 lg:p-14 rounded-3xl bg-[#070b16]/95 border border-slate-800/90 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.9)] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative overflow-hidden">

          {/* Background Ambient Glows inside Stage */}
          <div
            className="absolute -top-24 -right-24 w-96 h-96 blur-[120px] pointer-events-none opacity-25"
            style={{ backgroundColor: activeClass.accentColor }}
          ></div>
          <div
            className="absolute -bottom-24 -left-24 w-96 h-96 blur-[120px] pointer-events-none opacity-25"
            style={{ backgroundColor: activeClass.accentColor }}
          ></div>

          {/* Right Side (RTL): Dazzling Hero Model Display Stage */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[380px] sm:min-h-[480px]">

            {/* Arena Spotlight Aura */}
            <div
              className="absolute inset-0 rounded-3xl opacity-20 filter blur-3xl pointer-events-none transition-all duration-700"
              style={{ backgroundColor: activeClass.accentColor }}
            ></div>

            {/* Hero Stage Arena Backdrop */}
            <div className="relative w-full h-[360px] sm:h-[460px] rounded-3xl border border-slate-800/90 bg-gradient-to-b from-[#0a0e1e] via-[#050812] to-[#02040a] shadow-[inset_0_0_60px_rgba(0,0,0,0.9)] overflow-hidden flex items-center justify-center group">

              {/* Pedestal Ground Lighting */}
              <div
                className="absolute bottom-4 w-3/4 h-12 rounded-full opacity-40 blur-xl pointer-events-none transition-all duration-700"
                style={{ backgroundColor: activeClass.accentColor }}
              ></div>

              {/* Pedestal Oval Ring */}
              <div
                className="absolute bottom-8 w-2/3 h-10 border-2 rounded-full opacity-30 transform rotate-x-60 pointer-events-none"
                style={{ borderColor: activeClass.accentColor }}
              ></div>

              {/* Full Height Character Render Model */}
              <div className="relative w-full h-full p-4 flex items-center justify-center z-10">
                <Image
                  key={activeClass.id}
                  src={activeClass.modelRender}
                  alt={activeClass.name}
                  fill
                  className="object-contain p-2 sm:p-4 filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.95)] transform group-hover:scale-105 transition-all duration-700 animate-fadeIn"
                  priority
                />
              </div>

              {/* Top Right Class Tag Badge */}
              <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-[#050811]/90 border border-slate-700/80 text-white font-black text-xs flex items-center gap-2 backdrop-blur-md z-20 shadow-xl">
                <ClassIcon className="w-4 h-4" style={{ color: activeClass.accentColor }} />
                <span dir="ltr" className="font-sans font-black">{activeClass.englishName}</span>
              </div>

              {/* Bottom In-Game Portrait Avatar Bar */}
              <div className="absolute bottom-3 inset-x-3 p-3 rounded-2xl bg-[#060a15]/90 border border-slate-800/90 backdrop-blur-md flex items-center justify-between z-20 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-amber-400 shadow-md shrink-0">
                    <Image
                      src={activeClass.portraitImg}
                      alt={activeClass.name}
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="text-right">
                    <h4 className="text-xs sm:text-sm font-black text-white">{activeClass.name}</h4>
                    <span className="text-[10px] font-bold text-amber-400">مجسم Conquer Mobile الأصلي</span>
                  </div>
                </div>

                <div dir="ltr" className={`px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-black border font-sans ${activeClass.badge}`}>
                  EQUINOX v106
                </div>
              </div>

            </div>

            {/* Weapon Showcase Bar */}
            <div className="mt-3.5 w-full p-3.5 rounded-2xl bg-[#060914] border border-slate-800/90 flex items-center justify-between text-right shadow-inner">
              <span className="text-xs font-bold text-slate-400">السلاح والقتال:</span>
              <span className="text-xs sm:text-sm font-black text-amber-300">{activeClass.weapon}</span>
            </div>

          </div>

          {/* Left Side (RTL): Hero Lore & Interactive Statistics */}
          <div className="lg:col-span-6 space-y-5 text-right">

            {/* Title Header & Badge */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 rounded-2xl bg-[#0d1322] border border-slate-700/80 shadow-lg shrink-0">
                  <ClassIcon className="w-7 h-7" style={{ color: activeClass.accentColor }} />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">{activeClass.name}</h3>
                  <span dir="ltr" className="text-xs font-black text-amber-400 tracking-wider font-sans block mt-0.5">
                    {activeClass.englishName} • {activeClass.role}
                  </span>
                </div>
              </div>

              <p className="text-slate-300 text-xs sm:text-base leading-relaxed font-medium mt-3">
                {activeClass.desc}
              </p>
            </div>

            {/* Combat Features */}
            <div className="space-y-2 pt-1 border-t border-slate-800/80">
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider">مميزات الفئة في معارك الـ PK:</h4>
              <ul className="space-y-2">
                {activeClass.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-bold">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0 shadow-[0_0_10px]"
                      style={{ backgroundColor: activeClass.accentColor, boxShadow: `0 0 10px ${activeClass.accentColor}` }}
                    ></span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Combat Statistics meters */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#040711] border border-slate-800/90 space-y-3.5 shadow-inner">

              <div>
                <div className="flex justify-between text-xs font-black mb-1">
                  <span className="text-slate-300">القوة الهجومية (Attack)</span>
                  <span dir="ltr" className="text-orange-400 font-sans">{activeClass.stats.attack}%</span>
                </div>
                <div className="h-2 rounded-full bg-[#0d1322] overflow-hidden p-0.5 border border-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full transition-all duration-700"
                    style={{ width: `${activeClass.stats.attack}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-black mb-1">
                  <span className="text-slate-300">الصلابة والدفاع (Defense)</span>
                  <span dir="ltr" className="text-cyan-400 font-sans">{activeClass.stats.defense}%</span>
                </div>
                <div className="h-2 rounded-full bg-[#0d1322] overflow-hidden p-0.5 border border-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-sky-500 rounded-full transition-all duration-700"
                    style={{ width: `${activeClass.stats.defense}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-black mb-1">
                  <span className="text-slate-300">السرعة والمناورة (Speed)</span>
                  <span dir="ltr" className="text-emerald-400 font-sans">{activeClass.stats.speed}%</span>
                </div>
                <div className="h-2 rounded-full bg-[#0d1322] overflow-hidden p-0.5 border border-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full transition-all duration-700"
                    style={{ width: `${activeClass.stats.speed}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-black mb-1">
                  <span className="text-slate-300">صعوبة الاحتراف (Difficulty)</span>
                  <span dir="ltr" className="text-purple-400 font-sans">{activeClass.stats.difficulty}%</span>
                </div>
                <div className="h-2 rounded-full bg-[#0d1322] overflow-hidden p-0.5 border border-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full transition-all duration-700"
                    style={{ width: `${activeClass.stats.difficulty}%` }}
                  ></div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
