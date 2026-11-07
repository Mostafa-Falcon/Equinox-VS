'use client';

import React from 'react';
import { Download, UserPlus, LogIn, Swords, Sparkles, Trophy, Zap, Target, ShieldCheck, Activity, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeroProps {
  onOpenRegister: () => void;
  onOpenLogin: () => void;
}

export default function Hero({ onOpenRegister, onOpenLogin }: HeroProps) {
  const downloadUrl = "/Equinox_VS_13.140.221.40.apk";

  return (
    <section id="home" className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 lg:pt-36 lg:pb-28 bg-[#030611] overflow-hidden min-h-[90vh] flex items-center select-none">

      {/* High-Res Background Image */}
      <div className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity">
        <img
          src="/hero-bg.jpeg"
          alt="Equinox VS Conquer Wallpaper"
          className="w-full h-full object-cover object-center filter saturate-150 contrast-125 scale-105 transform animate-pulse"
          style={{ animationDuration: '10s' }}
        />
      </div>

      {/* Dynamic Glow Orbs */}
      <div className="absolute top-1/4 -right-28 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-cyan-500/20 blur-[120px] sm:blur-[180px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-1/4 -left-28 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-orange-500/20 blur-[120px] sm:blur-[180px] rounded-full pointer-events-none z-0"></div>

      {/* Dark Vignette Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030611]/95 via-[#030611]/85 to-[#030611] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right w-full">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Right Column (Text & Main Conversion CTAs) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-7">

            {/* Top Server & Version Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080d1c]/90 border border-cyan-500/40 text-cyan-300 font-black text-xs sm:text-sm shadow-[0_0_25px_rgba(0,240,255,0.25)] backdrop-blur-2xl">
                <Sparkles className="w-4 h-4 text-amber-400 animate-spin shrink-0" style={{ animationDuration: '4s' }} />
                <span>
                  سيرفر المعارك الرسمي لـ <span dir="ltr" className="inline-block text-amber-300 font-black font-sans">Conquer Mobile (v106)</span>
                </span>
              </div>

              {/* Live Server Status Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-extrabold text-[11px] sm:text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>سيرفر مباشر أونلاين 24/7</span>
              </div>
            </div>

            {/* Main Brand Title - Explicit LTR Typography */}
            <div className="block">
              <div dir="ltr" className="inline-flex items-center gap-2.5 sm:gap-4 text-4xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none font-sans">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 filter drop-shadow-[0_0_35px_rgba(0,240,255,0.6)]">
                  EQUINOX
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-red-600 filter drop-shadow-[0_0_35px_rgba(255,69,0,0.6)]">
                  VS
                </span>
              </div>
            </div>

            {/* Subtitle & Value Proposition */}
            <p className="text-sm sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-bold max-w-2xl">
              ادخل المعركة الآن واستلم طقم عتاد كامل <span className="text-cyan-400 font-black" dir="ltr">+8</span> مجاناً بالحقيبة (مع إمكانية الترقية والصقل لـ <span className="text-amber-400 font-black" dir="ltr">+12</span>)، صندوق الهدايا الأسطوري، ومكافأة قتال الوحوش التلقائية (<span dir="ltr" className="inline-block text-orange-400 font-black font-sans">10 Kills = 5 CPs</span> حرة بدون شحن)!
            </p>

            {/* High-Impact Primary Actions */}
            <div className="space-y-3.5 pt-1 max-w-xl">

              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">

                {/* Primary APK Direct Download CTA */}
                <a
                  href={downloadUrl}
                  download="Equinox_VS_13.140.221.40.apk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:shadow-[0_0_45px_rgba(0,240,255,0.7)] text-white font-black text-sm sm:text-base transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 border border-white/30 cursor-pointer group shadow-2xl active:scale-98"
                >
                  <Download className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:animate-bounce shrink-0" />
                  <div className="flex flex-col text-right leading-none">
                    <span className="text-sm sm:text-base font-black">تحميل اللعبة APK (مباشر)</span>
                    <span className="text-[10px] sm:text-[11px] text-cyan-200 font-semibold mt-1">315 MB • إصدار v106 الرسمي الكامل</span>
                  </div>
                </a>

                {/* Register Account Button */}
                <button
                  onClick={onOpenRegister}
                  className="w-full sm:w-auto flex-1 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 hover:shadow-[0_0_40px_rgba(255,69,0,0.6)] text-white font-black text-sm sm:text-base transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 border border-white/30 cursor-pointer shadow-2xl active:scale-98"
                >
                  <UserPlus className="w-5 h-5 text-white shrink-0" />
                  <span>إنشاء حساب مجاني</span>
                </button>

              </div>

              {/* Login & Fast Info Row */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs font-bold text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span>لديك حساب بالفعل؟</span>
                  <button
                    onClick={onOpenLogin}
                    className="text-cyan-400 hover:text-cyan-300 font-extrabold underline underline-offset-4 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <LogIn className="w-3.5 h-3.5" />
                    <span>تسجيل الدخول وعرض شخصياتك</span>
                  </button>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>حماية كاملة للبيانات وحفظ التقدم</span>
                </div>
              </div>

            </div>

            {/* Highlights Feature Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 pt-4 border-t border-slate-800/80">
              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#070b16]/90 border border-cyan-500/30 backdrop-blur-xl">
                <div className="flex items-center gap-1.5 text-cyan-300 font-black text-xs sm:text-sm">
                  <Swords className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span dir="ltr" className="font-sans">+8 Starter</span>
                </div>
                <div className="text-[10px] sm:text-xs text-slate-300 font-bold mt-1 leading-snug">
                  طقم +8 مجاني بالحقيبة قابل للترقية لـ +12
                </div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#070b16]/90 border border-orange-500/30 backdrop-blur-xl">
                <div className="flex items-center gap-1.5 text-orange-400 font-black text-xs sm:text-sm">
                  <Target className="w-4 h-4 text-orange-400 shrink-0" />
                  <span dir="ltr" className="font-sans">10 Kills</span>
                </div>
                <div className="text-[10px] sm:text-xs text-slate-300 font-bold mt-1 leading-snug">
                  5 CPs حرة مجاناً عند قتل كل 10 وحوش
                </div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#070b16]/90 border border-amber-500/30 backdrop-blur-xl">
                <div className="flex items-center gap-1.5 text-amber-300 font-black text-xs sm:text-sm">
                  <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                  <span dir="ltr" className="font-sans">10 Classes</span>
                </div>
                <div className="text-[10px] sm:text-xs text-slate-300 font-bold mt-1 leading-snug">
                  توازن كامل وفصل دقيق لمهارات الشخصيات
                </div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#070b16]/90 border border-emerald-500/30 backdrop-blur-xl">
                <div className="flex items-center gap-1.5 text-emerald-300 font-black text-xs sm:text-sm">
                  <Trophy className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span dir="ltr" className="font-sans">Guild War</span>
                </div>
                <div className="text-[10px] sm:text-xs text-slate-300 font-bold mt-1 leading-snug">
                  حروب القلعة اليومية ومبارزات الحلبة المباشرة
                </div>
              </div>
            </div>

          </div>

          {/* Left Column: Custom Branded Live Game Preview Frame */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">

            <div className="p-2.5 sm:p-3.5 rounded-3xl bg-gradient-to-b from-cyan-500/30 via-slate-800 to-orange-500/30 border border-cyan-500/40 shadow-[0_0_50px_rgba(0,240,255,0.25)] backdrop-blur-2xl relative overflow-hidden group">

              {/* Game Screenshot Container */}
              <div className="relative h-[260px] sm:h-[350px] lg:h-[420px] w-full rounded-2xl overflow-hidden bg-black">
                <img
                  src="/img/ingame.jpg"
                  alt="Equinox VS In-Game Combat"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter saturate-110 contrast-105 opacity-90"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#030611] via-transparent to-black/50"></div>

                {/* Top Badge: Server Specs */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-3 py-1.5 rounded-full bg-[#030611]/95 border border-cyan-400/60 text-cyan-300 font-black text-[11px] sm:text-xs flex items-center gap-2 shadow-2xl backdrop-blur-md z-10">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span dir="ltr" className="tracking-wider font-sans font-bold">EQUINOX VS (v106)</span>
                </div>

                {/* Top Left Speed Chip */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 py-1 rounded-full bg-[#030611]/90 border border-amber-400/50 text-amber-300 font-black text-[10px] sm:text-[11px] flex items-center gap-1.5 backdrop-blur-md z-10 font-sans">
                  <Activity className="w-3 h-3 text-emerald-400" />
                  <span>60 FPS SMOOTH</span>
                </div>

                {/* Overlay Badge Details */}
                <div className="absolute bottom-3 right-3 left-3 sm:bottom-4 sm:right-4 sm:left-4 p-3 sm:p-4 rounded-2xl bg-[#060a14]/95 border border-slate-700 backdrop-blur-md z-10">
                  <div className="text-white font-black text-xs sm:text-sm mb-1 flex items-center justify-between">
                    <span className="text-cyan-300">عالم المعارك المباشرة وحروب القلعة</span>
                    <span dir="ltr" className="text-amber-400 font-black font-sans text-xs">IP: 13.140.221.40</span>
                  </div>
                  <p className="text-slate-300 text-[11px] sm:text-xs font-medium leading-relaxed">
                    محرك فائق السرعة مبني بلغة Rust وقاعدة بيانات SQL، حركة سلسة بدون تقطيع، وأمان كامل للحسابات.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
