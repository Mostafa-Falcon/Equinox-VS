'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Swords, Shield, Crosshair, Sparkles, Zap, Flame, Crown, Anchor, Wind, Compass } from 'lucide-react';

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
    attackType: 'ضرر فيزيائي مدمر',
    range: 'التحام مباشر وسرعة خاطفة',
    role: 'ملك النزالات الفردية والضرر القاتل السريع',
    desc: 'التروجان هو وحش الـ 1v1 في Conquer! يمتلك أعتى قوة هجومية باللعبة باستخدام سيفين مزدوجين مع سرعة قفز حاسمة تمكنه من إنهاء الخصوم بضربة واحدة.',
    skills: [
      { name: 'السيف السريع (Fast Blade)', desc: 'ضربات متتالية خاطفة بسرعة جنونية تباغت الخصم.' },
      { name: 'السيف الطائر (Scent Sword)', desc: 'رمي السيوف الدائرية لإصابة الأهداف على مسافة قريبة.' },
      { name: 'الأعصار الدوار (Cyclone)', desc: 'دوران هجومي عنيف يسحق الخصوم المحيطين بالبطل.' },
    ],
    stats: { attack: 100, defense: 75, speed: 90, difficulty: 60 },
    proTip: 'في معارك الـ PK الفردية، استدرج الخصم واقترب بالقفز السريع لتفعيل السيف السريع (Fast Blade) وإنهائه فوراً.',
    badge: 'bg-orange-500/15 text-orange-400 border-orange-500/40',
    accentColor: '#f97316',
  },
  {
    id: 'warrior',
    name: 'السيّاف',
    englishName: 'WARRIOR',
    icon: Shield,
    portraitImg: '/classes/zyzspic.jpg',
    avatarImg: '/classes/newzslwt.jpg',
    modelRender: '/classes/hero_warrior.jpg',
    weapon: 'سيف ودرع متين (Sword & Shield)',
    attackType: 'دفاع فولاذي وهجمات مضادة',
    range: 'خط الدفاع الأول وصد الضربات',
    role: 'الدرع البشري المتين وحامي الفريق في القلعة',
    desc: 'الحصن المنيع الذي يتحمل أشرس الضربات! يمتلك أضخم معدل صحة (HP) وأعلى دفاع باللعبة، مع قدرة استثنائية على حجب الضربات وقيادة حروب القلعة.',
    skills: [
      { name: 'حاجز الدرع (Shield Block)', desc: 'صد ضربات الخصم وتقليل الضرر الموجه للبطل بنسبة هائلة.' },
      { name: 'زئير السوبرمان (Superman Roar)', desc: 'مضاعفة الهجوم والدفاع لفترة مؤقتة لسحق الوحوش والأعداء.' },
      { name: 'الرمح الطائر (Flying Spear)', desc: 'هجوم بعيد المدى لضرب وتشتيت تشكيلات العدو.' },
    ],
    stats: { attack: 80, defense: 100, speed: 65, difficulty: 50 },
    proTip: 'في حرب القلعة، تقدم في الصفوف الأولى لتشغيل حجب الدرع وتشتيت ضربات الخصوم عن رماة فريقك وحواة السحر.',
    badge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/40',
    accentColor: '#06b6d4',
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
    attackType: 'مطر سهام مساحي مستمر',
    range: 'أقصى مدى رؤية وأمان عن بعد',
    role: 'سيد صيد الوحوش وتجميع الـ CPs والرمي البعيد',
    desc: 'الرامي هو أسرع شخصية باللعبة في صيد الوحوش وتجميع رصيد الـ CPs مجاناً! يطلق وابلاً من السهام يصيب شاشات كاملة من الوحوش بمهارة المطر السهمي الشهيرة.',
    skills: [
      { name: 'المطر السهمي (Scatter Strike)', desc: 'إطلاق مئات السهام في مروحة واسعة تصيب عشرات الوحوش بضربة واحدة.' },
      { name: 'الطيران السريع (Fly)', desc: 'التحليق في الجو لتفادي هجمات الوحوش البرية تماماً واقتناص الأهداف.' },
      { name: 'السهم القاتل (Intense Arrow)', desc: 'سهم فردي مركز يخترق دفاعات الأبطال في معارك الـ PK.' },
    ],
    stats: { attack: 85, defense: 50, speed: 100, difficulty: 70 },
    proTip: 'استخدم مهارة الطيران (Fly) أثناء صيد وحوش الخرائط لتفادي أي ضرر أرضي ومضاعفة سرعة تجميع الـ CPs الحرة.',
    badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40',
    accentColor: '#10b981',
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
    attackType: 'انفجارات سحرية نارية مساحية',
    range: 'مدى سحري تفجيري بعيد',
    role: 'سيد السحر الناري وتفجير تكتلات الأعداء في القلعة',
    desc: 'سيد الانفجارات السحرية الصاعقة! يطلق النيازك الحارقة والكرات النارية التي تبيد خطوط دفاع الخصم وتخترق الدروع وتحدث ضرراً سحرياً مدمراً.',
    skills: [
      { name: 'النيزك الحارق (Fire Meteor)', desc: 'إسقاط نيزك لهب عملاق يسحق أي لاعب يقف في منطقة الاستهداف.' },
      { name: 'إعصار اللهب (Tornado)', desc: 'إعصار ناري يحرق مساحات شاسعة ويدمر تجمعات الأعداء.' },
      { name: 'كرة النار المركزة (Fire Ring)', desc: 'كرات نارية سريعة تحرق الخصم وتمنع شفاءه في النزالات.' },
    ],
    stats: { attack: 100, defense: 45, speed: 75, difficulty: 75 },
    proTip: 'في حروب النقابات، قف خلف السيّاف والتروجان واضرب بالنيزك الحارق لتفجير صفوف الأعداء وإعاقة تقدمهم.',
    badge: 'bg-red-500/15 text-red-300 border-red-500/40',
    accentColor: '#ef4444',
  },
  {
    id: 'water_taoist',
    name: 'حاوي الماء',
    englishName: 'WATER TAOIST',
    icon: Sparkles,
    portraitImg: '/classes/zydspic.jpg',
    avatarImg: '/classes/newdslwt.jpg',
    modelRender: '/classes/hero_water_taoist.jpg',
    weapon: 'عصا الشفاء والطلاسم (Water Staff & Talismans)',
    attackType: 'سحر الشفاء والتطهير والدعم',
    range: 'مدى الإحياء والدعم الشامل',
    role: 'القلب النابض للفريق: الإحياء الفوري والشفاء التام',
    desc: 'الشخصية الأهم في أي نقابة أو معركة قلعة! يمتلك القدرة الأسطورية لإعادة إحياء الأبطال الميتين فوراً (Resurrect)، مع الشفاء التام وزيادة سرعة اكتساب الـ EXP.',
    skills: [
      { name: 'الإحياء الفوري (Resurrect)', desc: 'إعادة إحياء أعضاء فريقك الموتى في المعركة فوراً بكامل طاقتهم.' },
      { name: 'العلاج الشامل (Cure & Healing Rain)', desc: 'شحن صحة وطاقة (HP/MP) الفريق بالكامل باستمرار.' },
      { name: 'نجمة الدقة والحماية (Stigma)', desc: 'إزالة اللعنات وزيادة دقة وقوة هجوم أعضاء الفريق.' },
    ],
    stats: { attack: 60, defense: 80, speed: 70, difficulty: 80 },
    proTip: 'حافظ على مسافة أمان خلف خط القتال وكن يقظاً لإحياء التروجان والسيّاف فور سقوطهم ليواصلوا المعركة دون توقف.',
    badge: 'bg-purple-500/15 text-purple-300 border-purple-500/40',
    accentColor: '#a855f7',
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
    attackType: 'اغتيال خاطف بالسم وسمات الظلال',
    range: 'تسلل وتخفي وهجوم مباغت',
    role: 'سيد الاغتيال الصامت والسرعة الخارقة والسموم',
    desc: 'سيد الظلال والسرعة المرعبة! يباغت الأعداء من حيث لا يشعرون باستخدام مهارات الضباب السام والاختفاء وضربة الاغتيال الحاسمة (Fatal Strike).',
    skills: [
      { name: 'الضباب السام (Toxic Fog)', desc: 'نشر سحابة سموم تنقص صحة الخصم تدريجياً وتعيق حركته.' },
      { name: 'ضربة الاغتيال (Fatal Strike)', desc: 'اندفاع خاطف من الظلال يلحق ضرراً حاسماً قاتلاً.' },
      { name: 'شفرات الكاتانا المزدوجة (Two-Fold Blades)', desc: 'سلسلة طعنات خاطفة تمزق درع العدو في ثانية.' },
    ],
    stats: { attack: 95, defense: 55, speed: 95, difficulty: 85 },
    proTip: 'في معارك الـ PK، ارمِ الضباب السام (Toxic Fog) أولاً لإنهاك الخصم، ثم نفذ ضربة الاغتيال لإنهاء المواجهة بلمح البصر.',
    badge: 'bg-rose-500/15 text-rose-300 border-rose-500/40',
    accentColor: '#f43f5e',
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
    attackType: 'ضربات مقدسة وتطهير اللعنات',
    range: 'اشتباك متوازن ودفاع جماعي',
    role: 'البطل المقدس: تطهير السموم واللعنات وحماية الفريق',
    desc: 'البطل المقدس وحامي النقابة! يمتلك هجمات قتالية قوية مع قدرة فريدة على تطهير السموم وإبطال لعنات الخصوم ورش دروع الحماية لأعضاء الفريق.',
    skills: [
      { name: 'تطهير اللعنات (Radiance)', desc: 'إزالة السموم واللعنات عن النفس وعن جميع أعضاء الفريق فوراً.' },
      { name: 'ركلة الإعصار (Whirlwind Kick)', desc: 'ركلات كومبو دائرية تسحق الأعداء وتدفعهم بعيداً.' },
      { name: 'بركة الحماية (Bless)', desc: 'زيادة الدفاع الإجمالي ومقاومة الضربات السحرية والحرجة.' },
    ],
    stats: { attack: 85, defense: 85, speed: 75, difficulty: 65 },
    proTip: 'راقب رفاقك في حروب القلعة؛ فور إصابتهم بأي سموم أو إعاقات، استخدم مهارة Radiance لتطهيرهم وعودتهم للقتال.',
    badge: 'bg-amber-500/15 text-amber-300 border-amber-500/40',
    accentColor: '#eab308',
  },
  {
    id: 'pirate',
    name: 'القرصان',
    englishName: 'PIRATE',
    icon: Anchor,
    portraitImg: '/classes/zyxkpic.jpg',
    avatarImg: '/classes/newxklwt.jpg',
    modelRender: '/classes/hero_pirate.jpg',
    weapon: 'مسدسات وسيف السايف (Pistols & Rapier)',
    attackType: 'قتال هجين: رصاص وسيف مبارزة',
    range: 'مدى مزدوج قريب وبعيد',
    role: 'قتال هجين مرن: مبارزة سريعة وإطلاق رصاص متتالٍ',
    desc: 'سيد البحار والمغامرات الشرسة! يجمع بين المبارزة القريبة بسيف السايف الرشيق وإطلاق الرصاص الناري المتتالي مع القنابل الدخانية المشتتة.',
    skills: [
      { name: 'رصاصة القراصنة (Black Spot)', desc: 'إطلاق رصاصة قوية تضع علامة على الخصم وتضاعف الضرر عليه.' },
      { name: 'مبارزة السيف السريعة (Rapier Combo)', desc: 'طعنات متتالية خاطفة تخترق دروع الخصم المقترب.' },
      { name: 'قنبلة الدخان (Smoke Bomb)', desc: 'إلقاء قنبلة تعمي بصر الأعداء وتمنح القرصان فرصة للمناورة.' },
    ],
    stats: { attack: 90, defense: 65, speed: 85, difficulty: 75 },
    proTip: 'استخدم رصاصة Black Spot لوضع العلامة على الخصم عن بعد، ثم اقترب بطعنات السيف لتفريغ ضرر مضاعف وإنهاء النزال.',
    badge: 'bg-sky-500/15 text-sky-300 border-sky-500/40',
    accentColor: '#0ea5e9',
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
    attackType: 'أعاصير سريعة وامتصاص صحة',
    range: 'اندفاعات خاطفة ومناورة مرنة',
    role: 'سرعة الأعاصير الخاطفة والشفاء الذاتي المستمر',
    desc: 'مقاتل الأعاصير الخاطف! يمتلك أسرع معدل حركات متتالية بمهارات المروحة الهوائية وتحويل جزء من ضرره الموجه إلى صحة وامتصاص دماء مستمر.',
    skills: [
      { name: 'المطاردة الخاطفة (Chaser)', desc: 'اندفاعات متلاحقة تطارد الخصم وتمنعه من الهروب أو القفز.' },
      { name: 'مروحة الإعصار (Thunderbolt)', desc: 'إطلاق عاصفة ريحية تقطع صفوف الأعداء وتستنزف طاقتهم.' },
      { name: 'امتصاص الرياح (Wind Absorb)', desc: 'تحويل ضربات العدو إلى نقاط صحة تجدد طاقتك أثناء القتال.' },
    ],
    stats: { attack: 92, defense: 70, speed: 100, difficulty: 80 },
    proTip: 'استغل مهارة Chaser لملاحقة الرماة والسحرة الهاربين ومنعهم من الابتعاد عن مرمى ضرباتك.',
    badge: 'bg-teal-500/15 text-teal-300 border-teal-500/40',
    accentColor: '#14b8a6',
  },
  {
    id: 'dragon',
    name: 'التنين',
    englishName: 'DRAGON WARRIOR',
    icon: Compass,
    portraitImg: '/classes/zytspic.jpg',
    avatarImg: '/classes/newtslwt.jpg',
    modelRender: '/classes/hero_dragon.jpg',
    weapon: 'النونشاكو وقبضات الكونغ فو (Nunchaku)',
    attackType: 'كومبو متلاحق واختراق دروع',
    range: 'اشتباك جسدي متلاحق',
    role: 'أسطورة القتال الفردي والكونغ فو وسحق الدروع',
    desc: 'أسطورة القتال الفردي بروح التنين! يمتلك ضربات النونشاكو الخاطفة والمتتالية بدون توقف مع مهارات سحق دروع الخصم وتعطيله عن الحركة.',
    skills: [
      { name: 'كومبو النونشاكو (Dragon Combo)', desc: 'سلسلة ضربات متواصلة تحاصر الخصم وتمنعه من الحركة أو الهرب.' },
      { name: 'زئير التنين (Dragon Roar)', desc: 'صرخة قتالية تصعق الأعداء وتكسر دروعهم الدفاعية.' },
      { name: 'قبضة الغضب (Dragon Fist)', desc: 'ضربة قاضية تركز طاقة التنين لاختراق أقوى الدروع الحصينة.' },
    ],
    stats: { attack: 98, defense: 75, speed: 95, difficulty: 85 },
    proTip: 'فعل زئير التنين لكسر درع الخصم أولاً، ثم اطلق كومبو النونشاكو المتواصل لشل حركته وإنهاء المعركة فوراً.',
    badge: 'bg-amber-500/15 text-amber-300 border-amber-500/40',
    accentColor: '#f59e0b',
  }
];

export default function ClassesShowcase() {
  const [activeClass, setActiveClass] = useState(classesData[0]);
  const ClassIcon = activeClass.icon;

  return (
    <section id="classes" className="py-14 sm:py-20 lg:py-24 bg-[#030611] relative overflow-hidden select-none border-t border-slate-800/40">

      {/* Dynamic Background Spotlight Ambient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[700px] h-[450px] sm:h-[700px] blur-[140px] sm:blur-[190px] pointer-events-none transition-all duration-700 opacity-20 rounded-full"
        style={{ backgroundColor: activeClass.accentColor }}
      ></div>

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">

        {/* Section Header (Compact, No Overflow) */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#090e1c] border border-cyan-500/30 text-cyan-400 text-xs font-black mb-3 shadow-md">
            <Swords className="w-4 h-4 text-amber-400" />
            <span>أبطال وفئات قهر أونلاين الرسمية</span>
            <Sparkles className="w-4 h-4 text-cyan-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            استعرض مجسمات ومهارات أبطال{' '}
            <span dir="ltr" className="inline-flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-orange-500 font-sans">
              EQUINOX VS
            </span>
          </h2>
          <p className="text-slate-300 mt-2.5 text-xs sm:text-base font-bold max-w-2xl mx-auto">
            اختر بطلك المفضل وتعرف على أسلحته القتالية، مهاراته الشهيرة، وطريقة السيطرة به في ساحات الـ PK
          </p>
        </div>

        {/* Horizontal Tab Selector (Clean Chips, Symmetrical & Tight Gap) */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center justify-start lg:justify-center gap-2 sm:gap-2.5 overflow-x-auto pb-3 pt-1 no-scrollbar px-1">
            {classesData.map((cls) => {
              const isActive = activeClass.id === cls.id;
              return (
                <button
                  key={cls.id}
                  onClick={() => setActiveClass(cls)}
                  className={`group relative px-3.5 py-2.5 rounded-2xl font-black text-xs sm:text-sm transition-all duration-200 flex items-center gap-2.5 shrink-0 cursor-pointer border backdrop-blur-xl ${
                    isActive
                      ? 'bg-[#121a2d] text-white border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.4)] scale-105 z-10'
                      : 'bg-[#070b16]/95 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700 hover:bg-[#0c1222]'
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
                    className={`w-7 h-7 rounded-xl overflow-hidden border shrink-0 transition-transform ${
                      isActive ? 'border-amber-300 shadow-md scale-105' : 'border-slate-700 opacity-75 group-hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={cls.avatarImg}
                      alt={cls.name}
                      width={28}
                      height={28}
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

        {/* Hero Showcase Main Stage Card (Balanced, Symmetrical & Fully Filled) */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#070b16]/95 border border-slate-800/90 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.85)] grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-stretch relative overflow-hidden">

          {/* Ambient Glows */}
          <div
            className="absolute -top-28 -right-28 w-72 h-72 blur-[100px] pointer-events-none opacity-25"
            style={{ backgroundColor: activeClass.accentColor }}
          ></div>

          {/* Right Side (RTL): Character Visual Display Stage */}
          <div className="lg:col-span-5 relative flex flex-col justify-between">

            {/* Hero Stage Arena Backdrop */}
            <div className="relative w-full h-[360px] sm:h-[420px] lg:h-full min-h-[380px] rounded-2xl border border-slate-800/90 bg-gradient-to-b from-[#0a0e1e] via-[#050812] to-[#02040a] shadow-[inset_0_0_50px_rgba(0,0,0,0.95)] overflow-hidden flex items-center justify-center group">

              {/* Pedestal Ground Lighting */}
              <div
                className="absolute bottom-4 w-3/4 h-8 rounded-full opacity-40 blur-xl pointer-events-none transition-all duration-700"
                style={{ backgroundColor: activeClass.accentColor }}
              ></div>

              {/* Character Render Model */}
              <div className="relative w-full h-full p-2 flex items-center justify-center z-10">
                <Image
                  key={activeClass.id}
                  src={activeClass.modelRender}
                  alt={activeClass.name}
                  fill
                  className="object-contain p-2 filter drop-shadow-[0_12px_25px_rgba(0,0,0,0.95)] transform group-hover:scale-105 transition-all duration-700"
                  priority
                />
              </div>

              {/* Top Right Class Tag Badge */}
              <div className="absolute top-2.5 right-2.5 px-3 py-1 rounded-full bg-[#050811]/90 border border-slate-700/80 text-white font-black text-xs flex items-center gap-1.5 backdrop-blur-md z-20 shadow-lg">
                <ClassIcon className="w-3.5 h-3.5" style={{ color: activeClass.accentColor }} />
                <span dir="ltr" className="font-sans font-black">{activeClass.englishName}</span>
              </div>

              {/* Bottom In-Game Portrait Avatar Bar */}
              <div className="absolute bottom-2.5 inset-x-2.5 p-2 rounded-xl bg-[#060a15]/95 border border-slate-800/90 backdrop-blur-md flex items-center justify-between z-20 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg overflow-hidden border border-amber-400 shrink-0">
                    <Image
                      src={activeClass.portraitImg}
                      alt={activeClass.name}
                      width={32}
                      height={32}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="text-right">
                    <h4 className="text-xs font-black text-white">{activeClass.name}</h4>
                    <span className="text-[9.5px] font-bold text-amber-400">مجسم رسمي أصلي</span>
                  </div>
                </div>

                <div dir="ltr" className={`px-2 py-0.5 rounded-lg text-[10px] font-black border font-sans ${activeClass.badge}`}>
                  EQUINOX VS
                </div>
              </div>

            </div>

            {/* Quick Combat Info Bar Below Arena */}
            <div className="mt-2.5 grid grid-cols-2 gap-2 text-right">
              <div className="p-2 rounded-xl bg-[#060914] border border-slate-800/90">
                <span className="text-[10px] font-bold text-slate-400 block">السلاح المعتمد:</span>
                <span className="text-xs font-black text-amber-300 truncate block mt-0.5">{activeClass.weapon}</span>
              </div>
              <div className="p-2 rounded-xl bg-[#060914] border border-slate-800/90">
                <span className="text-[10px] font-bold text-slate-400 block">نمط الاشتباك:</span>
                <span className="text-xs font-black text-cyan-300 truncate block mt-0.5">{activeClass.attackType}</span>
              </div>
            </div>

          </div>

          {/* Left Side (RTL): Hero Lore, Skills & Combat Stats */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-3.5 text-right">

            {/* Header & Role */}
            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="p-2 rounded-xl bg-[#0d1322] border border-slate-700/80 shadow-md shrink-0">
                  <ClassIcon className="w-5 h-5" style={{ color: activeClass.accentColor }} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight">{activeClass.name}</h3>
                  <span dir="ltr" className="text-xs font-black text-amber-400 tracking-wider font-sans block">
                    {activeClass.englishName} • {activeClass.role}
                  </span>
                </div>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                {activeClass.desc}
              </p>
            </div>

            {/* Signature Skills (Clean 3-Item Stack - Fully Legible & Balanced) */}
            <div className="p-3 rounded-2xl bg-[#050812] border border-slate-800/90 space-y-1.5">
              <h4 className="text-xs font-black text-cyan-400 flex items-center gap-1.5 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>أشهر مهارات البطل القتالية:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {activeClass.skills.map((sk, i) => (
                  <div key={i} className="p-2 rounded-xl bg-[#0a0f1e] border border-slate-800/80">
                    <div className="text-xs font-black text-white mb-0.5 truncate">{sk.name}</div>
                    <div className="text-[10px] text-slate-400 leading-snug">{sk.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Combat Statistics meters */}
            <div className="p-3 rounded-2xl bg-[#040711] border border-slate-800/90 space-y-2 shadow-inner">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">

                <div>
                  <div className="flex justify-between text-[11px] font-black mb-0.5">
                    <span className="text-slate-300">القوة الهجومية (Attack)</span>
                    <span dir="ltr" className="text-orange-400 font-sans">{activeClass.stats.attack}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[#0d1322] overflow-hidden p-0.5 border border-slate-800">
                    <div
                      className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full transition-all duration-500"
                      style={{ width: `${activeClass.stats.attack}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] font-black mb-0.5">
                    <span className="text-slate-300">الصلابة والدفاع (Defense)</span>
                    <span dir="ltr" className="text-cyan-400 font-sans">{activeClass.stats.defense}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[#0d1322] overflow-hidden p-0.5 border border-slate-800">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 to-sky-500 rounded-full transition-all duration-500"
                      style={{ width: `${activeClass.stats.defense}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] font-black mb-0.5">
                    <span className="text-slate-300">السرعة والمناورة (Speed)</span>
                    <span dir="ltr" className="text-emerald-400 font-sans">{activeClass.stats.speed}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[#0d1322] overflow-hidden p-0.5 border border-slate-800">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full transition-all duration-500"
                      style={{ width: `${activeClass.stats.speed}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] font-black mb-0.5">
                    <span className="text-slate-300">صعوبة الاحتراف (Difficulty)</span>
                    <span dir="ltr" className="text-purple-400 font-sans">{activeClass.stats.difficulty}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[#0d1322] overflow-hidden p-0.5 border border-slate-800">
                    <div
                      className="h-full bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full transition-all duration-500"
                      style={{ width: `${activeClass.stats.difficulty}%` }}
                    ></div>
                  </div>
                </div>

              </div>
            </div>

            {/* Combat Pro-Tip for Gamers (Anchoring Bottom Edge) */}
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs font-bold flex items-start gap-2">
              <span className="text-sm leading-none shrink-0">💡</span>
              <p className="leading-relaxed text-[11px] sm:text-xs">
                <strong className="text-amber-300 font-black">نصيحة المعركة: </strong>
                {activeClass.proTip}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
