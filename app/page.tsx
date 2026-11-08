'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ClassesShowcase from '@/components/ClassesShowcase';
import GameGallery from '@/components/GameGallery';
import GameSystems from '@/components/GameSystems';
import GameGuide from '@/components/GameGuide';
import RegisterModal from '@/components/RegisterModal';
import LoginModal from '@/components/LoginModal';
import Footer from '@/components/Footer';
import { Download, UserPlus, ShieldCheck, LogIn, Swords, Gift, Target, Sparkles, Zap } from 'lucide-react';
import { DOWNLOAD_APK_URL } from '@/lib/constants';

export default function Home() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const downloadUrl = DOWNLOAD_APK_URL;

  return (
    <main className="min-h-screen bg-[#050811] text-slate-100 selection:bg-cyan-500 selection:text-black font-sans dir-rtl overflow-x-hidden pb-16 sm:pb-0">

      {/* Navbar */}
      <Navbar
        onOpenRegister={() => setIsRegisterOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onOpenRegister={() => setIsRegisterOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
      />

      {/* Game Features Section */}
      <Features />

      {/* In-Game Screenshots Visual Showcase Gallery */}
      <GameGallery />

      {/* Classes Showcase with 3D Models & Avatars */}
      <ClassesShowcase />

      {/* Game World Cities & Combat Systems Section */}
      <GameSystems />

      {/* Step by Step Game Guide */}
      <GameGuide onOpenRegister={() => setIsRegisterOpen(true)} />

      {/* Dedicated Player Download Banner */}
      <section id="download" className="py-14 sm:py-20 lg:py-24 bg-[#030611] relative text-center overflow-hidden select-none border-t border-slate-800/40">

        {/* Dynamic Background Atmospheric Radiance */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[450px] sm:w-[650px] h-[350px] bg-cyan-500/15 blur-[140px] pointer-events-none rounded-full"></div>
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[450px] sm:w-[650px] h-[350px] bg-orange-500/15 blur-[140px] pointer-events-none rounded-full"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.06)_0%,transparent_70%)] pointer-events-none"></div>

        <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">
          <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-b from-[#0b1020]/98 via-[#070b16]/98 to-[#030611]/98 border border-cyan-500/30 shadow-[0_0_60px_rgba(0,240,255,0.15)] backdrop-blur-2xl relative overflow-hidden text-center">

            {/* Glowing Accent Lines */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent"></div>
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/80 to-transparent"></div>

            {/* Top Gaming Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 font-black text-xs uppercase tracking-wider mb-4 shadow-md">
              <Swords className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>انضم لأبطال المعركة وابدأ القتال فوراً</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight leading-tight">
              جاهز لتخوض أعتى ملحمة قتالية أونلاين؟
            </h2>

            <p className="text-slate-200 mb-8 sm:mb-10 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed font-bold">
              حمل اللعبة الآن مجاناً على هاتفك، استلم طقم عتاد كامل <span dir="ltr" className="text-cyan-400 font-black">+8</span> بالشنطة (قابل للترقية لـ <span dir="ltr" className="text-amber-400 font-black">+12</span>)، صندوق الهدايا الأسطوري اليومي، وانطلق في معارك الـ PK وحروب القلعة!
            </p>

            {/* Feature Bullets inside Banner (Conquer Gamer Rewards) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto mb-8 sm:mb-10 text-xs sm:text-sm font-bold text-slate-200">
              <div className="p-4 rounded-2xl bg-[#060a15]/95 border border-cyan-500/30 flex flex-col items-center justify-center gap-2 text-center shadow-lg hover:border-cyan-400 transition-all">
                <Swords className="w-6 h-6 text-cyan-400" />
                <span className="font-black text-white">طقم +8 كامل بالشنطة</span>
                <span className="text-[11px] text-cyan-300 font-semibold">جاهز للترقية المباشرة لـ +12</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#060a15]/95 border border-orange-500/30 flex flex-col items-center justify-center gap-2 text-center shadow-lg hover:border-orange-400 transition-all">
                <Target className="w-6 h-6 text-orange-400" />
                <span className="font-black text-white">5 CPs حرة لكل 10 وحوش</span>
                <span className="text-[11px] text-orange-300 font-semibold">تجميع رصيد وسيبسات بدون شحن</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#060a15]/95 border border-amber-500/30 flex flex-col items-center justify-center gap-2 text-center shadow-lg hover:border-amber-400 transition-all">
                <Gift className="w-6 h-6 text-amber-400" />
                <span className="font-black text-white">صندوق الهدايا الترحيبي</span>
                <span className="text-[11px] text-amber-300 font-semibold">أحجار ترقية Stone +5 وجواهر</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#060a15]/95 border border-emerald-500/30 flex flex-col items-center justify-center gap-2 text-center shadow-lg hover:border-emerald-400 transition-all">
                <Zap className="w-6 h-6 text-emerald-400" />
                <span className="font-black text-white">سيرفر مباشر أونلاين 24/7</span>
                <span className="text-[11px] text-emerald-300 font-semibold">استقرار فائق وحركة سلسة 60FPS</span>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-2xl mx-auto">
              <a
                href={downloadUrl}
                download="Equinox_VS.apk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-black text-base shadow-[0_0_35px_rgba(0,240,255,0.45)] hover:shadow-[0_0_50px_rgba(0,240,255,0.75)] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 border border-white/30 cursor-pointer active:scale-98"
              >
                <Download className="w-6 h-6 text-white shrink-0" />
                <div className="flex flex-col text-right leading-tight">
                  <span className="text-base font-black">تحميل رابط مباشر APK</span>
                  <span className="text-[11px] text-cyan-100 font-medium mt-0.5">315 MB • تحميل فوري لجميع هواتف الأندرويد</span>
                </div>
              </a>

              <button
                onClick={() => setIsRegisterOpen(true)}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 text-white font-black text-base shadow-[0_0_30px_rgba(255,69,0,0.4)] hover:shadow-[0_0_45px_rgba(255,69,0,0.65)] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 border border-white/30 cursor-pointer active:scale-98"
              >
                <UserPlus className="w-5 h-5 text-white shrink-0" />
                <span>إنشاء حساب مجاني</span>
              </button>

              <button
                onClick={() => setIsLoginOpen(true)}
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-[#070b16] border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 font-black text-sm shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <LogIn className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>عرض شخصيتي</span>
              </button>
            </div>

            <div className="mt-8 text-xs sm:text-sm text-slate-300 font-bold flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-4 border-t border-slate-800/80">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> متوافق مع كافة هواتف الأندرويد</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-cyan-400" /> إصدار العميل الرسمي v106</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5"><Target className="w-4 h-4 text-amber-400" /> حجم التثبيت: 315 MB</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-orange-400" /> حفظ تلقائي مباشر للشخصيات</span>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Floating Action Bar */}
      <div className="fixed bottom-3 inset-x-3 sm:hidden z-40 bg-[#070b16]/95 backdrop-blur-2xl border border-cyan-500/40 rounded-2xl p-2 flex items-center justify-between gap-2 shadow-[0_10px_35px_rgba(0,0,0,0.95)]">
        <a
          href={downloadUrl}
          download="Equinox_VS.apk"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(0,240,255,0.4)] active:scale-95"
        >
          <Download className="w-4 h-4 text-white shrink-0" />
          <span>تحميل APK (315MB)</span>
        </a>

        <button
          onClick={() => setIsRegisterOpen(true)}
          className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(255,85,0,0.4)] active:scale-95 cursor-pointer"
        >
          <UserPlus className="w-4 h-4 text-white shrink-0" />
          <span>إنشاء حساب</span>
        </button>
      </div>

      {/* Registration Modal */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />

      {/* Player Account Login & Character Dashboard Modal */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </main>
  );
}
