'use client';

import React from 'react';
import { Download, UserPlus, LogIn, Swords, Sparkles, Trophy, Zap, Target, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeroProps {
  onOpenRegister: () => void;
  onOpenLogin: () => void;
}

export default function Hero({ onOpenRegister, onOpenLogin }: HeroProps) {
  const downloadUrl = "/Equinox_VS_13.140.221.40.apk";

  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-16 lg:pt-40 lg:pb-28 bg-[#030611] overflow-hidden min-h-[88vh] flex items-center select-none">

      {/* High-Res Background Image */}
      <div className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity">
        <img
          src="/hero-bg.jpeg"
          alt="Equinox VS Conquer Wallpaper"
          className="w-full h-full object-cover object-center filter saturate-150 contrast-125 scale-105 transform animate-pulse"
          style={{ animationDuration: '10s' }}
        />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/4 -right-32 w-[380px] sm:w-[600px] h-[380px] sm:h-[600px] bg-cyan-500/20 blur-[130px] sm:blur-[180px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-1/4 -left-32 w-[380px] sm:w-[600px] h-[380px] sm:h-[600px] bg-orange-500/20 blur-[130px] sm:blur-[180px] rounded-full pointer-events-none z-0"></div>

      {/* Dark Vignette Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030611]/95 via-[#030611]/85 to-[#030611] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right w-full">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Right Column (Text & Main Conversion CTAs) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">

            {/* Top Version Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#080d1c]/90 border border-cyan-500/40 text-cyan-300 font-black text-xs sm:text-sm shadow-[0_0_25px_rgba(0,240,255,0.25)] backdrop-blur-2xl">
              <Sparkles className="w-4 h-4 text-amber-400 animate-spin shrink-0" style={{ animationDuration: '4s' }} />
              <span>
                عالم القتال والأساطير لـ <span dir="ltr" className="inline-block text-amber-300 font-black font-sans">Conquer Mobile (v106)</span>
              </span>
            </div>

            {/* Main Title - Explicit LTR Brand Name */}
            <div className="block">
              <div dir="ltr" className="inline-flex items-center gap-3 sm:gap-4 text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none font-sans">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 filter drop-shadow-[0_0_35px_rgba(0,240,255,0.6)]">
                  EQUINOX
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-red-600 filter drop-shadow-[0_0_35px_rgba(255,69,0,0.6)]">
                  VS
                </span>
              </div>
            </div>

            {/* Gamer Subtitle Copywriting */}
            <p className="text-base sm:text-xl lg:text-2xl text-slate-200 leading-relaxed font-bold max-w-2xl">
              جاهز لتخوض أعتى معارك القتال والـ <bdi className="text-cyan-300 font-extrabold">PK</bdi>؟ انضم الآن واستلم عتاد مبتدئين <span className="text-cyan-400 font-black" dir="ltr">+8</span> مجاناً بالحقيبة (مع إمكانية الترقية لـ <span className="text-amber-400 font-black" dir="ltr">+12</span>)، صندوق الهدايا الأولي، ومكافأة قتال الوحوش (<span dir="ltr" className="inline-block text-orange-400 font-black font-sans">10 Kills = 5 CPs</span> حرة)!
            </p>

            {/* High-Impact Primary Actions (NO BUTTON REPETITION!) */}
            <div className="space-y-4 pt-1 max-w-xl">

              <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4">

                {/* Single Primary Download CTA */}
                <a
                  href={downloadUrl}
                  download="Equinox_VS_13.140.221.40.apk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 px-8 py-4 sm:py-4.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:shadow-[0_0_45px_rgba(0,240,255,0.7)] text-white font-black text-base sm:text-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 border border-white/30 cursor-pointer group shadow-2xl"
                >
                  <Download className="w-6 h-6 text-white group-hover:animate-bounce" />
                  <div className="flex flex-col text-right leading-none">
                    <span>تحميل اللعبة APK (مباشر)</span>
                    <span className="text-[10px] text-cyan-200 font-medium mt-1">312 MB • إصدار v106 الرسمي</span>
                  </div>
                </a>

                {/* Register Account Button */}
                <button
                  onClick={onOpenRegister}
                  className="w-full sm:w-auto flex-1 px-7 py-4 sm:py-4.5 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 hover:shadow-[0_0_40px_rgba(255,69,0,0.6)] text-white font-black text-base sm:text-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 border border-white/30 cursor-pointer shadow-2xl"
                >
                  <UserPlus className="w-5 h-5 text-white" />
                  <span>إنشاء حساب مجاني</span>
                </button>

              </div>

              {/* Existing Player Login Prompt */}
              <div className="flex items-center justify-start gap-2 pt-1 text-xs font-bold text-slate-400">
                <span>لديك حساب بالفعل؟</span>
                <button
                  onClick={onOpenLogin}
                  className="text-cyan-400 hover:text-cyan-300 font-extrabold underline underline-offset-4 flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>تسجيل الدخول وعرض حسابك</span>
                </button>
              </div>

            </div>

            {/* Highlights Feature Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-slate-800/80">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#070b16]/90 border border-cyan-500/30 backdrop-blur-xl">
                <div className="flex items-center gap-1.5 text-cyan-300 font-black text-sm sm:text-base">
                  <Swords className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span dir="ltr" className="font-sans">+8 Starter</span>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-bold mt-1 leading-snug">
                  عتاد +8 مجاني قابل للترقية لـ +12
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#070b16]/90 border border-orange-500/30 backdrop-blur-xl">
                <div className="flex items-center gap-1.5 text-orange-400 font-black text-sm sm:text-base">
                  <Target className="w-4 h-4 text-orange-400 shrink-0" />
                  <span dir="ltr" className="font-sans">10 Kills</span>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-bold mt-1 leading-snug">
                  5 CPs حرة مجاناً لقتلك الوحوش
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#070b16]/90 border border-amber-500/30 backdrop-blur-xl">
                <div className="flex items-center gap-1.5 text-amber-300 font-black text-sm sm:text-base">
                  <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                  <span dir="ltr" className="font-sans">10 Classes</span>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-bold mt-1 leading-snug">
                  أبطال ومجسمات قتالية رسمية
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#070b16]/90 border border-emerald-500/30 backdrop-blur-xl">
                <div className="flex items-center gap-1.5 text-emerald-300 font-black text-sm sm:text-base">
                  <Trophy className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span dir="ltr" className="font-sans">Guild War</span>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-bold mt-1 leading-snug">
                  حروب القلعة اليومية المباشرة
                </div>
              </div>
            </div>

          </div>

          {/* Left Column: Custom Branded Live Game Preview Frame */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">

            <div className="p-3 rounded-3xl bg-gradient-to-b from-cyan-500/30 via-slate-800 to-orange-500/30 border border-cyan-500/40 shadow-[0_0_50px_rgba(0,240,255,0.25)] backdrop-blur-2xl relative overflow-hidden group">

              {/* Game Screenshot Container */}
              <div className="relative h-[280px] sm:h-[360px] lg:h-[420px] w-full rounded-2xl overflow-hidden bg-black">
                <img
                  src="/img/ingame.jpg"
                  alt="Equinox VS In-Game Combat"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter saturate-110 contrast-105 opacity-90"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#030611] via-transparent to-black/40"></div>

                {/* Top Badge */}
                <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 px-3.5 py-1.5 rounded-full bg-[#030611]/95 border border-cyan-400/60 text-cyan-300 font-black text-xs flex items-center gap-2 shadow-2xl backdrop-blur-md z-10">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span dir="ltr" className="tracking-wider font-sans">EQUINOX VS SERVER (v106)</span>
                </div>

                {/* Overlay Badge Details */}
                <div className="absolute bottom-3.5 right-3.5 left-3.5 sm:bottom-4 sm:right-4 sm:left-4 p-3.5 sm:p-4 rounded-2xl bg-[#060a14]/95 border border-slate-700 backdrop-blur-md z-10">
                  <div className="text-white font-black text-xs sm:text-sm mb-1 flex items-center justify-between">
                    <span className="text-cyan-300">عالم المعارك المباشرة وحروب القلعة</span>
                    <span dir="ltr" className="text-amber-400 font-black font-sans">Equinox VS</span>
                  </div>
                  <p className="text-slate-300 text-xs font-medium leading-relaxed">
                    عتاد مبتدئين +8 بالحقيبة مع إمكانية التطوير والترقية في اللعبة، ومكافآت القتل المباشرة.
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
