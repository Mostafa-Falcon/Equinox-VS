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
import { Download, UserPlus, ShieldCheck, LogIn, Swords, Gift, Target, Sparkles, Activity } from 'lucide-react';

export default function Home() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const downloadUrl = "/Equinox_VS_13.140.221.40.apk";

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
      <ClassesShowcase onOpenRegister={() => setIsRegisterOpen(true)} />

      {/* Game World Cities & Combat Systems Section */}
      <GameSystems />

      {/* Step by Step Game Guide */}
      <GameGuide onOpenRegister={() => setIsRegisterOpen(true)} />

      {/* Dedicated Player Download Banner */}
      <section id="download" className="py-14 sm:py-20 lg:py-24 bg-[#050811] relative text-center overflow-hidden select-none">

        {/* Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[200px] sm:h-[300px] bg-gradient-to-r from-cyan-500/15 to-orange-500/15 blur-[100px] sm:blur-[140px] pointer-events-none rounded-full"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">
          <div className="p-6 sm:p-12 lg:p-16 rounded-3xl bg-[#0e1424]/90 border border-slate-800 shadow-2xl backdrop-blur-2xl relative overflow-hidden text-center">

            {/* Top Badge */}
            <span dir="ltr" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-extrabold text-[11px] sm:text-xs uppercase tracking-widest mb-4 font-sans">
              <ShieldCheck className="w-4 h-4 shrink-0 text-cyan-400" /> DOWNLOAD EQUINOX VS APK (v106)
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4 tracking-tight">
              جاهز لتخوض أعتى ملحمة قتالية أونلاين؟
            </h2>

            <p className="text-slate-300 mb-6 sm:mb-8 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-semibold">
              حمل اللعبة الآن مجاناً على هاتفك الأندرويد، استلم عتاد البداية <span dir="ltr" className="text-cyan-400 font-black">+8</span> مجاناً بالحقيبة (مع إمكانية الترقية لـ <span dir="ltr" className="text-amber-400 font-black">+12</span>) وصندوق الهدايا وانطلق في القتال!
            </p>

            {/* Feature Bullets inside Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto mb-6 sm:mb-8 text-xs sm:text-sm font-extrabold text-slate-300">
              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#070b14]/80 border border-slate-800 flex items-center justify-center gap-2">
                <Swords className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>طقم عتاد +8 بالحقيبة (ترقية +12)</span>
              </div>
              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#070b14]/80 border border-slate-800 flex items-center justify-center gap-2">
                <Target className="w-4 h-4 text-orange-400 shrink-0" />
                <span>5 CPs حرة مجاناً لقتلك 10 وحوش</span>
              </div>
              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#070b14]/80 border border-slate-800 flex items-center justify-center gap-2">
                <Gift className="w-4 h-4 text-amber-400 shrink-0" />
                <span>صندوق الهدايا الترحيبي بالحقيبة</span>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-xl mx-auto">
              <a
                href={downloadUrl}
                download="Equinox_VS_13.140.221.40.apk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-black text-sm sm:text-base shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:shadow-[0_0_45px_rgba(0,240,255,0.7)] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 border border-white/30 cursor-pointer"
              >
                <Download className="w-5 h-5 text-white" />
                <span>تحميل رابط مباشر APK (315 MB)</span>
              </a>

              <button
                onClick={() => setIsRegisterOpen(true)}
                className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 text-white font-black text-sm sm:text-base shadow-[0_0_30px_rgba(255,69,0,0.35)] hover:shadow-[0_0_45px_rgba(255,69,0,0.65)] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 border border-white/30 cursor-pointer"
              >
                <UserPlus className="w-5 h-5 text-white" />
                <span>إنشاء حساب مجاني</span>
              </button>

              <button
                onClick={() => setIsLoginOpen(true)}
                className="w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-2xl bg-[#0c1222] border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 font-black text-sm sm:text-base shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <LogIn className="w-5 h-5 text-cyan-400" />
                <span>عرض حسابي</span>
              </button>
            </div>

            <div className="mt-6 sm:mt-7 text-xs text-slate-400 font-bold flex flex-wrap items-center justify-center gap-2 sm:gap-4">
              <span>✓ متوافق مع جميع هواتف الأندرويد</span>
              <span>•</span>
              <span dir="ltr">✓ إصدار العميل: 106</span>
              <span>•</span>
              <span>✓ حجم التثبيت: 315 MB</span>
              <span>•</span>
              <span>✓ حماية وتشفير 100%</span>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Floating Action Bar (Visible only on mobile devices) */}
      <div className="fixed bottom-3 inset-x-3 sm:hidden z-40 bg-[#070b16]/95 backdrop-blur-2xl border border-cyan-500/40 rounded-2xl p-2 flex items-center justify-between gap-2 shadow-[0_10px_35px_rgba(0,0,0,0.95)]">
        <a
          href={downloadUrl}
          download="Equinox_VS_13.140.221.40.apk"
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
