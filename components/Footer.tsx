'use client';

import React from 'react';
import { Download } from 'lucide-react';

export default function Footer() {
  const downloadUrl = "/Equinox_VS_13.140.221.40.apk";

  return (
    <footer className="py-10 sm:py-12 bg-[#04060d] border-t border-slate-800/80 text-slate-400 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand & Logo */}
        <div className="flex items-center gap-3.5">
          <img
            src="/logo-emblem.jpeg"
            alt="Equinox VS Emblem"
            className="w-10 h-10 rounded-full object-cover border border-cyan-400/50 shadow-md shrink-0"
          />
          <div className="text-right">
            <div dir="ltr" className="inline-flex items-center gap-1.5 text-lg font-black text-white font-sans">
              <span>EQUINOX</span>
              <span className="text-orange-500">VS</span>
            </div>
            <p className="text-xs text-slate-400">عالم القتال والأساطير لـ Conquer Mobile</p>
          </div>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-bold text-xs">
          <a href="#home" className="hover:text-cyan-400 transition-colors">الرئيسية</a>
          <a href="#game-features" className="hover:text-cyan-400 transition-colors">عالم اللعبة</a>
          <a href="#classes" className="hover:text-orange-400 transition-colors">الأبطال والمجسمات</a>
          <a href="#systems" className="hover:text-cyan-400 transition-colors">أنظمة القتال</a>
          <a href="#guide" className="hover:text-cyan-400 transition-colors">طريقة اللعب</a>
          <a href={downloadUrl} download="Equinox_VS_13.140.221.40.apk" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline flex items-center gap-1">
            <Download className="w-3.5 h-3.5" /> تحميل APK
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-center md:text-left font-semibold">
          <p>جميع الحقوق محفوظة © 2026 <strong className="text-white" dir="ltr">Equinox VS</strong></p>
        </div>

      </div>
    </footer>
  );
}
