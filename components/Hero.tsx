'use client';

import React from 'react';
import { Download, UserPlus, LogIn, Swords, Sparkles, Trophy, Zap, Target, Server } from 'lucide-react';

interface HeroProps {
  onOpenRegister: () => void;
  onOpenLogin: () => void;
}

export default function Hero({ onOpenRegister, onOpenLogin }: HeroProps) {
  const downloadUrl = "http://13.140.221.40:9528/Equinox_VS_13.140.221.40.apk";

  return (
    <section id="home" className="relative pt-28 sm:pt-32 pb-16 lg:pt-36 lg:pb-24 bg-[#050811] overflow-hidden min-h-[88vh] flex items-center">

      {/* High-Res Background Image */}
      <div className="absolute inset-0 z-0 opacity-35 mix-blend-luminosity">
        <img
          src="/hero-bg.jpeg"
          alt="Equinox VS Conquer Wallpaper"
          className="w-full h-full object-cover object-center filter saturate-150 contrast-125 scale-105 transform animate-pulse"
          style={{ animationDuration: '9s' }}
        />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/4 -right-32 w-[550px] h-[550px] bg-cyan-500/20 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-1/4 -left-32 w-[550px] h-[550px] bg-orange-500/20 blur-[150px] rounded-full pointer-events-none z-0"></div>

      {/* Dark Vignette Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050811]/95 via-[#050811]/80 to-[#050811] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Right Column (Text & CTAs in RTL) */}
          <div className="lg:col-span-7 space-y-6">

            {/* Top Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0d1322]/90 border border-cyan-500/40 text-cyan-300 font-extrabold text-xs sm:text-sm shadow-[0_0_20px_rgba(0,240,255,0.25)] backdrop-blur-xl">
              <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '4s' }} />
              <span>اصنع أسطورتك في عالم القتال والمغامرة لـ Conquer Mobile (v106)</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none font-sans">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 filter drop-shadow-[0_0_30px_rgba(0,240,255,0.6)]">
                EQUINOX
              </span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-red-600 filter drop-shadow-[0_0_30px_rgba(255,69,0,0.6)]">
                VS
              </span>
            </h1>

            {/* Subtitle / Gamer Copywriting */}
            <p className="text-lg sm:text-2xl text-slate-200 leading-relaxed font-semibold max-w-2xl">
              جاهز لتخوض أعتى معارك القتال والـ PK؟ انضم الآن واستلم عتاد مبتدئين <span className="text-cyan-400 font-extrabold">+8 مجاناً بالحقيبة</span> (مع إمكانية الترقية لـ <span className="text-amber-400 font-bold">+12</span>)، صندوق الهدايا الأولي، ومكافأة قتال الوحوش <span className="text-orange-400 font-extrabold">(10 Kills = 5 CPs حرة)</span>!
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 max-w-xl">
              <a
                href={downloadUrl}
                download
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-black text-base shadow-[0_0_30px_rgba(0,240,255,0.5)] hover:shadow-[0_0_45px_rgba(0,240,255,0.8)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 border border-white/30"
              >
                <Download className="w-5 h-5 text-white" />
                <span>تحميل اللعبة APK المباشر</span>
              </a>

              <button
                onClick={onOpenRegister}
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 text-white font-black text-base shadow-[0_0_30px_rgba(255,69,0,0.4)] hover:shadow-[0_0_45px_rgba(255,69,0,0.7)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 border border-white/30 cursor-pointer"
              >
                <UserPlus className="w-5 h-5 text-white" />
                <span>إنشاء حساب مجاني</span>
              </button>

              <button
                onClick={onOpenLogin}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#0c1222] border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 font-black text-base shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <LogIn className="w-5 h-5 text-cyan-400" />
                <span>عرض حسابي</span>
              </button>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5 border-t border-slate-800/80">
              <div className="p-3.5 rounded-2xl bg-[#0c1222]/90 border border-cyan-500/30 backdrop-blur-xl">
                <div className="flex items-center gap-1.5 text-cyan-300 font-black text-lg">
                  <Swords className="w-4 h-4 text-cyan-400" /> +8 Starter
                </div>
                <div className="text-[11px] text-slate-300 font-bold mt-1">عتاد +8 مجاني قابل للترقية لـ +12</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#0c1222]/90 border border-orange-500/30 backdrop-blur-xl">
                <div className="flex items-center gap-1.5 text-orange-400 font-black text-lg">
                  <Target className="w-4 h-4 text-orange-400" /> 10 Kills
                </div>
                <div className="text-[11px] text-slate-300 font-bold mt-1">5 CPs حرة مجاناً لقتلك الوحوش</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#0c1222]/90 border border-amber-500/30 backdrop-blur-xl">
                <div className="flex items-center gap-1.5 text-amber-300 font-black text-lg">
                  <Zap className="w-4 h-4 text-amber-400" /> 5 Classes
                </div>
                <div className="text-[11px] text-slate-300 font-bold mt-1">أبطال القتال والمهارات</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#0c1222]/90 border border-emerald-500/30 backdrop-blur-xl">
                <div className="flex items-center gap-1.5 text-emerald-300 font-black text-lg">
                  <Trophy className="w-4 h-4 text-emerald-400" /> Guild War
                </div>
                <div className="text-[11px] text-slate-300 font-bold mt-1">حروب القلعة اليومية</div>
              </div>
            </div>

          </div>

          {/* Left Column: Custom Branded Live Game Preview Frame */}
          <div className="lg:col-span-5 relative">

            <div className="p-3 rounded-3xl bg-gradient-to-b from-cyan-500/30 via-slate-800 to-orange-500/30 border border-cyan-500/40 shadow-[0_0_40px_rgba(0,240,255,0.25)] backdrop-blur-2xl relative overflow-hidden group">

              {/* Game Screenshot Container */}
              <div className="relative h-[340px] sm:h-[390px] w-full rounded-2xl overflow-hidden bg-black">
                <img
                  src="/img/ingame.jpg"
                  alt="Equinox VS In-Game Combat"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter saturate-110 contrast-105 opacity-90"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-black/40"></div>

                {/* Top Badge */}
                <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-[#050811]/95 border border-cyan-400/60 text-cyan-300 font-black text-xs flex items-center gap-2 shadow-2xl backdrop-blur-md z-10">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="tracking-wider">EQUINOX VS SERVER (v106)</span>
                </div>

                {/* Overlay Badge Details */}
                <div className="absolute bottom-4 right-4 left-4 p-3.5 rounded-2xl bg-[#070b14]/95 border border-slate-700 backdrop-blur-md z-10">
                  <div className="text-white font-black text-xs mb-1 flex items-center justify-between">
                    <span className="text-cyan-300">عالم المعارك المباشرة وحروب القلعة</span>
                    <span className="text-amber-400 font-extrabold">Equinox VS</span>
                  </div>
                  <p className="text-slate-300 text-[11px] font-medium">
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
