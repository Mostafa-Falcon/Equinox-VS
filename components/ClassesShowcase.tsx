'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Swords, Shield, Crosshair, Sparkles, Zap, Flame, Snowflake, Crown, Anchor, Wind, Compass } from 'lucide-react';

const classesData = [
  {
    id: 'trojan',
    name: 'المحارب التروجان (Trojan)',
    icon: Swords,
    cardImg: '/classes/jqsbtnnormal.jpg',
    cardClickImg: '/classes/jqsbtnclick.jpg',
    portraitImg: '/classes/zyjqspic.jpg',
    avatarImg: '/classes/newjqslwt.jpg',
    modelRender: '/classes/hero_trojan.jpg',
    weapon: 'سيفين مزدوجين (Dual Swords / Clubs)',
    role: 'قتال فردي مباشر وقوة هجومية ساحقة',
    desc: 'التروجان هو ملك القتال الفردي والمباشر في Conquer! يمتلك أعتى قوة هجومية بسيفين في نفس الوقت ومهارات الحركة السريعة (Scent Sword / Fast Blade) التي تقضي على الخصوم في ثوانٍ معدودة.',
    stats: { attack: 100, defense: 75, speed: 90, difficulty: 60 },
    highlights: [
      'استخدام سلاحين مزدوجين في نفس الوقت',
      'مهارة السيف السريع (Fast Blade & Scent Sword)',
      'سرعة قفز وضرر حاسم قاتل في معارك الـ PK'
    ],
    theme: 'border-orange-500/50 bg-gradient-to-r from-orange-500 to-amber-500',
    badge: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
    glowColor: 'from-orange-500/30 via-amber-500/10 to-transparent',
    accentColor: '#f97316',
  },
  {
    id: 'warrior',
    name: 'السيّاف المحارب (Warrior)',
    icon: Shield,
    cardImg: '/classes/zsbtnnormal.jpg',
    cardClickImg: '/classes/zsbtnclick.jpg',
    portraitImg: '/classes/zyzspic.jpg',
    avatarImg: '/classes/newzslwt.jpg',
    modelRender: '/classes/hero_warrior.jpg',
    weapon: 'سيف ودرع ثقيل (Sword & Shield / Spear)',
    role: 'درع بشري متين وهجوم دفاعي',
    desc: 'السيّاف هو البطل الصلب الذي يتصدى لأعنف ضربات الأعداء! يمتلك أضخم صحة (HP) وأعلى دفاع، مع مهارات صد الهجمات (Accuracy / Shield) وحماية فريق النقابة في حروب القلعة.',
    stats: { attack: 80, defense: 100, speed: 65, difficulty: 50 },
    highlights: [
      'أعلى معدل دفاع وصحة (HP) في اللعبة',
      'استخدام الدرع لحجب وصد ضربات الخصوم',
      'دعم اساسي وحماية الفئات الأخرى في حروب القلعة'
    ],
    theme: 'border-cyan-500/50 bg-gradient-to-r from-cyan-400 to-sky-500',
    badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
    glowColor: 'from-cyan-500/30 via-sky-500/10 to-transparent',
    accentColor: '#06b6d4',
  },
  {
    id: 'archer',
    name: 'الرامي الأسطوري (Archer)',
    icon: Crosshair,
    cardImg: '/classes/gjsbtnnormal.jpg',
    cardClickImg: '/classes/gjsbtnclick.jpg',
    portraitImg: '/classes/zygspic.jpg',
    avatarImg: '/classes/newgslwt.jpg',
    modelRender: '/classes/hero_archer.jpg',
    weapon: 'قوس وكيفر السهام (Bow & Arrows)',
    role: 'هجوم بعيد المدى وسريع وتجميع الجواهر',
    desc: 'الرامي يصطاد أهدافه من مسافات بعيدة بسهامه القاتلة. يمتلك أفضل قدرة على إطلاق المطر السهمي (Scatter Strike) لتجميع الـ CPs وقتل الوحوش وتصفية الخرائط بسرعة خرافية.',
    stats: { attack: 85, defense: 50, speed: 100, difficulty: 70 },
    highlights: [
      'مهارة المطر السهمي إصابة عشرات الأهداف (Scatter)',
      'أسرع فئة في تجميع الـ CPs وقتل الوحوش والـ Level Up',
      'مناورة سريعة وقتال أمان عن بعد'
    ],
    theme: 'border-emerald-500/50 bg-gradient-to-r from-emerald-400 to-teal-500',
    badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    glowColor: 'from-emerald-500/30 via-teal-500/10 to-transparent',
    accentColor: '#10b981',
  },
  {
    id: 'fire_taoist',
    name: 'الحاوي النار (Fire Taoist)',
    icon: Flame,
    cardImg: '/classes/hdbtnnormal.jpg',
    cardClickImg: '/classes/hdbtnclick.jpg',
    portraitImg: '/classes/zyhdpic.jpg',
    avatarImg: '/classes/newhdlwt.jpg',
    modelRender: '/classes/hero_fire_taoist.jpg',
    weapon: 'عصا السحر وكرة النار (Backsword & Fire Magic)',
    role: 'سحر النار المباشر وتفجير الخصوم',
    desc: 'سيد السحر الناري الصاعق! يطلق الكرات النارية والانفجارات المتتالية التي تلحق أضراراً سحرية هائلة بأرتال الأعداء من مسافات بعيدة.',
    stats: { attack: 100, defense: 45, speed: 75, difficulty: 75 },
    highlights: [
      'أعلى ضرر سحري تفجيري في اللعبة (Fire Meteor)',
      'تدمير خطوط دفاع الأعداء في حروب القلعة',
      'مهارات النيران المتسلسلة والمساحية'
    ],
    theme: 'border-red-500/50 bg-gradient-to-r from-red-500 to-rose-600',
    badge: 'bg-red-500/10 text-red-300 border-red-500/30',
    glowColor: 'from-red-500/30 via-rose-500/10 to-transparent',
    accentColor: '#ef4444',
  },
  {
    id: 'water_taoist',
    name: 'الحاوي الماء (Water Taoist)',
    icon: Sparkles,
    cardImg: '/classes/dsbtnnormal.jpg',
    cardClickImg: '/classes/dsbtnclick.jpg',
    portraitImg: '/classes/zydspic.jpg',
    avatarImg: '/classes/newdslwt.jpg',
    modelRender: '/classes/hero_water_taoist.jpg',
    weapon: 'عصا الشفاء وطلاسم الحياة (Backsword & Talismans)',
    role: 'الشفاء الخارق والإحياء ورفع الـ EXP',
    desc: 'عماد أي فريق في Conquer! يمتلك القدرة الأسطورية على إعادة إحياء الموتى فوراً (Resurrect)، مع الشفاء الكامل وزيادة سرعة كسب الخبرة الـ EXP.',
    stats: { attack: 60, defense: 80, speed: 70, difficulty: 80 },
    highlights: [
      'إعادة إحياء الأبطال الميتين فوراً (Resurrect)',
      'علاج وشحن طاقة الفريق والصحة كاملة (Healing)',
      'عنصر لا غنى عنه في حروب النقابات'
    ],
    theme: 'border-purple-500/50 bg-gradient-to-r from-purple-400 to-indigo-500',
    badge: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
    glowColor: 'from-purple-500/30 via-indigo-500/10 to-transparent',
    accentColor: '#a855f7',
  },
  {
    id: 'ninja',
    name: 'النينجا الظل (Ninja)',
    icon: Zap,
    cardImg: '/classes/rzbtnnormal.jpg',
    cardClickImg: '/classes/rzbtnclick.jpg',
    portraitImg: '/classes/zyrzpic.jpg',
    avatarImg: '/classes/newrzlwt.jpg',
    modelRender: '/classes/hero_ninja.jpg',
    weapon: 'خناجر الموت المزدوجة (Dual Katana)',
    role: 'اغتيال خاطف واختفاء وسرعة مرعبة',
    desc: 'سيد الظلال والسرعة في المعارك! يضرب من حيث لا يعلم الخصم باستخدام خناجره السريعة ومهارات التخفي والضباب وضربة الموت الخاطفة (Toxic Fog & Fatal Strike).',
    stats: { attack: 95, defense: 55, speed: 95, difficulty: 85 },
    highlights: [
      'مهارات الاختفاء والضباب السام (Toxic Fog)',
      'ضربات خاطفة وقوة اغتيال مرعبة بلمسة واحدة',
      'سرعة فائقة في الركض والمناورة'
    ],
    theme: 'border-rose-500/50 bg-gradient-to-r from-rose-500 to-pink-600',
    badge: 'bg-rose-500/10 text-rose-300 border-rose-500/30',
    glowColor: 'from-rose-500/30 via-pink-500/10 to-transparent',
    accentColor: '#f43f5e',
  },
  {
    id: 'monk',
    name: 'الراهب المقدس (Monk)',
    icon: Crown,
    cardImg: '/classes/lsbtnnormal.jpg',
    cardClickImg: '/classes/lsbtnclick.jpg',
    portraitImg: '/classes/zylspic.jpg',
    avatarImg: '/classes/newlslwt.jpg',
    modelRender: '/classes/hero_monk.jpg',
    weapon: 'عصا الراهب والتسبيح (Prayer Beads & Staff)',
    role: 'تطهير اللعنات وحماية الفريق وتقوية الهجوم',
    desc: 'الراهب هو حامي الأبطال ومطهر اللعنات! يمتلك هجمات القتال القريب القوية بمهارات التسبيح التي تبطل السموم واللعنات وتمنح دروعاً دفاعية صلبة.',
    stats: { attack: 85, defense: 85, speed: 75, difficulty: 65 },
    highlights: [
      'إزالة وتطهير تأثير السموم واللعنات (Radiance)',
      'هجمات كومبو مقدسة وموزونة',
      'دروع حماية ومكافآت قوة هجومية لأعضاء الفريق'
    ],
    theme: 'border-amber-500/50 bg-gradient-to-r from-amber-400 to-yellow-500',
    badge: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    glowColor: 'from-amber-500/30 via-yellow-500/10 to-transparent',
    accentColor: '#eab308',
  },
  {
    id: 'pirate',
    name: 'القرصان (Pirate)',
    icon: Anchor,
    cardImg: '/classes/xkbtnnormal.jpg',
    cardClickImg: '/classes/xkbtnclick.jpg',
    portraitImg: '/classes/zyxkpic.jpg',
    avatarImg: '/classes/newxklwt.jpg',
    modelRender: '/classes/hero_pirate.jpg',
    weapon: 'مسدسات وسيف القرصان (Rapier & Pistols)',
    role: 'قتال هجين قريب وبعيد مع ضرر حاسم',
    desc: 'سيد البحار والمغامرات! يجمع بين السيف السريع والرمي بالمسدسات النارية من مسافة متدرجة مع مهارات القنابل والدخان الناري.',
    stats: { attack: 90, defense: 65, speed: 85, difficulty: 75 },
    highlights: [
      'أسلوب قتال مزدوج قريب بالسيف وبعيد بالمسدس',
      'مهارات القنابل والمتفجرات الدخانية',
      'ضررات حاسمة متتالية وطلاقة حركة'
    ],
    theme: 'border-sky-500/50 bg-gradient-to-r from-sky-400 to-blue-500',
    badge: 'bg-sky-500/10 text-sky-300 border-sky-500/30',
    glowColor: 'from-sky-500/30 via-blue-500/10 to-transparent',
    accentColor: '#0ea5e9',
  },
  {
    id: 'windwalker',
    name: 'محارب الرياح (Windwalker)',
    icon: Wind,
    cardImg: '/classes/wsbtnnormal.jpg',
    cardClickImg: '/classes/wsbtnclick.jpg',
    portraitImg: '/classes/zywspic.jpg',
    avatarImg: '/classes/newwslwt.jpg',
    modelRender: '/classes/hero_windwalker.jpg',
    weapon: 'مراوح الرياح والمخالب (Fan & Claws)',
    role: 'السرعة الفائقة والشفاء الذاتي والأعاصير',
    desc: 'مقاتل الأعاصير الخاطف! يمتلك أسرع معدل حركات متتالية ومهارات تحويل الضرر إلى صحة ومهارات العاصفة الهوائية.',
    stats: { attack: 92, defense: 70, speed: 100, difficulty: 80 },
    highlights: [
      'أسرع تحركات ومهارات الاندفاع الخاطف (Chaser)',
      'سحر الأعاصير الجوية وامتصاص الصحة',
      'مرونة وتأقلم عالي في معارك الـ PK'
    ],
    theme: 'border-teal-500/50 bg-gradient-to-r from-teal-400 to-emerald-500',
    badge: 'bg-teal-500/10 text-teal-300 border-teal-500/30',
    glowColor: 'from-teal-500/30 via-emerald-500/10 to-transparent',
    accentColor: '#14b8a6',
  },
  {
    id: 'dragon',
    name: 'التنين المقاتل (Dragon Warrior)',
    icon: Compass,
    cardImg: '/classes/tsbtnnormal.jpg',
    cardClickImg: '/classes/tsbtnclick.jpg',
    portraitImg: '/classes/zytspic.jpg',
    avatarImg: '/classes/newtslwt.jpg',
    modelRender: '/classes/hero_dragon.jpg',
    weapon: 'النونشاكو وقبضات التنين (Nunchaku & Fists)',
    role: 'قتال الكونغ فو الشرس والضرر المتتابع',
    desc: 'أسطورة القتال الفردي والكونغ فو بروح التنين! يمتلك أسرع ضربات قاضية متتابعة بدون توقف ومهارات غضب التنين القاتلة.',
    stats: { attack: 98, defense: 75, speed: 95, difficulty: 85 },
    highlights: [
      'ضربات نونشاكو خاطفة متتالية (Nunchaku Combo)',
      'غضب التنين وسحق دروع الخصم',
      'سيطرة كاملة في النزالات الفردية 1v1'
    ],
    theme: 'border-yellow-500/50 bg-gradient-to-r from-amber-500 to-orange-500',
    badge: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    glowColor: 'from-amber-500/30 via-orange-500/10 to-transparent',
    accentColor: '#f59e0b',
  }
];

export default function ClassesShowcase() {
  const [activeClass, setActiveClass] = useState(classesData[0]);
  const ClassIcon = activeClass.icon;

  return (
    <section id="classes" className="py-16 sm:py-20 lg:py-28 bg-[#040711] relative overflow-hidden">

      {/* Dynamic Background Ambient Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] blur-[120px] sm:blur-[150px] pointer-events-none transition-all duration-700 opacity-25 rounded-full"
        style={{ backgroundColor: activeClass.accentColor }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">

        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#0b101f] border border-cyan-500/30 text-cyan-400 text-[11px] sm:text-xs font-bold mb-3 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
            <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400 animate-pulse" /> IN-GAME HERO MODELS & CLASSES <Snowflake className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            مجسمات وأبطال اللعبة الرسمية{' '}
            <span dir="ltr" className="inline-flex items-center gap-1.5 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-orange-500 font-sans">
              EQUINOX VS
            </span>
          </h2>
          <p className="text-slate-400 mt-2 sm:mt-3 text-sm sm:text-xl font-medium max-w-2xl mx-auto">
            اختر بطل معركتك واستعرض المجسم البطولي الحقيقي والتفاصيل الكاملة من أصل اللعبة
          </p>
        </div>

        {/* Class Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3.5 mb-8 sm:mb-12 max-w-full overflow-x-auto pb-2 no-scrollbar">
          {classesData.map((cls) => {
            const isActive = activeClass.id === cls.id;
            return (
              <button
                key={cls.id}
                onClick={() => setActiveClass(cls)}
                className={`group px-3 py-2 sm:px-4 sm:py-3 rounded-2xl font-black text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer border backdrop-blur-xl relative overflow-hidden shrink-0 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/90 via-sky-500/90 to-blue-600/90 text-white border-white/50 shadow-[0_0_25px_rgba(0,240,255,0.45)] scale-105 z-10'
                    : 'bg-[#0a0f1d]/90 text-slate-300 border-slate-800/80 hover:text-white hover:border-cyan-500/50 hover:bg-[#11182d]'
                }`}
              >
                {/* Official Game Avatar Thumbnail */}
                <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden border shrink-0 transition-transform duration-300 ${
                  isActive ? 'border-amber-300 scale-110 shadow-lg' : 'border-slate-700 opacity-80 group-hover:opacity-100'
                }`}>
                  <Image
                    src={cls.avatarImg}
                    alt={cls.name}
                    width={32}
                    height={32}
                    className="object-cover w-full h-full"
                  />
                </div>
                <span>{cls.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Class Hero Model Display Card */}
        <div className="p-5 sm:p-8 lg:p-12 rounded-3xl bg-[#0a0e1a]/95 border border-slate-800/90 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center relative overflow-hidden">

          {/* Glowing Corner Accents */}
          <div className="absolute top-0 right-0 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-bl from-cyan-500/20 to-transparent blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-tr from-orange-500/20 to-transparent blur-[80px] pointer-events-none"></div>

          {/* Right Column (RTL): In-Game 3D Hero Model Showcase Frame */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative">

            {/* Glowing 3D Hero Card Wrapper */}
            <div className="w-full relative rounded-3xl overflow-hidden border border-slate-700/80 bg-[#050812] shadow-[0_0_50px_rgba(0,0,0,0.9)] group">

              {/* Ambient Aura Background */}
              <div
                className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500 blur-md pointer-events-none"
                style={{ backgroundColor: activeClass.accentColor }}
              ></div>

              {/* Main Model Showcase Image */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] min-h-[240px] sm:min-h-[300px] overflow-hidden flex items-center justify-center p-2">
                <Image
                  src={activeClass.modelRender}
                  alt={activeClass.name}
                  fill
                  className="object-contain transform group-hover:scale-105 transition-transform duration-700 drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]"
                  priority
                />
              </div>

              {/* In-Game Card Overlay Footnote */}
              <div className="p-3.5 sm:p-4 bg-gradient-to-t from-[#060913] via-[#090d1c]/90 to-transparent border-t border-slate-800/80 flex items-center justify-between">

                {/* Official Game Portrait Avatar */}
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden border-2 border-amber-400/80 shadow-[0_0_15px_rgba(245,158,11,0.3)] shrink-0">
                    <Image
                      src={activeClass.portraitImg}
                      alt={activeClass.name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="text-right">
                    <h5 className="text-xs sm:text-sm font-black text-white">{activeClass.name.split(' ')[0]}</h5>
                    <span className="text-[10px] sm:text-[11px] font-bold text-amber-400">مجسم اللعبة الأصلي</span>
                  </div>
                </div>

                {/* Badge */}
                <div dir="ltr" className={`px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-black border font-sans ${activeClass.badge}`}>
                  Equinox VS
                </div>

              </div>

            </div>

            {/* Weapon & Role Banner */}
            <div className="mt-3 sm:mt-4 w-full p-3.5 sm:p-4 rounded-2xl bg-[#070b16] border border-slate-800/90 text-right flex items-center justify-between shadow-inner">
              <span className="text-xs font-bold text-slate-400">السلاح الرئيسي:</span>
              <span className="text-xs sm:text-sm font-black text-amber-300">{activeClass.weapon}</span>
            </div>

          </div>

          {/* Left Column (RTL): Class Description, Details & Stats */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-right">

            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="p-3 sm:p-4 rounded-2xl bg-[#12192d] border border-white/10 shadow-[inset_0_2px_10px_rgba(255,255,255,0.05)] shrink-0">
                <ClassIcon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">{activeClass.name}</h3>
                <span className={`text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-md inline-block mt-1 border ${activeClass.badge}`}>
                  {activeClass.role}
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-base leading-relaxed font-medium">
              {activeClass.desc}
            </p>

            {/* Class Battle Highlights */}
            <div className="space-y-2">
              <h4 className="text-[11px] sm:text-xs font-black text-slate-400 uppercase tracking-wider">مميزات الفئة في ساحات القتال:</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {activeClass.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 font-bold">
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.8)]" style={{ backgroundColor: activeClass.accentColor }}></span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Class Stats Meter Cards */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#060a15] border border-slate-800/90 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 shadow-inner">

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-slate-400">القوة الهجومية (Attack)</span>
                  <span dir="ltr" className="text-orange-400 font-black">{activeClass.stats.attack}%</span>
                </div>
                <div className="h-2 sm:h-2.5 rounded-full bg-[#11172a] overflow-hidden p-0.5 border border-slate-800">
                  <div className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full transition-all duration-700" style={{ width: `${activeClass.stats.attack}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-slate-400">الصلابة والدفاع (Defense)</span>
                  <span dir="ltr" className="text-cyan-400 font-black">{activeClass.stats.defense}%</span>
                </div>
                <div className="h-2 sm:h-2.5 rounded-full bg-[#11172a] overflow-hidden p-0.5 border border-slate-800">
                  <div className="h-full bg-gradient-to-r from-cyan-400 to-sky-500 rounded-full transition-all duration-700" style={{ width: `${activeClass.stats.defense}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-slate-400">السرعة والمناورة (Speed)</span>
                  <span dir="ltr" className="text-emerald-400 font-black">{activeClass.stats.speed}%</span>
                </div>
                <div className="h-2 sm:h-2.5 rounded-full bg-[#11172a] overflow-hidden p-0.5 border border-slate-800">
                  <div className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full transition-all duration-700" style={{ width: `${activeClass.stats.speed}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-slate-400">صعوبة الاحتراف (Difficulty)</span>
                  <span dir="ltr" className="text-purple-400 font-black">{activeClass.stats.difficulty}%</span>
                </div>
                <div className="h-2 sm:h-2.5 rounded-full bg-[#11172a] overflow-hidden p-0.5 border border-slate-800">
                  <div className="h-full bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full transition-all duration-700" style={{ width: `${activeClass.stats.difficulty}%` }}></div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
