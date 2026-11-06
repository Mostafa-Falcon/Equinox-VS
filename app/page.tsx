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
import { Download, UserPlus, ShieldCheck, LogIn, Swords, Gift, Target } from 'lucide-react';

export default function Home() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const downloadUrl = "http://13.140.221.40:9528/Equinox_VS_13.140.221.40.apk";

  return (
    <main className="min-h-screen bg-[#050811] text-slate-100 selection:bg-cyan-500 selection:text-black font-sans dir-rtl overflow-x-hidden">

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
      <section id="download" className="py-12 sm:py-16 lg:py-20 bg-[#050811] relative text-center overflow-hidden">

        {/* Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[200px] sm:h-[300px] bg-gradient-to-r from-cyan-500/15 to-orange-500/15 blur-[100px] sm:blur-[120px] pointer-events-none rounded-full"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">
          <div className="p-5 sm:p-10 lg:p-14 rounded-3xl bg-[#0e1424]/90 border border-slate-800 shadow-2xl backdrop-blur-2xl relative overflow-hidden text-center">

            {/* Top Badge */}
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-extrabold text-[10px] sm:text-xs uppercase tracking-widest mb-3 sm:mb-4">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> DOWNLOAD EQUINOX VS APK (v106)
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4 tracking-tight">
              جاهز لتخوض أعتى ملحمة قتالية أونلاين؟
            </h2>

            <p className="text-slate-300 mb-6 sm:mb-8 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-semibold">
              حمل اللعبة الآن مجاناً على هاتفك الأندرويد، استلم عتاد البداية <span className="text-cyan-400 font-bold">+8 مجاناً بالحقيبة</span> (مع إمكانية الترقية لـ <span className="text-amber-400 font-bold">+12</span>) وصندوق الهدايا وانطلق في القتال!
            </p>

            {/* Feature Bullets inside Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 max-w-3xl mx-auto mb-6 sm:mb-8 text-xs font-extrabold text-slate-300">
              <div className="p-2.5 sm:p-3 rounded-2xl bg-[#070b14]/80 border border-slate-800 flex items-center justify-center gap-2">
                <Swords className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>عتاد +8 مجاني بالحقيبة (ترقية +12)</span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-2xl bg-[#070b14]/80 border border-slate-800 flex items-center justify-center gap-2">
                <Target className="w-4 h-4 text-orange-400 shrink-0" />
                <span>5 CPs حرة مجاناً لقتلك 10 وحوش</span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-2xl bg-[#070b14]/80 border border-slate-800 flex items-center justify-center gap-2">
                <Gift className="w-4 h-4 text-amber-400 shrink-0" />
                <span>صندوق الهدايا الترحيبي بالحقيبة</span>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto">
              <a
                href={downloadUrl}
                download
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-black text-sm sm:text-base shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:shadow-[0_0_45px_rgba(0,240,255,0.7)] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 border border-white/30"
              >
                <Download className="w-5 h-5 text-white" />
                <span>تحميل رابط مباشر APK (312 MB)</span>
              </a>

              <button
                onClick={() => setIsRegisterOpen(true)}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 text-white font-black text-sm sm:text-base shadow-[0_0_30px_rgba(255,69,0,0.3)] hover:shadow-[0_0_45px_rgba(255,69,0,0.6)] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 border border-white/30 cursor-pointer"
              >
                <UserPlus className="w-5 h-5 text-white" />
                <span>إنشاء حساب مجاني</span>
              </button>

              <button
                onClick={() => setIsLoginOpen(true)}
                className="w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl bg-[#0c1222] border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 font-black text-sm sm:text-base shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <LogIn className="w-5 h-5 text-cyan-400" />
                <span>عرض حسابي</span>
              </button>
            </div>

            <div className="mt-5 sm:mt-6 text-[10px] sm:text-xs text-slate-400 font-bold flex flex-wrap items-center justify-center gap-2 sm:gap-4">
              <span>✓ متوافق مع جميع هواتف الأندرويد</span>
              <span>•</span>
              <span>✓ إصدار العميل: 106</span>
              <span>•</span>
              <span>✓ خالي من الفيروسات 100%</span>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

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
