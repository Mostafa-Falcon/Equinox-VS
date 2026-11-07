'use client';

import React from 'react';
import { Download, UserPlus, CheckCircle2, Sparkles } from 'lucide-react';

interface GameGuideProps {
  onOpenRegister: () => void;
}

export default function GameGuide({ onOpenRegister }: GameGuideProps) {
  const downloadUrl = "/Equinox_VS_13.140.221.40.apk";

  return (
    <section id="guide" className="py-10 sm:py-16 lg:py-20 bg-[#050811] relative overflow-hidden select-none">

      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/10 blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-orange-500/10 blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">

        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0c1222] border border-cyan-500/30 text-cyan-400 text-xs font-black mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>3 خطوات سريعة للبدء واللعب</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            كيف تنضم وتبدأ رحلتك في{' '}
            <span dir="ltr" className="inline-flex items-center gap-1.5 font-sans">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-orange-400">عالم EQUINOX</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">VS</span>
            </span>
          </h2>
          <p className="text-slate-400 mt-2 text-xs sm:text-sm max-w-xl mx-auto font-bold">
            3 خطوات بسيطة وسريعة لتثبيت التطبيق، إنشاء حسابك، واستلام طقم الـ +8 فوراً
          </p>
        </div>

        {/* 3 Steps Balanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 items-stretch">

          {/* Step 1 (Right in RTL) */}
          <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-b from-[#0e1424]/95 to-[#080c16]/95 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(0,240,255,0.2)] h-full flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-black text-base text-white shadow-lg shadow-cyan-500/30 group-hover:scale-105 transition-transform">
                  1
                </div>
                <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  الخطوة الأولى
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-white mb-2">تحميل ملف اللعبة APK</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 font-medium">
                حمل تطبيق اللعبة المباشر برابط فائق السرعة مخصص لجميع هواتف الأندرويد.
              </p>

              <ul className="space-y-1.5 mb-5 text-xs font-semibold text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                  تحميل سريع بنقرة واحدة (315 MB)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                  تثبيت آمن ومباشر على هاتفك
                </li>
              </ul>
            </div>

            <a
              href={downloadUrl}
              download="Equinox_VS_13.140.221.40.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black text-xs flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>تحميل ملف APK الآن</span>
            </a>
          </div>

          {/* Step 2 (Middle) */}
          <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-b from-[#0e1424]/95 to-[#080c16]/95 backdrop-blur-xl border border-orange-500/30 hover:border-orange-400 transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(255,69,0,0.2)] h-full flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-orange-500 to-red-600 flex items-center justify-center font-black text-base text-white shadow-lg shadow-orange-500/30 group-hover:scale-105 transition-transform">
                  2
                </div>
                <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/30">
                  الخطوة الثانية
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-white mb-2">إنشاء حسابك في ثوانٍ</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 font-medium">
                سجل حسابك مجاناً وبسرعة من نافذة التسجيل بالموقع لتتمكن من الدخول الفوري لعالم المعارك.
              </p>

              <ul className="space-y-1.5 mb-5 text-xs font-semibold text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0"></span>
                  تفعيل فوري للحساب بدون انتظار
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0"></span>
                  حفظ تلقائي للعتاد ومقتنياتك
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenRegister}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 text-white font-black text-xs flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,69,0,0.3)] hover:shadow-[0_0_25px_rgba(255,69,0,0.5)] transition-all cursor-pointer"
            >
              <UserPlus className="w-4 h-4" />
              <span>تسجيل حساب مجاني</span>
            </button>
          </div>

          {/* Step 3 (Left in RTL) */}
          <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-b from-[#0e1424]/95 to-[#080c16]/95 backdrop-blur-xl border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] h-full flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center font-black text-base text-white shadow-lg shadow-emerald-500/30 group-hover:scale-105 transition-transform">
                  3
                </div>
                <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                  الخطوة الثالثة
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-white mb-2">افتح الشنطة واستلم عتادك</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 font-medium">
                سجل دخولك للعبة، افتح الشنطة فوراً لتجد طقم عتاد <span dir="ltr" className="text-emerald-400 font-bold">+8 مجاني</span> (قابل للترقية لـ <span dir="ltr" className="text-amber-400 font-bold">+12</span>) وصندوق الهدايا!
              </p>

              <ul className="space-y-1.5 mb-5 text-xs font-semibold text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                  طقم عتاد +8 كامل بالشنطة جاهز للقتال
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                  أحجار ترقية Stone +5 و CPs مجانية
                </li>
              </ul>
            </div>

            <div className="w-full py-2.5 px-4 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-black text-xs flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>جاهز للانطلاق والـ PK!</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
