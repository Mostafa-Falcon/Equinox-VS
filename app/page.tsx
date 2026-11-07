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

export default function Home() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const downloadUrl = "/Equinox_VS.apk";

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
      <section id="download" className="py-10 sm:py-16 lg:py-20 bg-[#050811] relative text-center overflow-hidden select-none">

        {/* Background Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] sm:w-[500px] h-[250px] bg-cyan-500/15 blur-[120px] pointer-events-none rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] sm:w-[500px] h-[250px] bg-orange-500/15 blur-[120px] pointer-events-none rounded-full"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">
          <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-b from-[#0c1222]/95 via-[#080d1a]/95 to-[#050811]/95 border border-cyan-500/30 shadow-[0_0_50px_rgba(0,240,255,0.12)] backdrop-blur-2xl relative overflow-hidden text-center">

            {/* Top Gaming Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-black text-xs uppercase tracking-wider mb-3.5 shadow-md">
              <Swords className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>انضم لأبطال المعركة وابدأ القتال فوراً</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white mb-3 tracking-tight">
              جاهز لتخوض أعتى ملحمة قتالية أونلاين؟
            </h2>

            <p className="text-slate-300 mb-6 sm:mb-7 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed font-semibold">
              حمل اللعبة الآن مجاناً على هاتفك، استلم طقم عتاد كامل <span dir="ltr" className="text-cyan-400 font-black">+8</span> بالشنطة (قابل للترقية لـ <span dir="ltr" className="text-amber-400 font-black">+12</span>)، صندوق الهدايا اليومي، وانطلق في معارك الـ PK!
            </p>

            {/* Feature Bullets inside Banner (Conquer Gamer Rewards) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-4xl mx-auto mb-6 sm:mb-8 text-xs font-bold text-slate-300">
              <div className="p-3 rounded-2xl bg-[#070b14]/90 border border-slate-800 flex flex-col items-center justify-center gap-1.5 text-center">
                <Swords className="w-5 h-5 text-cyan-400" />
                <span>طقم +8 بالشنطة (ترقية +12)</span>
              </div>
              <div className="p-3 rounded-2xl bg-[#070b14]/90 border border-slate-800 flex flex-col items-center justify-center gap-1.5 text-center">
                <Target className="w-5 h-5 text-orange-400" />
                <span>5 CPs حرة لكل 10 وحوش</span>
              </div>
              <div className="p-3 rounded-2xl bg-[#070b14]/90 border border-slate-800 flex flex-col items-center justify-center gap-1.5 text-center">
                <Gift className="w-5 h-5 text-amber-400" />
                <span>صندوق الهدايا وأحجار +5</span>
              </div>
              <div className="p-3 rounded-2xl bg-[#070b14]/90 border border-slate-800 flex flex-col items-center justify-center gap-1.5 text-center">
                <Zap className="w-5 h-5 text-emerald-400" />
                <span>سيرفر 24 ساعة بدون لاج</span>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
              <a
                href={downloadUrl}
                download="Equinox_VS.apk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-black text-sm sm:text-base shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_40px_rgba(0,240,255,0.7)] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 border border-white/30 cursor-pointer"
              >
                <Download className="w-5 h-5 text-white" />
                <div className="flex flex-col text-right leading-none">
                  <span>تحميل رابط مباشر APK</span>
                  <span className="text-[10px] text-cyan-100 font-medium mt-0.5">315 MB • تحميل فوري لجميع الهواتف</span>
                </div>
              </a>

              <button
                onClick={() => setIsRegisterOpen(true)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 text-white font-black text-sm sm:text-base shadow-[0_0_25px_rgba(255,69,0,0.35)] hover:shadow-[0_0_35px_rgba(255,69,0,0.6)] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 border border-white/30 cursor-pointer"
              >
                <UserPlus className="w-5 h-5 text-white" />
                <span>إنشاء حساب مجاني</span>
              </button>

              <button
                onClick={() => setIsLoginOpen(true)}
                className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-[#0c1222] border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 font-black text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <LogIn className="w-4 h-4 text-cyan-400" />
                <span>عرض شخصيتي</span>
              </button>
            </div>

            <div className="mt-5 text-xs text-slate-400 font-bold flex flex-wrap items-center justify-center gap-2 sm:gap-4">
              <span>✓ متوافق مع كافة هواتف الأندرويد</span>
              <span>•</span>
              <span>✓ إصدار العميل الرسمي</span>
              <span>•</span>
              <span>✓ حجم التثبيت: 315 MB</span>
              <span>•</span>
              <span>✓ حفظ تلقائي للشخصيات</span>
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
