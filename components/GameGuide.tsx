'use client';

import React from 'react';
import { Download, UserPlus, CheckCircle2, Sparkles } from 'lucide-react';

interface GameGuideProps {
  onOpenRegister: () => void;
}

export default function GameGuide({ onOpenRegister }: GameGuideProps) {
  const downloadUrl = "http://13.140.221.40:9528/Equinox_VS_13.140.221.40.apk";

  return (
    <section id="guide" className="py-16 sm:py-22 bg-[#050811] relative overflow-hidden">

      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/10 blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-orange-500/10 blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">

        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0c1222] border border-cyan-500/30 text-cyan-400 text-xs font-extrabold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> QUICK START GUIDE
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            كيف تبدأ رحلتك في{' '}
            <span dir="ltr" className="inline-flex items-center gap-1.5 font-sans">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-orange-400">عالم EQUINOX</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">VS</span>
            </span>
          </h2>
          <p className="text-slate-400 mt-2.5 sm:mt-3 text-sm sm:text-lg max-w-2xl mx-auto font-medium">
            3 خطوات بسيطة وسريعة لتثبيت التطبيق وإنشاء حسابك واستلام العتاد فوراً
          </p>
        </div>

        {/* 3 Steps Balanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">

          {/* Step 1 (Right in RTL) */}
          <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#0e1424]/95 to-[#080c16]/95 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 shadow-2xl hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] h-full flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-black text-base sm:text-lg text-white shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                  1
                </div>
                <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  الخطوة الأولى
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white mb-2 sm:mb-2.5">تحميل ملف اللعبة APK</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 font-medium">
                حمل تطبيق اللعبة المباشر الإصدار <span dir="ltr" className="text-cyan-400 font-bold">106</span> برابط مباشر وسريع مخصص لجميع هواتف الأندرويد.
              </p>

              <ul className="space-y-2 mb-5 sm:mb-6 text-xs font-semibold text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                  تحميل سريع بنقرة واحدة (312 MB)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                  خالي من الفيروسات وآمن 100%
                </li>
              </ul>
            </div>

            <a
              href={downloadUrl}
              download
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all"
            >
              <Download className="w-4 h-4" />
              <span>تحميل ملف APK الآن</span>
            </a>
          </div>

          {/* Step 2 (Middle) */}
          <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#0e1424]/95 to-[#080c16]/95 backdrop-blur-xl border border-orange-500/30 hover:border-orange-400 transition-all duration-300 shadow-2xl hover:shadow-[0_0_30px_rgba(255,69,0,0.2)] h-full flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-orange-500 to-red-600 flex items-center justify-center font-black text-base sm:text-lg text-white shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform">
                  2
                </div>
                <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/30">
                  الخطوة الثانية
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white mb-2 sm:mb-2.5">إنشاء حسابك في ثوانٍ</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 font-medium">
                سجل حسابك مجاناً وبسرعة من نافذة التسجيل بالموقع لتتمكن من الدخول الفوري لعالم المعارك.
              </p>

              <ul className="space-y-2 mb-5 sm:mb-6 text-xs font-semibold text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0"></span>
                  تفعيل الحساب فوري بدون انتظار
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0"></span>
                  حماية تامة للبيانات والشخصيات
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenRegister}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 text-white font-black text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,69,0,0.3)] hover:shadow-[0_0_30px_rgba(255,69,0,0.6)] transition-all cursor-pointer"
            >
              <UserPlus className="w-4 h-4" />
              <span>تسجيل حساب مجاني</span>
            </button>
          </div>

          {/* Step 3 (Left in RTL) */}
          <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#0e1424]/95 to-[#080c16]/95 backdrop-blur-xl border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 shadow-2xl hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] h-full flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center font-black text-base sm:text-lg text-white shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform">
                  3
                </div>
                <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                  الخطوة الثالثة
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white mb-2 sm:mb-2.5">افتح حقيبتك واستلم عتادك</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 font-medium">
                سجل دخولك للعبة، افتح الحقيبة فوراً لتجد طقم عتاد <span dir="ltr" className="text-emerald-400 font-bold">+8 مجاني</span> (قابل للترقية لـ <span dir="ltr" className="text-amber-400 font-bold">+12</span>) وصندوق الهدايا!
              </p>

              <ul className="space-y-2 mb-5 sm:mb-6 text-xs font-semibold text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                  طقم عتاد +8 بالحقيبة قابل للتطوير والصقل
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                  أحجار +5 و CPs مجانية فورية
                </li>
              </ul>
            </div>

            <div className="w-full py-3 px-4 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-black text-xs flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>جاهز للانطلاق والتحدي!</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
